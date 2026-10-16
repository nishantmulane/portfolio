import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import ProjectVisual from "./ProjectVisual";

function ProjectLink({ href, label, project }) {
  return <a className="project-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} — ${project}`}>
    <span>{label}</span><ArrowUpRight size={15} aria-hidden="true"/>
  </a>;
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]?.id);
  const [hoveredProject, setHoveredProject] = useState(null);
  const displayedProject = hoveredProject ?? activeProject;
  const rowsRef = useRef(new Map());

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(entries => {
      const inView = entries.filter(entry => entry.isIntersecting);
      if (!inView.length) return;
      const centered = inView.sort((a, b) => {
        const center = window.innerHeight * 0.45;
        return Math.abs(a.boundingClientRect.top - center) - Math.abs(b.boundingClientRect.top - center);
      });
      setActiveProject(centered[0].target.dataset.projectId);
    }, { rootMargin: "-25% 0px -30% 0px", threshold: 0.05 });

    rowsRef.current.forEach(row => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const setRowRef = (id, node) => {
    if (node) rowsRef.current.set(id, node);
    else rowsRef.current.delete(id);
  };

  return <Section id="projects" label="Projects" title="A few things I’ve built.">
    <div className="project-showcase">
      <div className="project-list">
        {projects.map((project, index) => <Reveal key={project.id} style={{ "--reveal-index": index }}>
          <article
            ref={node => setRowRef(project.id, node)}
            className="project-row"
            data-project-id={project.id}
            onPointerEnter={() => {
              if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setHoveredProject(project.id);
            }}
            onPointerLeave={() => setHoveredProject(null)}
            onFocusCapture={() => setHoveredProject(project.id)}
            onBlurCapture={event => {
              if (!event.currentTarget.contains(event.relatedTarget)) setHoveredProject(null);
            }}
            onPointerMove={event => {
              if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
              const bounds = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
              event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
            }}
          >
            <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-tech">{project.tech.join(" · ")}</p>
              <div className="project-links">
                <ProjectLink href={project.github} label="GitHub" project={project.title}/>
                <ProjectLink href={project.live} label="Live" project={project.title}/>
              </div>
              <div className="project-mobile-preview"><ProjectVisual project={project} mobile active={project.id === displayedProject}/></div>
            </div>
          </article>
        </Reveal>)}
      </div>
      <aside className="project-preview-sticky" aria-label="Illustrative project previews, not application screenshots">
        <div className="project-preview-stage">
          {projects.map(project => <ProjectVisual key={project.id} project={project} active={project.id === displayedProject}/>) }
        </div>
      </aside>
    </div>
  </Section>;
}
