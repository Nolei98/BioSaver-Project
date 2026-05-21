import { motion } from "motion/react";

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1552728089-57458cb51ad1?auto=format&fit=crop&q=80&w=800",
      alt: "Arara Azul",
      className: "w-[80%] md:w-[60%] lg:w-[40%] aspect-[4/3] -rotate-6 md:absolute md:top-20 md:left-10 z-20",
    },
    {
      src: "https://images.unsplash.com/photo-1602491453631-b2b512c1b898?auto=format&fit=crop&q=80&w=800",
      alt: "Onça Pintada",
      className: "w-[90%] md:w-[50%] lg:w-[35%] aspect-square rotate-3 md:absolute md:top-40 md:right-10 z-30",
    },
    {
      src: "https://images.unsplash.com/photo-1541812833118-2e06180fc5cd?auto=format&fit=crop&q=80&w=800",
      alt: "Mico Leão Dourado",
      className: "w-[70%] md:w-[40%] lg:w-[30%] aspect-[3/4] -rotate-12 md:absolute md:bottom-20 md:left-[15%] z-40",
    },
    {
      src: "https://images.unsplash.com/photo-1519782570087-c0e7ed815f90?auto=format&fit=crop&q=80&w=800",
      alt: "Tartaruga Marinha",
      className: "w-[85%] md:w-[45%] lg:w-[35%] aspect-[16/9] rotate-6 md:absolute md:bottom-10 md:right-1/4 z-10",
    },
    {
      src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&q=80&w=800",
      alt: "Tucano",
      className: "w-[75%] md:w-[40%] lg:w-[25%] aspect-square -rotate-6 md:absolute md:-bottom-10 md:-right-10 z-30",
    },
    {
      src: "https://images.unsplash.com/photo-1627883259837-7756f7e411b9?auto=format&fit=crop&q=80&w=800",
      alt: "Sagui",
      className: "w-[75%] md:w-[30%] lg:w-[20%] aspect-[3/4] rotate-12 md:absolute md:top-[60%] md:left-[5%] z-50",
    },
    {
      src: "https://images.unsplash.com/photo-1595133379669-e77a2eaabe09?auto=format&fit=crop&q=80&w=800",
      alt: "Lobo Guará",
      className: "w-[85%] md:w-[35%] lg:w-[25%] aspect-[3/4] -rotate-3 md:absolute md:top-10 md:right-1/3 z-0",
    }
  ];

  return (
    <section className="bg-[#1e4a86] py-24 md:py-48 px-4 overflow-hidden relative border-b-[12px] border-[#fbaf00]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#153461] opacity-50 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1b437e] transform skew-x-12 translate-x-10 opacity-30" />
      
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
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white/90"
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
