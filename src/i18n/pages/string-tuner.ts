// Self-contained translation module for the String Tuner page
// (route /string-tuner/ and /<lang>/string-tuner/).
// The `en` entry reproduces the legacy copy verbatim (including inline <em>,
// punctuation and original typos) so the English page renders byte-identical —
// it is in the pixel-verify reference set.
export interface AppStrings {
  appTitle: string;
  appStoreLabel: string;
  appStoreTitle: string;

  whatIsTitle: string;
  whatIsDesc1Html: string;
  whatIsDesc2Html: string;

  accurateTitle: string;
  accurateDescHtml: string;

  professionalTitle: string;
  professionalDesc1Html: string;
  professionalDesc2: string;

  universalTitle: string;
  universalDesc: string;

  learningTitle: string;
  learningDesc: string;

  toneGenTitle: string;
  toneGenDesc: string;

  featuresTitle: string;
  features: string[]; // inline-HTML list items (contain <em>)

  meta: { wholetitle: string; description: string; keywords: string };
}

export const STRING_TUNER: Record<string, AppStrings> = {
  en: {
    appTitle: `String Tuner`,
    appStoreLabel: `Available on the App Store`,
    appStoreTitle: `Download String Tuner from APP Store`,

    whatIsTitle: `What is String Tuner`,
    whatIsDesc1Html: `String Tuner is the first chromatic tuner that is especially designed and optimized for string instruments: <em>Violin</em>, <em>Viola</em>, <em>Cello</em> and <em>Double bass</em>.`,
    whatIsDesc2Html: `A reference sound generator is provided to help you do coarse tuning. Moreover, with the optimized algorithms up to <em>±0.1cent</em> precise , it helps you to do fine tuning quickly with the built-in or external microphone on your iOS devices.`,

    accurateTitle: `It's Accurate`,
    accurateDescHtml: `String Tuner uses a highly accurate algorithm (up to <em>±0.1cent</em>) to make sure your string sound is more accurate than ever, even with only using the iPhone inner-microphone.`,

    professionalTitle: `It's Professional!`,
    professionalDesc1Html: `String Tuner supports 3 temperaments: <em>12TET</em> (twelve-tone equal temperament), <em>Pythagorean</em> Temperament and <em>Pure</em> (or Just) Intonation.`,
    professionalDesc2: `It also supports adjustable calibration A4.`,

    universalTitle: `It's Universal`,
    universalDesc: `You don't need purchase iPhone and iPad separately. String Tuner a is universal APP. It works on all of your iOS devices.`,

    learningTitle: `Intelligent Learning Mode`,
    learningDesc: `Wanna play with piano whose A4 frequency is unknown? String Tuner can detect it for you! Just hit the A4 key of the piano and String Tuner will take care of the rest.`,

    toneGenTitle: `Tone Generator Mode`,
    toneGenDesc: `Are you a classical string player? Want to tune your string instruments just by ear? No problem. String Tuner provides 4 useful tones for your reference, including Triangle, Sine, Square waveform + REAL String Sound.`,

    featuresTitle: `Features List`,
    features: [
      `<em>User-friendly.</em> Extremely easy to use`,
      `<em>Universal APP.</em> Purchase once, available on all of your iPhone/iPod/iPad/iPad Mini.<li>`,
      `<em>30 cent range fine tuning display.</em>`,
      `<em>Precise up to ±1/1000 semitone (±0.1 cent)</em>`,
      `<em>3 Temperaments provided</em>:  12TET, Pure (Standard Just Intonation) and Pythagorean Tuning.`,
      `<em>Adjustable A4</em> calibration up to 0.1 Hz precise with the range 400-480`,
      `<em>Tone generator</em> helps to do coarse tuning or practice tune by ear (Intonation Practice).`,
      `4 Tones are supported: Triangle, Sine, Square waveform and REAL String Sound. `,
      `Support and optimized for Violin, Viola, Cello and Contra Bass`,
      `Tuning Range from A0 - C8 (full range)`,
    ],

    meta: {
      wholetitle: `String Tuner - EUMLab `,
      description: `String Tuner app is designed for violin, viola, cello and contrabass. It supports 3 musical temperaments including pure, pythagorean and 12 equal temperament.`,
      keywords: `violin, viola, tuner, cello, tune violin, tune viola, tune cello, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },

  de: {
    appTitle: `String Tuner`,
    appStoreLabel: `Im App Store erhältlich`,
    appStoreTitle: `String Tuner im App Store laden`,

    whatIsTitle: `Was ist String Tuner`,
    whatIsDesc1Html: `String Tuner ist das erste chromatische Stimmgerät, das speziell für Streichinstrumente entwickelt und optimiert wurde: <em>Violine</em>, <em>Viola</em>, <em>Cello</em> und <em>Kontrabass</em>.`,
    whatIsDesc2Html: `Ein Referenzton-Generator hilft dir beim Grobstimmen. Dank optimierter Algorithmen mit einer Genauigkeit von bis zu <em>±0,1 Cent</em> stimmst du außerdem schnell fein – mit dem eingebauten oder einem externen Mikrofon deines iOS-Geräts.`,

    accurateTitle: `Es ist präzise`,
    accurateDescHtml: `String Tuner nutzt einen hochpräzisen Algorithmus (bis zu <em>±0,1 Cent</em>), damit dein Streicherklang genauer ist als je zuvor – sogar nur mit dem internen iPhone-Mikrofon.`,

    professionalTitle: `Es ist professionell!`,
    professionalDesc1Html: `String Tuner unterstützt 3 Stimmungen: <em>12TET</em> (gleichstufige Zwölftonstimmung), <em>pythagoreische</em> Stimmung und <em>reine</em> Intonation.`,
    professionalDesc2: `Außerdem unterstützt es eine einstellbare A4-Kalibrierung.`,

    universalTitle: `Es ist universell`,
    universalDesc: `Du musst nicht für iPhone und iPad getrennt kaufen. String Tuner ist eine Universal-App. Sie läuft auf all deinen iOS-Geräten.`,

    learningTitle: `Intelligenter Lernmodus`,
    learningDesc: `Du möchtest mit einem Klavier spielen, dessen A4-Frequenz unbekannt ist? String Tuner erkennt sie für dich! Schlag einfach das A4 des Klaviers an, und String Tuner kümmert sich um den Rest.`,

    toneGenTitle: `Tongenerator-Modus`,
    toneGenDesc: `Bist du klassischer Streicher? Möchtest du deine Streichinstrumente nur nach Gehör stimmen? Kein Problem. String Tuner bietet 4 nützliche Referenztöne: Dreieck-, Sinus- und Rechteckwelle sowie ECHTEN Streicherklang.`,

    featuresTitle: `Funktionsübersicht`,
    features: [
      `<em>Benutzerfreundlich.</em> Extrem einfach zu bedienen`,
      `<em>Universal-App.</em> Einmal kaufen, auf all deinen iPhone/iPod/iPad/iPad Mini verfügbar.`,
      `<em>Feinstimmungsanzeige mit 30-Cent-Bereich.</em>`,
      `<em>Genau bis ±1/1000 Halbton (±0,1 Cent)</em>`,
      `<em>3 Stimmungen verfügbar</em>: 12TET, reine Intonation (Standard) und pythagoreische Stimmung.`,
      `<em>Einstellbares A4</em>, kalibrierbar bis auf 0,1 Hz im Bereich 400–480`,
      `<em>Tongenerator</em> für Grobstimmung oder Übungen nach Gehör (Intonationsübung).`,
      `4 Töne werden unterstützt: Dreieck-, Sinus- und Rechteckwelle sowie ECHTER Streicherklang.`,
      `Unterstützt und optimiert für Violine, Viola, Cello und Kontrabass`,
      `Stimmbereich von A0 bis C8 (vollständiger Umfang)`,
    ],

    meta: {
      wholetitle: `String Tuner – Stimmgerät für Streicher | EUMLab`,
      description: `String Tuner ist für Violine, Viola, Cello und Kontrabass konzipiert. Unterstützt 3 Stimmungen: reine, pythagoreische und gleichstufige Zwölftonstimmung.`,
      keywords: `Violine, Viola, Stimmgerät, Cello, Violine stimmen, Viola stimmen, Cello stimmen, App, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, Musiker, lernen, üben, Streicher`,
    },
  },

  fr: {
    appTitle: `String Tuner`,
    appStoreLabel: `Disponible sur l’App Store`,
    appStoreTitle: `Télécharger String Tuner sur l’App Store`,

    whatIsTitle: `Qu’est-ce que String Tuner`,
    whatIsDesc1Html: `String Tuner est le premier accordeur chromatique spécialement conçu et optimisé pour les instruments à cordes : <em>violon</em>, <em>alto</em>, <em>violoncelle</em> et <em>contrebasse</em>.`,
    whatIsDesc2Html: `Un générateur de son de référence vous aide à faire un accordage grossier. De plus, grâce à des algorithmes optimisés d’une précision allant jusqu’à <em>±0,1 cent</em>, il vous permet d’affiner rapidement l’accordage avec le micro intégré ou externe de vos appareils iOS.`,

    accurateTitle: `Il est précis`,
    accurateDescHtml: `String Tuner utilise un algorithme très précis (jusqu’à <em>±0,1 cent</em>) pour rendre le son de vos cordes plus juste que jamais, même avec le seul micro interne de l’iPhone.`,

    professionalTitle: `Il est professionnel !`,
    professionalDesc1Html: `String Tuner prend en charge 3 tempéraments : <em>12TET</em> (tempérament égal à douze sons), tempérament de <em>Pythagore</em> et intonation <em>pure</em> (ou juste).`,
    professionalDesc2: `Il prend aussi en charge un étalonnage réglable du La 4.`,

    universalTitle: `Il est universel`,
    universalDesc: `Inutile d’acheter séparément pour iPhone et iPad. String Tuner est une appli universelle. Elle fonctionne sur tous vos appareils iOS.`,

    learningTitle: `Mode d’apprentissage intelligent`,
    learningDesc: `Vous voulez jouer avec un piano dont la fréquence du La 4 est inconnue ? String Tuner la détecte pour vous ! Jouez simplement la touche La 4 du piano et String Tuner s’occupe du reste.`,

    toneGenTitle: `Mode générateur de sons`,
    toneGenDesc: `Vous êtes un musicien classique à cordes ? Vous voulez accorder vos instruments à l’oreille ? Aucun problème. String Tuner propose 4 sons de référence utiles : ondes triangle, sinus et carrée + un VRAI son de cordes.`,

    featuresTitle: `Liste des fonctionnalités`,
    features: [
      `<em>Convivial.</em> Extrêmement simple à utiliser`,
      `<em>Appli universelle.</em> Achetez une fois, disponible sur tous vos iPhone/iPod/iPad/iPad Mini.`,
      `<em>Affichage d’accordage fin sur une plage de 30 cents.</em>`,
      `<em>Précis jusqu’à ±1/1000 de demi-ton (±0,1 cent)</em>`,
      `<em>3 tempéraments fournis</em> : 12TET, intonation pure (juste standard) et tempérament de Pythagore.`,
      `<em>La 4 réglable</em>, étalonnable à 0,1 Hz près dans la plage 400-480`,
      `<em>Générateur de sons</em> pour l’accordage grossier ou l’entraînement à l’oreille (exercice d’intonation).`,
      `4 sons pris en charge : ondes triangle, sinus et carrée, et un VRAI son de cordes.`,
      `Pris en charge et optimisé pour le violon, l’alto, le violoncelle et la contrebasse`,
      `Plage d’accordage de La 0 à Do 8 (plage complète)`,
    ],

    meta: {
      wholetitle: `String Tuner – accordeur pour cordes | EUMLab`,
      description: `String Tuner est conçu pour le violon, l’alto, le violoncelle et la contrebasse. Il prend en charge 3 tempéraments : pur, de Pythagore et tempérament égal à 12 sons.`,
      keywords: `violon, alto, accordeur, violoncelle, accorder violon, accorder alto, accorder violoncelle, appli, EUMLab, Polybeat, iPhone, iPad, iOS, musique, musicien, apprendre, pratiquer, cordes`,
    },
  },

  es: {
    appTitle: `String Tuner`,
    appStoreLabel: `Disponible en la App Store`,
    appStoreTitle: `Descargar String Tuner desde la App Store`,

    whatIsTitle: `Qué es String Tuner`,
    whatIsDesc1Html: `String Tuner es el primer afinador cromático especialmente diseñado y optimizado para instrumentos de cuerda: <em>violín</em>, <em>viola</em>, <em>violonchelo</em> y <em>contrabajo</em>.`,
    whatIsDesc2Html: `Se incluye un generador de sonido de referencia para ayudarte con la afinación gruesa. Además, con algoritmos optimizados de hasta <em>±0,1 cent</em> de precisión, te permite afinar con precisión rápidamente con el micrófono integrado o externo de tus dispositivos iOS.`,

    accurateTitle: `Es preciso`,
    accurateDescHtml: `String Tuner utiliza un algoritmo muy preciso (hasta <em>±0,1 cent</em>) para que el sonido de tus cuerdas sea más exacto que nunca, incluso usando solo el micrófono interno del iPhone.`,

    professionalTitle: `¡Es profesional!`,
    professionalDesc1Html: `String Tuner admite 3 temperamentos: <em>12TET</em> (temperamento igual de doce tonos), temperamento <em>pitagórico</em> y entonación <em>justa</em> (o pura).`,
    professionalDesc2: `También admite una calibración ajustable del La 4.`,

    universalTitle: `Es universal`,
    universalDesc: `No necesitas comprar por separado para iPhone y iPad. String Tuner es una app universal. Funciona en todos tus dispositivos iOS.`,

    learningTitle: `Modo de aprendizaje inteligente`,
    learningDesc: `¿Quieres tocar con un piano cuya frecuencia de La 4 es desconocida? ¡String Tuner la detecta por ti! Solo pulsa la tecla La 4 del piano y String Tuner se encarga del resto.`,

    toneGenTitle: `Modo generador de tonos`,
    toneGenDesc: `¿Eres un intérprete clásico de cuerda? ¿Quieres afinar tus instrumentos solo de oído? No hay problema. String Tuner ofrece 4 tonos útiles de referencia: ondas triangular, senoidal y cuadrada + un sonido de cuerda REAL.`,

    featuresTitle: `Lista de funciones`,
    features: [
      `<em>Fácil de usar.</em> Extremadamente sencillo`,
      `<em>App universal.</em> Compra una vez, disponible en todos tus iPhone/iPod/iPad/iPad Mini.`,
      `<em>Pantalla de afinación fina con rango de 30 cents.</em>`,
      `<em>Preciso hasta ±1/1000 de semitono (±0,1 cent)</em>`,
      `<em>3 temperamentos incluidos</em>: 12TET, entonación justa (estándar) y afinación pitagórica.`,
      `<em>La 4 ajustable</em>, calibrable con precisión de 0,1 Hz en el rango 400-480`,
      `<em>Generador de tonos</em> para afinación gruesa o práctica de oído (práctica de entonación).`,
      `Se admiten 4 tonos: ondas triangular, senoidal y cuadrada, y un sonido de cuerda REAL.`,
      `Compatible y optimizado para violín, viola, violonchelo y contrabajo`,
      `Rango de afinación de La 0 a Do 8 (rango completo)`,
    ],

    meta: {
      wholetitle: `String Tuner – afinador de cuerda | EUMLab`,
      description: `String Tuner está diseñado para violín, viola, violonchelo y contrabajo. Admite 3 temperamentos: justo, pitagórico e igual de doce tonos.`,
      keywords: `violín, viola, afinador, violonchelo, afinar violín, afinar viola, afinar violonchelo, app, EUMLab, Polybeat, iPhone, iPad, iOS, música, músico, aprender, practicar, cuerda`,
    },
  },

  zh: {
    appTitle: `String Tuner`,
    appStoreLabel: `在 App Store 上架`,
    appStoreTitle: `从 App Store 下载 String Tuner`,

    whatIsTitle: `String Tuner 是什么`,
    whatIsDesc1Html: `String Tuner 是首款专为弦乐器设计并优化的半音调音器：<em>小提琴</em>、<em>中提琴</em>、<em>大提琴</em>和<em>低音提琴</em>。`,
    whatIsDesc2Html: `内置参考音生成器，帮助你进行粗调。此外，凭借精度高达 <em>±0.1 音分</em>的优化算法，你可以借助 iOS 设备的内置或外接麦克风快速完成精调。`,

    accurateTitle: `精准`,
    accurateDescHtml: `String Tuner 采用高精度算法（精度高达 <em>±0.1 音分</em>），即使只用 iPhone 内置麦克风，也能让你的弦音比以往更准确。`,

    professionalTitle: `专业！`,
    professionalDesc1Html: `String Tuner 支持 3 种律制：<em>12TET</em>（十二平均律）、<em>五度相生律</em>和<em>纯律</em>（即自然律）。`,
    professionalDesc2: `还支持可调的 A4 校准。`,

    universalTitle: `通用`,
    universalDesc: `无需分别为 iPhone 和 iPad 购买。String Tuner 是一款通用 App，可在你所有的 iOS 设备上运行。`,

    learningTitle: `智能学习模式`,
    learningDesc: `想和一架 A4 频率未知的钢琴合奏？String Tuner 能帮你检测出来！只需弹下钢琴的 A4 键，剩下的交给 String Tuner。`,

    toneGenTitle: `音调发生器模式`,
    toneGenDesc: `你是古典弦乐演奏者吗？想纯凭耳朵为弦乐器调音？没问题。String Tuner 提供 4 种实用的参考音：三角波、正弦波、方波，以及真实弦乐音色。`,

    featuresTitle: `功能列表`,
    features: [
      `<em>友好易用。</em>上手极其简单`,
      `<em>通用 App。</em>一次购买，可在你所有的 iPhone/iPod/iPad/iPad Mini 上使用。`,
      `<em>30 音分范围的精调显示。</em>`,
      `<em>精度高达 ±1/1000 半音（±0.1 音分）</em>`,
      `<em>提供 3 种律制</em>：12TET、纯律（标准自然律）和五度相生律。`,
      `<em>可调 A4</em>，在 400-480 范围内可精确校准至 0.1 Hz`,
      `<em>音调发生器</em>，可用于粗调或练习凭耳辨音（音准练习）。`,
      `支持 4 种音色：三角波、正弦波、方波，以及真实弦乐音色。`,
      `支持并针对小提琴、中提琴、大提琴和低音提琴优化`,
      `调音范围从 A0 到 C8（全音域）`,
    ],

    meta: {
      wholetitle: `String Tuner —— 弦乐调音器 | EUMLab`,
      description: `String Tuner 专为小提琴、中提琴、大提琴和低音提琴设计，支持纯律、五度相生律和十二平均律 3 种律制。`,
      keywords: `小提琴, 中提琴, 调音器, 大提琴, 小提琴调音, 中提琴调音, 大提琴调音, App, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 音乐人, 学习, 练习, 弦乐`,
    },
  },

  ja: {
    appTitle: `String Tuner`,
    appStoreLabel: `App Store で配信中`,
    appStoreTitle: `String Tuner を App Store からダウンロード`,

    whatIsTitle: `String Tuner とは`,
    whatIsDesc1Html: `String Tuner は、弦楽器のために特別に設計・最適化された初のクロマチックチューナーです：<em>ヴァイオリン</em>、<em>ヴィオラ</em>、<em>チェロ</em>、<em>コントラバス</em>。`,
    whatIsDesc2Html: `粗調整を助けるリファレンス音ジェネレーターを搭載。さらに、最大 <em>±0.1 セント</em>の精度に最適化されたアルゴリズムにより、iOS デバイスの内蔵または外付けマイクですばやく微調整できます。`,

    accurateTitle: `正確`,
    accurateDescHtml: `String Tuner は高精度アルゴリズム（最大 <em>±0.1 セント</em>）を採用し、iPhone の内蔵マイクだけでも、弦の音をかつてないほど正確にとらえます。`,

    professionalTitle: `プロ仕様！`,
    professionalDesc1Html: `String Tuner は 3 つの音律に対応：<em>12TET</em>（十二平均律）、<em>ピタゴラス</em>音律、<em>純正律</em>（ジャストイントネーション）。`,
    professionalDesc2: `A4 の調整可能なキャリブレーションにも対応しています。`,

    universalTitle: `ユニバーサル`,
    universalDesc: `iPhone と iPad を別々に購入する必要はありません。String Tuner はユニバーサルアプリで、お使いのすべての iOS デバイスで動作します。`,

    learningTitle: `インテリジェント学習モード`,
    learningDesc: `A4 の周波数が分からないピアノと合わせたい？ String Tuner が検出します！ ピアノの A4 の鍵盤を弾くだけで、あとは String Tuner におまかせ。`,

    toneGenTitle: `トーンジェネレーターモード`,
    toneGenDesc: `クラシックの弦楽器奏者ですか？ 耳だけで弦楽器をチューニングしたい？ 問題ありません。String Tuner は 4 種類の便利なリファレンス音を提供します：三角波・正弦波・矩形波、そして本物の弦の音。`,

    featuresTitle: `機能一覧`,
    features: [
      `<em>使いやすい。</em>とても簡単に使えます`,
      `<em>ユニバーサルアプリ。</em>一度購入すれば、お使いのすべての iPhone/iPod/iPad/iPad Mini で利用可能。`,
      `<em>30 セント範囲の微調整表示。</em>`,
      `<em>±1/1000 半音（±0.1 セント）まで正確</em>`,
      `<em>3 つの音律を搭載</em>：12TET、純正律（標準）、ピタゴラス音律。`,
      `<em>調整可能な A4</em>、400〜480 の範囲で 0.1 Hz 単位までキャリブレーション可能`,
      `<em>トーンジェネレーター</em>で粗調整や耳での練習（イントネーション練習）ができます。`,
      `4 種類の音に対応：三角波・正弦波・矩形波、そして本物の弦の音。`,
      `ヴァイオリン、ヴィオラ、チェロ、コントラバスに対応・最適化`,
      `チューニング範囲は A0〜C8（フルレンジ）`,
    ],

    meta: {
      wholetitle: `String Tuner —— 弦楽器チューナー | EUMLab`,
      description: `String Tuner はヴァイオリン、ヴィオラ、チェロ、コントラバス向けに設計。純正律・ピタゴラス音律・十二平均律の 3 つの音律に対応します。`,
      keywords: `ヴァイオリン, ヴィオラ, チューナー, チェロ, ヴァイオリン チューニング, ヴィオラ チューニング, チェロ チューニング, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, 音楽家, 学ぶ, 練習, 弦楽器`,
    },
  },
};
