import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PresentationModal({ isOpen, onClose }: PresentationModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Cover
    (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold">j</div>
          <span className="font-sans font-bold text-xl tracking-tight">Jala <span className="font-normal opacity-80">University</span></span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent pointer-events-none" />
        <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 mb-8 mt-12 perspective-1000">
           <div className="w-full h-full rounded-[30%] bg-gradient-to-tr from-green-400 via-yellow-300 to-purple-600 blur-sm flex items-center justify-center shadow-[0_0_80px_rgba(255,200,50,0.4)] animate-pulse">
              <div className="w-[90%] h-[90%] bg-white/10 rounded-[28%] backdrop-blur-sm border border-white/30" />
           </div>
        </div>
        <h1 className="text-8xl md:text-[140px] font-black tracking-tighter mix-blend-difference absolute z-20" style={{WebkitTextStroke: '2px white', color: 'transparent', textShadow: '4px 4px 0 rgba(255,255,255,0.1)'}}>AXION</h1>
        <div className="z-20 mt-12 border-t-2 border-white/30 pt-4 flex flex-col items-center">
            <span className="text-yellow-400 tracking-[0.2em] uppercase font-bold text-sm md:text-base">Volumetric Modeling Software</span>
            <div className="border border-white rounded-full px-6 py-2 mt-4 text-green-400 font-bold text-2xl tracking-wider">
                2D TO 3D
            </div>
        </div>
        <div className="absolute bottom-8 right-8 text-right flex flex-col items-end z-20 text-xs md:text-sm">
            <h3 className="font-bold tracking-widest uppercase mb-2">Members</h3>
            <span className="font-bold">Durval Lima de Araujo Neto</span>
            <span className="font-bold">João Igôr Rodrigues Nunes</span>
            <span className="font-bold">Luiz Guilherme Aruantes de Araujo</span>
            <span className="font-bold">Álisson José de Santana</span>
            <span className="font-bold">Mikael Silva Larreste</span>
            <span className="font-bold">Thales Akahori Fabian</span>
            <span className="font-bold">João Lucas do Nascimento silva</span>
        </div>
      </div>
    ),
    // Slide 2: Summary
    (
      <div className="w-full h-full flex flex-col md:flex-row bg-[#111111] text-white relative overflow-hidden p-8 md:p-16">
         <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center relative z-10">
            <div className="bg-white/90 p-4 rounded-xl border-4 border-white/20 w-full max-w-lg aspect-auto md:aspect-square flex flex-col justify-between grid grid-cols-2 grid-rows-2 gap-2">
                <div className="bg-gray-300 flex items-center justify-center p-4"><span className="text-6xl text-blue-500 font-bold">j</span></div>
                <div className="bg-gray-300 flex items-center justify-center p-4"><span className="text-6xl text-black font-thin outline-text">j</span></div>
                <div className="bg-gray-300 flex items-center justify-center p-4"><span className="text-6xl text-gray-800 font-serif">j</span></div>
                <div className="bg-gray-300 flex items-center justify-center p-4 shadow-inner relative overflow-hidden"><span className="text-6xl text-blue-600 font-bold drop-shadow-xl z-10">j</span> <div className="absolute inset-0 bg-blue-500/20 blur-md"></div></div>
            </div>
         </div>
         <div className="w-full md:w-1/2 h-full flex flex-col justify-center pl-0 md:pl-16 relative z-10 mt-8 md:mt-0">
             <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 blur-[2px] shadow-[0_0_50px_rgba(255,0,100,0.3)]"></div>
             <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-2 z-10">Summary</h2>
             <div className="w-full h-1 bg-white mb-8 z-10"></div>
             <ul className="flex flex-col gap-4 font-sans text-xs md:text-sm tracking-widest uppercase z-10 w-full">
                 <li className="flex justify-between border-b border-white/20 pb-2"><span>01</span><span>About Axion</span></li>
                 <li className="flex justify-between border-b border-white/20 pb-2"><span>02</span><span>Main Objectives</span></li>
                 <li className="flex justify-between border-b border-white/20 pb-2"><span>03</span><span>Commercial Aplications</span></li>
                 <li className="flex justify-between border-b border-white/20 pb-2"><span>04</span><span>How was calculus implemented? Module 1</span></li>
                 <li className="flex justify-between border-b border-white/20 pb-2"><span>05</span><span>How was calculus implemented? Module 2</span></li>
                 <li className="flex justify-between border-b border-white/20 pb-2"><span>06</span><span>Conclusion/Thanks</span></li>
             </ul>
         </div>
      </div>
    ),
    // Slide 3: About
    (
      <div className="w-full h-full flex flex-col items-end justify-center bg-[#111111] text-white relative overflow-hidden p-8 md:p-16">
         <div className="absolute left-[-10%] top-[20%] w-[60vh] h-[60vh] rounded-full border-[40px] border-t-pink-500 border-r-purple-600 border-b-blue-600 border-l-cyan-400 opacity-80 blur-[1px] rotate-45"></div>
         <div className="absolute right-[-5%] top-[-10%] w-[30vh] h-[30vh] rounded-full border-[20px] border-t-green-400 border-r-blue-500 border-b-pink-500 border-l-yellow-400 opacity-80 blur-[1px]"></div>
         
         <div className="w-full md:w-2/3 flex flex-col relative z-10 items-end">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 text-right">About Axion</h2>
            <div className="w-full h-1 bg-white mb-8"></div>
            <div className="border border-white rounded-[40px] p-8 md:p-12 bg-black/40 backdrop-blur-md">
                <p className="font-sans text-sm md:text-base leading-relaxed uppercase tracking-wider mb-8 text-justify">
                    Axion is a project focused on reducing the time and effort required to create 3D models. It offers an app that automatically converts 2D objects into fully usable 3D models, streamlining the design and prototyping workflow.
                </p>
                <p className="font-sans text-sm md:text-base leading-relaxed uppercase tracking-wider text-justify">
                    The main idea is to decentralize the tool from a standard, giving companies and users the freedom to make their tool unique, thus preventing "coincidence" and increasing losses for their applications running their customization on their machine/server. It also aims to provide versions for users who already wish to use a tool specifically tailored to their area.
                </p>
            </div>
         </div>
      </div>
    ),
    // Slide 4: Objectives
    (
      <div className="w-full h-full flex flex-col md:flex-row bg-[#111111] text-white relative overflow-hidden p-8 md:p-16 gap-8">
         <div className="w-full md:w-[40%] flex flex-col h-full bg-white/90 p-4 rounded-xl border border-white/20 gap-4 grid grid-cols-2 grid-rows-2">
            <div className="bg-gray-300 flex items-center justify-center aspect-square border border-gray-400"></div>
            <div className="bg-gray-300 flex items-center justify-center p-4 border border-gray-400"><div className="w-16 h-16 border-2 border-black/50 rotate-45 bg-gradient-to-tr from-white to-gray-400"></div></div>
            <div className="bg-gray-300 flex items-center justify-center p-4 border border-gray-400"><div className="w-16 h-16 border-2 border-black/50 rotate-45 bg-gradient-to-tr from-white to-gray-400"></div></div>
            <div className="bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
               <div className="w-16 h-16 bg-gradient-to-tr from-green-400 via-yellow-400 to-red-500 mb-4 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
               <span className="text-3xl font-black tracking-tighter">AXION</span>
               <span className="text-[8px] uppercase tracking-widest mt-1">2D to 3D</span>
            </div>
         </div>
         <div className="w-full md:w-[60%] flex flex-col relative z-10">
             <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 blur-[2px] shadow-[0_0_30px_rgba(255,0,255,0.4)] z-0"></div>
             
             <h2 className="text-6xl md:text-[80px] font-black tracking-tighter uppercase mb-4 leading-[0.9] z-10">Main<br/>Objectives</h2>
             <div className="w-full h-1 bg-white mb-8 z-10"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
                 <div className="flex flex-col gap-4">
                     <div className="border border-white rounded-[30px] p-6">
                         <div className="border border-white rounded-full px-4 py-1 text-center font-bold tracking-widest uppercase mb-4 max-w-max mx-auto">Technical</div>
                         <ul className="list-disc pl-4 text-xs tracking-wider uppercase space-y-2">
                             <li>System capable of converting 2D to 3D</li>
                             <li>Automation for modeling and visualization tools</li>
                         </ul>
                     </div>
                     <div className="border border-white rounded-[30px] p-6">
                         <div className="border border-white rounded-full px-4 py-1 text-center font-bold tracking-widest uppercase mb-4 max-w-max mx-auto">Usability</div>
                         <ul className="list-disc pl-4 text-xs tracking-wider uppercase space-y-2">
                             <li>Compatibility</li>
                             <li>Optimized</li>
                             <li>Usable in various sectors</li>
                         </ul>
                     </div>
                 </div>
                 <div className="flex flex-col gap-4">
                     <div className="border border-white rounded-[30px] p-6 flex-1">
                         <div className="border border-white rounded-full px-4 py-1 text-center font-bold tracking-widest uppercase mb-4 max-w-max mx-auto">Efficiency</div>
                         <ul className="list-disc pl-4 text-xs tracking-wider uppercase space-y-2">
                             <li>Reduction of time and effort</li>
                             <li>Reduce production costs</li>
                             <li>Workflow acceleration</li>
                             <li>Door for the inexperienced</li>
                         </ul>
                     </div>
                     <div className="border border-white rounded-[30px] p-6">
                         <div className="border border-white rounded-full px-4 py-1 text-center font-bold tracking-widest uppercase mb-4 max-w-max mx-auto">Others</div>
                         <ul className="list-disc pl-4 text-xs tracking-wider uppercase space-y-2">
                             <li>Authenticity</li>
                             <li>For WWW</li>
                             <li>Offline</li>
                             <li>Direction</li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    ),
    // Slide 5: Commercial Applications
    (
      <div className="w-full h-full flex flex-col bg-[#111111] text-white relative overflow-hidden p-8 md:p-12">
        <div className="flex justify-between items-end border-b border-white pb-4 mb-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase relative z-10 w-full">Commercial Applications</h2>
            <div className="absolute right-8 top-8 w-24 h-24 bg-gradient-to-bl from-green-400 via-yellow-400 to-red-500 rounded-lg rotate-12 z-0 opacity-80 shadow-[0_0_20px_rgba(255,255,0,0.3)]"></div>
        </div>
        
        <div className="flex flex-col gap-8 flex-1 overflow-y-auto pr-4">
            <div className="flex gap-8">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-white/90 border border-white/20 rounded-lg grid grid-cols-2 grid-rows-2">
                   <div className="flex justify-center items-center font-black text-black">C</div>
                   <div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full border border-black text-black flex items-center justify-center font-bold">$</div></div>
                   <div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full border border-black text-black flex items-center justify-center font-bold">$</div></div>
                   <div className="flex justify-center items-center"><div className="w-8 h-8 rounded-full border border-black font-bold text-blue-600 bg-gray-200 flex items-center justify-center shadow-inner">$</div></div>
                </div>
                <div className="flex flex-col justify-center">
                   <h4 className="font-sans uppercase tracking-widest text-lg font-bold mb-4">E-Commerce and Retail</h4>
                   <p className="font-sans text-xs md:text-sm uppercase tracking-wider leading-relaxed text-gray-300">
                     INITIALLY, THE IDEA WAS TO IMPLEMENT IT IN THE SHOPPING CART TO PROVIDE GREATER CONVENIENCE FOR THE CUSTOMER, SINCE THIS INTERACTIVE 360° VIEW COULD REDUCE UNCERTAINTY AT THE TIME OF PURCHASE, THUS INCREASING THE CUSTOMER'S CONFIDENCE IN THE PRODUCT THAT THEY WERE ABLE TO VIEW FROM ALL ANGLES.
                   </p>
                </div>
            </div>
            <div className="flex gap-8 border-t border-white/20 pt-8">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-white/90 border border-white/20 rounded-lg grid grid-cols-2 grid-rows-2">
                   <div className="flex justify-center items-center"><div className="w-8 h-8 border-2 border-black/50 rotate-45"></div></div>
                   <div className="flex justify-center items-center"><div className="w-8 h-8 border-2 border-black/50 border-dashed"></div></div>
                   <div className="flex justify-center items-center"><div className="w-8 h-8 border-2 border-black/50 rounded-lg"></div></div>
                   <div className="flex justify-center items-center"><div className="w-8 h-8 bg-blue-100 border-2 border-blue-400 rotate-45 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div></div>
                </div>
                <div className="flex flex-col justify-center">
                   <h4 className="font-sans uppercase tracking-widest text-lg font-bold mb-4">Augmented Reality (AR)</h4>
                   <p className="font-sans text-xs md:text-sm uppercase tracking-wider leading-relaxed text-gray-300">
                     IN THIS SECTION, THE IDEA REVOLVES AROUND TRY-BEFORE-YOU-BUY AND FOCUSES ON REDUCING PRODUCT RETURN RATES, WHICH CREATES A BALANCE FOR COMPANIES WITH HIGH RETURN RATES DUE TO PRODUCT MISINTERPRETATION.
                   </p>
                </div>
            </div>
            <div className="flex gap-8 border-t border-white/20 pt-8 pb-8">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-white/90 border border-white/20 rounded-lg grid grid-cols-2 grid-rows-2">
                   <div className="flex justify-center items-center"><div className="w-6 h-6 border-[3px] border-black/50 rounded-full"></div></div>
                   <div className="flex justify-center items-center"><div className="w-6 h-6 border-[3px] border-black/50 rounded-full"></div></div>
                   <div className="flex justify-center items-center"><div className="w-6 h-6 border-[3px] border-black/50 rounded-full"></div></div>
                   <div className="flex justify-center items-center"><div className="w-6 h-6 border-[3px] border-red-500 bg-red-100 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div></div>
                </div>
                <div className="flex flex-col justify-center">
                   <h4 className="font-sans uppercase tracking-widest text-lg font-bold mb-4">Animation and Market</h4>
                   <p className="font-sans text-xs md:text-sm uppercase tracking-wider leading-relaxed text-gray-300">
                     AXION HAS HIGH EXPECTATIONS FOR FACILITATING THE DEVELOPMENT OF CHARACTERS AND ADVERTISING ELEMENTS THAT WERE PREVIOUSLY IN 2D, MOVING THEM TO 3D. THE FOCUS IS ON STREAMLINING THE ANIMATOR'S PROCESS, ALLOWING THEM TO FOCUS MORE ON POSES AND DRAWING THEM IN 2D, AS THE TOOL WILL HANDLE THE FINAL TOUCHES FOR THEM.
                   </p>
                </div>
            </div>
        </div>
      </div>
    ),
    // Slide 6: Calculus Module I
    (
      <div className="w-full h-full flex flex-col md:flex-row bg-[#111111] text-white relative overflow-hidden p-8 md:p-12 gap-8">
        <div className="absolute top-[-5%] left-[30%] w-32 h-32 rotate-12 blur-[1px]">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl fill-none stroke-orange-400 stroke-[4]">
            <path d="M50 5 L60 35 L95 40 L70 60 L75 95 L50 75 L25 95 L30 60 L5 40 L40 35 Z" fill="url(#starGrad)" />
            <defs>
              <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="w-full md:w-[40%] flex flex-col z-10 justify-between">
           <div>
               <h2 className="text-[50px] md:text-[70px] font-black tracking-tighter uppercase leading-[0.85] mb-4">How was<br/>Calculus<br/>Implemented?</h2>
               <div className="w-full h-1 bg-white mb-8"></div>
           </div>
           
           <div className="border-4 border-white rounded-3xl p-4 bg-black/40 overflow-hidden relative group mt-auto aspect-[4/3] flex items-center justify-center">
              <div className="w-3/4 h-3/4 relative flex items-end justify-center">
                  <div className="w-full h-full absolute inset-0 flex flex-col">
                       {/* Simplified Vase Representation */}
                       <div className="w-16 h-8 mx-auto border-x border-t border-pink-400/50 rounded-t-[50%]"></div>
                       <div className="w-16 h-12 mx-auto border-x border-pink-400/50"></div>
                       <div className="w-32 h-32 mx-auto border border-pink-400/50 rounded-[50%] bg-pink-500/20 backdrop-blur-sm grid grid-cols-6 grid-rows-6">
                           {[...Array(36)].map((_,i)=><div key={i} className="border border-pink-400/50 w-full h-full"></div>)}
                       </div>
                       <div className="w-24 h-6 mx-auto border-x border-b border-pink-400/50 rounded-b-[50%]"></div>
                  </div>
              </div>
           </div>
        </div>
        
        <div className="w-full md:w-[60%] flex flex-col z-10">
           <div className="border border-white rounded-[40px] p-8 md:p-12 h-full flex flex-col">
               <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">Module I: Solids of Revolution</h3>
               <p className="text-xl font-bold mb-4 font-sans tracking-wide">Fundamental Principle: Disk method</p>
               <p className="text-sm md:text-base font-sans opacity-90 mb-10 leading-relaxed">Creates symmetrical 3D objects (vases, chalices) by rotating a 2D profile around an axis.</p>
               
               <div className="flex flex-col gap-6 flex-1">
                   <div className="flex gap-4">
                       <div className="w-1/2 relative bg-pink-500 text-white rounded-xl p-6 mt-4 shadow-lg shadow-pink-500/20">
                           <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded-full border-4 border-[#111111]">1</div>
                           <h4 className="font-bold text-lg mb-2">The Disk Method</h4>
                           <p className="text-xs font-sans leading-relaxed">The 3D volume is obtained by the continuous sum (integral) of the areas of infinitely thin circular disks.</p>
                       </div>
                       <div className="w-1/2 relative bg-pink-500 text-white rounded-xl p-6 mt-4 shadow-lg shadow-pink-500/20">
                           <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded-full border-4 border-[#111111]">2</div>
                           <h4 className="font-bold text-lg mb-2">Input</h4>
                           <p className="text-xs font-sans leading-relaxed">For example, the user draws half of the vase profile, which is approximated by a function y = f(x)</p>
                       </div>
                   </div>
                   
                   <div className="w-full relative bg-pink-500 text-white rounded-xl p-6 mt-4 shadow-lg shadow-pink-500/20">
                       <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded-full border-4 border-[#111111]">3</div>
                       <h4 className="font-bold text-lg mb-2">Formula and Volume Calculation</h4>
                       <p className="text-sm font-sans leading-relaxed">The total volume (V) is the integral of the circular cross-sectional area A(x) = π·[r(x)]², where the radius r(x) is f(x).</p>
                   </div>
               </div>
           </div>
        </div>
      </div>
    ),
    // Slide 7: Calculus Module II
    (
      <div className="w-full h-full flex flex-col md:flex-row bg-[#111111] text-white relative overflow-hidden p-8 md:p-12 gap-8">
        <div className="absolute top-[-5%] right-[-10%] w-64 h-64 border-[40px] border-b-cyan-400 border-r-purple-500 border-t-pink-500 border-l-yellow-400 rounded-full blur-[2px] opacity-80 z-0 rotate-[70deg]"></div>
        
        <div className="w-full md:w-[60%] flex flex-col z-10 order-2 md:order-1">
           <div className="border border-white rounded-[40px] p-8 md:p-12 h-full flex flex-col">
               <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">Module II: Extrusion Solids</h3>
               <p className="text-xl font-bold mb-4 font-sans tracking-wide">Fundamental Principle: Known Cross Sections</p>
               <p className="text-sm md:text-base font-sans opacity-90 mb-10 leading-relaxed">Creates prismatic and non-symmetrical 3D objects by "dragging" a 2D shape in a straight line or along a path.</p>
               
               <div className="flex flex-col gap-6 flex-1">
                   <div className="flex gap-4">
                       <div className="w-1/2 relative bg-pink-500 text-white rounded-xl p-6 mt-4 shadow-lg shadow-pink-500/20">
                           <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded-full border-4 border-[#111111]">1</div>
                           <h4 className="font-bold text-lg mb-2">Known Cross-Sections</h4>
                           <p className="text-xs font-sans leading-relaxed">3D volume obtained by the continuous summation of the cross-sectional area (2D figure) along the drag distance.</p>
                       </div>
                       <div className="w-1/2 relative bg-pink-500 text-white rounded-xl p-6 mt-4 shadow-lg shadow-pink-500/20">
                           <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded-full border-4 border-[#111111]">2</div>
                           <h4 className="font-bold text-lg mb-2">Input</h4>
                           <p className="text-xs font-sans leading-relaxed">For example, the user draws a square base, which is represented by A.</p>
                       </div>
                   </div>
                   
                   <div className="w-full relative bg-pink-500 text-white rounded-xl p-6 mt-4 shadow-lg shadow-pink-500/20">
                       <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white text-black font-bold flex items-center justify-center rounded-full border-4 border-[#111111]">3</div>
                       <h4 className="font-bold text-lg mb-2">Volume Calculation</h4>
                       <p className="text-sm font-sans leading-relaxed mb-6">The total volume V of the cube is the integral of the constant area A(z) along the height H (z-axis).</p>
                       <p className="text-sm font-sans font-bold">V = the integral from zero to H A(z)dz = integral from zero to H of L²dz</p>
                   </div>
               </div>
           </div>
        </div>
        
        <div className="w-full md:w-[40%] flex flex-col z-10 order-1 md:order-2 justify-between items-end">
           <div className="text-right">
               <h2 className="text-[50px] md:text-[70px] font-black tracking-tighter uppercase leading-[0.85] mb-4">How was<br/>Calculus<br/>Implemented?</h2>
               <div className="w-full h-1 bg-white mb-8"></div>
           </div>
           
           <div className="border-4 border-white bg-black/40 rounded-3xl p-6 w-full mt-auto aspect-square flex items-center justify-center relative overflow-hidden group">
              {/* Simplified Grid & Cube */}
              <div className="absolute inset-4 grid grid-cols-10 grid-rows-10 border border-white/20 opacity-30">
                  {[...Array(100)].map((_,i)=><div key={i} className="border border-white/20"></div>)}
              </div>
              <div className="w-3/4 h-3/4 relative z-10 perspective-1000">
                  <div className="w-full h-full bg-pink-500/80 rounded border-2 border-white transform rotate-x-45 rotate-y-45 shadow-[20px_20px_30px_rgba(236,72,153,0.4)] flex items-center justify-center">
                     <div className="w-1/2 h-1/2 border-2 border-white/50 relative">
                         <div className="w-4 h-4 bg-white rounded-full absolute -top-2 -left-2"></div>
                         <div className="w-4 h-4 bg-white rounded-full absolute -top-2 -right-2"></div>
                         <div className="w-4 h-4 bg-white rounded-full absolute -bottom-2 -left-2"></div>
                         <div className="w-4 h-4 bg-white rounded-full absolute -bottom-2 -right-2"></div>
                     </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
    ),
    // Slide 8: Thank You
    (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#111111] text-white relative overflow-hidden">
        <div className="absolute top-10 flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold">j</div>
          <span className="font-sans font-bold text-xl tracking-tight">Jala <span className="font-normal opacity-80">University</span></span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
             <span className="text-[300px] font-black uppercase tracking-tighter">Thank You</span>
        </div>

        <div className="relative z-10 mt-16 w-64 h-64 md:w-96 md:h-96 mb-8 perspective-1000">
           <div className="w-full h-full rounded border border-white/50 bg-gradient-to-tr from-green-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_80px_rgba(255,0,100,0.6)] transform rotate-x-12 -rotate-y-12">
               <div className="absolute bg-gradient-to-b from-white/40 to-transparent w-full h-[15%] top-0"></div>
               <div className="absolute bg-gradient-to-r from-white/40 to-transparent w-[15%] h-full left-0"></div>
           </div>
           {/* 'THANK YOU' overlaying the cube */}
           <h1 className="text-8xl md:text-[160px] font-black tracking-tighter uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] mix-blend-overlay">
               Thank <br/><span className="pl-16">You</span>
           </h1>
           <h1 className="text-8xl md:text-[160px] font-black tracking-tighter uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{WebkitTextStroke: '2px white', color: 'transparent'}}>
               Thank <br/><span className="pl-16">You</span>
           </h1>
        </div>
        
        <div className="absolute bottom-8 right-8 font-sans font-bold tracking-widest uppercase text-sm md:text-base">
            To be continued...
        </div>
      </div>
    )
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(s => s + 1);
    } else {
      onClose(); // Auto close on next after last slide
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(s => s - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* Main Slide Container */}
          <div className="w-full max-w-7xl h-full md:h-[80vh] bg-[#111111] relative md:rounded-2xl md:overflow-hidden md:border border-white/10 shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slide Content */}
            <div className="w-full h-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {slides[currentSlide]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <button 
                onClick={handlePrev} 
                disabled={currentSlide === 0}
                className="text-white hover:text-white/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className={`transition-colors flex items-center justify-center ${currentSlide === slides.length - 1 ? 'text-green-400 hover:text-green-300' : 'text-white hover:text-white/70'}`}
              >
                {currentSlide === slides.length - 1 ? (
                    <>
                        <span className="text-sm font-bold uppercase tracking-wider mr-2">Ir p/ site</span>
                        <Play className="w-6 h-6 fill-current" />
                    </>
                ) : (
                    <ChevronRight className="w-8 h-8" />
                )}
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
