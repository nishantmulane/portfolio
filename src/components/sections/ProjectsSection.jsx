import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

function ProjectLink({ href, label, project }) {
  return <a className="project-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} — ${project}`}>
    <span>{label}</span><ArrowUpRight size={15} aria-hidden="true"/>
  </a>;
}

export default function ProjectsSection() {
  return <Section id="projects" label="Projects" title="A few things I’ve built.">
    <div className="project-list">{projects.map((project, index) => <Reveal key={project.id}>
      <article className="project-row">
        <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="project-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="project-tech">{project.tech.join(" · ")}</p>
        </div>
        <div className="project-links">
          <ProjectLink href={project.github} label="GitHub" project={project.title}/>
          <ProjectLink href={project.live} label="Live" project={project.title}/>
        </div>
      </article>
    </Reveal>)}</div>
  </Section>;
}
