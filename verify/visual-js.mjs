// JS-enabled visual sanity capture (NOT a gate — animations are nondeterministic).
// Loads the candidate build with full JS, reports failed requests + console errors,
// and writes above-the-fold screenshots for eyeballing.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = path.join(ROOT, 'verify', 'out');
mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.otf': 'font/otf', '.ttf': 'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2', '.json': 'application/json', '.swf': 'application/x-shockwave-flash' };

function makeServer(htmlRoot, assetsRoot) {
  return http.createServer(async (req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = urlPath.startsWith('/assets/') ? path.join(assetsRoot, urlPath.slice(8)) : path.join(htmlRoot, urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath);
    if (!existsSync(filePath)) { res.statusCode = 404; res.end('nf'); return; }
    res.setHeader('Content-Type', MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
    res.end(await readFile(filePath));
  });
}
const listen = (s) => new Promise((r) => s.listen(0, '127.0.0.1', () => r(s.address().port)));

const srv = makeServer(path.join(ROOT, 'dist'), path.join(ROOT, 'dist', 'assets'));
const port = await listen(srv);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const PAGES = process.argv.length > 2
  ? process.argv.slice(2).map((u) => [u.replace(/\//g, '_') || 'home', u])
  : [['home', '/'], ['pro-metronome', '/pro-metronome/']];
for (const [name, url] of PAGES) {
  const page = await ctx.newPage();
  const failed = [];
  const errors = [];
  page.on('requestfailed', (r) => { const u = r.url(); if (u.includes('127.0.0.1')) failed.push(u); });
  page.on('response', (r) => { if (r.url().includes('127.0.0.1') && r.status() >= 400) failed.push(`${r.status()} ${r.url()}`); });
  page.on('pageerror', (e) => errors.push(String(e).split('\n')[0]));
  await page.goto(`http://127.0.0.1:${port}${url}`, { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  writeFileSync(path.join(OUT, name + '-js-fold.png'), await page.screenshot());
  console.log(`[${name}] local 4xx/failed: ${failed.length ? failed.join(', ') : 'none'} | pageerrors: ${errors.length ? errors.join(' | ') : 'none'}`);
}
await browser.close();
srv.close();
