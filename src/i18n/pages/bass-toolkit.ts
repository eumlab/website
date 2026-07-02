// Self-contained translation module for the Bass Toolkit page
// (route /bass-toolkit/ and /<lang>/bass-toolkit/).
// The `en` entry reproduces the legacy copy verbatim so the English page renders
// byte-identical (it is in the verify reference set). App/brand names (Bass Toolkit,
// EUMLab, AirPlay, AudioBus, App Store…) are never translated.
export interface AppStrings {
  heroName: string;
  heroTaglineHtml: string;
  downloadAppStoreTitle: string;
  downloadAppStore: string;

  introSloganHtml: string;
  introDescHtml: string;

  tuningSloganHtml: string;
  tuningDescHtml: string;

  metronomeSloganHtml: string;
  metronomeDescHtml: string;
  metronomeLinkTitle: string;
  metronomeLink: string;

  scalesSloganHtml: string;
  scalesDescHtml: string;

  arpeggioSlogan: string;
  arpeggioDescHtml: string;
  arpeggioChordTypes: string;

  transposerSloganHtml: string;
  transposerDescHtml: string;

  progressionSloganHtml: string;
  progressionDescHtml: string;
  progressionLinkTitle: string;
  progressionLink: string;

  featuresHeading: string;
  features: { title: string; descHtml: string }[];

  downloadName: string;
  downloadAvailHtml: string;
  getPresskit: string;
  getPresskitTitle: string;

  videoPopupTitle: string;

  meta: { wholetitle: string; description: string; keywords: string };
}

export const BASS_TOOLKIT: Record<string, AppStrings> = {
  en: {
    heroName: 'Bass Toolkit',
    heroTaglineHtml: 'Everything a bass player needs <br/> right in your pocket.',
    downloadAppStoreTitle: 'Download Bass Toolkit',
    downloadAppStore: 'Download Bass Toolkit on the App Store',

    introSloganHtml: '<em>Bass Toolkit</em> <br/>Inspiring tools for aspiring bass players.',
    introDescHtml: 'Train, tune, learn, and more – <br/>whether practicing, performing, composing or in session, <br/>Bass Toolkit helps you get the most out of your instrument.',

    tuningSloganHtml: '<em>Pro-Level Tuning</em>',
    tuningDescHtml: `Fix up your tuning using Bass Toolkit's
            chromatic tuner with intuitive color bars.
            Highly accurate – up to ±0.1 cent precision –
            the tuner includes real string sounds to help you tune by ear.
            Go from great to perfect tuning in seconds.<br/> `,

    metronomeSloganHtml: 'Extremely precise <em>metronome</em> and <em>drum loops</em>',
    metronomeDescHtml: `The metronome uses EUMLab's RTP (Real-Time Playback) technology <br/>
to ensure accuracy to 20 microseconds (±20µs).<br/>
It supports flexible time signatures with 14 different tones,<br/>
complete with 116 drum loops to make your practice easier.<br/>
        <br/>

    `,
    metronomeLinkTitle: 'See how tuner works',
    metronomeLink: 'Lean More',

    scalesSloganHtml: '<em>108</em> Musical Scales',
    scalesDescHtml: `Scales are the soul music.<br/>
            Bass Toolkit features 108 different ones from all over the world,
            from Blues and Jazz, to Japanese, Middle Eastern and more.
            Use them to learn and explore new sounds and styles.`,

    arpeggioSlogan: 'Interactive Arpeggio Fingerings',
    arpeggioDescHtml: `Bass Toolkits's tab list contains 1000s of chord and arpeggio fingerings – <br/>
    probably more than you'll ever need.<br/>
    Learn new chords and look them up by name or by note – <br/>
    Learn them all by seeing and hearing them at the same time. <br/><br/>
`,
    arpeggioChordTypes: 'Supported chord types: Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11',

    transposerSloganHtml: 'Introducing <em>5th Circle</em>  with <em>Chord Transposer</em> –<br/>A better way to find and learn chords.',
    transposerDescHtml: `Most songs we hear are written based on groups of chords that change in similar ways. <br/>
With 5th Circle, easily visualize common chord changes in one interactive screen. <br/>
You can even use it to help you transpose chords into a new key.`,

    progressionSloganHtml: '<em>Chord Progressions</em>',
    progressionDescHtml: `Have you heard of the "Magic Four" chords?
            It's G, D, Em, and C, and many songs use just this one progression!
            Once you've mastered it, you can use it to play thousands of songs.  <br/> <br/>
            You can use Bass Toolkit to hear and learn the "Magic Four" chords and then transpose them into other keys.`,
    progressionLinkTitle: 'See how chord progression works',
    progressionLink: 'See how it works',

    featuresHeading: 'Other Cool Features',
    features: [
      { title: '13 time-keeping styles', descHtml: 'Choose beat sounds that work for you, including a counting voice.' },
      { title: 'Tap', descHtml: 'Calculate BPM by tapping in real time.' },
      { title: 'Left-Handed mode', descHtml: 'All chord diagrams and scales support display in left-handed mode.' },
      { title: 'Capo', descHtml: 'The app support transpositions using a capo.' },
      { title: '9 tunings', descHtml: 'Including standard, drop D, 5-string bass, 6 string bass and more.' },
      { title: 'Changeable A4', descHtml: 'Support for a customizable A4 reference frequency.' },
      { title: 'AirPlay', descHtml: 'Use AirPlay to beam your sound to Apple TV or other AirPlay-enabled speakers.' },
      { title: 'AudioBus', descHtml: 'AudioBus support – use the app as an input source for other music apps.' },
      { title: 'Inter-App Audio', descHtml: "Route the app's sound directly to other music apps like GarageBand." },
    ],

    downloadName: 'Bass Toolkit',
    downloadAvailHtml: 'Available for iPhone, iPad and iPod Touch<br/>\n    Requires iOS 6.1+<br/>\n    ',
    getPresskit: 'Get Presskit',
    getPresskitTitle: 'Get Presskit',

    videoPopupTitle: 'How the Polyrhythm Works',

    meta: {
      wholetitle: 'Bass Toolkit - EUMLab ',
      description: 'Bass Toolkit app is a collection of essential bass tools, features including accurate tuner, metronome, chord apreggio, scale, chord progressions and more.',
      keywords: 'bass toolkit, guitar toolkit, agile, tuner, bass tuner, metronome ,scale, chords, chord, chord diagram, chord progression, drum loops, jam, pentatonic, strum, strums, strumming pattern, tune bass, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student',
    },
  },

  de: {
    heroName: 'Bass Toolkit',
    heroTaglineHtml: 'Alles, was ein Bassist braucht <br/> direkt in deiner Tasche.',
    downloadAppStoreTitle: 'Bass Toolkit herunterladen',
    downloadAppStore: 'Bass Toolkit im App Store laden',

    introSloganHtml: '<em>Bass Toolkit</em> <br/>Inspirierende Werkzeuge für angehende Bassisten.',
    introDescHtml: 'Üben, stimmen, lernen und mehr – <br/>ob beim Proben, Auftreten, Komponieren oder in der Session, <br/>Bass Toolkit hilft dir, das Beste aus deinem Instrument herauszuholen.',

    tuningSloganHtml: '<em>Stimmen auf Profi-Niveau</em>',
    tuningDescHtml: `Stimme dein Instrument mit dem chromatischen Stimmgerät von Bass Toolkit
            und seinen intuitiven Farbbalken.
            Hochpräzise – bis zu ±0,1 Cent genau –
            mit echten Saitenklängen, die dir das Stimmen nach Gehör erleichtern.
            In Sekunden von gut zu perfekt gestimmt.<br/> `,

    metronomeSloganHtml: 'Extrem präzises <em>Metronom</em> und <em>Drum Loops</em>',
    metronomeDescHtml: `Das Metronom nutzt die RTP-Technologie (Real-Time Playback) von EUMLab, <br/>
um eine Genauigkeit von 20 Mikrosekunden (±20µs) zu gewährleisten.<br/>
Es unterstützt flexible Taktarten mit 14 verschiedenen Klängen<br/>
und 116 Drum Loops, die dein Üben erleichtern.<br/>
        <br/>

    `,
    metronomeLinkTitle: 'So funktioniert das Metronom',
    metronomeLink: 'Mehr erfahren',

    scalesSloganHtml: '<em>108</em> Tonleitern',
    scalesDescHtml: `Tonleitern sind die Seele der Musik.<br/>
            Bass Toolkit bietet 108 verschiedene aus aller Welt,
            von Blues und Jazz über japanische bis hin zu nahöstlichen und mehr.
            Nutze sie, um neue Klänge und Stile zu lernen und zu entdecken.`,

    arpeggioSlogan: 'Interaktive Arpeggio-Griffe',
    arpeggioDescHtml: `Die Griffliste von Bass Toolkit enthält Tausende Akkord- und Arpeggio-Griffe – <br/>
    wahrscheinlich mehr, als du je brauchen wirst.<br/>
    Lerne neue Akkorde und schlage sie nach Namen oder Note nach – <br/>
    Lerne sie alle, indem du sie zugleich siehst und hörst. <br/><br/>
`,
    arpeggioChordTypes: 'Unterstützte Akkordtypen: Dur, Moll, 7, Moll 7, Maj7, 5, 6, Moll 6, 9, <br/>Moll 9, 6/9, 7♭5, 7♯5, Moll 7♭5, 7♭9, 7♯9, Dim 7, Aug, 7 Sus, Sus 2, Sus 4, Add 9, Moll add 9, 11, Moll 11',

    transposerSloganHtml: 'Der <em>Quintenzirkel</em> mit <em>Akkord-Transposer</em> –<br/>Akkorde besser finden und lernen.',
    transposerDescHtml: `Die meisten Songs, die wir hören, beruhen auf Akkordgruppen, die sich auf ähnliche Weise verändern. <br/>
Mit dem Quintenzirkel visualisierst du gängige Akkordwechsel auf einem interaktiven Bildschirm. <br/>
Du kannst ihn sogar nutzen, um Akkorde in eine neue Tonart zu transponieren.`,

    progressionSloganHtml: '<em>Akkordfolgen</em>',
    progressionDescHtml: `Hast du schon von den „Magic Four"-Akkorden gehört?
            Es sind G, D, Em und C – und viele Songs nutzen nur diese eine Akkordfolge!
            Wenn du sie beherrschst, kannst du damit Tausende von Songs spielen.  <br/> <br/>
            Mit Bass Toolkit hörst und lernst du die „Magic Four"-Akkorde und transponierst sie in andere Tonarten.`,
    progressionLinkTitle: 'So funktionieren Akkordfolgen',
    progressionLink: 'So funktioniert es',

    featuresHeading: 'Weitere coole Funktionen',
    features: [
      { title: '13 Taktgeber-Stile', descHtml: 'Wähle Beat-Sounds, die zu dir passen, inklusive Zählstimme.' },
      { title: 'Tap', descHtml: 'Berechne das Tempo (BPM) durch Antippen in Echtzeit.' },
      { title: 'Linkshänder-Modus', descHtml: 'Alle Akkorddiagramme und Tonleitern lassen sich im Linkshänder-Modus anzeigen.' },
      { title: 'Kapodaster', descHtml: 'Die App unterstützt Transpositionen mit einem Kapodaster.' },
      { title: '9 Stimmungen', descHtml: 'Inklusive Standard, Drop D, 5-saitiger Bass, 6-saitiger Bass und mehr.' },
      { title: 'Variabler Kammerton A4', descHtml: 'Unterstützung für eine anpassbare A4-Referenzfrequenz.' },
      { title: 'AirPlay', descHtml: 'Per AirPlay sendest du deinen Klang an Apple TV oder andere AirPlay-fähige Lautsprecher.' },
      { title: 'AudioBus', descHtml: 'AudioBus-Unterstützung – nutze die App als Eingangsquelle für andere Musik-Apps.' },
      { title: 'Inter-App Audio', descHtml: 'Leite den Klang der App direkt an andere Musik-Apps wie GarageBand weiter.' },
    ],

    downloadName: 'Bass Toolkit',
    downloadAvailHtml: 'Verfügbar für iPhone, iPad und iPod Touch<br/>\n    Erfordert iOS 6.1+<br/>\n    ',
    getPresskit: 'Presskit holen',
    getPresskitTitle: 'Presskit holen',

    videoPopupTitle: 'So funktioniert die Polyrhythmik',

    meta: {
      wholetitle: 'Bass Toolkit – Bass-Werkzeuge für iPhone & iPad | EUMLab',
      description: 'Bass Toolkit ist eine Sammlung unverzichtbarer Bass-Werkzeuge: präzises Stimmgerät, Metronom, Akkord-Arpeggien, Tonleitern, Akkordfolgen und mehr.',
      keywords: 'Bass Toolkit, Bass-Werkzeuge, Stimmgerät, Bass-Tuner, Metronom, Tonleiter, Akkord, Akkorddiagramm, Akkordfolge, Drum Loops, Arpeggio, Bass stimmen, EUMLab, Polybeat, iPhone, iPad, iOS, Musik, Musiker, lernen, üben',
    },
  },

  fr: {
    heroName: 'Bass Toolkit',
    heroTaglineHtml: 'Tout ce dont un bassiste a besoin <br/> dans votre poche.',
    downloadAppStoreTitle: 'Télécharger Bass Toolkit',
    downloadAppStore: 'Télécharger Bass Toolkit sur l’App Store',

    introSloganHtml: '<em>Bass Toolkit</em> <br/>Des outils inspirants pour les bassistes en herbe.',
    introDescHtml: 'Travailler, accorder, apprendre et plus encore – <br/>que ce soit en répétition, sur scène, en composition ou en session, <br/>Bass Toolkit vous aide à tirer le meilleur de votre instrument.',

    tuningSloganHtml: '<em>Un accord de niveau pro</em>',
    tuningDescHtml: `Réglez votre accord avec l’accordeur chromatique de Bass Toolkit
            et ses barres de couleur intuitives.
            Très précis – jusqu’à ±0,1 cent –
            l’accordeur intègre de vrais sons de cordes pour vous aider à accorder à l’oreille.
            Passez d’un bon à un parfait accord en quelques secondes.<br/> `,

    metronomeSloganHtml: 'Un <em>métronome</em> et des <em>boucles de batterie</em> extrêmement précis',
    metronomeDescHtml: `Le métronome utilise la technologie RTP (Real-Time Playback) d’EUMLab <br/>
pour garantir une précision de 20 microsecondes (±20µs).<br/>
Il prend en charge des signatures rythmiques flexibles avec 14 sonorités différentes,<br/>
ainsi que 116 boucles de batterie pour faciliter votre pratique.<br/>
        <br/>

    `,
    metronomeLinkTitle: 'Voir comment fonctionne le métronome',
    metronomeLink: 'En savoir plus',

    scalesSloganHtml: '<em>108</em> gammes musicales',
    scalesDescHtml: `Les gammes sont l’âme de la musique.<br/>
            Bass Toolkit en propose 108 différentes venues du monde entier,
            du blues et du jazz aux gammes japonaises, moyen-orientales et plus encore.
            Utilisez-les pour apprendre et explorer de nouveaux sons et styles.`,

    arpeggioSlogan: 'Doigtés d’arpèges interactifs',
    arpeggioDescHtml: `La liste de tablatures de Bass Toolkit contient des milliers de doigtés d’accords et d’arpèges – <br/>
    sans doute plus que vous n’en aurez jamais besoin.<br/>
    Apprenez de nouveaux accords et recherchez-les par nom ou par note – <br/>
    Apprenez-les tous en les voyant et en les entendant en même temps. <br/><br/>
`,
    arpeggioChordTypes: 'Types d’accords pris en charge : Majeur, Mineur, 7, Mineur 7, Majeur 7, 5, 6, Mineur 6, 9, <br/>Mineur 9, 6/9, 7♭5, 7♯5, Mineur 7♭5, 7♭9, 7♯9, Dim 7, Aug, 7 Sus, Sus 2, Sus 4, Add 9, Mineur add 9, 11, Mineur 11',

    transposerSloganHtml: 'Découvrez le <em>cycle des quintes</em> avec le <em>transposeur d’accords</em> –<br/>Une meilleure façon de trouver et d’apprendre les accords.',
    transposerDescHtml: `La plupart des chansons que nous entendons reposent sur des groupes d’accords qui évoluent de façon similaire. <br/>
Avec le cycle des quintes, visualisez facilement les enchaînements d’accords courants sur un seul écran interactif. <br/>
Vous pouvez même l’utiliser pour transposer des accords dans une nouvelle tonalité.`,

    progressionSloganHtml: '<em>Progressions d’accords</em>',
    progressionDescHtml: `Avez-vous entendu parler des accords « Magic Four » ?
            Ce sont Sol, Ré, Mim et Do, et de nombreuses chansons n’utilisent que cette progression !
            Une fois maîtrisée, vous pourrez jouer des milliers de morceaux.  <br/> <br/>
            Avec Bass Toolkit, écoutez et apprenez les accords « Magic Four », puis transposez-les dans d’autres tonalités.`,
    progressionLinkTitle: 'Voir comment fonctionnent les progressions d’accords',
    progressionLink: 'Voir comment ça marche',

    featuresHeading: 'D’autres fonctions sympas',
    features: [
      { title: '13 styles de battement', descHtml: 'Choisissez les sons de battement qui vous conviennent, dont une voix de comptage.' },
      { title: 'Tap', descHtml: 'Calculez le tempo (BPM) en tapant en temps réel.' },
      { title: 'Mode gaucher', descHtml: 'Tous les diagrammes d’accords et les gammes s’affichent en mode gaucher.' },
      { title: 'Capodastre', descHtml: 'L’app prend en charge les transpositions avec un capodastre.' },
      { title: '9 accordages', descHtml: 'Dont standard, drop D, basse 5 cordes, basse 6 cordes et plus.' },
      { title: 'La4 réglable', descHtml: 'Prise en charge d’une fréquence de référence La4 personnalisable.' },
      { title: 'AirPlay', descHtml: 'Utilisez AirPlay pour diffuser votre son vers une Apple TV ou d’autres enceintes compatibles AirPlay.' },
      { title: 'AudioBus', descHtml: 'Compatible AudioBus – utilisez l’app comme source d’entrée pour d’autres apps musicales.' },
      { title: 'Inter-App Audio', descHtml: 'Acheminez le son de l’app directement vers d’autres apps musicales comme GarageBand.' },
    ],

    downloadName: 'Bass Toolkit',
    downloadAvailHtml: 'Disponible pour iPhone, iPad et iPod Touch<br/>\n    Nécessite iOS 6.1+<br/>\n    ',
    getPresskit: 'Obtenir le presskit',
    getPresskitTitle: 'Obtenir le presskit',

    videoPopupTitle: 'Comment fonctionne la polyrythmie',

    meta: {
      wholetitle: 'Bass Toolkit – outils pour bassistes iPhone & iPad | EUMLab',
      description: 'Bass Toolkit réunit les outils essentiels du bassiste : accordeur précis, métronome, arpèges d’accords, gammes, progressions d’accords et plus encore.',
      keywords: 'Bass Toolkit, outils basse, accordeur, accordeur de basse, métronome, gamme, accord, diagramme d’accords, progression d’accords, drum loops, arpège, accorder une basse, EUMLab, Polybeat, iPhone, iPad, iOS, musique, musicien, apprendre, pratiquer',
    },
  },

  es: {
    heroName: 'Bass Toolkit',
    heroTaglineHtml: 'Todo lo que un bajista necesita <br/> en tu bolsillo.',
    downloadAppStoreTitle: 'Descargar Bass Toolkit',
    downloadAppStore: 'Descargar Bass Toolkit en el App Store',

    introSloganHtml: '<em>Bass Toolkit</em> <br/>Herramientas inspiradoras para futuros bajistas.',
    introDescHtml: 'Practica, afina, aprende y mucho más – <br/>ya sea ensayando, tocando, componiendo o en sesión, <br/>Bass Toolkit te ayuda a sacar el máximo partido a tu instrumento.',

    tuningSloganHtml: '<em>Afinación de nivel profesional</em>',
    tuningDescHtml: `Ajusta tu afinación con el afinador cromático de Bass Toolkit
            y sus intuitivas barras de color.
            Muy preciso – hasta ±0,1 cents –
            el afinador incluye sonidos reales de cuerda para ayudarte a afinar de oído.
            Pasa de una buena a una afinación perfecta en segundos.<br/> `,

    metronomeSloganHtml: '<em>Metrónomo</em> y <em>loops de batería</em> extremadamente precisos',
    metronomeDescHtml: `El metrónomo usa la tecnología RTP (Real-Time Playback) de EUMLab <br/>
para garantizar una precisión de 20 microsegundos (±20µs).<br/>
Admite compases flexibles con 14 tonos diferentes,<br/>
junto con 116 loops de batería para facilitar tu práctica.<br/>
        <br/>

    `,
    metronomeLinkTitle: 'Mira cómo funciona el metrónomo',
    metronomeLink: 'Más información',

    scalesSloganHtml: '<em>108</em> escalas musicales',
    scalesDescHtml: `Las escalas son el alma de la música.<br/>
            Bass Toolkit incluye 108 diferentes de todo el mundo,
            desde blues y jazz hasta japonesas, de Oriente Medio y más.
            Úsalas para aprender y explorar nuevos sonidos y estilos.`,

    arpeggioSlogan: 'Digitaciones de arpegios interactivas',
    arpeggioDescHtml: `La lista de tablaturas de Bass Toolkit contiene miles de digitaciones de acordes y arpegios – <br/>
    probablemente más de las que necesitarás.<br/>
    Aprende nuevos acordes y búscalos por nombre o por nota – <br/>
    Apréndelos todos viéndolos y oyéndolos al mismo tiempo. <br/><br/>
`,
    arpeggioChordTypes: 'Tipos de acordes admitidos: Mayor, Menor, 7, Menor 7, Mayor 7, 5, 6, Menor 6, 9, <br/>Menor 9, 6/9, 7♭5, 7♯5, Menor 7♭5, 7♭9, 7♯9, Dim 7, Aum, 7 Sus, Sus 2, Sus 4, Add 9, Menor add 9, 11, Menor 11',

    transposerSloganHtml: 'Presentamos el <em>círculo de quintas</em> con <em>transpositor de acordes</em> –<br/>Una mejor forma de encontrar y aprender acordes.',
    transposerDescHtml: `La mayoría de las canciones que oímos se basan en grupos de acordes que cambian de forma similar. <br/>
Con el círculo de quintas, visualiza fácilmente los cambios de acordes habituales en una sola pantalla interactiva. <br/>
Incluso puedes usarlo para transponer acordes a una nueva tonalidad.`,

    progressionSloganHtml: '<em>Progresiones de acordes</em>',
    progressionDescHtml: `¿Has oído hablar de los acordes "Magic Four"?
            Son Sol, Re, Mim y Do, ¡y muchas canciones usan solo esta progresión!
            Una vez que la domines, podrás tocar miles de canciones.  <br/> <br/>
            Con Bass Toolkit puedes oír y aprender los acordes "Magic Four" y luego transponerlos a otras tonalidades.`,
    progressionLinkTitle: 'Mira cómo funcionan las progresiones de acordes',
    progressionLink: 'Mira cómo funciona',

    featuresHeading: 'Otras funciones geniales',
    features: [
      { title: '13 estilos de pulso', descHtml: 'Elige los sonidos de pulso que prefieras, incluida una voz que cuenta.' },
      { title: 'Tap', descHtml: 'Calcula los BPM tocando en tiempo real.' },
      { title: 'Modo zurdo', descHtml: 'Todos los diagramas de acordes y escalas se pueden mostrar en modo zurdo.' },
      { title: 'Cejilla', descHtml: 'La app admite transposiciones usando una cejilla.' },
      { title: '9 afinaciones', descHtml: 'Incluyendo estándar, drop D, bajo de 5 cuerdas, bajo de 6 cuerdas y más.' },
      { title: 'La4 ajustable', descHtml: 'Compatible con una frecuencia de referencia La4 personalizable.' },
      { title: 'AirPlay', descHtml: 'Usa AirPlay para enviar tu sonido a Apple TV u otros altavoces compatibles con AirPlay.' },
      { title: 'AudioBus', descHtml: 'Compatible con AudioBus – usa la app como fuente de entrada para otras apps musicales.' },
      { title: 'Inter-App Audio', descHtml: 'Envía el sonido de la app directamente a otras apps musicales como GarageBand.' },
    ],

    downloadName: 'Bass Toolkit',
    downloadAvailHtml: 'Disponible para iPhone, iPad y iPod Touch<br/>\n    Requiere iOS 6.1+<br/>\n    ',
    getPresskit: 'Obtener presskit',
    getPresskitTitle: 'Obtener presskit',

    videoPopupTitle: 'Cómo funciona la polirritmia',

    meta: {
      wholetitle: 'Bass Toolkit – herramientas de bajo para iPhone y iPad | EUMLab',
      description: 'Bass Toolkit reúne las herramientas esenciales para el bajo: afinador preciso, metrónomo, arpegios de acordes, escalas, progresiones de acordes y mucho más.',
      keywords: 'Bass Toolkit, herramientas de bajo, afinador, afinador de bajo, metrónomo, escala, acorde, diagrama de acordes, progresión de acordes, drum loops, arpegio, afinar bajo, EUMLab, Polybeat, iPhone, iPad, iOS, música, músico, aprender, practicar',
    },
  },

  zh: {
    heroName: 'Bass Toolkit',
    heroTaglineHtml: '贝斯手所需的一切 <br/> 尽在你的口袋里。',
    downloadAppStoreTitle: '下载 Bass Toolkit',
    downloadAppStore: '在 App Store 下载 Bass Toolkit',

    introSloganHtml: '<em>Bass Toolkit</em> <br/>为有志贝斯手打造的灵感工具。',
    introDescHtml: '练习、调音、学习等等 – <br/>无论是练习、演出、作曲还是排练，<br/>Bass Toolkit 都能帮你充分发挥乐器的潜力。',

    tuningSloganHtml: '<em>专业级调音</em>',
    tuningDescHtml: `使用 Bass Toolkit 的半音调音器和直观的彩色刻度条来精修你的音准。
            精度极高 – 可达 ±0.1 音分 –
            调音器内置真实的弦音，帮助你用耳朵调音。
            几秒钟即可从不错调到完美。<br/> `,

    metronomeSloganHtml: '极其精准的<em>节拍器</em>与<em>鼓点循环</em>',
    metronomeDescHtml: `节拍器采用 EUMLab 的 RTP（实时播放）技术，<br/>
确保精度达到 20 微秒（±20µs）。<br/>
支持灵活的拍号，提供 14 种不同音色，<br/>
并配有 116 个鼓点循环，让你的练习更轻松。<br/>
        <br/>

    `,
    metronomeLinkTitle: '了解节拍器的工作方式',
    metronomeLink: '了解更多',

    scalesSloganHtml: '<em>108</em> 种音阶',
    scalesDescHtml: `音阶是音乐的灵魂。<br/>
            Bass Toolkit 收录了来自世界各地的 108 种不同音阶，
            从布鲁斯、爵士到日本、中东等等。
            用它们来学习并探索全新的声音与风格。`,

    arpeggioSlogan: '交互式琶音指法',
    arpeggioDescHtml: `Bass Toolkit 的指法列表包含数千个和弦与琶音指法 – <br/>
    多到你可能一辈子都用不完。<br/>
    学习新和弦，并按名称或音符查找 – <br/>
    边看边听，把它们全部学会。 <br/><br/>
`,
    arpeggioChordTypes: '支持的和弦类型：大三、小三、7、小七、大七、5、6、小六、9、<br/>小九、6/9、7♭5、7♯5、小七♭5、7♭9、7♯9、减七、增、7挂留、挂二、挂四、加九、小三加九、11、小十一',

    transposerSloganHtml: '隆重推出<em>五度圈</em>与<em>和弦移调器</em> –<br/>一种更好地查找与学习和弦的方式。',
    transposerDescHtml: `我们听到的大多数歌曲都建立在以相似方式变化的和弦组之上。<br/>
借助五度圈，在一个交互界面上轻松呈现常见的和弦变化。<br/>
你甚至可以用它把和弦移调到新的调上。`,

    progressionSloganHtml: '<em>和弦进行</em>',
    progressionDescHtml: `你听说过“神奇四和弦”吗？
            它们是 G、D、Em 和 C，许多歌曲只用这一组进行！
            一旦掌握，你就能用它演奏成千上万首歌曲。 <br/> <br/>
            你可以用 Bass Toolkit 聆听并学习“神奇四和弦”，再把它们移调到其他调上。`,
    progressionLinkTitle: '了解和弦进行的工作方式',
    progressionLink: '了解工作方式',

    featuresHeading: '更多实用功能',
    features: [
      { title: '13 种节拍风格', descHtml: '选择适合你的节拍音色，包括人声报数。' },
      { title: 'Tap', descHtml: '通过实时点击计算 BPM。' },
      { title: '左手模式', descHtml: '所有和弦图与音阶都支持以左手模式显示。' },
      { title: '变调夹', descHtml: 'App 支持使用变调夹进行移调。' },
      { title: '9 种调弦', descHtml: '包括标准、Drop D、五弦贝斯、六弦贝斯等等。' },
      { title: '可调 A4', descHtml: '支持自定义 A4 基准频率。' },
      { title: 'AirPlay', descHtml: '通过 AirPlay 将声音传送到 Apple TV 或其他支持 AirPlay 的音箱。' },
      { title: 'AudioBus', descHtml: '支持 AudioBus – 把本 App 作为其他音乐 App 的输入源。' },
      { title: 'Inter-App Audio', descHtml: '将本 App 的声音直接路由到 GarageBand 等其他音乐 App。' },
    ],

    downloadName: 'Bass Toolkit',
    downloadAvailHtml: '适用于 iPhone、iPad 和 iPod Touch<br/>\n    需要 iOS 6.1+<br/>\n    ',
    getPresskit: '获取媒体资料包',
    getPresskitTitle: '获取媒体资料包',

    videoPopupTitle: '复合节奏的工作方式',

    meta: {
      wholetitle: 'Bass Toolkit —— iPhone 与 iPad 贝斯工具 | EUMLab',
      description: 'Bass Toolkit 汇集贝斯必备工具，包括精准调音器、节拍器、和弦琶音、音阶、和弦进行等等。',
      keywords: 'Bass Toolkit, 贝斯工具, 调音器, 贝斯调音器, 节拍器, 音阶, 和弦, 和弦图, 和弦进行, 鼓点循环, 琶音, 贝斯调音, EUMLab, Polybeat, iPhone, iPad, iOS, 音乐, 音乐人, 学习, 练习',
    },
  },

  ja: {
    heroName: 'Bass Toolkit',
    heroTaglineHtml: 'ベーシストに必要なすべてを <br/> ポケットの中に。',
    downloadAppStoreTitle: 'Bass Toolkit をダウンロード',
    downloadAppStore: 'App Store で Bass Toolkit をダウンロード',

    introSloganHtml: '<em>Bass Toolkit</em> <br/>これからのベーシストを刺激するツール。',
    introDescHtml: '練習、チューニング、学習など – <br/>練習でも、演奏でも、作曲でも、セッションでも、<br/>Bass Toolkit があなたの楽器を最大限に活かします。',

    tuningSloganHtml: '<em>プロレベルのチューニング</em>',
    tuningDescHtml: `Bass Toolkit の半音階チューナーと直感的なカラーバーでチューニングを仕上げましょう。
            精度はきわめて高く ±0.1 セントまで対応。
            リアルな弦の音を収録しているので、耳でのチューニングもサポートします。
            数秒で「良い」から「完璧」なチューニングへ。<br/> `,

    metronomeSloganHtml: '極めて正確な<em>メトロノーム</em>と<em>ドラムループ</em>',
    metronomeDescHtml: `メトロノームは EUMLab の RTP（リアルタイム再生）技術を採用し、<br/>
20 マイクロ秒（±20µs）の精度を実現します。<br/>
14 種類の音色で柔軟な拍子に対応し、<br/>
116 種のドラムループで練習をより快適にします。<br/>
        <br/>

    `,
    metronomeLinkTitle: 'メトロノームの仕組みを見る',
    metronomeLink: 'もっと見る',

    scalesSloganHtml: '<em>108</em> 種類の音階',
    scalesDescHtml: `音階は音楽の魂です。<br/>
            Bass Toolkit には世界中の 108 種類の音階を収録。
            ブルースやジャズから、日本、中東などまで。
            新しい響きやスタイルを学び、探求するのに役立ちます。`,

    arpeggioSlogan: 'インタラクティブなアルペジオ運指',
    arpeggioDescHtml: `Bass Toolkit のタブ一覧には、数千ものコードとアルペジオの運指が収録されています – <br/>
    おそらく一生かかっても使い切れないほどです。<br/>
    新しいコードを学び、名前や音名で調べられます – <br/>
    見ながら聴きながら、すべてを覚えましょう。 <br/><br/>
`,
    arpeggioChordTypes: '対応コードタイプ：メジャー、マイナー、7th、マイナー7th、メジャー7th、5th、6th、マイナー6th、9th、<br/>マイナー9、6/9、7♭5、7♯5、マイナー7♭5、7♭9、7♯9、ディミニッシュ7th、オーグメント、7th sus、sus2、sus4、add9th、マイナーadd9th、11th、マイナー11',

    transposerSloganHtml: '<em>5度圏</em>と<em>コードトランスポーザー</em>が登場 –<br/>コードを見つけ、学ぶためのより良い方法。',
    transposerDescHtml: `私たちが耳にする多くの曲は、似たように変化するコードのまとまりに基づいています。<br/>
5度圏を使えば、よくあるコード進行を一つのインタラクティブな画面でかんたんに見渡せます。<br/>
コードを新しいキーへ移調するのにも役立ちます。`,

    progressionSloganHtml: '<em>コード進行</em>',
    progressionDescHtml: `「マジック・フォー」コードをご存じですか？
            G、D、Em、C の 4 つで、多くの曲がこの一つの進行だけを使っています！
            マスターすれば、何千もの曲を演奏できます。 <br/> <br/>
            Bass Toolkit で「マジック・フォー」コードを聴いて学び、他のキーへ移調しましょう。`,
    progressionLinkTitle: 'コード進行の仕組みを見る',
    progressionLink: '仕組みを見る',

    featuresHeading: 'その他の便利な機能',
    features: [
      { title: '13 種類のタイムキーピング', descHtml: 'カウントボイスを含め、好みのビート音を選べます。' },
      { title: 'タップ', descHtml: 'リアルタイムでタップして BPM を計算します。' },
      { title: '左利きモード', descHtml: 'すべてのコードダイアグラムと音階を左利き表示に対応。' },
      { title: 'カポ', descHtml: 'カポを使った移調に対応しています。' },
      { title: '9 種類のチューニング', descHtml: 'スタンダード、ドロップD、5弦ベース、6弦ベースなどに対応。' },
      { title: '変更可能な A4', descHtml: 'カスタマイズ可能な A4 基準周波数に対応。' },
      { title: 'AirPlay', descHtml: 'AirPlay で Apple TV やその他の AirPlay 対応スピーカーへ音を送れます。' },
      { title: 'AudioBus', descHtml: 'AudioBus に対応 – 本アプリを他の音楽アプリの入力ソースとして使えます。' },
      { title: 'Inter-App Audio', descHtml: '本アプリの音を GarageBand など他の音楽アプリへ直接ルーティングできます。' },
    ],

    downloadName: 'Bass Toolkit',
    downloadAvailHtml: 'iPhone、iPad、iPod Touch に対応<br/>\n    iOS 6.1 以降が必要<br/>\n    ',
    getPresskit: 'プレスキットを入手',
    getPresskitTitle: 'プレスキットを入手',

    videoPopupTitle: 'ポリリズムの仕組み',

    meta: {
      wholetitle: 'Bass Toolkit – iPhone・iPad 用ベースツール | EUMLab',
      description: 'Bass Toolkit はベースに欠かせないツールを集約。高精度チューナー、メトロノーム、コードアルペジオ、音階、コード進行などを搭載。',
      keywords: 'Bass Toolkit, ベースツール, チューナー, ベースチューナー, メトロノーム, 音階, コード, コードダイアグラム, コード進行, ドラムループ, アルペジオ, ベース チューニング, EUMLab, Polybeat, iPhone, iPad, iOS, 音楽, ミュージシャン, 学ぶ, 練習',
    },
  },
};
