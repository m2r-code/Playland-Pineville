import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../../types';

interface ImageLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ photo, onClose, onNext, onPrev }) => {
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Image */}
        <div className="overflow-hidden rounded-2xl max-h-[75vh] flex items-center justify-center bg-black/40 shadow-2xl">
          <img
            src={photo.image}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain rounded-2xl select-none"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white px-4">
          <h3 className="font-heading font-semibold text-lg text-white">{photo.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
};
