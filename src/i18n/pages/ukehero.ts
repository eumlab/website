// Self-contained translation module for the UkeHero page (route /ukehero/ and
// /<lang>/ukehero/). The `en` entry reproduces the legacy copy verbatim so the
// English page renders byte-identical (it is in the verify reference set).
export interface AppStrings {
  tagline: string;            // hero <h2> (inline <br/>)
  downloadAppStore: string;   // App Store button label
  fingeringSlogan: string;    // smart fingering <h1> (inline <br/><em>)
  fingeringDesc: string;      // smart fingering <h2> (inline <br/>)
  chordsSlogan: string;       // smart chords <h1> (inline <br/><em>)
  chordsDesc: string;         // smart chords <h2> (inline <br/>)
  ownChordSlogan: string;     // own chord <h1>
  ownChordDesc: string;       // own chord <h2> (inline <br/>)
  meta: { wholetitle: string; description: string; keywords: string };
}

export const UKEHERO: Record<string, AppStrings> = {
  en: {
    tagline: `Turn your iPhone<br/>into a virtual ukulele`,
    downloadAppStore: `Download on the App Store`,
    fingeringSlogan: `Finger picking is now possible on the iPhone<br/>using <em>smart fingering</em> technology`,
    fingeringDesc: `
            Previously, because of a lack of physical feedback, finger picking techniques were<br/>
            impossible on the iPhone and iPad. Now, thanks "Smart Fingering Technology," all<br/>
            you need to do is swipe your fingers to play the device like a real ukulele.
    `,
    chordsSlogan: `<em>Smart Chords:</em><br/>Change chords <br/>by touch alone`,
    chordsDesc: `Switch chords quickly and smoothly by<br/>pressing the special pads in different combinations.`,
    ownChordSlogan: `Make your own chord maps`,
    ownChordDesc: `
            If you want to play a song that uses different chords, simply change the configuration.<br/>
            Create new maps and transpose chords to any key <br/>
            and save as many maps as you need.
        `,
    meta: {
      wholetitle: 'UkeHero - EUMLab ',
      description: 'UkeHero app is a virtual ukulele on your iPhone and iPad. With smart chords and smart strumming techs, it just like a real ukulele.',
      keywords: 'ukulele, instrument, virtual instrument, real ukulele, guitar hero, real guitar, futulele, tool, app, eumlab, eum, xanin, iPhone, iPad, iOS, Android, music, musician, learn, music, practice, student',
    },
  },
  de: {
    tagline: `Verwandle dein iPhone<br/>in eine virtuelle Ukulele`,
    downloadAppStore: `Im App Store laden`,
    fingeringSlogan: `Fingerpicking ist jetzt auf dem iPhone möglich<br/>dank <em>Smart-Fingering</em>-Technologie`,
    fingeringDesc: `Früher waren Fingerpicking-Techniken auf iPhone und iPad wegen des fehlenden<br/>
            physischen Feedbacks unmöglich. Dank „Smart Fingering Technology“ musst du jetzt<br/>
            nur noch mit den Fingern streichen, um das Gerät wie eine echte Ukulele zu spielen.`,
    chordsSlogan: `<em>Smart Chords:</em><br/>Akkorde wechseln <br/>allein per Berührung`,
    chordsDesc: `Wechsle Akkorde schnell und flüssig, indem du die<br/>speziellen Pads in verschiedenen Kombinationen drückst.`,
    ownChordSlogan: `Erstelle eigene Akkord-Maps`,
    ownChordDesc: `Möchtest du ein Lied mit anderen Akkorden spielen, ändere einfach die Konfiguration.<br/>
            Erstelle neue Maps, transponiere Akkorde in jede Tonart <br/>
            und speichere so viele Maps, wie du brauchst.`,
    meta: {
      wholetitle: 'UkeHero – virtuelle Ukulele fürs iPhone | EUMLab',
      description: 'UkeHero verwandelt dein iPhone und iPad in eine virtuelle Ukulele. Mit Smart Chords und Smart-Strumming-Technik spielt sie sich wie eine echte Ukulele.',
      keywords: 'Ukulele, Instrument, virtuelles Instrument, echte Ukulele, Smart Chords, Smart Fingering, App, EUMLab, Polybeat, iPhone, iPad, iOS, Android, Musik, Musiker, lernen, üben',
    },
  },
  fr: {
    tagline: `Transformez votre iPhone<br/>en ukulélé virtuel`,
    downloadAppStore: `Télécharger dans l’App Store`,
    fingeringSlogan: `Le finger picking est désormais possible sur l’iPhone<br/>grâce à la technologie <em>smart fingering</em>`,
    fingeringDesc: `Auparavant, faute de retour physique, les techniques de finger picking étaient<br/>
            impossibles sur iPhone et iPad. Maintenant, grâce à la « Smart Fingering Technology »,<br/>
            il vous suffit de glisser les doigts pour jouer de l’appareil comme d’un vrai ukulélé.`,
    chordsSlogan: `<em>Smart Chords :</em><br/>Changez d’accords <br/>d’un simple toucher`,
    chordsDesc: `Changez d’accords rapidement et en douceur en<br/>pressant les pads spéciaux selon différentes combinaisons.`,
    ownChordSlogan: `Créez vos propres grilles d’accords`,
    ownChordDesc: `Pour jouer un morceau avec d’autres accords, il suffit de changer la configuration.<br/>
            Créez de nouvelles grilles, transposez les accords dans n’importe quelle tonalité <br/>
            et enregistrez autant de grilles que nécessaire.`,
    meta: {
      wholetitle: 'UkeHero – ukulélé virtuel pour iPhone | EUMLab',
      description: 'UkeHero transforme votre iPhone et iPad en ukulélé virtuel. Avec Smart Chords et le smart strumming, il se joue comme un vrai ukulélé.',
      keywords: 'ukulélé, instrument, instrument virtuel, vrai ukulélé, Smart Chords, Smart Fingering, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, musique, musicien, apprendre, pratiquer',
    },
  },
  es: {
    tagline: `Convierte tu iPhone<br/>en un ukelele virtual`,
    downloadAppStore: `Descargar en el App Store`,
    fingeringSlogan: `El finger picking ya es posible en el iPhone<br/>gracias a la tecnología <em>smart fingering</em>`,
    fingeringDesc: `Antes, por la falta de respuesta física, las técnicas de finger picking eran<br/>
            imposibles en el iPhone y el iPad. Ahora, gracias a la «Smart Fingering Technology»,<br/>
            solo tienes que deslizar los dedos para tocar el dispositivo como un ukelele de verdad.`,
    chordsSlogan: `<em>Smart Chords:</em><br/>Cambia de acordes <br/>solo con tocar`,
    chordsDesc: `Cambia de acordes rápida y suavemente<br/>pulsando los pads especiales en distintas combinaciones.`,
    ownChordSlogan: `Crea tus propios mapas de acordes`,
    ownChordDesc: `Si quieres tocar una canción con otros acordes, solo tienes que cambiar la configuración.<br/>
            Crea nuevos mapas y transpón los acordes a cualquier tonalidad <br/>
            y guarda todos los mapas que necesites.`,
    meta: {
      wholetitle: 'UkeHero – ukelele virtual para iPhone | EUMLab',
      description: 'UkeHero convierte tu iPhone y iPad en un ukelele virtual. Con Smart Chords y smart strumming, se toca como un ukelele de verdad.',
      keywords: 'ukelele, instrumento, instrumento virtual, ukelele real, Smart Chords, Smart Fingering, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, música, músico, aprender, practicar',
    },
  },
  zh: {
    tagline: `把你的 iPhone<br/>变成一把虚拟尤克里里`,
    downloadAppStore: `在 App Store 下载`,
    fingeringSlogan: `如今在 iPhone 上也能指弹<br/>这要归功于<em>智能指法</em>技术`,
    fingeringDesc: `以往由于缺乏物理反馈，指弹技巧在 iPhone 和 iPad 上<br/>
            根本无法实现。现在，得益于“智能指法技术”，<br/>
            你只需用手指滑动，就能像弹奏真正的尤克里里一样演奏设备。`,
    chordsSlogan: `<em>智能和弦：</em><br/>仅凭触碰 <br/>即可切换和弦`,
    chordsDesc: `以不同的组合按压特殊的触控板，<br/>即可快速顺滑地切换和弦。`,
    ownChordSlogan: `创建你自己的和弦图`,
    ownChordDesc: `想演奏使用不同和弦的歌曲？只需更改配置即可。<br/>
            创建新的和弦图，将和弦转调到任意调，<br/>
            并按需保存任意多张和弦图。`,
    meta: {
      wholetitle: 'UkeHero —— iPhone 上的虚拟尤克里里 | EUMLab',
      description: 'UkeHero 是 iPhone 和 iPad 上的虚拟尤克里里。配备智能和弦与智能扫弦技术，弹奏起来就像真正的尤克里里。',
      keywords: '尤克里里, 乐器, 虚拟乐器, 真实尤克里里, 智能和弦, 智能指法, app, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 音乐, 音乐人, 学习, 练习',
    },
  },
  ja: {
    tagline: `iPhone を<br/>バーチャル・ウクレレに`,
    downloadAppStore: `App Store でダウンロード`,
    fingeringSlogan: `iPhone でフィンガーピッキングが可能に<br/><em>スマート・フィンガリング</em>技術で実現`,
    fingeringDesc: `これまで物理的なフィードバックがないため、フィンガーピッキングは<br/>
            iPhone や iPad では不可能でした。今では「Smart Fingering Technology」のおかげで、<br/>
            指をスワイプするだけで本物のウクレレのように演奏できます。`,
    chordsSlogan: `<em>スマート・コード：</em><br/>タッチするだけで <br/>コードを切り替え`,
    chordsDesc: `専用パッドをさまざまな組み合わせで押すだけで、<br/>すばやくスムーズにコードを切り替えられます。`,
    ownChordSlogan: `自分だけのコードマップを作成`,
    ownChordDesc: `別のコードを使う曲を弾きたいときは、設定を変えるだけ。<br/>
            新しいマップを作り、コードを好きなキーに移調して、<br/>
            必要なだけマップを保存できます。`,
    meta: {
      wholetitle: 'UkeHero —— iPhone のバーチャル・ウクレレ | EUMLab',
      description: 'UkeHero は iPhone と iPad のバーチャル・ウクレレ。スマート・コードとスマート・ストラミング技術で、本物のウクレレのように演奏できます。',
      keywords: 'ウクレレ, 楽器, バーチャル楽器, 本物のウクレレ, スマートコード, スマートフィンガリング, アプリ, EUMLab, Polybeat, iPhone, iPad, iOS, Android, 音楽, ミュージシャン, 学ぶ, 練習',
    },
  },
};
