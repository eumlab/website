// Edge handler that reproduces the legacy Django site's *exact* server-side
// User-Agent behaviour on top of the static Astro build. The original chose
// HTML/CSS by UA (not by viewport), so to stay byte-for-byte identical on every
// device this logic must run server-side / at the edge — it cannot be done in a
// pure static build. (Desktop needs nothing; it is already identical.)
//
// What the original did (see original/templates/base.html + _fixCSS.html + views.py):
//   - iPhone UA at "/"            -> serve the home-mobile template (built at /m/)
//   - iPhone UA on any page       -> also load style-mobile.css (+ <page>-mobile.css)
//   - iPad UA on any page         -> also load style-ipad.css   (+ <page>-ipad.css)
//   - iPhone/iPad               -> add the mobile web-app meta + a (no-op) orient script
//
// This handler is framework-agnostic; wrappers for Cloudflare Workers and Netlify
// Edge Functions are at the bottom. It has been verified (verify/run-devices.mjs)
// to render pixel-identical to the original on iPad/iPhone.

// Page-specific device CSS that actually exists in the build (others 404'd in the
// original too, so we intentionally omit them).
const PAGE_DEVICE_CSS = {
  '/pro-metronome/': { mobile: ['pro-metronome2-mobile.css'], ipad: ['pro-metronome2-ipad.css'] },
  '/': { mobile: [], ipad: ['home2-ipad.css'] }, // home2-ipad.css is empty; home iPhone is handled by the /m/ rewrite
};

function deviceOf(ua = '') {
  if (/iPhone|iPod/i.test(ua)) return 'mobile';
  if (/iPad/i.test(ua)) return 'ipad';
  return 'desktop';
}

function cssLinksFor(pathname, device) {
  if (device === 'desktop') return '';
  const base = device === 'mobile' ? ['style-mobile.css'] : ['style-ipad.css'];
  const page = (PAGE_DEVICE_CSS[pathname] && PAGE_DEVICE_CSS[pathname][device]) || [];
  // base.html order: page device css (via _fixCSS) then style-<device>.css.
  return [...page, ...base]
    .map((f) => `<link href="/assets/styles/${f}" rel="stylesheet" />`)
    .join('\n');
}

// Returns { rewriteTo } and/or { injectBeforeHeadEnd } for a given request.
export function plan(pathname, userAgent) {
  const device = deviceOf(userAgent);
  if (device === 'desktop') return {};
  // iPhone home -> the mobile-home build.
  if (device === 'mobile' && (pathname === '/' || pathname === '/index.html')) {
    return { rewriteTo: '/m/' };
  }
  const links = cssLinksFor(pathname, device);
  return links ? { injectBeforeHeadEnd: links } : {};
}

function transformHtml(html, inject) {
  return inject ? html.replace('</head>', inject + '\n</head>') : html;
}

// --- Cloudflare Worker wrapper ------------------------------------------------
export async function cloudflareFetch(request, env, ctx) {
  const url = new URL(request.url);
  const ua = request.headers.get('user-agent') || '';
  const { rewriteTo, injectBeforeHeadEnd } = plan(url.pathname, ua);
  if (rewriteTo) url.pathname = rewriteTo;
  const res = await env.ASSETS.fetch(new Request(url, request));
  const ct = res.headers.get('content-type') || '';
  if (!injectBeforeHeadEnd || !ct.includes('text/html')) return res;
  const body = transformHtml(await res.text(), injectBeforeHeadEnd);
  return new Response(body, { status: res.status, headers: res.headers });
}

// --- Netlify Edge Function wrapper --------------------------------------------
export default async function netlify(request, context) {
  const url = new URL(request.url);
  const ua = request.headers.get('user-agent') || '';
  const { rewriteTo, injectBeforeHeadEnd } = plan(url.pathname, ua);
  if (rewriteTo) return context.rewrite(rewriteTo);
  const res = await context.next();
  const ct = res.headers.get('content-type') || '';
  if (!injectBeforeHeadEnd || !ct.includes('text/html')) return res;
  return new Response(transformHtml(await res.text(), injectBeforeHeadEnd), res);
}
