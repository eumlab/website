// Self-contained translation module for the DAW Remote HD page
// (route /daw-remote-hd/ and /<lang>/daw-remote-hd/).
// Per-page modules avoid editing a central dictionary, so localized pages can be
// added independently. The `en` entry reproduces the legacy copy verbatim so the
// English page renders byte-identical (it is in the verify reference set).
export interface AppStrings {
  appTitle: string;
  appStore: string;
  appStoreTitle: string;
  studioTitle: string;
  studioDesc: string;
  seeVideoTutorials: string;
  inspirationTitle: string;
  inspirationDesc1: string;
  inspirationDesc2: string;
  easyAccessTitle: string;
  easyAccessDesc: string;
  compatibilityTitle: string;
  compatibilityDesc: string;
  seeMoreCompatibility: string;
  buildTitle: string;
  buildDesc: string;
  playVideo: string;
  mixingTitle: string;
  mixingDesc: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const DAW_REMOTE_HD: Record<string, AppStrings> = {
  en: {
    appTitle: `DAW Remote HD`,
    appStore: `Available on the App Store`,
    appStoreTitle: `Download DAW Remote HD from APP Store`,
    studioTitle: `Everywhere in your Studio`,
    studioDesc: `Taking full advantage of the iPad revolutionary features, DAW Remote brings you a portable control surface with full functions. Now you have full control to your DAW everywhere in your studio.`,
    seeVideoTutorials: `See video tutorials`,
    inspirationTitle: `Stay with your Inspiration`,
    inspirationDesc1: `Just bring the portable iPad and stay with your instrument. `,
    inspirationDesc2: `You can now concentrate on your inspiration and record yourself smoothly. No need to move between instrument and computer to manage your recording.`,
    easyAccessTitle: `Easy access to the DAW`,
    easyAccessDesc: `If you didn't have a control surface before, DAW Remote HD should be the best choice as your first one. Embedded into the iPad, DAW Remote is inexpensive but professional. It helps you control the DAW remotely and wirelessly, so you can have a far more smooth workflow and concentrate on composing.`,
    compatibilityTitle: `Compatibility Maximum`,
    compatibilityDesc: `DAW Remote employs Mackie Control and HUI Protocol which support most of the DAWs. We provide optimized layouts for more than 10 DAWs, and we are creating more DAWs.`,
    seeMoreCompatibility: `See more about compatibility`,
    buildTitle: `Build your own Control Surface`,
    buildDesc: `Many love customizing, and so do we! Maybe you don't like so many buttons on the screen, maybe you want some bigger buttons or timecode, or maybe you want to change the label and color on the buttons. Making a layout fit yourself most is easy and fast with DAW Remote HD.`,
    playVideo: `Play Video ▸`,
    mixingTitle: `Mixing on your Sofa`,
    mixingDesc: `Traditional Control surface looks great indeed, but you are stuck there when mixing, aren't you? With DAW Remote you can relax on the sofa and mix there with your iPad!`,
    meta: {
      wholetitle: `DAW Remote HD - EUMLab `,
      description: `DAW Remote HD app helps you control DAW softwares wirelessly (including Logic, Cubase, Pro Tools etc). You can customize your control surface on your iPad.`,
      keywords: `daw remote hd, daw remote, logic, pro tools, cubase, live, controller, control, wireless, ac97, logic remote, remote, studio, control surface, mackie, osc, mixer, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },
  de: {
    appTitle: `DAW Remote HD`,
    appStore: `Im App Store erhältlich`,
    appStoreTitle: `DAW Remote HD im App Store herunterladen`,
    studioTitle: `Überall in deinem Studio`,
    studioDesc: `DAW Remote nutzt die revolutionären Funktionen des iPad voll aus und bietet dir eine portable Bedienoberfläche mit allen Funktionen. Jetzt hast du überall in deinem Studio die volle Kontrolle über deine DAW.`,
    seeVideoTutorials: `Video-Tutorials ansehen`,
    inspirationTitle: `Bleib bei deiner Inspiration`,
    inspirationDesc1: `Nimm einfach das tragbare iPad mit und bleib bei deinem Instrument. `,
    inspirationDesc2: `Jetzt kannst du dich auf deine Inspiration konzentrieren und dich reibungslos aufnehmen. Du musst dich nicht mehr zwischen Instrument und Computer hin- und herbewegen, um deine Aufnahme zu verwalten.`,
    easyAccessTitle: `Einfacher Zugriff auf die DAW`,
    easyAccessDesc: `Wenn du bisher keine Bedienoberfläche hattest, ist DAW Remote HD die beste Wahl als deine erste. Eingebettet ins iPad ist DAW Remote günstig, aber professionell. Es hilft dir, die DAW kabellos aus der Ferne zu steuern, sodass du einen viel flüssigeren Workflow hast und dich aufs Komponieren konzentrieren kannst.`,
    compatibilityTitle: `Maximale Kompatibilität`,
    compatibilityDesc: `DAW Remote nutzt das Mackie Control- und HUI-Protokoll, die von den meisten DAWs unterstützt werden. Wir bieten optimierte Layouts für mehr als 10 DAWs und erstellen ständig weitere.`,
    seeMoreCompatibility: `Mehr zur Kompatibilität`,
    buildTitle: `Baue deine eigene Bedienoberfläche`,
    buildDesc: `Viele lieben das Anpassen – wir auch! Vielleicht magst du nicht so viele Tasten auf dem Bildschirm, vielleicht willst du größere Tasten oder einen Timecode, oder vielleicht möchtest du Beschriftung und Farbe der Tasten ändern. Ein Layout zu erstellen, das perfekt zu dir passt, ist mit DAW Remote HD einfach und schnell.`,
    playVideo: `Video abspielen ▸`,
    mixingTitle: `Mischen auf dem Sofa`,
    mixingDesc: `Traditionelle Bedienoberflächen sehen zwar toll aus, aber beim Mischen bist du daran gebunden, oder? Mit DAW Remote kannst du dich auf dem Sofa entspannen und dort mit deinem iPad mischen!`,
    meta: {
      wholetitle: `DAW Remote HD – Steuere deine DAW vom iPad | EUMLab`,
      description: `DAW Remote HD steuert deine DAW (Logic, Cubase, Pro Tools u. a.) kabellos vom iPad aus. Gestalte deine eigene Bedienoberfläche und mische, wo du willst.`,
      keywords: `DAW Remote HD, DAW Remote, Logic, Pro Tools, Cubase, Live, Controller, Steuerung, kabellos, Logic Remote, Studio, Bedienoberfläche, Mackie, OSC, Mixer, App, EUMLab, Polybeat, iPad, iOS, Musik, Musiker`,
    },
  },
  fr: {
    appTitle: `DAW Remote HD`,
    appStore: `Disponible sur l’App Store`,
    appStoreTitle: `Télécharger DAW Remote HD sur l’App Store`,
    studioTitle: `Partout dans votre studio`,
    studioDesc: `En tirant pleinement parti des fonctionnalités révolutionnaires de l’iPad, DAW Remote vous offre une surface de contrôle portable dotée de toutes les fonctions. Vous contrôlez désormais entièrement votre STAN partout dans votre studio.`,
    seeVideoTutorials: `Voir les tutoriels vidéo`,
    inspirationTitle: `Restez avec votre inspiration`,
    inspirationDesc1: `Emportez simplement l’iPad portable et restez auprès de votre instrument. `,
    inspirationDesc2: `Vous pouvez maintenant vous concentrer sur votre inspiration et vous enregistrer en toute fluidité. Plus besoin de faire des allers-retours entre l’instrument et l’ordinateur pour gérer votre enregistrement.`,
    easyAccessTitle: `Un accès facile à la STAN`,
    easyAccessDesc: `Si vous n’aviez pas de surface de contrôle auparavant, DAW Remote HD est le meilleur choix pour votre première. Intégré à l’iPad, DAW Remote est économique mais professionnel. Il vous aide à contrôler la STAN à distance et sans fil, pour un flux de travail bien plus fluide et une concentration totale sur la composition.`,
    compatibilityTitle: `Compatibilité maximale`,
    compatibilityDesc: `DAW Remote utilise les protocoles Mackie Control et HUI, pris en charge par la plupart des STAN. Nous proposons des dispositions optimisées pour plus de 10 STAN, et nous en créons sans cesse de nouvelles.`,
    seeMoreCompatibility: `En savoir plus sur la compatibilité`,
    buildTitle: `Créez votre propre surface de contrôle`,
    buildDesc: `Beaucoup adorent personnaliser, et nous aussi ! Peut-être que vous n’aimez pas tant de boutons à l’écran, peut-être voulez-vous des boutons plus grands ou un timecode, ou peut-être souhaitez-vous changer l’étiquette et la couleur des boutons. Créer une disposition qui vous correspond parfaitement est simple et rapide avec DAW Remote HD.`,
    playVideo: `Lire la vidéo ▸`,
    mixingTitle: `Mixez depuis votre canapé`,
    mixingDesc: `Une surface de contrôle traditionnelle a fière allure, c’est vrai, mais vous y êtes cloué pour mixer, n’est-ce pas ? Avec DAW Remote, vous pouvez vous détendre sur le canapé et mixer là avec votre iPad !`,
    meta: {
      wholetitle: `DAW Remote HD – Contrôlez votre STAN depuis l’iPad | EUMLab`,
      description: `DAW Remote HD contrôle votre STAN (Logic, Cubase, Pro Tools, etc.) sans fil depuis l’iPad. Créez votre propre surface de contrôle et mixez où vous voulez.`,
      keywords: `DAW Remote HD, DAW Remote, Logic, Pro Tools, Cubase, Live, contrôleur, contrôle, sans fil, Logic Remote, studio, surface de contrôle, Mackie, OSC, mixage, app, EUMLab, Polybeat, iPad, iOS, musique, musicien`,
    },
  },
  es: {
    appTitle: `DAW Remote HD`,
    appStore: `Disponible en el App Store`,
    appStoreTitle: `Descargar DAW Remote HD del App Store`,
    studioTitle: `En todas partes de tu estudio`,
    studioDesc: `Aprovechando al máximo las funciones revolucionarias del iPad, DAW Remote te ofrece una superficie de control portátil con todas las funciones. Ahora tienes control total sobre tu DAW en cualquier rincón de tu estudio.`,
    seeVideoTutorials: `Ver tutoriales en vídeo`,
    inspirationTitle: `Quédate con tu inspiración`,
    inspirationDesc1: `Solo lleva el iPad portátil y quédate junto a tu instrumento. `,
    inspirationDesc2: `Ahora puedes concentrarte en tu inspiración y grabarte con total fluidez. No necesitas moverte entre el instrumento y el ordenador para gestionar tu grabación.`,
    easyAccessTitle: `Acceso fácil al DAW`,
    easyAccessDesc: `Si antes no tenías una superficie de control, DAW Remote HD es la mejor opción como primera. Integrado en el iPad, DAW Remote es económico pero profesional. Te ayuda a controlar el DAW de forma remota e inalámbrica, para que tengas un flujo de trabajo mucho más fluido y te concentres en componer.`,
    compatibilityTitle: `Compatibilidad máxima`,
    compatibilityDesc: `DAW Remote utiliza los protocolos Mackie Control y HUI, compatibles con la mayoría de los DAW. Ofrecemos diseños optimizados para más de 10 DAW, y seguimos creando más.`,
    seeMoreCompatibility: `Más sobre compatibilidad`,
    buildTitle: `Crea tu propia superficie de control`,
    buildDesc: `A muchos les encanta personalizar, ¡y a nosotros también! Quizá no te gusten tantos botones en la pantalla, quizá quieras botones más grandes o un código de tiempo, o quizá quieras cambiar la etiqueta y el color de los botones. Crear un diseño que se ajuste a ti es fácil y rápido con DAW Remote HD.`,
    playVideo: `Reproducir vídeo ▸`,
    mixingTitle: `Mezcla en tu sofá`,
    mixingDesc: `Una superficie de control tradicional se ve genial, sí, pero te quedas atado a ella al mezclar, ¿verdad? Con DAW Remote puedes relajarte en el sofá y mezclar allí con tu iPad.`,
    meta: {
      wholetitle: `DAW Remote HD – Controla tu DAW desde el iPad | EUMLab`,
      description: `DAW Remote HD controla tu DAW (Logic, Cubase, Pro Tools, etc.) de forma inalámbrica desde el iPad. Crea tu propia superficie de control y mezcla donde quieras.`,
      keywords: `DAW Remote HD, DAW Remote, Logic, Pro Tools, Cubase, Live, controlador, control, inalámbrico, Logic Remote, estudio, superficie de control, Mackie, OSC, mezclador, app, EUMLab, Polybeat, iPad, iOS, música, músico`,
    },
  },
  zh: {
    appTitle: `DAW Remote HD`,
    appStore: `在 App Store 上架`,
    appStoreTitle: `从 App Store 下载 DAW Remote HD`,
    studioTitle: `工作室里随处掌控`,
    studioDesc: `DAW Remote 充分发挥 iPad 的革命性特性，为你带来功能完整的便携控制台。如今，你在工作室的任何角落都能完全掌控你的 DAW。`,
    seeVideoTutorials: `观看视频教程`,
    inspirationTitle: `与灵感相伴`,
    inspirationDesc1: `只需带上便携的 iPad，守在你的乐器旁。`,
    inspirationDesc2: `现在你可以专注于灵感，流畅地录制自己。无需再在乐器与电脑之间来回奔波去管理录音。`,
    easyAccessTitle: `轻松上手 DAW`,
    easyAccessDesc: `如果你以前没有控制台，DAW Remote HD 会是你入手的最佳之选。它内置于 iPad，价格实惠却足够专业。它帮助你远程、无线地控制 DAW，让工作流程更顺畅，让你专注于创作。`,
    compatibilityTitle: `兼容性拉满`,
    compatibilityDesc: `DAW Remote 采用 Mackie Control 与 HUI 协议，支持绝大多数 DAW。我们为 10 多款 DAW 提供了优化布局，并在不断增加更多。`,
    seeMoreCompatibility: `了解更多兼容性信息`,
    buildTitle: `打造你自己的控制台`,
    buildDesc: `很多人喜欢自定义，我们也是！也许你不喜欢屏幕上太多按钮，也许你想要更大的按钮或时间码，又或者你想更改按钮的标签和颜色。用 DAW Remote HD，打造一套最贴合你自己的布局既简单又快速。`,
    playVideo: `播放视频 ▸`,
    mixingTitle: `在沙发上混音`,
    mixingDesc: `传统控制台看起来确实很棒，但混音时你只能被困在那儿，不是吗？有了 DAW Remote，你可以惬意地躺在沙发上，用 iPad 在那里混音！`,
    meta: {
      wholetitle: `DAW Remote HD —— 用 iPad 掌控你的 DAW | EUMLab`,
      description: `DAW Remote HD 帮助你从 iPad 无线控制 DAW 软件（包括 Logic、Cubase、Pro Tools 等），还能自定义专属控制台，随处混音。`,
      keywords: `DAW Remote HD, DAW Remote, Logic, Pro Tools, Cubase, Live, 控制器, 控制, 无线, Logic Remote, 工作室, 控制台, Mackie, OSC, 混音, app, EUMLab, Polybeat, iPad, iOS, 音乐, 音乐人`,
    },
  },
  ja: {
    appTitle: `DAW Remote HD`,
    appStore: `App Store で配信中`,
    appStoreTitle: `DAW Remote HD を App Store からダウンロード`,
    studioTitle: `スタジオのどこからでも`,
    studioDesc: `DAW Remote は iPad の革新的な機能を最大限に活かし、フル機能のポータブルなコントロールサーフェスをお届けします。スタジオのどこにいても、あなたの DAW を自在にコントロールできます。`,
    seeVideoTutorials: `ビデオチュートリアルを見る`,
    inspirationTitle: `インスピレーションとともに`,
    inspirationDesc1: `ポータブルな iPad を持って、楽器のそばにいるだけ。`,
    inspirationDesc2: `インスピレーションに集中し、スムーズに自分を録音できます。録音を管理するために楽器とパソコンの間を行き来する必要はもうありません。`,
    easyAccessTitle: `DAW へかんたんアクセス`,
    easyAccessDesc: `これまでコントロールサーフェスをお持ちでなかったなら、最初の一台として DAW Remote HD が最適です。iPad に組み込まれた DAW Remote は、手頃ながらプロ仕様。DAW をワイヤレスでリモート操作でき、よりスムーズなワークフローで作曲に集中できます。`,
    compatibilityTitle: `最大限の互換性`,
    compatibilityDesc: `DAW Remote は、ほとんどの DAW に対応する Mackie Control と HUI プロトコルを採用しています。10 以上の DAW 向けに最適化されたレイアウトを用意し、さらに増やし続けています。`,
    seeMoreCompatibility: `互換性について詳しく見る`,
    buildTitle: `自分だけのコントロールサーフェスを作ろう`,
    buildDesc: `カスタマイズが好きな人は多く、私たちもそうです！画面上のボタンが多すぎるのが苦手な方、もっと大きなボタンやタイムコードが欲しい方、ボタンのラベルや色を変えたい方も。自分に最もフィットするレイアウトづくりが、DAW Remote HD ならかんたん＆スピーディーです。`,
    playVideo: `ビデオを再生 ▸`,
    mixingTitle: `ソファでミキシング`,
    mixingDesc: `従来のコントロールサーフェスは確かに見栄えがしますが、ミキシング中はそこに縛られてしまいますよね？ DAW Remote なら、ソファでくつろぎながら iPad でミキシングできます！`,
    meta: {
      wholetitle: `DAW Remote HD —— iPad で DAW をコントロール | EUMLab`,
      description: `DAW Remote HD は、iPad から DAW ソフト（Logic、Cubase、Pro Tools など）をワイヤレスで操作。自分専用のコントロールサーフェスを作り、どこでもミキシングできます。`,
      keywords: `DAW Remote HD, DAW Remote, Logic, Pro Tools, Cubase, Live, コントローラー, コントロール, ワイヤレス, Logic Remote, スタジオ, コントロールサーフェス, Mackie, OSC, ミキサー, アプリ, EUMLab, Polybeat, iPad, iOS, 音楽, ミュージシャン`,
    },
  },
};
