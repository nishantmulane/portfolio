import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { personal } from "../../data/personal";

const nameWords = personal.name.split(" ");

export default function HeroSection() {
  const heroRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const entranceFrame = requestAnimationFrame(() => hero.classList.add("is-entered"));
    const portrait = portraitRef.current;
    const image = portrait?.querySelector("img");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!portrait || !image || !finePointer.matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => cancelAnimationFrame(entranceFrame);
    }

    let frame = 0;
    let offsetX = 0;
    let offsetY = 0;

    const applyOffset = () => {
      frame = 0;
      image.style.setProperty("--portrait-x", `${offsetX}px`);
      image.style.setProperty("--portrait-y", `${offsetY}px`);
    };

    const handlePointerMove = event => {
      const bounds = portrait.getBoundingClientRect();
      offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
      offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
      if (!frame) frame = requestAnimationFrame(applyOffset);
    };

    const resetOffset = () => {
      offsetX = 0;
      offsetY = 0;
      if (!frame) frame = requestAnimationFrame(applyOffset);
    };

    portrait.addEventListener("pointermove", handlePointerMove, { passive: true });
    portrait.addEventListener("pointerleave", resetOffset, { passive: true });
    return () => {
      cancelAnimationFrame(entranceFrame);
      if (frame) cancelAnimationFrame(frame);
      portrait.removeEventListener("pointermove", handlePointerMove);
      portrait.removeEventListener("pointerleave", resetOffset);
    };
  }, []);

  return <section ref={heroRef} id="top" className="hero page-wrap">
    <p className="eyebrow hero-kicker">
      Frontend developer <span>·</span> {personal.location}
    </p>
    <h1 className="hero-title" aria-label={personal.name}>
      {nameWords.map((word, index) => <span className="hero-title-mask" key={word}>
        <span className="hero-title-word" style={{ "--word-index": index }} aria-hidden="true">{word}</span>
      </span>)}
    </h1>
    <div className="hero-copy">
      <p className="hero-position">Computer engineering graduate focused on frontend development.</p>
      <p className="hero-description">I work with React and JavaScript, with hands-on experience building internal reporting and document workflows.</p>
      <div className="hero-links">
        <a className="button button-primary" href="#experience">Experience <ArrowRight size={16}/></a>
        <a className="button button-quiet" href={personal.resume} download>Résumé <ArrowUpRight size={15}/></a>
      </div>
    </div>
    <figure ref={portraitRef} className="hero-portrait">
      {/* TODO(owner): supply a sharper portrait at 1000×1250 or larger; don't upscale this source. */}
      <picture>
        <img src="/nishant_mulane.png" alt="Nishant Mulane" width="500" height="500" fetchPriority="high" decoding="async"/>
      </picture>
      <figcaption>
        <span>{personal.name}</span>
        <span>Computer Engineer · {personal.location.split(",")[0]}</span>
      </figcaption>
    </figure>
  </section>;
}
