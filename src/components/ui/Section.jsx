export default function Section({ id, label, title, children, className = "" }) {
  return <section id={id} className={`section page-wrap ${className}`}><div className="section-head"><p className="eyebrow">{label}</p><h2 className="section-title">{title}</h2></div>{children}</section>;
}
