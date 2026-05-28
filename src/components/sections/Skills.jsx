const skillCategories = [
  {
    label: "Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "Illustrator", level: 70 },
      { name: "Photoshop", level: 65 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "VS Code", level: 95 },
      { name: "Notion", level: 78 },
      { name: "Framer", level: 70 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-purple-400 text-xs font-semibold">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0e0a1f] py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-xs font-medium tracking-[0.15em] uppercase mb-2">
          What I Know
        </p>
        <h2 className="text-white text-4xl font-bold tracking-tight mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5 hover:border-purple-500/40 transition-colors"
            >
              <h3 className="text-white text-lg font-bold pb-2 border-b border-white/10">
                {category.label}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
