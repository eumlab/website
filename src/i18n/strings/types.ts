// Shape of one locale's dictionary. `*Html` fields may contain inline <em>/<br/>
// and are rendered with set:html in the body components; everything else is plain
// text. Keep this in sync across all six locale files (en is the reference).

export interface MetaStrings {
  title: string;        // full <title> (wholetitle)
  description: string;  // <meta name=description> + og/twitter description
  keywords?: string;    // <meta name=keywords>
}

export interface NavStrings {
  support: string;
  about: string;
  moreProducts: string;          // trailing space preserved in en to match legacy
  categories: [string, string, string]; // appsMenu group titles, in order
}

export interface FooterStrings {
  about: string;
  imprint: string;
  contact: string;
  support: string;
  copyrightHtml: string;         // may contain <br/>; brand names stay literal
}

export interface SwitcherStrings {
  label: string;                 // aria-label for the switcher
}

export interface FeatureItem {
  title: string;
  descHtml: string;
}

export interface ProMetronomeStrings {
  // hero
  tagline: string;
  downloadAppStore: string;
  downloadAppStoreTitle: string;
  googlePlayText: string;
  googlePlayTitle: string;
  googlePlayAlt: string;
  // intro
  introSloganHtml: string;
  introDescHtml: string;
  // simple-but-powerful
  simpleSloganHtml: string;
  simpleLeftHtml: string;
  simpleRightHtml: string;
  // precision
  precisionSlogan: string;
  precisionDescHtml: string;
  // sync
  syncSlogan: string;
  vibration: string;
  beats: string;
  flash: string;
  // rhythm trainer
  trainerSloganHtml: string;
  trainerDescHtml: string;
  trainerHowHtml: string;
  trainerLinkTitle: string;
  // polyrhythm
  polySloganHtml: string;
  polyDescHtml: string;
  polyLinkTitle: string;
  seeHowItWorks: string;         // shared link text for trainer + poly
  // playlist
  playlistSloganHtml: string;
  playlistDescHtml: string;
  // stage
  stageSlogan: string;
  stageDesc: string;
  // practice
  practiceSlogan: string;
  practiceDescHtml: string;
  warmupTitle: string;
  warmupDesc: string;
  automatorTitle: string;
  automatorDesc: string;
  // features
  featuresHeading: string;
  features: FeatureItem[];       // 12 items, in markup order
  // reviews
  reviewsHeading: string;
  // download
  downloadAvailHtml: string;
  needHelp: string;
  needHelpTitle: string;
  volumeLicensing: string;
  getPresskit: string;
  getPresskitTitle: string;
  // video popup default title
  videoPopupTitle: string;
}

export interface EduStrings {
  tagline: string;               // "a music teacher's swiss-army knife"
  introSloganHtml: string;
  introSecondHtml: string;
  featuresSloganHtml: string;
  featuresDescHtml: string;
  featuresList: string[];        // 4 bullet items
  seeHowItWorks: string;
  polyLinkTitle: string;
  lessonsSloganHtml: string;
  lessonsDescHtml: string;
  trainerSloganHtml: string;
  trainerDescHtml: string;
  trainerLinkTitle: string;
  downloadSloganHtml: string;
  learnMore: string;
  contactTitle: string;
  contactDesc: string;
  videoPopupTitle: string;
}

export interface SupportFaq { q: string; a: string; }
export interface SupportVideo { title: string; blurb: string; }
export interface SupportGuideBlock {
  heading: string;
  itemsHtml: string[];           // <li> inner HTML
  watchLabel: string;            // "Watch: ..." link text
}

export interface SupportStrings {
  headingHtml: string;           // "<em>Pro Metronome</em> Support"
  intro: string;
  aiHeading: string;
  aiBodyHtml: string;
  copyLink: string;
  copied: string;
  aiHintHtml: string;
  quickGuideHeading: string;
  guide: SupportGuideBlock[];    // 7 blocks, in order
  videosHeading: string;
  videosIntroHtml: string;
  videos: SupportVideo[];        // 5 blurbs (titles localized too)
  faqHeading: string;
  faqs: SupportFaq[];            // 10 items
  contactHeading: string;
  contactBodyHtml: string;
  emailHeading: string;
}

export interface Strings {
  nav: NavStrings;
  footer: FooterStrings;
  switcher: SwitcherStrings;
  proMetronome: ProMetronomeStrings;
  edu: EduStrings;
  support: SupportStrings;
  meta: {
    proMetronome: MetaStrings;
    edu: MetaStrings;
    support: MetaStrings;
  };
}
