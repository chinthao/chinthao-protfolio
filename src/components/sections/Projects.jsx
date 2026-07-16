import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0e0a1f] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase block mb-2">
          MY FINAL EXAM WORK
        </span>
        <h2 className="text-white text-4xl font-bold mb-4 tracking-tight">
          Year 2 Final Projects
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mb-12 font-light">
          These are the two core academic projects I am currently developing and finalizing for my upcoming end-of-year exams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: SecondShop Web */}
          <div className="bg-[#120d35]/40 border border-purple-900/40 rounded-3xl backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 relative group overflow-hidden flex flex-col h-full">
            {/* Interactive Vector Mockup of SecondShop Web (Watch Store UI) */}
            <div className="relative h-48 md:h-56 bg-gradient-to-b from-[#1f1a3a] to-[#0e0a1f] flex flex-col items-center justify-center p-4 border-b border-purple-900/20 overflow-hidden">
              {/* Browser Window Mockup */}
              <div className="w-[85%] bg-[#0b0917] rounded-lg border border-purple-500/20 shadow-2xl overflow-hidden flex flex-col">
                {/* Browser bar */}
                <div className="bg-[#161135] px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="bg-[#0e0a1f] text-slate-500 text-[8px] px-2 py-0.5 rounded ml-4 w-40 truncate">SecondShop - Watch Store</div>
                </div>
                {/* Watch Store Product Grid Display */}
                <div className="p-3 grid grid-cols-3 gap-2 bg-slate-900">
                  {[1, 2, 3].map((id) => (
                    <div key={id} className="bg-white/5 p-1 rounded border border-white/5 flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                        {/* Watch Graphic */}
                        <div className="w-3 h-3 rounded-full border border-purple-400 flex items-center justify-center relative">
                          <div className="absolute w-[1px] h-1.5 bg-purple-300 top-0" />
                        </div>
                      </div>
                      <div className="h-1 w-6 bg-slate-500 rounded mt-1.5" />
                      <div className="h-1 w-4 bg-purple-400 rounded mt-1" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#120d35]/85 flex items-center justify-center text-xl shadow-md border border-purple-500/20">🛒</div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-purple-400 text-[10px] font-bold tracking-widest uppercase block mb-3">PROJECT 1: WEB DEVELOPMENT</span>
                <h3 className="text-white text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">SecondShop - Online Watch E-Commerce</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  An elegant online shopping web application built for my Sophomore final evaluation coursework. Developed in VS Code using HTML, CSS, and JavaScript. It features responsive layouts, custom watch catalogs, a dynamic checkout cart summary with discount codes, and an integrated light/dark theme toggle.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript", "SQL Database", "Figma Design"].map((t) => (
                  <span key={t} className="bg-[#0e0a1f] text-slate-400 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-white/5">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2: Smart Robot Car */}
          <div className="bg-[#120d35]/40 border border-purple-900/40 rounded-3xl backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 relative group overflow-hidden flex flex-col h-full">
            {/* Interactive Vector Mockup of Smart Autonomous Robot Car (Arduino Board UI) */}
            <div className="relative h-48 md:h-56 bg-gradient-to-b from-[#1a1c3d] to-[#0e0a1f] flex flex-col items-center justify-center p-4 border-b border-purple-900/20 overflow-hidden">
              {/* Arduino Microchip Circuit Graphic Mockup */}
              <div className="w-52 h-28 bg-[#0b3323] rounded-xl border-2 border-green-700 p-3 relative flex items-center justify-between shadow-2xl">
                {/* Chip pins */}
                <div className="absolute top-1 left-4 right-4 flex justify-between"><span className="w-1.5 h-1.5 bg-yellow-500/80 rounded-sm" /><span className="w-1.5 h-1.5 bg-yellow-500/80 rounded-sm" /><span className="w-1.5 h-1.5 bg-yellow-500/80 rounded-sm" /></div>
                {/* Main Microcontroller IC */}
                <div className="w-24 h-12 bg-slate-900 rounded border border-white/20 flex items-center justify-center gap-1">
                  <div className="w-16 h-6 bg-slate-950 rounded flex items-center justify-center text-[7px] text-green-400 font-mono tracking-tighter">ATMEGA328P</div>
                </div>
                {/* Capacitor, USB terminal */}
                <div className="w-6 h-8 bg-slate-700 rounded-sm border border-slate-500 flex items-center justify-center"><span className="text-[6px] text-white">USB</span></div>
                {/* IR Sensor Node indicator */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-red-600 border border-white/20 relative z-10" />
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#120d35]/85 flex items-center justify-center text-xl shadow-md border border-purple-500/20">🤖</div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-purple-400 text-[10px] font-bold tracking-widest uppercase block mb-3">PROJECT 2: HARDWARE & ROBOTICS</span>
                <h3 className="text-white text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">Smart Autonomous Robot Car</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  An autonomous line-following and obstacle-avoidance robot. Configured and programmed microcontroller microchips using Arduino C++ and VS Code, integrating light-detection infrared sensors (IR) and complex motorized navigation hardware logic.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Arduino C++", "Microcontrollers", "Robotics Hardware", "IoT Sensors"].map((t) => (
                  <span key={t} className="bg-[#0e0a1f] text-slate-400 text-[10px] font-semibold px-2.5 py-1 rounded-md border border-white/5">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}