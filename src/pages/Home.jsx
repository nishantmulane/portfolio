import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";
import { useEffect } from "react";
import { usePortfolioState } from "../hooks/usePortfolioState";

export default function Home() {
  const { setActiveSection } = usePortfolioState();
  useEffect(() => {
    const sections = ["about", "projects", "experience", "contact"].map(id => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(entries => {
      const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActiveSection(current.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return <>
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ExperienceSection/>
    <ContactSection/>
  </>;
}
