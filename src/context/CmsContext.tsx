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

const safeGetItem = (key: string): string | null => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch {
    // Sandbox or blocked iframe storage
  }
  return null;
};

const safeSetItem = (key: string, val: string): void => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, val);
    }
  } catch {
    // Sandbox or blocked iframe storage
  }
};

const safeRemoveItem = (key: string): void => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  } catch {
    // Sandbox or blocked iframe storage
  }
};

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pricing, setPricing] = useState<AdmissionPricing>(() => {
    const saved = safeGetItem(STORAGE_KEY_PRICING);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_ADMISSION_PRICING;
      }
    }
    return DEFAULT_ADMISSION_PRICING;
  });

  const [partyPackages, setPartyPackages] = useState<PartyPackage[]>(() => {
    const saved = safeGetItem(STORAGE_KEY_PACKAGES);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_PARTY_PACKAGES;
      }
    }
    return DEFAULT_PARTY_PACKAGES;
  });

  const [isCmsOpen, setIsCmsOpen] = useState(false);

  useEffect(() => {
    safeSetItem(STORAGE_KEY_PRICING, JSON.stringify(pricing));
  }, [pricing]);

  useEffect(() => {
    safeSetItem(STORAGE_KEY_PACKAGES, JSON.stringify(partyPackages));
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
    safeRemoveItem(STORAGE_KEY_PRICING);
    safeRemoveItem(STORAGE_KEY_PACKAGES);
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
