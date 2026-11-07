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

// Error boundary component
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Applet uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#FFF5E8] text-[#243D50] font-sans">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center space-y-4">
            <div className="w-12 h-12 bg-[#F47738]/10 text-[#F47738] rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
              !
            </div>
            <h2 className="text-xl font-heading font-bold text-[#243D50]">
              Welcome to Playland Pineville
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We encountered a slight display hiccup while loading the page. Click the button below to reload cleanly.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.hash = '';
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-[#F47738] text-white text-xs font-semibold rounded-xl shadow-md hover:bg-[#db6123] transition-colors"
            >
              Refresh Playland Website
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash routing with page state safely
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const rawHash = (window.location.hash || '').replace(/^#\/?/, '').trim().toLowerCase();
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
        if (validRoutes.includes(rawHash as PageRoute)) {
          setCurrentRoute(rawHash as PageRoute);
        } else if (!rawHash) {
          setCurrentRoute('home');
        }
        // If hash is an anchor like 'packages', do not change currentRoute, allowing smooth scroll
      } catch (err) {
        console.warn('Hash routing warning:', err);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    try {
      window.location.hash = route;
    } catch {
      // Ignored if window location cannot be modified in some iframes
    }
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

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutUsPage onNavigate={handleNavigate} />;
      case 'experience':
        return <ExperiencePage onNavigate={handleNavigate} onOpenPhoto={setActivePhoto} />;
      case 'pricing':
        return <HoursAndPricingPage onNavigate={handleNavigate} />;
      case 'play-sessions':
        return <PlaySessionsPage onNavigate={handleNavigate} />;
      case 'parties':
        return <PartiesPage onNavigate={handleNavigate} />;
      case 'cafe':
        return <CafePage onNavigate={handleNavigate} />;
      case 'gift-certificates':
        return <GiftCertificatesPage onNavigate={handleNavigate} />;
      case 'waiver':
        return <WaiverPage onNavigate={handleNavigate} />;
      case 'faq-safety':
        return <FaqSafetyPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactUsPage onNavigate={handleNavigate} />;
      case 'careers':
        return <JobOpportunitiesPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenPhoto={setActivePhoto} />;
    }
  };

  return (
    <ErrorBoundary>
      <CmsProvider>
        <div className="min-h-screen flex flex-col bg-[#FFF5E8]/20 text-[#243D50] relative selection:bg-[#F47738]/20 selection:text-[#F47738]">
          {/* Navigation */}
          <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

          {/* Dynamic Page Router - Guaranteed Never Blank */}
          <main className="flex-1">
            {renderActivePage()}
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
    </ErrorBoundary>
  );
}
