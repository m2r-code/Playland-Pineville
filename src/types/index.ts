export type PageRoute = 
  | 'home'
  | 'about'
  | 'experience'
  | 'pricing'
  | 'play-sessions'
  | 'parties'
  | 'cafe'
  | 'gift-certificates'
  | 'waiver'
  | 'faq-safety'
  | 'contact'
  | 'careers';

export interface AdmissionPricing {
  firstChildWeekday: number;
  firstChildWeekend: number;
  siblingWeekday: number;
  siblingWeekend: number;
  infantPrice: number; // 0 (free with paid sibling)
  freeAdultsPerFamily: number; // 2
  additionalAdultWeekday: number;
  additionalAdultWeekend: number;
  playSessionDurationHours: number; // 2
}

export interface PartyPackage {
  id: string;
  name: string;
  priceNote: string;
  weekdayPrice?: number;
  weekendPrice?: number;
  price?: number;
  maxKids: number;
  roomDuration: string;
  playtimeDuration: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface AttractionItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  tags: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'playground' | 'slides' | 'ballpits' | 'toddlers' | 'cafe' | 'parties';
  image: string;
  caption: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'admission' | 'reservations' | 'rules' | 'safety' | 'parties';
}

export interface PlaySessionBooking {
  date: string;
  timeSlot: string;
  firstChildrenCount: number;
  siblingCount: number;
  infantCount: number;
  extraAdultCount: number;
  gripSocksPairs: number;
  coffeeVouchers: number;
  parentName: string;
  email: string;
  phone: string;
  childrenNames: string;
  waiverAgreed: boolean;
  totalPrice: number;
  bookingRef?: string;
}

export interface JobApplication {
  fullName: string;
  birthdate: string;
  phone: string;
  email: string;
  referralSource: string;
  workExperience: string;
  weekdayAvailability: string;
  weekendAvailability: string;
  desiredPay: string;
  resumeNotes: string;
  backgroundCheckConsent: boolean;
}
