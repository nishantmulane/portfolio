import { useReveal } from "../../hooks/useReveal";

export default function Section({ id, label, title, children, className = "" }) {
  const headingRef = useReveal();
  const titleWords = title.split(" ");

  return <section id={id} className={`section page-wrap ${className}`}>
    <div ref={headingRef} className="section-head">
      <p className="eyebrow">{label}</p>
      <h2 className="section-title" aria-label={title}>
        {titleWords.map((word, index) => <span className="section-title-mask" key={`${word}-${index}`}>
          <span className="section-title-word" style={{ "--word-index": index }} aria-hidden="true">{word}</span>
        </span>)}
      </h2>
    </div>
    {children}
  </section>;
}
