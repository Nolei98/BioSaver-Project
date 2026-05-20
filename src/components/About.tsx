import { Globe2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full flex flex-col">
      <div className="bg-[#1e4a86] w-full flex flex-col md:flex-row items-center py-10 px-4 md:px-10 gap-8 h-auto">
         <Globe2 className="w-40 h-40 md:w-64 md:h-64 text-[#94b1d6] shrink-0" />
         <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-display uppercase leading-tight">
               O PROJETO BIOSAVER É A <br/>
               <span className="text-4xl md:text-6xl">MAIOR ESPERANÇA</span><br/>
               LÓGICA E PRECISA
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-bold bg-[#153461] inline-block px-4 py-2">
               *perde apenas para o instinto da própria natureza.
            </p>
         </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto">
        <div className="w-full md:w-1/2 bg-[#088c34] p-10 md:p-16 flex flex-col items-center justify-center text-center text-white border-b-4 md:border-b-0 md:border-r border-[#dfee53]/20">
           <h3 className="text-5xl md:text-6xl font-display uppercase mb-4">Cálculo II</h3>
           <p className="text-lg md:text-xl font-medium leading-relaxed max-w-sm">
             Aplica a modelagem analítica e equações diferenciais para estimar o período exato, provendo viabilidade de espécies na natureza.
           </p>
        </div>
        <div className="w-full md:w-1/2 bg-[#088c34] p-10 md:p-16 flex flex-col items-center justify-center text-center text-white">
           <h3 className="text-5xl md:text-6xl font-display uppercase mb-4 text-[#dfee53]">Foco Sul Americano</h3>
           <p className="text-lg md:text-xl font-medium leading-relaxed max-w-sm">
             É de responsabilidade do sistema prever a capacidade de suporte dos nossos biomas, da Amazônia aos Pampas.
           </p>
        </div>
      </div>

      <div className="bg-[#fbaf00] w-full p-10 md:p-16 flex flex-col md:flex-row items-center justify-center text-center gap-8 md:gap-16 relative">
         <div className="w-48 h-48 md:w-64 md:h-64 bg-[#d17a00] mask-brazil shrink-0 opacity-80" style={{ maskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></svg>')", WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"50\"/></svg>')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
         <div className="text-white max-w-lg relative z-10">
            <h2 className="text-3xl md:text-5xl font-display uppercase leading-tight mb-4 text-[#6e1e00]">
               MILHÕES DE ANIMAIS
            </h2>
            <p className="text-xl md:text-2xl font-medium text-[#8a2900] leading-snug">
               são projetados anualmente nas nossas equações matemáticas para determinar a viabilidade biológica da reinserção.
            </p>
         </div>
      </div>
    </section>
  );
}
