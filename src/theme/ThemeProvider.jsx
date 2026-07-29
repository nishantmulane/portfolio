import { useEffect } from "react";
import { theme } from "./index";

export default function ThemeProvider({ darkMode, children }) {
  useEffect(() => {
    const root = document.documentElement;

    const palette = darkMode
      ? theme.colors.dark
      : theme.colors.light;

    Object.entries(palette).forEach(([key, value]) => {
      root.style.setProperty(
        `--${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`,
        value
      );
    });

    Object.entries(theme.radius).forEach(([key, value]) => {
      root.style.setProperty(`--radius-${key}`, value);
    });

    Object.entries(theme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    Object.entries(theme.layout).forEach(([key, value]) => {
      root.style.setProperty(
        `--${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`,
        value
      );
    });
  }, [darkMode]);

  return children;
}