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

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Huge Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[22vw] font-black leading-none text-white/[0.03] tracking-tighter whitespace-nowrap">
          DEVELOPER
        </h1>
      </div>

      {/* Top Navigation */}
      <header className="relative z-10 w-full px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold tracking-wider">
          <span className="text-blue-400">{`{ M }`}</span>
          <span>MASOOM</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#home" className="text-white border-b-2 border-white pb-1">Home</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium">
          Let's Connect <ArrowUpRight className="w-4 h-4" />
        </button>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-8 lg:px-16 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column */}
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-white/80">Available for new opportunities</span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white/90">
              I BUILD SCALABLE,<br />
              SECURE & HIGH-PERFORMANCE<br />
              WEB APPLICATIONS.
            </h2>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black hover:bg-white/90 transition-colors font-medium">
                View My Work <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 hover:bg-white/10 transition-colors font-medium text-white">
                Download Resume <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start lg:items-end gap-32 lg:h-[60vh] justify-between relative">
            {/* Code Snippet - Positioned Top Right */}
            <div className="font-mono text-sm lg:text-base text-blue-300/60 self-end text-left">
              <p className="flex gap-4">
                <span className="text-white/20">01</span>
                <span>const developer = {'{'}</span>
              </p>
              <p className="flex gap-4">
                <span className="text-white/20">02</span>
                <span>&nbsp;&nbsp;code: <span className="text-green-300/60">'Clean'</span>,</span>
              </p>
              <p className="flex gap-4">
                <span className="text-white/20">03</span>
                <span>&nbsp;&nbsp;focus: <span className="text-green-300/60">'Impact'</span>,</span>
              </p>
              <p className="flex gap-4">
                <span className="text-white/20">04</span>
                <span>&nbsp;&nbsp;goal: <span className="text-green-300/60">'Build solutions</span></span>
              </p>
              <p className="flex gap-4">
                <span className="text-white/20">&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300/60">that matter'</span></span>
              </p>
              <p className="flex gap-4">
                <span className="text-white/20">05</span>
                <span>{'}'};</span>
              </p>
            </div>

            {/* Bio Text - Positioned Bottom Right */}
            <p className="text-white/60 max-w-sm text-lg leading-relaxed self-end">
              Full-stack developer with a passion for building real-world solutions that make an impact.
            </p>
          </div>

        </div>
      </div>

      {/* Right side navigation dots */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 text-white/30 text-xs font-mono">
        <div className="w-[1px] h-4 bg-white/30"></div>
        <div className="w-[1px] h-4 bg-white/30"></div>
        <div className="w-[1px] h-4 bg-white/30"></div>
        <span className="text-white">01</span>
        <div className="w-[1px] h-4 bg-white/30"></div>
        <div className="w-[1px] h-4 bg-white/30"></div>
        <div className="w-[1px] h-4 bg-white/30"></div>
      </div>

      {/* Bottom Footer Area */}
      <div className="relative z-10 w-full px-8 pb-8 flex flex-col lg:flex-row items-center justify-between gap-8 mt-auto">
        
        {/* Tech Stack */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Tech Stack</span>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <SiJavascript className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <SiTypescript className="w-5 h-5 text-blue-400" />
            </div>
            <div className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <SiReact className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <SiNodedotjs className="w-5 h-5 text-green-500" />
            </div>
            <div className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <SiMongodb className="w-5 h-5 text-green-400" />
            </div>
            <div className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center">
              <span className="text-white/50 leading-none pb-1">...</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 text-white/40 absolute left-1/2 -translate-x-1/2 bottom-8">
          <Mouse className="w-6 h-6 animate-bounce" />
          <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll Down</span>
        </div>

        {/* Social Links */}
        <div className="flex flex-col lg:items-end gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Let's Connect</span>
          <div className="flex items-center gap-3">
            <Link href="https://github.com" target="_blank" className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <FaGithub className="w-5 h-5 text-white/80" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <FaLinkedin className="w-5 h-5 text-white/80" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <FaTwitter className="w-5 h-5 text-white/80" />
            </Link>
            <Link href="mailto:hello@example.com" className="p-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <FaEnvelope className="w-5 h-5 text-white/80" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
