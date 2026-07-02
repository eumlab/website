// Self-contained translation module for the UkeTube page (route /uketube/ and
// /<lang>/uketube/). The `en` entry reproduces the legacy copy verbatim so the
// English page renders byte-identical (it is in the verify reference set).
export interface AppStrings {
  taglineHtml: string;
  downloadAppStore: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const UKETUBE: Record<string, AppStrings> = {
  en: {
    taglineHtml: `Learn the ukulele using YouTube.<br/>
            Watch covers, tutorials, pro tips and more.`,
    downloadAppStore: `Download UkeTube on the App Store`,
    meta: {
      wholetitle: `UkeTube - EUMLab `,
      description: `UkeTube app helps you learn how to play ukulele by watching tutorials, covers, tricks on YouTube.`,
      keywords: `ukulele, cover, youtube, tutorial, hey soul, over the rainbow, somewhere over, learn ukulele, play ukulele, uke, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },
  de: {
    taglineHtml: `Lerne Ukulele mit YouTube.<br/>
            Sieh dir Covers, Tutorials, Profi-Tipps und mehr an.`,
    downloadAppStore: `UkeTube im App Store laden`,
    meta: {
      wholetitle: `UkeTube – Ukulele lernen mit YouTube | EUMLab`,
      description: `Mit UkeTube lernst du Ukulele spielen, indem du Tutorials, Covers und Tricks auf YouTube ansiehst – Cover, Profi-Tipps und mehr.`,
      keywords: `Ukulele, Cover, YouTube, Tutorial, Ukulele lernen, Ukulele spielen, uke, App, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, Musiker, üben`,
    },
  },
  fr: {
    taglineHtml: `Apprenez le ukulélé grâce à YouTube.<br/>
            Regardez des reprises, tutoriels, astuces de pros et plus encore.`,
    downloadAppStore: `Télécharger UkeTube sur l’App Store`,
    meta: {
      wholetitle: `UkeTube – apprendre le ukulélé sur YouTube | EUMLab`,
      description: `UkeTube vous aide à apprendre le ukulélé en regardant des tutoriels, des reprises et des astuces sur YouTube.`,
      keywords: `ukulélé, reprise, YouTube, tutoriel, apprendre le ukulélé, jouer du ukulélé, uke, appli, EUMLab, Polybeat, iPhone, iPad, iOS, musique, musicien, pratiquer`,
    },
  },
  es: {
    taglineHtml: `Aprende a tocar el ukelele con YouTube.<br/>
            Mira versiones, tutoriales, consejos de profesionales y mucho más.`,
    downloadAppStore: `Descargar UkeTube en el App Store`,
    meta: {
      wholetitle: `UkeTube – aprende ukelele con YouTube | EUMLab`,
      description: `UkeTube te ayuda a aprender a tocar el ukelele viendo tutoriales, versiones y trucos en YouTube.`,
      keywords: `ukelele, versión, YouTube, tutorial, aprender ukelele, tocar ukelele, uke, app, EUMLab, Polybeat, iPhone, iPad, iOS, música, músico, practicar`,
    },
  },
  zh: {
    taglineHtml: `用 YouTube 学习尤克里里。<br/>
            观看翻弹、教程、专业技巧等更多内容。`,
    downloadAppStore: `在 App Store 下载 UkeTube`,
    meta: {
      wholetitle: `UkeTube —— 用 YouTube 学尤克里里 | EUMLab`,
      description: `UkeTube 帮助你通过观看 YouTube 上的教程、翻弹和技巧，学习如何弹奏尤克里里。`,
      keywords: `尤克里里, 翻弹, YouTube, 教程, 学尤克里里, 弹尤克里里, uke, App, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 音乐人, 练习`,
    },
  },
  ja: {
    taglineHtml: `YouTube でウクレレを学ぼう。<br/>
            カバー演奏、チュートリアル、プロのコツなどをチェック。`,
    downloadAppStore: `App Store で UkeTube をダウンロード`,
    meta: {
      wholetitle: `UkeTube —— YouTube でウクレレを学ぶ | EUMLab`,
      description: `UkeTube は、YouTube のチュートリアルやカバー演奏、テクニックを見ながらウクレレの弾き方を学べるアプリです。`,
      keywords: `ウクレレ, カバー, YouTube, チュートリアル, ウクレレを学ぶ, ウクレレを弾く, uke, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, ミュージシャン, 練習`,
    },
  },
};
