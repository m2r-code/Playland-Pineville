import React from 'react';
import { X, Shield, Scale } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/initialData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#243D50]/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-slate-200"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#243D50] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#4BBBD0]" />
            ) : (
              <Scale className="w-5 h-5 text-[#F6C84A]" />
            )}
            <h3 className="font-heading font-semibold text-lg text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026<br />
                Playland Pineville ({BUSINESS_INFO.legalName}) is committed to safeguarding the privacy of our visitors, families, and online customers.
              </p>
              <h4 className="font-bold text-sm text-[#243D50] pt-2">1. Information We Collect</h4>
              <p>
                We collect personal information you voluntarily provide when booking a play session, completing the participant waiver through Aluvii, reserving a birthday party, purchasing gift certificates, or applying for employment. This includes names, email addresses, phone numbers, child birthdates, and emergency contacts.
              </p>
              <h4 className="font-bold text-sm text-[#243D50] pt-2">2. How We Use Information</h4>
              <p>
                Information is strictly used to confirm reservations, verify digital safety waivers upon arrival, communicate vital schedule or inclement weather notices, process secure admissions, and maintain a safe environment for all children. We never sell, rent, or trade your personal information.
              </p>
              <h4 className="font-bold text-sm text-[#243D50] pt-2">3. Online Payment Security</h4>
              <p>
                Payment card details processed via our ticketing partner Aluvii are encrypted and handled in compliance with PCI-DSS standards. We do not store full credit card credentials on our servers.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated:</strong> January 2026<br />
                By entering the Playland Pineville facility or booking services through this website, you agree to the following terms and facility guidelines:
              </p>
              <h4 className="font-bold text-sm text-[#243D50] pt-2">1. Supervision & Responsibility</h4>
              <p>
                Playland Pineville is not a drop-off care center. All children must be accompanied and supervised by a responsible adult (aged 18 or older) at all times during their visit.
              </p>
              <h4 className="font-bold text-sm text-[#243D50] pt-2">2. Socks Policy & Sanitation</h4>
              <p>
                Clean socks are strictly required for all children and adults entering padded playground zones and carpeted play rooms. Bare feet and street shoes are prohibited in the play structures.
              </p>
              <h4 className="font-bold text-sm text-[#243D50] pt-2">3. Waiver Requirements</h4>
              <p>
                Every minor child must have a valid electronic liability waiver executed by their parent or legal guardian prior to using any play equipment. Waivers are valid for one calendar year.
              </p>
              <h4 className="font-bold text-sm text-[#243D50] pt-2">4. Cancellations & Rescheduling</h4>
              <p>
                Open play sessions can be rescheduled with at least 24 hours notice. Birthday party reservations require a $100 non-refundable deposit.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#243D50] hover:bg-slate-700 rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
