export const org = {
  name: "Muslim Medical Mission",
  legalName: "Muslim Medical Mission Foundation",
  short: "MMM",
  motto: "Wisdom, Action, Service for Allah for Right",
  founded: 2006,
  phone: "+92 321 424 4433",
  phoneHref: "tel:+923214244433",
  whatsapp: "https://wa.me/923214244433",
  email: "medicalmissionpak@gmail.com",
  address: {
    line1: "C Block, Bank Square Market",
    line2: "Model Town, Lahore",
    country: "Punjab, Pakistan",
  },
  social: [
    { name: "Facebook", href: "https://facebook.com/MMMPakOfficial" },
    { name: "Instagram", href: "https://instagram.com/MMMPakOfficial" },
    { name: "X", href: "https://x.com/MMMPakOfficial" },
    { name: "YouTube", href: "https://youtube.com/@mmmpakofficial" },
  ],
  bank: {
    title: "Muslim Medical Mission Foundation",
    bank: "United Bank Limited (UBL)",
    account: "0635338617189",
    iban: "PK50UNIL0109000338617189",
    branch: "0635, C Block Bank Square Market, Model Town, Lahore",
  },
  mobileWallets: "JazzCash and EasyPaisa: 0321 4244433",
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type MegaColumn = {
  heading: string;
  links: { label: string; href: string; note?: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  /** One line of framing shown beside the links in the mega panel. */
  blurb?: string;
  columns?: MegaColumn[];
  feature?: {
    title: string;
    body: string;
    href: string;
    cta: string;
    image: string;
  };
};

export const nav: NavItem[] = [
  {
    label: "About us",
    href: "/about",
    blurb:
      "Volunteer led since 2006, run by practising clinicians who take leave from their own jobs.",
    columns: [
      {
        heading: "The organisation",
        links: [
          { label: "Who we are", href: "/about", note: "Volunteer led since 2006" },
          { label: "Mission and vision", href: "/about#mission" },
          { label: "Our means", href: "/about#means" },
          { label: "Where we work", href: "/about#reach" },
        ],
      },
      {
        heading: "Accountability",
        links: [
          { label: "How your donation is spent", href: "/donate#allocation" },
          { label: "Field reports", href: "/media" },
          { label: "Contact the team", href: "/contact" },
        ],
      },
    ],
    feature: {
      title: "The doctors who stayed",
      body: "When the Indus broke its banks at Taunsa, our teams set up camp the same week and did not leave until the water did.",
      href: "/disaster-response",
      cta: "Read the flood response",
      image: "/media/disaster/disaster-05.jpg",
    },
  },
  {
    label: "What we do",
    href: "/what-we-do",
    blurb:
      "Eleven programmes across two countries. Every one of them free at the point of delivery.",
    columns: [
      {
        heading: "In Pakistan",
        links: [
          { label: "Flood emergency medical camps", href: "/what-we-do/flood-medical-camps" },
          { label: "Flood relief distribution", href: "/what-we-do/flood-relief" },
          { label: "Health education campaigns", href: "/what-we-do/health-education" },
          { label: "Save Vision", href: "/what-we-do/save-vision" },
          { label: "Medical care in prisons", href: "/what-we-do/prison-healthcare" },
        ],
      },
      {
        heading: "In Gaza",
        links: [
          { label: "Field clinics", href: "/what-we-do/gaza-field-clinics" },
          { label: "Food parcels and hot meals", href: "/what-we-do/food-parcels-gaza" },
          { label: "Water for Life", href: "/what-we-do/water-for-life" },
          { label: "Winter packages", href: "/what-we-do/winter-packages" },
        ],
      },
      {
        heading: "People",
        links: [
          { label: "Paramedic training", href: "/what-we-do/training" },
          { label: "Professional development", href: "/what-we-do/professional-development" },
          { label: "Volunteer with us", href: "/get-involved" },
          { label: "Partner with us", href: "/get-involved#partners" },
        ],
      },
    ],
    feature: {
      title: "Field clinics in Gaza",
      body: "Pakistani paramedic and clinical teams working out of shelters and tented treatment areas.",
      href: "/what-we-do/gaza-field-clinics",
      cta: "See the programme",
      image: "/media/medical/medical-45.jpg",
    },
  },
  {
    label: "Disaster response",
    href: "/disaster-response",
  },
  {
    label: "Media",
    href: "/media",
    blurb:
      "Photographs and reports from the teams who were standing in them.",
    columns: [
      {
        heading: "Newsroom",
        links: [
          { label: "Field reports", href: "/media" },
          { label: "Photo library", href: "/media#gallery" },
          { label: "Video", href: "/media#video" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Health campaigns", href: "/what-we-do/health-education" },
          { label: "For journalists", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Get involved",
    href: "/get-involved",
  },
];

/* ------------------------------------------------------------------ */
/* Impact                                                              */
/* ------------------------------------------------------------------ */

export const impactStats = [
  {
    value: 500,
    suffix: "+",
    label: "Patients seen in a single deployment",
    detail: "Free consultation and medicine, Dera Ghazi Khan",
  },
  {
    value: 19,
    suffix: " yrs",
    label: "Of continuous service",
    detail: "Volunteer led, without a paid fundraising arm",
  },
  {
    value: 4,
    suffix: "",
    label: "Provinces reached",
    detail: "Punjab, Sindh, Balochistan, Khyber Pakhtunkhwa",
  },
  {
    value: 2,
    suffix: "",
    label: "Countries served",
    detail: "Pakistan and Gaza",
  },
];

/* ------------------------------------------------------------------ */
/* Programmes                                                          */
/* ------------------------------------------------------------------ */

export type Accent = "blue" | "magenta" | "navy" | "cyan";

export type Program = {
  slug: string;
  title: string;
  region: "Pakistan" | "Gaza" | "Pakistan and Gaza";
  summary: string;
  body: string[];
  image: string;
  gallery: string[];
  accent: Accent;
  highlights: { label: string; value: string }[];
};

export const programs: Program[] = [
  {
    slug: "flood-medical-camps",
    title: "Flood emergency medical camps",
    region: "Pakistan",
    summary:
      "Medical teams deploy into the riverine belt while the water is still standing, running free clinics out of whatever building has a dry floor.",
    body: [
      "When the Indus breaks its banks, the first thing to fail is not the road. It is healthcare. Rural dispensaries flood, staff evacuate with their own families, and a population already living close to the margin is left with standing water, no clean supply and nowhere to take a sick child.",
      "Our teams run free camps through the emergency and after it. The drug list is built for what floods actually produce, gastroenteritis, skin and wound infection, snakebite, respiratory illness and chronic conditions that have gone unmedicated for weeks. Consultation, diagnosis and a full course of medicine are provided free, because a prescription a family cannot fill is not treatment.",
      "In one deployment across Dera Ghazi Khan, senior doctors ran four camps back to back and more than 500 patients were seen.",
    ],
    image: "/media/disaster/disaster-06.jpg",
    gallery: [
      "/media/disaster/disaster-05.jpg",
      "/media/disaster/disaster-11.jpg",
      "/media/disaster/disaster-14.jpg",
      "/media/disaster/disaster-10.jpg",
    ],
    accent: "blue",
    highlights: [
      { label: "One patient, seen and medicated", value: "PKR 600" },
      { label: "Patients in one deployment", value: "500+" },
      { label: "Charge to the patient", value: "Nothing" },
    ],
  },
  {
    slug: "flood-relief",
    title: "Flood relief distribution",
    region: "Pakistan",
    summary:
      "Staple food, clean water and cash reach households in South Punjab and Balochistan through volunteers who know which families lost everything.",
    body: [
      "Homes built of mud and cane do not survive standing water. In villages such as Mangrotha, on the edge of Taunsa city, families came back to a flattened plot and a season of income gone with it.",
      "Distribution runs through local volunteers rather than a list handed down from a city office, because the people who know which household is quietly going without are the people who live next door to it. Bulk purchase before the local market price climbs is the difference between supplying one family and supplying three.",
      "Alongside food we distribute clean drinking water and, where a household has lost its livelihood entirely, direct cash assistance.",
    ],
    image: "/media/disaster/disaster-13.jpg",
    gallery: [
      "/media/disaster/disaster-07.jpg",
      "/media/disaster/disaster-12.jpg",
      "/media/disaster/disaster-03.jpg",
      "/media/disaster/disaster-08.jpg",
    ],
    accent: "magenta",
    highlights: [
      { label: "Reached", value: "South Punjab and Balochistan" },
      { label: "Distributed by", value: "Local volunteers" },
      { label: "Bought", value: "In bulk, before prices rise" },
    ],
  },
  {
    slug: "gaza-field-clinics",
    title: "Field clinics in Gaza",
    region: "Gaza",
    summary:
      "Paramedic and clinical teams running consultations, dressings, dispensing and paediatric care inside shelters and tented clinics.",
    body: [
      "Our Gaza clinics operate where a health system has effectively stopped. Teams work out of shelter rooms and tented treatment areas, seeing whoever presents, with a caseload dominated by wound care, respiratory infection, skin disease, malnutrition and untreated chronic illness.",
      "The work is unglamorous and repetitive and it is what keeps people alive: dressings changed properly, antibiotics dispensed as a full course rather than a partial one, blood pressures taken, children weighed, and referral arranged for anything beyond what a tent can hold.",
      "Everything is carried under one banner, emergency relief from the people of Pakistan to the people of Gaza, and delivered by Pakistani clinicians alongside local staff.",
    ],
    image: "/media/medical/medical-45.jpg",
    gallery: [
      "/media/medical/medical-28.jpg",
      "/media/medical/medical-34.jpg",
      "/media/medical/medical-43.jpg",
      "/media/medical/medical-47.jpg",
      "/media/medical/medical-17.jpg",
      "/media/medical/medical-13.jpg",
    ],
    accent: "cyan",
    highlights: [
      { label: "Delivered by", value: "Paramedic and clinical teams" },
      { label: "Caseload", value: "Wounds, infection, paediatrics" },
      { label: "Charge to the patient", value: "Nothing" },
    ],
  },
  {
    slug: "food-parcels-gaza",
    title: "Food parcels and hot meals",
    region: "Gaza",
    summary:
      "Family food parcels handed over at the shelter door, and hot meals cooked and served where families have no way to cook at all.",
    body: [
      "A displaced family living in a tent has no reliable way to store or cook food. Two things follow from that. Parcels have to be built around what can actually be prepared with what a household has, and where nothing can be prepared, the meal has to arrive cooked.",
      "We do both. Parcels go out household by household with the recipient recorded, so the same families are not served twice while their neighbours go without. Hot meals are cooked in bulk and distributed on a fixed rota so people are not queuing on rumour.",
    ],
    image: "/media/ration/ration-02.jpg",
    gallery: [
      "/media/ration/ration-05.jpg",
      "/media/ration/ration-08.jpg",
      "/media/ration/ration-12.jpg",
      "/media/gaza-food/gaza-food-04.png",
      "/media/gaza-food/gaza-food-11.png",
      "/media/ration/ration-16.jpg",
    ],
    accent: "magenta",
    highlights: [
      { label: "One family food parcel", value: "PKR 12,000" },
      { label: "Feeds", value: "A household for a month" },
      { label: "Tracked", value: "Household by household" },
    ],
  },
  {
    slug: "water-for-life",
    title: "Water for Life",
    region: "Gaza",
    summary:
      "Drinking water trucked into displacement camps where the mains are broken and the alternative is contaminated groundwater.",
    body: [
      "When water infrastructure fails, disease follows within days. Our tankers run drinking water into displacement camps and shelters, filling household containers and communal tanks on a fixed rota.",
      "It is the least complicated intervention we fund and, in a camp of several thousand people with no functioning mains, the one that prevents the most illness. Each tanker is branded so people know who to hold accountable if it does not arrive.",
    ],
    image: "/media/gaza-water/gaza-water-01.jpg",
    gallery: [
      "/media/gaza-water/gaza-water-03.jpg",
      "/media/gaza-water/gaza-water-04.jpg",
      "/media/gaza-water/gaza-water-05.jpg",
      "/media/gaza-water/gaza-water-06.jpg",
    ],
    accent: "blue",
    highlights: [
      { label: "One water tanker", value: "PKR 45,000" },
      { label: "Serves", value: "Several hundred people" },
      { label: "Prevents", value: "Waterborne outbreaks" },
    ],
  },
  {
    slug: "winter-packages",
    title: "Winter packages",
    region: "Gaza",
    summary:
      "Quilts, blankets and warm clothing for families living under canvas through a Gaza winter.",
    body: [
      "A tent gives shelter from rain and almost nothing against cold. Winter kills infants and the elderly in canvas shelters every year, and it does so quietly, without making the news.",
      "Each package contains a heavy quilt, blankets and warm clothing sized for the children in the household. Distribution is recorded the same way food is, so coverage can be checked rather than assumed.",
    ],
    image: "/media/gaza-winter/gaza-winter-11.jpg",
    gallery: [
      "/media/gaza-winter/gaza-winter-03.jpg",
      "/media/gaza-winter/gaza-winter-06.jpg",
      "/media/gaza-winter/gaza-winter-08.jpg",
      "/media/gaza-winter/gaza-winter-12.jpg",
    ],
    accent: "navy",
    highlights: [
      { label: "One winter package", value: "PKR 9,000" },
      { label: "Contains", value: "Quilt, blankets, warm clothing" },
      { label: "Tracked", value: "Household by household" },
    ],
  },
  {
    slug: "health-education",
    title: "Health education campaigns",
    region: "Pakistan",
    summary:
      "Public awareness work on outbreaks, hygiene, maternal health and vaccination, delivered through mosques, schools and community halls.",
    body: [
      "Most of the illness our doctors see in the field was preventable. Clean water handling, hand hygiene, recognising the warning signs in a sick infant and knowing when a fever needs a clinic rather than a home remedy will save more lives than any single camp.",
      "We run campaigns through the institutions people already trust, mosques, schools and community elders, in the language they actually speak, and we return to the same places so the message is not a one off visit.",
    ],
    image: "/media/brand/health-campaign.jpg",
    gallery: ["/media/brand/community-gathering.jpg"],
    accent: "magenta",
    highlights: [
      { label: "Channels", value: "Mosques, schools, community" },
      { label: "Topics", value: "Outbreaks, hygiene, maternal health" },
      { label: "Method", value: "Repeat visits, local language" },
    ],
  },
  {
    slug: "professional-development",
    title: "Professional development",
    region: "Pakistan",
    summary:
      "Continuing education for Muslim healthcare professionals, and the ethical grounding that sits underneath the clinical work.",
    body: [
      "Our founding purpose is not only to treat people. It is to form healthcare professionals whose conduct at home and abroad reflects the faith they profess, and who understand that the way a patient is spoken to is part of the treatment.",
      "We run continuing education sessions, mentoring for students and junior doctors, and study circles on Islamic medical ethics, because a mission that trains no successors ends with its founders.",
    ],
    image: "/media/brand/mmm-lahore-2015.jpg",
    gallery: [],
    accent: "navy",
    highlights: [
      { label: "For", value: "Students and practising clinicians" },
      { label: "Includes", value: "CPD, mentoring, ethics" },
      { label: "Purpose", value: "Succession, not dependency" },
    ],
  },
  {
    slug: "save-vision",
    title: "Save Vision",
    region: "Pakistan",
    summary:
      "Cataract screening, spectacles and referral for surgery, aimed at rural elders who lose their sight to a condition that takes twenty minutes to correct.",
    body: [
      "Avoidable blindness is one of the cruellest inequalities in rural Pakistan. Cataract is straightforward to operate on and the surgery is short, yet thousands of older people lose their independence to it because nobody screened them and nobody could get them to a theatre.",
      "Save Vision screens at the camps we run, dispenses reading glasses on the spot and refers surgical cases into partner hospitals, following each patient through to the operation rather than handing over a slip of paper and hoping.",
    ],
    image: "",
    gallery: [],
    accent: "cyan",
    highlights: [
      { label: "Screening", value: "At every camp" },
      { label: "Spectacles", value: "Dispensed on site" },
      { label: "Surgical cases", value: "Followed to theatre" },
    ],
  },
  {
    slug: "prison-healthcare",
    title: "Medical care in prisons",
    region: "Pakistan",
    summary:
      "Scheduled clinical rounds inside correctional facilities, where healthcare is thin and communicable disease moves quickly.",
    body: [
      "Prisoners are among the least visible patients in the country. Overcrowding turns a single case of tuberculosis or hepatitis into an outbreak, and routine complaints go unexamined for months.",
      "Our teams hold scheduled clinics inside correctional facilities, treat what can be treated on site, screen for communicable disease and press for transfer where a case needs a hospital. It is unglamorous work, and it is precisely the work our mission asks of us.",
    ],
    image: "",
    gallery: [],
    accent: "navy",
    highlights: [
      { label: "Priority", value: "Communicable disease" },
      { label: "Model", value: "Scheduled clinical rounds" },
      { label: "Escalation", value: "Hospital referral" },
    ],
  },
  {
    slug: "training",
    title: "Paramedic and first responder training",
    region: "Pakistan",
    summary:
      "Turning volunteers into people who can hold a scene, stop a bleed and keep an airway open until a doctor arrives.",
    body: [
      "In most of the districts we work in, the first person to reach a casualty is not an ambulance crew. It is a neighbour. Training that neighbour properly is the highest return intervention available to us.",
      "Our courses cover basic life support, haemorrhage control, fracture management, safe transport and triage, and they end with an assessment rather than a certificate handed out for attendance. Graduates form the standing teams that deploy when a district floods.",
    ],
    image: "",
    gallery: [],
    accent: "blue",
    highlights: [
      { label: "Covers", value: "Life support, bleeding, triage" },
      { label: "Ends with", value: "Assessment, not attendance" },
      { label: "Feeds", value: "District response teams" },
    ],
  },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* Giving                                                              */
/* ------------------------------------------------------------------ */

export const givingTiers = [
  {
    amount: "3,000",
    title: "Five patients seen",
    body: "Consultation, diagnosis and a full course of medicine for five people at a rural camp.",
    accent: "blue" as Accent,
  },
  {
    amount: "9,000",
    title: "One family kept warm",
    body: "A winter package of quilt, blankets and warm clothing for a household living under canvas.",
    accent: "navy" as Accent,
  },
  {
    amount: "12,000",
    title: "A family fed for a month",
    body: "A full food parcel for a displaced household, built around what can be cooked in a shelter.",
    accent: "magenta" as Accent,
  },
  {
    amount: "45,000",
    title: "A water tanker delivered",
    body: "Clean drinking water trucked into a displacement camp where the mains no longer run.",
    accent: "cyan" as Accent,
  },
];

export const allocation = [
  { label: "Direct programme delivery", value: 88 },
  { label: "Logistics and field transport", value: 8 },
  { label: "Administration", value: 4 },
];

/* ------------------------------------------------------------------ */
/* Field reports                                                       */
/* ------------------------------------------------------------------ */

export const reports = [
  {
    slug: "taunsa-flood-response",
    title: "Four medical camps in a week as the Indus rises at Taunsa Sharif",
    place: "Taunsa Sharif, Dera Ghazi Khan",
    kind: "Flood response",
    excerpt:
      "Teams led by General Secretary Dr Nasir Hamdani moved into Tehsil Taunsa Sharif as the water came up, running camps out of whatever building still had a dry floor.",
    image: "/media/disaster/disaster-11.jpg",
  },
  {
    slug: "mangrotha-village",
    title: "Mangrotha, a village on the edge of Taunsa city, taken by the flood",
    place: "Mangrotha, South Punjab",
    kind: "Flood response",
    excerpt:
      "Homes built of mud and cane do not survive standing water. Our teams reached Mangrotha with rations, clean water and a clinical team while the ground was still soft.",
    image: "/media/disaster/disaster-09.jpg",
  },
  {
    slug: "five-hundred-patients",
    title: "More than 500 patients given free consultation and medicine in one deployment",
    place: "Dera Ghazi Khan",
    kind: "Medical camps",
    excerpt:
      "Senior doctors ran four camps back to back. Every consultation, every test we could carry and every prescription was free at the point of care.",
    image: "/media/disaster/disaster-06.jpg",
  },
  {
    slug: "rations-south-punjab",
    title: "Rations reach flood affected families across South Punjab and Balochistan",
    place: "South Punjab and Balochistan",
    kind: "Relief distribution",
    excerpt:
      "Distribution ran through local volunteers who knew the households, not through a list handed down from a city office.",
    image: "/media/disaster/disaster-13.jpg",
  },
];

/* ------------------------------------------------------------------ */
/* Values                                                              */
/* ------------------------------------------------------------------ */

export const values = [
  {
    key: "Wisdom",
    body: "We go where the need is measured, not where the coverage is best. Every deployment starts with an assessment and ends with a count.",
  },
  {
    key: "Action",
    body: "Our teams are on the ground in the first week of an emergency, because relief that arrives after the cameras leave is not relief.",
  },
  {
    key: "Service",
    body: "Care is free at the point of delivery, without exception, and without asking a patient what they believe or who they voted for.",
  },
  {
    key: "For Allah",
    body: "The work is worship. That is the whole reason it continues in districts where no funder is watching and no reporter will visit.",
  },
];

/* ------------------------------------------------------------------ */
/* Where we work                                                       */
/* ------------------------------------------------------------------ */

export const regions = [
  {
    name: "South Punjab",
    detail: "Dera Ghazi Khan, Taunsa Sharif, Mangrotha and the riverine belt along the Indus.",
    focus: "Flood response, medical camps, rations",
  },
  {
    name: "Lahore and central Punjab",
    detail: "Our base of operations, where training, professional development and prison clinics are run.",
    focus: "Training, prison healthcare, campaigns",
  },
  {
    name: "Balochistan and Sindh",
    detail: "Ration and clean water distribution in districts cut off by monsoon flooding.",
    focus: "Rations, clean water",
  },
  {
    name: "Gaza",
    detail: "Water trucking, hot meals, food parcels and winter packages into displacement camps.",
    focus: "Water, food, winter relief",
  },
];
