import useAppContext from "../../context/useAppContext";

const Experience = () => {
  const { experience } = useAppContext();

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-semibold tracking-tight text-center mb-4">
        Experience
      </h2>

      <div className="mx-auto mb-14 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />

      <div className="space-y-8 max-w-3xl mx-auto">
        {experience.map(item => (
          <div
            key={item.id}
            className="
              rounded-xl border border-neutral-200 dark:border-neutral-800
              p-6 transition-all duration-300
              hover:border-emerald-500/40
            "
          >
            <h3 className="text-lg font-semibold mb-1">
              {item.role}
            </h3>

            <p className="text-sm text-neutral-500 mb-4">
              {item.company} · {item.duration}
            </p>

            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed list-disc ml-5">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
