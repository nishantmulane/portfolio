import { ArrowUpRight } from "lucide-react";
import useAppContext from "../../context/useAppContext";

const About = () => {
  const { aboutInfo } = useAppContext();

  return (
    <section
      id="about"
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
          {aboutInfo.sectionTitle}
        </span>

        {/* Heading */}

        <h2
          className="
            mt-4
            max-w-3xl
            font-display
            text-4xl
            leading-tight
            tracking-tight
            text-primary
            sm:text-5xl
            lg:text-6xl
          "
        >
          {aboutInfo.heading}
        </h2>

        {/* Paragraphs */}

        <div
          className="
            mt-10
            max-w-3xl
            space-y-6
          "
        >
          {aboutInfo.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="
                text-base
                leading-8
                text-secondary
                transition-colors
                duration-300
                hover:text-primary
              "
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Details */}

        <div className="mt-20 space-y-16">

          {/* Education */}

          <div
            className="
              group
              border-t
              border-border
              pt-8
              transition-all
              duration-300
              hover:bg-primary/5
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.18em]
                text-secondary
              "
            >
              {aboutInfo.education.title}
            </p>

            <h3
              className="
                mt-3
                font-display
                text-3xl
                tracking-tight
                text-primary
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {aboutInfo.education.degree}
            </h3>

            <p
              className="
                mt-2
                text-secondary
              "
            >
              {aboutInfo.education.university}
            </p>
          </div>

          {/* Current Focus */}

          <div
            className="
              group
              border-t
              border-border
              pt-8
              transition-all
              duration-300
              hover:bg-primary/5
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.18em]
                text-secondary
              "
            >
              {aboutInfo.focus.title}
            </p>

            <ul className="mt-6 space-y-4">
              {aboutInfo.focus.items.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-start
                    gap-4
                    text-lg
                    text-primary
                  "
                >
                  <span
                    className="
                      mt-3
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-primary
                    "
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
                    {/* Beyond Code */}

          <div
            className="
              group
              border-t
              border-border
              pt-8
              transition-all
              duration-300
              hover:bg-primary/5
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.18em]
                text-secondary
              "
            >
              {aboutInfo.interests.title}
            </p>

            <div
              className="
                mt-6
                grid
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {aboutInfo.interests.items.map((item) => (
                <div
                  key={item}
                  className="
                    group/item
                    rounded-xl
                    border
                    border-border
                    bg-background
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary
                    hover:shadow-sm
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-primary
                        transition-colors
                        duration-300
                      "
                    >
                      {item}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="
                        opacity-0
                        -translate-x-2
                        transition-all
                        duration-300
                        group-hover/item:translate-x-0
                        group-hover/item:opacity-100
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;