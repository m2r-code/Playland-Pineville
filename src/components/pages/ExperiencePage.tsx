import React from 'react';
import { PageRoute, GalleryPhoto } from '../../types';
import { PLAYGROUND_ATTRACTIONS, GALLERY_PHOTOS } from '../../data/initialData';
import { Sparkles, ArrowRight, ShieldCheck, Smile, Maximize2, CheckCircle2 } from 'lucide-react';

interface ExperiencePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPhoto: (photo: GalleryPhoto) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate, onOpenPhoto }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
            THE PLAYLAND EXPERIENCE
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            Designed for Wonder, Agility & Smiles
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every slide, tunnel, and climbing obstacle is custom-engineered for children ages 1 to 10 with European safety standards, soft padding, and maximum excitement.
          </p>
        </div>
      </section>

      {/* Attractions Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-12">
          {PLAYGROUND_ATTRACTIONS.map((attraction, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={attraction.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Media */}
                <div
                  className={`lg:col-span-6 rounded-2xl overflow-hidden h-72 sm:h-80 relative group cursor-pointer bg-slate-100 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
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
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/40 text-white backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {attraction.tags.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-lg bg-white/95 text-[11px] font-semibold text-[#243D50] shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-bold text-[#F47738] uppercase tracking-wider">
                    Feature 0{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#243D50]">
                    {attraction.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {attraction.longDesc}
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      ASTM Safety Certified
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Smile className="w-4 h-4 text-[#F6C84A]" />
                      High Engagement
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toddler Specific Highlight Banner */}
        <div className="bg-[#FFF5E8] rounded-3xl p-8 sm:p-12 border border-[#F6C84A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              FOR BABIES & TODDLERS
            </span>
            <h3 className="text-2xl font-heading font-extrabold text-[#243D50]">
              Dedicated Gated Toddler Zone (Ages 0–3)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We know older children can sometimes run fast. That is why our Toddler Zone is safely enclosed with cushioned seating around the perimeter, letting little explorers crawl, balance, and slide at their own gentle pace.
            </p>
          </div>

          <button
            onClick={() => onNavigate('play-sessions')}
            className="px-6 py-3.5 text-xs font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-lg shadow-[#F47738]/20 shrink-0 whitespace-nowrap"
          >
            BOOK YOUR PLAY SESSION
          </button>
        </div>
      </section>
    </div>
  );
};
