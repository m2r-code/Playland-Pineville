import React, { useState } from 'react';
import { PageRoute } from '../../types';
import { BUSINESS_INFO } from '../../data/initialData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Cake,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('general');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [humanCheck, setHumanCheck] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    // Simple spam verification: What is 3 + 4?
    if (humanCheck.trim() !== '7') {
      setErrorMsg('Spam verification failed: What is 3 + 4? (Hint: enter 7)');
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
            <MessageSquare className="w-3.5 h-3.5 text-[#F47738]" />
            <span>We Love Hearing From Families</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            Contact Playland Pineville
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question regarding play sessions, booking a birthday celebration, or lost items? Our local team is happy to help.
          </p>
        </div>
      </section>

      {/* 4 Contact Subsections Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* General Inquiries */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-[#F47738] flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">General Questions</h3>
            <p className="text-xs text-slate-500">
              For open play hours, pricing, socks questions, or group visits.
            </p>
            <a
              href={`mailto:${BUSINESS_INFO.generalEmail}`}
              className="text-xs font-semibold text-[#F47738] hover:underline block pt-1"
            >
              {BUSINESS_INFO.generalEmail}
            </a>
          </div>

          {/* Birthday Parties */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-[#4BBBD0] flex items-center justify-center font-bold">
              <Cake className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Party Coordinator</h3>
            <p className="text-xs text-slate-500">
              Direct line to our birthday party and private rental planner.
            </p>
            <a
              href={`mailto:${BUSINESS_INFO.partyEmail}`}
              className="text-xs font-semibold text-[#4BBBD0] hover:underline block pt-1"
            >
              {BUSINESS_INFO.partyEmail}
            </a>
          </div>

          {/* Phone Inquiries */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-emerald-600 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Call Front Desk</h3>
            <p className="text-xs text-slate-500">
              Call us during regular opening hours for real-time desk assistance.
            </p>
            <a
              href={BUSINESS_INFO.phoneClean}
              className="text-xs font-mono font-bold text-[#243D50] hover:text-[#F47738] block pt-1"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Location & Directions */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-[#243D50] flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Visit in Person</h3>
            <p className="text-xs text-slate-500">
              {BUSINESS_INFO.address}<br />
              Pineville, NC 28134, USA
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#243D50] hover:text-[#F47738] underline block pt-1"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Google Maps Embed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
                SEND A MESSAGE
              </span>
              <h2 className="text-2xl font-heading font-extrabold text-[#243D50] mt-1">
                How Can We Help You?
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below and a manager will respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-emerald-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                  Thank you, {fullName}. We have received your inquiry regarding "{subject || category}" and will reply to {email} promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-xl hover:bg-emerald-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="e.g. David Thompson"
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
                      placeholder="david@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="704-555-0199"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Department *
                    </label>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                    >
                      <option value="general">General Questions & Admissions</option>
                      <option value="birthday">Birthday Party Coordinator</option>
                      <option value="fieldtrip">Group / Field Trip Visit</option>
                      <option value="lostfound">Lost & Found Item</option>
                      <option value="feedback">Guest Experience Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="Brief summary of your question..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="How can we assist you today?..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                {/* Spam Protection Field */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <label className="block text-xs font-semibold text-[#243D50] mb-1">
                    Spam Verification: What is 3 + 4? (Enter single number) *
                  </label>
                  <input
                    type="text"
                    required
                    value={humanCheck}
                    onChange={e => setHumanCheck(e.target.value)}
                    placeholder="Enter answer"
                    className="w-28 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-sm text-center font-bold"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs sm:text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  SEND MESSAGE TO PLAYLAND TEAM
                </button>
              </form>
            )}
          </div>

          {/* Operating Hours & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#243D50]">
                <Clock className="w-5 h-5 text-[#F47738]" />
                <h3 className="font-heading font-bold text-lg">Operating Schedule</h3>
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-100">
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-slate-700">Monday – Thursday:</span>
                  <span className="font-mono text-slate-600">9:30 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-slate-700">Friday:</span>
                  <span className="font-mono text-slate-600">9:30 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-slate-700">Saturday:</span>
                  <span className="font-mono text-slate-600">9:30 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-slate-700">Sunday:</span>
                  <span className="font-mono text-slate-600">11:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-[#243D50] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F47738]" />
                  Pineville, NC Location
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#F47738] hover:underline"
                >
                  Directions ↗
                </a>
              </div>
              <div className="h-64 bg-slate-100">
                <iframe
                  title="Playland Pineville Map"
                  src="https://maps.google.com/maps?q=11812+Carolina+Place+Parkway+Pineville+NC+28134&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
