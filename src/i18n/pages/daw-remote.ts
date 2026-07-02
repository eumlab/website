// Self-contained translation module for the DAW Remote page
// (route /daw-remote/ and /<lang>/daw-remote/).
// Per-page modules avoid editing a central dictionary, so localized pages can be
// added independently. The `en` entry reproduces the legacy copy verbatim so the
// English page renders byte-identical (it is in the verify reference set). App
// names, brand names, the App Store badge and the hardcoded testimonials stay in
// their original language.
export interface AppStrings {
  appTitle: string;
  appStore: string;
  appStoreTitle: string;

  whatTitle: string;
  whatDesc1Html: string;
  whatDesc2Html: string;
  whatDesc3Html: string;

  fiveStarsTitleHtml: string;

  lightTitle: string;
  lightDesc: string;

  wirelessTitle: string;
  wirelessDesc: string;

  timelineTitle: string;
  timelineDesc: string;

  recordingTitle: string;
  recordingDesc: string;

  featuresTitle: string;
  featureItemsHtml: string[];

  videosTitle: string;
  videoLogic: string;
  videoProTools: string;
  videoLive: string;

  meta: { wholetitle: string; description: string; keywords: string };
}

export const DAW_REMOTE: Record<string, AppStrings> = {
  en: {
    appTitle: `DAW Remote`,
    appStore: `Available on the App Store`,
    appStoreTitle: `Download DAW Remote from APP Store`,

    whatTitle: `What is DAW Remote`,
    whatDesc1Html: `DAW Remote is a <em>wireless</em> DAW (Digital Audio Workstation) software controller, especially optimized for <em>Apple Logic®</em>, <em>AVID ProTools®</em> and <em>Ableton Live®</em>. DAW Remote 2.0 is compatible with both <em>MAC</em> and <em>Windows</em>.`,
    whatDesc2Html: `Instead of getting stuck in front of your computer to compose, record, and produce music/audio, you can use your iPhone/iPod with DAW Remote to control DAW functions anywhere in your studio (wirelessly). Why? Because let's face it, <em>wires suck!</em>`,
    whatDesc3Html: `Not only does DAW Remote work for Logic, ProTools and Live, it’s also compatible with other popular DAW softwares such as <em>FinalCut</em>, <em>Audition</em> which support one of <em>Mackie HUI</em>, <em>Logic Control</em> and <em>Mackie Control protocols</em>.`,

    fiveStarsTitleHtml: `DAW Remote is a <em>5-stars</em> collector`,

    lightTitle: `It's Lightweight`,
    lightDesc: `DAW Remote only has simple but essential functions. It's designed for you to save your life instead of wasting time on uncountable buttons and knobs which may never be used.`,

    wirelessTitle: `It's Wireless`,
    wirelessDesc: `DAW Remote uses air not wire. You can use your DAW Remote everywhere in your studio without worrying about wires.`,

    timelineTitle: `All about Timeline`,
    timelineDesc: `Your notes and emotions lie on your timeline. You play and play again just to make sure everything is all right. DAW Remote is designed to help. JOG and Scrub mode can help you to control playback quickly and efficiently.`,

    recordingTitle: `Recording for the best!`,
    recordingDesc: `With Punch Recording function, you can practice as many times as you like before performing the final take. This allows you to make the preceding song section to "get into the groove."`,

    featuresTitle: `Features List`,
    featureItemsHtml: [
      `<em>New DAWs Support</em> It supports Apple Logic, AVID ProTools and Ableton Live now!`,
      `<em>Cross Platform</em> Compatible with MAC and Windows.`,
      `<em>Lightweight and well designed</em> Essential functions to accelerate your workflow.`,
      `<em>Track Control Record</em>, Mute, Solo, VOL, PAN, and Track Selector.`,
      `<em>Track Level Meter indicator.</em>`,
      `<em>Markers Control</em> Add, Delete markers. Quickly jump to previous and next marker.`,
      `<em>Playback Control</em> Rewind, FWD, Play, Record, Stop.`,
      `<em>Jog/Scrub Wheel Mode</em> Quickly seek the right location of your song.`,
      `<em>Punch Recording</em> Add, Delete and Edit Circle and Punch, Easy to do recording remotely.`,
      `<em>Zoom Mode</em> Zoom editor/mix view remotely.`,
      `<em>Visualized Information Display</em> Read your Time Code, Track Name, Pan and Volume information directly.`,
      `<em>Other Utilities</em> such as: Undo,Redo,Enter,Save,Cancel,Click,etc.`,
      `<em>Powerful Instructions</em> Help and FAQ to help you setup connection much easier.`,
      `<em>Use Wi-Fi to connect with host computer.</em>`,
      `<em>No extra drivers required.</em>`,
    ],

    videosTitle: `Videos`,
    videoLogic: `In Apple Logic`,
    videoProTools: `In AVID ProTools`,
    videoLive: `In Ableton Live`,

    meta: {
      wholetitle: `DAW Remote - EUMLab `,
      description: `DAW Remote app helps you control DAW softwares wirelessly (including Logic, Cubase, Pro Tools etc). You can loop, punch, jog on your iPhone`,
      keywords: `daw remote, logic, pro tools, cubase, live, controller, control, wireless, ac97, logic remote, remote, studio, mackie, osc, mixer, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },

  de: {
    appTitle: `DAW Remote`,
    appStore: `Available on the App Store`,
    appStoreTitle: `DAW Remote im App Store laden`,

    whatTitle: `Was ist DAW Remote`,
    whatDesc1Html: `DAW Remote ist eine <em>drahtlose</em> Steuerung für DAW-Software (Digital Audio Workstation), besonders optimiert für <em>Apple Logic®</em>, <em>AVID ProTools®</em> und <em>Ableton Live®</em>. DAW Remote 2.0 ist sowohl mit <em>MAC</em> als auch mit <em>Windows</em> kompatibel.`,
    whatDesc2Html: `Statt zum Komponieren, Aufnehmen und Produzieren von Musik/Audio am Computer festzusitzen, kannst du dein iPhone/iPod mit DAW Remote nutzen, um DAW-Funktionen überall in deinem Studio (drahtlos) zu steuern. Warum? Weil mal ehrlich, <em>Kabel nerven!</em>`,
    whatDesc3Html: `DAW Remote funktioniert nicht nur mit Logic, ProTools und Live, sondern auch mit anderen beliebten DAW-Programmen wie <em>FinalCut</em> oder <em>Audition</em>, die eines der Protokolle <em>Mackie HUI</em>, <em>Logic Control</em> oder <em>Mackie Control</em> unterstützen.`,

    fiveStarsTitleHtml: `DAW Remote sammelt <em>5 Sterne</em>`,

    lightTitle: `Es ist leichtgewichtig`,
    lightDesc: `DAW Remote bietet nur einfache, aber essenzielle Funktionen. Es wurde entwickelt, um dir Zeit zu sparen, statt sie mit unzähligen Buttons und Reglern zu verschwenden, die du vielleicht nie benutzt.`,

    wirelessTitle: `Es ist drahtlos`,
    wirelessDesc: `DAW Remote nutzt Luft statt Kabel. Du kannst dein DAW Remote überall in deinem Studio einsetzen, ohne dir über Kabel Gedanken zu machen.`,

    timelineTitle: `Alles rund um die Timeline`,
    timelineDesc: `Deine Noten und Emotionen liegen auf deiner Timeline. Du spielst immer wieder, nur um sicherzugehen, dass alles passt. DAW Remote hilft dir dabei. Der JOG- und Scrub-Modus steuert die Wiedergabe schnell und effizient.`,

    recordingTitle: `Aufnehmen vom Feinsten!`,
    recordingDesc: `Mit der Punch-Recording-Funktion kannst du so oft üben, wie du möchtest, bevor du den finalen Take einspielst. So kommt der vorangehende Songabschnitt richtig „in den Groove“.`,

    featuresTitle: `Funktionsliste`,
    featureItemsHtml: [
      `<em>Neue DAW-Unterstützung</em> Unterstützt jetzt Apple Logic, AVID ProTools und Ableton Live!`,
      `<em>Plattformübergreifend</em> Kompatibel mit MAC und Windows.`,
      `<em>Leichtgewichtig und gut gestaltet</em> Essenzielle Funktionen, die deinen Workflow beschleunigen.`,
      `<em>Spursteuerung: Aufnahme</em>, Mute, Solo, VOL, PAN und Spurauswahl.`,
      `<em>Pegelanzeige pro Spur.</em>`,
      `<em>Marker-Steuerung</em> Marker hinzufügen, löschen. Schnell zum vorherigen und nächsten Marker springen.`,
      `<em>Wiedergabe-Steuerung</em> Zurückspulen, Vorspulen, Play, Aufnahme, Stop.`,
      `<em>Jog-/Scrub-Wheel-Modus</em> Finde schnell die richtige Stelle in deinem Song.`,
      `<em>Punch Recording</em> Cycle und Punch hinzufügen, löschen und bearbeiten – einfaches Aufnehmen aus der Ferne.`,
      `<em>Zoom-Modus</em> Editor-/Mix-Ansicht aus der Ferne zoomen.`,
      `<em>Visualisierte Informationsanzeige</em> Lies Time Code, Spurname, Pan und Lautstärke direkt ab.`,
      `<em>Weitere Werkzeuge</em> wie: Undo, Redo, Enter, Save, Cancel, Click usw.`,
      `<em>Leistungsstarke Anleitungen</em> Hilfe und FAQ, um die Verbindung viel leichter einzurichten.`,
      `<em>Per WLAN mit dem Host-Computer verbinden.</em>`,
      `<em>Keine zusätzlichen Treiber erforderlich.</em>`,
    ],

    videosTitle: `Videos`,
    videoLogic: `In Apple Logic`,
    videoProTools: `In AVID ProTools`,
    videoLive: `In Ableton Live`,

    meta: {
      wholetitle: `DAW Remote – drahtloser DAW-Controller | EUMLab`,
      description: `DAW Remote steuert deine DAW-Software drahtlos (Logic, Cubase, Pro Tools u. a.). Loope, punche und jogge bequem von deinem iPhone aus.`,
      keywords: `DAW Remote, Logic, Pro Tools, Cubase, Live, Controller, Steuerung, drahtlos, Logic Remote, Studio, Mackie, OSC, Mixer, App, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, Musiker`,
    },
  },

  fr: {
    appTitle: `DAW Remote`,
    appStore: `Available on the App Store`,
    appStoreTitle: `Télécharger DAW Remote sur l’App Store`,

    whatTitle: `Qu’est-ce que DAW Remote`,
    whatDesc1Html: `DAW Remote est un contrôleur <em>sans fil</em> pour logiciels DAW (station audionumérique), tout particulièrement optimisé pour <em>Apple Logic®</em>, <em>AVID ProTools®</em> et <em>Ableton Live®</em>. DAW Remote 2.0 est compatible à la fois avec <em>MAC</em> et <em>Windows</em>.`,
    whatDesc2Html: `Au lieu de rester coincé devant votre ordinateur pour composer, enregistrer et produire de la musique/audio, vous pouvez utiliser votre iPhone/iPod avec DAW Remote pour piloter les fonctions de votre DAW partout dans votre studio (sans fil). Pourquoi ? Parce qu’avouons-le, <em>les câbles, c’est pénible !</em>`,
    whatDesc3Html: `DAW Remote ne fonctionne pas seulement avec Logic, ProTools et Live : il est aussi compatible avec d’autres logiciels DAW populaires comme <em>FinalCut</em> ou <em>Audition</em> qui prennent en charge l’un des protocoles <em>Mackie HUI</em>, <em>Logic Control</em> ou <em>Mackie Control</em>.`,

    fiveStarsTitleHtml: `DAW Remote collectionne les <em>5 étoiles</em>`,

    lightTitle: `Il est léger`,
    lightDesc: `DAW Remote ne propose que des fonctions simples mais essentielles. Il est conçu pour vous faire gagner du temps plutôt que de le perdre sur d’innombrables boutons et molettes qui ne serviront peut-être jamais.`,

    wirelessTitle: `Il est sans fil`,
    wirelessDesc: `DAW Remote utilise l’air, pas les câbles. Vous pouvez utiliser votre DAW Remote partout dans votre studio sans vous soucier des câbles.`,

    timelineTitle: `Tout sur la timeline`,
    timelineDesc: `Vos notes et vos émotions reposent sur votre timeline. Vous jouez encore et encore juste pour vérifier que tout est parfait. DAW Remote est là pour vous aider. Les modes JOG et Scrub vous permettent de contrôler la lecture rapidement et efficacement.`,

    recordingTitle: `Enregistrer au mieux !`,
    recordingDesc: `Avec la fonction Punch Recording, vous pouvez répéter autant de fois que vous le souhaitez avant la prise finale. Cela permet de bien « se mettre dans le groove » sur la section précédente du morceau.`,

    featuresTitle: `Liste des fonctionnalités`,
    featureItemsHtml: [
      `<em>Nouvelle prise en charge de DAW</em> Compatible désormais avec Apple Logic, AVID ProTools et Ableton Live !`,
      `<em>Multiplateforme</em> Compatible avec MAC et Windows.`,
      `<em>Léger et bien pensé</em> Des fonctions essentielles pour accélérer votre flux de travail.`,
      `<em>Contrôle de piste : enregistrement</em>, Mute, Solo, VOL, PAN et sélecteur de piste.`,
      `<em>Indicateur de niveau par piste.</em>`,
      `<em>Contrôle des marqueurs</em> Ajouter, supprimer des marqueurs. Sauter rapidement au marqueur précédent et suivant.`,
      `<em>Contrôle de lecture</em> Retour, avance, lecture, enregistrement, stop.`,
      `<em>Mode molette Jog/Scrub</em> Trouvez rapidement le bon endroit de votre morceau.`,
      `<em>Punch Recording</em> Ajouter, supprimer et modifier Cycle et Punch, l’enregistrement à distance en toute simplicité.`,
      `<em>Mode zoom</em> Zoomez sur la vue éditeur/mix à distance.`,
      `<em>Affichage visuel des informations</em> Lisez directement votre Time Code, le nom de piste, le pan et le volume.`,
      `<em>Autres utilitaires</em> tels que : Undo, Redo, Enter, Save, Cancel, Click, etc.`,
      `<em>Instructions complètes</em> Aide et FAQ pour configurer la connexion bien plus facilement.`,
      `<em>Connexion à l’ordinateur hôte en Wi-Fi.</em>`,
      `<em>Aucun pilote supplémentaire requis.</em>`,
    ],

    videosTitle: `Vidéos`,
    videoLogic: `Dans Apple Logic`,
    videoProTools: `Dans AVID ProTools`,
    videoLive: `Dans Ableton Live`,

    meta: {
      wholetitle: `DAW Remote – contrôleur DAW sans fil | EUMLab`,
      description: `DAW Remote pilote vos logiciels DAW sans fil (Logic, Cubase, Pro Tools, etc.). Bouclez, punchez et joggez depuis votre iPhone.`,
      keywords: `DAW Remote, Logic, Pro Tools, Cubase, Live, contrôleur, contrôle, sans fil, Logic Remote, studio, Mackie, OSC, mixeur, app, EUMLab, Polybeat, iPhone, iPad, iOS, musique, musicien`,
    },
  },

  es: {
    appTitle: `DAW Remote`,
    appStore: `Available on the App Store`,
    appStoreTitle: `Descargar DAW Remote en la App Store`,

    whatTitle: `Qué es DAW Remote`,
    whatDesc1Html: `DAW Remote es un controlador <em>inalámbrico</em> de software DAW (estación de trabajo de audio digital), especialmente optimizado para <em>Apple Logic®</em>, <em>AVID ProTools®</em> y <em>Ableton Live®</em>. DAW Remote 2.0 es compatible tanto con <em>MAC</em> como con <em>Windows</em>.`,
    whatDesc2Html: `En lugar de quedarte pegado al ordenador para componer, grabar y producir música/audio, puedes usar tu iPhone/iPod con DAW Remote para controlar las funciones de tu DAW por todo el estudio (de forma inalámbrica). ¿Por qué? Porque, seamos sinceros, <em>¡los cables son un fastidio!</em>`,
    whatDesc3Html: `DAW Remote no solo funciona con Logic, ProTools y Live, sino que también es compatible con otros programas DAW populares como <em>FinalCut</em> o <em>Audition</em> que admiten uno de los protocolos <em>Mackie HUI</em>, <em>Logic Control</em> y <em>Mackie Control</em>.`,

    fiveStarsTitleHtml: `DAW Remote colecciona <em>5 estrellas</em>`,

    lightTitle: `Es ligero`,
    lightDesc: `DAW Remote solo tiene funciones sencillas pero esenciales. Está diseñado para ahorrarte tiempo en lugar de perderlo entre incontables botones y mandos que quizá nunca uses.`,

    wirelessTitle: `Es inalámbrico`,
    wirelessDesc: `DAW Remote usa el aire, no cables. Puedes usar tu DAW Remote por todo el estudio sin preocuparte por los cables.`,

    timelineTitle: `Todo sobre la línea de tiempo`,
    timelineDesc: `Tus notas y emociones viven en tu línea de tiempo. Tocas una y otra vez solo para asegurarte de que todo está bien. DAW Remote está diseñado para ayudarte. Los modos JOG y Scrub te permiten controlar la reproducción de forma rápida y eficiente.`,

    recordingTitle: `¡Grabar a lo grande!`,
    recordingDesc: `Con la función Punch Recording puedes ensayar tantas veces como quieras antes de la toma final. Así consigues que la sección anterior de la canción «entre en el groove».`,

    featuresTitle: `Lista de funciones`,
    featureItemsHtml: [
      `<em>Nueva compatibilidad con DAW</em> ¡Ahora es compatible con Apple Logic, AVID ProTools y Ableton Live!`,
      `<em>Multiplataforma</em> Compatible con MAC y Windows.`,
      `<em>Ligero y bien diseñado</em> Funciones esenciales para acelerar tu flujo de trabajo.`,
      `<em>Control de pista: grabación</em>, Mute, Solo, VOL, PAN y selector de pista.`,
      `<em>Indicador de nivel por pista.</em>`,
      `<em>Control de marcadores</em> Añade y elimina marcadores. Salta rápidamente al marcador anterior y siguiente.`,
      `<em>Control de reproducción</em> Rebobinar, avanzar, reproducir, grabar, detener.`,
      `<em>Modo rueda Jog/Scrub</em> Encuentra rápidamente el punto exacto de tu canción.`,
      `<em>Punch Recording</em> Añade, elimina y edita Cycle y Punch; graba a distancia con facilidad.`,
      `<em>Modo zoom</em> Amplía la vista de editor/mezcla a distancia.`,
      `<em>Visualización de información</em> Lee directamente tu Time Code, nombre de pista, pan y volumen.`,
      `<em>Otras utilidades</em> como: Undo, Redo, Enter, Save, Cancel, Click, etc.`,
      `<em>Instrucciones completas</em> Ayuda y preguntas frecuentes para configurar la conexión mucho más fácilmente.`,
      `<em>Conéctate con el ordenador anfitrión por Wi-Fi.</em>`,
      `<em>No requiere controladores adicionales.</em>`,
    ],

    videosTitle: `Vídeos`,
    videoLogic: `En Apple Logic`,
    videoProTools: `En AVID ProTools`,
    videoLive: `En Ableton Live`,

    meta: {
      wholetitle: `DAW Remote – controlador DAW inalámbrico | EUMLab`,
      description: `DAW Remote controla tu software DAW de forma inalámbrica (Logic, Cubase, Pro Tools, etc.). Haz loop, punch y jog desde tu iPhone.`,
      keywords: `DAW Remote, Logic, Pro Tools, Cubase, Live, controlador, control, inalámbrico, Logic Remote, estudio, Mackie, OSC, mezclador, app, EUMLab, Polybeat, iPhone, iPad, iOS, música, músico`,
    },
  },

  zh: {
    appTitle: `DAW Remote`,
    appStore: `Available on the App Store`,
    appStoreTitle: `在 App Store 下载 DAW Remote`,

    whatTitle: `什么是 DAW Remote`,
    whatDesc1Html: `DAW Remote 是一款<em>无线</em>的 DAW（数字音频工作站）软件控制器，专为 <em>Apple Logic®</em>、<em>AVID ProTools®</em> 和 <em>Ableton Live®</em> 优化。DAW Remote 2.0 同时兼容 <em>MAC</em> 与 <em>Windows</em>。`,
    whatDesc2Html: `不必再被困在电脑前作曲、录音和制作音乐／音频，你可以用 iPhone／iPod 搭配 DAW Remote，在工作室的任何角落（无线）控制 DAW 功能。为什么？因为说实话，<em>线缆真烦人！</em>`,
    whatDesc3Html: `DAW Remote 不仅适用于 Logic、ProTools 和 Live，还兼容其他热门 DAW 软件，例如支持 <em>Mackie HUI</em>、<em>Logic Control</em> 与 <em>Mackie Control 协议</em>之一的 <em>FinalCut</em>、<em>Audition</em>。`,

    fiveStarsTitleHtml: `DAW Remote 是<em>五星</em>收割机`,

    lightTitle: `它很轻量`,
    lightDesc: `DAW Remote 只保留简单却必备的功能。它的设计是为你节省时间，而不是把时间浪费在那些也许永远用不到的无数按钮和旋钮上。`,

    wirelessTitle: `它是无线的`,
    wirelessDesc: `DAW Remote 用的是空气而非线缆。你可以在工作室的任何地方使用 DAW Remote，无需为线缆烦恼。`,

    timelineTitle: `时间线，一切尽在掌握`,
    timelineDesc: `你的音符与情感都铺陈在时间线上。你一遍又一遍地演奏，只为确保一切无误。DAW Remote 正是为此而生。JOG 与 Scrub 模式帮助你快速高效地控制播放。`,

    recordingTitle: `录出最好的一条！`,
    recordingDesc: `借助 Punch Recording 功能，你可以在录制最终版本前随心练习多次，让前面的乐段先“进入状态”。`,

    featuresTitle: `功能列表`,
    featureItemsHtml: [
      `<em>全新 DAW 支持</em> 现已支持 Apple Logic、AVID ProTools 和 Ableton Live！`,
      `<em>跨平台</em> 兼容 MAC 与 Windows。`,
      `<em>轻量且精心设计</em> 必备功能，加速你的工作流程。`,
      `<em>音轨控制：录音</em>、静音、独奏、音量、声相，以及音轨选择器。`,
      `<em>音轨电平表指示。</em>`,
      `<em>标记控制</em> 添加、删除标记。快速跳转到上一个和下一个标记。`,
      `<em>播放控制</em> 倒带、快进、播放、录音、停止。`,
      `<em>Jog/Scrub 滚轮模式</em> 快速定位到歌曲的正确位置。`,
      `<em>Punch Recording</em> 添加、删除并编辑循环与补录区段，轻松实现远程录音。`,
      `<em>缩放模式</em> 远程缩放编辑器／混音视图。`,
      `<em>可视化信息显示</em> 直接读取时间码、音轨名称、声相和音量信息。`,
      `<em>其他实用功能</em> 例如：撤销、重做、Enter、保存、取消、Click 等。`,
      `<em>强大的使用说明</em> 帮助与常见问题，让你更轻松地建立连接。`,
      `<em>使用 Wi-Fi 连接主机电脑。</em>`,
      `<em>无需额外驱动程序。</em>`,
    ],

    videosTitle: `视频`,
    videoLogic: `在 Apple Logic 中`,
    videoProTools: `在 AVID ProTools 中`,
    videoLive: `在 Ableton Live 中`,

    meta: {
      wholetitle: `DAW Remote —— 无线 DAW 控制器 | EUMLab`,
      description: `DAW Remote 帮助你无线控制 DAW 软件（包括 Logic、Cubase、Pro Tools 等）。在 iPhone 上即可循环、补录与 Jog 定位。`,
      keywords: `DAW Remote, Logic, Pro Tools, Cubase, Live, 控制器, 控制, 无线, Logic Remote, 录音室, Mackie, OSC, 调音台, app, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 音乐人`,
    },
  },

  ja: {
    appTitle: `DAW Remote`,
    appStore: `Available on the App Store`,
    appStoreTitle: `App Store で DAW Remote をダウンロード`,

    whatTitle: `DAW Remote とは`,
    whatDesc1Html: `DAW Remote は<em>ワイヤレス</em>の DAW（デジタル・オーディオ・ワークステーション）ソフトウェア・コントローラーで、<em>Apple Logic®</em>、<em>AVID ProTools®</em>、<em>Ableton Live®</em> に特化して最適化されています。DAW Remote 2.0 は <em>MAC</em> と <em>Windows</em> の両方に対応しています。`,
    whatDesc2Html: `作曲・録音・音楽／オーディオ制作のためにパソコンの前に縛りつけられる代わりに、iPhone／iPod と DAW Remote を使えば、スタジオのどこからでも（ワイヤレスで）DAW の機能を操作できます。なぜか？ 正直なところ、<em>ケーブルはうんざりだから！</em>`,
    whatDesc3Html: `DAW Remote は Logic、ProTools、Live で使えるだけでなく、<em>Mackie HUI</em>、<em>Logic Control</em>、<em>Mackie Control プロトコル</em>のいずれかに対応する <em>FinalCut</em> や <em>Audition</em> など、他の人気 DAW ソフトとも互換性があります。`,

    fiveStarsTitleHtml: `DAW Remote は<em>5つ星</em>を集めています`,

    lightTitle: `軽量です`,
    lightDesc: `DAW Remote はシンプルかつ必要不可欠な機能だけを備えています。使うことのないかもしれない無数のボタンやノブに時間を費やすのではなく、あなたの時間を節約するために設計されています。`,

    wirelessTitle: `ワイヤレスです`,
    wirelessDesc: `DAW Remote はケーブルではなく空気を使います。ケーブルを気にすることなく、スタジオのどこでも DAW Remote を使えます。`,

    timelineTitle: `タイムラインのすべて`,
    timelineDesc: `あなたの音符と感情はタイムラインの上にあります。すべてが完璧か確かめるために、何度も何度も演奏します。DAW Remote はそれを助けるために設計されました。JOG と Scrub モードで、再生をすばやく効率的にコントロールできます。`,

    recordingTitle: `最高の録音を！`,
    recordingDesc: `Punch Recording 機能を使えば、最終テイクを録る前に好きなだけ練習できます。これにより、その前のセクションをしっかり「グルーヴに乗せる」ことができます。`,

    featuresTitle: `機能一覧`,
    featureItemsHtml: [
      `<em>新しい DAW サポート</em> Apple Logic、AVID ProTools、Ableton Live に対応しました！`,
      `<em>クロスプラットフォーム</em> MAC と Windows に対応。`,
      `<em>軽量で洗練された設計</em> ワークフローを加速する必要不可欠な機能。`,
      `<em>トラックコントロール：録音</em>、ミュート、ソロ、VOL、PAN、トラックセレクター。`,
      `<em>トラックレベルメーター表示。</em>`,
      `<em>マーカーコントロール</em> マーカーの追加・削除。前後のマーカーへすばやくジャンプ。`,
      `<em>再生コントロール</em> 巻き戻し、早送り、再生、録音、停止。`,
      `<em>Jog/Scrub ホイールモード</em> 曲の正しい位置をすばやく探せます。`,
      `<em>Punch Recording</em> Cycle と Punch の追加・削除・編集。リモートでの録音が簡単に。`,
      `<em>ズームモード</em> エディター／ミックスビューをリモートでズーム。`,
      `<em>情報のビジュアル表示</em> タイムコード、トラック名、Pan、ボリューム情報を直接読み取れます。`,
      `<em>その他のユーティリティ</em> Undo、Redo、Enter、Save、Cancel、Click など。`,
      `<em>充実したインストラクション</em> 接続の設定がぐっと簡単になるヘルプと FAQ。`,
      `<em>Wi-Fi でホストコンピューターに接続。</em>`,
      `<em>追加のドライバーは不要。</em>`,
    ],

    videosTitle: `ビデオ`,
    videoLogic: `Apple Logic にて`,
    videoProTools: `AVID ProTools にて`,
    videoLive: `Ableton Live にて`,

    meta: {
      wholetitle: `DAW Remote —— ワイヤレス DAW コントローラー | EUMLab`,
      description: `DAW Remote は DAW ソフト（Logic、Cubase、Pro Tools など）をワイヤレスで操作。iPhone でループ・パンチ・ジョグができます。`,
      keywords: `DAW Remote, Logic, Pro Tools, Cubase, Live, コントローラー, 操作, ワイヤレス, Logic Remote, スタジオ, Mackie, OSC, ミキサー, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, ミュージシャン`,
    },
  },
};
