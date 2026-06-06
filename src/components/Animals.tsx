import React, { useRef } from "react";
import { TriangleAlert, Database, Bird, Bug, Cat, Turtle, Fish, Leaf, Rabbit, Snail, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface AnimalData {
  Especie: string;
  Bioma: string;
  Risco: string;
  K: number;
  PopAtual: number;
}

export function Animals() {
  const animals: AnimalData[] = [
    { Especie: "Plantas", Bioma: "Global", Risco: "Ameaçado", K: 62000, PopAtual: 25000 },
    { Especie: "Mamíferos", Bioma: "Global", Risco: "Ameaçado", K: 5900, PopAtual: 1300 },
    { Especie: "Aves", Bioma: "Global", Risco: "Ameaçado", K: 11000, PopAtual: 1400 },
    { Especie: "Répteis", Bioma: "Global", Risco: "Ameaçado", K: 9000, PopAtual: 1600 },
    { Especie: "Peixes", Bioma: "Global", Risco: "Ameaçado", K: 25000, PopAtual: 3600 },
    { Especie: "Invertebrados", Bioma: "Global", Risco: "Ameaçado", K: 25000, PopAtual: 6000 },
    { Especie: "Anfíbios", Bioma: "Global", Risco: "Ameaçado", K: 7400, PopAtual: 2400 },
  ];

  const getWedgeColor = (index: number) => {
    const colors = ["#60c5a8", "#ffd700", "#b57edc", "#f0567a", "#42b9d3", "#7ac142", "#5494cc", "#f16a30"];
    return colors[index % colors.length];
  };

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getRandomIcon = (index: number, especie: string = "") => {
    let Selected = Bird;
    const name = especie ? especie.toLowerCase() : "";
    
    if (name.includes("planta") || name.includes("flora")) Selected = Leaf;
    else if (name.includes("mamífero") || name.includes("onça") || name.includes("mico")) Selected = Rabbit;
    else if (name.includes("ave") || name.includes("arara")) Selected = Bird;
    else if (name.includes("réptil") || name.includes("tartaruga")) Selected = Turtle;
    else if (name.includes("peixe")) Selected = Fish;
    else if (name.includes("invertebrado") || name.includes("inseto")) Selected = Bug;
    else if (name.includes("anfíbio") || name.includes("sapo")) Selected = Snail;
    else {
      const icons = [Cat, Bird, Turtle, Bug, Fish, Rabbit, Snail, Leaf];
      Selected = icons[index % icons.length];
    }
    
    return <Selected className="w-40 h-40 text-neutral-900 fill-neutral-900 stroke-none" style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.15))" }} />;
  };

  return (
    <section id="animals" className="bg-[#f5f5f5] py-24 px-4 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/clean-textile.png')" }} />
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-16 w-full">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="bg-[#e52026] text-white p-6 rounded-full w-48 h-48 shrink-0 flex items-center justify-center text-center shadow-xl transform -rotate-6 border-4 border-dashed border-white ring-8 ring-[#e52026]">
                <h2 className="text-2xl font-display uppercase tracking-tight leading-[1.1]">
                  A Situação <br/>das Espécies <br/> Ameaçadas
                </h2>
            </div>
            <div className="hidden md:block">
              <p className="font-sans font-bold text-neutral-600 outline-none text-xl max-w-sm">
                Gráficos mostrando a proporção global de espécies em perigo em relação ao total avaliado no mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 w-full group/slider flex items-center justify-center">
          <button 
            onClick={() => scroll("left")}
            className="hidden md:flex shrink-0 w-20 h-20 mr-6 -ml-16 bg-[#dde7b3] rounded-full shadow-2xl items-center justify-center z-30 text-[#084c20] hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-white border-4 border-[#084c20]"
          >
            <ChevronLeft className="w-12 h-12 -ml-1" />
          </button>

          <div className="flex-1 w-full border-8 border-dashed border-[#084c20] bg-white rounded-3xl p-4 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23084c20\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')" }} />
          
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-10 md:gap-16 pb-12 pt-8 px-4 scroll-smooth hide-scrollbar w-full relative z-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {animals.map((animal, i) => {
              const chartData = [
              { name: "População Atual", value: animal.PopAtual || 0 },
              { name: "Margem Restante", value: Math.max(0, (animal.K || 0) - (animal.PopAtual || 0)) }
            ];
            const wedgeColor = getWedgeColor(i);

            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" }}
                key={i} 
                className="flex flex-col items-center justify-center text-center group min-w-[280px] md:min-w-[320px] snap-center shrink-0 bg-white shadow-xl rounded-[2.5rem] p-8 border-4 border-transparent hover:border-[#dde7b3] transition-all duration-300"
              >
                <div className="relative w-64 h-64 flex items-center justify-center mb-8">
                  <div className="absolute inset-0 bg-neutral-100/80 rounded-full scale-100 border-8 border-white shadow-inner" />
                  
                  <div className="absolute inset-0 z-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          startAngle={90}
                          endAngle={-270}
                          innerRadius={0}
                          outerRadius="95%"
                          dataKey="value"
                          stroke="none"
                          isAnimationActive={true}
                        >
                          <Cell fill={wedgeColor} fillOpacity={0.9} />
                          <Cell fill="transparent" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="absolute inset-0 z-10 flex items-center justify-center group-hover:scale-[1.15] transition-transform duration-500 will-change-transform">
                     {getRandomIcon(i, animal.Especie)}
                  </div>
                </div>

                <div className="mt-2 w-full text-center flex flex-col items-center bg-neutral-50 p-4 rounded-3xl border border-neutral-100">
                  <h3 className="font-display font-bold text-2xl text-[#1e4a86] uppercase tracking-wider mb-3 w-full border-b-2 border-neutral-200 pb-2">
                    {animal.Especie}
                  </h3>
                  <div className="font-sans text-neutral-800 text-lg leading-snug uppercase font-medium flex flex-col gap-1">
                    <span className="text-[#088c34] font-black tracking-wide">{animal.K} AVALIADOS</span>
                    <span className="text-sm text-neutral-400">vs</span>
                    <span className="text-[#e52026] font-black tracking-wide">{animal.PopAtual} AMEAÇADOS</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {animals.length === 0 && (
            <div className="w-full py-20 flex flex-col items-center">
               <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center mb-6">
                 <Database className="w-12 h-12 text-neutral-400" />
               </div>
               <p className="text-neutral-500 font-display text-4xl uppercase tracking-wide">Nenhum dado informado.</p>
            </div>
          )}
          </div>
          </div>
          
          <button 
            onClick={() => scroll("right")}
            className="hidden md:flex shrink-0 w-20 h-20 ml-6 -mr-16 bg-[#dde7b3] rounded-full shadow-2xl items-center justify-center z-30 text-[#084c20] hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-white border-4 border-[#084c20]"
          >
            <ChevronRight className="w-12 h-12 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
