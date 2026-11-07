import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { FAQS_DATA } from '../../data/initialData';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Smile,
  AlertCircle,
  Calendar,
  Users,
} from 'lucide-react';

interface FaqSafetyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const FaqSafetyPage: React.FC<FaqSafetyPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'admission', label: 'Admission' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'rules', label: 'Playground Rules' },
    { id: 'safety', label: 'Safety & Hygiene' },
    { id: 'parties', label: 'Birthday Parties' },
  ];

  const filteredFaqs = FAQS_DATA.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndexes(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
            <HelpCircle className="w-3.5 h-3.5 text-[#F47738]" />
            <span>Help Center & Guidelines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            Frequently Asked Questions & Safety
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about play sessions, admission prices, socks rules, hygiene standards, and party bookings.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., socks, adults, deposit, cancellation)..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters (Pill Free interactive segmented buttons) */}
        <div className="flex flex-wrap gap-2 justify-center p-1.5 bg-slate-100 rounded-2xl max-w-2xl mx-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-btn font-semibold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-[#243D50] shadow-sm'
                  : 'text-slate-600 hover:text-[#243D50]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm divide-y divide-slate-100">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndexes[index] ?? false;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  >
                    <span className="font-heading font-semibold text-base sm:text-lg text-[#243D50] group-hover:text-[#F47738] transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 bg-[#FFF5E8] text-[#F47738]' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-8 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-slate-500 text-xs space-y-2">
              <p>No questions matched your search query "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-[#F47738] font-semibold underline"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>

        {/* Quick Safety Rule Highlights */}
        <div className="bg-[#FFF5E8] rounded-3xl p-8 border border-[#F6C84A]/40 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F47738]" />
            <h3 className="font-heading font-bold text-lg text-[#243D50]">
              Key Safety Highlights at a Glance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="p-3 bg-white/80 rounded-xl">
              <strong>Clean Socks:</strong> Required for every guest (children & adults).
            </div>
            <div className="p-3 bg-white/80 rounded-xl">
              <strong>Supervision:</strong> Adult (18+) must remain on-site at all times.
            </div>
            <div className="p-3 bg-white/80 rounded-xl">
              <strong>Toddler Haven:</strong> Gated zone strictly for ages 0–3.
            </div>
            <div className="p-3 bg-white/80 rounded-xl">
              <strong>Sanitization:</strong> Hospital-grade nightly fogging & daily ball washing.
            </div>
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center pt-2 space-y-2">
          <p className="text-xs text-slate-500">Still have a specific question about your upcoming visit?</p>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs font-btn font-bold text-[#F47738] hover:text-[#db6123] underline underline-offset-4"
          >
            Contact our guest services team directly →
          </button>
        </div>
      </section>
    </div>
  );
};
