import { about } from "../../data/about";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";

export default function AboutSection() {
  return <Section id="about" label="About" title="Engineering background. Frontend focus.">
    <Reveal>
      <div className="about-layout">
        <div className="about-copy">{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="fact-grid">{about.facts.map(fact => <div className="fact-row" key={fact.label}>
          <p className="eyebrow">{fact.label}</p>
          <p>{fact.value}</p>
        </div>)}</div>
      </div>
    </Reveal>
  </Section>;
}
