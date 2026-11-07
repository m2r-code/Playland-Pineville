import React, { useState } from 'react';
import { useCms } from '../../context/CmsContext';
import { X, Save, RotateCcw, Check, Sparkles, AlertCircle } from 'lucide-react';
import { AdmissionPricing, PartyPackage } from '../../types';

export const CmsEditorModal: React.FC = () => {
  const { pricing, updatePricing, partyPackages, updatePartyPackages, isCmsOpen, closeCms, resetDefaults } = useCms();
  
  const [tempPricing, setTempPricing] = useState<AdmissionPricing>({ ...pricing });
  const [tempPackages, setTempPackages] = useState<PartyPackage[]>(JSON.parse(JSON.stringify(partyPackages)));
  const [activeTab, setActiveTab] = useState<'admission' | 'parties'>('admission');
  const [savedNotice, setSavedNotice] = useState(false);

  // Sync state when opened
  React.useEffect(() => {
    if (isCmsOpen) {
      setTempPricing({ ...pricing });
      setTempPackages(JSON.parse(JSON.stringify(partyPackages)));
      setSavedNotice(false);
    }
  }, [isCmsOpen, pricing, partyPackages]);

  if (!isCmsOpen) return null;

  const handlePricingChange = (field: keyof AdmissionPricing, value: number) => {
    setTempPricing(prev => ({ ...prev, [field]: value }));
  };

  const handlePackagePriceChange = (pkgId: string, field: 'price' | 'weekdayPrice' | 'weekendPrice', val: number) => {
    setTempPackages(prev =>
      prev.map(p => {
        if (p.id === pkgId) {
          return { ...p, [field]: val };
        }
        return p;
      })
    );
  };

  const handleSaveAll = () => {
    updatePricing(tempPricing);
    updatePartyPackages(tempPackages);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      closeCms();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Reset all pricing and party packages to original Playland published defaults?')) {
      resetDefaults();
      setTempPricing({ ...pricing });
      closeCms();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#243D50]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-5 bg-[#243D50] text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6C84A]"></span>
              <h2 className="text-xl font-heading font-semibold text-white tracking-wide">
                Playland Content & Pricing Manager (CMS)
              </h2>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Verify or update official published admission prices, party packages, and rates before launch.
            </p>
          </div>
          <button
            onClick={closeCms}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close CMS"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 bg-[#FFF5E8]/40 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('admission')}
            className={`px-4 py-2.5 text-sm font-btn font-semibold rounded-t-xl transition-colors ${
              activeTab === 'admission'
                ? 'bg-white text-[#243D50] border-t-2 border-[#F47738] shadow-sm'
                : 'text-slate-600 hover:text-[#243D50]'
            }`}
          >
            Admission Prices & Rules
          </button>
          <button
            onClick={() => setActiveTab('parties')}
            className={`px-4 py-2.5 text-sm font-btn font-semibold rounded-t-xl transition-colors ${
              activeTab === 'parties'
                ? 'bg-white text-[#243D50] border-t-2 border-[#F47738] shadow-sm'
                : 'text-slate-600 hover:text-[#243D50]'
            }`}
          >
            Birthday Party Packages
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {savedNotice && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 animate-fadeIn">
              <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-medium">Changes saved successfully and updated live across all pages!</span>
            </div>
          )}

          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex gap-3 text-amber-900 text-xs leading-relaxed">
            <AlertCircle className="w-4 h-4 text-[#F47738] shrink-0 mt-0.5" />
            <div>
              <strong>CMS Live Synchronization:</strong> Modifications made here update the online booking calculator, pricing tables, package comparison cards, and party inquiries instantaneously.
            </div>
          </div>

          {activeTab === 'admission' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-semibold text-[#243D50] uppercase tracking-wider mb-2">
                    First Child — Mon–Thu ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tempPricing.firstChildWeekday}
                    onChange={e => handlePricingChange('firstChildWeekday', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-mono text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Ages 1–10, weekday admission.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-semibold text-[#243D50] uppercase tracking-wider mb-2">
                    First Child — Fri–Sun & Holidays ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tempPricing.firstChildWeekend}
                    onChange={e => handlePricingChange('firstChildWeekend', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-mono text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Ages 1–10, weekend & peak rate.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-semibold text-[#243D50] uppercase tracking-wider mb-2">
                    Additional Sibling — Mon–Thu ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tempPricing.siblingWeekday}
                    onChange={e => handlePricingChange('siblingWeekday', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-mono text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Discount for 2nd+ child in family.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-semibold text-[#243D50] uppercase tracking-wider mb-2">
                    Additional Sibling — Fri–Sun & Holidays ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tempPricing.siblingWeekend}
                    onChange={e => handlePricingChange('siblingWeekend', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-mono text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Weekend sibling admission.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-semibold text-[#243D50] uppercase tracking-wider mb-2">
                    Additional Adult — Mon–Fri ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tempPricing.additionalAdultWeekday}
                    onChange={e => handlePricingChange('additionalAdultWeekday', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-mono text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Applies only beyond 2 free adult passes.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-semibold text-[#243D50] uppercase tracking-wider mb-2">
                    Additional Adult — Sat–Sun ($)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={tempPricing.additionalAdultWeekend}
                    onChange={e => handlePricingChange('additionalAdultWeekend', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl font-mono text-sm text-[#243D50] focus:ring-2 focus:ring-[#F47738] focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Weekend extra adult rate.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF5E8] border border-[#F6C84A]/40 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#243D50]">Play Session Standard Duration</h4>
                  <p className="text-xs text-slate-600">Standard scheduled time included with all admissions.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-[#F47738]">2 Hours</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {tempPackages.map(pkg => (
                <div key={pkg.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-semibold text-base text-[#243D50]">{pkg.name}</h4>
                      <p className="text-xs text-slate-500">{pkg.description}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">Max {pkg.maxKids} kids</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {pkg.price !== undefined && (
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Package Price ($)</label>
                        <input
                          type="number"
                          value={pkg.price}
                          onChange={e => handlePackagePriceChange(pkg.id, 'price', parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-sm text-[#243D50]"
                        />
                      </div>
                    )}

                    {pkg.weekdayPrice !== undefined && (
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Weekday Price ($)</label>
                        <input
                          type="number"
                          value={pkg.weekdayPrice}
                          onChange={e => handlePackagePriceChange(pkg.id, 'weekdayPrice', parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-sm text-[#243D50]"
                        />
                      </div>
                    )}

                    {pkg.weekendPrice !== undefined && (
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Weekend Price ($)</label>
                        <input
                          type="number"
                          value={pkg.weekendPrice}
                          onChange={e => handlePackagePriceChange(pkg.id, 'weekendPrice', parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono text-sm text-[#243D50]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-rose-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Published Defaults
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={closeCms}
              className="px-4 py-2 text-xs font-btn font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAll}
              className="px-5 py-2 text-xs font-btn font-semibold text-white bg-[#F47738] hover:bg-[#db6123] rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              Save & Apply Prices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
