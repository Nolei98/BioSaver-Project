import { Bird } from "lucide-react";
import { motion } from "motion/react";

export function Banner() {
  return (
    <section className="relative w-full bg-[#dfee53] flex flex-col items-center text-center pt-16 pb-12 border-b-[6px] border-[#084c20]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full relative">
        <div className="flex items-center justify-center gap-4 mb-6 text-[#1e4a86]">
          <Bird className="w-16 h-16 md:w-24 md:h-24 fill-current stroke-[1.5]" />
          <Bird className="w-16 h-16 md:w-24 md:h-24 fill-current stroke-[1.5] scale-x-[-1]" />
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
