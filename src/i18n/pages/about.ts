// Self-contained translation module for the About page (/about/ and /<lang>/about/).
// The press-kit list and press-coverage items are data-driven (press.json) and stay
// in their original language — those are external article titles/quotes. Only the
// page's own prose, section headings and UI labels are localized. `en` is verbatim.
const KIT = 'https://www.dropbox.com/sh/f9xt3gyra3mtxgu/AACd977CjXwMQP_85QgTkl4Oa';

export interface AboutStrings {
  aboutUs: string;
  introH2: string;
  p1: string;
  p2: string;
  p3: string;
  tipHtml: string;
  pressKits: string;
  pressKitsIntroHtml: string;
  pressSheet: string;
  fullPressKit: string;
  pressCoverage: string;
  readAll: string;
  meta: { wholetitle: string; keywords: string; description?: string };
}

export const ABOUT: Record<string, AboutStrings> = {
  en: {
    aboutUs: 'About Us',
    introH2: 'EUMLab is a group of software developers who are passionate about making excellent tools for musicians.',
    p1: 'Founded in 2012, we make apps that help people learn, practice and perform music. These include Guitar Master and Bass Toolkit, the powerful insTuner, and a group of tools for the world’s Ukulele players. Our Pro Metronome was recently feature in Apple’s WWDC 2014 showcase – all together our tools have been downloaded over 150 million times.',
    p2: 'Everyone who works for EUMLab is a musician themselves and we believe that music is the universal language of humankind.',
    p3: 'We are based in beautiful Hangzhou, China and exciting Berlin, Germany.',
    tipHtml: `You can <a href="${KIT}" target="_blank">download our company press kit here.</a>`,
    pressKits: 'Press Kits',
    pressKitsIntroHtml: 'We prepared a full range of <em>screenshots</em>, <em>icons</em>, <em>lifestyle photos</em> and <em>review guides</em> for you.<br/>We’re always interested to know what you’ve written about either of our apps, so please do <a href="mailto:press@eumlab.com">let us know</a>.',
    pressSheet: 'Press Sheet',
    fullPressKit: ' Full Press Kit',
    pressCoverage: 'Press Coverage',
    readAll: 'Read All',
    meta: {
      wholetitle: 'About EUMLab - We are passionate about making excellent tools for musicians.',
      keywords: 'eum, eumlab, xanin, press release, pr, pro metornome, instuner, daw remote, ukulele toolkit, iuke, uke101, ukechords, uketube, ukehero',
    },
  },
  de: {
    aboutUs: 'Über uns',
    introH2: 'EUMLab ist eine Gruppe von Softwareentwicklern, die mit Leidenschaft hervorragende Werkzeuge für Musiker schaffen.',
    p1: 'Seit unserer Gründung 2012 entwickeln wir Apps, die Menschen beim Lernen, Üben und Auftreten helfen – darunter Guitar Master und Bass Toolkit, das leistungsstarke insTuner und eine Reihe von Tools für Ukulelenspieler weltweit. Unser Pro Metronome wurde kürzlich in Apples WWDC-2014-Showcase vorgestellt – insgesamt wurden unsere Tools über 150 Millionen Mal heruntergeladen.',
    p2: 'Jeder bei EUMLab ist selbst Musiker, und wir glauben, dass Musik die universelle Sprache der Menschheit ist.',
    p3: 'Wir sitzen im schönen Hangzhou, China, und im aufregenden Berlin, Deutschland.',
    tipHtml: `Du kannst <a href="${KIT}" target="_blank">hier unser Firmen-Presskit herunterladen.</a>`,
    pressKits: 'Presskits',
    pressKitsIntroHtml: 'Wir haben eine ganze Reihe von <em>Screenshots</em>, <em>Icons</em>, <em>Lifestyle-Fotos</em> und <em>Rezensionsguides</em> für dich vorbereitet.<br/>Uns interessiert immer, was du über unsere Apps schreibst – <a href="mailto:press@eumlab.com">sag uns gerne Bescheid</a>.',
    pressSheet: 'Presseblatt',
    fullPressKit: ' Komplettes Presskit',
    pressCoverage: 'Pressestimmen',
    readAll: 'Alle lesen',
    meta: {
      wholetitle: 'Über EUMLab – hervorragende Werkzeuge für Musiker',
      keywords: 'EUMLab, Polybeat, Presse, Pressemitteilung, Pro Metronome, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master',
      description: 'EUMLab entwickelt seit 2012 preisgekrönte Musik-Apps wie Pro Metronome und insTuner. Über uns, Presskits und Pressestimmen.',
    },
  },
  fr: {
    aboutUs: 'À propos',
    introH2: 'EUMLab est un groupe de développeurs passionnés par la création d’excellents outils pour les musiciens.',
    p1: 'Fondés en 2012, nous créons des applis qui aident à apprendre, pratiquer et jouer de la musique : Guitar Master et Bass Toolkit, le puissant insTuner et une série d’outils pour les ukulélistes du monde entier. Notre Pro Metronome a récemment été présenté lors de la WWDC 2014 d’Apple – au total, nos outils ont été téléchargés plus de 150 millions de fois.',
    p2: 'Chez EUMLab, tout le monde est musicien, et nous croyons que la musique est le langage universel de l’humanité.',
    p3: 'Nous sommes basés dans la magnifique Hangzhou, en Chine, et à Berlin, en Allemagne.',
    tipHtml: `Vous pouvez <a href="${KIT}" target="_blank">télécharger notre press kit ici.</a>`,
    pressKits: 'Press kits',
    pressKitsIntroHtml: 'Nous avons préparé pour vous toute une série de <em>captures d’écran</em>, d’<em>icônes</em>, de <em>photos lifestyle</em> et de <em>guides de test</em>.<br/>Nous sommes toujours curieux de savoir ce que vous écrivez sur nos applis, alors <a href="mailto:press@eumlab.com">faites-le-nous savoir</a>.',
    pressSheet: 'Fiche de presse',
    fullPressKit: ' Press kit complet',
    pressCoverage: 'Revue de presse',
    readAll: 'Tout lire',
    meta: {
      wholetitle: 'À propos d’EUMLab – d’excellents outils pour musiciens',
      keywords: 'EUMLab, Polybeat, presse, communiqué, Pro Metronome, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master',
      description: 'Depuis 2012, EUMLab crée des applis musicales primées comme Pro Metronome et insTuner. À propos, press kits et revue de presse.',
    },
  },
  es: {
    aboutUs: 'Acerca de',
    introH2: 'EUMLab es un grupo de desarrolladores de software apasionados por crear excelentes herramientas para músicos.',
    p1: 'Fundados en 2012, creamos apps que ayudan a aprender, practicar e interpretar música: Guitar Master y Bass Toolkit, el potente insTuner y un conjunto de herramientas para los ukelelistas de todo el mundo. Nuestro Pro Metronome se presentó recientemente en el escaparate de la WWDC 2014 de Apple; en total, nuestras herramientas se han descargado más de 150 millones de veces.',
    p2: 'Todos los que trabajamos en EUMLab somos músicos, y creemos que la música es el lenguaje universal de la humanidad.',
    p3: 'Estamos en la hermosa Hangzhou, China, y en la vibrante Berlín, Alemania.',
    tipHtml: `Puedes <a href="${KIT}" target="_blank">descargar aquí nuestro press kit corporativo.</a>`,
    pressKits: 'Press kits',
    pressKitsIntroHtml: 'Hemos preparado para ti una amplia gama de <em>capturas de pantalla</em>, <em>iconos</em>, <em>fotos de estilo de vida</em> y <em>guías de reseña</em>.<br/>Siempre nos interesa saber qué has escrito sobre nuestras apps, así que <a href="mailto:press@eumlab.com">cuéntanoslo</a>.',
    pressSheet: 'Hoja de prensa',
    fullPressKit: ' Press kit completo',
    pressCoverage: 'Repercusión en prensa',
    readAll: 'Leer todo',
    meta: {
      wholetitle: 'Acerca de EUMLab – excelentes herramientas para músicos',
      keywords: 'EUMLab, Polybeat, prensa, nota de prensa, Pro Metronome, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master',
      description: 'Desde 2012, EUMLab crea apps de música premiadas como Pro Metronome e insTuner. Quiénes somos, press kits y prensa.',
    },
  },
  zh: {
    aboutUs: '关于我们',
    introH2: 'EUMLab 是一群热衷于为音乐人打造出色工具的软件开发者。',
    p1: '我们成立于 2012 年，开发帮助人们学习、练习和演奏音乐的 App，包括 Guitar Master 和 Bass Toolkit、强大的 insTuner，以及面向全球尤克里里玩家的一系列工具。我们的 Pro Metronome 不久前亮相 Apple WWDC 2014 展示 —— 我们的工具累计下载量已超过 1.5 亿次。',
    p2: 'EUMLab 的每一位成员都是音乐人，我们相信音乐是全人类共通的语言。',
    p3: '我们扎根于美丽的中国杭州和充满活力的德国柏林。',
    tipHtml: `你可以<a href="${KIT}" target="_blank">在此下载我们的公司媒体资料包。</a>`,
    pressKits: '媒体资料包',
    pressKitsIntroHtml: '我们为你准备了全套<em>截图</em>、<em>图标</em>、<em>生活方式照片</em>和<em>评测指南</em>。<br/>我们一直很想知道你如何评价我们的 App，欢迎<a href="mailto:press@eumlab.com">告诉我们</a>。',
    pressSheet: '新闻稿',
    fullPressKit: ' 完整媒体资料包',
    pressCoverage: '媒体报道',
    readAll: '查看全部',
    meta: {
      wholetitle: '关于 EUMLab —— 为音乐人打造出色的工具',
      keywords: 'EUMLab, Polybeat, 媒体, 新闻稿, Pro Metronome, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master',
      description: 'EUMLab 自 2012 年起开发屡获殊荣的音乐 App，如 Pro Metronome 与 insTuner。了解我们、媒体资料包与媒体报道。',
    },
  },
  ja: {
    aboutUs: '私たちについて',
    introH2: 'EUMLab は、音楽家のための優れたツール作りに情熱を注ぐソフトウェア開発者のチームです。',
    p1: '2012 年の創業以来、私たちは音楽の学習・練習・演奏を助けるアプリを開発してきました。Guitar Master や Bass Toolkit、強力な insTuner、そして世界中のウクレレ奏者のための一連のツールなどです。Pro Metronome は先日 Apple の WWDC 2014 で紹介され、私たちのツールは合計で 1億5,000万回以上ダウンロードされています。',
    p2: 'EUMLab で働く全員が音楽家であり、私たちは音楽こそ人類共通の言語だと信じています。',
    p3: '私たちは美しい中国・杭州と、刺激的なドイツ・ベルリンを拠点としています。',
    tipHtml: `<a href="${KIT}" target="_blank">こちらから会社のプレスキットをダウンロード</a>できます。`,
    pressKits: 'プレスキット',
    pressKitsIntroHtml: '<em>スクリーンショット</em>、<em>アイコン</em>、<em>ライフスタイル写真</em>、<em>レビューガイド</em>を一通りご用意しました。<br/>私たちのアプリについて書いてくださった内容にいつも関心がありますので、<a href="mailto:press@eumlab.com">ぜひお知らせください</a>。',
    pressSheet: 'プレスシート',
    fullPressKit: ' 完全版プレスキット',
    pressCoverage: 'メディア掲載',
    readAll: 'すべて読む',
    meta: {
      wholetitle: 'EUMLab について —— 音楽家のための優れたツール',
      keywords: 'EUMLab, Polybeat, プレス, ニュースリリース, Pro Metronome, insTuner, DAW Remote, Ukulele Toolkit, iUke, Guitar Master',
      description: '2012 年以来、EUMLab は Pro Metronome や insTuner など受賞歴のある音楽アプリを開発。会社概要、プレスキット、メディア掲載。',
    },
  },
};
