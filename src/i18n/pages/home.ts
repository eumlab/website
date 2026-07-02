// Self-contained translation module for the home page (route / and /<lang>/).
// Per-page modules avoid editing a central dictionary, so localized pages can be
// added independently. The `en` entry reproduces the legacy copy verbatim so the
// English home renders byte-identical (it is in the verify reference set).
export interface HomeStrings {
  mainSloganHtml: string;
  figureH2Html: string;
  figureH3Html: string;
  loading: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const HOME: Record<string, HomeStrings> = {
  en: {
    mainSloganHtml: 'Welcome to <em>EUMLab</em>,<br/>\n            creators of <em>the best apps for musicians</em> out there',
    figureH2Html: 'With <em>150 million</em> downloads,<br/>musicians get inspired by our apps',
    figureH3Html: "And they <em >♥</em> them. Check out what they're saying... ",
    loading: 'Loading',
    meta: {
      wholetitle: 'EUMLab, creators of the best apps for musicians out there',
      description: 'EUMLab create apps help people learn, practice and perform music. The award winning products including Pro Metronome, insTuner, Ukulele Toolkit, Guitar Master, iUke and more.',
      keywords: 'music apps, eum, eumlab, xanin, pro metronome, metornome, instuner, daw remote, ukulele toolkit, iuke, ukechords, guitar master, bass toolkit, drum loops, piano handbook, tempo, education, learn music',
    },
  },
  de: {
    mainSloganHtml: 'Willkommen bei <em>EUMLab</em>,<br/>den Machern <em>der besten Apps für Musiker</em>',
    figureH2Html: 'Mit <em>150 Millionen</em> Downloads<br/>lassen sich Musiker von unseren Apps inspirieren',
    figureH3Html: 'Und sie <em>♥</em> sie. Sieh, was sie sagen …',
    loading: 'Wird geladen',
    meta: {
      wholetitle: 'EUMLab – die besten Apps für Musiker',
      description: 'EUMLab entwickelt Apps, die beim Lernen, Üben und Auftreten helfen – darunter Pro Metronome, insTuner, Ukulele Toolkit, Guitar Master, iUke und mehr.',
      keywords: 'Musik-Apps, EUMLab, Polybeat, Pro Metronome, Metronom, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master, Bass Toolkit, Drum Loops, Tempo, Musik lernen',
    },
  },
  fr: {
    mainSloganHtml: 'Bienvenue chez <em>EUMLab</em>,<br/>créateurs des <em>meilleures applis pour musiciens</em>',
    figureH2Html: 'Avec <em>150 millions</em> de téléchargements,<br/>les musiciens s’inspirent de nos applis',
    figureH3Html: 'Et ils les <em>♥</em>. Découvrez ce qu’ils en disent…',
    loading: 'Chargement',
    meta: {
      wholetitle: 'EUMLab – les meilleures applis pour musiciens',
      description: 'EUMLab crée des applis pour apprendre, pratiquer et jouer de la musique : Pro Metronome, insTuner, Ukulele Toolkit, Guitar Master, iUke et plus.',
      keywords: 'applis musique, EUMLab, Polybeat, Pro Metronome, métronome, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master, Bass Toolkit, Drum Loops, tempo, apprendre la musique',
    },
  },
  es: {
    mainSloganHtml: 'Bienvenido a <em>EUMLab</em>,<br/>creadores de <em>las mejores apps para músicos</em>',
    figureH2Html: 'Con <em>150 millones</em> de descargas,<br/>los músicos se inspiran con nuestras apps',
    figureH3Html: 'Y las <em>♥</em>. Mira lo que dicen…',
    loading: 'Cargando',
    meta: {
      wholetitle: 'EUMLab – las mejores apps para músicos',
      description: 'EUMLab crea apps para aprender, practicar e interpretar música: Pro Metronome, insTuner, Ukulele Toolkit, Guitar Master, iUke y más.',
      keywords: 'apps de música, EUMLab, Polybeat, Pro Metronome, metrónomo, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master, Bass Toolkit, Drum Loops, tempo, aprender música',
    },
  },
  zh: {
    mainSloganHtml: '欢迎来到 <em>EUMLab</em>，<br/>打造<em>最好的音乐人 App</em>',
    figureH2Html: '凭借 <em>1.5 亿</em> 次下载，<br/>音乐人从我们的 App 中获得灵感',
    figureH3Html: '而且他们<em>♥</em>它们。看看大家怎么说……',
    loading: '加载中',
    meta: {
      wholetitle: 'EUMLab —— 为音乐人打造的最佳 App',
      description: 'EUMLab 开发帮助人们学习、练习与演奏音乐的 App，包括 Pro Metronome、insTuner、Ukulele Toolkit、Guitar Master、iUke 等。',
      keywords: '音乐 App, EUMLab, Polybeat, Pro Metronome, 节拍器, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master, Bass Toolkit, Drum Loops, 速度, 学音乐',
    },
  },
  ja: {
    mainSloganHtml: '<em>EUMLab</em> へようこそ。<br/><em>音楽家のための最高のアプリ</em>を作っています',
    figureH2Html: '<em>1億5,000万</em>ダウンロード。<br/>音楽家が私たちのアプリからインスピレーションを得ています',
    figureH3Html: 'しかも<em>♥</em>。みんなの声をチェック…',
    loading: '読み込み中',
    meta: {
      wholetitle: 'EUMLab —— 音楽家のための最高のアプリ',
      description: 'EUMLab は、音楽の学習・練習・演奏を助けるアプリを開発しています。Pro Metronome、insTuner、Ukulele Toolkit、Guitar Master、iUke など。',
      keywords: '音楽アプリ, EUMLab, Polybeat, Pro Metronome, メトロノーム, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master, Bass Toolkit, Drum Loops, テンポ, 音楽を学ぶ',
    },
  },
};
