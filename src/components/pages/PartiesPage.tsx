import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { useCms } from '../../context/CmsContext';
import { BUSINESS_INFO, FAQS_DATA } from '../../data/initialData';
import { IMAGES } from '../../assets/images';
import {
  Cake,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  Send,
  Check,
  Coffee,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

interface PartiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PartiesPage: React.FC<PartiesPageProps> = ({ onNavigate }) => {
  const { partyPackages } = useCms();

  // Inquiry Form State
  const [selectedPkgId, setSelectedPkgId] = useState(partyPackages[1]?.id || 'basic-party');
  const [partyDate, setPartyDate] = useState('');
  const [guestCount, setGuestCount] = useState(10);
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdayChildName, setBirthdayChildName] = useState('');
  const [birthdayChildAge, setBirthdayChildAge] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const partyFaqs = FAQS_DATA.filter(f => f.category === 'parties');
  const currentPkg = partyPackages.find(p => p.id === selectedPkgId) || partyPackages[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
            <Cake className="w-3.5 h-3.5 text-[#F47738]" />
            <span>Birthday Celebrations at Playland Pineville</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-[#243D50] tracking-tight">
            LET’S PARTY!
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Make your child's special day unforgettable with fun, laughter, and exciting playground adventures. Dedicated party rooms, hassle-free host setup, and zero post-party cleanup!
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#packages"
              className="px-8 py-3.5 text-xs font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-lg shadow-[#F47738]/25 transition-all"
            >
              EXPLORE PARTY PACKAGES
            </a>
            <a
              href="#party-inquiry"
              className="px-7 py-3.5 text-xs font-btn font-semibold text-[#243D50] bg-white border border-slate-200 hover:bg-slate-50 rounded-2xl shadow-sm transition-all"
            >
              BOOK YOUR PARTY INQUIRY
            </a>
          </div>
        </div>
      </section>

      {/* Featured Party Room Photo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 h-72 sm:h-96">
          <img
            src={IMAGES.birthdayPartyRoom}
            alt="Decorated birthday party room at Playland Pineville"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F6C84A]">
                PRIVATE CELEBRATION SUITE
              </span>
              <h3 className="text-2xl font-heading font-bold text-white">
                Everything Prepared Before You Walk Through The Door
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Table settings, paper goods, dedicated host support, and unlimited smiles. Just bring the cake and the birthday child!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Package Comparison Cards */}
      <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
            CHOOSE YOUR CELEBRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#243D50]">
            Birthday Party Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            All packages feature 2 hours in a private decorated party room, dedicated Playland host assistance, and full cleanup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partyPackages.map(pkg => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 border-2 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'border-[#F47738] shadow-xl'
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#F47738] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {pkg.priceNote}
                </span>
                <h3 className="font-heading font-bold text-xl text-[#243D50] mt-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-4 py-3 border-y border-slate-100">
                  <div className="text-3xl font-heading font-extrabold text-[#243D50]">
                    {pkg.price !== undefined
                      ? `$${pkg.price}`
                      : pkg.weekdayPrice !== undefined
                      ? `$${pkg.weekdayPrice} / $${pkg.weekendPrice}`
                      : '$' + pkg.price}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {pkg.maxKids} children included
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-600">
                  <div className="font-semibold text-[#243D50] text-[11px] uppercase tracking-wider">
                    Package Inclusions:
                  </div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F47738] shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="#party-inquiry"
                  onClick={() => setSelectedPkgId(pkg.id)}
                  className={`w-full py-3 rounded-xl text-xs font-btn font-semibold flex items-center justify-center transition-all ${
                    pkg.popular
                      ? 'bg-[#F47738] hover:bg-[#db6123] text-white shadow-md'
                      : 'bg-[#243D50] hover:bg-[#1a2d3b] text-white'
                  }`}
                >
                  SELECT THIS PACKAGE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm overflow-x-auto">
          <h3 className="font-heading font-bold text-2xl text-[#243D50] mb-6">
            Detailed Package Comparison
          </h3>

          <table className="w-full text-left text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 text-[#243D50] font-heading font-bold text-sm">
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Weekday ($250)</th>
                <th className="py-3 px-4">Basic ($375)</th>
                <th className="py-3 px-4">Supreme ($525)</th>
                <th className="py-3 px-4">Private ($800 / $1,400)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Days Available</td>
                <td className="py-3 px-4">Mon – Thu</td>
                <td className="py-3 px-4">Fri – Sun & Hol</td>
                <td className="py-3 px-4">Fri – Sun & Hol</td>
                <td className="py-3 px-4">7 Days a Week</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Children Included</td>
                <td className="py-3 px-4">Up to 10</td>
                <td className="py-3 px-4">Up to 10</td>
                <td className="py-3 px-4">Up to 20</td>
                <td className="py-3 px-4">Up to 30</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Party Room Access</td>
                <td className="py-3 px-4">2 Hours Private</td>
                <td className="py-3 px-4">2 Hours Private</td>
                <td className="py-3 px-4">2 Hours (Double Room)</td>
                <td className="py-3 px-4">Entire Facility Closed</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Paper Plates & Tableware</td>
                <td className="py-3 px-4">Included</td>
                <td className="py-3 px-4">Included</td>
                <td className="py-3 px-4">Deluxe Themed</td>
                <td className="py-3 px-4">VIP Custom Styling</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Dedicated Staff Host</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes (2 Hosts)</td>
                <td className="py-3 px-4">Entire Team + Barista</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Outside Birthday Cake Allowed</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes + Outside Catering</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Extra Children Rate</td>
                <td className="py-3 px-4">$15 / child</td>
                <td className="py-3 px-4">$15 / child</td>
                <td className="py-3 px-4">$15 / child</td>
                <td className="py-3 px-4">Custom arrangement</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#243D50]">Reservation Deposit</td>
                <td className="py-3 px-4">$100 Non-refundable</td>
                <td className="py-3 px-4">$100 Non-refundable</td>
                <td className="py-3 px-4">$100 Non-refundable</td>
                <td className="py-3 px-4">50% Deposit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Reservation / Inquiry Form */}
      <section id="party-inquiry" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#F47738]/30 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              LOCK IN YOUR DATE
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#243D50]">
              Book Your Party Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Tell us your desired date and guest estimate. Our party coordinator will confirm room availability and process your $100 date deposit.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-emerald-900">
                Party Inquiry Submitted!
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                Thank you, {parentName}! Our birthday coordinator will review your desired date ({partyDate || 'Selected Date'}) and package ({currentPkg.name}) and email you at {email} within 24 hours to finalize your reservation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-xl hover:bg-emerald-50"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Package *
                  </label>
                  <select
                    value={selectedPkgId}
                    onChange={e => setSelectedPkgId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  >
                    {partyPackages.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.priceNote})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Desired Party Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={partyDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={e => setPartyDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={e => setParentName(e.target.value)}
                    placeholder="Jessica Miller"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="jessica@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="704-555-0184"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Birthday Child Name & Age Turning
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={birthdayChildName}
                      onChange={e => setBirthdayChildName(e.target.value)}
                      placeholder="e.g. Mason"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                    />
                    <input
                      type="text"
                      value={birthdayChildAge}
                      onChange={e => setBirthdayChildAge(e.target.value)}
                      placeholder="Turning 5"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Notes or Theme Requests
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Tell us if you are bringing pizza, dietary considerations, or requested time window (e.g. 1:00 PM – 3:00 PM)..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                />
              </div>

              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Deposit Information:</strong> A $100 non-refundable deposit is required upon reservation confirmation to secure your party room. Balance is settled day of event.
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs sm:text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                SUBMIT PARTY RESERVATION INQUIRY
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Birthday FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-heading font-bold text-xl text-[#243D50] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#F47738]" />
            Birthday Party FAQs
          </h3>
          <div className="divide-y divide-slate-100">
            {partyFaqs.map((faq, i) => (
              <div key={i} className="py-3.5 space-y-1">
                <h4 className="font-semibold text-sm text-[#243D50]">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
