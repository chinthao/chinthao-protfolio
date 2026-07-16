import React from "react";

const volunteerActivities = [
  {
    id: 1,
    title: "The 9th Helping Hands Project in Phin District",
    location: "Savannakhet Province (December 2023)",
    description: "Actively participated in organizing, preparing logistics, and executing a field trip to donate study materials and sports gear to school children in remote areas of Savannakhet. Awarded a formal volunteer appreciation certificate by the Lao-American Institute.",
    badge: "Community Donation",
    icon: "🎒",
    gradient: "from-emerald-600 to-teal-600",
    svgGraphic: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-emerald-400">
        <path d="M50 20 L25 50 H40 V80 H60 V50 H75 Z" fill="currentColor" />
        <rect x="44" y="60" width="12" height="12" rx="1" fill="#0b0917" />
      </svg>
    )
  },
  {
    id: 2,
    title: "That Luang Festival Cleanliness & Environmental Awareness Initiative",
    location: "Vientiane Capital (November 2023)",
    description: "Volunteered alongside local community cleanup campaigns during the sacred That Luang Festival under the theme 'Together for our Environmental Health'. Managed waste classifications, maintained public grounds hygiene, and promoted environmental values among festival-goers.",
    badge: "Environmental Volunteer",
    icon: "🧹",
    gradient: "from-blue-600 to-indigo-600",
    svgGraphic: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-blue-400">
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M40 50 l7 7 l15 -15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b0917] py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase block mb-2">
          GIVING BACK TO THE COMMUNITY
        </span>
        <h2 className="text-white text-4xl font-bold mb-4 tracking-tight">
          Volunteer Work & Community Service
        </h2>
        <p className="text-slate-400 text-base max-w-2xl mb-12 font-light">
          Extracurricular social initiatives that helped me build teamwork, leadership qualities, civic duties, and proactive problem-solving abilities.
        </p>

        <div className="space-y-6">
          {volunteerActivities.map((act) => (
            <div 
              key={act.id}
              className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-[#120d35]/30 border border-purple-900/40 rounded-3xl hover:border-purple-500/35 transition-all overflow-hidden items-center"
            >
              {/* Activity Vector Art Graphics */}
              <div className="w-24 h-24 bg-[#0e0a1f] rounded-2xl flex items-center justify-center flex-shrink-0 border border-purple-500/10 relative overflow-hidden">
                {act.svgGraphic}
                <div className={`absolute bottom-1 right-1 w-6 h-6 rounded-lg bg-gradient-to-br ${act.gradient} flex items-center justify-center text-xs shadow-md`}>
                  {act.icon}
                </div>
              </div>
              
              {/* Activity Content */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-purple-900/40 text-purple-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-500/20">{act.badge}</span>
                  <span className="text-slate-500 text-xs font-semibold">{act.location}</span>
                </div>
                <h3 className="text-white text-lg md:text-xl font-bold">{act.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">{act.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}