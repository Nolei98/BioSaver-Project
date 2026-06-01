import { Banner } from "./components/Banner";
import { Calculator } from "./components/Calculator";
import { About } from "./components/About";
import { Animals } from "./components/Animals";
import { Gallery } from "./components/Gallery";
import { MathExplanation } from "./components/MathExplanation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { PresentationModal } from "./components/PresentationModal";
import { useState } from "react";
import { Play } from "lucide-react";

export default function App() {
  const [showPresentation, setShowPresentation] = useState(true);

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

