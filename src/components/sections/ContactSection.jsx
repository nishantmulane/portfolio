import { ArrowUpRight, CodeXml, Link as LinkIcon } from "lucide-react";
import { contact } from "../../data/contact";
import Reveal from "../ui/Reveal";

export default function ContactSection() {
  return <section id="contact" className="contact-wrap">
    <div className="page-wrap contact-section">
      <Reveal>
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact-title">Have a role or project in mind?</h2>
          <p className="contact-note">I’m open to conversations about frontend development and useful software.</p>
        </div>
        <div className="contact-actions">
          <a className="email-copy" href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight size={18}/></a>
          <div className="contact-social">
            <a href={contact.github} target="_blank" rel="noreferrer"><CodeXml size={16}/> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><LinkIcon size={16}/> LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
