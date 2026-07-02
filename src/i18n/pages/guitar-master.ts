// Self-contained translation module for the Guitar Master page
// (route /guitar-master/ and /<lang>/guitar-master/).
// The `en` entry reproduces the legacy copy verbatim so the English page renders
// byte-identical (it is in the verify reference set). App/brand names
// (Guitar Master, EUMLab, AirPlay, AudioBus, App Store…) are never translated.
export interface AppStrings {
  heroH2Html: string;          // "Everything a guitarist needs <br/> right in your pocket"
  downloadTitle: string;       // title attr on hero App Store link  (uses {name})
  downloadCta: string;         // hero App Store link text            (uses {name})
  introSloganHtml: string;     // intro slogan  (begins with <em>{name}</em>)
  introDescHtml: string;
  tuningSloganHtml: string;
  tuningDescHtml: string;
  metronomeSloganHtml: string;
  metronomeDescHtml: string;
  learnMore: string;
  learnMoreTitle: string;
  scaleSloganHtml: string;
  scaleDescHtml: string;
  chordsSlogan: string;
  chordsDescHtml: string;
  chordsSupportedHtml: string;
  transposerSloganHtml: string;
  transposerDescHtml: string;
  progressionsSloganHtml: string;
  progressionsDescHtml: string;   // contains {name}
  seeHowItWorks: string;
  progressionsLinkTitle: string;
  otherFeatures: string;
  features: { title: string; descHtml: string }[];
  reviewsHeading: string;
  downloadAvailHtml: string;
  getPresskit: string;
  getPresskitTitle: string;
  videoPopupTitle: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const GUITAR_MASTER: Record<string, AppStrings> = {
  en: {
    heroH2Html: `Everything a guitarist needs <br/> right in your pocket`,
    downloadTitle: `Download Guitar Master`,
    downloadCta: `Download Guitar Master on the App Store`,
    introSloganHtml: `Inspiring tools for aspiring guitar players`,
    introDescHtml: `Train, tune, learn, and more – <br/>whether practicing, performing, composing or in session, <br/>Guitar Master helps you get the most out of your instrument.`,
    tuningSloganHtml: `<em>Pro-Level Tuning</em>`,
    tuningDescHtml: `Fix up your tuning using Guitar Master's
            chromatic tuner with intuitive color bars.
            Highly accurate – up to ±0.1 cent precision –
            the tuner includes real string sounds to help you tune by ear.
            Go from great to perfect tuning in seconds. `,
    metronomeSloganHtml: `The extremely precise <em>metronome</em><br/> with <em>strumming patterns</em> and <em>drum loops</em>`,
    metronomeDescHtml: `The metronome uses EUMLab's RTP (Real-Time Playback) technology <br/>
to ensure accuracy to 20 microseconds (±20µs).<br/>
It supports flexible time signatures with 14 different tones,<br/>
13 built-in strumming patterns and 116 drum loops to make practice a breeze.<br/>
        <br/>

    `,
    learnMore: `Lean More`,
    learnMoreTitle: `See how tuner works`,
    scaleSloganHtml: `<em>108</em> musical scales`,
    scaleDescHtml: `Scales are the soul music.<br/>
            Guitar Master features 108 different ones from all over the world,
            from Blues and Jazz, to Japanese, Middle Eastern and more.
            Use them to learn and explore new sounds and styles.`,
    chordsSlogan: `Interactive guitar tabs`,
    chordsDescHtml: `Guitar Master's tab list contains 1000s of chords, more than you'll ever need.<br/>
    Learn new chords and look them up by name or by note – <br/>Learn them all by seeing and hearing them at the same time.
`,
    chordsSupportedHtml: `Supported chord types: Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Introducing <em>5th Circle</em>  with <em>Chord Transposer</em> –<br/>
    A better way to find and learn chords.`,
    transposerDescHtml: `Most songs we hear are written based on groups of chords that change in similar ways.<br/>
With 5th Circle, easily visualize common chord changes in one interactive screen.<br/>
You can even use it to help you transpose chords into a new key.`,
    progressionsSloganHtml: `<em>Chord progressions</em>`,
    progressionsDescHtml: `Have you heard of the "Magic Four" chords?
            It's G, D, Em, and C, and many songs use just this one progression!
            Once you've mastered it, you can use it to play thousands of songs.  <br/> <br/>
            You can use Guitar Master to hear and learn the "Magic Four" chords and then transpose them into other keys.`,
    seeHowItWorks: `See how it works`,
    progressionsLinkTitle: `See how chord progression works`,
    otherFeatures: `Other Cool Features`,
    features: [
      { title: `13 time-keeping styles`, descHtml: `Choose beat sounds that work for you, including a counting voice.` },
      { title: `Tap`, descHtml: `Calculate BPM by tapping in real time.` },
      { title: `Left-Handed mode`, descHtml: `All chord diagrams and scales support display in left-handed mode.` },
      { title: `Capo`, descHtml: `The app support transpositions using a capo.` },
      { title: `79 tunings`, descHtml: `The app supports standard, lower, higher, dropped, double-dropped, major open tunings and more.` },
      { title: `Changeable A4`, descHtml: `Support for a customizable A4 reference frequency.` },
      { title: `AirPlay`, descHtml: `Use AirPlay to beam your sound to Apple TV or other AirPlay-enabled speakers.` },
      { title: `AudioBus`, descHtml: `AudioBus support – use the app as an input source for other music apps.` },
      { title: `Inter-App Audio`, descHtml: `Route the app's sound directly to other music apps like GarageBand.` },
    ],
    reviewsHeading: `Check out what people are saying`,
    downloadAvailHtml: `Available for iPhone, iPad and iPod Touch<br/>
    Requires iOS 6.1+<br/>
    `,
    getPresskit: `Get Presskit`,
    getPresskitTitle: `Get Presskit`,
    videoPopupTitle: `How the Polyrhythm Works`,
    meta: {
      wholetitle: `Guitar Master - EUMLab `,
      description: `Guitar Master app is a collection of essential guitar tools, features including accurate tuner, metronome, chord diagram, scale, chord progressions and more.`,
      keywords: `guitar master, guitar toolkit, agile, tuner, metronome ,scale, chords, chord, chord diagram, chord progression, drum loops, jam, pentatonic, strum, strums, strumming pattern, guitar tuner, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student`,
    },
  },

  de: {
    heroH2Html: `Alles, was ein Gitarrist braucht <br/> direkt in deiner Tasche`,
    downloadTitle: `Guitar Master laden`,
    downloadCta: `Guitar Master im App Store laden`,
    introSloganHtml: `Inspirierende Werkzeuge für angehende Gitarristen`,
    introDescHtml: `Üben, stimmen, lernen und mehr – <br/>ob beim Proben, Auftreten, Komponieren oder in der Session: <br/>Guitar Master hilft dir, das Beste aus deinem Instrument herauszuholen.`,
    tuningSloganHtml: `<em>Stimmen auf Profi-Niveau</em>`,
    tuningDescHtml: `Bring deine Stimmung mit dem chromatischen Stimmgerät von Guitar Master in Form – mit intuitiven Farbbalken. Hochpräzise – bis zu ±0,1 Cent genau – und mit echten Saitenklängen, damit du nach Gehör stimmen kannst. Komm in Sekunden von gut zu perfekt gestimmt.`,
    metronomeSloganHtml: `Das extrem präzise <em>Metronom</em><br/> mit <em>Schlagmustern</em> und <em>Drum-Loops</em>`,
    metronomeDescHtml: `Das Metronom nutzt EUMLabs RTP-Technologie (Real-Time Playback),<br/>
um eine Genauigkeit von 20 Mikrosekunden (±20 µs) zu gewährleisten.<br/>
Es unterstützt flexible Taktarten mit 14 verschiedenen Klängen,<br/>
13 integrierten Schlagmustern und 116 Drum-Loops, damit das Üben zum Kinderspiel wird.<br/>
        <br/>

    `,
    learnMore: `Mehr erfahren`,
    learnMoreTitle: `So funktioniert das Stimmgerät`,
    scaleSloganHtml: `<em>108</em> Tonleitern`,
    scaleDescHtml: `Tonleitern sind die Seele der Musik.<br/>
            Guitar Master bietet 108 verschiedene aus aller Welt,
            von Blues und Jazz bis hin zu japanischen, orientalischen und mehr.
            Nutze sie, um neue Klänge und Stile zu lernen und zu entdecken.`,
    chordsSlogan: `Interaktive Gitarren-Tabs`,
    chordsDescHtml: `Die Akkordliste von Guitar Master enthält Tausende von Akkorden – mehr, als du je brauchen wirst.<br/>
    Lerne neue Akkorde und suche sie nach Namen oder nach Note – <br/>lerne sie alle, indem du sie gleichzeitig siehst und hörst.
`,
    chordsSupportedHtml: `Unterstützte Akkordtypen: Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Wir präsentieren <em>Quintenzirkel</em> mit <em>Akkord-Transposer</em> –<br/>
    eine bessere Art, Akkorde zu finden und zu lernen.`,
    transposerDescHtml: `Die meisten Songs, die wir hören, basieren auf Akkordgruppen, die sich auf ähnliche Weise verändern.<br/>
Mit dem Quintenzirkel visualisierst du gängige Akkordwechsel ganz einfach auf einem interaktiven Bildschirm.<br/>
Du kannst ihn sogar nutzen, um Akkorde in eine neue Tonart zu transponieren.`,
    progressionsSloganHtml: `<em>Akkordfolgen</em>`,
    progressionsDescHtml: `Hast du schon von den „Magic Four“-Akkorden gehört?
            Es sind G, D, Em und C – und viele Songs nutzen genau diese eine Akkordfolge!
            Wenn du sie einmal beherrschst, kannst du damit Tausende Songs spielen.  <br/> <br/>
            Mit Guitar Master kannst du die „Magic Four“-Akkorde hören und lernen und sie dann in andere Tonarten transponieren.`,
    seeHowItWorks: `So funktioniert’s`,
    progressionsLinkTitle: `So funktionieren Akkordfolgen`,
    otherFeatures: `Weitere coole Funktionen`,
    features: [
      { title: `13 Zählstile`, descHtml: `Wähle Beat-Klänge, die zu dir passen – inklusive zählender Stimme.` },
      { title: `Tap`, descHtml: `Berechne die BPM, indem du in Echtzeit tippst.` },
      { title: `Linkshänder-Modus`, descHtml: `Alle Akkorddiagramme und Tonleitern lassen sich im Linkshänder-Modus anzeigen.` },
      { title: `Kapodaster`, descHtml: `Die App unterstützt Transpositionen mit einem Kapodaster.` },
      { title: `79 Stimmungen`, descHtml: `Die App unterstützt Standard-, tiefere, höhere, Drop-, Double-Drop-, offene Dur-Stimmungen und mehr.` },
      { title: `A4 einstellbar`, descHtml: `Unterstützung für eine anpassbare A4-Referenzfrequenz.` },
      { title: `AirPlay`, descHtml: `Sende deinen Klang per AirPlay an Apple TV oder andere AirPlay-fähige Lautsprecher.` },
      { title: `AudioBus`, descHtml: `AudioBus-Unterstützung – nutze die App als Eingangsquelle für andere Musik-Apps.` },
      { title: `Inter-App Audio`, descHtml: `Leite den Klang der App direkt an andere Musik-Apps wie GarageBand weiter.` },
    ],
    reviewsHeading: `Das sagen die Nutzer`,
    downloadAvailHtml: `Verfügbar für iPhone, iPad und iPod touch<br/>
    Erfordert iOS 6.1+<br/>
    `,
    getPresskit: `Presskit holen`,
    getPresskitTitle: `Presskit holen`,
    videoPopupTitle: `So funktioniert die Polyrhythmik`,
    meta: {
      wholetitle: `Guitar Master – Gitarren-Toolkit | EUMLab`,
      description: `Guitar Master vereint alle wichtigen Gitarren-Tools: präzises Stimmgerät, Metronom, Akkorddiagramme, Tonleitern, Akkordfolgen und mehr.`,
      keywords: `Guitar Master, Gitarren-Toolkit, Gitarren-Stimmgerät, Stimmgerät, Metronom, Tonleiter, Akkorde, Akkorddiagramm, Akkordfolge, Drum Loops, Schlagmuster, EUMLab, iPhone, iPad, iOS, Musik lernen, üben`,
    },
  },

  fr: {
    heroH2Html: `Tout ce dont un guitariste a besoin <br/> directement dans votre poche`,
    downloadTitle: `Télécharger Guitar Master`,
    downloadCta: `Télécharger Guitar Master sur l’App Store`,
    introSloganHtml: `Des outils inspirants pour les guitaristes en herbe`,
    introDescHtml: `S’entraîner, accorder, apprendre et plus encore – <br/>que vous répétiez, jouiez sur scène, composiez ou soyez en session, <br/>Guitar Master vous aide à tirer le meilleur de votre instrument.`,
    tuningSloganHtml: `<em>Accordage de niveau pro</em>`,
    tuningDescHtml: `Peaufinez votre accordage avec l’accordeur chromatique de Guitar Master et ses barres de couleur intuitives. Très précis – jusqu’à ±0,1 cent – l’accordeur inclut de vrais sons de cordes pour vous aider à accorder à l’oreille. Passez d’un bon accordage à un accordage parfait en quelques secondes.`,
    metronomeSloganHtml: `Le <em>métronome</em> extrêmement précis<br/> avec <em>motifs de grattage</em> et <em>boucles de batterie</em>`,
    metronomeDescHtml: `Le métronome utilise la technologie RTP (Real-Time Playback) d’EUMLab <br/>
pour garantir une précision de 20 microsecondes (±20 µs).<br/>
Il prend en charge des signatures rythmiques flexibles avec 14 sonorités différentes,<br/>
13 motifs de grattage intégrés et 116 boucles de batterie pour rendre la pratique facile.<br/>
        <br/>

    `,
    learnMore: `En savoir plus`,
    learnMoreTitle: `Voir comment fonctionne l’accordeur`,
    scaleSloganHtml: `<em>108</em> gammes musicales`,
    scaleDescHtml: `Les gammes sont l’âme de la musique.<br/>
            Guitar Master propose 108 gammes différentes venues du monde entier,
            du blues et du jazz aux gammes japonaises, orientales et bien d’autres.
            Utilisez-les pour apprendre et explorer de nouvelles sonorités et de nouveaux styles.`,
    chordsSlogan: `Tablatures de guitare interactives`,
    chordsDescHtml: `La liste de tablatures de Guitar Master contient des milliers d’accords, bien plus qu’il ne vous en faudra.<br/>
    Apprenez de nouveaux accords et recherchez-les par nom ou par note – <br/>apprenez-les tous en les voyant et en les écoutant en même temps.
`,
    chordsSupportedHtml: `Types d’accords pris en charge : Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Découvrez le <em>Cycle des quintes</em> avec le <em>Transposeur d’accords</em> –<br/>
    une meilleure façon de trouver et d’apprendre les accords.`,
    transposerDescHtml: `La plupart des chansons que nous entendons reposent sur des groupes d’accords qui évoluent de façon similaire.<br/>
Avec le Cycle des quintes, visualisez facilement les enchaînements d’accords courants sur un seul écran interactif.<br/>
Vous pouvez même l’utiliser pour transposer des accords dans une nouvelle tonalité.`,
    progressionsSloganHtml: `<em>Enchaînements d’accords</em>`,
    progressionsDescHtml: `Avez-vous entendu parler des accords « Magic Four » ?
            Ce sont G, D, Em et C, et beaucoup de chansons n’utilisent que cet enchaînement !
            Une fois maîtrisé, vous pouvez l’utiliser pour jouer des milliers de chansons.  <br/> <br/>
            Avec Guitar Master, écoutez et apprenez les accords « Magic Four », puis transposez-les dans d’autres tonalités.`,
    seeHowItWorks: `Voir comment ça marche`,
    progressionsLinkTitle: `Voir comment fonctionnent les enchaînements d’accords`,
    otherFeatures: `Autres fonctionnalités sympas`,
    features: [
      { title: `13 styles de décompte`, descHtml: `Choisissez les sons de battement qui vous conviennent, y compris une voix de comptage.` },
      { title: `Tap`, descHtml: `Calculez le BPM en tapant en temps réel.` },
      { title: `Mode gaucher`, descHtml: `Tous les diagrammes d’accords et les gammes s’affichent en mode gaucher.` },
      { title: `Capo`, descHtml: `L’application prend en charge les transpositions à l’aide d’un capodastre.` },
      { title: `79 accordages`, descHtml: `L’application prend en charge les accordages standard, plus bas, plus hauts, droppés, double-droppés, ouverts majeurs et plus encore.` },
      { title: `A4 réglable`, descHtml: `Prise en charge d’une fréquence de référence A4 personnalisable.` },
      { title: `AirPlay`, descHtml: `Utilisez AirPlay pour diffuser votre son vers Apple TV ou d’autres enceintes compatibles AirPlay.` },
      { title: `AudioBus`, descHtml: `Prise en charge d’AudioBus – utilisez l’application comme source d’entrée pour d’autres applis de musique.` },
      { title: `Inter-App Audio`, descHtml: `Routez le son de l’application directement vers d’autres applis de musique comme GarageBand.` },
    ],
    reviewsHeading: `Découvrez ce qu’en disent les utilisateurs`,
    downloadAvailHtml: `Disponible pour iPhone, iPad et iPod touch<br/>
    Nécessite iOS 6.1+<br/>
    `,
    getPresskit: `Obtenir le presskit`,
    getPresskitTitle: `Obtenir le presskit`,
    videoPopupTitle: `Comment fonctionne la polyrythmie`,
    meta: {
      wholetitle: `Guitar Master – la boîte à outils du guitariste | EUMLab`,
      description: `Guitar Master réunit tous les outils essentiels du guitariste : accordeur précis, métronome, diagrammes d’accords, gammes, enchaînements d’accords et plus.`,
      keywords: `Guitar Master, boîte à outils guitare, accordeur guitare, accordeur, métronome, gamme, accords, diagramme d’accords, enchaînement d’accords, boucles de batterie, motifs de grattage, EUMLab, iPhone, iPad, iOS, apprendre la musique`,
    },
  },

  es: {
    heroH2Html: `Todo lo que un guitarrista necesita <br/> directamente en tu bolsillo`,
    downloadTitle: `Descargar Guitar Master`,
    downloadCta: `Descargar Guitar Master en el App Store`,
    introSloganHtml: `Herramientas inspiradoras para guitarristas en ciernes`,
    introDescHtml: `Practicar, afinar, aprender y mucho más – <br/>ya sea ensayando, actuando, componiendo o en sesión, <br/>Guitar Master te ayuda a sacar el máximo partido a tu instrumento.`,
    tuningSloganHtml: `<em>Afinación de nivel profesional</em>`,
    tuningDescHtml: `Pon a punto tu afinación con el afinador cromático de Guitar Master y sus intuitivas barras de color. Muy preciso – hasta ±0,1 cents – el afinador incluye sonidos reales de cuerdas para ayudarte a afinar de oído. Pasa de una buena afinación a una perfecta en segundos.`,
    metronomeSloganHtml: `El <em>metrónomo</em> extremadamente preciso<br/> con <em>patrones de rasgueo</em> y <em>loops de batería</em>`,
    metronomeDescHtml: `El metrónomo usa la tecnología RTP (Real-Time Playback) de EUMLab <br/>
para garantizar una precisión de 20 microsegundos (±20 µs).<br/>
Admite compases flexibles con 14 tonos diferentes,<br/>
13 patrones de rasgueo integrados y 116 loops de batería para que practicar sea pan comido.<br/>
        <br/>

    `,
    learnMore: `Más información`,
    learnMoreTitle: `Mira cómo funciona el afinador`,
    scaleSloganHtml: `<em>108</em> escalas musicales`,
    scaleDescHtml: `Las escalas son el alma de la música.<br/>
            Guitar Master incluye 108 escalas diferentes de todo el mundo,
            desde blues y jazz hasta japonesas, orientales y muchas más.
            Úsalas para aprender y explorar nuevos sonidos y estilos.`,
    chordsSlogan: `Tablaturas de guitarra interactivas`,
    chordsDescHtml: `La lista de tablaturas de Guitar Master contiene miles de acordes, más de los que necesitarás.<br/>
    Aprende nuevos acordes y búscalos por nombre o por nota – <br/>apréndelos todos viéndolos y escuchándolos al mismo tiempo.
`,
    chordsSupportedHtml: `Tipos de acordes admitidos: Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Te presentamos el <em>Círculo de quintas</em> con el <em>Transpositor de acordes</em> –<br/>
    una mejor forma de encontrar y aprender acordes.`,
    transposerDescHtml: `La mayoría de las canciones que escuchamos se basan en grupos de acordes que cambian de formas parecidas.<br/>
Con el Círculo de quintas, visualiza fácilmente los cambios de acordes habituales en una sola pantalla interactiva.<br/>
Incluso puedes usarlo para transponer acordes a una nueva tonalidad.`,
    progressionsSloganHtml: `<em>Progresiones de acordes</em>`,
    progressionsDescHtml: `¿Has oído hablar de los acordes «Magic Four»?
            Son G, D, Em y C, ¡y muchas canciones usan solo esta progresión!
            Una vez la domines, podrás usarla para tocar miles de canciones.  <br/> <br/>
            Con Guitar Master puedes escuchar y aprender los acordes «Magic Four» y luego transponerlos a otras tonalidades.`,
    seeHowItWorks: `Mira cómo funciona`,
    progressionsLinkTitle: `Mira cómo funcionan las progresiones de acordes`,
    otherFeatures: `Otras funciones geniales`,
    features: [
      { title: `13 estilos de conteo`, descHtml: `Elige los sonidos de pulso que mejor te funcionen, incluida una voz de conteo.` },
      { title: `Tap`, descHtml: `Calcula los BPM tocando en tiempo real.` },
      { title: `Modo zurdo`, descHtml: `Todos los diagramas de acordes y escalas se pueden mostrar en modo zurdo.` },
      { title: `Cejilla`, descHtml: `La app admite transposiciones usando una cejilla.` },
      { title: `79 afinaciones`, descHtml: `La app admite afinaciones estándar, más graves, más agudas, drop, double-drop, abiertas mayores y más.` },
      { title: `A4 ajustable`, descHtml: `Compatibilidad con una frecuencia de referencia A4 personalizable.` },
      { title: `AirPlay`, descHtml: `Usa AirPlay para enviar tu sonido al Apple TV u otros altavoces compatibles con AirPlay.` },
      { title: `AudioBus`, descHtml: `Compatibilidad con AudioBus – usa la app como fuente de entrada para otras apps de música.` },
      { title: `Inter-App Audio`, descHtml: `Enruta el sonido de la app directamente a otras apps de música como GarageBand.` },
    ],
    reviewsHeading: `Mira lo que dicen los usuarios`,
    downloadAvailHtml: `Disponible para iPhone, iPad y iPod touch<br/>
    Requiere iOS 6.1+<br/>
    `,
    getPresskit: `Obtener presskit`,
    getPresskitTitle: `Obtener presskit`,
    videoPopupTitle: `Cómo funciona la polirritmia`,
    meta: {
      wholetitle: `Guitar Master – el kit de herramientas del guitarrista | EUMLab`,
      description: `Guitar Master reúne las herramientas esenciales para guitarra: afinador preciso, metrónomo, diagramas de acordes, escalas, progresiones de acordes y más.`,
      keywords: `Guitar Master, kit de guitarra, afinador de guitarra, afinador, metrónomo, escala, acordes, diagrama de acordes, progresión de acordes, loops de batería, patrones de rasgueo, EUMLab, iPhone, iPad, iOS, aprender música`,
    },
  },

  zh: {
    heroH2Html: `吉他手所需的一切 <br/> 尽在你的口袋里`,
    downloadTitle: `下载 Guitar Master`,
    downloadCta: `在 App Store 下载 Guitar Master`,
    introSloganHtml: `为志在精进的吉他手打造的灵感工具`,
    introDescHtml: `练习、调音、学习，还有更多 – <br/>无论是练习、演出、作曲还是排练，<br/>Guitar Master 都能帮你充分发挥乐器的潜能。`,
    tuningSloganHtml: `<em>专业级调音</em>`,
    tuningDescHtml: `用 Guitar Master 的半音调音器搭配直观的彩色音条调好你的吉他。精度极高——可达 ±0.1 音分——调音器还内置真实的弦音，帮助你凭耳朵调音。几秒钟之间，从不错调到完美。`,
    metronomeSloganHtml: `极致精准的<em>节拍器</em><br/> 内含<em>扫弦节奏型</em>与<em>鼓点循环</em>`,
    metronomeDescHtml: `节拍器采用 EUMLab 的 RTP（实时回放）技术，<br/>
确保精度达到 20 微秒（±20µs）。<br/>
支持灵活的拍号，提供 14 种不同音色、<br/>
13 种内置扫弦节奏型和 116 个鼓点循环，让练习轻松自如。<br/>
        <br/>

    `,
    learnMore: `了解更多`,
    learnMoreTitle: `了解调音器如何运作`,
    scaleSloganHtml: `<em>108</em> 种音阶`,
    scaleDescHtml: `音阶是音乐的灵魂。<br/>
            Guitar Master 收录了来自世界各地的 108 种音阶，
            从布鲁斯、爵士到日本、中东等等。
            用它们来学习并探索全新的音色与风格。`,
    chordsSlogan: `互动式吉他谱`,
    chordsDescHtml: `Guitar Master 的谱表收录了数千个和弦，远超你的所需。<br/>
    学习新和弦，并按名称或音符查找它们 – <br/>边看边听，把它们全部学会。
`,
    chordsSupportedHtml: `支持的和弦类型：Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `隆重推出<em>五度圈</em>与<em>和弦转调器</em> –<br/>
    一种更好的方式来查找和学习和弦。`,
    transposerDescHtml: `我们听到的大多数歌曲，都建立在以相似方式变化的和弦组上。<br/>
有了五度圈，你可以在一块互动屏幕上轻松看清常见的和弦走向。<br/>
你甚至可以用它把和弦转到新的调上。`,
    progressionsSloganHtml: `<em>和弦走向</em>`,
    progressionsDescHtml: `你听说过「Magic Four」和弦吗？
            它们是 G、D、Em 和 C，许多歌曲只用了这一组和弦走向！
            一旦掌握，你就能用它弹奏成千上万首歌曲。  <br/> <br/>
            你可以用 Guitar Master 聆听并学习「Magic Four」和弦，然后将它们转到其他调上。`,
    seeHowItWorks: `了解它如何运作`,
    progressionsLinkTitle: `了解和弦走向如何运作`,
    otherFeatures: `更多实用功能`,
    features: [
      { title: `13 种节拍报数风格`, descHtml: `选择适合你的节拍音色，包括报数人声。` },
      { title: `Tap`, descHtml: `实时点击即可计算 BPM。` },
      { title: `左手模式`, descHtml: `所有和弦图与音阶均支持以左手模式显示。` },
      { title: `变调夹`, descHtml: `App 支持使用变调夹进行转调。` },
      { title: `79 种调弦`, descHtml: `App 支持标准、降调、升调、drop、double-drop、大调开放等多种调弦。` },
      { title: `可调 A4`, descHtml: `支持自定义 A4 基准频率。` },
      { title: `AirPlay`, descHtml: `使用 AirPlay 将声音推送到 Apple TV 或其他支持 AirPlay 的音箱。` },
      { title: `AudioBus`, descHtml: `支持 AudioBus——将本 App 作为其他音乐 App 的输入源。` },
      { title: `Inter-App Audio`, descHtml: `将 App 的声音直接路由到 GarageBand 等其他音乐 App。` },
    ],
    reviewsHeading: `看看大家怎么说`,
    downloadAvailHtml: `适用于 iPhone、iPad 和 iPod touch<br/>
    需要 iOS 6.1+<br/>
    `,
    getPresskit: `获取媒体资料包`,
    getPresskitTitle: `获取媒体资料包`,
    videoPopupTitle: `复合节奏的运作方式`,
    meta: {
      wholetitle: `Guitar Master —— 吉他工具箱 | EUMLab`,
      description: `Guitar Master 集合了吉他必备工具，包括精准调音器、节拍器、和弦图、音阶、和弦走向等。`,
      keywords: `Guitar Master, 吉他工具箱, 吉他调音器, 调音器, 节拍器, 音阶, 和弦, 和弦图, 和弦走向, 鼓点循环, 扫弦节奏型, EUMLab, iPhone, iPad, iOS, 学音乐, 练习`,
    },
  },

  ja: {
    heroH2Html: `ギタリストに必要なすべてを <br/> ポケットの中に`,
    downloadTitle: `Guitar Master をダウンロード`,
    downloadCta: `App Store で Guitar Master をダウンロード`,
    introSloganHtml: `向上を目指すギタリストのためのインスピレーション・ツール`,
    introDescHtml: `練習、チューニング、学習、そしてもっと – <br/>練習でも、本番でも、作曲でも、セッションでも、<br/>Guitar Master があなたの楽器を最大限に活かします。`,
    tuningSloganHtml: `<em>プロ品質のチューニング</em>`,
    tuningDescHtml: `直感的なカラーバーを備えた Guitar Master のクロマチックチューナーで、チューニングを整えましょう。最大 ±0.1 セントの高精度。リアルな弦の音も収録し、耳でのチューニングをサポートします。数秒で、良いチューニングから完璧なチューニングへ。`,
    metronomeSloganHtml: `非常に正確な<em>メトロノーム</em><br/> <em>ストロークパターン</em>と<em>ドラムループ</em>付き`,
    metronomeDescHtml: `メトロノームは EUMLab の RTP（リアルタイム再生）技術を採用し、<br/>
20 マイクロ秒（±20µs）の精度を実現します。<br/>
14 種類の音色による柔軟な拍子に対応し、<br/>
13 種類の内蔵ストロークパターンと 116 のドラムループで、練習が驚くほど快適に。<br/>
        <br/>

    `,
    learnMore: `詳しく見る`,
    learnMoreTitle: `チューナーの使い方を見る`,
    scaleSloganHtml: `<em>108</em> のスケール`,
    scaleDescHtml: `スケールは音楽の魂です。<br/>
            Guitar Master には世界中から集めた 108 種類のスケールを収録。
            ブルースやジャズから、日本、中東などのスケールまで。
            新しい音色やスタイルを学び、探求するのに役立ちます。`,
    chordsSlogan: `インタラクティブなギタータブ`,
    chordsDescHtml: `Guitar Master のタブリストには、必要以上の数千ものコードが収録されています。<br/>
    新しいコードを学び、名前や音で検索 – <br/>見て聴いて、同時に身につけましょう。
`,
    chordsSupportedHtml: `対応コードタイプ：Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `<em>五度圏</em>と<em>コード・トランスポーザー</em>のご紹介 –<br/>
    コードを見つけて学ぶ、より良い方法。`,
    transposerDescHtml: `私たちが耳にする多くの曲は、似た動き方をするコードのまとまりをもとに書かれています。<br/>
五度圏を使えば、よくあるコードの動きを 1 つのインタラクティブな画面で簡単に把握できます。<br/>
コードを新しいキーに移調するのにも使えます。`,
    progressionsSloganHtml: `<em>コード進行</em>`,
    progressionsDescHtml: `「Magic Four」コードを知っていますか？
            それは G、D、Em、C で、多くの曲がこの 1 つの進行だけを使っています！
            一度マスターすれば、何千もの曲を弾けるようになります。  <br/> <br/>
            Guitar Master で「Magic Four」コードを聴いて学び、ほかのキーへ移調してみましょう。`,
    seeHowItWorks: `使い方を見る`,
    progressionsLinkTitle: `コード進行の仕組みを見る`,
    otherFeatures: `その他の便利な機能`,
    features: [
      { title: `13 種類のカウントスタイル`, descHtml: `カウントの声を含め、自分に合ったビート音を選べます。` },
      { title: `Tap`, descHtml: `リアルタイムでタップして BPM を計算します。` },
      { title: `左利きモード`, descHtml: `すべてのコードダイアグラムとスケールが左利きモードで表示できます。` },
      { title: `カポ`, descHtml: `カポを使った移調に対応しています。` },
      { title: `79 種類のチューニング`, descHtml: `標準、ローダウン、ハイアップ、ドロップ、ダブルドロップ、メジャーオープンなど、多彩なチューニングに対応します。` },
      { title: `A4 変更可能`, descHtml: `カスタマイズ可能な A4 基準周波数に対応。` },
      { title: `AirPlay`, descHtml: `AirPlay を使って、Apple TV やその他の AirPlay 対応スピーカーへ音を飛ばせます。` },
      { title: `AudioBus`, descHtml: `AudioBus に対応 – 本アプリを他の音楽アプリの入力ソースとして使えます。` },
      { title: `Inter-App Audio`, descHtml: `アプリの音を GarageBand などの他の音楽アプリへ直接ルーティングできます。` },
    ],
    reviewsHeading: `ユーザーの声をチェック`,
    downloadAvailHtml: `iPhone、iPad、iPod touch に対応<br/>
    iOS 6.1 以降が必要<br/>
    `,
    getPresskit: `プレスキットを入手`,
    getPresskitTitle: `プレスキットを入手`,
    videoPopupTitle: `ポリリズムの仕組み`,
    meta: {
      wholetitle: `Guitar Master —— ギター・ツールキット | EUMLab`,
      description: `Guitar Master はギターに欠かせないツールを集めたアプリ。高精度チューナー、メトロノーム、コードダイアグラム、スケール、コード進行などを搭載。`,
      keywords: `Guitar Master, ギターツールキット, ギターチューナー, チューナー, メトロノーム, スケール, コード, コードダイアグラム, コード進行, ドラムループ, ストロークパターン, EUMLab, iPhone, iPad, iOS, 音楽を学ぶ, 練習`,
    },
  },
};
