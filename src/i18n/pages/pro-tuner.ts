// Self-contained translation module for the Pro Tuner page (route /pro-tuner/
// and /<lang>/pro-tuner/). The `en` entry reproduces the legacy copy verbatim so
// the English page renders byte-identical (it is in the verify reference set).
export interface AppStrings {
  appTitle: string;
  appStoreLink: string;
  appStoreTitle: string;

  whatTitle: string;
  whatDesc1Html: string;
  whatDesc2Html: string;
  whatDesc3Html: string;

  accurateTitle: string;
  accurateDescHtml: string;

  proTitle: string;
  proDescHtml: string;

  universalTitle: string;
  universalDesc: string;

  clipTitle: string;
  clipDesc: string;

  featuresTitle: string;
  featuresHtml: string[];

  categoryTitle: string;
  categoryDesc: string;

  meta: { wholetitle: string; description: string; keywords: string };
}

export const PRO_TUNER: Record<string, AppStrings> = {
  en: {
    appTitle: 'Pro Tuner',
    appStoreLink: 'Available on the App Store',
    appStoreTitle: 'Download Pro Tuner from APP Store',

    whatTitle: 'What is Pro Tuner',
    whatDesc1Html: 'Pro Tuner is a well designed <em>Chromatic Tuner</em> on iPhone/iPad especially for Guitar and Bass players.',
    whatDesc2Html: "It's highly accurate (up to ±1/100 semitone (<em>±1 cent</em>) precise) and has <em>more than 100 built-in tuning modes</em>. Moreover, by tapping the strings, you can get <em>REAL</em> guitar reference sounds easily.",
    whatDesc3Html: 'Pro Tuner supports two input methods: <em>Built-in Microphone</em> Mode and <em>Line-in Mode</em>. Guitar Clip Microphone is also supported.',

    accurateTitle: "It's Accurate",
    accurateDescHtml: "Pro Tuner uses a highly accurate algorithm to make sure your guitar sounds more accurate than ever(<em>±1 cent</em> precise), even when only using iPhone's inner-microphone.",

    proTitle: "It's Pro",
    proDescHtml: 'Pro Tuner has over 100 tuning modes built in. Each mode has real guitar reference sounds. Pro Tuner is light, but still PRO!',

    universalTitle: "It's Universal",
    universalDesc: "You don't need to purchase iPhone and iPad separately. Pro Tuner a is universal APP. It works on all of your iOS devices.",

    clipTitle: 'Support Clip Microphone',
    clipDesc: 'With a clip microphone, you tuning will become more accurate.',

    featuresTitle: 'Features List',
    featuresHtml: [
      '<em>User-friendly.</em> Extremely easy to use',
      '<em>Universal APP.</em> Purchase once, available on all of your iPhone/iPod/iPad.',
      '<em>Support chromatic tuning.</em> Especially optimized for acoustic/electric Guitar and Bass.',
      '<em>Real Guitar Reference Sounds.</em> Helps to do coarse tuning or practice tuning by ear.',
      '<em>Tuning Mode. Over 100 included.</em>',
      '<em>Input-Level indicator.</em> Make sure your input level is always right.',
    ],

    categoryTitle: 'Built-in Tuning Modes Category',
    categoryDesc: 'General Tunings / Lower Tunings / Higher Tunings / Dropped Tunings / Double-dropped Tunings / Major Open Tunings / Minor Open Tunings / Cross-note Tunings / Modal Tunings / Miscellaneous Tunings / 5 String Tunings / 7 String Tunings / 8 String Tunings / Bass Tunings / Ukelele Tunings / Mandolin Family Tunings / Banjo Family Tunings / Bouzouki Tunings',

    meta: {
      wholetitle: 'Pro Tuner - EUMLab ',
      description: 'Pro Tuner app is designed for tuning your guitar, ukulele, mandolin and other fretted instruments. It supports standard, open, dropped tunings.',
      keywords: 'pro tuner, tuner, guitar tuner, tune a guitar, tuning a guitar, tune ukulele, saxophone, violin, viola, cello, tone generator, guitar tuna, cleartune, online guitar tuner, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student',
    },
  },

  de: {
    appTitle: 'Pro Tuner',
    appStoreLink: 'Im App Store erhältlich',
    appStoreTitle: 'Pro Tuner im App Store laden',

    whatTitle: 'Was ist Pro Tuner',
    whatDesc1Html: 'Pro Tuner ist ein durchdachtes <em>chromatisches Stimmgerät</em> für iPhone/iPad, besonders für Gitarristen und Bassisten.',
    whatDesc2Html: 'Es ist hochpräzise (bis zu ±1/100 Halbton (<em>±1 Cent</em> genau)) und bietet <em>über 100 integrierte Stimm-Modi</em>. Durch Antippen der Saiten erhältst du zudem ganz einfach <em>ECHTE</em> Gitarren-Referenztöne.',
    whatDesc3Html: 'Pro Tuner unterstützt zwei Eingabemethoden: den Modus <em>internes Mikrofon</em> und den <em>Line-in-Modus</em>. Auch ein Clip-Mikrofon für die Gitarre wird unterstützt.',

    accurateTitle: 'Es ist präzise',
    accurateDescHtml: 'Pro Tuner nutzt einen hochpräzisen Algorithmus, damit deine Gitarre genauer klingt als je zuvor (<em>±1 Cent</em> genau) – selbst mit dem internen Mikrofon des iPhones.',

    proTitle: 'Es ist Pro',
    proDescHtml: 'Pro Tuner bietet über 100 integrierte Stimm-Modi. Jeder Modus enthält echte Gitarren-Referenztöne. Pro Tuner ist schlank, aber trotzdem PRO!',

    universalTitle: 'Es ist universal',
    universalDesc: 'Du musst nicht separat für iPhone und iPad kaufen. Pro Tuner ist eine Universal-App. Sie läuft auf all deinen iOS-Geräten.',

    clipTitle: 'Clip-Mikrofon wird unterstützt',
    clipDesc: 'Mit einem Clip-Mikrofon wird dein Stimmen noch genauer.',

    featuresTitle: 'Funktionsliste',
    featuresHtml: [
      '<em>Benutzerfreundlich.</em> Extrem einfach zu bedienen',
      '<em>Universal-App.</em> Einmal kaufen, auf all deinen iPhone/iPod/iPad verfügbar.',
      '<em>Chromatisches Stimmen.</em> Besonders für Akustik-/E-Gitarre und Bass optimiert.',
      '<em>Echte Gitarren-Referenztöne.</em> Hilft beim Grobstimmen oder beim Üben des Stimmens nach Gehör.',
      '<em>Stimm-Modi. Über 100 enthalten.</em>',
      '<em>Eingangspegel-Anzeige.</em> Stellt sicher, dass dein Eingangspegel immer stimmt.',
    ],

    categoryTitle: 'Kategorien der integrierten Stimm-Modi',
    categoryDesc: 'Standard-Stimmungen / tiefere Stimmungen / höhere Stimmungen / Dropped-Stimmungen / Double-Dropped-Stimmungen / offene Dur-Stimmungen / offene Moll-Stimmungen / Cross-Note-Stimmungen / modale Stimmungen / sonstige Stimmungen / 5-Saiter-Stimmungen / 7-Saiter-Stimmungen / 8-Saiter-Stimmungen / Bass-Stimmungen / Ukulele-Stimmungen / Mandolinen-Stimmungen / Banjo-Stimmungen / Bouzouki-Stimmungen',

    meta: {
      wholetitle: 'Pro Tuner – chromatisches Stimmgerät | EUMLab',
      description: 'Pro Tuner stimmt Gitarre, Ukulele, Mandoline und andere Bundinstrumente. Hochpräzises chromatisches Stimmgerät mit über 100 Stimm-Modi für iPhone und iPad.',
      keywords: 'Pro Tuner, Stimmgerät, Gitarren-Stimmgerät, Gitarre stimmen, Ukulele stimmen, chromatisches Stimmgerät, Tongenerator, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, Musiker, üben',
    },
  },

  fr: {
    appTitle: 'Pro Tuner',
    appStoreLink: 'Disponible sur l’App Store',
    appStoreTitle: 'Télécharger Pro Tuner sur l’App Store',

    whatTitle: 'Qu’est-ce que Pro Tuner',
    whatDesc1Html: 'Pro Tuner est un <em>accordeur chromatique</em> bien conçu pour iPhone/iPad, spécialement pensé pour les guitaristes et bassistes.',
    whatDesc2Html: 'Il est très précis (jusqu’à ±1/100 de demi-ton (<em>±1 cent</em> de précision)) et propose <em>plus de 100 modes d’accordage intégrés</em>. De plus, en pinçant les cordes, vous obtenez facilement de <em>VRAIS</em> sons de référence de guitare.',
    whatDesc3Html: 'Pro Tuner prend en charge deux méthodes d’entrée : le mode <em>microphone intégré</em> et le <em>mode Line-in</em>. Le micro-pince pour guitare est également pris en charge.',

    accurateTitle: 'Il est précis',
    accurateDescHtml: 'Pro Tuner utilise un algorithme de haute précision pour que votre guitare sonne plus juste que jamais (<em>±1 cent</em> de précision), même avec le seul micro interne de l’iPhone.',

    proTitle: 'Il est Pro',
    proDescHtml: 'Pro Tuner intègre plus de 100 modes d’accordage. Chaque mode propose de vrais sons de référence de guitare. Pro Tuner est léger, mais reste PRO !',

    universalTitle: 'Il est universel',
    universalDesc: 'Pas besoin d’acheter séparément pour iPhone et iPad. Pro Tuner est une app universelle. Elle fonctionne sur tous vos appareils iOS.',

    clipTitle: 'Compatible micro-pince',
    clipDesc: 'Avec un micro-pince, votre accordage devient encore plus précis.',

    featuresTitle: 'Liste des fonctionnalités',
    featuresHtml: [
      '<em>Convivial.</em> Extrêmement simple à utiliser',
      '<em>App universelle.</em> Achetez une fois, disponible sur tous vos iPhone/iPod/iPad.',
      '<em>Accordage chromatique.</em> Spécialement optimisé pour la guitare acoustique/électrique et la basse.',
      '<em>Vrais sons de référence de guitare.</em> Aide à l’accordage grossier ou à l’entraînement de l’oreille.',
      '<em>Modes d’accordage. Plus de 100 inclus.</em>',
      '<em>Indicateur de niveau d’entrée.</em> Assurez-vous que votre niveau d’entrée est toujours bon.',
    ],

    categoryTitle: 'Catégories de modes d’accordage intégrés',
    categoryDesc: 'Accordages standard / accordages plus graves / accordages plus aigus / accordages dropped / accordages double-dropped / accordages ouverts majeurs / accordages ouverts mineurs / accordages cross-note / accordages modaux / accordages divers / accordages 5 cordes / accordages 7 cordes / accordages 8 cordes / accordages de basse / accordages de ukulélé / accordages de la famille des mandolines / accordages de la famille des banjos / accordages de bouzouki',

    meta: {
      wholetitle: 'Pro Tuner – accordeur chromatique | EUMLab',
      description: 'Pro Tuner accorde guitare, ukulélé, mandoline et autres instruments à frettes. Accordeur chromatique très précis avec plus de 100 modes pour iPhone et iPad.',
      keywords: 'Pro Tuner, accordeur, accordeur de guitare, accorder une guitare, accorder un ukulélé, accordeur chromatique, générateur de tons, EUMLab, Polybeat, iPhone, iPad, iOS, musique, musicien, pratique',
    },
  },

  es: {
    appTitle: 'Pro Tuner',
    appStoreLink: 'Disponible en el App Store',
    appStoreTitle: 'Descargar Pro Tuner del App Store',

    whatTitle: 'Qué es Pro Tuner',
    whatDesc1Html: 'Pro Tuner es un <em>afinador cromático</em> bien diseñado para iPhone/iPad, especialmente pensado para guitarristas y bajistas.',
    whatDesc2Html: 'Es muy preciso (hasta ±1/100 de semitono (<em>±1 cent</em> de precisión)) y tiene <em>más de 100 modos de afinación integrados</em>. Además, al pulsar las cuerdas obtienes fácilmente sonidos de referencia de guitarra <em>REALES</em>.',
    whatDesc3Html: 'Pro Tuner admite dos métodos de entrada: el modo <em>micrófono integrado</em> y el <em>modo Line-in</em>. También es compatible con el micrófono de pinza para guitarra.',

    accurateTitle: 'Es preciso',
    accurateDescHtml: 'Pro Tuner usa un algoritmo de alta precisión para que tu guitarra suene más afinada que nunca (<em>±1 cent</em> de precisión), incluso usando solo el micrófono interno del iPhone.',

    proTitle: 'Es Pro',
    proDescHtml: 'Pro Tuner incluye más de 100 modos de afinación. Cada modo tiene sonidos de referencia de guitarra reales. Pro Tuner es ligero, ¡pero sigue siendo PRO!',

    universalTitle: 'Es universal',
    universalDesc: 'No necesitas comprar por separado para iPhone y iPad. Pro Tuner es una app universal. Funciona en todos tus dispositivos iOS.',

    clipTitle: 'Compatible con micrófono de pinza',
    clipDesc: 'Con un micrófono de pinza, tu afinación será aún más precisa.',

    featuresTitle: 'Lista de funciones',
    featuresHtml: [
      '<em>Fácil de usar.</em> Extremadamente sencillo de manejar',
      '<em>App universal.</em> Compra una vez, disponible en todos tus iPhone/iPod/iPad.',
      '<em>Afinación cromática.</em> Especialmente optimizada para guitarra acústica/eléctrica y bajo.',
      '<em>Sonidos de referencia de guitarra reales.</em> Ayuda a afinar de forma aproximada o a practicar la afinación de oído.',
      '<em>Modos de afinación. Más de 100 incluidos.</em>',
      '<em>Indicador de nivel de entrada.</em> Asegúrate de que tu nivel de entrada siempre sea el correcto.',
    ],

    categoryTitle: 'Categorías de modos de afinación integrados',
    categoryDesc: 'Afinaciones estándar / afinaciones más graves / afinaciones más agudas / afinaciones dropped / afinaciones double-dropped / afinaciones abiertas mayores / afinaciones abiertas menores / afinaciones cross-note / afinaciones modales / afinaciones varias / afinaciones de 5 cuerdas / afinaciones de 7 cuerdas / afinaciones de 8 cuerdas / afinaciones de bajo / afinaciones de ukelele / afinaciones de la familia de la mandolina / afinaciones de la familia del banjo / afinaciones de bouzouki',

    meta: {
      wholetitle: 'Pro Tuner – afinador cromático | EUMLab',
      description: 'Pro Tuner afina guitarra, ukelele, mandolina y otros instrumentos de trastes. Afinador cromático muy preciso con más de 100 modos para iPhone y iPad.',
      keywords: 'Pro Tuner, afinador, afinador de guitarra, afinar una guitarra, afinar ukelele, afinador cromático, generador de tonos, EUMLab, Polybeat, iPhone, iPad, iOS, música, músico, práctica',
    },
  },

  zh: {
    appTitle: 'Pro Tuner',
    appStoreLink: '在 App Store 上架',
    appStoreTitle: '从 App Store 下载 Pro Tuner',

    whatTitle: '什么是 Pro Tuner',
    whatDesc1Html: 'Pro Tuner 是一款专为吉他和贝斯演奏者设计、做工精良的 iPhone/iPad <em>半音调音器</em>。',
    whatDesc2Html: '它精度极高（可达 ±1/100 半音，<em>±1 音分</em>），并内置<em>超过 100 种调音模式</em>。此外，轻拨琴弦即可轻松获得<em>真实</em>的吉他参考音。',
    whatDesc3Html: 'Pro Tuner 支持两种输入方式：<em>内置麦克风</em>模式和 <em>Line-in 模式</em>。同时也支持吉他夹式麦克风。',

    accurateTitle: '它很精准',
    accurateDescHtml: 'Pro Tuner 采用高精度算法，即使只用 iPhone 的内置麦克风，也能让你的吉他比以往更准（<em>±1 音分</em>精度）。',

    proTitle: '它很专业',
    proDescHtml: 'Pro Tuner 内置超过 100 种调音模式，每种模式都配有真实的吉他参考音。Pro Tuner 轻巧，却依然 PRO！',

    universalTitle: '它是通用版',
    universalDesc: '无需为 iPhone 和 iPad 分别购买。Pro Tuner 是一款通用 App，可在你所有的 iOS 设备上使用。',

    clipTitle: '支持夹式麦克风',
    clipDesc: '使用夹式麦克风，你的调音会更加精准。',

    featuresTitle: '功能列表',
    featuresHtml: [
      '<em>易于上手。</em>极其简单易用',
      '<em>通用 App。</em>一次购买，即可在你所有的 iPhone/iPod/iPad 上使用。',
      '<em>支持半音调音。</em>专为原声/电吉他和贝斯优化。',
      '<em>真实吉他参考音。</em>有助于粗调或练习用耳朵调音。',
      '<em>调音模式，内置超过 100 种。</em>',
      '<em>输入电平指示器。</em>确保你的输入电平始终合适。',
    ],

    categoryTitle: '内置调音模式分类',
    categoryDesc: '标准调音 / 降调调音 / 升调调音 / Dropped 调音 / Double-dropped 调音 / 大调开放调音 / 小调开放调音 / Cross-note 调音 / 调式调音 / 其他调音 / 5 弦调音 / 7 弦调音 / 8 弦调音 / 贝斯调音 / 尤克里里调音 / 曼陀林家族调音 / 班卓家族调音 / 布祖基调音',

    meta: {
      wholetitle: 'Pro Tuner —— 半音调音器 | EUMLab',
      description: 'Pro Tuner 专为吉他、尤克里里、曼陀林等品丝乐器调音而设计，支持标准、开放与降调等调音，内置超过 100 种调音模式，适用于 iPhone 和 iPad。',
      keywords: 'Pro Tuner, 调音器, 吉他调音器, 给吉他调音, 尤克里里调音, 半音调音器, 音源发生器, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 音乐人, 练习',
    },
  },

  ja: {
    appTitle: 'Pro Tuner',
    appStoreLink: 'App Store で入手',
    appStoreTitle: 'App Store から Pro Tuner をダウンロード',

    whatTitle: 'Pro Tuner とは',
    whatDesc1Html: 'Pro Tuner は、ギターやベース奏者のために設計された、よくできた iPhone/iPad 向けの<em>クロマチックチューナー</em>です。',
    whatDesc2Html: '精度は非常に高く（最大 ±1/100 半音（<em>±1 セント</em>）の精度）、<em>100 種類以上のチューニングモード</em>を内蔵しています。さらに弦をタップするだけで、<em>本物</em>のギターのリファレンス音を手軽に得られます。',
    whatDesc3Html: 'Pro Tuner は 2 つの入力方法に対応：<em>内蔵マイク</em>モードと <em>Line-in モード</em>です。ギター用クリップマイクにも対応しています。',

    accurateTitle: '正確です',
    accurateDescHtml: 'Pro Tuner は高精度なアルゴリズムを採用し、iPhone の内蔵マイクだけでも、これまで以上に正確なギターの音を実現します（<em>±1 セント</em>の精度）。',

    proTitle: 'プロ仕様です',
    proDescHtml: 'Pro Tuner は 100 種類以上のチューニングモードを内蔵。各モードに本物のギターのリファレンス音を備えています。Pro Tuner は軽量ながら、それでも PRO です！',

    universalTitle: 'ユニバーサル対応です',
    universalDesc: 'iPhone と iPad を別々に購入する必要はありません。Pro Tuner はユニバーサルアプリです。お使いのすべての iOS デバイスで動作します。',

    clipTitle: 'クリップマイク対応',
    clipDesc: 'クリップマイクを使えば、チューニングはさらに正確になります。',

    featuresTitle: '機能一覧',
    featuresHtml: [
      '<em>使いやすい。</em>とても簡単に使えます',
      '<em>ユニバーサルアプリ。</em>一度購入すれば、お使いのすべての iPhone/iPod/iPad で利用できます。',
      '<em>クロマチックチューニング対応。</em>アコースティック／エレキギターとベースに特化して最適化。',
      '<em>本物のギターのリファレンス音。</em>おおまかなチューニングや、耳でのチューニング練習に役立ちます。',
      '<em>チューニングモード。100 種類以上を収録。</em>',
      '<em>入力レベルインジケーター。</em>入力レベルが常に適切であることを確認できます。',
    ],

    categoryTitle: '内蔵チューニングモードのカテゴリ',
    categoryDesc: '標準チューニング ／ 低めのチューニング ／ 高めのチューニング ／ ドロップチューニング ／ ダブルドロップチューニング ／ メジャーオープンチューニング ／ マイナーオープンチューニング ／ クロスノートチューニング ／ モーダルチューニング ／ その他のチューニング ／ 5 弦チューニング ／ 7 弦チューニング ／ 8 弦チューニング ／ ベースチューニング ／ ウクレレチューニング ／ マンドリン系チューニング ／ バンジョー系チューニング ／ ブズーキチューニング',

    meta: {
      wholetitle: 'Pro Tuner — クロマチックチューナー | EUMLab',
      description: 'Pro Tuner はギター、ウクレレ、マンドリンなどのフレット楽器のチューニング用に設計。標準・オープン・ドロップに対応し、100 種類以上のモードを内蔵。iPhone と iPad に対応。',
      keywords: 'Pro Tuner, チューナー, ギターチューナー, ギターを調律, ウクレレチューナー, クロマチックチューナー, トーンジェネレーター, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, ミュージシャン, 練習',
    },
  },
};
