import Link from "next/link";
import { ArrowUpRight, Download, Mouse } from "lucide-react";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

import CanvasHero from "@/components/canvas-hero";
import AboutSection from "@/components/about-section";
import FeaturedProjects from "@/components/featured-projects";
import JourneyTimeline from "@/components/journey-timeline";
import ContactFooter from "@/components/contact-footer";
import AdminTrigger from "@/components/admin-trigger";

export default function Home() {
  return (
    <div className="relative text-[#0f172a] font-sans">
      
      {/* Scrollable Content Wrapper */}
      <main className="relative z-10 bg-[#c2def2] shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-[100vh]">
        <CanvasHero>
        {/* Background Huge Text - Centered perfectly behind the Canvas (z-0) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <h1 className="text-[20vw] lg:text-[18vw] font-black leading-none text-white/50 tracking-tighter whitespace-nowrap">
            DEVELOPER
          </h1>
        </div>

        {/* Foreground UI Layer (z-20) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* Top Navigation */}
        <header className="absolute top-0 w-full px-6 lg:px-12 py-4 lg:py-5 flex items-center justify-between z-20 pointer-events-auto">
          <AdminTrigger />
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#0f172a]/80 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
            <Link href="#home" className="text-[#0f172a] border-b-2 border-[#0f172a] pb-1">Home</Link>
            <Link href="#about" className="hover:text-[#0f172a] transition-colors">About</Link>
            <Link href="#skills" className="hover:text-[#0f172a] transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-[#0f172a] transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-[#0f172a] transition-colors">Experience</Link>
            <Link href="#contact" className="hover:text-[#0f172a] transition-colors">Contact</Link>
          </nav>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f172a] text-white hover:bg-black transition-colors text-sm font-medium">
            Let's Connect <ArrowUpRight className="w-4 h-4" />
          </button>
        </header>

        {/* Code Snippet - Top Right */}
        <div className="absolute top-[25%] lg:top-[20%] right-6 lg:right-16 font-mono text-xs lg:text-sm text-[#0f172a]/60 z-20 pointer-events-none">
          <p className="flex gap-4">
            <span className="text-[#0f172a]/30">01</span>
            <span>const developer = {'{'}</span>
          </p>
          <p className="flex gap-4">
            <span className="text-[#0f172a]/30">02</span>
            <span>&nbsp;&nbsp;code: <span className="text-emerald-600/90">'Clean'</span>,</span>
          </p>
          <p className="flex gap-4">
            <span className="text-[#0f172a]/30">03</span>
            <span>&nbsp;&nbsp;focus: <span className="text-emerald-600/90">'Impact'</span>,</span>
          </p>
          <p className="flex gap-4">
            <span className="text-[#0f172a]/30">04</span>
            <span>&nbsp;&nbsp;goal: <span className="text-emerald-600/90">'Build solutions</span></span>
          </p>
          <p className="flex gap-4">
            <span className="text-[#0f172a]/30">&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-600/90">that matter'</span></span>
          </p>
          <p className="flex gap-4">
            <span className="text-[#0f172a]/30">05</span>
            <span>{'}'};</span>
          </p>
        </div>

        {/* Headline and Buttons - Bottom Left */}
        <div className="absolute bottom-[25%] lg:bottom-[20%] left-6 lg:left-16 flex flex-col items-start gap-4 lg:gap-6 z-20 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0f172a]/10 bg-white/20 backdrop-blur-md text-[10px] lg:text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            <span className="text-[#0f172a]/80">Available for new opportunities</span>
          </div>

          <h2 className="text-base lg:text-sm font-bold leading-relaxed tracking-wide text-[#0f172a] max-w-[280px]">
            I BUILD SCALABLE,<br />
            SECURE & HIGH-PERFORMANCE<br />
            WEB APPLICATIONS.
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
            <button className="flex justify-center items-center gap-2 px-5 py-2.5 rounded-md bg-[#0f172a] text-white hover:bg-black transition-colors text-xs font-medium">
              View My Work <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button className="flex justify-center items-center gap-2 px-5 py-2.5 rounded-md border border-[#0f172a]/30 hover:bg-white/40 transition-colors text-xs font-medium text-[#0f172a]">
              Download Resume <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bio Text - Bottom Right */}
        <p className="hidden lg:block absolute bottom-[25%] lg:bottom-[20%] right-16 max-w-[280px] text-[#0f172a]/80 text-[13px] font-medium leading-relaxed z-20 pointer-events-none">
          Full-stack developer with a passion<br />
          for building real-world solutions<br />
          that make an impact.
        </p>

        {/* Right side navigation dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 text-[#0f172a]/30 text-xs font-mono z-20 pointer-events-none">
          <div className="w-[1px] h-4 bg-[#0f172a]/20"></div>
          <div className="w-[1px] h-4 bg-[#0f172a]/20"></div>
          <div className="w-[1px] h-4 bg-[#0f172a]/20"></div>
          <span className="text-[#0f172a] font-bold">01</span>
          <div className="w-[1px] h-4 bg-[#0f172a]/20"></div>
          <div className="w-[1px] h-4 bg-[#0f172a]/20"></div>
          <div className="w-[1px] h-4 bg-[#0f172a]/20"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex flex-col items-center gap-2 text-[#0f172a]/50 absolute left-1/2 -translate-x-1/2 bottom-8 z-20 pointer-events-none">
          <Mouse className="w-6 h-6 animate-bounce" />
          <span className="text-[10px] font-bold tracking-widest uppercase">SCROLL DOWN</span>
        </div>

        {/* Bottom Footer Area */}
        <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-16 right-6 lg:right-16 flex flex-col lg:flex-row items-center justify-between gap-6 z-20 pointer-events-auto">
          {/* Tech Stack */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-[#0f172a]/50">Tech Stack</span>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md">
                <SiJavascript className="w-4 h-4 text-[#f7df1e]" />
              </div>
              <div className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md">
                <SiTypescript className="w-4 h-4 text-[#3178c6]" />
              </div>
              <div className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md">
                <SiReact className="w-4 h-4 text-[#00d8ff]" />
              </div>
              <div className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md">
                <SiNodedotjs className="w-4 h-4 text-[#339933]" />
              </div>
              <div className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md">
                <SiMongodb className="w-4 h-4 text-[#47a248]" />
              </div>
              <div className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md">
                <SiTailwindcss className="w-4 h-4 text-[#06b6d4]" />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-end gap-2">
            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-[#0f172a]/50">Let's Connect</span>
            <div className="flex items-center gap-2">
              <Link href="https://github.com" target="_blank" className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md hover:bg-white/40 transition-colors">
                <FaGithub className="w-4 h-4 text-[#0f172a]" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md hover:bg-white/40 transition-colors">
                <FaLinkedin className="w-4 h-4 text-[#0f172a]" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md hover:bg-white/40 transition-colors">
                <FaTwitter className="w-4 h-4 text-[#0f172a]" />
              </Link>
              <Link href="mailto:hello@example.com" className="p-2 rounded-md bg-white/20 border border-[#0f172a]/10 backdrop-blur-md hover:bg-white/40 transition-colors">
                <FaEnvelope className="w-4 h-4 text-[#0f172a]" />
              </Link>
            </div>
          </div>
        </div>
        
        </div> {/* End Frontend UI Layer */}
      </CanvasHero>

      {/* Modern, Scroll-Linked Content Sections */}
      {/* These sit completely below the 400vh CanvasHero.
          They naturally scroll up over the pinned hero once the canvas animation finishes! */}
      <div className="relative z-30 bg-[#c2def2] pb-32">
        <AboutSection />
        <FeaturedProjects />
        <JourneyTimeline />
      </div>
      </main>

      {/* The Reveal Footer - fixed behind everything else */}
      <div className="fixed bottom-0 left-0 w-full h-[100vh] z-0 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <ContactFooter />
        </div>
      </div>

    </div>
  );
}
