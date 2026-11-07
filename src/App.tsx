import React, { useState, useEffect } from 'react';
import { PageRoute, GalleryPhoto } from './types';
import { CmsProvider } from './context/CmsContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileBookingBar } from './components/layout/StickyMobileBookingBar';
import { ImageLightbox } from './components/common/ImageLightbox';
import { CmsEditorModal } from './components/common/CmsEditorModal';
import { LegalModals } from './components/modals/LegalModals';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutUsPage } from './components/pages/AboutUsPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { HoursAndPricingPage } from './components/pages/HoursAndPricingPage';
import { PlaySessionsPage } from './components/pages/PlaySessionsPage';
import { PartiesPage } from './components/pages/PartiesPage';
import { CafePage } from './components/pages/CafePage';
import { GiftCertificatesPage } from './components/pages/GiftCertificatesPage';
import { WaiverPage } from './components/pages/WaiverPage';
import { FaqSafetyPage } from './components/pages/FaqSafetyPage';
import { ContactUsPage } from './components/pages/ContactUsPage';
import { JobOpportunitiesPage } from './components/pages/JobOpportunitiesPage';
import { GALLERY_PHOTOS } from './data/initialData';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash routing with page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'experience',
        'pricing',
        'play-sessions',
        'parties',
        'cafe',
        'gift-certificates',
        'waiver',
        'faq-safety',
        'contact',
        'careers',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const idx = GALLERY_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const nextIdx = (idx + 1) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[nextIdx]);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const idx = GALLERY_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const prevIdx = (idx - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[prevIdx]);
  };

  return (
    <CmsProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF5E8]/20 text-[#243D50] relative selection:bg-[#F47738]/20 selection:text-[#F47738]">
        {/* Navigation */}
        <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

        {/* Dynamic Page Router */}
        <main className="flex-1">
          {currentRoute === 'home' && (
            <HomePage onNavigate={handleNavigate} onOpenPhoto={setActivePhoto} />
          )}
          {currentRoute === 'about' && (
            <AboutUsPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'experience' && (
            <ExperiencePage onNavigate={handleNavigate} onOpenPhoto={setActivePhoto} />
          )}
          {currentRoute === 'pricing' && (
            <HoursAndPricingPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'play-sessions' && (
            <PlaySessionsPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'parties' && (
            <PartiesPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'cafe' && (
            <CafePage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'gift-certificates' && (
            <GiftCertificatesPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'waiver' && (
            <WaiverPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'faq-safety' && (
            <FaqSafetyPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'contact' && (
            <ContactUsPage onNavigate={handleNavigate} />
          )}
          {currentRoute === 'careers' && (
            <JobOpportunitiesPage onNavigate={handleNavigate} />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenPrivacy={() => setLegalModal('privacy')}
          onOpenTerms={() => setLegalModal('terms')}
        />

        {/* Sticky Mobile Booking Bar */}
        <StickyMobileBookingBar
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
        />

        {/* Lightbox Modal */}
        <ImageLightbox
          photo={activePhoto}
          onClose={() => setActivePhoto(null)}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
        />

        {/* CMS Live Price & Content Editor Modal */}
        <CmsEditorModal />

        {/* Privacy Policy & Terms Modal */}
        <LegalModals
          type={legalModal}
          onClose={() => setLegalModal(null)}
        />
      </div>
    </CmsProvider>
  );
}
