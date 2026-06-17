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

                {/* Neobrutalist Content Box */}
                <div className="relative w-full lg:w-[65%] bg-white border-[6px] border-[#0f172a] rounded-xl shadow-[12px_12px_0_#0f172a] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0_#0f172a] overflow-hidden group/card flex flex-col">
                  
                  {/* Background Patterns */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none opacity-50 transition-opacity duration-400 group-hover/card:opacity-100 z-0" />
                  <div className="absolute inset-0 bg-[radial-gradient(#cfcfcf_1px,transparent_1px)] bg-[size:20px_20px] bg-[-10px_-10px] pointer-events-none opacity-0 transition-opacity duration-400 group-hover/card:opacity-100 z-0" />

                  {/* Top Right Corner Accent */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#00e0b0] rotate-45 z-10 border-b-[6px] border-[#0f172a]" />
                  <div className="absolute top-1 right-2 text-[#0f172a] font-bold text-2xl z-20">★</div>

                  {/* Top Bold Pattern SVG */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-15 pointer-events-none z-0">
                    <svg viewBox="0 0 100 100">
                      <path strokeDasharray="15 10" strokeWidth={10} stroke="#000" fill="none" d="M0,0 L100,0 L100,100 L0,100 Z" />
                    </svg>
                  </div>

                  {/* Title Area */}
                  <div className="relative p-6 lg:p-8 bg-[#ff3e00] text-white font-black text-2xl lg:text-3xl flex justify-between items-center border-b-[6px] border-[#0f172a] uppercase tracking-wider z-10 overflow-hidden">
                    {/* Diagonal Stripes Overlay */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_10px,transparent_10px,transparent_20px)] pointer-events-none opacity-30" />
                    
                    <span className="relative z-10">{edu.year}</span>
                    
                    <span className="relative z-10 bg-white text-[#0f172a] text-xs lg:text-sm font-black px-4 py-2 border-[4px] border-[#0f172a] rounded-md shadow-[4px_4px_0_#0f172a] uppercase tracking-widest rotate-3 transition-transform duration-300 group-hover/card:-rotate-2 group-hover/card:scale-110">
                      {edu.status}
                    </span>
                  </div>

                  {/* Body Area */}
                  <div className="relative p-8 lg:p-12 z-10 flex flex-col gap-6">
                    <h3 className="text-3xl lg:text-5xl font-black text-[#0f172a] tracking-tight uppercase leading-tight">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-[#0f172a]/80 text-lg lg:text-xl font-bold uppercase tracking-widest mt-2">
                      {edu.institution}
                    </p>

                    <div className="mt-6 pt-6 border-t-[4px] border-dashed border-[#0f172a]/20 flex items-center justify-between relative">
                      {/* Scissor icon illusion for dashed border */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 rotate-90 bg-white px-2 text-[#0f172a]/40 text-2xl font-sans">
                        ✂
                      </div>
                      
                      <span className="text-[#0f172a]/60 font-black uppercase tracking-widest text-sm lg:text-base">
                        Score / Grade
                      </span>
                      <div className="relative font-black text-4xl lg:text-5xl text-[#0f172a]">
                        {/* Highlight underline */}
                        <div className="absolute bottom-1 left-0 w-full h-3 bg-[#00e0b0] opacity-50 -z-10" />
                        {edu.percentage}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left Corner Slice (matches section bg #c2def2) */}
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-[#c2def2] border-r-[6px] border-t-[6px] border-[#0f172a] rounded-tr-lg z-10" />

                  {/* Stamp */}
                  <div className="absolute bottom-6 left-12 w-20 h-20 flex items-center justify-center border-[4px] border-[#0f172a]/30 rounded-full -rotate-[15deg] opacity-20 z-0 pointer-events-none">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0f172a]">Verified</span>
                  </div>

                  {/* Accent Shape */}
                  <div className="absolute -bottom-4 right-10 w-14 h-14 bg-[#4d61ff] border-[6px] border-[#0f172a] rounded-md rotate-45 z-0 transition-transform duration-300 group-hover/card:rotate-[55deg] group-hover/card:scale-110" />
                  
                  {/* Bottom Dots Pattern */}
                  <div className="absolute bottom-12 -left-4 w-32 h-16 opacity-30 -rotate-12 pointer-events-none z-0">
                    <svg viewBox="0 0 80 40">
                      <circle fill="#0f172a" r="3" cy="10" cx="10" />
                      <circle fill="#0f172a" r="3" cy="10" cx="30" />
                      <circle fill="#0f172a" r="3" cy="10" cx="50" />
                      <circle fill="#0f172a" r="3" cy="10" cx="70" />
                      <circle fill="#0f172a" r="3" cy="20" cx="20" />
                      <circle fill="#0f172a" r="3" cy="20" cx="40" />
                      <circle fill="#0f172a" r="3" cy="20" cx="60" />
                      <circle fill="#0f172a" r="3" cy="30" cx="10" />
                      <circle fill="#0f172a" r="3" cy="30" cx="30" />
                      <circle fill="#0f172a" r="3" cy="30" cx="50" />
                      <circle fill="#0f172a" r="3" cy="30" cx="70" />
                    </svg>
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
