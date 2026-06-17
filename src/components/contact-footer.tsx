"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
import { SITE_CONTENT } from "@/lib/data";

export default function ContactFooter() {
  return (
    <footer id="contact" className="w-full h-full bg-[#0f172a] text-white overflow-hidden z-0 flex flex-col justify-between pt-12">
      
      {/* Massive Marquee Banner */}
      <div className="w-full border-y border-white/10 overflow-hidden flex whitespace-nowrap py-4 lg:py-6 bg-emerald-400 text-[#0f172a]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex items-center text-4xl lg:text-6xl font-black uppercase tracking-widest"
        >
          <span className="mx-8">• Let's build something extraordinary</span>
          <span className="mx-8">• Available for freelance</span>
          <span className="mx-8">• Let's build something extraordinary</span>
          <span className="mx-8">• Available for freelance</span>
          <span className="mx-8">• Let's build something extraordinary</span>
          <span className="mx-8">• Available for freelance</span>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-16 flex flex-col gap-12 relative z-10 flex-grow mt-12 lg:mt-24">
        
        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 w-full">
          
          {/* Call to Action Button */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            <a 
              href={`mailto:${SITE_CONTENT.contactEmail}`}
              className="group relative flex flex-col items-center justify-center w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-white/20 hover:bg-white text-white hover:text-[#0f172a] transition-colors duration-500 z-20"
            >
              <span className="font-black text-4xl lg:text-5xl uppercase tracking-tighter text-center leading-[0.9]">
                Start A<br />Project
              </span>
              <div className="absolute bottom-12 w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <FaArrowRight className="w-5 h-5" />
              </div>
            </a>
          </div>

          {/* Brutalist Grid Details */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-l border-white/10 w-full [perspective:1000px]">
            
            <div className="group/card flex flex-col gap-4 border-b border-r border-white/10 p-6 lg:p-10 transition-all duration-500 ease-in-out [transform-style:preserve-3d] hover:[transform:rotate3d(0.5,1,0,30deg)] hover:bg-white/5 hover:shadow-[12px_12px_0_#34d399]">
              <div className="transition-all duration-500 ease-in-out group-hover/card:[transform:translateZ(40px)]">
                <h4 className="text-emerald-400 text-xs font-black uppercase tracking-widest">Location</h4>
                <p className="text-xl lg:text-2xl font-bold uppercase tracking-tight leading-tight mt-4">
                  Gokak, Karnataka<br />India
                </p>
              </div>
            </div>

            <div className="group/card flex flex-col gap-4 border-b border-r border-white/10 p-6 lg:p-10 transition-all duration-500 ease-in-out [transform-style:preserve-3d] hover:[transform:rotate3d(0.5,1,0,30deg)] hover:bg-white/5 hover:shadow-[12px_12px_0_#34d399]">
              <div className="transition-all duration-500 ease-in-out group-hover/card:[transform:translateZ(40px)]">
                <h4 className="text-emerald-400 text-xs font-black uppercase tracking-widest">Socials</h4>
                <div className="flex items-center gap-6 text-2xl mt-4">
                  {SITE_CONTENT.footerLinks.github.visible && (
                    <Link href={SITE_CONTENT.footerLinks.github.url} target="_blank" className="hover:text-emerald-400 transition-colors"><FaGithub /></Link>
                  )}
                  {SITE_CONTENT.footerLinks.linkedin.visible && (
                    <Link href={SITE_CONTENT.footerLinks.linkedin.url} target="_blank" className="hover:text-emerald-400 transition-colors"><FaLinkedin /></Link>
                  )}
                  {SITE_CONTENT.footerLinks.instagram.visible && (
                    <Link href={SITE_CONTENT.footerLinks.instagram.url} target="_blank" className="hover:text-emerald-400 transition-colors"><FaInstagram /></Link>
                  )}
                </div>
              </div>
            </div>

            <div className="group/card flex flex-col gap-4 border-b border-r border-white/10 p-6 lg:p-10 transition-all duration-500 ease-in-out sm:col-span-2 [transform-style:preserve-3d] hover:[transform:rotate3d(0.5,1,0,30deg)] hover:bg-white/5 hover:shadow-[12px_12px_0_#34d399]">
              <div className="transition-all duration-500 ease-in-out group-hover/card:[transform:translateZ(40px)]">
                <h4 className="text-emerald-400 text-xs font-black uppercase tracking-widest">Direct Contact</h4>
                <a href={`mailto:${SITE_CONTENT.contactEmail}`} className="text-2xl lg:text-4xl font-bold hover:text-emerald-400 transition-colors break-all mt-4 block">
                  {SITE_CONTENT.contactEmail}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Massive Edge-to-Edge Typography at the Absolute Bottom */}
      <div className="w-full flex flex-col justify-end items-center mt-12 relative">
        <h1 className="text-[20vw] font-black text-white leading-[0.75] tracking-tighter uppercase w-full text-center select-none flex justify-between px-2">
          <span>M</span>
          <span>A</span>
          <span>S</span>
          <span>O</span>
          <span>O</span>
          <span>M</span>
        </h1>
        
        {/* Copyright overlay */}
        <div className="absolute bottom-4 left-0 w-full text-center text-[#0f172a] text-xs font-black uppercase tracking-widest mix-blend-difference pointer-events-none">
          © {new Date().getFullYear()} Masoom Mulla. All rights reserved.
        </div>
      </div>
      
    </footer>
  );
}
