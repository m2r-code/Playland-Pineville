import React from 'react';
import { PageRoute, GalleryPhoto } from '../../types';
import { PLAYGROUND_ATTRACTIONS, GALLERY_PHOTOS, BUSINESS_INFO } from '../../data/initialData';
import { useCms } from '../../context/CmsContext';
import {
  Sparkles,
  ArrowRight,
  Coffee,
  Cake,
  ShieldCheck,
  Heart,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  Smile,
  Zap,
  Users,
  ChevronRight,
  Maximize2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPhoto: (photo: GalleryPhoto) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenPhoto }) => {
  const { pricing, partyPackages } = useCms();

  return (
    <div className="space-y-20 pb-16">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5E8]/60 via-white to-transparent pt-6 sm:pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
                <span className="w-2 h-2 rounded-full bg-[#F47738]"></span>
                <span>Pineville, NC · Indoor Playground & Café</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#243D50] tracking-tight leading-[1.08] text-balance">
                LITTLE ADVENTURES. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47738] via-[#e06324] to-[#F6C84A]">
                  BIG HAPPY MOMENTS.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                An exciting indoor playground where kids explore, play, and create unforgettable memories while parents enjoy a relaxing café experience with specialty coffee.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('play-sessions')}
                  className="w-full sm:w-auto px-8 py-4 text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  BOOK YOUR PLAY SESSION
                </button>

                <button
                  onClick={() => onNavigate('experience')}
                  className="w-full sm:w-auto px-7 py-4 text-sm font-btn font-semibold text-[#243D50] bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  EXPLORE PLAYLAND
                  <ArrowRight className="w-4 h-4 text-[#4BBBD0]" />
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4BBBD0]" />
                  2 Free Adults per Family
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4BBBD0]" />
                  Two-Hour Sessions
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4BBBD0]" />
                  Hospital-Grade Sanitized Daily
                </span>
              </div>
            </div>

            {/* Right Media Focal Carrier */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/src/assets/images/hero_playground_1794032542616.jpg"
                  alt="Playland Pineville indoor playground featuring climbing structures, slides, and family lounge"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47738]">
                      CAROLINA PLACE PKWY
                    </span>
                    <p className="text-xs font-semibold text-[#243D50]">
                      Open 7 Days · Walk-ins Welcome Mon–Thu
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onOpenPhoto({
                        id: 'hero',
                        title: 'Playland Pineville Main Play Area',
                        category: 'playground',
                        image: '/src/assets/images/hero_playground_1794032542616.jpg',
                        caption: 'Spacious climate-controlled play arena with multi-tiered tubes and slides.',
                      })
                    }
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#243D50] transition-colors"
                    aria-label="Enlarge photo"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WELCOME TO PLAYLAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF5E8] rounded-3xl p-8 sm:p-12 border border-[#F6C84A]/30 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              {BUSINESS_INFO.concept}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#243D50] tracking-tight">
              MORE THAN JUST A PLAYGROUND.
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Playland Pineville was founded with a singular, heartfelt vision: to create an exceptional, clean, and joyful space where children can run, climb, and exercise their boundless imagination — while parents sit back comfortably, savor artisan coffee, catch up with friends, or get work done with uninterrupted sightlines.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-[#243D50] font-semibold">
              <span className="inline-flex items-center gap-2">
                <Smile className="w-5 h-5 text-[#F47738]" />
                Family-Operated
              </span>
              <span className="inline-flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[#4BBBD0]" />
                Specialty Coffee Café
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#F6C84A]" />
                Safety & Sanitization First
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPLORE OUR PLAYGROUND (6 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4BBBD0]">
            ACTIVE ADVENTURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#243D50] tracking-tight">
            Explore Our Playground
          </h2>
          <p className="text-sm text-slate-600">
            Engineered for physical development, safe exploration, and endless smiles for children ages 1 to 10.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYGROUND_ATTRACTIONS.map(attraction => (
            <div
              key={attraction.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#F47738]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() =>
                onOpenPhoto({
                  id: attraction.id,
                  title: attraction.title,
                  category: 'playground',
                  image: attraction.image,
                  caption: attraction.longDesc,
                })
              }
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 p-1.5 rounded-xl bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {attraction.tags.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#243D50]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#243D50] group-hover:text-[#F47738] transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {attraction.shortDesc}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-semibold text-[#F47738] group-hover:translate-x-1 transition-transform">
                  <span>View Details & Photo</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CAFÉ EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#243D50] to-[#1c303f] rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative h-[360px] lg:h-[480px]">
              <img
                src="/src/assets/images/cafe_experience_1794032544524.jpg"
                alt="Cozy parent café at Playland Pineville with specialty espresso and relaxing seating"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#243D50]/80 hidden lg:block"></div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#F6C84A] font-semibold">
                <Coffee className="w-3.5 h-3.5" />
                <span>The Parent Lounge & Coffee Bar</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug">
                YOUR LITTLE ONES PLAY. <br />
                <span className="text-[#F6C84A]">YOU ENJOY YOUR COFFEE.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Take a moment to relax, enjoy specialty coffee, and connect with friends while your little ones explore safely. Our café serves locally roasted espresso, specialty lattes, refreshing teas, and delicious snacks in a spotless, welcoming lounge.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4BBBD0]" />
                  <span>360° Play Floor Sightlines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4BBBD0]" />
                  <span>Complimentary High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4BBBD0]" />
                  <span>Handcrafted Barista Drinks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4BBBD0]" />
                  <span>Comfortable Scandinavian Seating</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('cafe')}
                  className="px-7 py-3.5 text-xs font-btn font-bold text-[#243D50] bg-[#F6C84A] hover:bg-[#ebd052] rounded-2xl shadow-lg transition-all transform active:scale-95 flex items-center gap-2"
                >
                  DISCOVER OUR CAFÉ
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BIRTHDAY PARTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              UNFORGETTABLE CELEBRATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#243D50] tracking-tight">
              MAKE THEIR BIRTHDAY EXTRA SPECIAL!
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Host the easiest, most joyful birthday party ever. Choose from our private party suites with dedicated hosts, vibrant decorations, complete setup, and zero post-party cleanup stress.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-[#FFF5E8] border border-[#F6C84A]/40">
                <span className="font-bold text-[#F47738] block text-sm">Weekday Party</span>
                <span className="text-slate-600 font-medium">Starting at $250</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FFF5E8] border border-[#F6C84A]/40">
                <span className="font-bold text-[#F47738] block text-sm">Weekend Basic</span>
                <span className="text-slate-600 font-medium">Starting at $375</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FFF5E8] border border-[#F6C84A]/40">
                <span className="font-bold text-[#F47738] block text-sm">Supreme Party</span>
                <span className="text-slate-600 font-medium">Up to 20 kids · $525</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FFF5E8] border border-[#F6C84A]/40">
                <span className="font-bold text-[#F47738] block text-sm">Private Facility</span>
                <span className="text-slate-600 font-medium">VIP Entire Park Rental</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('parties')}
                className="px-8 py-3.5 text-xs font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-lg shadow-[#F47738]/25 transition-all flex items-center gap-2"
              >
                <Cake className="w-4 h-4" />
                EXPLORE PARTY PACKAGES
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFF5E8]">
              <img
                src="/src/assets/images/birthday_party_room_1794032544796.jpg"
                alt="Playland Pineville decorated private birthday party suite"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOURS & PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4BBBD0]">
              AFFORDABLE FAMILY FUN
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#243D50] tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every child admission includes two (2) full hours of play + 2 free adult passes per family.
            </p>
          </div>

          <button
            onClick={() => onNavigate('pricing')}
            className="text-xs font-btn font-bold text-[#F47738] hover:text-[#db6123] flex items-center gap-1.5"
          >
            VIEW ALL PRICES & POLICIES
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: First Child */}
          <div className="bg-white rounded-3xl p-6 border-2 border-[#F47738]/30 shadow-md relative flex flex-col justify-between">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#F47738] text-white text-[10px] font-bold uppercase tracking-wider">
              Primary Admission
            </div>
            <div>
              <span className="text-xs font-bold text-[#243D50] uppercase tracking-wide">First Child (Ages 1–10)</span>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-500">Mon – Thu:</span>
                  <span className="font-heading font-bold text-2xl text-[#243D50]">
                    ${pricing.firstChildWeekday.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-500">Fri – Sun & Hol:</span>
                  <span className="font-heading font-bold text-2xl text-[#F47738]">
                    ${pricing.firstChildWeekend.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4 pt-4 border-t border-slate-100">
              Includes 2 full hours of play access across all zones.
            </p>
          </div>

          {/* Card 2: Additional Sibling */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#243D50] uppercase tracking-wide">Additional Sibling</span>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-500">Mon – Thu:</span>
                  <span className="font-heading font-bold text-2xl text-[#243D50]">
                    ${pricing.siblingWeekday.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-500">Fri – Sun & Hol:</span>
                  <span className="font-heading font-bold text-2xl text-[#243D50]">
                    ${pricing.siblingWeekend.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4 pt-4 border-t border-slate-100">
              For 2nd, 3rd, or more siblings in the same household.
            </p>
          </div>

          {/* Card 3: Infants */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#243D50] uppercase tracking-wide">Infants (11 Mo & Under)</span>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-500">With Paid Sibling:</span>
                  <span className="font-heading font-bold text-2xl text-emerald-600">FREE</span>
                </div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  Dedicated cushioned infant & toddler play area.
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4 pt-4 border-t border-slate-100">
              Baby without sibling pays standard child admission.
            </p>
          </div>

          {/* Card 4: Adults */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#243D50] uppercase tracking-wide">Accompanying Adults</span>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-500">First 2 Adults:</span>
                  <span className="font-heading font-bold text-2xl text-emerald-600">FREE</span>
                </div>
                <div className="text-[11px] text-slate-500 leading-tight">
                  Extra adult: $5.99 Mon–Fri · $10.99 Sat–Sun.
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4 pt-4 border-t border-slate-100">
              Full access to café lounge and play structure supervision.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: GALLERY WITH LIGHTBOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              PHOTO SHOWCASE
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#243D50] tracking-tight">
              Life at Playland Pineville
            </h2>
          </div>
          <p className="text-xs text-slate-500 hidden sm:block">Click any photo to enlarge in HD</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_PHOTOS.slice(0, 4).map(photo => (
            <div
              key={photo.id}
              onClick={() => onOpenPhoto(photo)}
              className="relative h-60 rounded-3xl overflow-hidden bg-slate-100 group cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={photo.image}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Maximize2 className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: WHY FAMILIES LOVE PLAYLAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F6F4] rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4BBBD0]">
              WHY PLAYLAND
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#243D50] tracking-tight">
              Why Families Love Playland Pineville
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <Heart className="w-8 h-8 text-[#F47738]" />
              <h3 className="font-heading font-bold text-lg text-[#243D50]">Family-Operated Warmth</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are locally owned and family-operated. Every guest is treated like part of our extended family.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <Zap className="w-8 h-8 text-[#F6C84A]" />
              <h3 className="font-heading font-bold text-lg text-[#243D50]">Year-Round Indoor Comfort</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rain, summer heat, or winter chill — our climate-controlled arena provides comfortable, active play every day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <Smile className="w-8 h-8 text-[#4BBBD0]" />
              <h3 className="font-heading font-bold text-lg text-[#243D50]">Dedicated Toddler Area</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A calm, safe soft-foam haven separated from big kids so babies and toddlers can crawl and explore safely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <Coffee className="w-8 h-8 text-[#243D50]" />
              <h3 className="font-heading font-bold text-lg text-[#243D50]">Café & Parent Seating</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enjoy locally roasted barista coffee, free Wi-Fi, and clear line-of-sight to your children at all times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <h3 className="font-heading font-bold text-lg text-[#243D50]">Spotless Cleanliness & Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated ball-pit sanitization, continuous daytime cleaning, and nightly hospital-grade fogging disinfection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <Users className="w-8 h-8 text-[#F47738]" />
              <h3 className="font-heading font-bold text-lg text-[#243D50]">2 Free Adults Per Family</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in bringing parents, grandparents, and caregivers together without charging extra fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: LOCATION & MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              LOCATION & HOURS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#243D50] tracking-tight">
              Come Visit Us in Pineville
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F47738] shrink-0 mt-0.5" />
                <span>
                  <strong>11812 Carolina Place Parkway</strong><br />
                  Pineville, NC 28134, USA
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#4BBBD0] shrink-0" />
                <span>Mon–Thu: 9:30 AM – 6 PM · Fri–Sat: 9:30 AM – 7 PM · Sun: 11 AM – 6 PM</span>
              </p>
            </div>

            <div className="pt-2 flex gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-btn font-semibold text-white bg-[#243D50] hover:bg-[#1a2d3b] rounded-xl flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F6C84A]" />
                Get Driving Directions
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-btn font-semibold text-[#243D50] bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Contact Details
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              title="Playland Pineville Location Map"
              src="https://maps.google.com/maps?q=11812+Carolina+Place+Parkway+Pineville+NC+28134&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F47738] to-[#e06324] rounded-3xl p-8 sm:p-14 text-center text-white space-y-6 shadow-xl shadow-[#F47738]/20">
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            LET’S MAKE SOME HAPPY MEMORIES!
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
            Reserve your play session today, or drop by Monday through Thursday for spontaneous indoor adventure.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('play-sessions')}
              className="px-8 py-4 text-xs sm:text-sm font-btn font-bold text-[#F47738] bg-white hover:bg-slate-50 rounded-2xl shadow-xl transition-all transform active:scale-95"
            >
              BOOK YOUR PLAY SESSION
            </button>
            <button
              onClick={() => onNavigate('waiver')}
              className="px-7 py-4 text-xs sm:text-sm font-btn font-semibold text-white bg-black/20 hover:bg-black/30 border border-white/30 rounded-2xl transition-all"
            >
              Sign Waiver Before You Arrive
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
