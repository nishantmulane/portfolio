import { experience } from "../../data/experience";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function ExperienceSection() {
  return <Section id="experience" label="Experience" title="Work experience" className="experience-section">
    <div className="experience-list">{experience.map(item => <Reveal key={item.id}>
      <article className="experience-item">
        <div className="experience-meta">
          <p className="eyebrow">{item.company}</p>
          <span>{item.duration}</span>
        </div>
        <div>
          <h3>{item.role}</h3>
          <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
          <p className="tech-list">{item.tech.join(" · ")}</p>
        </div>
      </article>
    </Reveal>)}</div>
  </Section>;
}
