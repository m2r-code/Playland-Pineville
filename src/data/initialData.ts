import { AdmissionPricing, PartyPackage, AttractionItem, GalleryPhoto, FaqItem } from '../types';
import { IMAGES } from '../assets/images';

export const BUSINESS_INFO = {
  name: 'Playland Pineville',
  legalName: 'Playland Pineville, LLC',
  address: '11812 Carolina Place Parkway',
  cityStateZip: 'Pineville, NC 28134, USA',
  fullAddress: '11812 Carolina Place Parkway, Pineville, NC 28134, USA',
  phone: '704-900-7581',
  phoneClean: 'tel:7049007581',
  generalEmail: 'info@playlandnc.com',
  partyEmail: 'pinevilleparties@gmail.com',
  concept: 'PLAY. SIP. CONNECT.',
  tagline: 'A Happy Place for Little Adventures and Family Moments.',
  usp: 'Where little ones play and parents enjoy their moment.',
  googleMapsUrl: 'https://maps.google.com/?q=11812+Carolina+Place+Parkway+Pineville+NC+28134',
  aluviiBookingUrl: 'https://playlandpineville.aluvii.com/store/shop/categoryproducts?id=1',
  aluviiWaiverUrl: 'https://playlandpineville.aluvii.com/guest/waiver',
  aluviiGiftCardsUrl: 'https://playlandpineville.aluvii.com/store/shop/categoryproducts?id=2',
  hours: [
    { days: 'Monday – Thursday', time: '9:30 AM – 6:00 PM', note: 'Walk-ins welcome' },
    { days: 'Friday', time: '9:30 AM – 7:00 PM', note: 'Weekend tickets released Wednesdays' },
    { days: 'Saturday', time: '9:30 AM – 7:00 PM', note: 'Advance booking recommended' },
    { days: 'Sunday', time: '11:00 AM – 6:00 PM', note: 'Family play & celebrations' },
  ],
};

export const DEFAULT_ADMISSION_PRICING: AdmissionPricing = {
  firstChildWeekday: 14.99,
  firstChildWeekend: 16.99,
  siblingWeekday: 12.99,
  siblingWeekend: 14.99,
  infantPrice: 0, // Free with paid sibling
  freeAdultsPerFamily: 2,
  additionalAdultWeekday: 5.99,
  additionalAdultWeekend: 10.99,
  playSessionDurationHours: 2,
};

export const DEFAULT_PARTY_PACKAGES: PartyPackage[] = [
  {
    id: 'weekday-party',
    name: 'Weekday Party',
    price: 250,
    priceNote: 'Monday – Thursday',
    maxKids: 10,
    roomDuration: '2 Hours in Private Party Room',
    playtimeDuration: 'Unlimited playtime subject to conditions',
    description: 'Perfect weekday celebration with intimate friends and relaxed play without weekend crowds.',
    features: [
      'Up to 10 children included',
      'Two-hour private party room',
      'Unlimited playground play subject to conditions',
      'Complete party paper supplies & room setup',
      'Dedicated Playland party host assistance',
      'Two free adult admissions per child',
      'Outside food & birthday cake welcome in party room',
    ],
  },
  {
    id: 'basic-party',
    name: 'Basic Party',
    price: 375,
    priceNote: 'Friday – Sunday & Holidays',
    maxKids: 10,
    roomDuration: '2 Hours in Private Party Room',
    playtimeDuration: '2 Hours full access playtime',
    description: 'Our most popular weekend package for milestone birthdays with high energy and cheerful fun.',
    popular: true,
    features: [
      'Up to 10 children included',
      'Two-hour themed private party room',
      'Full two hours of playground excitement',
      'High-quality colorful party supplies & table setting',
      'Playland birthday party extras & special greeting',
      'Full setup and hassle-free cleanup handled by our team',
      'Bring your own birthday cake and favorite snacks',
    ],
  },
  {
    id: 'supreme-party',
    name: 'Supreme Party',
    price: 525,
    priceNote: 'Friday – Sunday & Holidays',
    maxKids: 20,
    roomDuration: '2 Hours in Expanded Party Room',
    playtimeDuration: '2 Hours full access playtime',
    description: 'Ideal for larger classroom groups, big family circles, and extra joyful celebrations.',
    features: [
      'Up to 20 children included (double capacity)',
      'Spacious double-sized party room for 2 hours',
      'Full two hours of playground adventure',
      'Deluxe tableware, paper goods & balloon decor',
      'Special Playland gift for the birthday child',
      'Full setup, ongoing assistance, and complete cleanup',
      'Bring your favorite cake, cupcakes & catering',
    ],
  },
  {
    id: 'private-facility',
    name: 'Fully Private Package',
    weekdayPrice: 800,
    weekendPrice: 1400,
    priceNote: 'Mon–Thu: $800 | Fri–Sun: $1,400',
    maxKids: 30,
    roomDuration: 'Entire Facility Reserved for 2 Hours',
    playtimeDuration: 'Private VIP access across the whole park',
    description: 'The ultimate VIP experience. The entire indoor playground and café closed exclusively for your guests.',
    features: [
      'Up to 30 children included (additional guests available)',
      '100% Private use of the entire facility & play structure',
      'Dedicated café barista staffing for your party guests',
      'Custom music playlist and celebratory lighting',
      'Unlimited accompanying adults at no extra charge',
      'Bring your own catering or work with local Pineville vendors',
      'Comprehensive setup, floor monitoring, and VIP teardown',
    ],
  },
];

export const PLAYGROUND_ATTRACTIONS: AttractionItem[] = [
  {
    id: 'giant-slides',
    title: 'Giant Slides',
    shortDesc: 'Twin enclosed spirals and multi-lane speed slides engineered for thrilling yet gentle landings.',
    longDesc: 'Our centerpiece giant twin spiral slides in signature teal and orange deliver exhilarating drops into soft cushioned exit zones. Designed with ultra-smooth anti-friction material and high safety barriers for safe continuous fun.',
    image: IMAGES.giantSlidesBallpit,
    tags: ['Ages 3–10', 'High Energy', 'Spiral Slides'],
  },
  {
    id: 'ball-pits',
    title: 'Ball Pits',
    shortDesc: 'Deep seas of vibrant sanitized turquoise and sunshine yellow balls for immersive sensory joy.',
    longDesc: 'Kids love diving and splashing through thousands of medical-grade, pressure-tested plastic balls. Sanitized daily using our automated sanitizing cycle to guarantee pure cleanliness and hygienic peace of mind.',
    image: IMAGES.giantSlidesBallpit,
    tags: ['All Ages', 'Sensory Play', 'Daily Sanitized'],
  },
  {
    id: 'climbing-structures',
    title: 'Climbing Structures',
    shortDesc: 'Multi-tiered soft obstacle mazes, rope webs, and climbing walls that develop agility and confidence.',
    longDesc: 'A 3-story labyrinth of padded vertical climbs, honeycomb platforms, and safety net-enclosed tiers. Children build spatial awareness, motor skills, and balance in a 100% foam-cushioned environment.',
    image: IMAGES.heroPlayground,
    tags: ['Active Play', 'Motor Skills', 'Padded Safety'],
  },
  {
    id: 'tunnels-bridges',
    title: 'Tunnels & Bridges',
    shortDesc: 'Suspended rope walkway bridges, transparent lookout tubes, and zigzag crawl passages.',
    longDesc: 'Elevated suspension bridges allow kids to cross the play zone high above the floor with panoramic views through safety netting. Transparent circular bubble windows let little explorers wave down to parents sipping coffee.',
    image: IMAGES.heroPlayground,
    tags: ['Adventure', 'Exploration', 'Aerial Views'],
  },
  {
    id: 'toddler-play-area',
    title: 'Toddler Play Area',
    shortDesc: 'Dedicated soft pastel sanctuary exclusively for babies and toddlers under 3 years old.',
    longDesc: 'Separated from the bustling big-kid zone by low cushioned partitions, our toddler area features gentle foam stairs, low-angle mini slides, interactive sensory gear walls, and a miniature ball pool designed specifically for early walkers.',
    image: IMAGES.toddlerSoftPlay,
    tags: ['Ages 0–3', 'Soft Foam', 'Sensory Walls'],
  },
  {
    id: 'interactive-play',
    title: 'Interactive Play Experiences',
    shortDesc: 'Engaging tactile game panels, giant foam building blocks, and sensory wall puzzles.',
    longDesc: 'Beyond running and climbing, children enjoy mind-stimulating activities including magnetic gear wheels, tactile tactile maze boards, giant architectural building blocks, and cooperative games that spark friendship.',
    image: IMAGES.toddlerSoftPlay,
    tags: ['Creative Thinking', 'Cooperative', 'Mind & Motion'],
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Playland Main Climbing Center',
    category: 'playground',
    image: IMAGES.heroPlayground,
    caption: 'Spacious multi-tiered playground with natural light, orange and teal tubes, and parent seating.',
  },
  {
    id: 'g2',
    title: 'Twin Spiral Slides & Yellow Ball Pit',
    category: 'slides',
    image: IMAGES.giantSlidesBallpit,
    caption: 'Fast spiral slides diving directly into thousands of clean, sanitized balls.',
  },
  {
    id: 'g3',
    title: 'Dedicated Toddler Soft Zone',
    category: 'toddlers',
    image: IMAGES.toddlerSoftPlay,
    caption: 'Safe, low-profile foam slides, tactile gear boards, and mini ball pit for ages 0–3.',
  },
  {
    id: 'g4',
    title: 'Artisan Parent Café & Barista Bar',
    category: 'cafe',
    image: IMAGES.cafeExperience,
    caption: 'Specialty espresso, warm wooden tables, and relaxed parents watching kids play.',
  },
  {
    id: 'g5',
    title: 'Celebration Birthday Party Suite',
    category: 'parties',
    image: IMAGES.birthdayPartyRoom,
    caption: 'Decorated private birthday room with festive balloons, party hats, and dedicated host setup.',
  },
];

export const FAQS_DATA: FaqItem[] = [
  // Admission
  {
    category: 'admission',
    question: 'What ages can play at Playland Pineville?',
    answer: 'Our main playground structures and activities are designed for children ages 1 to 10. We also have a specialized, gated Toddler Zone strictly reserved for babies and toddlers ages 0 to 3.',
  },
  {
    category: 'admission',
    question: 'How long is each play session?',
    answer: 'Standard open play admission includes a generous 2-hour play session. On weekdays (Monday–Thursday), walk-ins can often enjoy extended stay flexibility when capacity permits.',
  },
  {
    category: 'admission',
    question: 'Are adults charged for admission?',
    answer: 'Every family admission includes two (2) FREE adult passes! For additional adults joining the group, admission is $5.99 on Monday–Friday and $10.99 on Saturday–Sunday.',
  },
  {
    category: 'admission',
    question: 'What is the price for infants?',
    answer: 'Infants 11 months and younger receive completely FREE admission when accompanying a paying older sibling.',
  },

  // Reservations
  {
    category: 'reservations',
    question: 'Are reservations required to visit?',
    answer: 'Monday through Thursday: Walk-ins are always warmly welcomed! Friday through Sunday & Holidays: Advance online booking is strongly recommended as weekend sessions frequently sell out to ensure everyone has ample room to play.',
  },
  {
    category: 'reservations',
    question: 'When are weekend tickets released?',
    answer: 'Weekend play session tickets are officially released every Wednesday morning for the upcoming weekend. Be sure to check our Play Sessions booking calendar early to claim your preferred time slot.',
  },
  {
    category: 'reservations',
    question: 'Can I cancel or reschedule my ticket?',
    answer: 'Play session tickets may be rescheduled or credited if you contact us at least 24 hours prior to your booked start time. Same-day cancellations and no-shows are non-refundable due to strictly capped hourly capacity.',
  },

  // Playground Rules
  {
    category: 'rules',
    question: 'Are socks required for children and adults?',
    answer: 'YES. For hygiene and safety, clean socks are mandatory for ALL guests (both children and adults) entering the padded play areas. Grip socks are recommended for children. Forgot your socks? We have brand new grip socks available for purchase at the front desk.',
  },
  {
    category: 'rules',
    question: 'Can adults enter the play structure?',
    answer: 'Adults are encouraged to supervise and may gently enter the play structure to assist or accompany younger children when needed. However, slides and high climbing features are sized primarily for kids up to age 10.',
  },
  {
    category: 'rules',
    question: 'Can children play without parental supervision?',
    answer: 'No. Playland is not a drop-off daycare facility. Parents or legal guardians (18+) must remain on-premises and supervise their children at all times while enjoying our café lounge.',
  },
  {
    category: 'rules',
    question: 'Are outside foods and drinks allowed?',
    answer: 'Outside snacks and drinks are not permitted in the general open play or café area, as we offer a full specialty coffee bar, fresh pastries, and healthy kid-friendly snacks. The only exception is booked Birthday Parties, where birthday cake and approved party food are permitted inside the private party room.',
  },

  // Safety
  {
    category: 'safety',
    question: 'What is your sick child policy?',
    answer: 'To protect all little adventurers and families, children or adults exhibiting symptoms of illness (fever, persistent cough, runny nose, rash, stomach bug) must stay home. We will gladly help reschedule your session once everyone is 24-hours symptom-free.',
  },
  {
    category: 'safety',
    question: 'Are waivers legally required before entry?',
    answer: 'Yes. Every participant under 18 must have an official digital liability waiver signed by their parent or legal guardian on file before entering the play structure. Waivers can be signed online in 60 seconds on our website and remain valid for 1 full year.',
  },
  {
    category: 'safety',
    question: 'How do you sanitize the playground and ball pits?',
    answer: 'We clean and sanitize touchpoints continuously throughout the day. Every night, the entire playground undergoes hospital-grade disinfectant fogging and thorough cleaning. Our ball pits undergo automated deep sanitization to ensure spotless cleanliness.',
  },

  // Birthday Parties
  {
    category: 'parties',
    question: 'Can I bring my own birthday cake and outside food?',
    answer: 'Yes! When you reserve one of our private party rooms (Weekday, Basic, Supreme, or Fully Private), you are welcome to bring a celebratory birthday cake, cupcakes, and outside catering or pizza.',
  },
  {
    category: 'parties',
    question: 'What is the deposit policy for birthday party bookings?',
    answer: 'A $100 non-refundable deposit is required at the time of reservation to lock in your date, time slot, and private party room. The remaining balance is paid on the day of the party after your final guest headcount is confirmed.',
  },
  {
    category: 'parties',
    question: 'Can I change my party package or guest count?',
    answer: 'Yes! You can adjust your estimated guest count or upgrade your package up to 5 days before your party date. Additional children beyond your package limit can be added for $15 per child.',
  },
];

export const PROMOTIONS = [
  {
    id: 'tshirt-day',
    title: 'T-Shirt Perk Day',
    schedule: 'Every Tuesday',
    desc: 'Dress your child in an official Playland t-shirt to receive a special admission treat or free café beverage voucher for mom or dad!',
    tag: 'Weekly Feature',
  },
  {
    id: 'last-hour-discount',
    title: 'Last Hour Quick-Play Discount',
    schedule: 'Daily Final 60 Minutes',
    desc: 'Need a quick burst of energy before bedtime? Enjoy special half-rate admission during the final hour before closing.',
    tag: 'Daily Special',
  },
];
