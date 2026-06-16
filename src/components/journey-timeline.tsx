"use client";

import { motion } from "framer-motion";
import { EDUCATION, SITE_CONTENT } from "@/lib/data";

export default function JourneyTimeline() {
  return (
    <section id="experience" className="relative w-full bg-[#c2def2] px-6 lg:px-16 py-32 z-30 overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-white opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-blue-400 opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col gap-24 lg:gap-32 relative z-10">
        
        {/* Massive Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-6xl sm:text-8xl lg:text-[9rem] font-black tracking-tighter text-[#0f172a] uppercase leading-none">
            {SITE_CONTENT.timelineTitle}
          </h2>
          <p className="text-[#0f172a]/70 text-xl lg:text-3xl font-bold tracking-widest uppercase max-w-3xl mt-4">
            {SITE_CONTENT.timelineSubtitle}
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-24 lg:gap-32 mt-16">
          {EDUCATION.filter(e => e.visible).map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={edu._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`group flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                
                {/* Massive 3D Hover Number */}
                <div className="w-full lg:w-[35%] flex justify-center perspective-[1000px]">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.1,
                      rotateX: 10,
                      rotateY: isEven ? -10 : 10,
                      y: -20,
                      textShadow: "4px 4px 0px #0f172a, 8px 8px 0px #0f172a, 12px 12px 0px #0f172a, 16px 16px 0px #0f172a, 20px 20px 0px #34d399, 30px 30px 40px rgba(0,0,0,0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-[10rem] lg:text-[15rem] font-black text-white drop-shadow-2xl tracking-tighter leading-none select-none cursor-crosshair"
                    style={{
                      transformStyle: "preserve-3d"
                    }}
                  >
                    0{index + 1}
                  </motion.div>
                </div>

                {/* Content Box */}
                <div className="w-full lg:w-[65%] bg-[#0f172a] p-10 lg:p-16 border border-white/10 shadow-2xl flex flex-col gap-6 rounded-[2rem] transition-all duration-500 group-hover:border-emerald-400/30 group-hover:shadow-[0_20px_50px_rgba(52,211,153,0.1)]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
                    <span className="text-emerald-400 font-black tracking-widest uppercase text-lg lg:text-xl">
                      {edu.year}
                    </span>
                    <span className={`px-4 py-1.5 border-2 text-xs font-black uppercase tracking-widest rounded-full ${edu.status === 'Completed' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-blue-500/30 text-blue-400 bg-blue-500/10'}`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-white/60 text-xl lg:text-2xl font-bold uppercase tracking-widest mt-2">
                    {edu.institution}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-white/40 font-bold uppercase tracking-widest">
                      Score / Grade
                    </span>
                    <span className="text-4xl font-black text-white">
                      {edu.percentage}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
