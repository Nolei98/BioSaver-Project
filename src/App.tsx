import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Animals } from "./components/Animals";
import { Gallery } from "./components/Gallery";
import { MathExplanation } from "./components/MathExplanation";
import { Calculator } from "./components/Calculator";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#dfee53] font-sans selection:bg-[#1e4a86] selection:text-white">
      <Banner />
      <About />
      <Animals />
      <Gallery />
      <MathExplanation />
      <Calculator />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
