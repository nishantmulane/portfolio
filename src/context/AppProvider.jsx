import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

import aboutInfo from "./data/aboutInfo";
import personalInfo from "./data/personalInfo";
import projectInfo from "./data/projectInfo";
import skillInfo from "./data/skillInfo";
import experienceInfo from "./data/experienceInfo";
import contactInfo from "./data/contactInfo";

import { theme as designTheme } from "../theme";

const AppProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    const toKebabCase = (str) =>
      str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

    root.classList.toggle("dark", colorMode === "dark");

    const palette =
      colorMode === "dark"
        ? designTheme.colors.dark
        : designTheme.colors.light;

    // Colors
    Object.entries(palette).forEach(([key, value]) => {
      root.style.setProperty(`--${toKebabCase(key)}`, value);
    });

    // Radius
    Object.entries(designTheme.radius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${toKebabCase(key)}`, value);
    });

    // Shadows
    Object.entries(designTheme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${toKebabCase(key)}`, value);
    });

    // Layout
    Object.entries(designTheme.layout).forEach(([key, value]) => {
      root.style.setProperty(`--${toKebabCase(key)}`, value);
    });

    // Spacing (if spacing.js exists)
    if (designTheme.spacing) {
      Object.entries(designTheme.spacing).forEach(([key, value]) => {
        root.style.setProperty(`--space-${toKebabCase(key)}`, value);
      });
    }

    // Typography
    Object.entries(designTheme.typography).forEach(([key, value]) => {
      root.style.setProperty(`--font-${toKebabCase(key)}`, value);
    });
  }, [colorMode]);

  return (
    <AppContext.Provider
      value={{
        personalInfo,
        aboutInfo,

        projects: projectInfo,
        skills: skillInfo,
        experience: experienceInfo,
        contact: contactInfo,

        colorMode,
        setColorMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;