export default function ExampleProject() {
  const projects = [
    {
      id: 1,
      align: "right",
      mockup: null, // replace with: "/images/project1.png"
    },
    {
      id: 2,
      align: "left",
      mockup: null,
    },
  ];

  const Asterisk = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
  );

  const WireframeMockup = () => (
    <svg viewBox="0 0 460 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="460" height="280" fill="white" />
      <rect width="460" height="26" fill="#f3f4f6" />
      <rect x="8" y="7" width="10" height="10" rx="5" fill="#e5e7eb" />
      <rect x="24" y="7" width="10" height="10" rx="5" fill="#e5e7eb" />
      <rect x="40" y="7" width="10" height="10" rx="5" fill="#e5e7eb" />
      <rect x="75" y="5" width="280" height="16" rx="3" fill="#e9ebee" />
      <rect x="10" y="34" width="36" height="7" rx="2" fill="#d1d5db" />
      <rect x="310" y="34" width="28" height="7" rx="2" fill="#d1d5db" />
      <rect x="346" y="34" width="28" height="7" rx="2" fill="#d1d5db" />
      <rect x="384" y="34" width="28" height="7" rx="2" fill="#d1d5db" />
      <rect x="10" y="52" width="74" height="74" rx="4" fill="#e5e7eb" />
      <line x1="10" y1="52" x2="84" y2="126" stroke="#d1d5db" strokeWidth="1.5" />
      <line x1="84" y1="52" x2="10" y2="126" stroke="#d1d5db" strokeWidth="1.5" />
      <rect x="96" y="56" width="100" height="5" rx="2" fill="#9ca3af" />
      <rect x="96" y="67" width="180" height="12" rx="2" fill="#c4b5fd" />
      <rect x="96" y="86" width="160" height="5" rx="2" fill="#d1d5db" />
      <rect x="96" y="97" width="140" height="5" rx="2" fill="#d1d5db" />
      <rect x="96" y="108" width="200" height="5" rx="2" fill="#d1d5db" />
      <rect x="10" y="144" width="180" height="8" rx="2" fill="#d1d5db" />
      {[160, 172, 184, 196, 208].map((y, i) => (
        <rect key={i} x="10" y={y} width={160 + i * 12} height="5" rx="2" fill="#e5e7eb" />
      ))}
    </svg>
  );

  return (
    <section className="bg-[#0e0a1f] py-20 px-6 md:px-16 space-y-24">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:items-center ${
            project.align === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-purple-400 text-xs font-medium tracking-[0.15em] uppercase mb-1">
                Featured Project
              </p>
              <h2 className="text-white text-4xl font-bold tracking-tight">
                Example Project
              </h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-slate-300 text-sm leading-relaxed">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new playlists
                of recommended tracks based on your existing playlists and more.
              </p>
            </div>
            <div className="flex gap-3 pt-1">
              <Asterisk />
              <Asterisk />
            </div>
          </div>

          {/* Mockup */}
          <div className="flex-1 relative">
            <div className="absolute -inset-4 rounded-2xl bg-purple-900/25 blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {project.mockup ? (
                <img
                  src={project.mockup}
                  alt="Project mockup"
                  className="w-full h-full object-cover"
                />
              ) : (
                <WireframeMockup />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
