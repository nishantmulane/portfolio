import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const element = progressRef.current;
    if (!element) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nativeTimeline = !reducedMotion && CSS.supports("animation-timeline: scroll(root)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
      if (!nativeTimeline) element.style.transform = `scaleX(${progress})`;
      element.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
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

  return <div
    ref={progressRef}
    className="scroll-progress"
    role="progressbar"
    aria-label="Page scroll progress"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="0"
  />;
}
