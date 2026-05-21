import { useState } from "react";
import Markdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Calculator as CalculatorIcon, ArrowRight, Loader2, Info } from "lucide-react";
import { motion } from "motion/react";

export function Calculator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    species: "",
    biome: "Amazônia",
    currentPop: "",
    targetPop: "",
    carryingCapacity: "",
    growthRate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    setTimeout(() => {
      document.getElementById('calculator-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    try {
      const response = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocorreu um erro no servidor.");
      }

      setResult(data.result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="bg-[#084c20] py-24 border-b-[16px] border-[#fbaf00]">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#1e4a86] text-white px-6 py-2 uppercase tracking-tight text-2xl font-display mb-4 shadow-xl">
            Simulador Engine
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-[#dfee53] uppercase tracking-tight">
            Faça o Cálculo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-4 space-y-6"
          >
            <div className="bg-[#dfee53] p-8 md:p-10 shadow-xl text-[#084c20] border-t-8 border-[#1e4a86]">
              <div className="flex items-center gap-3 mb-8">
                <CalculatorIcon className="w-10 h-10 text-[#084c20]" />
                <h3 className="font-display text-4xl uppercase tracking-wider">Parâmetros</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-lg font-display uppercase tracking-widest text-[#084c20]">Espécie</label>
                  <input required name="species" type="text" placeholder="Ex: Onça-Pintada" value={formData.species} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-bold placeholder:font-medium placeholder:text-neutral-300 transition-all font-sans" />
                </div>

                <div className="space-y-2">
                  <label className="text-lg font-display uppercase tracking-widest text-[#084c20]">Bioma</label>
                  <select required name="biome" value={formData.biome} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-bold transition-all font-sans">
                    <option value="Amazônia">Amazônia</option>
                    <option value="Cerrado">Cerrado</option>
                    <option value="Mata Atlântica">Mata Atlântica</option>
                    <option value="Caatinga">Caatinga</option>
                    <option value="Pantanal">Pantanal</option>
                    <option value="Pampa">Pampa</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-lg font-display uppercase tracking-widest text-[#084c20]" title="População Atual (P0)">Pop Atual</label>
                    <input required name="currentPop" type="number" min="1" placeholder="Ex: 50" value={formData.currentPop} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-mono font-bold transition-all" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-lg font-display uppercase tracking-widest text-[#084c20]" title="População Alvo">Pop Alvo</label>
                    <input required name="targetPop" type="number" min="1" placeholder="Ex: 200" value={formData.targetPop} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-mono font-bold transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-lg font-display uppercase tracking-widest text-[#084c20]" title="Capacidade de Suporte do Bioma">Cap. Suporte ($K$)</label>
                  <input required name="carryingCapacity" type="number" min="1" placeholder="Ex: 500" value={formData.carryingCapacity} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-mono font-bold transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-lg font-display uppercase tracking-widest text-[#084c20]" title="Taxa de Crescimento Populacional">Taxa Cresc. ($r$)</label>
                  <input required name="growthRate" type="number" step="0.001" placeholder="Ex: 0.15" value={formData.growthRate} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-mono font-bold transition-all" />
                </div>

                <button disabled={loading} type="submit" className="w-full mt-6 bg-[#ee3e24] hover:bg-[#1e4a86] text-white font-display py-4 flex items-center justify-center gap-3 transition-colors disabled:opacity-50 text-2xl uppercase tracking-wider">
                  {loading ? (
                     <>
                       <Loader2 className="w-8 h-8 animate-spin" /> Processando...
                     </>
                  ) : (
                     <>
                       Rodar Motor <ArrowRight className="w-8 h-8" />
                     </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div 
            id="calculator-results"
            className="lg:col-span-12 xl:col-span-8 flex flex-col min-h-[700px]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#ee3e24] text-white p-8 mb-8 shadow-xl border-l-8 border-[#9862a9]"
              >
                <div className="font-display uppercase text-2xl mb-2 text-[#fbaf00]">Erro na Simulação</div>
                <p className="font-bold font-sans text-lg">{error}</p>
              </motion.div>
            )}

            {!result && !loading && !error && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-[#0c5928] border-8 border-dashed border-[#116e33] text-[#dfee53]">
                <CalculatorIcon className="w-24 h-24 mb-6 opacity-50" />
                <h3 className="font-display text-4xl mb-4 uppercase tracking-normal">Aguardando Execução</h3>
                <p className="text-xl max-w-lg font-sans font-bold opacity-80 leading-snug">
                  Entregue os parâmetros logísticos para iniciar as equações matemáticas de Verhulst e calcular o tempo t.
                </p>
              </div>
            )}

            {loading && (
               <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-white text-[#084c20] border-t-8 border-[#1e4a86]">
                 <Loader2 className="w-24 h-24 animate-spin text-[#1e4a86] mb-8" />
                 <h3 className="font-display text-5xl uppercase tracking-tight">Separando Variáveis...</h3>
                 <p className="font-sans font-bold mt-4 text-xl opacity-70">Executando integrais utilizando inteligência Gemini AI Engine.</p>
               </div>
            )}

            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-14 h-full flex flex-col border-t-8 border-[#9862a9] text-[#084c20]"
              >
                <div className="prose prose-xl max-w-none 
                  prose-headings:font-display prose-headings:tracking-normal prose-headings:uppercase
                  prose-h2:text-[#1e4a86] prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-[#fbaf00] prose-h2:text-4xl prose-h2:mt-12
                  prose-h3:text-[#084c20] prose-h3:text-3xl
                  prose-p:leading-relaxed prose-p:font-bold prose-p:font-sans
                  prose-li:font-bold prose-li:font-sans
                  prose-strong:text-[#1e4a86] prose-strong:font-black
                  prose-code:text-[#ee3e24] prose-code:font-mono prose-code:font-bold prose-code:bg-neutral-100 prose-code:p-1">
                  <Markdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={{
                      h2: ({node, ...props}) => <h2 className="first:mt-0" {...props} />
                    }}
                  >
                    {result}
                  </Markdown>
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
