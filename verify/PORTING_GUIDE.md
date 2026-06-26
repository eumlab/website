# Porting guide — legacy Django template → Astro page

You are porting ONE OR MORE legacy templates to Astro pages. The migration rule is
absolute: **the built Astro page must render with CSS/DOM byte-for-DOM identical to
the original.** Your spec is the already-rendered ground-truth HTML.

## Read first (do not modify these — shared infrastructure)
- `src/layouts/Base.astro` — the head/scripts shell (port of `base.html`). Props:
  `title`, `wholetitle`, `me` (App|null), `bodystyle`. Named slots: `meta`, `style`,
  `script`, plus the default slot = body.
- `src/components/Nav.astro` — port of `_nav2.html`. Props: `products`, `addstyle`.
- `src/components/Footer.astro` — port of `_footer2.html`.
- `src/components/Reviews.astro` — port of `_reviews.html`. Prop: `reviews` (string[]).
- `src/data/apps.ts` — `applist`, `indexApps`, `ukeApps`, `appsMenu`. App objects have
  `mid,name,id,iphone,iPad,icon,href,desc,aurl,storeurl` and some have `reviews`.
- `src/pages/pro-metronome/index.astro` — the canonical example. Mimic its shape.

## For EACH page you are assigned
1. Read the original `original/templates/<template>.html` AND every partial it
   `{% include %}`s.
2. Read the ground-truth output `verify/reference/<route>/index.html`. **This is the
   exact DOM/text your build must reproduce.**
3. Write `src/pages/<route>/index.astro` (create dirs as needed).

## Rules (these are how the legacy template maps to Astro)
- Wrap everything in `<Base ...>`:
  - `title={...}` from `{% block title %}`. If the template overrides
    `{% block wholetitle %}`, pass `wholetitle={...}` instead/also (see reference
    `<title>`). Default title is `"<title> - EUMLab "` (trailing space) — confirm vs
    the reference `<title>`.
  - `me={applist['<aid>']}` for app pages (the assignment gives the aid). Omit for
    pages with no `me`.
  - `bodystyle="..."` from `{% block bodystyle %}` content (often `""`, sometimes a
    space `" "`, sometimes a class like `"darktheme "`). Match the reference `<body
    class="...">` exactly (Base appends one trailing space).
- `{% block meta %}` content → `<Fragment slot="meta"> ... </Fragment>`.
- `{% block style %}` `<link>` tags → `<Fragment slot="style"> ... </Fragment>`.
  IGNORE the `{% include '_fixCSS.html' %}` line (desktop renders nothing from it).
- `{% block script %}` `<script>` tags → `<Fragment slot="script"> ... </Fragment>`,
  and add `is:inline` to EVERY `<script>` tag (so Astro keeps them verbatim/in order).
- Body content from `{% block body %}`:
  - `{% include "_nav2.html" %}` → `<Nav products={appsMenu} />`. If it's
    `{% include "_nav2.html" with addstyle='X' %}` → `<Nav products={appsMenu} addstyle="X" />`.
  - `{% include "_footer2.html" %}` → `<Footer />`.
  - `{% include "_reviews.html" %}` → `<Reviews reviews={me.reviews || []} />`.
  - **Any OTHER `{% include %}`** (e.g. `_footer.html`, `_topbar.html`,
    `_social-medias.html`, `_copyright.html`) → inline that partial's literal content
    directly (read the partial file; reproduce it verbatim). Do NOT create new shared
    components.
  - `{% for x in list %}` loops → `{list.map((x) => (<.../>))}`. For lists whose items
    are `display:inline-block` (check the CSS, or the reference whitespace), insert a
    space between items: `{list.flatMap((x) => [<.../>, ' '])}`.
  - `{% if %}` → JS ternary/`&&`. Template vars `{{ x }}` → `{x}`.
- Reproduce ALL static markup, text, attributes, and whitespace-inside-text EXACTLY
  as in the reference (curly quotes “ ”, ±, µ, em-dashes –, &amp;, etc.).
- Absolute asset paths stay `/assets/...`.
- **Critical quirks already discovered:**
  - Empty-looking `<sub></sub>` in nav holds U+E75C (handled in Nav.astro — don't worry).
  - Django `{{ me.reviews.first }}` renders EMPTY (it's a list); if a template prints
    `me.reviews.first` directly, output empty.
  - If the reference shows an element/text you can't derive from data, COPY it verbatim
    from the reference HTML.

## Self-check before finishing
Compare your intended output against `verify/reference/<route>/index.html`: same tags,
same order, same classes/ids, same visible text. The central harness
(`npm run build && node verify/run.mjs <route>`) must report 0 pixel + 0 style diff —
but you do NOT run it; the orchestrator runs it and will report diffs back.
