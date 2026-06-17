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

          {/* 3D Glass Contact Card */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-center w-full">
            <div className="group/parent perspective-[1000px] w-full max-w-[320px] lg:max-w-[400px] aspect-square mx-auto lg:mx-0">
              <div className="relative w-full h-full rounded-[50px] bg-[linear-gradient(135deg,rgb(0,255,214)_0%,rgb(8,226,96)_100%)] transition-all duration-500 ease-in-out [transform-style:preserve-3d] shadow-[0_25px_25px_-5px_rgba(5,71,17,0.2),40px_50px_25px_-40px_rgba(5,71,17,0)] group-hover/parent:[transform:rotate3d(1,1,0,30deg)] group-hover/parent:shadow-[0_25px_30px_0_rgba(5,71,17,0.1),30px_50px_25px_-40px_rgba(5,71,17,0.3)]">
                
                {/* Logo Rings */}
                <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
                  {/* Circle 1 */}
                  <span className="block absolute aspect-square rounded-full top-2 right-2 w-[170px] bg-[rgba(0,249,203,0.2)] backdrop-blur-[5px] shadow-[-10px_10px_20px_0_rgba(100,100,111,0.2)] transition-all duration-500 ease-in-out [transform:translateZ(20px)]" />
                  {/* Circle 2 */}
                  <span className="block absolute aspect-square rounded-full top-2.5 right-2.5 w-[140px] bg-[rgba(0,249,203,0.2)] backdrop-blur-[1px] shadow-[-10px_10px_20px_0_rgba(100,100,111,0.2)] transition-all duration-500 delay-[400ms] ease-in-out [transform:translateZ(40px)] group-hover/parent:[transform:translateZ(60px)]" />
                  {/* Circle 3 */}
                  <span className="block absolute aspect-square rounded-full top-[17px] right-[17px] w-[110px] bg-[rgba(0,249,203,0.2)] backdrop-blur-[5px] shadow-[-10px_10px_20px_0_rgba(100,100,111,0.2)] transition-all duration-500 delay-[800ms] ease-in-out [transform:translateZ(60px)] group-hover/parent:[transform:translateZ(80px)]" />
                  {/* Circle 4 */}
                  <span className="block absolute aspect-square rounded-full top-[23px] right-[23px] w-[80px] bg-[rgba(0,249,203,0.2)] backdrop-blur-[5px] shadow-[-10px_10px_20px_0_rgba(100,100,111,0.2)] transition-all duration-500 delay-[1200ms] ease-in-out [transform:translateZ(80px)] group-hover/parent:[transform:translateZ(100px)]" />
                  {/* Circle 5 (Icon inside) */}
                  <span className="absolute aspect-square rounded-full top-[30px] right-[30px] w-[50px] bg-[rgba(0,249,203,0.2)] backdrop-blur-[5px] shadow-[-10px_10px_20px_0_rgba(100,100,111,0.2)] transition-all duration-500 delay-[1600ms] ease-in-out [transform:translateZ(100px)] group-hover/parent:[transform:translateZ(120px)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="w-5 fill-white">
                      <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" />
                      <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
                      <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
                    </svg>
                  </span>
                </div>

                {/* Glass Layer */}
                <div className="absolute inset-2 rounded-[55px] rounded-tr-full bg-[linear-gradient(0deg,rgba(255,255,255,0.349)_0%,rgba(255,255,255,0.815)_100%)] border-l border-b border-white [transform-style:preserve-3d] [transform:translateZ(25px)] transition-all duration-500 ease-in-out pointer-events-none" />

                {/* Content */}
                <div className="relative pt-[120px] lg:pt-[180px] pr-[60px] pl-[30px] lg:pl-[40px] [transform:translateZ(26px)] pointer-events-none">
                  <span className="block text-[#00894d] font-black text-xl lg:text-3xl uppercase tracking-widest">Gokak, India</span>
                  <span className="block text-emerald-800/80 font-bold text-sm lg:text-lg mt-5 lg:mt-8 break-all">
                    {SITE_CONTENT.contactEmail}
                  </span>
                </div>

                {/* Bottom Actions */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between [transform-style:preserve-3d] [transform:translateZ(26px)]">
                  
                  {/* Socials */}
                  <div className="flex gap-3 [transform-style:preserve-3d] z-20">
                    {SITE_CONTENT.footerLinks.github.visible && (
                      <Link href={SITE_CONTENT.footerLinks.github.url} target="_blank" className="w-[36px] lg:w-[44px] aspect-square p-2 bg-white rounded-full flex items-center justify-center shadow-[0_7px_5px_-5px_rgba(5,71,17,0.5)] transition-all duration-200 hover:bg-black hover:text-white active:bg-[#ffea00] active:text-black group/btn delay-[400ms] group-hover/parent:[transform:translateZ(50px)] group-hover/parent:shadow-[-5px_20px_10px_0_rgba(5,71,17,0.2)]">
                        <FaGithub className="w-full h-full fill-[#00894d] group-hover/btn:fill-white group-active/btn:fill-black transition-colors" />
                      </Link>
                    )}
                    {SITE_CONTENT.footerLinks.linkedin.visible && (
                      <Link href={SITE_CONTENT.footerLinks.linkedin.url} target="_blank" className="w-[36px] lg:w-[44px] aspect-square p-2 bg-white rounded-full flex items-center justify-center shadow-[0_7px_5px_-5px_rgba(5,71,17,0.5)] transition-all duration-200 hover:bg-black hover:text-white active:bg-[#ffea00] active:text-black group/btn delay-[600ms] group-hover/parent:[transform:translateZ(50px)] group-hover/parent:shadow-[-5px_20px_10px_0_rgba(5,71,17,0.2)]">
                        <FaLinkedin className="w-full h-full fill-[#00894d] group-hover/btn:fill-white group-active/btn:fill-black transition-colors" />
                      </Link>
                    )}
                    {SITE_CONTENT.footerLinks.instagram.visible && (
                      <Link href={SITE_CONTENT.footerLinks.instagram.url} target="_blank" className="w-[36px] lg:w-[44px] aspect-square p-2 bg-white rounded-full flex items-center justify-center shadow-[0_7px_5px_-5px_rgba(5,71,17,0.5)] transition-all duration-200 hover:bg-black hover:text-white active:bg-[#ffea00] active:text-black group/btn delay-[800ms] group-hover/parent:[transform:translateZ(50px)] group-hover/parent:shadow-[-5px_20px_10px_0_rgba(5,71,17,0.2)]">
                        <FaInstagram className="w-full h-full fill-[#00894d] group-hover/btn:fill-white group-active/btn:fill-black transition-colors" />
                      </Link>
                    )}
                  </div>

                  {/* View More */}
                  <div className="flex items-center justify-end w-[40%] transition-transform duration-200 hover:[transform:translateZ(10px)] cursor-pointer z-20">
                    <button className="bg-transparent border-none text-[#00c37b] font-black text-xs lg:text-sm uppercase tracking-widest outline-none">Location</button>
                    <svg className="w-4 h-4 ml-1 stroke-[#00c37b] stroke-[3px] fill-transparent" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>

                </div>
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
