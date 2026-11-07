import React, { useState } from 'react';
import { PageRoute, PlaySessionBooking } from '../../types';
import { useCms } from '../../context/CmsContext';
import { BUSINESS_INFO } from '../../data/initialData';
import {
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Info,
  Coffee,
  AlertCircle,
  Copy,
  Check,
  CalendarPlus,
} from 'lucide-react';

interface PlaySessionsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PlaySessionsPage: React.FC<PlaySessionsPageProps> = ({ onNavigate }) => {
  const { pricing } = useCms();

  // Booking Form State
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    // Default to today in YYYY-MM-DD
    return d.toISOString().split('T')[0];
  });

  const [selectedSlot, setSelectedSlot] = useState<string>('9:30 AM – 11:30 AM');
  const [firstChildren, setFirstChildren] = useState<number>(1);
  const [siblings, setSiblings] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [extraAdults, setExtraAdults] = useState<number>(0);
  const [gripSocks, setGripSocks] = useState<number>(0);
  const [coffeeVouchers, setCoffeeVouchers] = useState<number>(0);

  // Customer info
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childrenNames, setChildrenNames] = useState('');
  const [waiverAgreed, setWaiverAgreed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingResult, setBookingResult] = useState<PlaySessionBooking | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Determine if selected date is weekend
  const dateObj = new Date(selectedDate + 'T00:00:00');
  const dayOfWeek = dateObj.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6;

  // Rates based on CMS
  const firstChildRate = isWeekend ? pricing.firstChildWeekend : pricing.firstChildWeekday;
  const siblingRate = isWeekend ? pricing.siblingWeekend : pricing.siblingWeekday;
  const extraAdultRate = isWeekend ? pricing.additionalAdultWeekend : pricing.additionalAdultWeekday;
  const socksRate = 3.50;
  const coffeeRate = 4.50;

  // Calculation
  const subtotal =
    firstChildren * firstChildRate +
    siblings * siblingRate +
    extraAdults * extraAdultRate +
    gripSocks * socksRate +
    coffeeVouchers * coffeeRate;

  const tax = subtotal * 0.0725; // NC sales tax approx 7.25%
  const total = subtotal + tax;

  const timeSlots = [
    { time: '9:30 AM – 11:30 AM', spots: 18, label: 'Morning Adventure' },
    { time: '12:00 PM – 2:00 PM', spots: 12, label: 'Midday Energy' },
    { time: '2:30 PM – 4:30 PM', spots: 8, label: 'Afternoon Play' },
    { time: '5:00 PM – 7:00 PM', spots: 22, label: 'Evening Glow Session' },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (firstChildren < 1 && siblings < 1 && infants < 1) {
      setErrorMsg('Please select at least one child or infant ticket.');
      return;
    }
    if (!parentName.trim()) {
      setErrorMsg('Please provide the parent or guardian full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter a contact phone number.');
      return;
    }
    if (!waiverAgreed) {
      setErrorMsg('Please acknowledge the liability waiver & clean socks policy.');
      return;
    }

    const code = 'PL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const result: PlaySessionBooking = {
      date: selectedDate,
      timeSlot: selectedSlot,
      firstChildrenCount: firstChildren,
      siblingCount: siblings,
      infantCount: infants,
      extraAdultCount: extraAdults,
      gripSocksPairs: gripSocks,
      coffeeVouchers: coffeeVouchers,
      parentName,
      email,
      phone,
      childrenNames,
      waiverAgreed,
      totalPrice: total,
      bookingRef: code,
    };

    setBookingResult(result);
    setIsConfirmed(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const copyCodeToClipboard = () => {
    if (bookingResult?.bookingRef) {
      navigator.clipboard.writeText(bookingResult.bookingRef);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-12 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
            ONLINE TICKETING & SCHEDULING
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            Reserve Your 2-Hour Play Session
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Select your preferred date, pick a time slot, and secure your family's spot for clean indoor fun.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Important Notice & Aluvii Integration Strip */}
        <div className="mb-8 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#4BBBD0] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-[#243D50]">Official Booking Notice:</span> Weekend sessions (Fri–Sun) are released online every Wednesday morning. Monday–Thursday walk-ins are always welcome. Every child ticket includes two free adult entries!
            </div>
          </div>

          <a
            href={BUSINESS_INFO.aluviiBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-btn font-semibold text-[#243D50] bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Direct Aluvii Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {isConfirmed && bookingResult ? (
          /* Confirmation Receipt View */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border-2 border-emerald-500 shadow-xl space-y-6 animate-fadeIn">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-[#243D50]">
                Play Session Confirmed!
              </h2>
              <p className="text-xs text-slate-500">
                A confirmation summary has been logged for {bookingResult.email}.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF5E8] border border-[#F6C84A]/50 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase">Reservation Pass Code</span>
                <div className="text-2xl font-mono font-bold text-[#F47738]">
                  {bookingResult.bookingRef}
                </div>
              </div>
              <button
                onClick={copyCodeToClipboard}
                className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-[#243D50] border border-slate-200 hover:bg-slate-50 flex items-center gap-1"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedCode ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600 divide-y divide-slate-100">
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Date & Play Session:</span>
                <span className="font-semibold text-[#243D50]">{bookingResult.date} ({bookingResult.timeSlot})</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Parent / Guardian:</span>
                <span className="font-semibold text-[#243D50]">{bookingResult.parentName} ({bookingResult.phone})</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Admissions Reserved:</span>
                <span className="font-semibold text-[#243D50]">
                  {bookingResult.firstChildrenCount} Child
                  {bookingResult.siblingCount > 0 ? `, ${bookingResult.siblingCount} Sibling` : ''}
                  {bookingResult.infantCount > 0 ? `, ${bookingResult.infantCount} Infant` : ''}
                  {' · 2 Free Adults Included'}
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Total Calculated:</span>
                <span className="font-mono font-bold text-base text-[#243D50]">${bookingResult.totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Preparation Checkmarks */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <span className="font-bold text-[#243D50] block">Before You Arrive at 11812 Carolina Place Pkwy:</span>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sign your digital waiver online to save time at check-in.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bring clean socks for everyone (adults & children).</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('waiver')}
                className="flex-1 py-3 text-xs font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-xl shadow-md text-center"
              >
                Sign Digital Waiver Now
              </button>
              <button
                onClick={() => {
                  setIsConfirmed(false);
                  setBookingResult(null);
                }}
                className="py-3 px-5 text-xs font-btn font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Book Another Session
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Flow */
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Steps Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Select Date */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F47738] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#243D50]">
                    Select Date
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Choose Visit Date:
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-[#243D50] block">
                      {isWeekend ? 'Weekend / Holiday Rate' : 'Weekday Rate'}
                    </span>
                    <span className="text-slate-500">
                      {isWeekend
                        ? `First child: $${pricing.firstChildWeekend.toFixed(2)} · Sibling: $${pricing.siblingWeekend.toFixed(2)}`
                        : `First child: $${pricing.firstChildWeekday.toFixed(2)} · Sibling: $${pricing.siblingWeekday.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 2: Time Slots */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F47738] text-white flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#243D50]">
                    Choose 2-Hour Play Session
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeSlots.map(slot => {
                    const isSelected = selectedSlot === slot.time;
                    return (
                      <div
                        key={slot.time}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#FFF5E8] border-[#F47738] shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-heading font-bold text-sm text-[#243D50]">
                            {slot.time}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#F47738]" />}
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-slate-500">
                          <span>{slot.label}</span>
                          <span className="text-emerald-600 font-semibold">{slot.spots} spots left</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Ticket Quantities */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F47738] text-white flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#243D50]">
                    Select Guests & Tickets
                  </h3>
                </div>

                <div className="space-y-4 divide-y divide-slate-100">
                  {/* First Child */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="font-semibold text-sm text-[#243D50]">First Child (Ages 1–10)</div>
                      <div className="text-xs text-slate-500">${firstChildRate.toFixed(2)} each</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setFirstChildren(Math.max(0, firstChildren - 1))}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold font-mono text-sm">{firstChildren}</span>
                      <button
                        type="button"
                        onClick={() => setFirstChildren(firstChildren + 1)}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Sibling */}
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <div className="font-semibold text-sm text-[#243D50]">Additional Siblings</div>
                      <div className="text-xs text-slate-500">${siblingRate.toFixed(2)} each (Discounted)</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSiblings(Math.max(0, siblings - 1))}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold font-mono text-sm">{siblings}</span>
                      <button
                        type="button"
                        onClick={() => setSiblings(siblings + 1)}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Infant */}
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <div className="font-semibold text-sm text-[#243D50]">Infants (11 Mo & Under)</div>
                      <div className="text-xs text-emerald-600 font-medium">FREE with paid sibling</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setInfants(Math.max(0, infants - 1))}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold font-mono text-sm">{infants}</span>
                      <button
                        type="button"
                        onClick={() => setInfants(infants + 1)}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Adults */}
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <div className="font-semibold text-sm text-[#243D50]">Extra Adults (Beyond 2 Free)</div>
                      <div className="text-xs text-slate-500">${extraAdultRate.toFixed(2)} each (First 2 are always FREE)</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setExtraAdults(Math.max(0, extraAdults - 1))}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-bold font-mono text-sm">{extraAdults}</span>
                      <button
                        type="button"
                        onClick={() => setExtraAdults(extraAdults + 1)}
                        className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Add-Ons */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#4BBBD0] text-white flex items-center justify-center font-bold text-xs">
                    4
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#243D50]">
                    Optional Visit Add-Ons
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-xs text-[#243D50]">Playland Grip Socks</div>
                      <div className="text-[11px] text-slate-500">$3.50 / pair</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setGripSocks(Math.max(0, gripSocks - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-mono text-xs font-bold">{gripSocks}</span>
                      <button
                        type="button"
                        onClick={() => setGripSocks(gripSocks + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-xs text-[#243D50]">Café Beverage Voucher</div>
                      <div className="text-[11px] text-slate-500">$4.50 / any drink</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setCoffeeVouchers(Math.max(0, coffeeVouchers - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-mono text-xs font-bold">{coffeeVouchers}</span>
                      <button
                        type="button"
                        onClick={() => setCoffeeVouchers(coffeeVouchers + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-xs font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Customer Details */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#F47738] text-white flex items-center justify-center font-bold text-xs">
                    5
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#243D50]">
                    Parent & Guest Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={e => setParentName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="704-555-0192"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Children Names & Ages (Optional)
                    </label>
                    <input
                      type="text"
                      value={childrenNames}
                      onChange={e => setChildrenNames(e.target.value)}
                      placeholder="e.g. Liam (4), Emma (2)"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={waiverAgreed}
                      onChange={e => setWaiverAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-[#F47738] focus:ring-[#F47738]"
                    />
                    <span className="text-xs text-slate-600 leading-snug">
                      I understand that clean socks are required for all participants and that an electronic liability waiver must be on file for each child before entering the playground structures.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Booking Summary & Checkout Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#243D50]/10 shadow-lg space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[11px] font-bold text-[#F47738] uppercase tracking-wider block">
                    SESSION SUMMARY
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-[#243D50] mt-0.5">
                    Order Overview
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold text-[#243D50]">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session:</span>
                    <span className="font-semibold text-[#243D50]">{selectedSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Adult Admission:</span>
                    <span className="font-semibold text-emerald-600">2 Free Adults Included</span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs">
                  {firstChildren > 0 && (
                    <div className="flex justify-between">
                      <span>{firstChildren}x First Child:</span>
                      <span className="font-mono font-medium">${(firstChildren * firstChildRate).toFixed(2)}</span>
                    </div>
                  )}
                  {siblings > 0 && (
                    <div className="flex justify-between">
                      <span>{siblings}x Additional Sibling:</span>
                      <span className="font-mono font-medium">${(siblings * siblingRate).toFixed(2)}</span>
                    </div>
                  )}
                  {infants > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>{infants}x Infant (with sibling):</span>
                      <span className="font-mono font-semibold">$0.00</span>
                    </div>
                  )}
                  {extraAdults > 0 && (
                    <div className="flex justify-between">
                      <span>{extraAdults}x Additional Adult:</span>
                      <span className="font-mono font-medium">${(extraAdults * extraAdultRate).toFixed(2)}</span>
                    </div>
                  )}
                  {gripSocks > 0 && (
                    <div className="flex justify-between">
                      <span>{gripSocks}x Grip Socks:</span>
                      <span className="font-mono font-medium">${(gripSocks * socksRate).toFixed(2)}</span>
                    </div>
                  )}
                  {coffeeVouchers > 0 && (
                    <div className="flex justify-between">
                      <span>{coffeeVouchers}x Café Voucher:</span>
                      <span className="font-mono font-medium">${(coffeeVouchers * coffeeRate).toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between pt-2 border-t border-slate-100 text-slate-500">
                    <span>Sales Tax (NC 7.25%):</span>
                    <span className="font-mono">${tax.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between pt-3 border-t-2 border-slate-200 text-base font-bold text-[#243D50]">
                    <span>Total Due:</span>
                    <span className="font-mono text-xl text-[#F47738]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  COMPLETE PLAY RESERVATION
                </button>

                <div className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Lock in your family's 2-hour spot. Payment and waiver status confirmed at reception.
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
