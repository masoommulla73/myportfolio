"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS, SITE_CONTENT } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative w-full bg-[#0f172a] text-white pt-32 pb-32 z-30">
      
      {/* Massive Header */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 flex flex-col gap-6 mb-24">
        <h2 className="text-5xl sm:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] uppercase text-white">
          Crafting<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
            Solutions
          </span><br />
          Through Code.
        </h2>
        <p className="text-white/50 text-lg lg:text-2xl font-bold tracking-widest uppercase max-w-xl mt-8 border-l-4 border-emerald-400 pl-6">
          {SITE_CONTENT.featuredSubtitle}
        </p>
      </div>

      {/* Structured, Clean Grid Layout */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.filter(p => p.visible).map((project, index) => {
            // First project takes full width, others take half width
            const isFullWidth = index === 0;

            return (
              <motion.div 
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className={`flex flex-col group cursor-pointer ${isFullWidth ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden rounded-[2rem] bg-[#1a2235] border border-white/5 ${isFullWidth ? 'aspect-[21/9]' : 'aspect-[4/3]'} mb-8`}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Floating Link Icon */}
                  {project.link && (
                    <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10 shadow-xl">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Typography & Details (Flawless Left Alignment) */}
                <div className="flex flex-col gap-4 pl-2">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
                      0{index + 1}
                    </span>
                    <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/60 text-lg font-medium leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-1.5 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
