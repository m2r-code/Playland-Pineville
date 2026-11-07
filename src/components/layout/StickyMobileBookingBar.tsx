import React from 'react';
import { PageRoute } from '../../types';
import { Sparkles, FileText } from 'lucide-react';

interface StickyMobileBookingBarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const StickyMobileBookingBar: React.FC<StickyMobileBookingBarProps> = ({ currentRoute, onNavigate }) => {
  // If user is already on booking page, hide or minimize to not distract
  if (currentRoute === 'play-sessions') return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={() => {
            onNavigate('waiver');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 py-2.5 px-3 rounded-xl border border-slate-300 text-xs font-semibold text-[#243D50] hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <FileText className="w-3.5 h-3.5 text-[#F47738]" />
          Waiver
        </button>

        <button
          onClick={() => {
            onNavigate('play-sessions');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-2 py-2.5 px-4 rounded-xl bg-[#F47738] hover:bg-[#db6123] text-white text-xs font-btn font-semibold shadow-md shadow-[#F47738]/20 flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <Sparkles className="w-3.5 h-3.5" />
          BOOK PLAY SESSION
        </button>
      </div>
    </div>
  );
};
