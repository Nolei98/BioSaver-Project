import { SquareRadical, FunctionSquare, Infinity as InfinityIcon } from "lucide-react";
import { motion } from "motion/react";

export function MathExplanation() {
  return (
    <section id="math" className="bg-white py-24 border-b-[8px] border-[#084c20]">
      <div className="max-w-6xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-16">
        
        <div className="md:w-1/3 flex justify-center relative">
            <div className="bg-[#e52026] text-white p-10 rounded-full flex items-center justify-center w-full aspect-square shadow-xl transform -rotate-3 text-center border-4 border-dashed border-white ring-8 ring-[#e52026] z-10">
                <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight leading-[0.9]">
                  Aplicação <br/>Matemática
                </h2>
            </div>
        </div>

        <div className="md:w-2/3 flex flex-col gap-10">
          <p className="text-2xl text-neutral-800 font-bold leading-snug">
            Em vez de prever o crescimento infinito que vemos na matemática básica, o sistema BioSaver aplica o <strong>Modelo Logístico de Verhulst</strong>. Isso espelha a realidade da natureza com alta precisão numérico-computacional.
          </p>

          <div className="bg-[#f2f2f2] p-8 md:p-10 flex flex-col items-start gap-4 shadow-sm border-l-8 border-[#084c20]">
              <span className="bg-[#1e4a86] text-white font-display uppercase px-4 py-1 text-xl">Equação Original</span>
              <div className="text-4xl md:text-6xl font-display text-[#084c20]">
                dP/dt = rP(1 - P/K)
              </div>
              <p className="font-bold text-neutral-600 text-lg uppercase tracking-wide">
                P: População &nbsp;&nbsp;|&nbsp;&nbsp; r: Taxa &nbsp;&nbsp;|&nbsp;&nbsp; K: Suporte do Bioma
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-[#e52026] rounded-full shrink-0 flex items-center justify-center text-white">
                 <SquareRadical className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="font-display text-2xl uppercase tracking-wider text-[#084c20]">Frações Parciais</h4>
                  <p className="text-neutral-600 font-medium">Usadas internamente para converter dados vitais no tempo exato (t).</p>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-[#fbaf00] rounded-full shrink-0 flex items-center justify-center text-white">
                 <InfinityIcon className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="font-display text-2xl uppercase tracking-wider text-[#084c20]">O Fator Limitante</h4>
                  <p className="text-neutral-600 font-medium">Garante que P(t) se estabilize em $K$ e não destrua o habitat.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
