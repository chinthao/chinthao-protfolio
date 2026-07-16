import { useEffect, useState } from "react";

const techTags = ["React", "Tailwind CSS", "Figma", "Software Engineering", "SQL Database"];

export default function Hero() {
  const [pulsing, setPulsing] = useState(true);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0e0a1f] flex flex-col justify-center px-8 md:px-24 pt-24 pb-16 overflow-hidden relative"
    >
    
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1a3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full z-10 flex items-start gap-8 md:gap-12">
        
        <div className="flex flex-col items-center self-stretch pt-3 flex-shrink-0">
          
          <div className="relative w-4 h-4">
            <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-75" />
            <span className="relative block w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
          </div>

          <div className="w-[3px] flex-1 bg-gradient-to-b from-purple-500 via-purple-900/40 to-transparent rounded-full mt-3 min-h-[220px] md:min-h-[280px]" />
        </div>

        <div className="flex-1 space-y-6 md:space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5">
            <div className="text-white text-lg font-bold tracking-wider select-none">
              CHIN<span className="text-purple-400">THAO</span>
            </div>
            <a
              href="#resume"
              className="bg-white/5 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 text-xs font-semibold tracking-wider uppercase px-5 py-2 rounded-xl transition-all duration-300 no-underline cursor-pointer shadow-sm shadow-purple-950/20"
            >
              View on CV 📄
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-purple-400/80 text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
              Welcome to my space
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 font-black">
                Chinthao
              </span>
            </h1>
          </div>

          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            I develop software applications, build modern user interfaces, and design seamless web experiences.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="bg-[#120d35]/60 border border-purple-900/40 text-slate-400 hover:text-purple-300 hover:border-purple-500/40 text-[11px] md:text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 font-medium select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#contact"
              className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-900/30 cursor-pointer flex items-center justify-center gap-2 group no-underline"
            >
              Let&apos;s work together
              <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a
              href="#projects"
              className="text-center border border-slate-700 text-slate-300 hover:text-white hover:bg-white/5 text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer no-underline"
            >
              Explore Works
            </a>
          </div>

        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 select-none pointer-events-none">
        <span className="text-[9px] tracking-[0.25em] uppercase font-bold">Scroll Down</span>
        <svg viewBox="0 0 24 24" className="w-4 h-4 animate-bounce text-purple-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  );
}