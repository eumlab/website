// Self-contained translation module for the Drum Tuner page (route /drum-tuner/
// and /<lang>/drum-tuner/). Per-page module so the page can be localized
// independently. The `en` entry reproduces the legacy copy verbatim so the
// English page renders byte-identical (it is in the verify reference set).
export interface AppStrings {
  comingSoon: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const DRUM_TUNER: Record<string, AppStrings> = {
  en: {
    comingSoon: `Coming Soon`,
    meta: {
      wholetitle: `Drum Tuner - EUMLab `,
      description: `Drum Tuner by EUMLab — a precise drum tuning app for drummers. Coming soon.`,
      keywords: `drum tuner, drum tuning, tune drums, drumhead, EUMLab, drum app`,
    },
  },
  de: {
    comingSoon: `Demnächst`,
    meta: {
      wholetitle: `Drum Tuner – EUMLab`,
      description: `Drum Tuner von EUMLab – eine präzise App zum Stimmen von Schlagzeug und Trommeln. Demnächst verfügbar.`,
      keywords: `Drum Tuner, Schlagzeug stimmen, Trommel stimmen, Schlagfell, EUMLab, Drum-App`,
    },
  },
  fr: {
    comingSoon: `Bientôt disponible`,
    meta: {
      wholetitle: `Drum Tuner – EUMLab`,
      description: `Drum Tuner par EUMLab — une application précise pour accorder votre batterie. Bientôt disponible.`,
      keywords: `Drum Tuner, accorder la batterie, accordage de batterie, peau de tambour, EUMLab, application batterie`,
    },
  },
  es: {
    comingSoon: `Próximamente`,
    meta: {
      wholetitle: `Drum Tuner – EUMLab`,
      description: `Drum Tuner de EUMLab: una app precisa para afinar la batería. Próximamente.`,
      keywords: `Drum Tuner, afinar batería, afinación de batería, parche de tambor, EUMLab, app de batería`,
    },
  },
  zh: {
    comingSoon: `即将推出`,
    meta: {
      wholetitle: `Drum Tuner —— EUMLab`,
      description: `EUMLab 出品的 Drum Tuner，为鼓手打造的精准调鼓 App。即将推出。`,
      keywords: `Drum Tuner, 调鼓, 鼓调音, 鼓皮, EUMLab, 鼓 App`,
    },
  },
  ja: {
    comingSoon: `近日公開`,
    meta: {
      wholetitle: `Drum Tuner —— EUMLab`,
      description: `EUMLab の Drum Tuner — ドラマーのための精密なドラムチューニングアプリ。近日公開。`,
      keywords: `Drum Tuner, ドラムチューニング, ドラムを調律, ドラムヘッド, EUMLab, ドラムアプリ`,
    },
  },
};
