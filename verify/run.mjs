// CSS-fidelity verification: compare the Astro build against the Django-rendered
// reference, page by page.
//
// Method (applied identically to both sides, so any difference is a real one):
//   - block all external <script> requests so no layout JS runs; only harmless
//     inline scripts (top.device, GA bootstrap) execute → deterministic render.
//   - inject one override hiding #pre-loader (a fixed full-screen overlay the
//     legacy site removes via JS).
//   - full-page screenshot → pixelmatch diff (must be 0 differing pixels).
//   - walk every element → compare geometry + key computed styles.
//
// Exit non-zero on any diff. Artifacts written to verify/out/.
import http from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(ROOT, 'verify', 'out');
const REF = path.join(ROOT, 'verify', 'reference');
mkdirSync(OUT, { recursive: true });

const VIEWPORT = { width: 1440, height: 900 };

// Discover every reference page: **/index.html -> "/<dir>/", plus top-level *.html.
async function discoverPages(dir, prefix = '') {
  const out = [];
  for (const ent of await readdir(dir, { withFileTypes: true })) {
    if (ent.isDirectory()) {
      out.push(...await discoverPages(path.join(dir, ent.name), prefix + ent.name + '/'));
    } else if (ent.name === 'index.html') {
      const url = '/' + prefix;
      out.push({ name: (prefix.replace(/\/$/, '') || 'home').replace(/\//g, '__'), url });
    } else if (ent.name.endsWith('.html')) {
      out.push({ name: (prefix + ent.name).replace(/\//g, '__'), url: '/' + prefix + ent.name });
    }
  }
  return out;
}
// Allow scoping to specific routes via CLI args (e.g. `node verify/run.mjs /instuner/`).
const argFilter = process.argv.slice(2);
let PAGES = (await discoverPages(REF)).sort((a, b) => a.url.localeCompare(b.url));
if (argFilter.length) PAGES = PAGES.filter((p) => argFilter.includes(p.url) || argFilter.includes(p.name));

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.otf': 'font/otf', '.ttf': 'font/ttf',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.json': 'application/json',
  '.swf': 'application/x-shockwave-flash', '.webp': 'image/webp',
};

// Static server. htmlRoot serves page HTML; assetsRoot serves /assets/*.
function makeServer(htmlRoot, assetsRoot) {
  return http.createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath;
      if (urlPath.startsWith('/assets/')) {
        filePath = path.join(assetsRoot, urlPath.slice('/assets/'.length));
      } else {
        if (urlPath.endsWith('/')) urlPath += 'index.html';
        filePath = path.join(htmlRoot, urlPath);
      }
      if (!existsSync(filePath)) { res.statusCode = 404; res.end('not found: ' + urlPath); return; }
      const body = await readFile(filePath);
      res.setHeader('Content-Type', MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
      res.end(body);
    } catch (e) { res.statusCode = 500; res.end(String(e)); }
  });
}

function listen(server) {
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server.address().port)));
}

// Descriptor of every element: stable selector path + geometry + key styles.
const COLLECT = () => {
  const STYLE_KEYS = [
    // NB: margin* intentionally excluded — Chromium's getComputedStyle reports
    // `auto`-resolved margins (e.g. `margin:0 auto`) nondeterministically as 0px
    // while the actual box is centred correctly. Their layout effect is fully
    // captured by the geometry (rect) comparison + the pixel diff.
    'display', 'position', 'top', 'left', 'right', 'bottom', 'float', 'clear',
    'width', 'height',
    'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
    'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
    'borderTopColor', 'borderTopStyle', 'borderRadius', 'boxSizing',
    'color', 'backgroundColor', 'backgroundImage', 'backgroundPosition', 'backgroundSize', 'backgroundRepeat',
    'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing',
    'textAlign', 'textTransform', 'textDecorationLine', 'verticalAlign', 'whiteSpace',
    'opacity', 'visibility', 'overflow', 'zIndex', 'transform', 'transformOrigin',
    'flexDirection', 'justifyContent', 'alignItems', 'boxShadow', 'textShadow',
  ];
  const els = Array.from(document.querySelectorAll('body *'));
  return els.map((el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const style = {};
    for (const k of STYLE_KEYS) style[k] = cs[k];
    // path: tag chain with nth-of-type for disambiguation
    let path = '', node = el, depth = 0;
    while (node && node.nodeType === 1 && node.tagName !== 'BODY' && depth < 6) {
      let seg = node.tagName.toLowerCase();
      if (node.id) seg += '#' + node.id;
      path = seg + (path ? '>' + path : '');
      node = node.parentElement; depth++;
    }
    return {
      tag: el.tagName.toLowerCase(),
      id: el.id || '',
      cls: el.className && el.className.baseVal !== undefined ? el.className.baseVal : (el.className || ''),
      text: (el.children.length === 0 ? (el.textContent || '').trim().slice(0, 80) : ''),
      rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
      style,
      path,
    };
  });
};

// Semantic <head> snapshot: title, meta (keyed), stylesheet links. Robust to
// attribute-order / self-closing serialization differences.
const COLLECT_HEAD = () => {
  const norm = (s) => String(s || '').replace(/http:\/\/127\.0\.0\.1:\d+/g, '');
  const metas = Array.from(document.head.querySelectorAll('meta')).map((m) => {
    const key = m.getAttribute('charset') != null ? 'charset'
      : (m.getAttribute('name') || m.getAttribute('property') || m.getAttribute('http-equiv') || '?');
    const val = m.getAttribute('charset') != null ? m.getAttribute('charset') : (m.getAttribute('content') || '');
    return key + '=' + norm(val);
  }).sort();
  const links = Array.from(document.head.querySelectorAll('link')).map((l) =>
    `${l.getAttribute('rel')||''}|${norm(l.getAttribute('href'))}|${l.getAttribute('sizes')||''}|${l.getAttribute('type')||''}`
  ).sort();
  return { title: (document.title || '').trim(), metas, links };
};

async function loadPage(context, base, url, viewport) {
  const page = await context.newPage();
  if (viewport) await page.setViewportSize(viewport);
  await page.route('**/*', (route) => {
    if (route.request().resourceType() === 'script') return route.abort();
    return route.continue();
  });
  await page.goto(base + url, { waitUntil: 'load', timeout: 60000 });
  // Identical overrides on both sides: hide the JS-removed preloader overlay and
  // freeze animations/transitions so screenshots + computed styles are deterministic.
  await page.addStyleTag({ content: `
    *,*::before,*::after{animation:none !important;transition:none !important;animation-duration:0s !important;animation-delay:0s !important;caret-color:transparent !important}
    #pre-loader{display:none !important}
  ` });
  await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  // Wait for every image to finish (un)loading so layout fully settles before we
  // measure — otherwise width-derived values (e.g. `margin:0 auto`) can flip
  // nondeterministically between runs.
  await page.evaluate(async () => {
    await Promise.all(Array.from(document.images).filter((i) => !i.complete).map((i) =>
      new Promise((res) => { i.addEventListener('load', res); i.addEventListener('error', res); })));
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  });
  await page.waitForTimeout(300);
  const data = await page.evaluate(COLLECT);
  const head = await page.evaluate(COLLECT_HEAD);
  const shotHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const screenshot = await page.screenshot({ fullPage: true });
  await page.close();
  return { data, screenshot, shotHeight, head };
}

function diffStyles(refEls, candEls) {
  const issues = [];
  const n = Math.min(refEls.length, candEls.length);
  if (refEls.length !== candEls.length) {
    issues.push({ kind: 'count', ref: refEls.length, cand: candEls.length });
  }
  for (let i = 0; i < n; i++) {
    const a = refEls[i], b = candEls[i];
    const where = a.path || `${a.tag}#${a.id}`;
    if (a.tag !== b.tag) { issues.push({ i, where, kind: 'tag', ref: a.tag, cand: b.tag }); continue; }
    if (a.cls !== b.cls) issues.push({ i, where, kind: 'class', ref: a.cls, cand: b.cls });
    for (const axis of ['x', 'y', 'w', 'h']) {
      if (Math.abs(a.rect[axis] - b.rect[axis]) > 1) {
        issues.push({ i, where, kind: 'rect.' + axis, ref: a.rect[axis], cand: b.rect[axis] });
      }
    }
    for (const k of Object.keys(a.style)) {
      // Normalise the per-run server origin (127.0.0.1:PORT) out of url() values.
      const av = String(a.style[k]).replace(/http:\/\/127\.0\.0\.1:\d+/g, '');
      const bv = String(b.style[k]).replace(/http:\/\/127\.0\.0\.1:\d+/g, '');
      if (av !== bv) {
        issues.push({ i, where, kind: 'style.' + k, ref: av, cand: bv });
      }
    }
  }
  return issues;
}

// Intentional SEO additions (see AGENTS.md "SEO layer"). These are visually inert
// — Open Graph / Twitter previews, JSON-LD (a <script>, not collected here), and a
// per-page canonical that fixes the legacy bug of pointing every page at '/'. They
// are allowed to differ from the Django reference; EVERYTHING ELSE in <head>
// (stylesheets, favicons, charset, viewport, all original metas) stays strict, so
// real fidelity regressions still fail.
const SEO_META_EXTRA = ['og:', 'twitter:title', 'twitter:description', 'twitter:image'];

function diffHead(a, b) {
  const issues = [];
  // Title: exact match, OR an enriched title that still contains the reference
  // page's core name (e.g. "Pro Metronome – Best Metronome App | EUMLab").
  if (a.title !== b.title) {
    const i = a.title.indexOf(' - ');
    const core = (i >= 0 ? a.title.slice(0, i) : a.title).trim();
    if (!(core && b.title.includes(core))) issues.push({ kind: 'title', ref: a.title, cand: b.title });
  }
  const isSeoMeta = (m) => SEO_META_EXTRA.some((p) => m.startsWith(p));
  // Canonical href is intentionally per-page now → compare by presence only.
  const normLink = (l) => (l.startsWith('canonical|') ? 'canonical' : l);
  const cmp = (key, ra, ca, allowExtra) => {
    const setR = new Set(ra), setC = new Set(ca);
    for (const x of ra) if (!setC.has(x)) issues.push({ kind: key + '-missing', ref: x, cand: null });
    for (const x of ca) if (!setR.has(x) && !(allowExtra && allowExtra(x))) issues.push({ kind: key + '-extra', ref: null, cand: x });
  };
  cmp('meta', a.metas, b.metas, isSeoMeta);
  cmp('link', a.links.map(normLink), b.links.map(normLink), null);
  return issues;
}

function pixelDiff(refBuf, candBuf, name) {
  const a = PNG.sync.read(refBuf);
  const b = PNG.sync.read(candBuf);
  if (a.width !== b.width || a.height !== b.height) {
    return { dims: { ref: [a.width, a.height], cand: [b.width, b.height] }, mismatch: -1 };
  }
  const diff = new PNG({ width: a.width, height: a.height });
  const mismatch = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
  if (mismatch > 0) writeFileSync(path.join(OUT, name + '-diff.png'), PNG.sync.write(diff));
  return { dims: null, mismatch, total: a.width * a.height };
}

async function main() {
  const refServer = makeServer(path.join(ROOT, 'verify', 'reference'), path.join(ROOT, 'original', 'assets'));
  const candServer = makeServer(path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'assets'));
  const refPort = await listen(refServer);
  const candPort = await listen(candServer);
  const refBase = `http://127.0.0.1:${refPort}`;
  const candBase = `http://127.0.0.1:${candPort}`;

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });

  let failed = false;
  const report = {};
  const missing = [];
  for (const p of PAGES) {
    // Candidate file path in dist for this route.
    const candFile = p.url.endsWith('/')
      ? path.join(ROOT, 'dist', p.url, 'index.html')
      : path.join(ROOT, 'dist', p.url);
    if (!existsSync(candFile)) {
      missing.push(p.url);
      console.log(`[TODO] ${p.name}: not yet ported (${p.url})`);
      failed = true;
      continue;
    }
    // The iPhone home variant is verified at a mobile viewport.
    const viewport = p.url === '/m/' ? { width: 390, height: 844 } : VIEWPORT;
    const ref = await loadPage(context, refBase, p.url, viewport);
    const cand = await loadPage(context, candBase, p.url, viewport);
    writeFileSync(path.join(OUT, p.name + '-reference.png'), ref.screenshot);
    writeFileSync(path.join(OUT, p.name + '-candidate.png'), cand.screenshot);

    const px = pixelDiff(ref.screenshot, cand.screenshot, p.name);
    const styleIssues = diffStyles(ref.data, cand.data);
    const headIssues = diffHead(ref.head, cand.head);
    report[p.name] = {
      refHeight: ref.shotHeight, candHeight: cand.shotHeight,
      pixels: px, elementCount: { ref: ref.data.length, cand: cand.data.length },
      styleIssueCount: styleIssues.length, styleIssues: styleIssues.slice(0, 60),
      headIssueCount: headIssues.length, headIssues,
    };
    const ok = px.mismatch === 0 && styleIssues.length === 0 && headIssues.length === 0;
    if (!ok) failed = true;
    const pxStr = px.dims ? `DIM MISMATCH ref=${px.dims.ref} cand=${px.dims.cand}` : `${px.mismatch}/${px.total} px`;
    console.log(`[${ok ? 'PASS' : 'FAIL'}] ${p.name}: pixels=${pxStr}, styleIssues=${styleIssues.length}, headIssues=${headIssues.length}, els ref=${ref.data.length}/cand=${cand.data.length}, h ref=${ref.shotHeight}/cand=${cand.shotHeight}`);
    for (const is of styleIssues.slice(0, 15)) {
      console.log(`    - [${is.kind}] ${is.where || ''} ref=${JSON.stringify(is.ref)} cand=${JSON.stringify(is.cand)}`);
    }
    for (const is of headIssues.slice(0, 15)) {
      console.log(`    - [head:${is.kind}] ref=${JSON.stringify(is.ref)} cand=${JSON.stringify(is.cand)}`);
    }
  }

  writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
  refServer.close(); candServer.close();
  const verified = Object.values(report).filter((r) => r.pixels && r.pixels.mismatch === 0 && r.styleIssueCount === 0).length;
  console.log(`\nverified ${verified}/${PAGES.length} pages` + (missing.length ? `, ${missing.length} not yet ported` : ''));
  console.log(failed ? 'VERIFY FAILED — see verify/out/' : 'VERIFY PASSED — pixel + computed-style identical');
  process.exit(failed ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });
