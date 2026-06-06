import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PresentationModal({ isOpen, onClose }: PresentationModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image paths for the slides.
  // The user needs to upload these images to the 'public' folder using the File Explorer.
  const slides = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg'
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(s => s + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(s => s - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 lg:p-8 overflow-hidden font-sans"
        >
          {/* Main Slide Container using aspect-video to ensure 16:9 scaling */}
          <div 
            style={{ aspectRatio: '16/9', maxHeight: '75vh', maxWidth: 'calc(75vh * 16 / 9)' }} 
            className="w-full relative shadow-2xl shrink-0 rounded-lg overflow-hidden bg-[#E2EBCD]"
          >
            <div className="w-full h-full relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`w-full h-full absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    index === currentSlide 
                      ? 'opacity-100 z-10 scale-100' 
                      : 'opacity-0 z-0 scale-[0.98] pointer-events-none'
                  }`}
                >
                  <img 
                    src={slide} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/1920x1080/E2EBCD/2B4222?text=Slide+${index + 1}%5CnFa%C3%A7a+upload+do+arquivo+${index + 1}.jpg+na+pasta+public`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Overlay (Outside the slide container) */}
          <div className="mt-8 z-50 flex items-center gap-6 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-white/20">
             <button 
                onClick={handlePrev} 
                disabled={currentSlide === 0}
                className="text-white hover:text-green-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Slide Anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <div className="flex gap-3">
                {slides.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-3 rounded-full transition-all ${i === currentSlide ? 'bg-green-400 w-10' : 'bg-white/40 hover:bg-white/60 w-3'}`}
                    title={`Ir para o slide ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className={`transition-colors flex items-center justify-center ${currentSlide === slides.length - 1 ? 'text-green-400 font-bold' : 'text-white hover:text-green-300'}`}
                title={currentSlide === slides.length - 1 ? 'Iniciar Aplicação' : 'Próximo Slide'}
              >
                {currentSlide === slides.length - 1 ? (
                    <span className="flex items-center uppercase tracking-wider ml-2 text-lg">
                      Site <Play className="w-6 h-6 fill-current ml-2" />
                    </span>
                ) : (
                    <ChevronRight className="w-8 h-8" />
                )}
              </button>
          </div>

          <button 
             onClick={onClose}
             className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
             title="Fechar Apresentação"
          >
             <X className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
