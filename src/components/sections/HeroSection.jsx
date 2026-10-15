import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { personal } from "../../data/personal";

const portrait = "/nishant_mulane.png";
const HERO_TIMING = Object.freeze({
  entrance: 520,
  character: 56,
  namePause: 460,
  portraitPause: 720,
  detailsPause: 1_120,
});

export default function HeroSection() {
  const nameCharacters = Array.from(personal.name);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [typedCount, setTypedCount] = useState(() => reduceMotion ? nameCharacters.length : 0);
  const [portraitVisible, setPortraitVisible] = useState(reduceMotion);
  const [detailsVisible, setDetailsVisible] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let index = 0;
    let typingTimer;
    let portraitTimer;
    let detailsTimer;

    const typeNextCharacter = () => {
      if (index < nameCharacters.length) {
        index += 1;
        setTypedCount(index);
        typingTimer = window.setTimeout(typeNextCharacter, index === nameCharacters.length ? HERO_TIMING.namePause : HERO_TIMING.character);
        return;
      }

      portraitTimer = window.setTimeout(() => {
        setPortraitVisible(true);
        detailsTimer = window.setTimeout(() => setDetailsVisible(true), HERO_TIMING.detailsPause);
      }, HERO_TIMING.portraitPause);
    };

    typingTimer = window.setTimeout(typeNextCharacter, HERO_TIMING.entrance);
    return () => {
      window.clearTimeout(typingTimer);
      window.clearTimeout(portraitTimer);
      window.clearTimeout(detailsTimer);
    };
  }, [nameCharacters.length, reduceMotion]);

  return <section id="top" className="hero page-wrap">
    <p className={`eyebrow hero-kicker ${detailsVisible ? "is-visible" : ""}`}>
      Frontend developer <span>·</span> {personal.location}
    </p>
    <h1 className="hero-title" aria-label={personal.name}>
      <span aria-hidden="true">
        {nameCharacters.slice(0, typedCount).map((character, index) => <span className="hero-title-char" key={`${character}-${index}`}>
          {character === " " ? "\u00a0" : character}
        </span>)}
        <span className={`hero-caret ${typedCount === nameCharacters.length ? "is-finished" : ""}`}/>
      </span>
    </h1>
    <div className={`hero-copy ${detailsVisible ? "is-visible" : ""}`} inert={!detailsVisible}>
      <p className="hero-position">Computer engineering graduate focused on frontend development.</p>
      <p className="hero-description">I work with React and JavaScript, with hands-on experience building internal reporting and document workflows.</p>
      <div className="hero-links">
        <a className="button button-primary" href="#experience">Experience <ArrowRight size={16}/></a>
        <a className="button button-quiet" href={personal.resume} download>Résumé <ArrowUpRight size={15}/></a>
      </div>
    </div>
    <figure className={`hero-portrait ${portraitVisible ? "is-visible" : ""}`}>
      <img src={portrait} alt="Nishant Mulane" width="740" height="900" fetchPriority="high"/>
      <figcaption>
        <span>{personal.name}</span>
        <span>Computer Engineer · {personal.location.split(",")[0]}</span>
      </figcaption>
    </figure>
  </section>;
}
