export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0917] py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Image */}
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-3 rounded-2xl bg-purple-900/30 blur-xl pointer-events-none" />
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10">
            {/* Replace src with your actual photo */}
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center text-white/20 text-sm">
              Your Photo
            </div>
          </div>
          {/* Offset border accent */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-purple-500/40 rounded-2xl pointer-events-none" />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-5">
          <div>
            <p className="text-purple-400 text-xs font-medium tracking-[0.15em] uppercase mb-2">
              About Me
            </p>
            <h2 className="text-white text-4xl font-bold tracking-tight">
              Who Am I?
            </h2>
          </div>

          <p className="text-slate-300 text-base leading-relaxed">
            Hi! I&apos;m <span className="text-purple-400 font-medium">Your Name</span>, a
            UI/UX designer and front-end developer passionate about creating beautiful,
            accessible digital experiences. I enjoy turning complex problems into simple,
            elegant designs.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            When I&apos;m not pushing pixels or writing code, you&apos;ll find me exploring
            new design trends, contributing to open-source projects, or brewing a perfect cup
            of coffee.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "20+", label: "Projects Done" },
              { value: "10+", label: "Happy Clients" },
            ].map((stat) => (
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
