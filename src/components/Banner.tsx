import { Bird } from "lucide-react";
import { motion } from "motion/react";

export function Banner() {
  return (
    <section className="relative w-full bg-[#dfee53] flex flex-col items-center text-center pt-16 pb-12 border-b-[12px] border-[#1e4a86]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full relative">
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-[#1e4a86]"
          >
            <Bird className="w-16 h-16 md:w-20 md:h-20 fill-current stroke-[1.5]" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <motion.img 
              src="https://i.imgur.com/M5tnTxI.png" 
              alt="BioSaver Logo" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain z-10 relative drop-shadow-2xl" 
              referrerPolicy="no-referrer" 
            />
            {/* Brilho no Olho da Arara (CSS Flare) */}
            <motion.div
              className="absolute z-20 pointer-events-none"
              style={{ top: '45%', left: '43%' }}
              animate={{ 
                scale: [0, 1, 0, 0],
                rotate: [0, 90, 180, 180],
                opacity: [0, 1, 0, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-[18px] md:w-[24px] h-[2px] bg-white absolute rounded-full blur-[0.5px]"></div>
                <div className="w-[2px] h-[18px] md:h-[24px] bg-white absolute rounded-full blur-[0.5px]"></div>
                <div className="w-[4px] md:w-[6px] h-[4px] md:h-[6px] bg-white absolute rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.7)]"></div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            className="text-[#1e4a86]"
          >
            <Bird className="w-16 h-16 md:w-20 md:h-20 fill-current stroke-[1.5] scale-x-[-1]" />
          </motion.div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-display text-[#084c20] uppercase tracking-normal leading-[0.9] mb-8"
        >
          Tempos de<br/>
          Animais<br/>
          Silvestres
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-[#084c20] max-w-3xl mx-auto font-medium leading-snug mb-8"
        >
          O retorno à natureza é um <strong className="font-black">processo vital</strong> que movimenta forças para regenerar o mundo. Em nosso levantamento baseado no ecossistema brasileiro, das mais de 16.000 espécies avaliadas, <strong>3.289 encontram-se ameaçadas de extinção</strong>. A matemática traz estimativas claras sobre a conservação para colocá-las a salvo.
        </motion.p>
      </div>
    </section>
  );
}
