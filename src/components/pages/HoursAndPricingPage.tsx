import React from 'react';
import { PageRoute } from '../../types';
import { useCms } from '../../context/CmsContext';
import { BUSINESS_INFO, PROMOTIONS, FAQS_DATA } from '../../data/initialData';
import {
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  Tag,
  ArrowRight,
  Info,
} from 'lucide-react';

interface HoursAndPricingPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HoursAndPricingPage: React.FC<HoursAndPricingPageProps> = ({ onNavigate }) => {
  const { pricing, openCms } = useCms();

  const admissionFaqs = FAQS_DATA.filter(f => f.category === 'admission' || f.category === 'rules');

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
            ADMISSION & SCHEDULE
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            Hours & Admission Pricing
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All admissions include 2 hours of unlimited playground access, with 2 free accompanying adults per family.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('play-sessions')}
              className="px-8 py-3.5 text-xs font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-lg shadow-[#F47738]/25 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              BOOK YOUR PLAY SESSION
            </button>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#243D50]">
            Admission Rates
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            Two-Hour Play Sessions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: First Child */}
          <div className="bg-white rounded-3xl p-6 border-2 border-[#F47738] shadow-md relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-[#F47738] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
              Standard Child
            </div>
            <div className="pt-3">
              <h3 className="font-heading font-bold text-lg text-[#243D50]">
                First Child (Ages 1–10)
              </h3>
              <p className="text-xs text-slate-500 mt-1">Full access to multi-level play areas & slides.</p>

              <div className="mt-6 space-y-3 bg-[#FFF5E8]/50 p-4 rounded-2xl border border-[#F6C84A]/30">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-medium text-slate-600">Monday – Thursday:</span>
                  <span className="font-heading font-bold text-2xl text-[#243D50]">
                    ${pricing.firstChildWeekday.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-medium text-slate-600">Fri – Sun & Holidays:</span>
                  <span className="font-heading font-bold text-2xl text-[#F47738]">
                    ${pricing.firstChildWeekend.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <div>✓ Includes 2 hours playtime</div>
              <div>✓ Clean socks required</div>
            </div>
          </div>

          {/* Card 2: Sibling */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-lg text-[#243D50]">
                Additional Sibling (Ages 1–10)
              </h3>
              <p className="text-xs text-slate-500 mt-1">Discounted rate for brothers and sisters.</p>

              <div className="mt-6 space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-medium text-slate-600">Monday – Thursday:</span>
                  <span className="font-heading font-bold text-2xl text-[#243D50]">
                    ${pricing.siblingWeekday.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-medium text-slate-600">Fri – Sun & Holidays:</span>
                  <span className="font-heading font-bold text-2xl text-[#243D50]">
                    ${pricing.siblingWeekend.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <div>✓ Must be part of same family visit</div>
              <div>✓ Includes 2 hours playtime</div>
            </div>
          </div>

          {/* Card 3: Infants */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-lg text-[#243D50]">
                Infants (11 Mo & Under)
              </h3>
              <p className="text-xs text-slate-500 mt-1">Safe play for our littlest visitors.</p>

              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide block">
                  With Paid Sibling
                </span>
                <span className="font-heading font-extrabold text-3xl text-emerald-600">
                  FREE
                </span>
                <span className="text-[11px] text-emerald-700 block mt-1">
                  Single infant without older sibling: standard admission.
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <div>✓ Dedicated foam Toddler Zone</div>
              <div>✓ Sensory play wall & baby pool</div>
            </div>
          </div>

          {/* Card 4: Adults */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-lg text-[#243D50]">
                Adult Admissions
              </h3>
              <p className="text-xs text-slate-500 mt-1">Parents, grandparents & caregivers.</p>

              <div className="mt-6 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-emerald-700">First 2 Adults:</span>
                  <span className="font-heading font-bold text-xl text-emerald-700">FREE</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  <div className="font-medium text-[#243D50] mb-0.5">Additional Adults:</div>
                  <div className="flex justify-between">
                    <span>Mon – Fri:</span>
                    <span className="font-mono font-semibold">${pricing.additionalAdultWeekday.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat – Sun:</span>
                    <span className="font-mono font-semibold">${pricing.additionalAdultWeekend.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <div>✓ Access to café lounge & Wi-Fi</div>
              <div>✓ Playground chaperone access</div>
            </div>
          </div>
        </div>

        {/* Operating Hours Table */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#F47738]" />
            <h3 className="text-xl font-heading font-bold text-[#243D50]">
              Operating Hours & Walk-In Schedule
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {BUSINESS_INFO.hours.map((h, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-[#243D50] block">{h.days}</span>
                <span className="font-mono text-base font-bold text-[#F47738] block">{h.time}</span>
                <span className="text-[11px] text-slate-500 block">{h.note}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#FFF5E8] border border-[#F6C84A]/40 flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
            <Calendar className="w-4 h-4 text-[#F47738] shrink-0 mt-0.5" />
            <div>
              <strong>Weekend Ticket Release Policy:</strong> To ensure maximum comfort and avoid overcrowding, weekend play session tickets (Friday afternoon through Sunday) are released online every Wednesday morning. We encourage reserving in advance to guarantee your preferred play time!
            </div>
          </div>
        </div>

        {/* Important Rules & Clean Socks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#243D50] text-white rounded-3xl p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#F6C84A]">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-heading font-bold text-xl text-white">Socks Requirement</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clean socks are mandatory for <strong>all children and adults</strong> entering any carpeted or padded play area. Bare feet and outside street shoes are prohibited to maintain our hospital-grade hygiene standards.
            </p>
            <div className="text-xs text-slate-300 bg-white/10 p-3 rounded-xl">
              💡 <em>Forgot your socks? High-quality non-slip grip socks are available at our front desk for $3.50 a pair.</em>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#F47738]">
              <AlertCircle className="w-6 h-6" />
              <h3 className="font-heading font-bold text-xl text-[#243D50]">Playground Guidelines</h3>
            </div>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
                <span>Parents/guardians (18+) must supervise their children at all times.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
                <span>A signed digital liability waiver is required for every minor child.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
                <span>No outside food or drinks permitted in open play (exception: private party rooms).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
                <span>Toddler Zone is strictly preserved for guests ages 0 to 3.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Current Verified Promotions */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-[#F47738]" />
            <h3 className="text-xl font-heading font-bold text-[#243D50]">Current Promotions</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROMOTIONS.map(promo => (
              <div key={promo.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-heading font-bold text-base text-[#243D50]">{promo.title}</span>
                  <span className="text-[10px] font-bold text-[#F47738] bg-[#FFF5E8] px-2 py-0.5 rounded-full border border-[#F6C84A]/50">
                    {promo.schedule}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">{promo.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing FAQs Accordion */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-heading font-bold text-[#243D50] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#4BBBD0]" />
            Pricing & Admission Questions
          </h3>

          <div className="divide-y divide-slate-100">
            {admissionFaqs.map((faq, i) => (
              <div key={i} className="py-3.5 space-y-1">
                <h4 className="font-semibold text-sm text-[#243D50]">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('play-sessions')}
            className="px-8 py-4 text-xs sm:text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all inline-flex items-center gap-2"
          >
            BOOK YOUR PLAY SESSION NOW
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
