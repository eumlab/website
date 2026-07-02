// Self-contained translation module for the Ukulele Toolkit page
// (route /ukulele-toolkit/ and /<lang>/ukulele-toolkit/).
// Per-page modules avoid editing a central dictionary, so localized pages can be
// added independently. The `en` entry reproduces the legacy copy verbatim so the
// English page renders byte-identical (it is in the verify reference set). The
// app name "Ukulele Toolkit" stays as {me.name} in the component and the review
// testimonials stay in their original language.
export interface AppStrings {
  heroTagline: string;
  sloganHtml: string;
  sloganDesc: string;
  tunerSlogan: string;
  tunerDesc: string;
  metronomeSloganHtml: string;
  metronomeDescHtml: string;
  metronomeLink: string;
  metronomeLinkTitle: string;
  scaleSloganHtml: string;
  scaleDescHtml: string;
  chordsSlogan: string;
  chordsDescHtml: string;
  chordsSupported: string;
  transposerSloganHtml: string;
  transposerDescHtml: string;
  progressionSloganHtml: string;
  progressionDescHtml: string;
  progressionLink: string;
  progressionLinkTitle: string;
  featuresHeading: string;
  features: { title: string; desc: string }[];
  downloadAvailHtml: string;
  getPresskit: string;
  getPresskitTitle: string;
  downloadTitle: string;
  videoPopupTitle: string;
  reviewsHeading?: string;
  meta: { wholetitle: string; description: string; keywords: string };
}

export const UKULELE_TOOLKIT: Record<string, AppStrings> = {
  en: {
    heroTagline: `Everything a uke player needs`,
    sloganHtml: `<em>Ukulele Toolkit</em> helps you get the most <br/> out of your <em>daily practice</em> and <em>performance</em>`,
    sloganDesc: `Tune your ukulele, practice scales, find chords, sync with a metronome and more.`,
    tunerSlogan: `Pro-Level tuning`,
    tunerDesc: `Fix up your tuning in just seconds
            using the intuitive color bars.
            Highly accurate – up to ±0.1 cent precision –
            the tuner includes a real ukulele string sound
            to help you tune your uke by ear.`,
    metronomeSloganHtml: `Extremely precise <em>metronome</em><br/> with <em>strumming patterns</em> and <em>drum loops</em>`,
    metronomeDescHtml: `The metronome uses EUMLab's RTP (Real-Time Playback) technology <br/>
to ensure accuracy to 20 microseconds (±20µs).<br/>
It supports flexible time signatures with 14 different tones,<br/>
13 built-in strumming patterns and 116 drum loops to make practice easier.<br/>
        <br/>

    `,
    metronomeLink: `Lean More`,
    metronomeLinkTitle: `See how tuner works`,
    scaleSloganHtml: `<em>108</em> musical scales`,
    scaleDescHtml: `Scales are the soul music.<br/>
            Ukulele Toolkit features 108 different ones from all over the world,
            from Blues and Jazz, to Japanese, Middle Eastern and more.
            Use them to learn and explore new sounds and styles.`,
    chordsSlogan: `Dozens of chords`,
    chordsDescHtml: `Learn new chords and even find them by note – <br/>
each note includes 25 different chord types with 100s of fingering positions.`,
    chordsSupported: `Supported chord types: Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Introducing <em>5th Circle</em>  with <em>Chord Transposer</em> –<br/>A better way to find and learn chords`,
    transposerDescHtml: `Most songs we hear are written based on groups of chords that change in similar ways.<br/>
    With 5th Circle, easily visualize common chord changes in one interactive screen.<br/>
    You can even use it to help you transpose chords into a new key.`,
    progressionSloganHtml: `<em>Chord progressions</em>`,
    progressionDescHtml: `Have you heard of the "Magic Four" chords?
            It's C, G, Am, and F, and many songs use just this one progression!
            Once you've mastered it, you can use it to play thousands of songs.  <br/> <br/>
            You can use Ukulele Toolkit to hear and learn the "Magic Four" chords and then transpose them into other keys.`,
    progressionLink: `See how it works`,
    progressionLinkTitle: `See how chord progression works`,
    featuresHeading: `Other Cool Features`,
    features: [
      { title: `13 time-keeping styles`, desc: `Choose beat sounds that work for you, including a counting voice.` },
      { title: `Tap`, desc: `Calculate BPM by tapping in real time.` },
      { title: `Left-Handed mode`, desc: `All chord diagrams and scales support display in left-handed mode.` },
      { title: `Capo`, desc: `The app support transpositions using a capo.` },
      { title: `3 tunings`, desc: `The app supports tunings for Tenor (GCEA), Soprano (ADF#B) and Baritone (DGBE) ukes.` },
      { title: `Changeable A4`, desc: `Support for a customizable A4 reference frequency.` },
      { title: `AirPlay`, desc: `Use AirPlay to beam your sound to Apple TV or other AirPlay-enabled speakers.` },
      { title: `AudioBus`, desc: `AudioBus support – use the app as an input source for other music apps.` },
      { title: `Inter-App Audio`, desc: `Route the app's sound directly to other music apps like GarageBand.` },
    ],
    downloadAvailHtml: `Available for iPhone, iPad and iPod Touch<br/>
    Requires iOS 6.1+<br/>
    `,
    getPresskit: `Get Presskit`,
    getPresskitTitle: `Get Presskit`,
    downloadTitle: `Download Ukulele Toolkit`,
    videoPopupTitle: `How the Polyrhythm Works`,
    meta: {
      wholetitle: 'Ukulele Toolkit - EUMLab ',
      description: 'Ukulele Toolkit app is a collection of essential ukulele tools, features including accurate tuner, metronome, chord diagram, scale, chord progressions and more.',
      keywords: 'ukulele toolkit, guitar toolkit, ukulele, over the rainbow, ukulele tuner, uketuner, ukutuner, ukulele tabs, tuner, metronome ,scale, chords, chord, chord diagram, chord progression, drum loops, jam, pentatonic, strum, strums, strumming pattern, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student',
    },
  },

  de: {
    heroTagline: `Alles, was ein Uke-Spieler braucht`,
    sloganHtml: `<em>Ukulele Toolkit</em> hilft dir, das Beste <br/> aus deinem <em>täglichen Üben</em> und deinen <em>Auftritten</em> herauszuholen`,
    sloganDesc: `Stimme deine Ukulele, übe Tonleitern, finde Akkorde, spiele synchron zum Metronom und mehr.`,
    tunerSlogan: `Stimmen auf Profi-Niveau`,
    tunerDesc: `Korrigiere deine Stimmung in nur Sekunden
            mit den intuitiven Farbbalken.
            Hochpräzise – mit einer Genauigkeit von bis zu ±0,1 Cent –
            enthält das Stimmgerät einen echten Ukulelen-Saitenklang,
            damit du deine Uke nach Gehör stimmen kannst.`,
    metronomeSloganHtml: `Extrem präzises <em>Metronom</em><br/> mit <em>Schlagmustern</em> und <em>Drum-Loops</em>`,
    metronomeDescHtml: `Das Metronom nutzt EUMLabs RTP-Technologie (Real-Time Playback), <br/>
um eine Genauigkeit von 20 Mikrosekunden (±20µs) zu gewährleisten.<br/>
Es unterstützt flexible Taktarten mit 14 verschiedenen Klängen,<br/>
13 integrierten Schlagmustern und 116 Drum-Loops, die das Üben erleichtern.<br/>
        <br/>

    `,
    metronomeLink: `Mehr erfahren`,
    metronomeLinkTitle: `So funktioniert das Stimmgerät`,
    scaleSloganHtml: `<em>108</em> Tonleitern`,
    scaleDescHtml: `Tonleitern sind die Seele der Musik.<br/>
            Ukulele Toolkit bietet 108 verschiedene aus aller Welt,
            von Blues und Jazz bis zu japanischen, orientalischen und weiteren.
            Nutze sie, um neue Klänge und Stile zu lernen und zu entdecken.`,
    chordsSlogan: `Dutzende Akkorde`,
    chordsDescHtml: `Lerne neue Akkorde und finde sie sogar nach Note – <br/>
jede Note umfasst 25 verschiedene Akkordtypen mit Hunderten von Greifpositionen.`,
    chordsSupported: `Unterstützte Akkordtypen: Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Neu: <em>Quintenzirkel</em>  mit <em>Akkord-Transposer</em> –<br/>Eine bessere Art, Akkorde zu finden und zu lernen`,
    transposerDescHtml: `Die meisten Songs, die wir hören, beruhen auf Akkordgruppen, die sich auf ähnliche Weise verändern.<br/>
    Mit dem Quintenzirkel visualisierst du gängige Akkordwechsel auf einem interaktiven Bildschirm.<br/>
    Du kannst ihn sogar nutzen, um Akkorde in eine neue Tonart zu transponieren.`,
    progressionSloganHtml: `<em>Akkordfolgen</em>`,
    progressionDescHtml: `Hast du schon von den „Magic Four“-Akkorden gehört?
            Es sind C, G, Am und F – und viele Songs nutzen nur diese eine Folge!
            Hast du sie einmal gemeistert, kannst du damit Tausende Songs spielen.  <br/> <br/>
            Mit Ukulele Toolkit kannst du die „Magic Four“-Akkorde hören und lernen und sie dann in andere Tonarten transponieren.`,
    progressionLink: `So funktioniert's`,
    progressionLinkTitle: `So funktionieren Akkordfolgen`,
    featuresHeading: `Weitere coole Funktionen`,
    features: [
      { title: `13 Klick-Stile`, desc: `Wähle Beat-Sounds, die zu dir passen, inklusive Zählstimme.` },
      { title: `Tap`, desc: `Bestimme das Tempo (BPM) durch Tippen in Echtzeit.` },
      { title: `Linkshänder-Modus`, desc: `Alle Akkorddiagramme und Tonleitern lassen sich im Linkshänder-Modus anzeigen.` },
      { title: `Kapodaster`, desc: `Die App unterstützt das Transponieren mit einem Kapodaster.` },
      { title: `3 Stimmungen`, desc: `Die App unterstützt Stimmungen für Tenor- (GCEA), Sopran- (ADF#B) und Bariton-Ukulelen (DGBE).` },
      { title: `Anpassbares A4`, desc: `Unterstützung für eine anpassbare A4-Referenzfrequenz.` },
      { title: `AirPlay`, desc: `Übertrage deinen Sound per AirPlay auf Apple TV oder andere AirPlay-fähige Lautsprecher.` },
      { title: `AudioBus`, desc: `AudioBus-Unterstützung – nutze die App als Eingangsquelle für andere Musik-Apps.` },
      { title: `Inter-App Audio`, desc: `Leite den Sound der App direkt an andere Musik-Apps wie GarageBand weiter.` },
    ],
    downloadAvailHtml: `Verfügbar für iPhone, iPad und iPod touch<br/>
    Erfordert iOS 6.1+<br/>
    `,
    getPresskit: `Presskit herunterladen`,
    getPresskitTitle: `Presskit herunterladen`,
    downloadTitle: `Ukulele Toolkit herunterladen`,
    videoPopupTitle: `So funktioniert die Polyrhythmik`,
    reviewsHeading: undefined,
    meta: {
      wholetitle: 'Ukulele Toolkit – Tuner, Metronom & Akkorde | EUMLab',
      description: 'Ukulele Toolkit vereint die wichtigsten Uke-Tools: präzises Stimmgerät, Metronom, Akkorddiagramme, Tonleitern, Akkordfolgen und mehr.',
      keywords: 'Ukulele Toolkit, Ukulele, Ukulele-Stimmgerät, Stimmgerät, Metronom, Tonleiter, Akkorde, Akkorddiagramm, Akkordfolge, Drum Loops, Schlagmuster, App, EUMLab, Polybeat, iPhone, iPad, iOS, Android, Musik lernen, üben',
    },
  },

  fr: {
    heroTagline: `Tout ce dont un joueur de uke a besoin`,
    sloganHtml: `<em>Ukulele Toolkit</em> vous aide à tirer le meilleur <br/> de votre <em>pratique quotidienne</em> et de vos <em>performances</em>`,
    sloganDesc: `Accordez votre ukulélé, travaillez vos gammes, trouvez des accords, jouez en rythme avec un métronome et plus encore.`,
    tunerSlogan: `Accordage de niveau pro`,
    tunerDesc: `Réglez votre accordage en quelques secondes
            grâce aux barres de couleur intuitives.
            Très précis – jusqu'à ±0,1 cent –
            l'accordeur inclut un véritable son de corde de ukulélé
            pour vous aider à accorder votre uke à l'oreille.`,
    metronomeSloganHtml: `Un <em>métronome</em> extrêmement précis<br/> avec <em>motifs de grattage</em> et <em>boucles de batterie</em>`,
    metronomeDescHtml: `Le métronome utilise la technologie RTP (Real-Time Playback) d'EUMLab <br/>
pour garantir une précision de 20 microsecondes (±20µs).<br/>
Il prend en charge des mesures flexibles avec 14 sonorités différentes,<br/>
13 motifs de grattage intégrés et 116 boucles de batterie pour faciliter la pratique.<br/>
        <br/>

    `,
    metronomeLink: `En savoir plus`,
    metronomeLinkTitle: `Voir comment fonctionne l'accordeur`,
    scaleSloganHtml: `<em>108</em> gammes musicales`,
    scaleDescHtml: `Les gammes sont l'âme de la musique.<br/>
            Ukulele Toolkit propose 108 gammes différentes venues du monde entier,
            du blues et du jazz aux gammes japonaises, orientales et bien d'autres.
            Utilisez-les pour apprendre et explorer de nouveaux sons et styles.`,
    chordsSlogan: `Des dizaines d'accords`,
    chordsDescHtml: `Apprenez de nouveaux accords et trouvez-les même par note – <br/>
chaque note comprend 25 types d'accords différents avec des centaines de positions de doigté.`,
    chordsSupported: `Types d'accords pris en charge : Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Découvrez le <em>Cycle des quintes</em>  avec le <em>Transposeur d'accords</em> –<br/>Une meilleure façon de trouver et d'apprendre les accords`,
    transposerDescHtml: `La plupart des chansons que nous entendons reposent sur des groupes d'accords qui évoluent de façon similaire.<br/>
    Avec le Cycle des quintes, visualisez facilement les enchaînements d'accords courants sur un seul écran interactif.<br/>
    Vous pouvez même l'utiliser pour transposer des accords dans une nouvelle tonalité.`,
    progressionSloganHtml: `<em>Enchaînements d'accords</em>`,
    progressionDescHtml: `Avez-vous entendu parler des accords « Magic Four » ?
            Ce sont Do, Sol, Lam et Fa, et de nombreuses chansons n'utilisent que cet enchaînement !
            Une fois maîtrisé, il vous permet de jouer des milliers de chansons.  <br/> <br/>
            Avec Ukulele Toolkit, écoutez et apprenez les accords « Magic Four », puis transposez-les dans d'autres tonalités.`,
    progressionLink: `Voir comment ça marche`,
    progressionLinkTitle: `Voir comment fonctionnent les enchaînements d'accords`,
    featuresHeading: `D'autres fonctionnalités sympas`,
    features: [
      { title: `13 styles de battue`, desc: `Choisissez les sons de battement qui vous conviennent, y compris une voix de comptage.` },
      { title: `Tap`, desc: `Calculez le BPM en tapant le rythme en temps réel.` },
      { title: `Mode gaucher`, desc: `Tous les diagrammes d'accords et les gammes s'affichent en mode gaucher.` },
      { title: `Capodastre`, desc: `L'app prend en charge les transpositions avec un capodastre.` },
      { title: `3 accordages`, desc: `L'app prend en charge les accordages pour ukulélés ténor (GCEA), soprano (ADF#B) et baryton (DGBE).` },
      { title: `La4 modifiable`, desc: `Prise en charge d'une fréquence de référence La4 personnalisable.` },
      { title: `AirPlay`, desc: `Utilisez AirPlay pour diffuser votre son vers une Apple TV ou d'autres enceintes compatibles AirPlay.` },
      { title: `AudioBus`, desc: `Prise en charge d'AudioBus – utilisez l'app comme source d'entrée pour d'autres apps musicales.` },
      { title: `Inter-App Audio`, desc: `Acheminez le son de l'app directement vers d'autres apps musicales comme GarageBand.` },
    ],
    downloadAvailHtml: `Disponible pour iPhone, iPad et iPod touch<br/>
    Nécessite iOS 6.1+<br/>
    `,
    getPresskit: `Télécharger le kit presse`,
    getPresskitTitle: `Télécharger le kit presse`,
    downloadTitle: `Télécharger Ukulele Toolkit`,
    videoPopupTitle: `Comment fonctionne la polyrythmie`,
    reviewsHeading: undefined,
    meta: {
      wholetitle: 'Ukulele Toolkit – accordeur, métronome & accords | EUMLab',
      description: 'Ukulele Toolkit réunit les outils essentiels du ukulélé : accordeur précis, métronome, diagrammes d\'accords, gammes, enchaînements d\'accords et plus.',
      keywords: 'Ukulele Toolkit, ukulélé, accordeur ukulélé, accordeur, métronome, gamme, accords, diagramme d\'accords, enchaînement d\'accords, boucles de batterie, motifs de grattage, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, apprendre la musique, pratiquer',
    },
  },

  es: {
    heroTagline: `Todo lo que un ukelelista necesita`,
    sloganHtml: `<em>Ukulele Toolkit</em> te ayuda a sacar el máximo <br/> partido a tu <em>práctica diaria</em> y a tus <em>actuaciones</em>`,
    sloganDesc: `Afina tu ukelele, practica escalas, encuentra acordes, toca al ritmo de un metrónomo y mucho más.`,
    tunerSlogan: `Afinación de nivel profesional`,
    tunerDesc: `Ajusta tu afinación en solo segundos
            con las intuitivas barras de color.
            Muy preciso – hasta ±0,1 centésimas –
            el afinador incluye un sonido real de cuerda de ukelele
            para ayudarte a afinar tu uke de oído.`,
    metronomeSloganHtml: `<em>Metrónomo</em> extremadamente preciso<br/> con <em>patrones de rasgueo</em> y <em>loops de batería</em>`,
    metronomeDescHtml: `El metrónomo usa la tecnología RTP (Real-Time Playback) de EUMLab <br/>
para garantizar una precisión de 20 microsegundos (±20µs).<br/>
Admite compases flexibles con 14 tonos diferentes,<br/>
13 patrones de rasgueo integrados y 116 loops de batería para facilitar la práctica.<br/>
        <br/>

    `,
    metronomeLink: `Más información`,
    metronomeLinkTitle: `Mira cómo funciona el afinador`,
    scaleSloganHtml: `<em>108</em> escalas musicales`,
    scaleDescHtml: `Las escalas son el alma de la música.<br/>
            Ukulele Toolkit incluye 108 escalas diferentes de todo el mundo,
            desde el blues y el jazz hasta las japonesas, las de Oriente Medio y muchas más.
            Úsalas para aprender y explorar nuevos sonidos y estilos.`,
    chordsSlogan: `Docenas de acordes`,
    chordsDescHtml: `Aprende nuevos acordes e incluso encuéntralos por nota – <br/>
cada nota incluye 25 tipos de acordes diferentes con cientos de posiciones de digitación.`,
    chordsSupported: `Tipos de acordes admitidos: Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `Presentamos el <em>Círculo de quintas</em>  con el <em>Transpositor de acordes</em> –<br/>Una mejor forma de encontrar y aprender acordes`,
    transposerDescHtml: `La mayoría de las canciones que oímos se basan en grupos de acordes que cambian de forma similar.<br/>
    Con el Círculo de quintas, visualiza fácilmente los cambios de acordes habituales en una sola pantalla interactiva.<br/>
    Incluso puedes usarlo para transponer acordes a una nueva tonalidad.`,
    progressionSloganHtml: `<em>Progresiones de acordes</em>`,
    progressionDescHtml: `¿Has oído hablar de los acordes «Magic Four»?
            Son Do, Sol, Lam y Fa, ¡y muchas canciones usan solo esta progresión!
            Una vez que la domines, podrás usarla para tocar miles de canciones.  <br/> <br/>
            Con Ukulele Toolkit puedes escuchar y aprender los acordes «Magic Four» y luego transponerlos a otras tonalidades.`,
    progressionLink: `Mira cómo funciona`,
    progressionLinkTitle: `Mira cómo funcionan las progresiones de acordes`,
    featuresHeading: `Otras funciones geniales`,
    features: [
      { title: `13 estilos de marcación`, desc: `Elige los sonidos de claqueta que mejor te funcionen, incluida una voz que cuenta.` },
      { title: `Tap`, desc: `Calcula los BPM tocando el ritmo en tiempo real.` },
      { title: `Modo zurdo`, desc: `Todos los diagramas de acordes y las escalas se muestran en modo zurdo.` },
      { title: `Cejilla`, desc: `La app admite transposiciones usando una cejilla.` },
      { title: `3 afinaciones`, desc: `La app admite afinaciones para ukeleles tenor (GCEA), soprano (ADF#B) y barítono (DGBE).` },
      { title: `La4 ajustable`, desc: `Compatible con una frecuencia de referencia La4 personalizable.` },
      { title: `AirPlay`, desc: `Usa AirPlay para enviar tu sonido a un Apple TV u otros altavoces compatibles con AirPlay.` },
      { title: `AudioBus`, desc: `Compatible con AudioBus – usa la app como fuente de entrada para otras apps musicales.` },
      { title: `Inter-App Audio`, desc: `Envía el sonido de la app directamente a otras apps musicales como GarageBand.` },
    ],
    downloadAvailHtml: `Disponible para iPhone, iPad y iPod touch<br/>
    Requiere iOS 6.1+<br/>
    `,
    getPresskit: `Descargar press kit`,
    getPresskitTitle: `Descargar press kit`,
    downloadTitle: `Descargar Ukulele Toolkit`,
    videoPopupTitle: `Cómo funciona la polirritmia`,
    reviewsHeading: undefined,
    meta: {
      wholetitle: 'Ukulele Toolkit – afinador, metrónomo y acordes | EUMLab',
      description: 'Ukulele Toolkit reúne las herramientas esenciales del ukelele: afinador preciso, metrónomo, diagramas de acordes, escalas, progresiones de acordes y más.',
      keywords: 'Ukulele Toolkit, ukelele, afinador de ukelele, afinador, metrónomo, escala, acordes, diagrama de acordes, progresión de acordes, loops de batería, patrones de rasgueo, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, aprender música, practicar',
    },
  },

  zh: {
    heroTagline: `尤克里里玩家所需的一切`,
    sloganHtml: `<em>Ukulele Toolkit</em> 帮你充分利用 <br/> 你的<em>日常练习</em>与<em>演出</em>`,
    sloganDesc: `为尤克里里调音、练习音阶、查找和弦、与节拍器同步演奏，还有更多功能。`,
    tunerSlogan: `专业级调音`,
    tunerDesc: `借助直观的彩色音条，
            几秒钟即可校准你的音准。
            高度精准——精度可达 ±0.1 音分——
            调音器内置真实的尤克里里弦声，
            帮助你用耳朵为尤克里里调音。`,
    metronomeSloganHtml: `极其精准的<em>节拍器</em><br/> 内含<em>扫弦节奏型</em>与<em>鼓点循环</em>`,
    metronomeDescHtml: `节拍器采用 EUMLab 的 RTP（实时播放）技术，<br/>
确保精度达到 20 微秒（±20µs）。<br/>
支持灵活的拍号，提供 14 种不同音色、<br/>
13 种内置扫弦节奏型和 116 种鼓点循环，让练习更轻松。<br/>
        <br/>

    `,
    metronomeLink: `了解更多`,
    metronomeLinkTitle: `看看调音器如何运作`,
    scaleSloganHtml: `<em>108</em> 种音阶`,
    scaleDescHtml: `音阶是音乐的灵魂。<br/>
            Ukulele Toolkit 收录了来自世界各地的 108 种不同音阶，
            从蓝调、爵士到日本、中东等风格。
            用它们来学习并探索全新的声音与风格。`,
    chordsSlogan: `数十种和弦`,
    chordsDescHtml: `学习新和弦，甚至可以按音名查找——<br/>
每个音名都包含 25 种不同的和弦类型与数百种按弦指法。`,
    chordsSupported: `支持的和弦类型：Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `全新推出<em>五度圈</em>与<em>和弦移调器</em>——<br/>查找和学习和弦的更好方式`,
    transposerDescHtml: `我们听到的大多数歌曲，都建立在以相似方式变化的和弦组之上。<br/>
    借助五度圈，在一块交互式屏幕上轻松呈现常见的和弦走向。<br/>
    你甚至可以用它把和弦移调到新的调性。`,
    progressionSloganHtml: `<em>和弦走向</em>`,
    progressionDescHtml: `你听说过「神奇四和弦」吗？
            它们是 C、G、Am 和 F，许多歌曲只用这一组走向！
            一旦掌握，你就能用它演奏成千上万首歌曲。  <br/> <br/>
            你可以用 Ukulele Toolkit 聆听并学习「神奇四和弦」，然后把它们移调到其他调性。`,
    progressionLink: `看看如何运作`,
    progressionLinkTitle: `看看和弦走向如何运作`,
    featuresHeading: `更多精彩功能`,
    features: [
      { title: `13 种打拍风格`, desc: `选择适合你的节拍音色，包括人声报数。` },
      { title: `Tap`, desc: `通过实时点击来计算 BPM。` },
      { title: `左手模式`, desc: `所有和弦图与音阶都支持以左手模式显示。` },
      { title: `变调夹`, desc: `App 支持使用变调夹进行移调。` },
      { title: `3 种调弦`, desc: `App 支持高音 G（GCEA）、次中音（ADF#B）和上低音（DGBE）尤克里里的调弦。` },
      { title: `可调 A4`, desc: `支持自定义 A4 参考频率。` },
      { title: `AirPlay`, desc: `使用 AirPlay 将声音传送到 Apple TV 或其他支持 AirPlay 的音箱。` },
      { title: `AudioBus`, desc: `支持 AudioBus——将本 App 用作其他音乐 App 的输入源。` },
      { title: `Inter-App Audio`, desc: `将 App 的声音直接路由到 GarageBand 等其他音乐 App。` },
    ],
    downloadAvailHtml: `适用于 iPhone、iPad 和 iPod touch<br/>
    需要 iOS 6.1 及以上版本<br/>
    `,
    getPresskit: `获取媒体资料包`,
    getPresskitTitle: `获取媒体资料包`,
    downloadTitle: `下载 Ukulele Toolkit`,
    videoPopupTitle: `复合节奏如何运作`,
    reviewsHeading: undefined,
    meta: {
      wholetitle: 'Ukulele Toolkit —— 调音器、节拍器与和弦 | EUMLab',
      description: 'Ukulele Toolkit 集合了尤克里里的必备工具，包括精准调音器、节拍器、和弦图、音阶、和弦走向等众多功能。',
      keywords: 'Ukulele Toolkit, 尤克里里, 尤克里里调音器, 调音器, 节拍器, 音阶, 和弦, 和弦图, 和弦走向, 鼓点循环, 扫弦节奏型, App, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 学音乐, 练习',
    },
  },

  ja: {
    heroTagline: `ウクレレ奏者に必要なすべてを`,
    sloganHtml: `<em>Ukulele Toolkit</em> は、<em>毎日の練習</em>と<em>演奏</em>を <br/> 最大限に活かすお手伝いをします`,
    sloganDesc: `ウクレレのチューニング、スケール練習、コード検索、メトロノームに合わせた演奏など、いろいろできます。`,
    tunerSlogan: `プロ級のチューニング`,
    tunerDesc: `直感的なカラーバーを使えば、
            わずか数秒でチューニングを整えられます。
            高精度（最大 ±0.1 セント）で、
            チューナーには本物のウクレレ弦の音を搭載。
            耳でウクレレをチューニングするのに役立ちます。`,
    metronomeSloganHtml: `きわめて正確な<em>メトロノーム</em><br/> <em>ストロークパターン</em>と<em>ドラムループ</em>を搭載`,
    metronomeDescHtml: `メトロノームは EUMLab の RTP（リアルタイム再生）技術を採用し、<br/>
20 マイクロ秒（±20µs）の精度を実現します。<br/>
柔軟な拍子に対応し、14 種類の音色、<br/>
13 種類の内蔵ストロークパターン、116 種類のドラムループで練習をより快適に。<br/>
        <br/>

    `,
    metronomeLink: `詳しく見る`,
    metronomeLinkTitle: `チューナーの使い方を見る`,
    scaleSloganHtml: `<em>108</em> 種類のスケール`,
    scaleDescHtml: `スケールは音楽の魂です。<br/>
            Ukulele Toolkit には、ブルースやジャズから日本、中東まで、
            世界中の 108 種類のスケールを収録。
            新しいサウンドやスタイルを学び、探求するのに使えます。`,
    chordsSlogan: `何十種類ものコード`,
    chordsDescHtml: `新しいコードを覚え、音名から探すこともできます。<br/>
各音名には 25 種類のコードタイプと数百もの押さえ方が含まれています。`,
    chordsSupported: `対応コードタイプ：Major, Minor, 7th, Minor 7th, Major 7th, 5th, 6th, Minor 6th, 9th, <br/>Minor 9, 6/9, 7♭5, 7♯5, Minor 7♭5, 7♭9, 7♯9, Dim 7th, Aug, 7th Sus, Sus 2, Sus 4, Add 9th, Minor add 9th, 11th, Minor 11`,
    transposerSloganHtml: `<em>五度圏</em>と<em>コードトランスポーザー</em>が新登場——<br/>コードを探して覚える、より良い方法`,
    transposerDescHtml: `私たちが耳にする曲の多くは、似た形で変化するコードのグループに基づいて書かれています。<br/>
    五度圏なら、よくあるコードの動きを 1 つのインタラクティブな画面で簡単に見渡せます。<br/>
    さらに、コードを新しいキーに移調するのにも使えます。`,
    progressionSloganHtml: `<em>コード進行</em>`,
    progressionDescHtml: `「マジック・フォー」コードをご存じですか？
            C・G・Am・F の 4 つで、多くの曲がこの 1 つの進行だけで作られています！
            マスターすれば、何千もの曲を演奏できます。  <br/> <br/>
            Ukulele Toolkit で「マジック・フォー」コードを聴いて覚え、ほかのキーに移調してみましょう。`,
    progressionLink: `使い方を見る`,
    progressionLinkTitle: `コード進行の使い方を見る`,
    featuresHeading: `その他の便利な機能`,
    features: [
      { title: `13 種類の拍刻みスタイル`, desc: `カウント音声を含め、自分に合ったビート音を選べます。` },
      { title: `Tap`, desc: `リアルタイムでタップして BPM を計算します。` },
      { title: `左利きモード`, desc: `すべてのコードダイアグラムとスケールを左利きモードで表示できます。` },
      { title: `カポ`, desc: `カポを使った移調に対応しています。` },
      { title: `3 種類のチューニング`, desc: `テナー（GCEA）、ソプラノ（ADF#B）、バリトン（DGBE）ウクレレのチューニングに対応しています。` },
      { title: `A4 変更可能`, desc: `カスタマイズ可能な A4 基準周波数に対応しています。` },
      { title: `AirPlay`, desc: `AirPlay でサウンドを Apple TV やその他の AirPlay 対応スピーカーに送れます。` },
      { title: `AudioBus`, desc: `AudioBus に対応——本アプリをほかの音楽アプリの入力ソースとして使えます。` },
      { title: `Inter-App Audio`, desc: `アプリのサウンドを GarageBand などほかの音楽アプリに直接ルーティングします。` },
    ],
    downloadAvailHtml: `iPhone、iPad、iPod touch に対応<br/>
    iOS 6.1 以降が必要<br/>
    `,
    getPresskit: `プレスキットを入手`,
    getPresskitTitle: `プレスキットを入手`,
    downloadTitle: `Ukulele Toolkit をダウンロード`,
    videoPopupTitle: `ポリリズムの仕組み`,
    reviewsHeading: undefined,
    meta: {
      wholetitle: 'Ukulele Toolkit —— チューナー・メトロノーム・コード | EUMLab',
      description: 'Ukulele Toolkit はウクレレに欠かせないツールを集約。高精度チューナー、メトロノーム、コードダイアグラム、スケール、コード進行などを搭載しています。',
      keywords: 'Ukulele Toolkit, ウクレレ, ウクレレチューナー, チューナー, メトロノーム, スケール, コード, コードダイアグラム, コード進行, ドラムループ, ストロークパターン, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 音楽を学ぶ, 練習',
    },
  },
};
