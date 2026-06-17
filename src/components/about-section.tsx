"use client";

import { motion } from "framer-motion";
import { SITE_CONTENT, PROJECTS } from "@/lib/data";

export default function AboutSection() {
  const sections = SITE_CONTENT.aboutContent.split('\n\n');
  const introText = sections[0].replace('Hello, I\'m Masoom\n"', '').replace('"', '');

  return (
    <section id="about" className="relative w-full bg-[#c2def2] px-6 lg:px-16 pt-32 pb-24 z-30 overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Brutalist Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-[55%] flex flex-col gap-8 relative z-10"
        >
          {/* Decorative striped background behind text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[110%] bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,#0f172a10_4px,#0f172a10_8px)] -z-10 mix-blend-multiply opacity-50" />
          
          <h2 className="text-6xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-black text-[#0f172a] leading-[0.85] tracking-tighter uppercase break-words">
            CREATIVE<br />
            SOLUTIONS<br />
            BUILT FOR<br />
            REAL IMPACT
          </h2>
          
          <p className="text-[#0f172a]/80 text-lg lg:text-xl font-bold max-w-xl leading-relaxed uppercase tracking-widest mt-4">
            {introText}
          </p>
        </motion.div>

        {/* Right Side: Color-Blocked Stats Grid */}
        <div className="lg:w-[45%] grid grid-cols-2 gap-4 lg:gap-6 relative z-10 w-full">
          
          {/* Block 1: Green Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-2 group [perspective:1000px]"
          >
            <div className="bg-[#bcf081] p-8 lg:p-12 shadow-[12px_12px_0px_rgba(15,23,42,1)] border-4 border-[#0f172a] flex flex-col justify-between w-full h-full transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotate3d(0.5,1,0,30deg)]">
              <div className="flex justify-between items-start mb-12 [transform:translateZ(50px)] transition-all duration-500 ease-in-out group-hover:[transform:translateZ(60px)]">
                <span className="text-sm lg:text-base font-black uppercase tracking-widest text-[#0f172a] max-w-[150px]">
                  Total Projects Built This Year
                </span>
                <div className="w-10 h-10 rounded-full border-2 border-[#0f172a] flex items-center justify-center font-black bg-white/20 backdrop-blur-sm shadow-sm">
                  P
                </div>
              </div>
              <span className="text-7xl lg:text-9xl font-black text-[#0f172a] tracking-tighter [transform:translateZ(30px)] transition-all duration-500 ease-in-out group-hover:[transform:translateZ(60px)]">
                {PROJECTS.filter(p => p.visible).length}++
              </span>
            </div>
          </motion.div>

          {/* Block 2: Purple Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="col-span-1 group [perspective:1000px]"
          >
            <div className="bg-[#a084dc] p-6 lg:p-10 shadow-[8px_8px_0px_rgba(15,23,42,1)] border-4 border-[#0f172a] flex flex-col justify-between aspect-square w-full h-full transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotate3d(0.5,1,0,30deg)]">
              <div className="flex justify-between items-start mb-8 [transform:translateZ(50px)] transition-all duration-500 ease-in-out group-hover:[transform:translateZ(60px)]">
                <span className="text-xs lg:text-sm font-black uppercase tracking-widest text-[#0f172a]">
                  Academic<br />Record
                </span>
              </div>
              <span className="text-6xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-md [transform:translateZ(30px)] transition-all duration-500 ease-in-out group-hover:[transform:translateZ(60px)]">
                8.4
              </span>
            </div>
          </motion.div>

          {/* Block 3: Red Stat */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="col-span-1 group [perspective:1000px]"
          >
            <div className="bg-[#ff6868] p-6 lg:p-10 shadow-[8px_8px_0px_rgba(15,23,42,1)] border-4 border-[#0f172a] flex flex-col justify-between aspect-square w-full h-full transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotate3d(0.5,1,0,30deg)]">
              <div className="flex justify-between items-start mb-8 [transform:translateZ(50px)] transition-all duration-500 ease-in-out group-hover:[transform:translateZ(60px)]">
                <span className="text-xs lg:text-sm font-black uppercase tracking-widest text-[#0f172a]">
                  Passion<br />Driven
                </span>
              </div>
              <span className="text-6xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-md [transform:translateZ(30px)] transition-all duration-500 ease-in-out group-hover:[transform:translateZ(60px)]">
                100%
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
