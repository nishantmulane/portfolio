import { useEffect, useRef } from "react";
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) { node?.classList.add("is-visible"); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}
