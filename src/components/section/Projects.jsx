import useAppContext from "../../context/useAppContext";
import ProjectCard from "../common/ProjectCard";

const Projects = () => {
  const { projects } = useAppContext();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-semibold tracking-tight text-center mb-4">
        Projects
      </h2>

      <div className="mx-auto mb-14 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://github.com/nishantmulane"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-underline text-sm font-medium"
        >
          View more projects →
        </a>
      </div>
    </section>
  );
};

export default Projects;
