import { ArrowUp, CodeXml, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { contact } from "../../data/contact";
import { personal } from "../../data/personal";
export default function Footer() {
  return <footer className="site-footer"><div className="page-wrap footer-inner"><Link className="wordmark" to="/">{personal.name}<span>/ PORTFOLIO</span></Link><p>© {new Date().getFullYear()} · Pune, India</p><div className="social-links"><a aria-label="GitHub" href={contact.github} target="_blank" rel="noreferrer"><CodeXml/></a><a aria-label="LinkedIn" href={contact.linkedin} target="_blank" rel="noreferrer"><LinkIcon/></a><a aria-label="Back to top" href="/#top"><ArrowUp/></a></div></div></footer>;
}
