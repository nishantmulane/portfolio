import { ArrowUpRight } from "lucide-react";
import useAppContext from "../../context/useAppContext";

const Experience = () => {
  const { experience } = useAppContext();

  return (
    <section
      id="experience"
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
          Experience
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
          Building practical software solutions while
          continuously strengthening my engineering
          foundations.
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
          My experience has focused on developing
          real-world applications, collaborating with
          teams, and learning how software engineering
          principles are applied in production
          environments.
        </p>

        {/* Timeline */}

        <div className="mt-20 border-t border-border">
          {experience.map((item) => (
            <article
              key={item.id}
              className="
                group
                grid
                gap-10
                border-b
                border-border
                py-12
                transition-all
                duration-300
                hover:bg-primary/5
                lg:grid-cols-[220px_1fr]
              "
            >
              {/* Duration */}

              <div>
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-secondary
                  "
                >
                  {item.duration}
                </p>
              </div>

              {/* Content */}

              <div>
                {/* Role */}

                <h3
                  className="
                    font-display
                    text-3xl
                    tracking-tight
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  {item.role}
                </h3>

                {/* Company */}

                <div
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-2
                    text-lg
                    text-secondary
                  "
                >
                  <span>{item.company}</span>

                  <ArrowUpRight
                    size={18}
                    className="
                      opacity-0
                      -translate-x-2
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* Responsibilities */}

                <ul
                  className="
                    mt-8
                    space-y-5
                  "
                >
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="
                        flex
                        items-start
                        gap-4
                        text-base
                        leading-8
                        text-secondary
                      "
                    >
                      <span
                        className="
                          mt-3
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-primary
                        "
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}

                {item.tech && item.tech.length > 0 && (
                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >
                    {item.tech.map((technology) => (
                      <span
                        key={technology}
                        className="
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
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;