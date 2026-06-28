# Spec — Multilingual Pro Metronome (EN · DE · FR · ES · ZH · JA)

Date: 2026-06-28
Status: approved-to-build (via `/goal`)

## Goal

Add website internationalization, **prioritizing the Pro Metronome app**. Ship six
languages in this order: **English (default), Deutsch, Français, Español, 简体中文,
日本語**. A header language switcher (flag icon + 2-letter code) lets users change
language at any time. Translation voice = professional music-software domain.

Decisions (confirmed with the user):
- **6 languages**, user-ordered: `en, de, fr, es, zh, ja` (en is the unprefixed default).
- **Scope phase 1 = full Pro Metronome cluster**: `/pro-metronome/`,
  `/pro-metronome/edu/`, `/support/` (the support page is a Pro Metronome help center).
- **Switcher shows only on translated pages** for now (rolls out globally as more
  pages get localized later).
- Judgment-call defaults: English flag = US (largest App Store market); App Store
  **review quotes stay in English** (authentic testimonials), only their heading is
  translated.

## URL scheme

English keeps every existing path. Other locales get a path prefix:

```
/pro-metronome/        →  /de|fr|es|zh|ja/pro-metronome/
/pro-metronome/edu/    →  /de|fr|es|zh|ja/pro-metronome/edu/
/support/              →  /de|fr|es|zh|ja/support/
```

15 new pages (5 locales × 3 pages). No existing route changes. `/en/...` is never
generated.

## Architecture

Manual locale-prefixed routes + shared body components + per-locale string
dictionaries. (Astro built-in i18n routing rejected — risks disturbing the 33
existing hand-built routes; client-side text-swap rejected — bad SEO.)

### `src/i18n/`
- `config.ts` — ordered `LOCALES` (`{code, native, short, flag, ogLocale, htmlLang}`),
  `DEFAULT_LOCALE`, `NON_DEFAULT_LOCALES`, `localizedPath(code, path)`.
- `strings/types.ts` — `Strings` interface (namespaces: `nav`, `footer`, `switcher`,
  `proMetronome`, `edu`, `support`, `meta`).
- `strings/{en,de,fr,es,zh,ja}.ts` — each `satisfies Strings`. **`en.ts` reproduces
  current copy verbatim** (incl. inline `<em>`/`<br/>`) so English output is byte-identical.
- `index.ts` — `getStrings(code): Strings`.

Rich slogans (interleaved `<em>`/`<br/>`) are stored as small HTML strings rendered
with `set:html` (authored copy, static site → safe). Plain text uses interpolation.

### `src/components/pages/`
`ProMetronome.astro`, `ProMetronomeEdu.astro`, `Support.astro` — full page markup,
take a `lang` prop, pull text from `getStrings(lang)`. Existing English page files
become thin wrappers (`<ProMetronome lang="en" />`). New `src/pages/[lang]/…` files
use `getStaticPaths` over the 5 non-default locales.

### `src/components/LangSwitcher.astro`
- Rendered as the **first** `<li id="menu-item-lang">` of `#menu-items-container`
  (items are `float:right` → DOM-first = rightmost = visually just past Support).
- Collapsed: flag + 2-letter code (e.g. 🇩🇪 DE). Hover/focus → dropdown of the other
  languages (flag + native name) linking to that locale's URL for the current page.
- Props: `lang` + `urls` (map locale→href for this page). Nav forwards them; visible
  only when present → only on the Pro Metronome cluster.
- Styling matches nav typography and both header variants (`glow` + solid `fixontop`).
- Flags: inline SVGs in `public/assets/images/flags/` (`us,de,fr,es,cn,jp`).

### `src/layouts/Base.astro`
Add `lang` prop → `<html lang>`, `og:locale`; emit `<link rel="alternate" hreflang>`
(+ `x-default`) when a page passes `alternates`; per-locale title/description/keywords
from dictionaries; JSON-LD text localized.

### `src/components/{Nav,Footer}.astro` + `Reviews.astro`
Accept an optional `lang` (default `en`) and localize their visible strings; Nav also
accepts `langSwitcher` props. With `lang="en"` they render exactly as today.

`astro.config.mjs` untouched.

## Fidelity / verify impact

New localized routes aren't in `verify/reference/` → not pixel-checked (clean
divergence, like the SEO layer). English `/support/` isn't in the reference set.
English `/pro-metronome/` + `/pro-metronome/edu/` gain the switcher = intentional
divergence on an already-red gate (per AGENTS.md, red since the content-update
commit). The other 30 pages keep an unchanged nav → byte-identical. Verification:
`npm run build` must be clean; visual check of the switcher + one translated page.
Reference re-baselining stays a separate, deferred decision.

## Translation rules
- Keep brands untranslated: Pro Metronome, EUMLab, Xanin Technology GmbH, app names.
- Correct per-language music terminology (time signature, subdivision, polyrhythm,
  tempo, BPM, accent, tap tempo, Rhythm/Practice/Stage Mode).
- Keep feature/UI names recognizable; localize surrounding prose.
