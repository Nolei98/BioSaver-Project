import { useState } from "react";
import { Calculator as CalculatorIcon, ArrowRight, Loader2, Info } from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const speciesOptions = [
  { name: "Arara-Azul", r: 0.08 },
  { name: "Onça-Pintada", r: 0.05 },
  { name: "Orangotango-de-Sumatra", r: 0.04 },
  { name: "Tigre-de-Sumatra", r: 0.06 },
  { name: "Gorila-Oriental", r: 0.03 },
];

export function Calculator() {
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState<{ year: number, pop: number }[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    species: speciesOptions[0].name,
    currentPop: "",
    targetPop: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultData(null);

    setTimeout(() => {
      document.getElementById('calculator-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    // Simulando delay para UI realista
    setTimeout(() => {
      try {
        const r = speciesOptions.find(s => s.name === formData.species)?.r || 0.05;
        const P0 = parseInt(formData.currentPop);
        const K = parseInt(formData.targetPop);

        if (isNaN(P0) || isNaN(K) || P0 < 0 || K <= 0) {
          throw new Error("Por favor, insira valores válidos para as populações.");
        }

        if (P0 >= K) {
          throw new Error("A População Inicial já é maior ou igual à Quantidade Limite.");
        }

        const data: { year: number, pop: number }[] = [];
        let P = P0;
        let year = 0;

        data.push({ year, pop: Math.round(P) });

        // Calculando de acordo com Euler
        while (Math.round(P) < K && year < 10000) {
          const dPdt = r * P * (1 - (P / K));
          P = P + dPdt;
          year++;
          data.push({ year, pop: Math.round(P) });
          
          if (dPdt <= 0) {
             throw new Error("A simulação estagnou. Verifique os parâmetros.");
          }
        }

        setResultData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 1200);
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
                  <label className="text-lg font-display uppercase tracking-widest text-[#084c20]">Seleção da Espécie</label>
                  <select required name="species" value={formData.species} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-bold transition-all font-sans">
                    {speciesOptions.map((s) => (
                       <option key={s.name} value={s.name}>{s.name} (r={s.r})</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-lg font-display uppercase tracking-widest text-[#084c20]" title="População Atual (P0)">População Inicial (P)</label>
                  <input required name="currentPop" type="number" min="1" placeholder="Ex: 50" value={formData.currentPop} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-mono font-bold transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-lg font-display uppercase tracking-widest text-[#084c20]" title="População Alvo">Quantidade Limite (K)</label>
                  <input required name="targetPop" type="number" min="1" placeholder="Ex: 1000" value={formData.targetPop} onChange={handleChange} className="w-full bg-white border-4 border-[#084c20] text-neutral-900 px-4 py-3 text-lg focus:outline-none focus:ring-none font-mono font-bold transition-all" />
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

            {!resultData && !loading && !error && (
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
                 <p className="font-sans font-bold mt-4 text-xl opacity-70">Executando o Método de Euler na matriz logística.</p>
               </div>
            )}

            {resultData && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 md:p-10 h-full flex flex-col border-t-8 border-[#9862a9] text-[#084c20]"
              >
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-4xl mb-8 uppercase text-center text-[#1e4a86]">Projeção Populacional</h3>
                  
                  <div className="w-full h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={resultData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                        <XAxis 
                          dataKey="year" 
                          label={{ value: 'Tempo (Anos)', position: 'bottom', offset: 0, fill: '#6b7280', fontWeight: 'bold' }} 
                          tick={{ fill: '#6b7280', fontWeight: 'bold' }}
                          axisLine={{ stroke: '#9ca3af' }}
                          tickLine={{ stroke: '#9ca3af' }}
                        />
                        <YAxis 
                          label={{ value: 'Quantidade de Animais', angle: -90, position: 'insideLeft', offset: -10, fill: '#6b7280', fontWeight: 'bold' }} 
                          tick={{ fill: '#6b7280', fontWeight: 'bold' }}
                          axisLine={{ stroke: '#9ca3af' }}
                          tickLine={{ stroke: '#9ca3af' }}
                        />
                        <Tooltip 
                           contentStyle={{ fontWeight: "bold", borderRadius: "8px", border: "4px solid #1e4a86", color: "#1e4a86" }}
                           labelStyle={{ color: "#084c20", marginBottom: "4px" }}
                           formatter={(value) => [`${value} animais`, "População"]}
                           labelFormatter={(label) => `Ano: ${label}`}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="pop" 
                          stroke="#e52026" 
                          strokeWidth={4} 
                          dot={false}
                          activeDot={{ r: 8, fill: "#fbaf00", stroke: "#e52026", strokeWidth: 3 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-8 p-6 bg-[#dfee53] border-l-8 border-[#084c20] text-[#084c20]">
                    <p className="text-xl font-sans font-bold leading-tight">
                      Para chegar ao limite de animais para reintrodução, serão necessários {resultData.length - 1} anos.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
