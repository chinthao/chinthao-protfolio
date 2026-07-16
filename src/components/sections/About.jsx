import React from "react";

export default function About() {
  const stats = [
    { id: 1, value: "Year 3", label: "Incoming Junior" },
    { id: 2, value: "2", label: "Final Year 2 Projects" },
    { id: 3, value: "2", label: "Social Initiatives" },
  ];

  return (
    <section
      id="about"
      className="bg-[#0b0917] py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
   
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-3 rounded-2xl bg-purple-900/30 blur-xl pointer-events-none" />

          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 bg-[#120d35]">
            <img 
              src="images/PM.jpeg" 
              alt="Chinthao" 
              className="w-full h-full object-cover object-center relative z-10"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-400/40 font-medium text-xs bg-gradient-to-b from-purple-950/20 to-[#0e0a1f]">
              <svg viewBox="0 0 100 100" className="w-20 h-20 text-purple-500/30 mb-2">
                <circle cx="50" cy="45" r="18" fill="currentColor" />
                <path d="M50 65 c-12 0-22 6-22 14 v4 h44 v-4 c0-8-10-14-22-14 z" fill="currentColor" />
              </svg>
              <span>[ Chinthao Profile ]</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-full h-full border border-purple-500/40 rounded-2xl pointer-events-none" />
        </div>

        <div className="flex-1 space-y-5">
          <div>
            <p className="text-purple-400 text-xs font-medium tracking-[0.15em] uppercase mb-2">
              About Me
            </p>
            <h2 className="text-white text-4xl font-bold tracking-tight">
              About Me
            </h2>
          </div>

          <p className="text-slate-300 text-base leading-relaxed">
            Hi! I&apos;m <span className="text-purple-400 font-medium">Chinthao Vaneng</span>, an aspiring software developer completing my Sophomore year and transitioning to Year 3 at the <span className="text-purple-300 font-semibold">Soutsaka Institute of Technology (SIT)</span>, majoring in Programming.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Even though I have not worked in a professional corporate environment yet, I am highly driven and proactive. I consistently hone my engineering skills by tackling complex academic projects and engaging in societal development through volunteering.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <p className="text-white text-2xl font-bold">{stat.value}</p>
                <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}