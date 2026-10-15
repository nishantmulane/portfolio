import { skills } from "../../data/skills";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function SkillsSection() {
  return <Section id="skills" label="Capabilities" title="Tools & technologies">
    <div className="skills-list">{skills.map(group => <Reveal className="skill-row" key={group.label}>
      <h3>{group.label}</h3>
      <p>{group.items.join(" · ")}</p>
    </Reveal>)}</div>
  </Section>;
}
