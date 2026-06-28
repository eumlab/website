// i18n locale model. English is the unprefixed default; every other locale is
// served under a /<code>/ path prefix. Order here is the order the user asked for
// and the order the language switcher renders in.
export interface Locale {
  code: string;      // url + dictionary key
  native: string;    // self-name, shown in the switcher dropdown
  short: string;     // 2-letter badge shown on the collapsed switcher
  flag: string;      // file stem in public/assets/images/flags/<flag>.svg
  ogLocale: string;  // <meta property="og:locale">
  htmlLang: string;  // <html lang>
}

export const LOCALES: Locale[] = [
  { code: 'en', native: 'English',  short: 'EN', flag: 'us', ogLocale: 'en_US', htmlLang: 'en' },
  { code: 'de', native: 'Deutsch',  short: 'DE', flag: 'de', ogLocale: 'de_DE', htmlLang: 'de' },
  { code: 'fr', native: 'Français', short: 'FR', flag: 'fr', ogLocale: 'fr_FR', htmlLang: 'fr' },
  { code: 'es', native: 'Español',  short: 'ES', flag: 'es', ogLocale: 'es_ES', htmlLang: 'es' },
  { code: 'zh', native: '简体中文',  short: 'ZH', flag: 'cn', ogLocale: 'zh_CN', htmlLang: 'zh-Hans' },
  { code: 'ja', native: '日本語',    short: 'JA', flag: 'jp', ogLocale: 'ja_JP', htmlLang: 'ja' },
];

export const DEFAULT_LOCALE = 'en';
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l.code !== DEFAULT_LOCALE);
export const LOCALE_CODES = LOCALES.map((l) => l.code);

export function getLocale(code: string): Locale {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

// Map an English (default-locale) path to its localized URL. The default locale
// keeps the bare path; others are prefixed. Always trailing-slashed, matching the
// site's trailingSlash:'always'.
export function localizedPath(code: string, path: string): string {
  const clean = path.startsWith('/') ? path : '/' + path;
  return code === DEFAULT_LOCALE ? clean : `/${code}${clean}`;
}

// Build the locale→href map for one page (its English path), used by the switcher
// and by hreflang alternates.
export function localeUrls(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of LOCALES) out[l.code] = localizedPath(l.code, path);
  return out;
}
