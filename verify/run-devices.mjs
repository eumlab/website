// Device-matrix fidelity check. Proves that on iPad / iPhone (where the original
// served extra UA-gated device CSS), the migrated DOM + the byte-identical device
// CSS render identically to the Django device reference.
//
// reference  = verify/reference-device/<label>/ (template rendered with iPad/iPhone
//              device context → loads the device CSS via <link>, like production).
// candidate  = the built dist page + the SAME device CSS injected (simulating the
//              production edge/UA rule), at the matching device viewport.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(ROOT, 'verify', 'out');
mkdirSync(OUT, { recursive: true });
const STYLES = path.join(ROOT, 'original', 'assets', 'styles');

const IPAD = { width: 768, height: 1024 };
const IPHONE = { width: 390, height: 844 };

// label -> { route in dist, device css files (in cascade order), viewport }
const TESTS = [
  { label: 'ipad__pro-metronome', route: '/pro-metronome/', css: ['pro-metronome2-ipad.css', 'style-ipad.css'], vp: IPAD },
  { label: 'iphone__pro-metronome', route: '/pro-metronome/', css: ['pro-metronome2-mobile.css', 'style-mobile.css'], vp: IPHONE },
  { label: 'ipad__instuner', route: '/instuner/', css: ['style-ipad.css'], vp: IPAD },
  { label: 'iphone__instuner', route: '/instuner/', css: ['style-mobile.css'], vp: IPHONE },
  { label: 'ipad__guitar-master', route: '/guitar-master/', css: ['style-ipad.css'], vp: IPAD },
  { label: 'ipad__home', route: '/', css: ['home2-ipad.css', 'style-ipad.css'], vp: IPAD },
];

const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.otf': 'font/otf', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2', '.swf': 'application/x-shockwave-flash' };
function makeServer(htmlRoot, assetsRoot) {
  return http.createServer(async (req, res) => {
    let u = decodeURIComponent(req.url.split('?')[0]);
    let f = u.startsWith('/assets/') ? path.join(assetsRoot, u.slice(8)) : path.join(htmlRoot, u.endsWith('/') ? u + 'index.html' : u);
    if (!existsSync(f)) { res.statusCode = 404; res.end('nf'); return; }
    res.setHeader('Content-Type', MIME[path.extname(f).toLowerCase()] || 'application/octet-stream');
    res.end(await readFile(f));
  });
}
const listen = (s) => new Promise((r) => s.listen(0, '127.0.0.1', () => r(s.address().port)));

const COLLECT = () => {
  const KEYS = ['display','position','top','left','right','bottom','float','clear','width','height','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderTopColor','color','backgroundColor','backgroundImage','backgroundPosition','fontFamily','fontSize','fontWeight','fontStyle','lineHeight','textAlign','verticalAlign','whiteSpace','opacity','visibility','overflow','zIndex','transform'];
  // Visual elements only — exclude non-rendered nodes (the original adds a no-op
  // orientation <script> on mobile/tablet that desktop pages lack).
  return Array.from(document.querySelectorAll('body *')).filter((el) => !['SCRIPT', 'STYLE', 'LINK', 'META'].includes(el.tagName)).map((el) => {
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); const s = {};
    for (const k of KEYS) s[k] = cs[k];
    return { tag: el.tagName.toLowerCase(), rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }, style: s };
  });
};

async function shoot(context, base, route, vp, injectCss) {
  const page = await context.newPage();
  await page.setViewportSize(vp);
  await page.route('**/*', (r) => r.request().resourceType() === 'script' ? r.abort() : r.continue());
  await page.goto(base + route, { waitUntil: 'load', timeout: 60000 });
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}#pre-loader{display:none!important}' });
  for (const c of injectCss) await page.addStyleTag({ content: readFileSync(path.join(STYLES, c), 'utf-8') });
  await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  await page.evaluate(async () => { await Promise.all(Array.from(document.images).filter(i => !i.complete).map(i => new Promise(r => { i.onload = i.onerror = r; }))); await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))); });
  await page.waitForTimeout(250);
  const data = await page.evaluate(COLLECT);
  const shot = await page.screenshot({ fullPage: true });
  await page.close();
  return { data, shot };
}

function pxDiff(a, b) {
  const A = PNG.sync.read(a), B = PNG.sync.read(b);
  if (A.width !== B.width || A.height !== B.height) return -1;
  const d = new PNG({ width: A.width, height: A.height });
  return pixelmatch(A.data, B.data, d.data, A.width, A.height, { threshold: 0.1 });
}
function styleDiff(a, b) {
  let n = 0; const m = Math.min(a.length, b.length);
  if (a.length !== b.length) n++;
  for (let i = 0; i < m; i++) {
    for (const ax of ['x','y','w','h']) if (Math.abs(a[i].rect[ax] - b[i].rect[ax]) > 1) n++;
    for (const k of Object.keys(a[i].style)) {
      const av = String(a[i].style[k]).replace(/http:\/\/127\.0\.0\.1:\d+/g, '');
      const bv = String(b[i].style[k]).replace(/http:\/\/127\.0\.0\.1:\d+/g, '');
      if (av !== bv) n++;
    }
  }
  return n;
}

const refServer = makeServer(path.join(ROOT, 'verify', 'reference-device'), path.join(ROOT, 'original', 'assets'));
const candServer = makeServer(path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'assets'));
const refPort = await listen(refServer), candPort = await listen(candServer);
const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 1 });
let failed = false;
for (const t of TESTS) {
  const ref = await shoot(ctx, `http://127.0.0.1:${refPort}`, `/${t.label}/`, t.vp, []);
  const cand = await shoot(ctx, `http://127.0.0.1:${candPort}`, t.route, t.vp, t.css);
  const px = pxDiff(ref.shot, cand.shot);
  const sd = styleDiff(ref.data, cand.data);
  const ok = px === 0 && sd === 0;
  if (!ok) { failed = true; writeFileSync(path.join(OUT, t.label + '-ref.png'), ref.shot); writeFileSync(path.join(OUT, t.label + '-cand.png'), cand.shot); }
  console.log(`[${ok ? 'PASS' : 'FAIL'}] ${t.label} @${t.vp.width}x${t.vp.height}: pixels=${px}, styleIssues=${sd}, els ${ref.data.length}/${cand.data.length}`);
}
await browser.close(); refServer.close(); candServer.close();
console.log(failed ? '\nDEVICE VERIFY FAILED' : '\nDEVICE VERIFY PASSED — device CSS renders identically to original');
process.exit(failed ? 1 : 0);
