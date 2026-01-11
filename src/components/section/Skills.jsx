import useAppContext from "../../context/useAppContext";

const CATEGORY_LABELS = {
  languages: "Languages",
  frontend: "Frontend",
  stateManagement: "State Management",
  web: "Web Fundamentals",
  tools: "Tools & Platforms",
};

const Skills = () => {
  const { skills } = useAppContext();

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-semibold tracking-tight text-center mb-4">
        Skills
      </h2>

      <div className="mx-auto mb-14 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />

      <div className="grid md:grid-cols-2 gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              {CATEGORY_LABELS[category]}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map(skill => (
                <span
                  key={skill}
                  className="
                    px-4 py-1.5 rounded-full text-sm
                    border border-neutral-300 dark:border-neutral-700
                    transition-colors duration-300
                    hover:border-emerald-500
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
