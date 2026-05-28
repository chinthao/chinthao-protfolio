const certifications = [
  {
    id: 1,
    title: "UI/UX Design Specialization",
    issuer: "Google",
    date: "Jan 2024",
    credential: "#",
    icon: "🎓",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    title: "React — The Complete Guide",
    issuer: "Udemy",
    date: "Mar 2024",
    credential: "#",
    icon: "⚛️",
    color: "from-cyan-600 to-blue-600",
  },
  {
    id: 3,
    title: "Figma Advanced Design",
    issuer: "Coursera",
    date: "Jun 2023",
    credential: "#",
    icon: "🎨",
    color: "from-pink-600 to-purple-600",
  },
  {
    id: 4,
    title: "Tailwind CSS Mastery",
    issuer: "Frontend Masters",
    date: "Sep 2023",
    credential: "#",
    icon: "💨",
    color: "from-teal-600 to-cyan-600",
  },
  {
    id: 5,
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    credential: "#",
    icon: "🟨",
    color: "from-yellow-600 to-orange-600",
  },
  {
    id: 6,
    title: "Accessibility & Inclusive Design",
    issuer: "Interaction Design Foundation",
    date: "Feb 2024",
    credential: "#",
    icon: "♿",
    color: "from-green-600 to-teal-600",
  },
];

export default function Certience() {
  return (
    <section
      id="certifications"
      className="bg-[#0b0917] py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-xs font-medium tracking-[0.15em] uppercase mb-2">
          What I&apos;ve Earned
        </p>
        <h2 className="text-white text-4xl font-bold tracking-tight mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 hover:border-purple-500/40 hover:bg-white/8 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl flex-shrink-0`}
              >
                {cert.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-bold leading-snug mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-slate-500 text-xs mb-3">{cert.date}</p>
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 text-xs font-medium hover:text-purple-300 transition-colors"
                >
                  View credential
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
