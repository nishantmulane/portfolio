const ProjectCard = ({ project }) => {
  const { title, description, tech, github, demo } = project;

  return (
    <div
      className="
        rounded-xl border border-neutral-200 dark:border-neutral-800
        p-6 transition-all duration-300
        hover:border-emerald-500/40
      "
    >
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map(item => (
          <span
            key={item}
            className="
              px-3 py-1 text-xs rounded-full
              border border-neutral-300 dark:border-neutral-700
            "
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-underline"
          >
            GitHub →
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-underline"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
