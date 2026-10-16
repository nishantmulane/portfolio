import { useCallback, useEffect, useMemo, useState } from "react";
import { PortfolioContext } from "./portfolioContext";

function readThemeMode() {
  try {
    const savedMode = localStorage.getItem("theme-mode");
    return ["light", "dark", "system"].includes(savedMode) ? savedMode : "system";
  } catch {
    return "system";
  }
}

export function PortfolioProvider({ children }) {
  const [themeMode, setThemeModeState] = useState(readThemeMode);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const setThemeMode = useCallback(mode => {
    setThemeModeState(mode);
    try {
      localStorage.setItem("theme-mode", mode);
    } catch {
      // The selected theme still works when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const dark = themeMode === "dark" || (themeMode === "system" && media.matches);
      document.documentElement.classList.toggle("dark", dark);
      const themeColor = document.querySelector('meta[name="theme-color"]');
      if (themeColor) themeColor.content = dark ? "#0A0C0F" : "#FBFCFD";
    };
    applyTheme();

    if (themeMode !== "system") return undefined;
    if (media.addEventListener) {
      media.addEventListener("change", applyTheme);
      return () => media.removeEventListener("change", applyTheme);
    }
    media.addListener(applyTheme);
    return () => media.removeListener(applyTheme);
  }, [themeMode]);

  const value = useMemo(() => ({
    themeMode,
    setThemeMode,
    menuOpen,
    setMenuOpen,
    activeSection,
    setActiveSection,
  }), [themeMode, setThemeMode, menuOpen, activeSection]);

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

