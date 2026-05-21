import { Banner } from "./components/Banner";
import { Calculator } from "./components/Calculator";
import { About } from "./components/About";
import { Animals } from "./components/Animals";
import { Gallery } from "./components/Gallery";
import { MathExplanation } from "./components/MathExplanation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#dfee53] font-sans selection:bg-[#1e4a86] selection:text-white pb-0 relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply z-50 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
      <div className="hidden md:block fixed inset-y-0 left-0 w-[14px] bg-[#dfee53] z-[100] pointer-events-none border-r-2 border-[#1e4a86]/10" />
      <Banner />
      <Calculator />
      <MathExplanation />
      <About />
      <Animals />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
