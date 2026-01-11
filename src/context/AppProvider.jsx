import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

import { personalInfo } from "./data/personalInfo";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { experience } from "./data/experience";
import { contact } from "./data/contact";

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        personalInfo,
        projects,
        skills,
        experience,
        contact,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
