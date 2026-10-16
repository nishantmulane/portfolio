import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, CodeXml, Copy, Link as LinkIcon } from "lucide-react";
import { contact } from "../../data/contact";
import Reveal from "../ui/Reveal";

export default function ContactSection() {
  const [copyState, setCopyState] = useState("idle");
  const copyTimer = useRef(0);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyState("copied");
    } catch {
      setCopyState("unavailable");
    }
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopyState("idle"), 1_600);
  };

  const copyLabel = copyState === "copied" ? "Copied" : copyState === "unavailable" ? "Unavailable" : "Copy email";

  return <section id="contact" className="contact-wrap">
    <div className="page-wrap contact-section">
      <Reveal>
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact-title">Have a role or project in mind?</h2>
          <p className="contact-note">I’m open to conversations about frontend development and useful software.</p>
        </div>
        <div className="contact-actions">
          <div className="email-row">
            <a className="email-copy" href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight size={18}/></a>
            <button className="copy-email" type="button" onClick={copyEmail} aria-label={copyLabel}>
              {copyState === "copied" ? <Check size={15}/> : <Copy size={15}/>}
              <span aria-live="polite">{copyLabel}</span>
            </button>
          </div>
          <div className="contact-social">
            <a href={contact.github} target="_blank" rel="noreferrer"><CodeXml size={16}/> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><LinkIcon size={16}/> LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
