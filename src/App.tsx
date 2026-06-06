import { Banner } from "./components/Banner";
import { Calculator } from "./components/Calculator";
import { About } from "./components/About";
import { Animals } from "./components/Animals";
import { Gallery } from "./components/Gallery";
import { MathExplanation } from "./components/MathExplanation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { PresentationModal } from "./components/PresentationModal";
import { useState, useEffect } from "react";
import { Play, Leaf } from "lucide-react";
import { motion } from "motion/react";

const PRELOAD_IMAGES = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg'
];

export default function App() {
  const [showPresentation, setShowPresentation] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let imagesLoaded = 0;
    const totalImages = PRELOAD_IMAGES.length;

    if (totalImages === 0) {
      setIsLoaded(true);
      return;
    }

    const checkProgress = () => {
      imagesLoaded++;
      setLoadingProgress(Math.round((imagesLoaded / totalImages) * 100));
      if (imagesLoaded >= totalImages) {
        setTimeout(() => setIsLoaded(true), 800); // Give it a slight delay so user sees 100%
      }
    };

    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkProgress;
      img.onerror = checkProgress; // Continue on error to prevent being stuck forever
    });
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#1e4a86] flex flex-col items-center justify-center font-sans text-white p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center max-w-sm w-full"
        >
          <div className="bg-[#dfee53] p-4 rounded-2xl shadow-xl shadow-[#dfee53]/20 mb-8">
            <Leaf className="w-16 h-16 text-[#1e4a86]" />
          </div>
          
          <h1 className="font-display text-4xl font-bold tracking-tight mb-2">EcoCalc Engine</h1>
          <p className="text-white/70 mb-12 uppercase tracking-widest text-xs">Simulador de Conservação</p>
          
          <div className="w-full relative">
            <div className="flex justify-between text-sm mb-3 font-mono font-medium">
              <span className="text-white/60">Carregando Modelo</span>
              <span className="text-[#dfee53] drop-shadow-[0_0_8px_rgba(223,238,83,0.8)]">{loadingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#dfee53] shadow-[0_0_12px_rgba(223,238,83,0.6)]"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
            <div className="mt-8 text-center text-white/40 text-xs tracking-wider animate-pulse font-mono">
              INICIALIZANDO SIMULAÇÃO...
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#dfee53] font-sans selection:bg-[#1e4a86] selection:text-white pb-0 relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply z-50" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
      <div className="hidden md:block fixed inset-y-0 left-0 w-[14px] bg-[#dfee53] z-[100] pointer-events-none" />
      
      {/* Floating Presentation Button */}
      <button 
        onClick={() => setShowPresentation(true)}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-[100] bg-[#1e4a86] hover:bg-[#102c5c] text-white px-6 py-3 rounded-full font-display uppercase tracking-wider text-sm md:text-base shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 border-2 border-white/20"
      >
        <Play className="w-5 h-5 fill-current" />
        Apresentação <span className="hidden md:inline">do Projeto</span>
      </button>

      <Banner />
      <Calculator />
      <MathExplanation />
      <About />
      <Animals />
      <Gallery />
      <Footer />
      <ScrollToTop />

      <PresentationModal 
        isOpen={showPresentation} 
        onClose={() => setShowPresentation(false)} 
      />
    </div>
  );
}

