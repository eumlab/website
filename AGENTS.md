# AGENTS.md — EUMLab Website

Guidance for AI tools (Claude Code, Cursor, etc.) maintaining this project. Read this first.

## What this is

A modern **Astro** static-site rebuild of the EUMLab marketing site, migrated from a
legacy **Django (Python 2) + Grunt + CoffeeScript + jQuery** stack. Live at
**https://eumlab.com**.

**Hard product constraint:** every rendered page must be **visually / CSS identical to
the original site**. This is enforced by an automated verification harness — not a
nice-to-have. The migration deliberately reproduces the original's markup and even its
small bugs so the rendered output matches byte-for-DOM.

## The golden rule

Any change to a page's markup or styling must keep the verifier green:

```
npm run reference && npm run build && npm run verify        # must report 0 diff on all pages
```

`verify` fails on any non-zero **pixel diff**, **computed-style/geometry diff**, or
**`<head>` diff** vs the Django-rendered reference. Do not "clean up" markup in a way
that changes rendering. If you intentionally diverge from the original (rare), say so
explicitly and update the reference expectation.

## Stack & key decisions

- **Astro 4**, `output: 'static'`, `trailingSlash: 'always'`, `build.format: 'directory'`
  (so URLs match the legacy Django routes, e.g. `/pro-metronome/`).
- **CSS/JS/images are copied byte-for-byte** from the legacy compiled build into
  `public/assets/` — they are NOT recompiled. CSS is therefore identical by construction;
  the only thing that can differ is the DOM the CSS applies to, which is what the harness
  checks. Do not rebuild the SCSS unless it emits byte-identical CSS.
- No SSR/runtime. The one UA-dependent behavior (mobile/iPad) is an edge/host concern
  (see "Device variants").

## Commands

| Command | What |
|---|---|
| `npm install` | install deps |
| `npm run dev` | dev server at http://localhost:4321 |
| `npm run build` | static build → `dist/` |
| `npm run reference` | render legacy Django templates → `verify/reference/` (needs `.venv` + `original/`) |
| `npm run verify` | **desktop fidelity gate** — 33 pages, must be 0 diff |
| `npm run verify:devices` | iPad/iPhone device-CSS fidelity gate |

## First-time verification setup

The ground-truth baseline is the legacy repo rendered by real Django:

```bash
# The default branch (2.0) IS the legacy Django code = the verification baseline.
git clone --depth 1 https://github.com/eumlab/website.git original
python3 -m venv .venv && .venv/bin/pip install 'Django>=4,<5'
npm install
npm run reference && npm run build && npm run verify
```

`original/` and `.venv/` are gitignored. This Astro source lives on branch **`3.0`**;
the legacy Django code is branch **`2.0`** (the repo default).

## Directory layout

| Path | Purpose |
|---|---|
| `src/layouts/Base.astro` | head/scripts shell — port of legacy `templates/base.html` |
| `src/components/` | `Nav`, `Footer`, `Reviews` (ports of `_nav2.html`, `_footer2.html`, `_reviews.html`), `LangSwitcher` |
| `src/components/pages/` | shared page bodies (`ProMetronome`, `ProMetronomeEdu`, `Support`) rendered per-locale |
| `src/i18n/` | locale config + per-locale string dictionaries (`strings/{en,de,fr,es,zh,ja}.ts`) |
| `src/pages/[lang]/` | localized routes (Pro Metronome cluster) generated via `getStaticPaths` |
| `public/assets/images/flags/` | inline SVG flags for the language switcher (`us,de,fr,es,cn,jp`) |
| `src/data/apps.ts` | app catalog — ported from `original/mainweb/models.py` |
| `src/data/seo.json` | per-app keywords/description — from `original/mainweb/sitemap.py` |
| `src/data/press.json` | about-page press kits/coverage — from `models.py` PressItems/PressCovers |
| `src/pages/` | one `.astro` per route (33 pages incl. `/m/` mobile home) |
| `public/assets/` | compiled CSS/JS/images/fonts, copied byte-for-byte from the original |
| `public/{_redirects,robots.txt,sitemap.xml}` | legacy redirects + SEO |
| `public/{payload,pkg}/` | static downloads (PDFs, zips) served at `/payload/`, `/pkg/` |
| `verify/render_reference.py` | renders legacy templates → reference HTML (the baseline) |
| `verify/run.mjs` | desktop pixel + computed-style + head diff harness |
| `verify/run-devices.mjs` | iPad/iPhone device-CSS diff harness |
| `edge/device-fidelity.js` | edge handler reproducing the legacy UA-based serving |
| `docs/superpowers/specs/` | the original design spec |

## How fidelity verification works

1. `verify/render_reference.py` configures Django 4.2 standalone, loads the data from
   `original/mainweb/models.py` (+ `sitemap.py` SEO mutations), and renders each page
   with the exact view context the legacy `views.py`/`urls.py` used → `verify/reference/`.
   This is the **ground truth** (no hand-written HTML, so no bias).
2. `verify/run.mjs` serves the reference and `dist/`, loads each page with **external JS
   blocked** (deterministic) and animations frozen and `#pre-loader` hidden, then does a
   full-page **pixelmatch** diff + a per-element **computed-style + geometry** diff + a
   semantic **`<head>`** diff. All must be 0.

**To add or change a page:** edit the `.astro`; if it's a new route, add it (with its
view context) to the `PAGES` list in `verify/render_reference.py`; then
`npm run reference && npm run build && npm run verify` and fix until 0 diff.

## SEO layer (added on top of the faithful port)

The site carries a deliberate, **visually-inert** SEO/AI-discoverability layer. None
of it changes a single rendered pixel — it lives in `<head>` metadata, `<script>`
JSON-LD, and standalone files. It is an *intentional divergence* from the legacy
reference (per the golden rule), and the verifier is taught to allow exactly it.

What was added:
- **`public/robots.txt`** — welcomes search + AI crawlers (GPTBot, OAI-SearchBot,
  ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, …) and points
  to the sitemap + `llms.txt`. *(Not verified — non-`.html`.)*
- **`public/sitemap.xml`** — real routes only, `https://`, current dates. *(Not verified.)*
- **`public/llms.txt`** — machine-readable site summary for LLMs, Pro Metronome first. *(Not verified.)*
- **JSON-LD** (`src/layouts/Base.astro`) — a `SoftwareApplication` on each app's own
  landing page (data-driven from `apps.ts`; rich `featureList` for Pro Metronome),
  plus `Organization` + `WebSite` on the home page. Emitted as `<script type="application/ld+json">`,
  which the head-diff does **not** collect, so it's verify-safe by construction.
- **Open Graph / Twitter** meta + a **per-page self-canonical** (the legacy site
  wrongly pointed every page's canonical at `/`). These *do* touch the verified `<head>`.

How the verifier tolerates it (see `diffHead` in `verify/run.mjs`): it permits, and
*only* permits, three additive/inert deltas — (1) `meta` keys prefixed `og:` /
`twitter:title|description|image`, (2) a `canonical` link compared by presence not
href, (3) an enriched `<title>` that still contains the reference page's core name.
**Everything else in `<head>` stays byte-strict** (stylesheets, favicons, charset,
viewport, every original meta), so genuine fidelity regressions still fail. Per-page
SEO is set via `Base.astro` props: `wholetitle`, `description`, `ogImage`, `ogType`, `jsonLd`.

**Heads-up on the gate's current state:** the desktop verifier is *already* red
independent of SEO, because the earlier "trim homepage / nav / footer" content update
intentionally diverged the body markup from the Django reference (which is rendered
from the untouched legacy templates and can't reflect that change). Those failures are
all body pixel/geometry diffs with `headIssues=0`. The SEO layer adds **zero** new
diffs: `headIssues=0` on all 33 pages and byte-identical pixel output vs. pre-SEO. To
get back to green, the reference baseline needs re-snapshotting against the *intended*
content, which is a separate decision from this SEO work.

## Internationalization (i18n)

A multilingual layer for the **Pro Metronome cluster** (`/pro-metronome/`,
`/pro-metronome/edu/`, `/support/`). English is the unprefixed default; the other
five locales are served under a path prefix.

- **Locales** (order = switcher order, user-defined): `en, de, fr, es, zh, ja`.
  Defined once in `src/i18n/config.ts` (`LOCALES`, `localizedPath`, `localeUrls`).
- **URLs:** `/de/pro-metronome/`, `/zh/support/`, … — 15 new pages (5 × 3). No
  existing English route changes; `/en/...` is never generated.
- **Strings:** `src/i18n/strings/<code>.ts` each `satisfies Strings`
  (`strings/types.ts`). **`en.ts` reproduces legacy copy verbatim** (incl. inline
  `<em>`/`<br/>`) so the English render stays byte-identical. Rich fragments are
  rendered with `set:html`; brand/app names are never translated.
- **Page bodies:** `src/components/pages/*.astro` hold the markup and take a `lang`
  prop; the English `src/pages/...` files and the `src/pages/[lang]/...` routes are
  thin wrappers around them, so markup has one source of truth.
- **Switcher:** `LangSwitcher.astro`, rendered as the **first** `<li>` of
  `#menu-items-container` (items are `float:right`, so DOM-first = far right, just
  past "Support"). Shown **only when `Nav` gets `langUrls`** → only on the cluster
  pages. Its `<style is:global>` is inlined into every page that imports `Nav` but
  is inert (selectors are all under `#menu-item-lang`, absent elsewhere; the head
  diff ignores `<style>`), so the other 30 pages stay byte-identical.
- **Base/SEO:** `lang` drives `<html lang>` + `og:locale`; cluster pages emit
  `<link rel="alternate" hreflang>` (+ `x-default`) and per-locale
  title/description/keywords. **`verify/run.mjs` `diffHead` now allows extra
  `alternate` links** (visually inert, like the og/twitter allowance).
- **Fidelity:** localized routes aren't in `verify/reference/` → not pixel-checked.
  English `pro-metronome`/`edu` gain the switcher (intentional body divergence on
  the already-red gate); **`headIssues` stays 0 on all 33 pages**. To extend i18n to
  more apps later, add their strings + a `[lang]/<route>` wrapper and reuse the body
  component pattern.

## Non-obvious gotchas (these will bite you)

- The nav "Products ▾" `<sub>` contains an **invisible U+E75C** entypo glyph (the arrow).
  Keep it; an empty `<sub>` renders 0×0 and shifts the nav.
- Django `me.reviews.first` returns `''` on a plain list (`.first` is QuerySet-only), so
  `<p id="review-content">` ships **empty** and JS fills it at runtime. Keep it empty.
- **Inline-block** lists (uke icons, menu items, app grids) need inter-item whitespace —
  emit it via `items.flatMap(x => [<li/>, ' '])`, or gaps disappear.
- Astro treats **capitalized tags** (`<H1>`) as components → lowercase all real HTML tags.
- All `<script>` tags need **`is:inline`** to preserve order and avoid Astro bundling.
- The harness excludes `margin*` from the computed-style check because Chromium's
  `getComputedStyle` reports `auto`-resolved margins nondeterministically as `0px`;
  geometry + pixels already cover margins. Don't re-add them.
- Several broken asset/links are **pre-existing bugs in the original**, faithfully
  reproduced (e.g. `/payload/BonjourPSSetup.zip` vs the real `.exe.zip`; dangling
  `/piano-handbook/`; dead CSS `url()`s). Don't "fix" them unless intentionally diverging.

## Device variants & the edge layer

The legacy site chose HTML/CSS by **User-Agent**, not viewport:
- iPhone at `/` → a different template (`home-mobile.html`, built here at **`/m/`**) + `style-mobile.css`.
- iPad → `style-ipad.css`; plus per-page `-mobile`/`-ipad` variants for a few pages.

Those CSS files are byte-copied into the build and `npm run verify:devices` proves they
render **identically** when loaded. Because a static file can't vary by UA,
`edge/device-fidelity.js` reproduces the exact UA logic (Cloudflare Worker / Netlify Edge
wrappers). In production today, Caddy does the iPhone `/`→`/m/` rewrite; the per-page
device-CSS injection is a documented follow-up. **Desktop is pixel-exact and needs nothing.**

## Versioning & deployment

- Branch **`2.0`** = legacy Django (repo default). Branch **`3.0`** = this Astro rewrite. Tag **`v3.0.0`**.
- Live at **https://eumlab.com** (DigitalOcean droplet, Caddy `file_server`).
- Production/server runbook is in **`DEPLOYMENT.local.md`** (gitignored — this is a public
  repo, so server specifics are kept out of git). Build is done locally and rsync'd to the
  server (the droplet has too little RAM to build).
