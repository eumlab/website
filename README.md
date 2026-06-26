# EUMLab Website (Astro)

Modern Astro rebuild of the EUMLab marketing site, migrated from the legacy
Django + Grunt + CoffeeScript stack. **Constraint: rendered CSS must be pixel-exact
to the original**, proven by an automated Playwright verification harness.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/  (static)
npm run preview
```

## Verify CSS fidelity (vs the original)

```bash
# one-time: original/ reference clone + Python venv with Django
git clone --depth 1 https://github.com/eumlab/website.git original
python3 -m venv .venv && .venv/bin/pip install 'Django>=4,<5'

npm run reference   # render legacy Django templates -> verify/reference/  (uses .venv python)
npm run build
npm run verify      # pixel + computed-style diff; exits non-zero on any difference
node verify/visual-js.mjs   # optional: JS-enabled screenshots (verify/out/*-js-fold.png)
```

`npm run verify` passes only when every page is **0 differing pixels** and **0
computed-style/geometry differences** against the Django-rendered reference.

## Status

✅ **Full site migrated and verified — 33/33 pages report 0 pixel diff + 0
computed-style diff + 0 `<head>` diff** against the Django-rendered reference.
This covers the home page, all app/landing pages, the DAW Remote HD subpages, the
general pages (about, jobs, imprint, smtm, chord-cloud agreement), the 404 page, and
the iPhone mobile home (verified at a 390px viewport). SEO (`robots.txt`,
`sitemap.xml`, per-app keyword/description meta), the legacy URL redirects
(`public/_redirects` + `astro.config.mjs`), and the static downloads (`payload/`,
`pkg/`) are all in place.

### Device variants (iPad / iPhone) — UA-gated layer
The legacy Django app chose HTML/CSS by **User-Agent** (not viewport): it served
`home-mobile.html` at `/` to iPhones, and loaded extra device CSS
(`style-mobile.css`/`style-ipad.css`, plus per-page `-mobile`/`-ipad` variants) on
iPhone/iPad. Those CSS files are copied byte-for-byte into the build, and
`npm run verify:devices` proves they render **0-pixel-diff identical** to the original
on iPad/iPhone (the mobile home is built at `/m/`).

Because the original keyed on UA, reproducing it exactly is inherently a server/edge
job (a pure static file can't vary by UA). `edge/device-fidelity.js` is a ready,
verified edge handler (Cloudflare Worker + Netlify Edge wrappers) that replicates the
exact UA logic: rewrite `/`→`/m/` for iPhones and inject the device CSS for iPhone/iPad.
Deploy it in front of the static build for byte-identical behaviour on every device.
**Desktop needs nothing — it is already identical and verified.**

## Layout

| Path | What |
|------|------|
| `src/layouts/Base.astro` | head/scripts shell (was `templates/base.html`) |
| `src/components/` | `Nav`, `Footer`, `Reviews` (was `_nav2.html` etc.) |
| `src/data/apps.ts` | app catalog data (was `mainweb/models.py`) |
| `src/pages/` | one file per route |
| `public/assets/` | compiled CSS/JS/images, copied byte-for-byte from the original |
| `verify/` | reference renderer + Playwright diff harness |
| `original/` | reference clone of the legacy repo (gitignored) |

See `docs/superpowers/specs/2026-06-26-eumlab-astro-migration-design.md` for the design.
