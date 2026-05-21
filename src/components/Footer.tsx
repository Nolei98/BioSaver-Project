import { Globe2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#054a1a] text-center pt-16 border-t-[8px] border-b-[8px] border-[#dfee53] pb-16 px-4 flex flex-col items-center justify-center">
      <Globe2 className="w-16 h-16 text-[#dfee53] mb-4 stroke-[1.5]" />
      <h1 className="font-display text-5xl md:text-6xl text-[#dfee53] uppercase tracking-normal mb-8">
        Projeto<br/>BioSaver
      </h1>
      
      <div className="bg-[#088c34] p-8 rounded-[2.5rem] w-full max-w-3xl flex flex-col items-center border-[6px] border-[#dfee53]/20 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfee53]/10 transform rotate-45 translate-x-10 -translate-y-10 rounded-3xl pointer-events-none" />
         
         <h2 className="font-display text-2xl md:text-3xl text-[#dfee53] uppercase tracking-wide mb-1 relative z-10">
           Capstone - Cálculo 2
         </h2>
         <p className="font-sans font-bold text-white text-lg md:text-xl opacity-90 mb-6 relative z-10">
           Cohort 0725 - Jala University
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
