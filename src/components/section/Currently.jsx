import { ArrowUpRight } from "lucide-react";

const Currently = () => {
  const items = [
    "Preparing for GATE (CSE) to strengthen core computer science fundamentals.",
    "Building modern full-stack web applications with React and Java.",
    "Learning system design, software architecture, and scalable application development.",
    "Reading books on software engineering, philosophy, and problem solving.",
  ];

  return (
    <section
      id="currently"
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
          Currently
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
          Always learning, always building.
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
          I enjoy continuously improving my technical skills while
          exploring ideas that help me become a better engineer,
          problem solver, and lifelong learner.
        </p>

        {/* Current Focus */}

        <div className="mt-20 border-t border-border">
          {items.map((item, index) => (
            <article
              key={item}
              className="
                group
                flex
                items-start
                justify-between
                gap-6
                border-b
                border-border
                py-8
                transition-all
                duration-300
                hover:bg-primary/5
              "
            >
              <div className="flex gap-5">
                {/* Number */}

                <span
                  className="
                    mt-1
                    text-sm
                    tracking-[0.2em]
                    text-secondary
                    shrink-0
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Content */}

                <p
                  className="
                    max-w-3xl
                    text-lg
                    leading-8
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  {item}
                </p>
              </div>

              {/* Arrow */}

              <ArrowUpRight
                size={20}
                className="
                  mt-1
                  shrink-0
                  opacity-0
                  -translate-x-2
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </article>
          ))}
        </div>

        {/* Closing Statement */}

        <div
          className="
            mt-16
            border-l-2
            border-primary
            pl-6
          "
        >
          <p
            className="
              max-w-2xl
              text-xl
              font-display
              leading-relaxed
              tracking-tight
              text-primary
            "
          >
            Every project, every book, and every challenge is another
            step toward becoming the engineer I aspire to be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Currently;