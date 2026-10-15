import { useReveal } from "../../hooks/useReveal";
export default function Reveal({ children, className = "", ...props }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`} {...props}>{children}</div>;
}
