import { useState, useEffect } from "react";
import { Sprout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 md:p-4 rounded-full bg-[#084c20] text-white shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:bg-[#dfee53] hover:text-[#084c20] hover:scale-110 active:scale-95 transition-all outline-none border-2 border-white/20 hover:border-[#084c20] flex items-center justify-center group"
          title="Voltar ao topo"
        >
          <Sprout className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
