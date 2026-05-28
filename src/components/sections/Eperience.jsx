import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    icon: "🏅",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    icon: "💡",
    gradient: "from-orange-400 to-pink-500",
    // 💡 ເອົາ defaultActive ອອກແລ້ວ ເພື່ອບໍ່ໃຫ້ມັນຂຶ້ນຂອບຄ້າງໄວ້
  },
  {
    id: 3,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    icon: "☕",
    gradient: "from-purple-700 to-violet-500",
  },
  {
    id: 4,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    icon: "✏️",
    gradient: "from-indigo-700 to-purple-700",
  },
];

function ExperienceCard({ title, description, icon, gradient, defaultActive }) {
  const [hovered, setHovered] = useState(false);
  const active = defaultActive || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative flex items-start gap-5 p-6 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden
        
        /* 💡 1. ເອົາເມົາໄປຈີ້ແລ້ວໃຫ້ກາດເດັ້ນຂຶ້ນມາດ້ານເທິງໜ້ອຍໜຶ່ງ */
        hover:-translate-y-1
        
        /* 💡 2. ສະແດງຂອບສີມ່ວງສະຫວ່າງ ແລະ ເງົາສະເພາະຕອນ Hover ເທົ່ານັ້ນ */
        ${active
          ? "border-purple-500 bg-[#1a1040] shadow-[0_10px_20px_rgba(147,51,234,0.15)]"
          : "border-purple-900/60 bg-[#120d35]/60 shadow-md"
        }
      `}
    >
      {/* Corner dots */}
      <span className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-purple-500/40" />
      <span className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-purple-500/40" />

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-3">{description}</p>
        <button className="border border-white/30 text-white text-[10px] font-semibold tracking-[0.12em] uppercase px-4 py-2 hover:bg-white/10 transition-colors rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0e0a1f] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-10 tracking-tight">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}