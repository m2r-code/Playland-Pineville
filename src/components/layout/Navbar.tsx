import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { Menu, X, FileText, Gift, Settings, Phone, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/initialData';
import { useCms } from '../../context/CmsContext';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCms } = useCms();

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Playground', route: 'experience' },
    { label: 'Hours & Pricing', route: 'pricing' },
    { label: 'Birthday Parties', route: 'parties' },
    { label: 'Café', route: 'cafe' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#243D50]/10 shadow-[0_2px_15px_-3px_rgba(36,61,80,0.05)]">
        {/* Top utility sub-strip for desktop */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-[#243D50] text-xs text-white/90">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F6C84A]" />
              {BUSINESS_INFO.address}, Pineville NC
            </span>
            <a
              href={BUSINESS_INFO.phoneClean}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#4BBBD0]" />
              {BUSINESS_INFO.phone}
            </a>
            <span className="text-white/60">·</span>
            <span className="text-[#F6C84A] font-medium">Walk-ins Welcome Mon–Thu · Weekend Advance Booking</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => handleLinkClick('waiver')}
              className={`hover:text-white transition-colors flex items-center gap-1 ${
                currentRoute === 'waiver' ? 'text-[#F6C84A] font-semibold' : 'text-slate-300'
              }`}
            >
              <FileText className="w-3 h-3 text-[#F47738]" />
              Sign Waiver
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => handleLinkClick('gift-certificates')}
              className={`hover:text-white transition-colors flex items-center gap-1 ${
                currentRoute === 'gift-certificates' ? 'text-[#F6C84A] font-semibold' : 'text-slate-300'
              }`}
            >
              <Gift className="w-3 h-3 text-[#4BBBD0]" />
              Gift Certificates
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={openCms}
              title="Edit published admission prices and packages"
              className="hover:text-white text-slate-400 flex items-center gap-1 transition-colors"
            >
              <Settings className="w-3 h-3" />
              CMS
            </button>
          </div>
        </div>

        {/* Primary Navbar conforming to Top Bar Contract */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark */}
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#F47738] to-[#F6C84A] flex items-center justify-center text-white shadow-md shadow-[#F47738]/20 group-hover:scale-105 transition-transform">
                <span className="font-heading font-bold text-2xl tracking-tighter leading-none">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-[#243D50] leading-none">
                  PLAYLAND
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#F47738] uppercase leading-none mt-1">
                  Pineville · Playground & Café
                </span>
              </div>
            </button>

            {/* Zone 2: Concise single-line navigation links */}
            <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#243D50]/80">
              {navLinks.map(link => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleLinkClick(link.route)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#F47738] font-bold'
                        : 'hover:text-[#243D50] hover:underline underline-offset-8 decoration-2 decoration-[#F47738]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F47738] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleLinkClick('play-sessions')}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-btn font-semibold text-white bg-[#F47738] hover:bg-[#e06324] rounded-2xl shadow-md shadow-[#F47738]/25 hover:shadow-lg hover:shadow-[#F47738]/30 transition-all transform active:scale-95 whitespace-nowrap shrink-0"
              >
                BOOK YOUR PLAY SESSION
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 rounded-xl text-[#243D50] hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-[#243D50]/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-4/5 max-w-sm h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#F47738] flex items-center justify-center text-white font-heading font-bold text-lg">
                    P
                  </div>
                  <span className="font-heading font-bold text-xl text-[#243D50]">PLAYLAND</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map(link => (
                  <button
                    key={link.route}
                    onClick={() => handleLinkClick(link.route)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                      currentRoute === link.route
                        ? 'bg-[#FFF5E8] text-[#F47738] font-bold'
                        : 'text-[#243D50] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}

                <div className="pt-4 border-t border-slate-100 space-y-1">
                  <button
                    onClick={() => handleLinkClick('waiver')}
                    className="w-full text-left px-4 py-3 rounded-xl font-medium text-sm text-[#243D50] hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-[#F47738]" />
                      Sign Waiver
                    </span>
                    <span className="text-[11px] text-[#F47738] font-bold">Required</span>
                  </button>

                  <button
                    onClick={() => handleLinkClick('gift-certificates')}
                    className="w-full text-left px-4 py-3 rounded-xl font-medium text-sm text-[#243D50] hover:bg-slate-50 flex items-center gap-2.5"
                  >
                    <Gift className="w-4 h-4 text-[#4BBBD0]" />
                    Gift Certificates
                  </button>

                  <button
                    onClick={() => handleLinkClick('faq-safety')}
                    className="w-full text-left px-4 py-3 rounded-xl font-medium text-sm text-[#243D50] hover:bg-slate-50"
                  >
                    FAQ & Safety Rules
                  </button>

                  <button
                    onClick={() => handleLinkClick('careers')}
                    className="w-full text-left px-4 py-3 rounded-xl font-medium text-sm text-[#243D50] hover:bg-slate-50"
                  >
                    Job Opportunities
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openCms();
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl font-medium text-sm text-slate-500 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    CMS & Price Settings
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => handleLinkClick('play-sessions')}
                className="w-full py-3.5 px-4 text-center text-sm font-btn font-semibold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-lg shadow-[#F47738]/25"
              >
                BOOK YOUR PLAY SESSION
              </button>

              <div className="text-center text-xs text-slate-500">
                11812 Carolina Place Pkwy, Pineville NC
                <div className="text-[#243D50] font-semibold mt-1">704-900-7581</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
