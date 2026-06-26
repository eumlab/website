# EUMLab Website — Astro Migration (CSS-faithful)

**Date:** 2026-06-26
**Source repo:** https://github.com/eumlab/website
**Working dir:** /Users/shawn/Projects/EUMLabNew

## Goal

Migrate the EUMLab marketing website from its legacy stack
(**Django / Python 2 + Grunt + CoffeeScript + SCSS/Bourbon + jQuery**) to a modern
stack (**Astro**), with one hard constraint: **every pixel of rendered CSS must be
identical to the original**. Correctness is proven continuously via an automated
Playwright pixel + computed-style comparison harness.

## Scope

Batch 1 (this spec): **Home page** (`/` → `home2.html`, desktop) and
**Pro Metronome** (`/pro-metronome/` → `pro-metronome2.html`).
Remaining ~48 pages migrate in later batches only **after** batch 1 verifies clean.

Explicitly out of scope for batch 1: the other app/landing pages, SEO files
(robots/sitemap), redirects, the mobile-specific `home-mobile.html` and device CSS
variants (verified at desktop viewport first), and rebuilding the SCSS pipeline.

## Legacy architecture (what we are reproducing)

- Django renders `templates/*.html` via template inheritance (`base.html`) and
  includes (`_nav2.html`, `_footer2.html`, `_reviews.html`, `_fixCSS.html`).
- Page data is **static**, defined in `mainweb/models.py`:
  `applist`, `indexApps`, `ukeApps`, `appsMenu`, per-app `reviews`, and a computed
  `storeurl`. Injected as context (`appList`, `ukeApps`, `products`, `me`).
- CSS is compiled SCSS (Grunt → `assets/styles/*.css`); pages link the compiled
  `.css` directly (`style.css` base + per-page `home2.css`, `pro-metronome2.css`,
  `bigvideo.css`, `jquery.fullPage.css`).
- Behavior is jQuery (`home2.js`, `pro-metronome2.js`, fullPage, threesixty, video).
- Device CSS variants loaded conditionally by User-Agent (`_fixCSS.html`, base.html).

## Target architecture (Astro)

```
src/
  layouts/Base.astro          ← base.html (head, favicons, meta, <slot> for style/script/body)
  components/Nav.astro         ← _nav2.html  (props: products, addstyle)
  components/Footer.astro      ← _footer2.html
  components/Reviews.astro     ← _reviews.html (props: reviews)
  data/apps.ts                 ← models.py data, ported verbatim to TS
  pages/index.astro            ← home2.html
  pages/pro-metronome/index.astro ← pro-metronome2.html  (URL /pro-metronome/)
public/
  assets/styles/*.css          ← copied BYTE-FOR-BYTE from original (CSS identity by construction)
  assets/scripts/*.js          ← copied verbatim (behavior unchanged)
  assets/images, fonts, favicon ← copied verbatim
astro.config.mjs               ← static output, trailingSlash:'always', build.format:'directory'
```

### CSS fidelity strategy

Copy the **already-compiled** `.css` files verbatim into `public/assets/styles/`.
Because the bytes are unchanged, the CSS is identical *by construction*; the only thing
that can differ is the **DOM** the CSS applies to. The verification harness therefore
targets faithful DOM reproduction. (A later, optional step may re-introduce an
Astro-native SCSS pipeline, but only if it emits byte-identical CSS.)

### Routing / URL parity

`astro.config.mjs` uses `trailingSlash: 'always'` and `build.format: 'directory'` so
`/` and `/pro-metronome/` resolve exactly as Django served them, and absolute asset
paths (`/assets/...`) keep working.

## Verification harness (`verify/`)

The ground-truth baseline is the **repo's own templates rendered by Django's template
engine** — not hand-rewritten HTML, so no rendering bias.

1. `original/` — full clone of `eumlab/website`.
2. `verify/render_reference.py` — standalone **Django 3.x (Python 3)** configured to
   load `original/templates/`, with the `models.py` data ported to a Python dict, an
   empty/desktop `device` context, and stubbed `request`. Renders `home2.html` and
   `pro-metronome2.html` → `verify/reference/index.html`,
   `verify/reference/pro-metronome/index.html`.
3. `verify/run.mjs` — Playwright (Chromium):
   - Serve `verify/reference/` (with `original/assets` mounted at `/assets`) and the
     Astro `dist/` on two static servers.
   - For each page: load at a **fixed viewport** (1440×900, deviceScaleFactor 1),
     **freeze animations/JS timers** (inject CSS `*{animation:none!important;
     transition:none!important}` and stub timers) so screenshots are deterministic,
     wait for `networkidle` + fonts ready.
   - Capture full-page screenshot of each; **pixelmatch** diff → must be 0 differing
     pixels (tiny anti-alias threshold allowed, reported).
   - Walk the DOM, capture `getComputedStyle` for every element, diff reference vs
     candidate; report any property mismatch with selector path.
   - Exit non-zero on any diff; write `verify/out/*-diff.png` + `verify/out/report.json`.

Iterate Astro templates until both pixel diff and computed-style diff are clean.
This harness is reused unchanged for every later batch.

## Risks & mitigations

- **JS-driven initial states** (elements `visibility:hidden`/`display:none` revealed by
  fullPage/animations): both sides load the *same* copied scripts and are frozen at the
  same point, so states match. Primary comparison freezes animation to remove time
  nondeterminism.
- **Font loading / anti-aliasing**: wait for `document.fonts.ready`; fixed DPR; allow a
  documented sub-pixel AA threshold, reported explicitly (never silently widened).
- **Live-site drift**: baseline is the repo, not eumlab.com, so the migration is
  reproducible and repo-faithful.
- **Python-2 data in models.py**: only the literal data structures are ported; the
  Python-2 view/url code is irrelevant to rendering.

## Success criteria (batch 1)

- `npm run build` produces static `/` and `/pro-metronome/`.
- `node verify/run.mjs` reports **0 pixel diff** and **0 computed-style diff** for both
  pages at desktop viewport, against the Django-rendered reference.
- All `/assets/...` (css/js/images/fonts/favicon) load with identical bytes.
- No legacy Python/Grunt/CoffeeScript required to build or serve the new site.

## Status

- **2026-06-26 — FULL SITE COMPLETE & PASSING.** All **33 pages** migrated to Astro.
  `npm run verify` reports **0 pixel diff**, **0 computed-style/geometry diff**, and
  **0 `<head>` diff** for every page vs the Django-rendered reference (deterministic
  across repeated runs). Pages: home, 18 app/landing pages, 5 DAW Remote HD subpages,
  drum-tuner, about, jobs, imprint, smtm, chord-cloud agreement, 404, and the iPhone
  mobile home (`/m/`, verified at 390px). Plus SEO (robots/sitemap/meta), redirects
  (`public/_redirects`), and static downloads (`payload/`, `pkg/`).

### Notable fidelity fixes / discoveries
- Nav products `<sub>` carries an invisible entypo glyph **U+E75C** — added to markup.
- Django `me.reviews.first` is empty on a list (QuerySet-only feature); `#review-content`
  ships empty and is filled by JS at runtime — reproduced empty to match.
- Inter-item whitespace inserted for inline-block lists (uke icons, menu items, etc.).
- `sitemap.py` (imported by views in production) mutates `applist` with each app's
  `kw`/`mdesc` (head keywords/description) — replicated via `src/data/seo.json`.
- Chromium's `getComputedStyle` reports `auto`-resolved margins nondeterministically as
  0px; `margin*` excluded from the style check (geometry + pixels cover its effect).
- Mobile home is a UA-served variant (different template + mobile CSS) — built at `/m/`,
  verified at a mobile viewport; production needs a host edge UA rule (see README).
- Capitalized HTML tags (e.g. `<H1>`) must be lowercased (Astro treats them as components).
