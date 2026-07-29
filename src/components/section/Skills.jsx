import { ArrowUpRight } from "lucide-react";
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
    <section
      id="skills"
      className="scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-layout px-6">
        {/* Section Label */}

        <span
          className="
            text-xs
            uppercase
            tracking-[0.22em]
            text-secondary
          "
        >
          Skills
        </span>

        {/* Heading */}

        <h2
          className="
            mt-4
            max-w-4xl
            font-display
            text-4xl
            leading-tight
            tracking-tight
            text-primary
            sm:text-5xl
            lg:text-6xl
          "
        >
          Technologies and tools I use to build
          modern, scalable, and reliable software.
        </h2>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-3xl
            text-base
            leading-8
            text-secondary
          "
        >
          My focus is on writing maintainable code,
          learning strong engineering fundamentals,
          and continuously improving my development
          workflow.
        </p>

        {/* Skills */}

        <div className="mt-20 border-t border-border">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="
                group
                grid
                gap-8
                border-b
                border-border
                py-10
                transition-all
                duration-300
                hover:bg-primary/5
                lg:grid-cols-[240px_1fr]
              "
            >
              {/* Category */}

              <div>
                <h3
                  className="
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-secondary
                  "
                >
                  {CATEGORY_LABELS[category]}
                </h3>
              </div>

              {/* Skills */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="
                      group/item
                    "
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-border
                        px-4
                        py-2
                        text-sm
                        text-primary
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary
                        hover:shadow-sm
                      "
                    >
                      {skill}

                      <ArrowUpRight
                        size={14}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-300
                          group-hover/item:translate-x-0
                          group-hover/item:opacity-100
                        "
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;