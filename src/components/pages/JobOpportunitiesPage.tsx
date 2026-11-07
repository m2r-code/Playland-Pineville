import React, { useState } from 'react';
import { PageRoute, JobApplication } from '../../types';
import {
  Heart,
  Smile,
  ShieldCheck,
  Briefcase,
  Clock,
  Sparkles,
  Send,
  CheckCircle,
  AlertCircle,
  FileText,
} from 'lucide-react';

interface JobOpportunitiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const JobOpportunitiesPage: React.FC<JobOpportunitiesPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<JobApplication>({
    fullName: '',
    birthdate: '',
    phone: '',
    email: '',
    referralSource: '',
    workExperience: '',
    weekdayAvailability: 'Flexible weekday afternoons',
    weekendAvailability: 'Available Saturdays and Sundays',
    desiredPay: '$14 – $16 / hr',
    resumeNotes: '',
    backgroundCheckConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: keyof JobApplication, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all contact details.');
      return;
    }
    if (!formData.backgroundCheckConsent) {
      setErrorMsg('You must consent to the background check requirement to be considered for employment working with children.');
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5E8] border border-[#F6C84A]/60 text-xs font-semibold text-[#243D50]">
            <Heart className="w-3.5 h-3.5 text-[#F47738]" />
            <span>Join Our Fun Family Team</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-[#243D50] tracking-tight">
            LOVE KIDS? JOIN OUR TEAM!
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Be part of a cheerful, energetic, and supportive work environment where smiles happen every single day. We offer flexible scheduling, competitive pay, and rewarding teamwork.
          </p>

          <div className="pt-2">
            <a
              href="#apply"
              className="px-8 py-3.5 text-xs font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-lg shadow-[#F47738]/25 transition-all inline-flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      {/* Culture & Open Roles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-[#F47738] flex items-center justify-center font-bold">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Play Floor Supervisor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintain safety and fun on the climbing structures, greet families warmly, ensure socks compliance, and keep our play areas clean and organized.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-[#4BBBD0] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Birthday Party Host</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lead unforgettable celebrations! Set up party rooms, coordinate cake timing, entertain birthday kids, assist parents, and handle all post-party cleanup.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF5E8] text-emerald-600 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#243D50]">Café Barista & Cashier</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Handcraft specialty espresso beverages and teas, prepare snacks, manage register check-ins, and create a calm oasis for parents.
            </p>
          </div>
        </div>

        {/* Qualifications & Environment */}
        <div className="bg-[#243D50] text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F6C84A]">
              WHAT WE LOOK FOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Qualifications & Work Culture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We look for enthusiastic individuals with genuine patience and a passion for working with children and young families:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Energetic, dependable, and smiling attitude around little adventurers.</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Weekend availability (Saturday or Sunday shifts are prime party times).</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Must pass a mandatory background check (safety of our kids is top priority).</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-[#4BBBD0] shrink-0 mt-0.5" />
              <span>Great communication skills with parents and fellow team members.</span>
            </div>
          </div>
        </div>

        {/* Full Application Form */}
        <div id="apply" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              ONLINE EMPLOYMENT APPLICATION
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-[#243D50]">
              Apply for a Position at Playland
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Complete the form below. We review all applications and contact selected candidates for interviews.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-emerald-900">
                Application Received!
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                Thank you for applying, {formData.fullName}! Our hiring manager will review your qualifications and contact you at {formData.phone} or {formData.email} regarding an interview.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-xl hover:bg-emerald-50"
              >
                Submit Update
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => handleChange('fullName', e.target.value)}
                    placeholder="e.g. Taylor Morgan"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.birthdate}
                    onChange={e => handleChange('birthdate', e.target.value)}
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
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    placeholder="704-555-0144"
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
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    placeholder="taylor@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    How Did You Hear About Us?
                  </label>
                  <input
                    type="text"
                    value={formData.referralSource}
                    onChange={e => handleChange('referralSource', e.target.value)}
                    placeholder="e.g. Visited with family, Instagram, Friend"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Desired Hourly Pay
                  </label>
                  <input
                    type="text"
                    value={formData.desiredPay}
                    onChange={e => handleChange('desiredPay', e.target.value)}
                    placeholder="$14 – $16 / hr"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Weekday Availability *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.weekdayAvailability}
                    onChange={e => handleChange('weekdayAvailability', e.target.value)}
                    placeholder="e.g. Mon, Wed, Fri afternoons"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Weekend Availability *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.weekendAvailability}
                    onChange={e => handleChange('weekendAvailability', e.target.value)}
                    placeholder="e.g. Saturdays all day, Sundays after 12pm"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Previous Work Experience (Childcare, Hospitality, Retail, etc.) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.workExperience}
                  onChange={e => handleChange('workExperience', e.target.value)}
                  placeholder="Summarize your past work experience, volunteer work, or babysitting history..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Resume Highlights or Additional Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.resumeNotes}
                  onChange={e => handleChange('resumeNotes', e.target.value)}
                  placeholder="Paste links to your LinkedIn, key certifications (CPR, First Aid), or tell us why you'd love to work at Playland..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                />
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.backgroundCheckConsent}
                    onChange={e => handleChange('backgroundCheckConsent', e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-[#F47738] focus:ring-[#F47738]"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    <strong>Background Check Consent:</strong> I acknowledge and agree that because Playland Pineville provides services to young children and families, any offer of employment is contingent upon successfully passing a background check and drug screening.
                  </span>
                </label>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 text-xs sm:text-sm font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-2xl shadow-xl shadow-[#F47738]/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                SUBMIT EMPLOYMENT APPLICATION
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
