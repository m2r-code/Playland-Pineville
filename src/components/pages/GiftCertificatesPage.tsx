import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { BUSINESS_INFO } from '../../data/initialData';
import { Gift, Sparkles, MapPin, CheckCircle, ExternalLink, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface GiftCertificatesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const GiftCertificatesPage: React.FC<GiftCertificatesPageProps> = ({ onNavigate }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');

  const amounts = [25, 50, 75, 100];

  const currentDisplayAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
            <Gift className="w-3.5 h-3.5 text-[#4BBBD0]" />
            <span>The Perfect Gift for Families</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            GIVE THE GIFT OF PLAY!
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Give little adventurers memories of climbing, sliding, and laughter. Playland gift cards are the favorite present for birthdays, holidays, and family celebrations.
          </p>
        </div>
      </section>

      {/* Main Experience Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Card Artwork Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-[#243D50] via-[#2d4b63] to-[#F47738] rounded-3xl p-7 shadow-2xl text-white relative overflow-hidden border-2 border-white/20 transform hover:-rotate-1 transition-transform">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-[#F6C84A]/20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-[#4BBBD0]/20 blur-2xl"></div>

              <div className="relative z-10 flex flex-col justify-between h-56">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-heading font-extrabold text-2xl tracking-tight text-white block">
                      PLAYLAND
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#F6C84A] font-bold">
                      Pineville, NC · Gift Certificate
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                    <Gift className="w-5 h-5 text-[#F6C84A]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-300 uppercase tracking-widest font-mono">
                    Gift Card Value
                  </span>
                  <div className="text-4xl font-heading font-extrabold text-white tracking-tight">
                    ${currentDisplayAmount > 0 ? currentDisplayAmount.toFixed(2) : '50.00'}
                  </div>
                </div>

                <div className="flex justify-between items-end text-[11px] text-slate-300 border-t border-white/15 pt-3">
                  <span>Physical Card Pickup at Pineville Location</span>
                  <span className="font-mono text-white/80">#PLAY-GIFT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Amount Selection & Buy Action */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
                CHOOSE AN AMOUNT
              </span>
              <h2 className="text-2xl font-heading font-bold text-[#243D50] mt-1">
                Select Gift Certificate Value
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Choose a suggested amount or enter a custom balance for your gift recipient.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {amounts.map(amt => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`py-3 rounded-2xl text-sm font-heading font-bold transition-all ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-[#F47738] text-white shadow-md'
                      : 'bg-slate-50 text-[#243D50] border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Or Custom Dollar Amount:
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold">$</span>
                <input
                  type="number"
                  min="10"
                  step="5"
                  value={customAmount}
                  onChange={e => setCustomAmount(e.target.value)}
                  placeholder="Enter custom amount..."
                  className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                />
              </div>
            </div>

            {/* Official Aluvii Button & Instructions */}
            <div className="space-y-3 pt-2">
              <a
                href={BUSINESS_INFO.aluviiGiftCardsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-xs sm:text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                BUY GIFT CERTIFICATE VIA ALUVIU PORTAL
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed">
                <strong>Important Pickup Note:</strong> Current gift certificate purchases are fulfilled online via Aluvii and physically picked up at our Pineville location front counter during normal operating hours.
              </div>
            </div>
          </div>
        </div>

        {/* Pickup & Redemption Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <MapPin className="w-6 h-6 text-[#F47738]" />
            <h3 className="font-heading font-bold text-base text-[#243D50]">1. Physical Card Pickup</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              After placing your online order, present your confirmation email at our front desk (11812 Carolina Place Pkwy) to collect your physical gift certificate card.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <CheckCircle className="w-6 h-6 text-[#4BBBD0]" />
            <h3 className="font-heading font-bold text-base text-[#243D50]">2. Complete Flexibility</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gift certificates are valid for open play session tickets, grip socks, barista café beverages, pastries, snacks, or applied towards birthday party bookings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h3 className="font-heading font-bold text-base text-[#243D50]">3. No Expiration Worries</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Playland Pineville gift cards do not expire and carry no hidden maintenance fees, making them ideal for birthdays or future summer visits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
