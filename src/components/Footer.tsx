import { Globe2 } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative z-50 bg-[#054a1a] text-center pt-16 border-t-[10px] border-[#dfee53] pb-16 px-4 flex flex-col items-center justify-center">
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src="https://i.imgur.com/M5tnTxI.png" 
          alt="BioSaver Logo" 
          className="w-24 h-24 mb-4 object-contain relative z-10" 
          referrerPolicy="no-referrer" 
          animate={{ 
            filter: [
              "drop-shadow(0px 0px 0px rgba(223,238,83,0)) brightness(1)", 
              "drop-shadow(0px 0px 20px rgba(223,238,83,0.6)) brightness(1.2)", 
              "drop-shadow(0px 0px 0px rgba(223,238,83,0)) brightness(1)"
            ] 
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1.5 }}
        />
      </motion.div>
      <h1 className="font-display text-5xl md:text-6xl text-[#dfee53] uppercase tracking-normal mb-8">
        Projeto<br/>BioSaver
      </h1>
      
      <div className="bg-[#088c34] p-8 rounded-[2.5rem] w-full max-w-3xl flex flex-col items-center border-[6px] border-[#dfee53]/20 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfee53]/10 transform rotate-45 translate-x-10 -translate-y-10 rounded-3xl pointer-events-none" />
         
         <h2 className="font-display text-2xl md:text-3xl text-[#dfee53] uppercase tracking-wide mb-1 relative z-10">
           Capstone - Cálculo 2
         </h2>
         <p className="font-sans font-bold text-white text-lg md:text-xl opacity-90 mb-1 relative z-10">
           Cohort 0725 - Jala University
         </p>
         <p className="font-sans font-medium text-white/80 text-base md:text-lg mb-6 relative z-10">
           Primeiro Semestre - 2026
         </p>
         
         <div className="flex flex-wrap justify-center gap-3 relative z-10">
           <span className="bg-[#1e4a86] text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md">
             Bruna Monteiro
           </span>
           <span className="bg-[#ee3e24] text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md">
             João Rodrigues
           </span>
           <span className="bg-[#fbaf00] text-[#084c20] px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md">
             Lucas Gonçalves
           </span>
         </div>
      </div>
    </footer>
  );
}
