// Self-contained translation module for the iUke page (route /iuke/ and /<lang>/iuke/).
// Per-page modules avoid editing a central dictionary, so localized pages can be
// added independently. The `en` entry reproduces the legacy copy verbatim so the
// English iUke page renders byte-identical (it is in the verify reference set).
export interface AppStrings {
  // Hero
  heroTagline: string;
  downloadAppStore: string;
  muteVideo: string;
  // Introduction
  introSloganHtml: string;
  introDescHtml: string;
  // Chord
  chordSlogan: string;
  chordLeftHtml: string;
  chordRightHtml: string;
  // Solo
  soloSlogan: string;
  soloDescHtml: string;
  // Boss
  bossSlogan: string;
  bossDesc: string;
  bossTranspose: string;
  bossTempo: string;
  bossMute: string;
  // Record
  recordSlogan: string;
  recordDesc: string;
  // Practice
  practiceSloganHtml: string;
  practiceSecond: string;
  practiceDescHtml: string;
  // Christmas
  christmasSloganHtml: string;
  christmasDescHtml: string;
  // Features
  featuresHeading: string;
  features: { title: string; descHtml: string }[];
  // Download
  downloadAvailHtml: string;
  getPresskit: string;
  getPresskitTitle: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const IUKE: Record<string, AppStrings> = {
  en: {
    heroTagline: `The Ultimate Ukulele Learning Experience`,
    downloadAppStore: `Download iUke on the App Store`,
    muteVideo: ``,
    introSloganHtml: `iUke helps you <em>master your ukulele</em>`,
    introDescHtml: `Become proficient by playing through new songs.<br>iUke enriches the ukulele learning experience.`,
    chordSlogan: `Here's a C chord, give it a go!`,
    chordLeftHtml: `iUke displays how to<br>finger each chord in a song.`,
    chordRightHtml: `It also teaches you<br>the correct strumming pattern.`,
    soloSlogan: `Play solo or with your virtual band`,
    soloDescHtml: `Meet the guys. They'll be playing behind you.<br>Feel free to adjust them to your liking!`,
    bossSlogan: `"This one's in A flat with a tempo of 80 BPM!"`,
    bossDesc: `You're the boss. You tell your band how to play.`,
    bossTranspose: `Transpose key`,
    bossTempo: `Change tempo`,
    bossMute: `Mute instrument`,
    recordSlogan: `It's the time to shake the world`,
    recordDesc: `Get ready, record a video of your playing and rock the internet.`,
    practiceSloganHtml: `<em>It's a long way to the top</em>`,
    practiceSecond: `Practice makes perfect.`,
    practiceDescHtml: `iUke provides 50 practice tracks for you to<br>master your chops.<br>Use them to improve all aspects of your<br>playing: strumming, finger and chord<br>switching skills.`,
    christmasSloganHtml: `Merry<br>Christmas!`,
    christmasDescHtml: `Just got a new ukulele as a gift?<br>Not sure where to start?<br>Why not try out these festive songs?`,
    featuresHeading: `Other Cool Features`,
    features: [
      { title: `Mixer`, descHtml: `Mix down your recorded instrumental tracks as you wish.` },
      { title: `Display strumming pattern`, descHtml: `Forgotten how to strum the song? This feature reminds you of the correct rhythm.` },
      { title: `Loop`, descHtml: `Focus on practicing tricky parts by using our looper.` },
      { title: `Difficulty levels`, descHtml: `Learn either the original or simplified version of your favorite songs.` },
      { title: `Redeem ticket`, descHtml: `Complete simple tasks to earn free new songs.` },
      { title: `Left-handed mode`, descHtml: `iUke allows users to swap over the display so that left-handed people can join in the fun!` },
      { title: `Multiple tunings`, descHtml: `\n          Uke supports three ukulele tunings:<br>Tenor (GCEA)<br>Soprano (ADF#B)<br>Baritone (DGBE)\n        ` },
      { title: `Share`, descHtml: `Recordings can be uploaded to YouTube and SoundCloud internally through the app.` },
      { title: `Universal`, descHtml: `Sync iUke to both your iPhone and iPad.` },
    ],
    downloadAvailHtml: `Available for iPhone, iPad and iPod Touch<br>\n    Requires iOS 7.0+<br>\n    `,
    getPresskit: `Get Presskit`,
    getPresskitTitle: `Get Presskit`,
    meta: {
      wholetitle: `iUke - The Ultimate Ukulele Learning Experience - EUMLab `,
      description: `iUke app is an interactive ukulele song books which shows you chords along with the lyrics. You can learn, play ukulele and sing with it.`,
      keywords: `ukulele, chords, sheet, ukeoke, lyrics, over the rainbow, hey soul, tabs, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },

  de: {
    heroTagline: `Das ultimative Ukulele-Lernerlebnis`,
    downloadAppStore: `iUke im App Store laden`,
    muteVideo: ``,
    introSloganHtml: `iUke hilft dir, <em>deine Ukulele zu meistern</em>`,
    introDescHtml: `Werde versiert, indem du neue Songs durchspielst.<br>iUke bereichert das Ukulele-Lernerlebnis.`,
    chordSlogan: `Hier ist ein C-Akkord – probier ihn aus!`,
    chordLeftHtml: `iUke zeigt dir, wie du<br>jeden Akkord eines Songs greifst.`,
    chordRightHtml: `Es bringt dir außerdem<br>das richtige Schlagmuster bei.`,
    soloSlogan: `Spiel solo oder mit deiner virtuellen Band`,
    soloDescHtml: `Lern die Jungs kennen. Sie spielen hinter dir.<br>Pass sie ganz nach deinem Geschmack an!`,
    bossSlogan: `„Dieser hier in As mit einem Tempo von 80 BPM!“`,
    bossDesc: `Du bist der Chef. Du sagst deiner Band, wie sie spielt.`,
    bossTranspose: `Tonart transponieren`,
    bossTempo: `Tempo ändern`,
    bossMute: `Instrument stummschalten`,
    recordSlogan: `Zeit, die Welt zu erschüttern`,
    recordDesc: `Mach dich bereit, nimm ein Video deines Spiels auf und rock das Internet.`,
    practiceSloganHtml: `<em>Bis ganz nach oben ist es ein weiter Weg</em>`,
    practiceSecond: `Übung macht den Meister.`,
    practiceDescHtml: `iUke bietet 50 Übungstracks, mit denen du<br>deine Skills meisterst.<br>Verbessere damit alle Aspekte deines<br>Spiels: Schlagtechnik, Finger- und<br>Akkordwechsel.`,
    christmasSloganHtml: `Frohe<br>Weihnachten!`,
    christmasDescHtml: `Gerade eine neue Ukulele geschenkt bekommen?<br>Nicht sicher, wo du anfangen sollst?<br>Wie wär's mit diesen festlichen Songs?`,
    featuresHeading: `Weitere coole Funktionen`,
    features: [
      { title: `Mixer`, descHtml: `Misch deine aufgenommenen Instrumentalspuren ganz nach Wunsch ab.` },
      { title: `Schlagmuster anzeigen`, descHtml: `Vergessen, wie der Song geschlagen wird? Diese Funktion erinnert dich an den richtigen Rhythmus.` },
      { title: `Loop`, descHtml: `Übe knifflige Stellen gezielt mit unserem Looper.` },
      { title: `Schwierigkeitsgrade`, descHtml: `Lerne deine Lieblingssongs in der Original- oder vereinfachten Version.` },
      { title: `Ticket einlösen`, descHtml: `Erledige einfache Aufgaben und erhalte gratis neue Songs.` },
      { title: `Linkshänder-Modus`, descHtml: `iUke ermöglicht es, die Anzeige zu spiegeln, damit auch Linkshänder mitmachen können!` },
      { title: `Mehrere Stimmungen`, descHtml: `\n          iUke unterstützt drei Ukulele-Stimmungen:<br>Tenor (GCEA)<br>Sopran (ADF#B)<br>Bariton (DGBE)\n        ` },
      { title: `Teilen`, descHtml: `Aufnahmen lassen sich direkt aus der App auf YouTube und SoundCloud hochladen.` },
      { title: `Universal`, descHtml: `Synchronisiere iUke auf iPhone und iPad.` },
    ],
    downloadAvailHtml: `Verfügbar für iPhone, iPad und iPod Touch<br>\n    Erfordert iOS 7.0+<br>\n    `,
    getPresskit: `Presskit holen`,
    getPresskitTitle: `Presskit holen`,
    meta: {
      wholetitle: `iUke – das ultimative Ukulele-Lernerlebnis`,
      description: `iUke ist ein interaktives Ukulele-Songbook, das dir Akkorde zusammen mit dem Text anzeigt. Damit lernst, spielst und singst du Ukulele.`,
      keywords: `Ukulele, Akkorde, Songbook, Liedtexte, Tabs, lernen, spielen, App, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, Musiker, üben`,
    },
  },

  fr: {
    heroTagline: `L'expérience d'apprentissage ultime du ukulélé`,
    downloadAppStore: `Télécharger iUke sur l'App Store`,
    muteVideo: ``,
    introSloganHtml: `iUke vous aide à <em>maîtriser votre ukulélé</em>`,
    introDescHtml: `Progressez en jouant de nouveaux morceaux.<br>iUke enrichit l'apprentissage du ukulélé.`,
    chordSlogan: `Voici un accord de Do, essayez-le !`,
    chordLeftHtml: `iUke montre comment<br>doigter chaque accord d'un morceau.`,
    chordRightHtml: `Il vous enseigne aussi<br>le bon motif de grattage.`,
    soloSlogan: `Jouez en solo ou avec votre groupe virtuel`,
    soloDescHtml: `Faites connaissance avec les musiciens. Ils jouent derrière vous.<br>Réglez-les comme bon vous semble !`,
    bossSlogan: `« Celui-ci en La bémol, avec un tempo de 80 BPM ! »`,
    bossDesc: `C'est vous le chef. Vous dites à votre groupe comment jouer.`,
    bossTranspose: `Transposer la tonalité`,
    bossTempo: `Changer le tempo`,
    bossMute: `Couper un instrument`,
    recordSlogan: `Il est temps de faire trembler le monde`,
    recordDesc: `Préparez-vous, filmez votre jeu et enflammez Internet.`,
    practiceSloganHtml: `<em>Le chemin vers le sommet est long</em>`,
    practiceSecond: `C'est en forgeant qu'on devient forgeron.`,
    practiceDescHtml: `iUke propose 50 pistes d'entraînement pour<br>perfectionner votre technique.<br>Améliorez tous les aspects de votre<br>jeu : grattage, doigté et changements<br>d'accords.`,
    christmasSloganHtml: `Joyeux<br>Noël !`,
    christmasDescHtml: `Vous venez de recevoir un ukulélé en cadeau ?<br>Vous ne savez pas par où commencer ?<br>Pourquoi ne pas essayer ces chansons de fête ?`,
    featuresHeading: `D'autres fonctionnalités sympas`,
    features: [
      { title: `Mixeur`, descHtml: `Mixez vos pistes instrumentales enregistrées à votre guise.` },
      { title: `Afficher le motif de grattage`, descHtml: `Vous avez oublié comment gratter le morceau ? Cette fonction vous rappelle le bon rythme.` },
      { title: `Boucle`, descHtml: `Concentrez-vous sur les passages difficiles grâce à notre lecteur en boucle.` },
      { title: `Niveaux de difficulté`, descHtml: `Apprenez la version originale ou simplifiée de vos morceaux préférés.` },
      { title: `Utiliser un ticket`, descHtml: `Accomplissez des tâches simples pour obtenir de nouveaux morceaux gratuits.` },
      { title: `Mode gaucher`, descHtml: `iUke permet d'inverser l'affichage pour que les gauchers puissent aussi s'amuser !` },
      { title: `Accordages multiples`, descHtml: `\n          iUke prend en charge trois accordages de ukulélé :<br>Ténor (GCEA)<br>Soprano (ADF#B)<br>Baryton (DGBE)\n        ` },
      { title: `Partager`, descHtml: `Les enregistrements peuvent être publiés sur YouTube et SoundCloud directement depuis l'app.` },
      { title: `Universelle`, descHtml: `Synchronisez iUke sur votre iPhone et votre iPad.` },
    ],
    downloadAvailHtml: `Disponible pour iPhone, iPad et iPod Touch<br>\n    Nécessite iOS 7.0+<br>\n    `,
    getPresskit: `Obtenir le kit presse`,
    getPresskitTitle: `Obtenir le kit presse`,
    meta: {
      wholetitle: `iUke – l'apprentissage ultime du ukulélé`,
      description: `iUke est un songbook interactif de ukulélé qui affiche les accords avec les paroles. Apprenez, jouez du ukulélé et chantez avec lui.`,
      keywords: `ukulélé, accords, songbook, paroles, tablatures, apprendre, jouer, app, EUMLab, Polybeat, iPhone, iPad, iOS, musique, musicien, pratiquer`,
    },
  },

  es: {
    heroTagline: `La experiencia definitiva para aprender ukelele`,
    downloadAppStore: `Descargar iUke en la App Store`,
    muteVideo: ``,
    introSloganHtml: `iUke te ayuda a <em>dominar tu ukelele</em>`,
    introDescHtml: `Gana destreza tocando canciones nuevas.<br>iUke enriquece la experiencia de aprender ukelele.`,
    chordSlogan: `¡Aquí tienes un acorde de Do, pruébalo!`,
    chordLeftHtml: `iUke muestra cómo<br>hacer cada acorde de una canción.`,
    chordRightHtml: `También te enseña<br>el patrón de rasgueo correcto.`,
    soloSlogan: `Toca en solitario o con tu banda virtual`,
    soloDescHtml: `Conoce a los músicos. Tocarán detrás de ti.<br>¡Ajústalos a tu gusto!`,
    bossSlogan: `«¡Esta va en La bemol con un tempo de 80 BPM!»`,
    bossDesc: `Tú mandas. Le dices a tu banda cómo tocar.`,
    bossTranspose: `Transponer tonalidad`,
    bossTempo: `Cambiar tempo`,
    bossMute: `Silenciar instrumento`,
    recordSlogan: `Es hora de sacudir el mundo`,
    recordDesc: `Prepárate, graba un vídeo tocando y arrasa en internet.`,
    practiceSloganHtml: `<em>Hay un largo camino hasta la cima</em>`,
    practiceSecond: `La práctica hace al maestro.`,
    practiceDescHtml: `iUke ofrece 50 pistas de práctica para que<br>domines tu técnica.<br>Úsalas para mejorar todos los aspectos de tu<br>forma de tocar: rasgueo, digitación y cambios<br>de acordes.`,
    christmasSloganHtml: `¡Feliz<br>Navidad!`,
    christmasDescHtml: `¿Acabas de recibir un ukelele de regalo?<br>¿No sabes por dónde empezar?<br>¿Por qué no pruebas estas canciones festivas?`,
    featuresHeading: `Otras funciones geniales`,
    features: [
      { title: `Mezclador`, descHtml: `Mezcla a tu gusto las pistas instrumentales que grabaste.` },
      { title: `Mostrar patrón de rasgueo`, descHtml: `¿Olvidaste cómo rasguear la canción? Esta función te recuerda el ritmo correcto.` },
      { title: `Bucle`, descHtml: `Concéntrate en practicar las partes difíciles con nuestro reproductor en bucle.` },
      { title: `Niveles de dificultad`, descHtml: `Aprende la versión original o simplificada de tus canciones favoritas.` },
      { title: `Canjear ticket`, descHtml: `Completa tareas sencillas para conseguir canciones nuevas gratis.` },
      { title: `Modo para zurdos`, descHtml: `¡iUke permite invertir la pantalla para que las personas zurdas también se diviertan!` },
      { title: `Varias afinaciones`, descHtml: `\n          iUke admite tres afinaciones de ukelele:<br>Tenor (GCEA)<br>Soprano (ADF#B)<br>Barítono (DGBE)\n        ` },
      { title: `Compartir`, descHtml: `Las grabaciones se pueden subir a YouTube y SoundCloud desde la propia app.` },
      { title: `Universal`, descHtml: `Sincroniza iUke en tu iPhone y tu iPad.` },
    ],
    downloadAvailHtml: `Disponible para iPhone, iPad y iPod Touch<br>\n    Requiere iOS 7.0+<br>\n    `,
    getPresskit: `Obtener kit de prensa`,
    getPresskitTitle: `Obtener kit de prensa`,
    meta: {
      wholetitle: `iUke – aprende ukelele como nunca`,
      description: `iUke es un cancionero interactivo de ukelele que muestra los acordes junto con la letra. Aprende, toca el ukelele y canta con él.`,
      keywords: `ukelele, acordes, cancionero, letras, tablaturas, aprender, tocar, app, EUMLab, Polybeat, iPhone, iPad, iOS, música, músico, practicar`,
    },
  },

  zh: {
    heroTagline: `极致的尤克里里学习体验`,
    downloadAppStore: `在 App Store 下载 iUke`,
    muteVideo: ``,
    introSloganHtml: `iUke 帮助你<em>玩转你的尤克里里</em>`,
    introDescHtml: `在弹奏新歌曲中不断精进。<br>iUke 让尤克里里学习更加丰富有趣。`,
    chordSlogan: `这是一个 C 和弦，来试试吧！`,
    chordLeftHtml: `iUke 会展示歌曲中<br>每个和弦的按弦方式。`,
    chordRightHtml: `它还会教你<br>正确的扫弦节奏型。`,
    soloSlogan: `独奏，或与你的虚拟乐队一起演奏`,
    soloDescHtml: `认识一下这些伙伴，他们会在你身后伴奏。<br>尽情按你的喜好调整他们吧！`,
    bossSlogan: `“这首是降 A 调，速度 80 BPM！”`,
    bossDesc: `你说了算。由你来指挥乐队怎么演奏。`,
    bossTranspose: `移调`,
    bossTempo: `改变速度`,
    bossMute: `静音乐器`,
    recordSlogan: `是时候震撼世界了`,
    recordDesc: `准备好，录下你的演奏视频，火遍全网吧。`,
    practiceSloganHtml: `<em>登顶之路依然漫长</em>`,
    practiceSecond: `熟能生巧。`,
    practiceDescHtml: `iUke 提供 50 条练习曲目，助你<br>练就过硬本领。<br>用它们全面提升你的<br>演奏：扫弦、按弦与和弦<br>切换技巧。`,
    christmasSloganHtml: `圣诞<br>快乐！`,
    christmasDescHtml: `刚收到一把崭新的尤克里里作为礼物？<br>不知道从哪儿开始？<br>不如来试试这些节日歌曲吧？`,
    featuresHeading: `更多酷炫功能`,
    features: [
      { title: `混音器`, descHtml: `随心所欲地混合你录制的乐器音轨。` },
      { title: `显示扫弦节奏型`, descHtml: `忘了这首歌怎么扫弦？这个功能会提醒你正确的节奏。` },
      { title: `循环`, descHtml: `用我们的循环播放器专注练习难点段落。` },
      { title: `难度等级`, descHtml: `学习你喜爱歌曲的原版或简化版。` },
      { title: `兑换券`, descHtml: `完成简单任务即可免费获得新歌曲。` },
      { title: `左手模式`, descHtml: `iUke 可将显示左右翻转，让左撇子也能一起享受弹奏乐趣！` },
      { title: `多种调弦`, descHtml: `\n          iUke 支持三种尤克里里调弦：<br>次中音 (GCEA)<br>高音 (ADF#B)<br>上低音 (DGBE)\n        ` },
      { title: `分享`, descHtml: `录音可直接在 App 内上传到 YouTube 和 SoundCloud。` },
      { title: `通用版`, descHtml: `在你的 iPhone 和 iPad 上同步 iUke。` },
    ],
    downloadAvailHtml: `适用于 iPhone、iPad 和 iPod Touch<br>\n    需要 iOS 7.0 及以上<br>\n    `,
    getPresskit: `获取媒体资料包`,
    getPresskitTitle: `获取媒体资料包`,
    meta: {
      wholetitle: `iUke —— 极致的尤克里里学习体验`,
      description: `iUke 是一款交互式尤克里里歌曲集，将和弦与歌词一同呈现。你可以用它学习、弹奏尤克里里并跟唱。`,
      keywords: `尤克里里, 和弦, 歌曲集, 歌词, 谱, 学习, 弹奏, App, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 音乐人, 练习`,
    },
  },

  ja: {
    heroTagline: `究極のウクレレ学習体験`,
    downloadAppStore: `App Store で iUke をダウンロード`,
    muteVideo: ``,
    introSloganHtml: `iUke で<em>ウクレレをマスター</em>しよう`,
    introDescHtml: `新しい曲を弾きながら上達しましょう。<br>iUke がウクレレ学習をもっと豊かにします。`,
    chordSlogan: `これが C コードです。さあ弾いてみよう！`,
    chordLeftHtml: `iUke は曲の中の<br>各コードの押さえ方を表示します。`,
    chordRightHtml: `正しいストロークパターンも<br>教えてくれます。`,
    soloSlogan: `ソロでも、バーチャルバンドと一緒でも`,
    soloDescHtml: `メンバーを紹介します。あなたの後ろで演奏します。<br>好みに合わせて自由に調整しましょう！`,
    bossSlogan: `「この曲は変イ長調、テンポは 80 BPM！」`,
    bossDesc: `あなたがボスです。バンドに演奏の仕方を指示しましょう。`,
    bossTranspose: `移調する`,
    bossTempo: `テンポを変える`,
    bossMute: `楽器をミュート`,
    recordSlogan: `世界を揺らす時が来た`,
    recordDesc: `準備はいい？演奏を動画に録って、ネットを沸かせよう。`,
    practiceSloganHtml: `<em>頂上への道のりは長い</em>`,
    practiceSecond: `習うより慣れろ。`,
    practiceDescHtml: `iUke には 50 の練習トラックが用意されていて<br>テクニックを磨けます。<br>ストローク、運指、コードチェンジなど<br>演奏のあらゆる面を<br>上達させましょう。`,
    christmasSloganHtml: `メリー<br>クリスマス！`,
    christmasDescHtml: `新しいウクレレをプレゼントでもらった？<br>どこから始めればいいか分からない？<br>こんな季節の曲を弾いてみては？`,
    featuresHeading: `その他の便利な機能`,
    features: [
      { title: `ミキサー`, descHtml: `録音した楽器トラックを好きなようにミックスダウン。` },
      { title: `ストロークパターン表示`, descHtml: `曲のストロークを忘れた？この機能が正しいリズムを思い出させてくれます。` },
      { title: `ループ`, descHtml: `ループ機能を使って難しいパートを集中的に練習。` },
      { title: `難易度レベル`, descHtml: `お気に入りの曲を、オリジナル版または簡易版で学べます。` },
      { title: `チケットを使う`, descHtml: `簡単なタスクをこなして、新しい曲を無料でゲット。` },
      { title: `左利きモード`, descHtml: `iUke は表示を左右反転できるので、左利きの方も一緒に楽しめます！` },
      { title: `複数のチューニング`, descHtml: `\n          iUke は 3 種類のウクレレチューニングに対応:<br>テナー (GCEA)<br>ソプラノ (ADF#B)<br>バリトン (DGBE)\n        ` },
      { title: `シェア`, descHtml: `録音はアプリ内から直接 YouTube や SoundCloud にアップロードできます。` },
      { title: `ユニバーサル`, descHtml: `iPhone と iPad の両方で iUke を同期。` },
    ],
    downloadAvailHtml: `iPhone、iPad、iPod Touch に対応<br>\n    iOS 7.0 以降が必要<br>\n    `,
    getPresskit: `プレスキットを入手`,
    getPresskitTitle: `プレスキットを入手`,
    meta: {
      wholetitle: `iUke —— 究極のウクレレ学習体験`,
      description: `iUke はコードと歌詞を一緒に表示するインタラクティブなウクレレ曲集です。学んで、弾いて、歌えます。`,
      keywords: `ウクレレ, コード, 曲集, 歌詞, タブ譜, 学ぶ, 弾く, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, ミュージシャン, 練習`,
    },
  },
};
