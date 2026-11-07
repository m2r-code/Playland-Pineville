import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdmissionPricing, PartyPackage } from '../types';
import { DEFAULT_ADMISSION_PRICING, DEFAULT_PARTY_PACKAGES } from '../data/initialData';

interface CmsContextType {
  pricing: AdmissionPricing;
  updatePricing: (newPricing: AdmissionPricing) => void;
  partyPackages: PartyPackage[];
  updatePartyPackages: (packages: PartyPackage[]) => void;
  isCmsOpen: boolean;
  openCms: () => void;
  closeCms: () => void;
  resetDefaults: () => void;
}

const STORAGE_KEY_PRICING = 'playland_pineville_pricing_v1';
const STORAGE_KEY_PACKAGES = 'playland_pineville_packages_v1';

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pricing, setPricing] = useState<AdmissionPricing>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PRICING);
      return saved ? JSON.parse(saved) : DEFAULT_ADMISSION_PRICING;
    } catch {
      return DEFAULT_ADMISSION_PRICING;
    }
  });

  const [partyPackages, setPartyPackages] = useState<PartyPackage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PACKAGES);
      return saved ? JSON.parse(saved) : DEFAULT_PARTY_PACKAGES;
    } catch {
      return DEFAULT_PARTY_PACKAGES;
    }
  });

  const [isCmsOpen, setIsCmsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PRICING, JSON.stringify(pricing));
    } catch (e) {
      console.warn('Could not save pricing to localStorage', e);
    }
  }, [pricing]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PACKAGES, JSON.stringify(partyPackages));
    } catch (e) {
      console.warn('Could not save packages to localStorage', e);
    }
  }, [partyPackages]);

  const updatePricing = (newPricing: AdmissionPricing) => {
    setPricing(newPricing);
  };

  const updatePartyPackages = (packages: PartyPackage[]) => {
    setPartyPackages(packages);
  };

  const resetDefaults = () => {
    setPricing(DEFAULT_ADMISSION_PRICING);
    setPartyPackages(DEFAULT_PARTY_PACKAGES);
    try {
      localStorage.removeItem(STORAGE_KEY_PRICING);
      localStorage.removeItem(STORAGE_KEY_PACKAGES);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <CmsContext.Provider
      value={{
        pricing,
        updatePricing,
        partyPackages,
        updatePartyPackages,
        isCmsOpen,
        openCms: () => setIsCmsOpen(true),
        closeCms: () => setIsCmsOpen(false),
        resetDefaults,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
