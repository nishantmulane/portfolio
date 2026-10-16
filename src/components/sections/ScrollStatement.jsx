import { useEffect, useRef } from "react";

export default function ScrollStatement({ text }) {
  const statementRef = useRef(null);
  const words = text.split(/\s+/);

  useEffect(() => {
    const element = statementRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || reducedMotion.matches) return undefined;

    const wordElements = [...element.querySelectorAll("[data-statement-word]")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const start = window.innerHeight * 0.88;
      const end = window.innerHeight * 0.28;
      const totalProgress = Math.min(1, Math.max(0, (start - bounds.top) / (start - end)));
      wordElements.forEach((word, index) => {
        const progress = Math.min(1, Math.max(0, totalProgress * wordElements.length - index));
        word.style.setProperty("--word-progress", String(progress));
      });
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return <p ref={statementRef} className="about-statement" aria-label={text}>
    {words.map((word, index) => <span data-statement-word key={`${word}-${index}`} aria-hidden="true">{word}{index < words.length - 1 ? " " : ""}</span>)}
  </p>;
}
