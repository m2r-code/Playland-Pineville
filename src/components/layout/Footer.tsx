import React from 'react';
import { PageRoute } from '../../types';
import { BUSINESS_INFO } from '../../data/initialData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Coffee, Sparkles } from 'lucide-react';
import { useCms } from '../../context/CmsContext';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms }) => {
  const { openCms } = useCms();

  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#243D50] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & USP */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#F47738] to-[#F6C84A] flex items-center justify-center text-white shadow-md">
                <span className="font-heading font-bold text-2xl leading-none">P</span>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                PLAYLAND
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {BUSINESS_INFO.tagline}
            </p>

            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#F6C84A] block mb-1">
                OUR CONCEPT
              </span>
              <p className="text-xs text-slate-200 font-semibold tracking-wide">
                {BUSINESS_INFO.concept}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {BUSINESS_INFO.usp}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F6C84A] mb-4">
              Explore Playland
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Our Family Business
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('experience')} className="hover:text-white transition-colors">
                  Playground Attractions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors">
                  Hours & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('parties')} className="hover:text-white transition-colors">
                  Birthday Party Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cafe')} className="hover:text-white transition-colors">
                  Café & Parent Lounge
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq-safety')} className="hover:text-white transition-colors">
                  FAQ & Safety Rules
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-white transition-colors">
                  Join Our Team (Careers)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Guest Essentials & Bookings */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F6C84A] mb-4">
              Guest Essentials
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('play-sessions')}
                  className="text-white font-semibold flex items-center gap-1.5 hover:text-[#F47738] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#F47738]" />
                  Book Play Session Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('waiver')}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4BBBD0]" />
                  Sign Online Waiver
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gift-certificates')}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  Gift Certificates & Pickup
                </button>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.aluviiBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  Official Aluvii Ticket Portal ↗
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={openCms}
                  className="text-xs text-slate-400 hover:text-[#F6C84A] transition-colors flex items-center gap-1"
                >
                  CMS Price Editor (Staff Mode)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F6C84A] mb-4">
              Visit Playland
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F47738] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}<br />
                  Pineville, NC 28134, USA
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4BBBD0] shrink-0" />
                <a href={BUSINESS_INFO.phoneClean} className="hover:text-white transition-colors font-mono">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F6C84A] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.generalEmail}`} className="hover:text-white transition-colors text-xs">
                  {BUSINESS_INFO.generalEmail}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-0.5">
                  <div>Mon–Thu: 9:30 AM – 6:00 PM</div>
                  <div>Fri–Sat: 9:30 AM – 7:00 PM</div>
                  <div>Sunday: 11:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Playland Pineville. All rights reserved. Locally operated in Pineville, NC.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={onOpenTerms} className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
            <span>·</span>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
