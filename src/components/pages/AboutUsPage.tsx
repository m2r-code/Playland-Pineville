import React from 'react';
import { PageRoute } from '../../types';
import { BUSINESS_INFO } from '../../data/initialData';
import { Heart, ShieldCheck, Sparkles, Coffee, Smile, CheckCircle, Users } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5E8]/80 to-transparent py-14">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
            WHO WE ARE
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#243D50] tracking-tight">
            Our Story & Family Heart
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to Playland Pineville — where kids climb, slide, and explore while parents enjoy specialty coffee in a warm, welcoming community.
          </p>
        </div>
      </section>

      {/* Main Magazine Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-80 sm:h-96">
            <img
              src="/src/assets/images/hero_playground_1794032542616.jpg"
              alt="Playland Pineville playground and family area"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4BBBD0]">
              OUR ORIGIN
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#243D50]">
              Born From a Parent's Search for Balance
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              As parents ourselves, we frequently noticed that most children’s play centers were overwhelmingly loud, dimly lit, cluttered, or uncomfortable for adults. Parents were left sitting on plastic stools with mediocre instant coffee, waiting impatiently for time to run out.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We decided to rethink the entire experience from the ground up. We asked: <em>What if an indoor playground could be exciting, dynamic, and safe for children, yet genuinely pleasant, beautiful, and relaxing for mom and dad?</em> That vision became Playland Pineville.
            </p>
          </div>
        </div>

        {/* Family-Owned Business & Values */}
        <div className="bg-[#FFF5E8] rounded-3xl p-8 sm:p-12 border border-[#F6C84A]/30 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47738]">
              LOCAL & FAMILY OPERATED
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#243D50]">
              Proudly Rooted in Pineville, North Carolina
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Playland is an independent, family-owned business. We live in the greater Charlotte & Pineville area and our own kids test out the equipment! Because we are locally operated, we invest personally in our community, our incredible staff, and the families who walk through our doors every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <Heart className="w-6 h-6 text-[#F47738] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#243D50]">Warm Hospitality</h4>
              <p className="text-xs text-slate-600 mt-1">Every child is greeted with a smile and every parent with sincere courtesy.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <Users className="w-6 h-6 text-[#4BBBD0] mb-2" />
              <h4 className="font-heading font-bold text-base text-[#243D50]">Community First</h4>
              <p className="text-xs text-slate-600 mt-1">A welcoming hub for play dates, meetups, and birthday milestones.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <h4 className="font-heading font-bold text-base text-[#243D50]">Safety Commitment</h4>
              <p className="text-xs text-slate-600 mt-1">Zero compromises on structural safety, padding, or hygienic standards.</p>
            </div>
          </div>
        </div>

        {/* Facilities & Cleanliness */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              HYGIENE & CARE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#243D50]">
              Our Commitment to Hospital-Grade Cleanliness
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nothing matters more than your family’s health. We follow rigorous sanitization standards that exceed industry benchmarks:
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Nightly Electrostatic Disinfection:</strong> Hospital-grade, eco-friendly fogging across every inch of play surface.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Automated Ball Sanitization:</strong> Thousands of ball pit balls sanitized in high-capacity wash cycles.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Mandatory Clean Socks:</strong> Strict sock policy for all kids and adults prevents floor contaminants.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Continuous Touchpoint Care:</strong> Handrails, counters, and restrooms are sanitized continuously throughout each session.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-80 sm:h-96">
            <img
              src="/src/assets/images/cafe_experience_1794032544524.jpg"
              alt="Clean café and parents enjoying coffee at Playland Pineville"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#243D50] to-[#1a2d3b] rounded-3xl p-8 sm:p-12 text-center text-white space-y-4">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">Experience Playland First-Hand</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Bring your little ones for two hours of active exploration and treat yourself to our handcrafted espresso drinks.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('play-sessions')}
              className="px-6 py-3 text-xs font-btn font-bold text-white bg-[#F47738] hover:bg-[#db6123] rounded-xl shadow-lg transition-all"
            >
              BOOK YOUR PLAY SESSION
            </button>
            <button
              onClick={() => onNavigate('parties')}
              className="px-6 py-3 text-xs font-btn font-semibold text-slate-200 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
            >
              Learn About Birthday Parties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
