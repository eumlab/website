// Self-contained translation module for the Uke101 page (route /uke101/ and
// /<lang>/uke101/). Per-page modules avoid editing a central dictionary, so
// localized pages can be added independently. The `en` entry reproduces the
// legacy copy verbatim so the English page renders byte-identical (it is in the
// verify reference set).
export interface AppStrings {
  heroH2Html: string;
  heroDownload: string;
  learnSloganHtml: string;
  learnDescHtml: string;
  seeAllLessons: string;
  twoPerspectiveSloganHtml: string;
  twoPerspectiveDescHtml: string;
  interactiveSloganHtml: string;
  interactiveDesc: string;
  gamesTitle: string;
  gamesDesc: string;
  chordTrainerTitle: string;
  chordTrainerDesc: string;
  playSingTitle: string;
  playSingDesc: string;
  downloadAvailHtml: string;
  getPresskitTitle: string;
  getPresskit: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const UKE101: Record<string, AppStrings> = {
  en: {
    heroH2Html: `Learn ukulele using <br/>tutorials, games and songs`,
    heroDownload: `Download Uke 101 on the App Store`,
    learnSloganHtml: `I couldn't be easier to <br/>
            <em>Learn to play the ukulele</em>`,
    learnDescHtml: `Uke101 has 29 fun lessons to teach you the instrument, <br/>
            and uses lots of sound samples, pictures, videos, and visual notation.<br/>
            Now it's easier than ever to learn different ukulele techniques,<br/>
            from reading tabs or tuning to advanced chord progressions and scales.<br/>
            <a href="#" style="display: none;">See all lessons</a>`,
    seeAllLessons: `See all lessons`,
    twoPerspectiveSloganHtml: `One chord, <em>two perspectives</em>`,
    twoPerspectiveDescHtml: `Instead of showing you chord fingering in 3rd person perspective,<br/>
            Uke101 also uses first person perspective to teach you.<br/>
            It's just as though you were holding a ukulele in your hand.`,
    interactiveSloganHtml: `<em>Interactive content</em>`,
    interactiveDesc: `Everything that was boring to learn from a book is interesting in Uke101!`,
    gamesTitle: `Learn from games`,
    gamesDesc: `This is where the real fun starts. Practice chords, different types of strumming, scales, and even the music theory you learned in the lessons.`,
    chordTrainerTitle: `Magic chord trainer`,
    chordTrainerDesc: `Changing chords quickly is the major challenge for most beginners. With the magic chord trainer, you play along with chords – Uke101 tells you how you're doing.`,
    playSingTitle: `Play and sing it!`,
    playSingDesc: `Uke101 has 59 tracks to play along with. Record what you’ve learned and share it with your friends. You’ll be amazed at all the songs you can play on a uke!`,
    downloadAvailHtml: `Available for iPhone and iPod Touch<br/>
    Requires iOS 7.0+<br/>
`,
    getPresskitTitle: `Get Presskit`,
    getPresskit: `Get Presskit`,
    meta: {
      wholetitle: `Uke 101 - EUMLab `,
      description: `Uke101 app helps you learn how to play ukulele from tutorials, lessons, games and playing tracks`,
      keywords: `ukulele, uke101, learn ukulele, chord, chord sheet , play ukulele, tuner, 4 chords songs, ukulele underground, ukulele tricks, video, lesson, , tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },
  de: {
    heroH2Html: `Lerne Ukulele mit <br/>Tutorials, Spielen und Songs`,
    heroDownload: `Uke 101 im App Store laden`,
    learnSloganHtml: `Einfacher geht es nicht, <br/>
            <em>Ukulele spielen zu lernen</em>`,
    learnDescHtml: `Uke101 bietet 29 unterhaltsame Lektionen, die dir das Instrument beibringen, <br/>
            mit vielen Klangbeispielen, Bildern, Videos und visueller Notation.<br/>
            Verschiedene Ukulele-Techniken zu lernen war nie einfacher,<br/>
            vom Lesen von Tabs oder dem Stimmen bis zu fortgeschrittenen Akkordfolgen und Tonleitern.<br/>
            <a href="#" style="display: none;">Alle Lektionen ansehen</a>`,
    seeAllLessons: `Alle Lektionen ansehen`,
    twoPerspectiveSloganHtml: `Ein Akkord, <em>zwei Perspektiven</em>`,
    twoPerspectiveDescHtml: `Statt dir die Akkordgriffe nur aus der 3.-Person-Perspektive zu zeigen,<br/>
            lehrt dich Uke101 auch aus der Ich-Perspektive.<br/>
            Genau so, als würdest du die Ukulele selbst in der Hand halten.`,
    interactiveSloganHtml: `<em>Interaktive Inhalte</em>`,
    interactiveDesc: `Alles, was aus einem Buch langweilig zu lernen war, macht in Uke101 Spaß!`,
    gamesTitle: `Aus Spielen lernen`,
    gamesDesc: `Hier beginnt der echte Spaß. Übe Akkorde, verschiedene Anschlagtechniken, Tonleitern und sogar die Musiktheorie aus den Lektionen.`,
    chordTrainerTitle: `Magischer Akkordtrainer`,
    chordTrainerDesc: `Schnelle Akkordwechsel sind für die meisten Anfänger die größte Hürde. Mit dem magischen Akkordtrainer spielst du Akkorde mit – Uke101 sagt dir, wie gut du bist.`,
    playSingTitle: `Spielen und singen!`,
    playSingDesc: `Uke101 hat 59 Tracks zum Mitspielen. Nimm auf, was du gelernt hast, und teile es mit deinen Freunden. Du wirst staunen, wie viele Songs du auf einer Uke spielen kannst!`,
    downloadAvailHtml: `Verfügbar für iPhone und iPod Touch<br/>
    Erfordert iOS 7.0+<br/>
`,
    getPresskitTitle: `Presskit anfordern`,
    getPresskit: `Presskit anfordern`,
    meta: {
      wholetitle: `Uke101 – Ukulele lernen | EUMLab`,
      description: `Mit der Uke101-App lernst du Ukulele zu spielen – per Tutorials, Lektionen, Spielen und Playalong-Tracks.`,
      keywords: `Ukulele, Uke101, Ukulele lernen, Akkorde, Akkordblatt, Ukulele spielen, Stimmgerät, Lektion, Video, App, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, üben, lernen`,
    },
  },
  fr: {
    heroH2Html: `Apprenez le ukulélé avec <br/>des tutoriels, des jeux et des chansons`,
    heroDownload: `Télécharger Uke 101 sur l’App Store`,
    learnSloganHtml: `Rien de plus simple pour <br/>
            <em>apprendre à jouer du ukulélé</em>`,
    learnDescHtml: `Uke101 propose 29 leçons ludiques pour vous enseigner l’instrument, <br/>
            avec de nombreux extraits sonores, images, vidéos et notation visuelle.<br/>
            Apprendre différentes techniques de ukulélé n’a jamais été aussi facile,<br/>
            de la lecture des tablatures ou de l’accordage aux progressions d’accords et aux gammes avancées.<br/>
            <a href="#" style="display: none;">Voir toutes les leçons</a>`,
    seeAllLessons: `Voir toutes les leçons`,
    twoPerspectiveSloganHtml: `Un accord, <em>deux perspectives</em>`,
    twoPerspectiveDescHtml: `Au lieu de vous montrer le doigté des accords à la 3e personne,<br/>
            Uke101 vous enseigne aussi à la première personne.<br/>
            Comme si vous teniez vous-même un ukulélé dans les mains.`,
    interactiveSloganHtml: `<em>Contenu interactif</em>`,
    interactiveDesc: `Tout ce qui était ennuyeux à apprendre dans un livre devient passionnant dans Uke101 !`,
    gamesTitle: `Apprendre en jouant`,
    gamesDesc: `C’est ici que le vrai plaisir commence. Travaillez les accords, différents types de grattage, les gammes et même la théorie musicale apprise dans les leçons.`,
    chordTrainerTitle: `Entraîneur d’accords magique`,
    chordTrainerDesc: `Changer d’accord rapidement est le principal défi pour la plupart des débutants. Avec l’entraîneur d’accords magique, vous jouez les accords – Uke101 vous dit comment vous vous débrouillez.`,
    playSingTitle: `Jouez et chantez !`,
    playSingDesc: `Uke101 compte 59 morceaux à accompagner. Enregistrez ce que vous avez appris et partagez-le avec vos amis. Vous serez étonné du nombre de chansons que l’on peut jouer au ukulélé !`,
    downloadAvailHtml: `Disponible pour iPhone et iPod Touch<br/>
    Nécessite iOS 7.0+<br/>
`,
    getPresskitTitle: `Obtenir le kit presse`,
    getPresskit: `Obtenir le kit presse`,
    meta: {
      wholetitle: `Uke101 – apprendre le ukulélé | EUMLab`,
      description: `L’appli Uke101 vous aide à apprendre le ukulélé grâce à des tutoriels, des leçons, des jeux et des morceaux à accompagner.`,
      keywords: `ukulélé, Uke101, apprendre le ukulélé, accord, grille d’accords, jouer du ukulélé, accordeur, leçon, vidéo, appli, EUMLab, Polybeat, iPhone, iPad, iOS, musique, pratiquer, apprendre`,
    },
  },
  es: {
    heroH2Html: `Aprende ukelele con <br/>tutoriales, juegos y canciones`,
    heroDownload: `Descargar Uke 101 en el App Store`,
    learnSloganHtml: `No podría ser más fácil <br/>
            <em>aprender a tocar el ukelele</em>`,
    learnDescHtml: `Uke101 tiene 29 lecciones divertidas para enseñarte el instrumento, <br/>
            con muchas muestras de sonido, imágenes, vídeos y notación visual.<br/>
            Ahora es más fácil que nunca aprender distintas técnicas de ukelele,<br/>
            desde leer tablaturas o afinar hasta progresiones de acordes y escalas avanzadas.<br/>
            <a href="#" style="display: none;">Ver todas las lecciones</a>`,
    seeAllLessons: `Ver todas las lecciones`,
    twoPerspectiveSloganHtml: `Un acorde, <em>dos perspectivas</em>`,
    twoPerspectiveDescHtml: `En lugar de mostrarte la digitación de los acordes en tercera persona,<br/>
            Uke101 también te enseña en primera persona.<br/>
            Como si sostuvieras tú mismo un ukelele en las manos.`,
    interactiveSloganHtml: `<em>Contenido interactivo</em>`,
    interactiveDesc: `¡Todo lo que era aburrido aprender de un libro resulta interesante en Uke101!`,
    gamesTitle: `Aprende jugando`,
    gamesDesc: `Aquí empieza la verdadera diversión. Practica acordes, distintos tipos de rasgueo, escalas e incluso la teoría musical que aprendiste en las lecciones.`,
    chordTrainerTitle: `Entrenador de acordes mágico`,
    chordTrainerDesc: `Cambiar de acordes con rapidez es el mayor reto para la mayoría de los principiantes. Con el entrenador de acordes mágico, tocas junto a los acordes y Uke101 te dice cómo lo haces.`,
    playSingTitle: `¡Tócala y cántala!`,
    playSingDesc: `Uke101 tiene 59 pistas para acompañar. Graba lo que has aprendido y compártelo con tus amigos. ¡Te sorprenderá cuántas canciones puedes tocar con un ukelele!`,
    downloadAvailHtml: `Disponible para iPhone y iPod Touch<br/>
    Requiere iOS 7.0+<br/>
`,
    getPresskitTitle: `Obtener kit de prensa`,
    getPresskit: `Obtener kit de prensa`,
    meta: {
      wholetitle: `Uke101 – aprender ukelele | EUMLab`,
      description: `La app Uke101 te ayuda a aprender a tocar el ukelele con tutoriales, lecciones, juegos y pistas para acompañar.`,
      keywords: `ukelele, Uke101, aprender ukelele, acorde, hoja de acordes, tocar ukelele, afinador, lección, vídeo, app, EUMLab, Polybeat, iPhone, iPad, iOS, música, practicar, aprender`,
    },
  },
  zh: {
    heroH2Html: `通过教程、游戏和歌曲<br/>学习尤克里里`,
    heroDownload: `在 App Store 下载 Uke 101`,
    learnSloganHtml: `没有比这更轻松的方式 <br/>
            <em>学会弹尤克里里</em>`,
    learnDescHtml: `Uke101 提供 29 节有趣的课程，带你认识这件乐器，<br/>
            并配有大量声音示例、图片、视频和可视化谱例。<br/>
            学习各种尤克里里技巧从未如此简单，<br/>
            从读六线谱、调音到进阶和弦进行与音阶应有尽有。<br/>
            <a href="#" style="display: none;">查看全部课程</a>`,
    seeAllLessons: `查看全部课程`,
    twoPerspectiveSloganHtml: `一个和弦，<em>两种视角</em>`,
    twoPerspectiveDescHtml: `Uke101 不仅以第三人称视角展示和弦指法，<br/>
            还用第一人称视角来教你。<br/>
            就像你正亲手抱着一把尤克里里一样。`,
    interactiveSloganHtml: `<em>互动内容</em>`,
    interactiveDesc: `从书本上学起来枯燥的一切，在 Uke101 里都变得妙趣横生！`,
    gamesTitle: `在游戏中学习`,
    gamesDesc: `真正的乐趣从这里开始。练习和弦、各种扫弦方式、音阶，甚至课程中学到的乐理。`,
    chordTrainerTitle: `神奇和弦训练器`,
    chordTrainerDesc: `快速换和弦是大多数初学者最大的难关。借助神奇和弦训练器，你跟着和弦弹奏——Uke101 会告诉你弹得怎么样。`,
    playSingTitle: `边弹边唱！`,
    playSingDesc: `Uke101 收录 59 首伴奏曲目。录下你学会的内容，分享给朋友。你会惊讶于一把尤克里里能弹出这么多歌曲！`,
    downloadAvailHtml: `适用于 iPhone 和 iPod Touch<br/>
    需要 iOS 7.0 及以上<br/>
`,
    getPresskitTitle: `获取媒体资料包`,
    getPresskit: `获取媒体资料包`,
    meta: {
      wholetitle: `Uke101 —— 学尤克里里 | EUMLab`,
      description: `Uke101 通过教程、课程、游戏和伴奏曲目，帮助你学会弹奏尤克里里。`,
      keywords: `尤克里里, Uke101, 学尤克里里, 和弦, 和弦谱, 弹尤克里里, 调音器, 课程, 视频, App, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 练习, 学习`,
    },
  },
  ja: {
    heroH2Html: `チュートリアル、ゲーム、楽曲で<br/>ウクレレを学ぼう`,
    heroDownload: `Uke 101 を App Store でダウンロード`,
    learnSloganHtml: `これ以上ないほど簡単に <br/>
            <em>ウクレレの弾き方を学べます</em>`,
    learnDescHtml: `Uke101 には楽器を教える 29 の楽しいレッスンがあり、<br/>
            たくさんのサウンドサンプル、写真、動画、ビジュアル譜面を使います。<br/>
            さまざまなウクレレのテクニックを学ぶのがこれまでになく簡単に、<br/>
            タブ譜の読み方やチューニングから、応用的なコード進行やスケールまで。<br/>
            <a href="#" style="display: none;">すべてのレッスンを見る</a>`,
    seeAllLessons: `すべてのレッスンを見る`,
    twoPerspectiveSloganHtml: `1つのコード、<em>2つの視点</em>`,
    twoPerspectiveDescHtml: `コードの押さえ方を三人称視点で見せるだけでなく、<br/>
            Uke101 は一人称視点でも教えてくれます。<br/>
            まるで自分の手でウクレレを構えているかのようです。`,
    interactiveSloganHtml: `<em>インタラクティブなコンテンツ</em>`,
    interactiveDesc: `本で学ぶと退屈だったことも、Uke101 ならすべて面白くなります！`,
    gamesTitle: `ゲームで学ぶ`,
    gamesDesc: `ここから本当の楽しさが始まります。コード、さまざまなストロークの種類、スケール、さらにレッスンで学んだ音楽理論まで練習できます。`,
    chordTrainerTitle: `マジックコードトレーナー`,
    chordTrainerDesc: `コードを素早く切り替えることは、多くの初心者にとって最大の難関です。マジックコードトレーナーでコードに合わせて演奏すると、Uke101 が出来栄えを教えてくれます。`,
    playSingTitle: `弾いて歌おう！`,
    playSingDesc: `Uke101 には一緒に演奏できる 59 のトラックがあります。学んだことを録音して友達とシェアしましょう。ウクレレでこんなにたくさんの曲が弾けることに驚くはずです！`,
    downloadAvailHtml: `iPhone および iPod Touch に対応<br/>
    iOS 7.0 以降が必要<br/>
`,
    getPresskitTitle: `プレスキットを入手`,
    getPresskit: `プレスキットを入手`,
    meta: {
      wholetitle: `Uke101 — ウクレレを学ぶ | EUMLab`,
      description: `Uke101 アプリは、チュートリアル・レッスン・ゲーム・演奏トラックでウクレレの弾き方を学べます。`,
      keywords: `ウクレレ, Uke101, ウクレレを学ぶ, コード, コード譜, ウクレレを弾く, チューナー, レッスン, 動画, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, 練習, 学習`,
    },
  },
};
