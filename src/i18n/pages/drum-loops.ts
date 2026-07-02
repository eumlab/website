// Self-contained translation module for the Drum Loops page (route /drum-loops/
// and /<lang>/drum-loops/). Per-page modules avoid editing a central dictionary,
// so localized pages can be added independently. The `en` entry reproduces the
// legacy copy verbatim so the English page renders byte-identical (it is in the
// verify reference set). App/brand names (Drum Loops, AirPlay, AudioBus, etc.)
// stay in their original language.
export interface AppStrings {
  tagline: string;
  downloadAppStore: string;
  sloganHtml: string;
  sloganDescHtml: string;
  changeTempoSloganHtml: string;
  changeTempoDescHtml: string;
  listenSlogan: string;
  listenDescHtml: string;
  featuresHeading: string;
  airplayDesc: string;
  audiobusDesc: string;
  iaaDesc: string;
  downloadAvailHtml: string;
  getPresskitTitle: string;
  getPresskit: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const DRUM_LOOPS: Record<string, AppStrings> = {
  en: {
    tagline: `Hundreds of drum loops at your fingertips`,
    downloadAppStore: `Download on the App Store`,
    sloganHtml: `<em>Drum Loops</em> is an all-purpose <em>learning tool</em><br/>with practice loops for any occasion`,
    sloganDescHtml: `\nImprove your technique with 100s of beat patterns in 9 music styles – <br/>\nPlay along with familiar styles or pick one you've never tried before.`,
    changeTempoSloganHtml: `Change tempo<br/><em>without losing quality</em>`,
    changeTempoDescHtml: `The easy-to-use jog wheel<br/>lets you choose the tempo that's right for you.`,
    listenSlogan: `Listen up!`,
    listenDescHtml: `Check out some of the options available in Drum Loops<br/>\non our SoundCloud page. Recorded directly from the app!`,
    featuresHeading: `Other Cool Features`,
    airplayDesc: `Use AirPlay to beam your sound to Apple TV or other AirPlay-enabled speakers.`,
    audiobusDesc: `AudioBus support – use the app as an input source for other music apps.`,
    iaaDesc: `Route the app's sound directly to other music apps like GarageBand.`,
    downloadAvailHtml: `Available for iPhone, iPad and iPod Touch<br/>\n    Requires iOS 7.0+<br/>\n    `,
    getPresskitTitle: `Get Presskit`,
    getPresskit: `Get Presskit`,
    meta: {
      wholetitle: `Drum Loops - EUMLab `,
      description: `Drum Loops app just like a drum machine which plays drum loops for you. You can play instruments and jam along with it.`,
      keywords: `drum loops, drum, drum pattern, drum machine, jam, jamplay, jam along, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },
  de: {
    tagline: `Hunderte Drum-Loops direkt zur Hand`,
    downloadAppStore: `Im App Store laden`,
    sloganHtml: `<em>Drum Loops</em> ist ein universelles <em>Lernwerkzeug</em><br/>mit Übungs-Loops für jede Gelegenheit`,
    sloganDescHtml: `\nVerbessere deine Technik mit Hunderten Beat-Patterns in 9 Musikstilen – <br/>\nSpiele zu vertrauten Stilen oder probiere einen ganz neuen aus.`,
    changeTempoSloganHtml: `Tempo ändern<br/><em>ohne Qualitätsverlust</em>`,
    changeTempoDescHtml: `Mit dem leicht bedienbaren Jog-Wheel<br/>wählst du genau das Tempo, das zu dir passt.`,
    listenSlogan: `Hör mal rein!`,
    listenDescHtml: `Entdecke einige der Möglichkeiten von Drum Loops<br/>\nauf unserer SoundCloud-Seite. Direkt aus der App aufgenommen!`,
    featuresHeading: `Weitere coole Funktionen`,
    airplayDesc: `Übertrage deinen Sound per AirPlay auf Apple TV oder andere AirPlay-fähige Lautsprecher.`,
    audiobusDesc: `AudioBus-Unterstützung – nutze die App als Eingangsquelle für andere Musik-Apps.`,
    iaaDesc: `Leite den Sound der App direkt an andere Musik-Apps wie GarageBand weiter.`,
    downloadAvailHtml: `Verfügbar für iPhone, iPad und iPod Touch<br/>\n    Erfordert iOS 7.0+<br/>\n    `,
    getPresskitTitle: `Presskit erhalten`,
    getPresskit: `Presskit erhalten`,
    meta: {
      wholetitle: `Drum Loops – Drum-Loops für Musiker | EUMLab`,
      description: `Drum Loops ist wie eine Drum Machine, die Drum-Loops für dich spielt. Spiele dein Instrument und jamme dazu – in 9 Stilen mit Hunderten Beat-Patterns.`,
      keywords: `Drum Loops, Drums, Schlagzeug, Drum-Pattern, Drum Machine, Jam, Begleitung, mitspielen, App, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, Musiker, üben, lernen`,
    },
  },
  fr: {
    tagline: `Des centaines de boucles de batterie au bout des doigts`,
    downloadAppStore: `Télécharger dans l’App Store`,
    sloganHtml: `<em>Drum Loops</em> est un <em>outil d’apprentissage</em> polyvalent<br/>avec des boucles d’entraînement pour toutes les occasions`,
    sloganDescHtml: `\nAméliorez votre technique avec des centaines de motifs rythmiques dans 9 styles musicaux – <br/>\nJouez sur des styles familiers ou découvrez-en un que vous n’avez jamais essayé.`,
    changeTempoSloganHtml: `Changez le tempo<br/><em>sans perdre en qualité</em>`,
    changeTempoDescHtml: `La molette jog facile à utiliser<br/>vous laisse choisir le tempo qui vous convient.`,
    listenSlogan: `Écoutez !`,
    listenDescHtml: `Découvrez quelques-unes des options proposées par Drum Loops<br/>\nsur notre page SoundCloud. Enregistré directement depuis l’app !`,
    featuresHeading: `Autres fonctionnalités sympas`,
    airplayDesc: `Utilisez AirPlay pour diffuser votre son vers l’Apple TV ou d’autres enceintes compatibles AirPlay.`,
    audiobusDesc: `Prise en charge d’AudioBus – utilisez l’app comme source d’entrée pour d’autres applis de musique.`,
    iaaDesc: `Acheminez le son de l’app directement vers d’autres applis de musique comme GarageBand.`,
    downloadAvailHtml: `Disponible pour iPhone, iPad et iPod Touch<br/>\n    Nécessite iOS 7.0+<br/>\n    `,
    getPresskitTitle: `Obtenir le kit presse`,
    getPresskit: `Obtenir le kit presse`,
    meta: {
      wholetitle: `Drum Loops – boucles de batterie pour musiciens | EUMLab`,
      description: `Drum Loops est comme une boîte à rythmes qui joue des boucles de batterie pour vous. Jouez de votre instrument et improvisez dans 9 styles musicaux.`,
      keywords: `Drum Loops, batterie, boucles de batterie, motifs rythmiques, boîte à rythmes, jam, accompagnement, app, EUMLab, Polybeat, iPhone, iPad, iOS, musique, musicien, pratiquer, apprendre`,
    },
  },
  es: {
    tagline: `Cientos de loops de batería al alcance de tu mano`,
    downloadAppStore: `Descargar en el App Store`,
    sloganHtml: `<em>Drum Loops</em> es una <em>herramienta de aprendizaje</em> versátil<br/>con loops de práctica para cualquier ocasión`,
    sloganDescHtml: `\nMejora tu técnica con cientos de patrones rítmicos en 9 estilos musicales – <br/>\nToca con estilos conocidos o elige uno que nunca hayas probado.`,
    changeTempoSloganHtml: `Cambia el tempo<br/><em>sin perder calidad</em>`,
    changeTempoDescHtml: `La rueda jog fácil de usar<br/>te deja elegir el tempo perfecto para ti.`,
    listenSlogan: `¡Escucha!`,
    listenDescHtml: `Descubre algunas de las opciones disponibles en Drum Loops<br/>\nen nuestra página de SoundCloud. ¡Grabado directamente desde la app!`,
    featuresHeading: `Otras funciones geniales`,
    airplayDesc: `Usa AirPlay para enviar tu sonido al Apple TV u otros altavoces compatibles con AirPlay.`,
    audiobusDesc: `Compatibilidad con AudioBus – usa la app como fuente de entrada para otras apps de música.`,
    iaaDesc: `Envía el sonido de la app directamente a otras apps de música como GarageBand.`,
    downloadAvailHtml: `Disponible para iPhone, iPad y iPod Touch<br/>\n    Requiere iOS 7.0+<br/>\n    `,
    getPresskitTitle: `Obtener kit de prensa`,
    getPresskit: `Obtener kit de prensa`,
    meta: {
      wholetitle: `Drum Loops – loops de batería para músicos | EUMLab`,
      description: `Drum Loops es como una caja de ritmos que reproduce loops de batería para ti. Toca tu instrumento e improvisa con cientos de patrones en 9 estilos.`,
      keywords: `Drum Loops, batería, loops de batería, patrones rítmicos, caja de ritmos, jam, acompañamiento, app, EUMLab, Polybeat, iPhone, iPad, iOS, música, músico, practicar, aprender`,
    },
  },
  zh: {
    tagline: `数百段鼓点循环，触手可及`,
    downloadAppStore: `在 App Store 下载`,
    sloganHtml: `<em>Drum Loops</em> 是一款全能的<em>学习工具</em><br/>为任何场合提供练习循环`,
    sloganDescHtml: `\n用 9 种音乐风格、数百种节奏型提升你的技巧 – <br/>\n跟着熟悉的风格演奏，或者挑战一个从未尝试过的风格。`,
    changeTempoSloganHtml: `改变速度<br/><em>而不损失音质</em>`,
    changeTempoDescHtml: `简单易用的拨轮<br/>让你选择最适合自己的速度。`,
    listenSlogan: `听一听！`,
    listenDescHtml: `在我们的 SoundCloud 页面<br/>\n试听 Drum Loops 提供的部分音效，直接从 App 录制！`,
    featuresHeading: `更多精彩功能`,
    airplayDesc: `使用 AirPlay 将声音传送到 Apple TV 或其他支持 AirPlay 的扬声器。`,
    audiobusDesc: `支持 AudioBus – 将本 App 作为其他音乐 App 的输入源。`,
    iaaDesc: `将 App 的声音直接传送到 GarageBand 等其他音乐 App。`,
    downloadAvailHtml: `适用于 iPhone、iPad 和 iPod Touch<br/>\n    需要 iOS 7.0 及以上<br/>\n    `,
    getPresskitTitle: `获取媒体资料包`,
    getPresskit: `获取媒体资料包`,
    meta: {
      wholetitle: `Drum Loops —— 为音乐人打造的鼓点循环 App | EUMLab`,
      description: `Drum Loops 就像一台鼓机，为你播放鼓点循环。你可以演奏乐器，跟着它即兴合奏，涵盖 9 种音乐风格、数百种节奏型。`,
      keywords: `Drum Loops, 鼓, 鼓点, 节奏型, 鼓机, 即兴, 伴奏, 合奏, App, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 音乐人, 练习, 学习`,
    },
  },
  ja: {
    tagline: `何百ものドラムループを指先に`,
    downloadAppStore: `App Store でダウンロード`,
    sloganHtml: `<em>Drum Loops</em> はオールラウンドな<em>学習ツール</em><br/>あらゆるシーンに対応する練習用ループを収録`,
    sloganDescHtml: `\n9 つの音楽スタイル、数百種類のビートパターンでテクニックを磨こう – <br/>\nおなじみのスタイルで演奏するも、まだ試したことのないスタイルに挑戦するも自由。`,
    changeTempoSloganHtml: `テンポを変えても<br/><em>音質はそのまま</em>`,
    changeTempoDescHtml: `使いやすいジョグホイールで<br/>自分にぴったりのテンポを選べます。`,
    listenSlogan: `聴いてみよう！`,
    listenDescHtml: `Drum Loops で使える音色の一部を<br/>\n私たちの SoundCloud ページでチェック。アプリから直接録音しました！`,
    featuresHeading: `その他の便利な機能`,
    airplayDesc: `AirPlay を使って、サウンドを Apple TV やその他の AirPlay 対応スピーカーに送信できます。`,
    audiobusDesc: `AudioBus に対応 – 他の音楽アプリの入力ソースとして本アプリを利用できます。`,
    iaaDesc: `アプリのサウンドを GarageBand などの他の音楽アプリに直接ルーティングできます。`,
    downloadAvailHtml: `iPhone、iPad、iPod Touch に対応<br/>\n    iOS 7.0 以降が必要<br/>\n    `,
    getPresskitTitle: `プレスキットを入手`,
    getPresskit: `プレスキットを入手`,
    meta: {
      wholetitle: `Drum Loops —— 音楽家のためのドラムループ App | EUMLab`,
      description: `Drum Loops はドラムループを再生するドラムマシンのようなアプリ。9 つのスタイル、数百種類のビートパターンに合わせて楽器を演奏し、ジャムを楽しめます。`,
      keywords: `Drum Loops, ドラム, ドラムループ, ビートパターン, ドラムマシン, ジャム, 伴奏, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, ミュージシャン, 練習, 学習`,
    },
  },
};
