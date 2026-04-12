export const SA_COLORS = {
  black: '#000000',
  gold: '#FFB81C',
  green: '#007749',
  red: '#DE3831',
  blue: '#002395',
  white: '#FFFFFF',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = {
  whatsapp: 'https://chat.whatsapp.com/FToaUJiXJr8LUzxdXMi2yw?mode=gi_t',
  facebook: 'https://www.facebook.com/groups/saif.freiburg',
  instagram: 'https://instagram.com/saif_freiburg',
} as const;

export const COMMUNITY_VALUES = [
  {
    emoji: '\u{1F525}',
    title: 'Braai',
    description: 'Fire brings us together',
    color: 'sa-red',
  },
  {
    emoji: '\u{1F3C9}',
    title: 'Rugby',
    description: 'We bleed green and gold',
    color: 'sa-green',
  },
  {
    emoji: '\u{1F969}',
    title: 'Biltong',
    description: 'A taste of home',
    color: 'sa-gold',
  },
  {
    emoji: '\u{1F389}',
    title: 'Gees',
    description: 'The vibe is always lekker',
    color: 'sa-blue',
  },
  {
    emoji: '\u{1F30D}',
    title: 'Ubuntu',
    description: 'I am because we are',
    color: 'sa-green',
  },
  {
    emoji: '\u{1F332}',
    title: 'Black Forest',
    description: 'Our beautiful second home',
    color: 'forest',
  },
] as const;

export const FLAGSHIP_EVENTS = [
  {
    icon: '\u{2600}\u{FE0F}',
    title: 'SAiF Summer Braai',
    date: 'Saturday, 25 July 2026 — from 15:00',
    description:
      'Our annual highlight! Gather around the fire for a proper South African braai with boerewors, sosaties, and all the trimmings. Bring your camp chairs and your best braai stories.',
    location: 'Ganter Biergarten, Leo-Wohleb-Straße 4, 79098 Freiburg',
    color: 'sa-gold',
  },
  {
    icon: '\u{1F384}',
    title: 'SAiF Christmas Party',
    date: 'Date TBC',
    description:
      'A warm, festive get-together to close the year. Think mince pies meet Gl\u00FChwein, carols meet kuier, and good old South African hospitality in the heart of winter.',
    location: 'Location TBC',
    color: 'sa-red',
  },
] as const;

export const ADHOC_EVENTS = [
  { icon: '\u{1F97E}', title: 'Black Forest Hiking', description: 'Explore stunning trails together' },
  { icon: '\u{1F9FA}', title: 'Picnics in the Park', description: 'Sunny days, good company' },
  { icon: '\u{1F3B2}', title: 'Games Nights', description: '30 Seconds, Monopoly & more' },
  { icon: '\u{1F3C9}', title: 'Rugby Watching', description: 'Bokke! Need we say more?' },
  { icon: '\u{26BD}', title: 'Football Watch Parties', description: 'Bafana Bafana & Bundesliga' },
  { icon: '\u{1F37B}', title: 'Social Get-togethers', description: 'Just a lekker jol' },
] as const;

export const GALLERY_ITEMS = [
  { label: 'Summer Braai 2025', color: 'bg-amber-700' },
  { label: 'Christmas Party 2024', color: 'bg-red-800' },
  { label: 'Black Forest Hike', color: 'bg-green-800' },
  { label: 'Rugby Night', color: 'bg-emerald-700' },
  { label: 'Picnic at Seepark', color: 'bg-sky-700' },
  { label: 'Heritage Day Braai', color: 'bg-yellow-700' },
  { label: 'New Year\u2019s Gathering', color: 'bg-purple-800' },
  { label: 'Freiburg Exploration', color: 'bg-teal-700' },
] as const;

export const SA_PHRASES = [
  { phrase: 'Lekker', translation: 'Great / Nice / Awesome', example: '"The braai was lekker!"' },
  { phrase: 'Braai', translation: 'Barbecue (but SO much more)', example: '"Come over for a braai this weekend"' },
  { phrase: 'Howzit', translation: "Hello / How's it going", example: '"Howzit, bru!"' },
  { phrase: 'Just now', translation: 'At some unspecified time in the future', example: '"I\'ll do it just now" (could be hours)' },
  { phrase: 'Now now', translation: 'Soon-ish (sooner than "just now")', example: '"I\'m coming now now"' },
  { phrase: 'Eish', translation: 'Expression of surprise or frustration', example: '"Eish, load shedding again!"' },
  { phrase: 'Biltong', translation: 'Dried cured meat (the superior snack)', example: '"Pass the biltong, please"' },
  { phrase: 'Gees', translation: 'Spirit / Vibe / Energy', example: '"The gees at the rugby was insane!"' },
  { phrase: 'Ubuntu', translation: 'I am because we are', example: 'A philosophy of shared humanity' },
  { phrase: 'Jol', translation: 'Party / Good time', example: '"Last night was a proper jol"' },
  { phrase: 'Boerewors', translation: 'Traditional SA sausage', example: '"No braai is complete without boerewors"' },
  { phrase: 'Shebeen', translation: 'Informal bar or tavern', example: '"Let\'s check out the local shebeen"' },
  { phrase: 'Ag', translation: 'Oh / expression of resignation', example: '"Ag, it\'s fine man"' },
  { phrase: 'Voetsek', translation: 'Go away! (strong)', example: '"Voetsek!" (usually directed at dogs)' },
  { phrase: 'Bakkie', translation: 'Pickup truck', example: '"Throw it in the back of the bakkie"' },
] as const;

export const LEKKER_LINKS = {
  'SA in Germany': [
    { label: 'SA Embassy in Berlin', url: 'https://www.suedafrika.org', description: 'Consular services & info' },
    { label: 'Anmeldung Guide', url: '#', description: 'Registration tips for newcomers' },
    { label: 'SA Products in the Region', url: '#', description: 'Where to find biltong, rooibos, Mrs Balls & more' },
  ],
  'Freiburg & Black Forest': [
    { label: 'Top Black Forest Trails', url: 'https://www.blackforest-tourism.com', description: 'Hiking & nature' },
    { label: 'Freiburg Events Calendar', url: 'https://www.freiburg.de/events', description: 'What\'s happening locally' },
    { label: 'VAG — Public Transport', url: 'https://www.vag-freiburg.de', description: 'Buses & trams' },
    { label: 'Freiburg Tourist Info', url: 'https://www.visit.freiburg.de', description: 'For visitors & newcomers' },
  ],
  'Community Resources': [
    { label: 'New to Freiburg? Welcome Guide', url: '#', description: 'Everything you need to know' },
    { label: 'German Language Courses', url: '#', description: 'VHS & local options' },
    { label: 'Expat Tips & Tricks', url: '#', description: 'Navigating life in Germany' },
  ],
} as const;

export const WEATHER_MESSAGES = {
  hot: { min: 25, message: "Perfect braai weather, bru!" },
  warm: { min: 18, message: "Lekker day for a braai in the park!" },
  mild: { min: 12, message: "Still braai weather if you\u2019re brave enough!" },
  cool: { min: 5, message: "Potjie weather \u2014 time for something warm" },
  cold: { min: -5, message: "Eish, not even a potjie can fix this cold" },
  freezing: { min: -100, message: "Ag no, we didn\u2019t sign up for this!" },
} as const;
