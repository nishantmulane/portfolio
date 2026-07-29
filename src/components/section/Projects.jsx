import { ArrowUpRight } from "lucide-react";
import useAppContext from "../../context/useAppContext";
import ProjectCard from "../common/ProjectCard";

const Projects = () => {
  const { projects } = useAppContext();

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
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
          Projects
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
          Selected work that reflects my engineering
          approach, technical curiosity, and passion
          for building reliable software.
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
          Every project has been an opportunity to solve
          real problems while improving my understanding of
          software engineering, clean architecture, and user
          experience.
        </p>

        {/* Projects */}
        <div className="mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16">
          <a
            href="https://github.com/nishantmulane"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-primary
              transition-all
              duration-300
              hover:opacity-80
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
                group-hover:after:w-full
              "
            >
              Explore more projects on GitHub
            </span>

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;