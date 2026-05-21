import { motion } from "motion/react";

export function Gallery() {
  const images = [
    {
      src: "https://i1-e.pinimg.com/736x/e3/23/a1/e323a1cd62fa02c4df2b287357e867d0.jpg",
      alt: "Arara Azul",
      className: "w-[85%] max-w-[280px] md:max-w-none md:w-[40%] lg:w-[30%] aspect-[3/4] -rotate-6 md:absolute md:top-10 md:left-10 z-20",
      imageClass: "object-top"
    },
    {
      src: "https://i1-e.pinimg.com/1200x/0e/cc/c2/0eccc24d7071200527f83ad205431444.jpg",
      alt: "Onça Pintada",
      className: "w-[90%] max-w-[320px] md:max-w-none md:w-[50%] lg:w-[35%] aspect-square rotate-3 md:absolute md:top-24 md:right-10 z-30",
    },
    {
      src: "https://i1-e.pinimg.com/1200x/60/87/ae/6087aec3695d597bb1b2ca25a172b16d.jpg",
      alt: "Mico Leão Dourado",
      className: "w-[80%] max-w-[260px] md:max-w-none md:w-[40%] lg:w-[28%] aspect-[3/4] -rotate-12 md:absolute md:-bottom-12 md:left-4 z-30",
      imageClass: "object-top"
    },
    {
      src: "https://i.pinimg.com/736x/46/b7/84/46b784e843894f14c7fcd5be85e9d758.jpg",
      alt: "Tartaruga Marinha",
      className: "w-[95%] max-w-[340px] md:max-w-none md:w-[45%] lg:w-[32%] aspect-[16/9] rotate-6 md:absolute md:bottom-44 md:right-[38%] z-10",
    },
    {
      src: "https://i.pinimg.com/736x/75/7b/cb/757bcbdd423291a4c342128bced480ac.jpg",
      alt: "Tucano",
      className: "w-[85%] max-w-[310px] md:max-w-none md:w-[42%] lg:w-[28%] aspect-square -rotate-6 md:absolute md:bottom-12 md:right-12 z-30",
    },
    {
      src: "https://i1-e.pinimg.com/1200x/e8/8f/c6/e88fc6343dc1efefc10b440e4b1781a0.jpg",
      alt: "Sagui",
      className: "w-[75%] max-w-[220px] md:max-w-none md:w-[25%] lg:w-[16%] aspect-[3/4] rotate-12 md:absolute md:-top-24 md:-right-4 z-[70]",
    },
    {
      src: "https://i1-e.pinimg.com/736x/ce/16/3e/ce163e071643f155a7c2b235a525e2d8.jpg",
      alt: "Lobo Guará",
      className: "w-[90%] max-w-[300px] md:max-w-none md:w-[35%] lg:w-[25%] aspect-[3/4] -rotate-3 md:absolute md:top-10 md:right-[40%] z-0",
    }
  ];

  return (
    <section className="bg-[#102c5c] pt-24 md:pt-48 pb-24 md:pb-52 px-4 relative mb-[10px]">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%] z-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-[#102c5c]">
          <path d="M0,120 V40 L15,60 L25,30 L40,70 L60,20 L80,80 L100,40 L115,65 L140,25 L160,75 L180,35 L200,90 L220,20 L245,75 L260,30 L285,85 L310,25 L330,70 L350,15 L375,65 L390,30 L415,90 L435,35 L460,80 L485,25 L510,75 L535,30 L560,90 L580,20 L605,75 L620,35 L645,90 L665,25 L690,70 L710,15 L735,65 L760,30 L785,85 L810,25 L830,70 L850,20 L875,75 L890,30 L915,90 L935,35 L960,80 L985,25 L1010,75 L1035,30 L1060,90 L1080,20 L1105,75 L1120,35 L1145,90 L1165,25 L1190,70 L1200,40 V120 Z" />
        </svg>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#153461] opacity-50 mix-blend-multiply" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1b437e] transform skew-x-12 translate-x-10 opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative md:h-[750px] z-10">
        
        <div className="text-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-40 bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/20 shadow-2xl">
          <h2 className="text-5xl md:text-7xl font-display text-white uppercase tracking-tight mb-4">
            Galeria de <span className="text-[#dfee53]">Espécies</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-bold font-sans max-w-md mx-auto">
            A beleza do nosso bioma que precisamos salvar através da tecnologia e união.
          </p>
        </div>

        <div className="flex flex-col md:block items-center gap-10 mt-12 md:mt-0 w-full relative">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
              className={`relative ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className={`w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white/90 ${img.imageClass || 'object-center'}`}
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#1e4a86] px-6 py-2 rounded-full font-display uppercase tracking-wider text-sm whitespace-nowrap shadow-xl">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
