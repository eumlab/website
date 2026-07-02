// Self-contained translation module for the insTuner page (route /instuner/ and
// /<lang>/instuner/). Per-page modules avoid editing a central dictionary, so
// localized pages can be added independently. The `en` entry reproduces the legacy
// copy verbatim so the English page renders byte-identical (it is in the verify
// reference set).
export interface AppStrings {
  // Header
  videoTitle: string;
  appStoreText: string;
  appStoreTitle: string;
  navFine: string;
  navInstant: string;
  navStrobe: string;
  navFft: string;
  navSpectrograms: string;
  // Section 0 — What is insTuner?
  s0Title: string;
  s0Desc1Html: string;
  s0Desc2: string;
  s0Desc3Html: string;
  // Section 1 — Note wheel
  s1Title: string;
  s1Desc1: string;
  s1Desc2: string;
  // Section 2 — Tone Generator
  s2Title: string;
  s2Desc1Html: string;
  s2Desc2: string;
  // Section 3 — 5 Professional Tuning Modes
  s3Title: string;
  s3Desc: string;
  // Modes slides
  modeInstantTitle: string;
  modeInstantDesc1: string;
  modeInstantDesc2: string;
  modeInstantDesc3: string;
  modeFineTitle: string;
  modeFineDesc1: string;
  modeStrobeTitle: string;
  modeStrobeDesc1: string;
  modeStrobeDesc2: string;
  modeStrobeDesc3: string;
  modeFftTitle: string;
  modeFftDesc1: string;
  modeFftDesc2: string;
  modeSpectrogramsTitle: string;
  modeSpectrogramsDesc1: string;
  // Section 4 — Universal
  s4Title: string;
  s4Desc: string;
  s4AppStoreText: string;
  s4AppStoreTitle: string;
  s4GetFree: string;
  // Section 5 — Free
  s5Desc: string;
  s5AppStoreText: string;
  s5AppStoreTitle: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const INSTUNER: Record<string, AppStrings> = {
  en: {
    videoTitle: `Watch a quick intro vichrdeo`,
    appStoreText: `Available on the App Store`,
    appStoreTitle: `Download insTuner from APP Store`,
    navFine: `Fine-Tuning Mode`,
    navInstant: `Instant-Tuning Mode`,
    navStrobe: `Strobe Mode`,
    navFft: `Spectrum (FFT) Mode`,
    navSpectrograms: `Spectrogram Mode`,
    s0Title: `What is insTuner?`,
    s0Desc1Html: `Quick, accurate tuning – <br/>insTuner is a chromatic tuner for instruments of all kinds.`,
    s0Desc2: `Use it for everything from guitar and bass to piano, bowed strings, brass, woodwinds, other stringed instruments and even drums.`,
    s0Desc3Html: `It's <em>accurate, dynamic and easy to use.</em>`,
    s1Title: `Easy-to-read note wheel`,
    s1Desc1: `No matter what mode you're in, you'll see insTuner's easy-to-read note wheel. This shows what note the tuner is hearing.`,
    s1Desc2: `The number beneath the dial shows the octave.`,
    s2Title: `Tone Generator`,
    s2Desc1Html: `insTuner includes a tone generator <br/>to help you tune by ear. `,
    s2Desc2: `It's useful for complex tuning situations and produces four different waveforms. Just select an octave and note, tap and go!`,
    s3Title: `5 Professional Tuning Modes`,
    s3Desc: `insTuner supports several tuning modes for different situations. Use Instant Tuning for a quick tune-and-play, Fine- and Strobe-Tuning for accurate professional needs, and FFT and Spectrogram for sound analysis.`,
    modeInstantTitle: `Instant Tuning Mode`,
    modeInstantDesc1: `Select this mode if you are on stage or just need a quick tuning.`,
    modeInstantDesc2: `A bar on the right means the note is sharp and a bar on the left means the note is flat.`,
    modeInstantDesc3: `Once the note is in tune, the background turns green.`,
    modeFineTitle: `Fine-Tuning Mode`,
    modeFineDesc1: `The display shows the currently detected note with its color varying according to the accuracy of its tuning. The meter shows the cent deviation sharp or flat as well as the frequency.`,
    modeStrobeTitle: `Strobe Tuning Mode`,
    modeStrobeDesc1: `Strobe Mode uses an even more accurate tuning method.`,
    modeStrobeDesc2: `The bars scroll to the left when the note is too flat and to the right when the note is too sharp.`,
    modeStrobeDesc3: `When the note is in tune, the bars remain still.`,
    modeFftTitle: `Spectrum (FFT) Mode`,
    modeFftDesc1: `FFT (Fast Fourier Transform) is a useful tool for analyzing the frequencies present in a sound.`,
    modeFftDesc2: `Change the scale of the X-axis to logarithmic or linear. Note names will display when detected.`,
    modeSpectrogramsTitle: `Spectrogram Mode`,
    modeSpectrogramsDesc1: `The spectrogram is a visual representation of sound that shows how the spectral density of a signal varies over time.`,
    s4Title: `It's Universal`,
    s4Desc: `Buy insTuner once and use it on all devices – iPhone, iPad and iPod Touch.`,
    s4AppStoreText: `Available on the App Store`,
    s4AppStoreTitle: `Download insTuner from APP Store`,
    s4GetFree: `Get insTuner Free`,
    s5Desc: `insTuner Free contains both the Instant-Tuning Mode and the Tone Generator.`,
    s5AppStoreText: `Available on the App Store`,
    s5AppStoreTitle: `Download insTuner from APP Store`,
    meta: {
      wholetitle: `insTuner - EUMLab `,
      description: `insTuner app is a highly accurate chromatic tuner which helps you tune your guitar, bass, ukulele, violin, cello, woodwind instruments and more.`,
      keywords: `tuner, guitar tuner, tune a guitar, tuning a guitar, tune ukulele, saxophone, violin, viola, cello, tone generator, guitar tuna, cleartune, online guitar tuner, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },
  de: {
    videoTitle: `Kurzes Intro-Video ansehen`,
    appStoreText: `Im App Store erhältlich`,
    appStoreTitle: `insTuner im App Store laden`,
    navFine: `Feinstimm-Modus`,
    navInstant: `Sofort-Stimm-Modus`,
    navStrobe: `Stroboskop-Modus`,
    navFft: `Spektrum-Modus (FFT)`,
    navSpectrograms: `Spektrogramm-Modus`,
    s0Title: `Was ist insTuner?`,
    s0Desc1Html: `Schnelles, präzises Stimmen – <br/>insTuner ist ein chromatisches Stimmgerät für Instrumente aller Art.`,
    s0Desc2: `Nutze es für alles – von Gitarre und Bass über Klavier, Streichinstrumente, Blechbläser und Holzbläser bis hin zu anderen Saiteninstrumenten und sogar Schlagzeug.`,
    s0Desc3Html: `Es ist <em>präzise, dynamisch und einfach zu bedienen.</em>`,
    s1Title: `Leicht ablesbares Notenrad`,
    s1Desc1: `Egal in welchem Modus du dich befindest, du siehst stets das gut lesbare Notenrad von insTuner. Es zeigt an, welche Note das Stimmgerät hört.`,
    s1Desc2: `Die Zahl unter dem Rad gibt die Oktave an.`,
    s2Title: `Tongenerator`,
    s2Desc1Html: `insTuner enthält einen Tongenerator, <br/>der dir hilft, nach Gehör zu stimmen. `,
    s2Desc2: `Er ist nützlich für komplexe Stimmsituationen und erzeugt vier verschiedene Wellenformen. Einfach Oktave und Note wählen, antippen und loslegen!`,
    s3Title: `5 professionelle Stimm-Modi`,
    s3Desc: `insTuner unterstützt mehrere Stimm-Modi für unterschiedliche Situationen. Nutze das Sofort-Stimmen für schnelles Stimmen und Spielen, Fein- und Stroboskop-Stimmen für präzise professionelle Anforderungen und FFT sowie Spektrogramm für die Klanganalyse.`,
    modeInstantTitle: `Sofort-Stimm-Modus`,
    modeInstantDesc1: `Wähle diesen Modus, wenn du auf der Bühne stehst oder einfach schnell stimmen möchtest.`,
    modeInstantDesc2: `Ein Balken rechts bedeutet, dass die Note zu hoch ist, ein Balken links, dass sie zu tief ist.`,
    modeInstantDesc3: `Sobald die Note korrekt gestimmt ist, wird der Hintergrund grün.`,
    modeFineTitle: `Feinstimm-Modus`,
    modeFineDesc1: `Die Anzeige zeigt die aktuell erkannte Note, deren Farbe sich je nach Genauigkeit der Stimmung ändert. Das Messgerät zeigt die Abweichung in Cent (zu hoch oder zu tief) sowie die Frequenz an.`,
    modeStrobeTitle: `Stroboskop-Stimm-Modus`,
    modeStrobeDesc1: `Der Stroboskop-Modus verwendet eine noch genauere Stimmmethode.`,
    modeStrobeDesc2: `Die Balken laufen nach links, wenn die Note zu tief ist, und nach rechts, wenn sie zu hoch ist.`,
    modeStrobeDesc3: `Wenn die Note korrekt gestimmt ist, stehen die Balken still.`,
    modeFftTitle: `Spektrum-Modus (FFT)`,
    modeFftDesc1: `Die FFT (Fast Fourier Transform) ist ein nützliches Werkzeug, um die in einem Klang enthaltenen Frequenzen zu analysieren.`,
    modeFftDesc2: `Ändere die Skala der X-Achse auf logarithmisch oder linear. Notennamen werden angezeigt, sobald sie erkannt werden.`,
    modeSpectrogramsTitle: `Spektrogramm-Modus`,
    modeSpectrogramsDesc1: `Das Spektrogramm ist eine visuelle Darstellung des Klangs, die zeigt, wie sich die spektrale Dichte eines Signals im Zeitverlauf verändert.`,
    s4Title: `Es ist universell`,
    s4Desc: `Kaufe insTuner einmal und nutze es auf allen Geräten – iPhone, iPad und iPod Touch.`,
    s4AppStoreText: `Im App Store erhältlich`,
    s4AppStoreTitle: `insTuner im App Store laden`,
    s4GetFree: `insTuner Free holen`,
    s5Desc: `insTuner Free enthält sowohl den Sofort-Stimm-Modus als auch den Tongenerator.`,
    s5AppStoreText: `Im App Store erhältlich`,
    s5AppStoreTitle: `insTuner im App Store laden`,
    meta: {
      wholetitle: `insTuner – chromatisches Stimmgerät | EUMLab`,
      description: `insTuner ist ein hochpräzises chromatisches Stimmgerät, das dir hilft, Gitarre, Bass, Ukulele, Violine, Cello, Holzbläser und mehr zu stimmen.`,
      keywords: `Stimmgerät, Gitarren-Stimmgerät, Gitarre stimmen, Ukulele stimmen, Saxofon, Violine, Viola, Cello, Tongenerator, Stimmgerät App, EUMLab, Polybeat, iPhone, iPad, iOS, Android, Musik, Musiker, lernen, üben`,
    },
  },
  fr: {
    videoTitle: `Regarder une courte vidéo d'introduction`,
    appStoreText: `Disponible sur l'App Store`,
    appStoreTitle: `Télécharger insTuner sur l'App Store`,
    navFine: `Mode Accord fin`,
    navInstant: `Mode Accord instantané`,
    navStrobe: `Mode Stroboscope`,
    navFft: `Mode Spectre (FFT)`,
    navSpectrograms: `Mode Spectrogramme`,
    s0Title: `Qu'est-ce qu'insTuner ?`,
    s0Desc1Html: `Un accordage rapide et précis – <br/>insTuner est un accordeur chromatique pour les instruments de toutes sortes.`,
    s0Desc2: `Utilisez-le pour tout, de la guitare et la basse au piano, aux cordes frottées, aux cuivres, aux bois, à d'autres instruments à cordes et même à la batterie.`,
    s0Desc3Html: `Il est <em>précis, dynamique et facile à utiliser.</em>`,
    s1Title: `Roue de notes facile à lire`,
    s1Desc1: `Quel que soit le mode, vous verrez la roue de notes facile à lire d'insTuner. Elle indique la note que l'accordeur entend.`,
    s1Desc2: `Le chiffre sous le cadran indique l'octave.`,
    s2Title: `Générateur de sons`,
    s2Desc1Html: `insTuner intègre un générateur de sons <br/>pour vous aider à accorder à l'oreille. `,
    s2Desc2: `Il est utile pour les situations d'accordage complexes et produit quatre formes d'onde différentes. Sélectionnez simplement une octave et une note, touchez et c'est parti !`,
    s3Title: `5 modes d'accordage professionnels`,
    s3Desc: `insTuner propose plusieurs modes d'accordage adaptés à différentes situations. Utilisez l'Accord instantané pour accorder et jouer rapidement, l'Accord fin et le Stroboscope pour des besoins professionnels précis, et la FFT et le Spectrogramme pour l'analyse sonore.`,
    modeInstantTitle: `Mode Accord instantané`,
    modeInstantDesc1: `Choisissez ce mode si vous êtes sur scène ou si vous avez simplement besoin d'un accordage rapide.`,
    modeInstantDesc2: `Une barre à droite signifie que la note est trop haute et une barre à gauche signifie qu'elle est trop basse.`,
    modeInstantDesc3: `Une fois la note juste, le fond devient vert.`,
    modeFineTitle: `Mode Accord fin`,
    modeFineDesc1: `L'écran affiche la note détectée, dont la couleur varie selon la précision de l'accordage. L'indicateur affiche l'écart en cents (trop haut ou trop bas) ainsi que la fréquence.`,
    modeStrobeTitle: `Mode Accord stroboscopique`,
    modeStrobeDesc1: `Le mode Stroboscope utilise une méthode d'accordage encore plus précise.`,
    modeStrobeDesc2: `Les barres défilent vers la gauche lorsque la note est trop basse et vers la droite lorsqu'elle est trop haute.`,
    modeStrobeDesc3: `Lorsque la note est juste, les barres restent immobiles.`,
    modeFftTitle: `Mode Spectre (FFT)`,
    modeFftDesc1: `La FFT (transformée de Fourier rapide) est un outil utile pour analyser les fréquences présentes dans un son.`,
    modeFftDesc2: `Changez l'échelle de l'axe des X en logarithmique ou linéaire. Les noms de notes s'affichent lorsqu'elles sont détectées.`,
    modeSpectrogramsTitle: `Mode Spectrogramme`,
    modeSpectrogramsDesc1: `Le spectrogramme est une représentation visuelle du son qui montre comment la densité spectrale d'un signal varie au fil du temps.`,
    s4Title: `Il est universel`,
    s4Desc: `Achetez insTuner une seule fois et utilisez-le sur tous vos appareils – iPhone, iPad et iPod Touch.`,
    s4AppStoreText: `Disponible sur l'App Store`,
    s4AppStoreTitle: `Télécharger insTuner sur l'App Store`,
    s4GetFree: `Obtenir insTuner Free`,
    s5Desc: `insTuner Free contient à la fois le mode Accord instantané et le générateur de sons.`,
    s5AppStoreText: `Disponible sur l'App Store`,
    s5AppStoreTitle: `Télécharger insTuner sur l'App Store`,
    meta: {
      wholetitle: `insTuner – accordeur chromatique | EUMLab`,
      description: `insTuner est un accordeur chromatique d'une grande précision qui vous aide à accorder guitare, basse, ukulélé, violon, violoncelle, instruments à vent et plus.`,
      keywords: `accordeur, accordeur guitare, accorder une guitare, accorder un ukulélé, saxophone, violon, alto, violoncelle, générateur de sons, accordeur en ligne, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, musique, musicien, apprendre, pratiquer`,
    },
  },
  es: {
    videoTitle: `Ver un breve vídeo de introducción`,
    appStoreText: `Disponible en el App Store`,
    appStoreTitle: `Descargar insTuner desde el App Store`,
    navFine: `Modo de afinación fina`,
    navInstant: `Modo de afinación instantánea`,
    navStrobe: `Modo estroboscópico`,
    navFft: `Modo Espectro (FFT)`,
    navSpectrograms: `Modo Espectrograma`,
    s0Title: `¿Qué es insTuner?`,
    s0Desc1Html: `Afinación rápida y precisa – <br/>insTuner es un afinador cromático para instrumentos de todo tipo.`,
    s0Desc2: `Úsalo para todo, desde la guitarra y el bajo hasta el piano, las cuerdas frotadas, los metales, las maderas, otros instrumentos de cuerda e incluso la batería.`,
    s0Desc3Html: `Es <em>preciso, dinámico y fácil de usar.</em>`,
    s1Title: `Rueda de notas fácil de leer`,
    s1Desc1: `Sea cual sea el modo en el que estés, verás la rueda de notas fácil de leer de insTuner. Muestra qué nota está oyendo el afinador.`,
    s1Desc2: `El número debajo del dial indica la octava.`,
    s2Title: `Generador de tonos`,
    s2Desc1Html: `insTuner incluye un generador de tonos <br/>para ayudarte a afinar de oído. `,
    s2Desc2: `Es útil para situaciones de afinación complejas y produce cuatro formas de onda diferentes. Solo selecciona una octava y una nota, ¡toca y listo!`,
    s3Title: `5 modos de afinación profesionales`,
    s3Desc: `insTuner admite varios modos de afinación para distintas situaciones. Usa la Afinación instantánea para afinar y tocar rápido, la Afinación fina y la Estroboscópica para necesidades profesionales precisas, y la FFT y el Espectrograma para el análisis de sonido.`,
    modeInstantTitle: `Modo de afinación instantánea`,
    modeInstantDesc1: `Selecciona este modo si estás en el escenario o solo necesitas una afinación rápida.`,
    modeInstantDesc2: `Una barra a la derecha significa que la nota está alta y una barra a la izquierda significa que está baja.`,
    modeInstantDesc3: `Una vez que la nota está afinada, el fondo se vuelve verde.`,
    modeFineTitle: `Modo de afinación fina`,
    modeFineDesc1: `La pantalla muestra la nota detectada, cuyo color varía según la precisión de la afinación. El medidor muestra la desviación en cents (alta o baja) así como la frecuencia.`,
    modeStrobeTitle: `Modo de afinación estroboscópica`,
    modeStrobeDesc1: `El modo Estroboscópico utiliza un método de afinación aún más preciso.`,
    modeStrobeDesc2: `Las barras se desplazan hacia la izquierda cuando la nota está demasiado baja y hacia la derecha cuando está demasiado alta.`,
    modeStrobeDesc3: `Cuando la nota está afinada, las barras permanecen quietas.`,
    modeFftTitle: `Modo Espectro (FFT)`,
    modeFftDesc1: `La FFT (transformada rápida de Fourier) es una herramienta útil para analizar las frecuencias presentes en un sonido.`,
    modeFftDesc2: `Cambia la escala del eje X a logarítmica o lineal. Los nombres de las notas se muestran cuando se detectan.`,
    modeSpectrogramsTitle: `Modo Espectrograma`,
    modeSpectrogramsDesc1: `El espectrograma es una representación visual del sonido que muestra cómo varía la densidad espectral de una señal a lo largo del tiempo.`,
    s4Title: `Es universal`,
    s4Desc: `Compra insTuner una sola vez y úsalo en todos tus dispositivos – iPhone, iPad y iPod Touch.`,
    s4AppStoreText: `Disponible en el App Store`,
    s4AppStoreTitle: `Descargar insTuner desde el App Store`,
    s4GetFree: `Obtener insTuner Free`,
    s5Desc: `insTuner Free incluye tanto el modo de afinación instantánea como el generador de tonos.`,
    s5AppStoreText: `Disponible en el App Store`,
    s5AppStoreTitle: `Descargar insTuner desde el App Store`,
    meta: {
      wholetitle: `insTuner – afinador cromático | EUMLab`,
      description: `insTuner es un afinador cromático de gran precisión que te ayuda a afinar guitarra, bajo, ukelele, violín, violonchelo, instrumentos de viento y más.`,
      keywords: `afinador, afinador de guitarra, afinar una guitarra, afinar ukelele, saxofón, violín, viola, violonchelo, generador de tonos, afinador en línea, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, música, músico, aprender, practicar`,
    },
  },
  zh: {
    videoTitle: `观看简短的介绍视频`,
    appStoreText: `在 App Store 上架`,
    appStoreTitle: `从 App Store 下载 insTuner`,
    navFine: `精调模式`,
    navInstant: `即时调音模式`,
    navStrobe: `频闪模式`,
    navFft: `频谱（FFT）模式`,
    navSpectrograms: `声谱图模式`,
    s0Title: `什么是 insTuner？`,
    s0Desc1Html: `快速、精准的调音 – <br/>insTuner 是一款适用于各类乐器的半音调音器。`,
    s0Desc2: `无论是吉他、贝斯，还是钢琴、弓弦乐器、铜管乐器、木管乐器、其他弦乐器，甚至是鼓，都能用它来调音。`,
    s0Desc3Html: `它<em>精准、灵敏，且简单易用。</em>`,
    s1Title: `清晰易读的音符转盘`,
    s1Desc1: `无论使用哪种模式，你都会看到 insTuner 清晰易读的音符转盘，它会显示调音器当前听到的音符。`,
    s1Desc2: `转盘下方的数字表示八度。`,
    s2Title: `音调发生器`,
    s2Desc1Html: `insTuner 内置音调发生器，<br/>帮助你凭听觉调音。 `,
    s2Desc2: `它适用于复杂的调音场景，可产生四种不同的波形。只需选择八度和音符，轻点即可开始！`,
    s3Title: `5 种专业调音模式`,
    s3Desc: `insTuner 支持多种调音模式，适应不同场景。使用即时调音可快速调音即弹，精调和频闪调音满足精准的专业需求，FFT 和声谱图则用于声音分析。`,
    modeInstantTitle: `即时调音模式`,
    modeInstantDesc1: `如果你正在舞台上，或者只需要快速调音，请选择此模式。`,
    modeInstantDesc2: `右侧出现条形表示音偏高，左侧出现条形表示音偏低。`,
    modeInstantDesc3: `一旦音准调好，背景会变为绿色。`,
    modeFineTitle: `精调模式`,
    modeFineDesc1: `显示屏会显示当前检测到的音符，其颜色会根据调音的准确度而变化。仪表会显示偏高或偏低的音分偏差以及频率。`,
    modeStrobeTitle: `频闪调音模式`,
    modeStrobeDesc1: `频闪模式采用更为精准的调音方法。`,
    modeStrobeDesc2: `当音偏低时，条形向左滚动；当音偏高时，条形向右滚动。`,
    modeStrobeDesc3: `当音准调好时，条形将保持静止。`,
    modeFftTitle: `频谱（FFT）模式`,
    modeFftDesc1: `FFT（快速傅里叶变换）是分析声音中各频率成分的实用工具。`,
    modeFftDesc2: `可将 X 轴刻度切换为对数或线性。检测到音符时会显示其名称。`,
    modeSpectrogramsTitle: `声谱图模式`,
    modeSpectrogramsDesc1: `声谱图是声音的可视化呈现，展示信号的频谱密度如何随时间变化。`,
    s4Title: `通用于全设备`,
    s4Desc: `购买 insTuner 一次，即可在所有设备上使用 – iPhone、iPad 和 iPod Touch。`,
    s4AppStoreText: `在 App Store 上架`,
    s4AppStoreTitle: `从 App Store 下载 insTuner`,
    s4GetFree: `获取 insTuner Free`,
    s5Desc: `insTuner Free 同时包含即时调音模式和音调发生器。`,
    s5AppStoreText: `在 App Store 上架`,
    s5AppStoreTitle: `从 App Store 下载 insTuner`,
    meta: {
      wholetitle: `insTuner —— 半音调音器 | EUMLab`,
      description: `insTuner 是一款高精度半音调音器，帮助你为吉他、贝斯、尤克里里、小提琴、大提琴、木管乐器等乐器调音。`,
      keywords: `调音器, 吉他调音器, 给吉他调音, 尤克里里调音, 萨克斯, 小提琴, 中提琴, 大提琴, 音调发生器, 在线吉他调音器, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 音乐, 音乐人, 学习, 练习`,
    },
  },
  ja: {
    videoTitle: `短い紹介ビデオを見る`,
    appStoreText: `App Store で配信中`,
    appStoreTitle: `App Store から insTuner をダウンロード`,
    navFine: `ファインチューニングモード`,
    navInstant: `インスタントチューニングモード`,
    navStrobe: `ストロボモード`,
    navFft: `スペクトラム（FFT）モード`,
    navSpectrograms: `スペクトログラムモード`,
    s0Title: `insTuner とは？`,
    s0Desc1Html: `素早く、正確なチューニング – <br/>insTuner はあらゆる楽器に対応するクロマチックチューナーです。`,
    s0Desc2: `ギターやベースから、ピアノ、擦弦楽器、金管楽器、木管楽器、その他の弦楽器、さらにはドラムまで、あらゆる楽器に使えます。`,
    s0Desc3Html: `<em>正確で、反応がよく、使いやすい。</em>`,
    s1Title: `見やすいノートホイール`,
    s1Desc1: `どのモードでも、insTuner の見やすいノートホイールが表示されます。チューナーが聞き取っている音名が分かります。`,
    s1Desc2: `ダイヤルの下の数字はオクターブを示します。`,
    s2Title: `トーンジェネレーター`,
    s2Desc1Html: `insTuner にはトーンジェネレーターが内蔵され、<br/>耳でのチューニングをサポートします。 `,
    s2Desc2: `複雑なチューニング状況に役立ち、4 種類の波形を生成します。オクターブと音を選んでタップするだけ！`,
    s3Title: `5 つのプロ仕様チューニングモード`,
    s3Desc: `insTuner はさまざまな状況に対応する複数のチューニングモードに対応しています。素早く合わせて演奏するならインスタントチューニング、正確なプロのニーズにはファインおよびストロボチューニング、音響解析には FFT とスペクトログラムをお使いください。`,
    modeInstantTitle: `インスタントチューニングモード`,
    modeInstantDesc1: `ステージ上にいるときや、手早くチューニングしたいときはこのモードを選びましょう。`,
    modeInstantDesc2: `右側のバーは音が高い（シャープ）こと、左側のバーは音が低い（フラット）ことを示します。`,
    modeInstantDesc3: `音が合うと、背景が緑色になります。`,
    modeFineTitle: `ファインチューニングモード`,
    modeFineDesc1: `ディスプレイには現在検出されている音が表示され、その色はチューニングの正確さに応じて変化します。メーターはシャープ／フラットのセント偏差と周波数を表示します。`,
    modeStrobeTitle: `ストロボチューニングモード`,
    modeStrobeDesc1: `ストロボモードは、さらに正確なチューニング方法を採用しています。`,
    modeStrobeDesc2: `音が低すぎるとバーは左へ、高すぎると右へスクロールします。`,
    modeStrobeDesc3: `音が合うと、バーは静止します。`,
    modeFftTitle: `スペクトラム（FFT）モード`,
    modeFftDesc1: `FFT（高速フーリエ変換）は、音に含まれる周波数を解析するのに便利なツールです。`,
    modeFftDesc2: `X 軸のスケールを対数または線形に切り替えられます。検出されると音名が表示されます。`,
    modeSpectrogramsTitle: `スペクトログラムモード`,
    modeSpectrogramsDesc1: `スペクトログラムは音を視覚的に表したもので、信号のスペクトル密度が時間とともにどう変化するかを示します。`,
    s4Title: `ユニバーサル対応`,
    s4Desc: `insTuner は一度購入すれば、iPhone、iPad、iPod Touch のすべてのデバイスで使えます。`,
    s4AppStoreText: `App Store で配信中`,
    s4AppStoreTitle: `App Store から insTuner をダウンロード`,
    s4GetFree: `insTuner Free を入手`,
    s5Desc: `insTuner Free にはインスタントチューニングモードとトーンジェネレーターの両方が含まれています。`,
    s5AppStoreText: `App Store で配信中`,
    s5AppStoreTitle: `App Store から insTuner をダウンロード`,
    meta: {
      wholetitle: `insTuner —— クロマチックチューナー | EUMLab`,
      description: `insTuner は非常に精度の高いクロマチックチューナーで、ギター、ベース、ウクレレ、バイオリン、チェロ、木管楽器などのチューニングをサポートします。`,
      keywords: `チューナー, ギターチューナー, ギターをチューニング, ウクレレチューニング, サックス, バイオリン, ビオラ, チェロ, トーンジェネレーター, オンラインチューナー, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 音楽, ミュージシャン, 学ぶ, 練習`,
    },
  },
};
