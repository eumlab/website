// Self-contained translation module for the Chordtunes page (route /chordtunes/
// and /<lang>/chordtunes/). Per-page modules avoid editing a central dictionary,
// so localized pages can be added independently. The `en` entry reproduces the
// legacy copy verbatim so the English page renders byte-identical (it is in the
// verify reference set). App/brand names stay in their original language.
export interface AppStrings {
  appTitle: string;
  appStoreLabel: string;
  heroStoreTitle: string;
  s0Title: string;
  s0Desc1: string;
  s0Desc2: string;
  s0Desc3: string;
  s1Title: string;
  s1Desc1: string;
  s1Desc2: string;
  s1Desc3: string;
  s2Title: string;
  s2Desc1: string;
  s2Desc2Html: string;
  s3Title: string;
  s3Desc1: string;
  s4Title: string;
  s4Desc1: string;
  s4Desc2: string;
  s4Desc3: string;
  bottomStoreTitle: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const CHORDTUNES: Record<string, AppStrings> = {
  en: {
    appTitle: `Chordtunes`,
    appStoreLabel: `Available on the App Store`,
    heroStoreTitle: `Download Chord Tunes from the App Store`,
    s0Title: `What is Chordtunes?`,
    s0Desc1: `Fast, easy chord creation.`,
    s0Desc2: `ChordTunes lets you make chord sheets for guitar, ukulele, banjo and mandolin. It's like an assistant that helps you create great tabs for your music. Drawing up chords and lyrics is as easy as typing.`,
    s0Desc3: `Use it anywhere and for anything you can imagine: At music lessons, for learning the chords in a friend's tune, to sketch out your own compositions, to build a custom chord book of your favorite songs, to share chord sheets with your band, your friends, or anyone at all.`,
    s1Title: `A specialist built for chord creation`,
    s1Desc1: `The specialized keyboard provides a convenient way to select and enter chords.`,
    s1Desc2: `Include lyrics if you want and output the results in three different formats.`,
    s1Desc3: `Best of all, Chordtunes comes pre-programed with over 1,700 chords!`,
    s2Title: `Create once, display everywhere`,
    s2Desc1: `No need to worry about changing charts when you need a new instrument.`,
    s2Desc2Html: `Chordtunes will display the chord sheet for any instrument the app supports, <br />automatically converting it to the tuning and instrument you select.`,
    s3Title: `Transposition is easy`,
    s3Desc1: `Change your chord sheets into any key you might need.`,
    s4Title: `Share with anyone`,
    s4Desc1: `ChordTunes can create PDFs in 3 different formats to preview, print and share.`,
    s4Desc2: `Save and import the results to and from your sharing service (Dropbox, Box, etc.)`,
    s4Desc3: `The sky is the limit for what you can create with Chordtunes.`,
    bottomStoreTitle: `Download Pro Metronome from APP Store`,
    meta: {
      wholetitle: `Chordtunes - EUMLab `,
      description: `Chordtunes app helps you write your guitar/ukulele/madolin chord sheets in no time. You can rapidly switch instruments, transpose chords and export to PDF.`,
      keywords: `chords, chord sheet, song writer, write song, ukulele, guitar, mandolin, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },
  de: {
    appTitle: `Chordtunes`,
    appStoreLabel: `Im App Store erhältlich`,
    heroStoreTitle: `Chordtunes im App Store herunterladen`,
    s0Title: `Was ist Chordtunes?`,
    s0Desc1: `Schnelles, einfaches Erstellen von Akkorden.`,
    s0Desc2: `Mit ChordTunes erstellst du Akkordblätter für Gitarre, Ukulele, Banjo und Mandoline. Es ist wie ein Assistent, der dir hilft, großartige Tabs für deine Musik zu erstellen. Akkorde und Liedtexte zu notieren ist so einfach wie Tippen.`,
    s0Desc3: `Nutze es überall und für alles, was du dir vorstellen kannst: im Musikunterricht, um die Akkorde eines Songs von Freunden zu lernen, um eigene Kompositionen zu skizzieren, um ein persönliches Akkordbuch deiner Lieblingssongs anzulegen oder um Akkordblätter mit deiner Band, deinen Freunden oder einfach jedem zu teilen.`,
    s1Title: `Ein Spezialist für die Akkorderstellung`,
    s1Desc1: `Die spezialisierte Tastatur bietet eine bequeme Möglichkeit, Akkorde auszuwählen und einzugeben.`,
    s1Desc2: `Füge bei Bedarf Liedtexte hinzu und gib die Ergebnisse in drei verschiedenen Formaten aus.`,
    s1Desc3: `Das Beste daran: Chordtunes ist mit über 1.700 Akkorden vorprogrammiert!`,
    s2Title: `Einmal erstellen, überall anzeigen`,
    s2Desc1: `Kein Umzeichnen der Diagramme mehr nötig, wenn du ein neues Instrument brauchst.`,
    s2Desc2Html: `Chordtunes zeigt das Akkordblatt für jedes von der App unterstützte Instrument an <br />und wandelt es automatisch in die von dir gewählte Stimmung und das Instrument um.`,
    s3Title: `Transponieren ist kinderleicht`,
    s3Desc1: `Bring deine Akkordblätter in jede Tonart, die du brauchst.`,
    s4Title: `Teile mit jedem`,
    s4Desc1: `ChordTunes erstellt PDFs in 3 verschiedenen Formaten zum Vorschauen, Drucken und Teilen.`,
    s4Desc2: `Speichere und importiere die Ergebnisse zu und von deinem Sharing-Dienst (Dropbox, Box usw.).`,
    s4Desc3: `Mit Chordtunes sind deiner Kreativität keine Grenzen gesetzt.`,
    bottomStoreTitle: `Pro Metronome im App Store herunterladen`,
    meta: {
      wholetitle: `Chordtunes – Akkordblätter erstellen | EUMLab`,
      description: `Mit Chordtunes erstellst du im Handumdrehen Akkordblätter für Gitarre, Ukulele und Mandoline. Wechsle blitzschnell das Instrument, transponiere Akkorde und exportiere als PDF.`,
      keywords: `Akkorde, Akkordblatt, Songwriter, Songs schreiben, Ukulele, Gitarre, Mandoline, App, EUMLab, Polybeat, iPhone, iPad, iOS, Android, Musik, Musiker, lernen, üben`,
    },
  },
  fr: {
    appTitle: `Chordtunes`,
    appStoreLabel: `Disponible sur l’App Store`,
    heroStoreTitle: `Télécharger Chord Tunes sur l’App Store`,
    s0Title: `Qu’est-ce que Chordtunes ?`,
    s0Desc1: `Création d’accords simple et rapide.`,
    s0Desc2: `ChordTunes vous permet de créer des grilles d’accords pour guitare, ukulélé, banjo et mandoline. C’est comme un assistant qui vous aide à composer de superbes tablatures pour votre musique. Noter accords et paroles est aussi simple que de taper au clavier.`,
    s0Desc3: `Utilisez-le partout et pour tout ce que vous imaginez : pendant les cours de musique, pour apprendre les accords d’un morceau d’un ami, pour esquisser vos propres compositions, pour constituer un recueil d’accords personnalisé de vos chansons préférées, ou pour partager vos grilles d’accords avec votre groupe, vos amis ou n’importe qui.`,
    s1Title: `Un spécialiste conçu pour la création d’accords`,
    s1Desc1: `Le clavier spécialisé offre un moyen pratique de sélectionner et de saisir des accords.`,
    s1Desc2: `Ajoutez des paroles si vous le souhaitez et exportez le résultat dans trois formats différents.`,
    s1Desc3: `Et le meilleur : Chordtunes est préprogrammé avec plus de 1 700 accords !`,
    s2Title: `Créez une fois, affichez partout`,
    s2Desc1: `Plus besoin de refaire vos grilles quand vous changez d’instrument.`,
    s2Desc2Html: `Chordtunes affiche la grille d’accords pour tout instrument pris en charge par l’app, <br />en la convertissant automatiquement vers l’accordage et l’instrument que vous choisissez.`,
    s3Title: `La transposition en toute simplicité`,
    s3Desc1: `Transposez vos grilles d’accords dans n’importe quelle tonalité dont vous avez besoin.`,
    s4Title: `Partagez avec tout le monde`,
    s4Desc1: `ChordTunes peut créer des PDF dans 3 formats différents pour prévisualiser, imprimer et partager.`,
    s4Desc2: `Enregistrez et importez les résultats depuis et vers votre service de partage (Dropbox, Box, etc.).`,
    s4Desc3: `Avec Chordtunes, votre créativité n’a plus de limites.`,
    bottomStoreTitle: `Télécharger Pro Metronome sur l’App Store`,
    meta: {
      wholetitle: `Chordtunes – créer des grilles d’accords | EUMLab`,
      description: `Chordtunes vous aide à créer en un instant vos grilles d’accords pour guitare, ukulélé et mandoline. Changez d’instrument, transposez les accords et exportez en PDF.`,
      keywords: `accords, grille d’accords, parolier, écrire une chanson, ukulélé, guitare, mandoline, appli, EUMLab, Polybeat, iPhone, iPad, iOS, Android, musique, musicien, apprendre, pratiquer`,
    },
  },
  es: {
    appTitle: `Chordtunes`,
    appStoreLabel: `Disponible en el App Store`,
    heroStoreTitle: `Descarga Chord Tunes en el App Store`,
    s0Title: `¿Qué es Chordtunes?`,
    s0Desc1: `Creación de acordes rápida y fácil.`,
    s0Desc2: `ChordTunes te permite crear hojas de acordes para guitarra, ukelele, banjo y mandolina. Es como un asistente que te ayuda a crear excelentes tablaturas para tu música. Anotar acordes y letras es tan fácil como escribir.`,
    s0Desc3: `Úsalo en cualquier lugar y para todo lo que imagines: en clases de música, para aprender los acordes de una canción de un amigo, para esbozar tus propias composiciones, para crear un cancionero de acordes personalizado con tus canciones favoritas, o para compartir hojas de acordes con tu banda, tus amigos o cualquier persona.`,
    s1Title: `Un especialista diseñado para crear acordes`,
    s1Desc1: `El teclado especializado ofrece una forma cómoda de seleccionar e introducir acordes.`,
    s1Desc2: `Incluye letras si quieres y exporta los resultados en tres formatos diferentes.`,
    s1Desc3: `Y lo mejor de todo: ¡Chordtunes viene preprogramado con más de 1.700 acordes!`,
    s2Title: `Crea una vez, muéstralo en todas partes`,
    s2Desc1: `No te preocupes por rehacer los diagramas cuando necesites otro instrumento.`,
    s2Desc2Html: `Chordtunes mostrará la hoja de acordes para cualquier instrumento que admita la app <br />y la convertirá automáticamente a la afinación y el instrumento que elijas.`,
    s3Title: `Transponer es muy fácil`,
    s3Desc1: `Cambia tus hojas de acordes a cualquier tonalidad que necesites.`,
    s4Title: `Comparte con cualquiera`,
    s4Desc1: `ChordTunes puede crear PDF en 3 formatos diferentes para previsualizar, imprimir y compartir.`,
    s4Desc2: `Guarda e importa los resultados desde y hacia tu servicio de archivos (Dropbox, Box, etc.).`,
    s4Desc3: `El límite lo pones tú con lo que puedes crear en Chordtunes.`,
    bottomStoreTitle: `Descarga Pro Metronome en el App Store`,
    meta: {
      wholetitle: `Chordtunes – crea hojas de acordes | EUMLab`,
      description: `Chordtunes te ayuda a crear en un momento tus hojas de acordes para guitarra, ukelele y mandolina. Cambia de instrumento al instante, transpón acordes y exporta a PDF.`,
      keywords: `acordes, hoja de acordes, compositor, escribir canciones, ukelele, guitarra, mandolina, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, música, músico, aprender, practicar`,
    },
  },
  zh: {
    appTitle: `Chordtunes`,
    appStoreLabel: `在 App Store 上架`,
    heroStoreTitle: `从 App Store 下载 Chord Tunes`,
    s0Title: `Chordtunes 是什么？`,
    s0Desc1: `快速、轻松地创建和弦。`,
    s0Desc2: `ChordTunes 让你为吉他、尤克里里、班卓琴和曼陀林制作和弦谱。它就像一位助手，帮你为音乐创作出色的六线谱。记录和弦与歌词就像打字一样简单。`,
    s0Desc3: `随时随地使用它，想做什么都行：在音乐课上、学习朋友曲子里的和弦、勾勒你自己的作品、为喜欢的歌曲建立专属和弦本，或者与乐队、朋友乃至任何人分享和弦谱。`,
    s1Title: `专为和弦创作打造的能手`,
    s1Desc1: `专用键盘让选择和输入和弦变得轻松便捷。`,
    s1Desc2: `如果需要还可加入歌词，并以三种不同格式输出结果。`,
    s1Desc3: `最棒的是，Chordtunes 内置超过 1,700 个和弦！`,
    s2Title: `创建一次，处处显示`,
    s2Desc1: `换乐器时再也不用担心要重画和弦谱。`,
    s2Desc2Html: `Chordtunes 会为 App 支持的任何乐器显示和弦谱，<br />并自动转换为你所选的调弦和乐器。`,
    s3Title: `转调轻而易举`,
    s3Desc1: `将你的和弦谱变成任何你需要的调。`,
    s4Title: `与任何人分享`,
    s4Desc1: `ChordTunes 可生成 3 种不同格式的 PDF，方便预览、打印和分享。`,
    s4Desc2: `将结果保存到你的分享服务并从中导入（Dropbox、Box 等）。`,
    s4Desc3: `用 Chordtunes 创作，唯一的限制就是你的想象力。`,
    bottomStoreTitle: `从 App Store 下载 Pro Metronome`,
    meta: {
      wholetitle: `Chordtunes —— 轻松制作和弦谱 | EUMLab`,
      description: `Chordtunes 帮你迅速制作吉他、尤克里里和曼陀林的和弦谱，快速切换乐器、转调，并导出为 PDF。`,
      keywords: `和弦, 和弦谱, 词曲创作, 写歌, 尤克里里, 吉他, 曼陀林, App, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 音乐, 音乐人, 学习, 练习, 学生`,
    },
  },
  ja: {
    appTitle: `Chordtunes`,
    appStoreLabel: `App Store で配信中`,
    heroStoreTitle: `Chord Tunes を App Store からダウンロード`,
    s0Title: `Chordtunes とは？`,
    s0Desc1: `素早く簡単にコードを作成。`,
    s0Desc2: `ChordTunes なら、ギター、ウクレレ、バンジョー、マンドリン用のコード譜を作成できます。音楽のための素晴らしいタブ譜づくりを手伝うアシスタントのようなもの。コードと歌詞を書き込むのはタイピングと同じくらい簡単です。`,
    s0Desc3: `思いつくあらゆる場面でどこでも使えます。音楽レッスンで、友達の曲のコードを覚えるのに、自分の作品をスケッチするのに、お気に入りの曲のオリジナルコードブックを作るのに、そしてコード譜をバンドや友達、誰とでも共有するのに。`,
    s1Title: `コード作成のために作られたスペシャリスト`,
    s1Desc1: `専用キーボードで、コードを手軽に選んで入力できます。`,
    s1Desc2: `必要なら歌詞も入れて、3 種類の異なるフォーマットで出力できます。`,
    s1Desc3: `何よりうれしいのは、Chordtunes には 1,700 を超えるコードがあらかじめ収録されていること！`,
    s2Title: `一度作れば、どこでも表示`,
    s2Desc1: `別の楽器が必要になっても、コード図を作り直す心配はいりません。`,
    s2Desc2Html: `Chordtunes は、アプリが対応するどの楽器でもコード譜を表示し、<br />選んだチューニングと楽器に自動で変換します。`,
    s3Title: `移調も簡単`,
    s3Desc1: `コード譜を必要なキーへ自由に変えられます。`,
    s4Title: `誰とでも共有`,
    s4Desc1: `ChordTunes は 3 種類のフォーマットで PDF を作成でき、プレビュー・印刷・共有が可能です。`,
    s4Desc2: `結果を共有サービス（Dropbox、Box など）に保存したり、そこから読み込んだりできます。`,
    s4Desc3: `Chordtunes で作れるものに限界はありません。`,
    bottomStoreTitle: `Pro Metronome を App Store からダウンロード`,
    meta: {
      wholetitle: `Chordtunes —— コード譜を簡単作成 | EUMLab`,
      description: `Chordtunes なら、ギター・ウクレレ・マンドリンのコード譜があっという間に作れます。楽器の切り替え、コードの移調、PDF への書き出しも自在です。`,
      keywords: `コード, コード譜, ソングライター, 作曲, ウクレレ, ギター, マンドリン, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 音楽, ミュージシャン, 学ぶ, 練習`,
    },
  },
};
