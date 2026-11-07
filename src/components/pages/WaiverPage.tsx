import React from 'react';
import { PageRoute } from '../../types';
import { BUSINESS_INFO, FAQS_DATA } from '../../data/initialData';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Users,
  Clock,
  AlertCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface WaiverPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const WaiverPage: React.FC<WaiverPageProps> = ({ onNavigate }) => {
  const safetyFaqs = FAQS_DATA.filter(f => f.category === 'safety' || f.category === 'rules');

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F47738]" />
            <span>Fast Digital Check-In</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-[#243D50] tracking-tight">
            READY TO PLAY? SIGN YOUR WAIVER!
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All children under 18 must have an official digital liability waiver completed by a parent or legal guardian prior to entering the playground structures. Sign once and you're set for an entire year!
          </p>

          <div className="pt-2">
            <a
              href={BUSINESS_INFO.aluviiWaiverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs sm:text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all inline-flex items-center gap-2 transform active:scale-95"
            >
              <FileText className="w-4 h-4" />
              SIGN WAIVER NOW ON ALUVIU (OFFICIAL)
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Instructions & 3 Easy Steps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-[#F47738] font-heading font-bold text-lg flex items-center justify-center">
              1
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Parent or Guardian Signs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              An adult (18+) must complete the waiver form. You can add all your dependent children on one single family submission.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-[#4BBBD0] font-heading font-bold text-lg flex items-center justify-center">
              2
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Takes Under 60 Seconds</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete on your smartphone, tablet, or home computer before driving over. No paper forms or waiting in line at the entrance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-emerald-600 font-heading font-bold text-lg flex items-center justify-center">
              3
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Valid for 1 Full Year</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Once registered in our Aluvii system, your waiver stays active for 12 months. On return visits, simply give your name at check-in!
            </p>
          </div>
        </div>

        {/* Why Waivers Matter Banner */}
        <div className="bg-[#243D50] text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6C84A]">
              SAFETY & RESPONSIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Why We Require a Digital Waiver
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Playland Pineville is dedicated to providing an impeccably maintained, padded, and supervised play environment. As with any active physical recreation, children run, jump, climb, and slide. The legal waiver ensures that:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Parents understand Playland is a parent-supervised facility, not a drop-off daycare.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Emergency contact details are readily accessible in our secure front-desk check-in system.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Participant age restrictions and mandatory clean socks policies are formally acknowledged.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Every family agrees to our mutual community safety, courtesy, and illness guidelines.</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="text-xs text-slate-300">
              Visiting today? Sign now and bypass the registration counter.
            </div>
            <a
              href={BUSINESS_INFO.aluviiWaiverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#F6C84A] text-[#243D50] text-xs font-btn font-bold hover:bg-[#ebd052] transition-colors shrink-0 flex items-center gap-2"
            >
              OPEN ALUVIU WAIVER FORM
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Waiver FAQs */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-heading font-bold text-xl text-[#243D50] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#F47738]" />
            Frequently Asked Questions About Waivers
          </h3>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-3.5 space-y-1">
              <h4 className="font-semibold text-sm text-[#243D50]">Can grandparents or aunts/uncles sign for a child?</h4>
              <p className="text-slate-600 leading-relaxed">
                Legally, only a parent or court-appointed legal guardian may execute the waiver on behalf of a minor under 18. If a grandparent or friend is bringing the children, the parent should simply complete the waiver online on their mobile phone beforehand.
              </p>
            </div>

            <div className="py-3.5 space-y-1">
              <h4 className="font-semibold text-sm text-[#243D50]">Do adults need to be on the waiver?</h4>
              <p className="text-slate-600 leading-relaxed">
                Yes. Any adult supervising or entering the carpeted play structure alongside younger children must also be named on the family waiver agreement.
              </p>
            </div>

            <div className="py-3.5 space-y-1">
              <h4 className="font-semibold text-sm text-[#243D50]">What if I don’t know if my waiver is still active?</h4>
              <p className="text-slate-600 leading-relaxed">
                When you arrive at our front desk (11812 Carolina Place Parkway), our team can look up your waiver in seconds by your phone number or last name. If it has expired, renewing takes less than a minute.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
