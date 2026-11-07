import React from 'react';
import { PageRoute } from '../../types';
import { Coffee, Wifi, Sparkles, Heart, Smile, CheckCircle, ArrowRight } from 'lucide-react';
import { useCms } from '../../context/CmsContext';

interface CafePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CafePage: React.FC<CafePageProps> = ({ onNavigate }) => {
  const { openCms } = useCms();

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
            <Coffee className="w-3.5 h-3.5 text-[#F47738]" />
            <span>Artisan Coffee & Parent Lounge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            GOOD COFFEE. HAPPY FAMILIES.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Where little ones play safely and parents enjoy their own moment. Savor locally roasted specialty espresso, artisan teas, and comfortable seating with clear sightlines.
          </p>
        </div>
      </section>

      {/* Main Café Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              THE PLAYLAND DIFFERENCE
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#243D50] tracking-tight">
              A True Café, Not An Afterthought
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We partnered with premier local Carolina roasters to bring real espresso bar craft to an indoor playground. Whether you need a morning double-shot cortado, a smooth oat milk vanilla latte, an iced cold brew, or refreshing herbal teas, our trained baristas prepare every drink with care.
            </p>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Locally roasted, freshly ground whole bean specialty coffee</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full espresso bar: lattes, cappuccinos, americanos, and seasonal specials</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Non-dairy milk alternatives available (oat & almond)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Organic fruit pouches, wholesome kid snacks, and bakery treats</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-80 sm:h-96">
            <img
              src="/src/assets/images/cafe_experience_1794032544524.jpg"
              alt="Artisan coffee bar and parents relaxing at Playland Pineville"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Parent Lounge Amenities */}
        <div className="bg-[#FFF5E8] rounded-3xl p-8 sm:p-12 border border-[#F6C84A]/30">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4BBBD0]">
              DESIGNED FOR COMFORT
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#243D50]">
              The Parent Lounge Amenities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Relax, catch up on emails, or chat with friends while staying connected to your children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5E8] text-[#F47738] flex items-center justify-center font-bold">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#243D50]">High-Speed Wi-Fi & Outlets</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work remotely or stream seamlessly with dedicated high-speed guest Wi-Fi and accessible laptop charging bars.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5E8] text-[#4BBBD0] flex items-center justify-center font-bold">
                <Smile className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#243D50]">Unbroken Sightlines</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ergonomic wooden tables positioned to provide 360° visibility across both the main climbing maze and toddler zone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FFF5E8] text-[#F6C84A] flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#243D50]">Spotless & Calm Ambience</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enjoy pleasant background acoustic warmth and thoroughly sanitized tables between every guest visit.
              </p>
            </div>
          </div>
        </div>

        {/* Menu Management Area (CMS editable placeholder notice) */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#F47738] uppercase tracking-wider block">
                CAFÉ MENU SPOTLIGHT
              </span>
              <h3 className="text-xl font-heading font-bold text-[#243D50]">
                Fresh Beverages & Wholesome Snacks
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Seasonal offerings crafted fresh daily. Sourced and prepared locally.
              </p>
            </div>

            <button
              onClick={openCms}
              className="text-xs font-btn font-semibold text-slate-600 hover:text-[#243D50] bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors self-start sm:self-auto"
            >
              CMS Menu Management Notice
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-sm text-[#243D50] block">Specialty Espresso</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Lattes, Cappuccinos, Macchiatos, Flat Whites, and drip brews using locally roasted beans.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-sm text-[#243D50] block">Cold Brew & Teas</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Nitro cold brew, iced chai, ceremonial matcha, and refreshing iced peach or berry teas.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-sm text-[#243D50] block">Bakery Treats</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Freshly baked croissants, blueberry muffins, cookies, and gluten-sensitive snacks.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-sm text-[#243D50] block">Wholesome Kid Snacks</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Organic apple sauce pouches, cheese sticks, juice boxes, pretzels, and clean refreshments.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('play-sessions')}
            className="px-8 py-4 text-xs sm:text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all inline-flex items-center gap-2"
          >
            JOIN US FOR COFFEE & PLAY
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
