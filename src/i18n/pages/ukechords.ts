// Self-contained translation module for the UkeChords page (route /ukechords/
// and /<lang>/ukechords/). Per-page modules avoid editing a central dictionary,
// so localized pages can be added independently. The `en` entry reproduces the
// legacy copy verbatim so the English page renders byte-identical (it is in the
// verify reference set). App/brand names (UkeChords, App Store) stay in English.
export interface AppStrings {
  taglineHtml: string;
  downloadAppStore: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const UKECHORDS: Record<string, AppStrings> = {
  en: {
    taglineHtml: `Learn uke chords with<br/>real fingering positions`,
    downloadAppStore: `Download UkeChords on the App Store`,
    meta: {
      wholetitle: `UkeChords - EUMLab `,
      description: `UkeChords app helps you learn ukulele chords with real fingering position photos.`,
      keywords: `ukulele, chord, chords, chord diagram, fingering, finger, photo, c chord, Bb, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },
  de: {
    taglineHtml: `Lerne Ukulelen-Akkorde mit<br/>echten Griffpositionen`,
    downloadAppStore: `UkeChords im App Store laden`,
    meta: {
      wholetitle: `UkeChords – Ukulelen-Akkorde lernen | EUMLab`,
      description: `Die UkeChords-App hilft dir, Ukulelen-Akkorde mit echten Fotos der Griffpositionen zu lernen.`,
      keywords: `Ukulele, Akkord, Akkorde, Akkorddiagramm, Griff, Fingersatz, Foto, C-Akkord, Bb, Tool, App, eumlab, eum, xanin, iPhone, iPad, iOS, Android, Musik, Musiker, lernen, üben, Schüler`,
    },
  },
  fr: {
    taglineHtml: `Apprenez les accords de ukulélé avec<br/>de vraies positions de doigts`,
    downloadAppStore: `Télécharger UkeChords sur l’App Store`,
    meta: {
      wholetitle: `UkeChords – accords de ukulélé | EUMLab`,
      description: `L’appli UkeChords vous aide à apprendre les accords de ukulélé avec de vraies photos des positions de doigts.`,
      keywords: `ukulélé, accord, accords, diagramme d’accord, doigté, doigt, photo, accord de Do, Bb, outil, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, musique, musicien, apprendre, pratiquer, étudiant`,
    },
  },
  es: {
    taglineHtml: `Aprende acordes de ukelele con<br/>posiciones de dedos reales`,
    downloadAppStore: `Descargar UkeChords en el App Store`,
    meta: {
      wholetitle: `UkeChords – acordes de ukelele | EUMLab`,
      description: `La app UkeChords te ayuda a aprender acordes de ukelele con fotos reales de las posiciones de los dedos.`,
      keywords: `ukelele, acorde, acordes, diagrama de acordes, digitación, dedo, foto, acorde de Do, Bb, herramienta, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, música, músico, aprender, practicar, estudiante`,
    },
  },
  zh: {
    taglineHtml: `用真实的指位<br/>学习尤克里里和弦`,
    downloadAppStore: `在 App Store 下载 UkeChords`,
    meta: {
      wholetitle: `UkeChords —— 学习尤克里里和弦 | EUMLab`,
      description: `UkeChords 通过真实的指位照片，帮助你学习尤克里里和弦。`,
      keywords: `尤克里里, 和弦, 和弦图, 指法, 指位, 手指, 照片, C 和弦, Bb, 工具, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, 音乐, 音乐人, 学习, 练习, 学生`,
    },
  },
  ja: {
    taglineHtml: `本物の指の押さえ方で<br/>ウクレレのコードを学ぼう`,
    downloadAppStore: `App Store で UkeChords をダウンロード`,
    meta: {
      wholetitle: `UkeChords —— ウクレレのコードを学ぶ | EUMLab`,
      description: `UkeChords は、実際の指の押さえ方の写真でウクレレのコードを学べるアプリです。`,
      keywords: `ウクレレ, コード, コードダイアグラム, 運指, 指, 写真, Cコード, Bb, ツール, アプリ, eumlab, eum, xanin, iPhone, iPad, iOS, Android, 音楽, ミュージシャン, 学ぶ, 練習, 学生`,
    },
  },
};
