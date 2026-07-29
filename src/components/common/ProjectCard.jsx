import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className="
        group
        border-t
        border-border
        py-12
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-primary/5
      "
    >
      <div
        className="
          grid
          gap-8
          lg:grid-cols-[80px_1fr]
        "
      >
        {/* Project Number */}
        <div className="flex items-start">
          <span
            className="
              text-sm
              font-medium
              tracking-[0.2em]
              text-secondary
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div>
          {/* Title */}
          <h3
            className="
              flex
              items-center
              gap-2
              text-3xl
              sm:text-4xl
              font-display
              tracking-tight
              text-primary
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            {project.title}

            <ArrowUpRight
              size={22}
              className="
                opacity-0
                -translate-x-2
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            />
          </h3>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-secondary
            "
          >
            {project.description}
          </p>

          {/* Technology Stack */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-border
                  px-4
                  py-2
                  text-sm
                  text-secondary
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:text-primary
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-8
            "
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/link
                  inline-flex
                  items-center
                  gap-2
                  text-primary
                  transition-opacity
                  duration-300
                  hover:opacity-70
                "
              >
                <span
                  className="
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-px
                    after:w-0
                    after:bg-primary
                    after:transition-all
                    after:duration-300
                    group-hover/link:after:w-full
                  "
                >
                  View Source
                </span>

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                  "
                />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/link
                  inline-flex
                  items-center
                  gap-2
                  text-primary
                  transition-opacity
                  duration-300
                  hover:opacity-70
                "
              >
                <span
                  className="
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-px
                    after:w-0
                    after:bg-primary
                    after:transition-all
                    after:duration-300
                    group-hover/link:after:w-full
                  "
                >
                  Live Demo
                </span>

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                  "
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;