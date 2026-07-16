import React, { useState } from "react";

const certifications = [
  {
    id: 1,
    title: "Helping Hands Certificate of Participation - 9th Project in Phin District",
    issuer: "Lao-American Institute & Helping Hands Community",
    date: "December 2023",
    icon: "🎒",
    color: "from-emerald-600 to-teal-600",
    themeClass: "border-emerald-500/40",
    image: "images/PM1.jpeg"
  },
  {
    id: 2,
    title: "Certificate of Appreciation for Environmental Health Action",
    issuer: "Committee of Public Health and Child Culture, Vientiane Capital",
    date: "November 2023",
    icon: "🧹",
    color: "from-blue-600 to-indigo-600",
    themeClass: "border-blue-500/40",
    image: "images/PM2.jpeg"
  },
  {
    id: 3,
    title: "Software Engineering Coursework Track - Sophomore Completed",
    issuer: "Soutsaka Institute of Technology",
    date: "2026",
    icon: "🎓",
    color: "from-purple-600 to-pink-600",
    themeClass: "border-purple-500/40",
    image: "images/PM3.jpeg"
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="bg-[#0e0a1f] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase block mb-2">
          VERIFIED ACHIEVEMENTS
        </span>
        <h2 className="text-white text-4xl font-bold tracking-tight mb-12">
          Certifications & Credentials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-[#120d35]/30 border border-purple-900/40 rounded-2xl p-6 flex flex-col justify-between gap-5 hover:border-purple-500 hover:bg-[#1a1040]/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold leading-snug mb-1 line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-1">{cert.issuer}</p>
                </div>
              </div>

              {/* Vector Certificate Graphic Representation */}
              <div className="h-32 bg-[#0e0a1f] rounded-xl flex items-center justify-center relative overflow-hidden border border-purple-500/10 p-3">
                <div className="w-full h-full border border-dashed border-purple-500/20 rounded-lg flex flex-col items-center justify-center p-2 relative bg-slate-900/60">
                  {/* Decorative seal */}
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-yellow-500/30 border border-yellow-500/60" />
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-400/50 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 15l-2 5l2 -2l2 2z" />
                    <circle cx="12" cy="10" r="4" />
                  </svg>
                  <span className="text-[8px] text-slate-500 uppercase font-mono tracking-widest">VERIFIED DIPLOMA</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs text-white font-medium">
                  Click to View Details 🔎
                </div>
              </div>

              <p className="text-purple-400 text-xs font-semibold mt-1 mb-0">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full View (Vector Certificate Template) */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-2xl w-full bg-[#120d35] border border-purple-500/30 p-6 md:p-8 rounded-3xl space-y-6">
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0e0a1f] text-white flex items-center justify-center hover:bg-purple-900/40 transition-colors text-lg font-bold">✕</button>
            
            <h3 className="text-white text-xl font-bold pr-10">{selectedCert.title}</h3>
            
            {/* Interactive Vector Diploma Design */}
            <div className="w-full bg-[#0e0a1f] rounded-2xl flex flex-col items-center justify-center p-8 border border-yellow-500/20 relative shadow-inner">
              <div className="absolute inset-4 border border-dashed border-yellow-500/20 pointer-events-none rounded-xl" />
              {/* Gold Seal */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg border border-yellow-300/40">
                <span className="text-xs">🏆</span>
              </div>
              
              <span className="text-yellow-500/60 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">CERTIFICATE OF RECOGNITION</span>
              <p className="text-white/40 text-xs uppercase mb-1">PROUDLY PRESENTED TO</p>
              <h4 className="text-white text-2xl font-serif tracking-wide mb-3 border-b border-purple-500/30 pb-1 px-8">Chinthao Vaneng</h4>
              <p className="text-slate-400 text-xs text-center max-w-md leading-relaxed px-4 mb-4">
                For outstanding, active and meaningful participation in <span className="text-purple-400 font-medium">"{selectedCert.title}"</span>. Verified and logged under professional community standards.
              </p>
              
              <div className="w-full flex justify-between items-end mt-4 px-6 pt-4 border-t border-white/5 text-[10px] text-slate-500">
                <div className="text-left">
                  <p className="mb-0">ISSUER</p>
                  <p className="text-slate-300 font-semibold mb-0">{selectedCert.issuer}</p>
                </div>
                <div className="text-right">
                  <p className="mb-0">DATE</p>
                  <p className="text-slate-300 font-semibold mb-0">{selectedCert.date}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-xs text-slate-400">
              <p className="mb-0">Credential Verified via Soutsaka Academic Records.</p>
              <p className="mb-0 font-bold text-purple-400">ID: SIT-2026-CT</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}