import { Monitor, Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const next = mode === "system" ? "dark" : mode === "dark" ? "light" : "system";

  const changeTheme = event => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      setMode(next);
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    root.style.setProperty("--theme-origin-x", `${bounds.left + bounds.width / 2}px`);
    root.style.setProperty("--theme-origin-y", `${bounds.top + bounds.height / 2}px`);
    const transition = document.startViewTransition(() => flushSync(() => setMode(next)));
    const clearOrigin = () => {
      root.style.removeProperty("--theme-origin-x");
      root.style.removeProperty("--theme-origin-y");
    };
    transition.finished.then(clearOrigin, clearOrigin);
  };

  return <button className="icon-button" type="button" aria-label={`Switch to ${next} theme`} title={`Theme: ${mode}`} onClick={changeTheme}>{mode === "dark" ? <Sun size={17}/> : mode === "light" ? <Moon size={17}/> : <Monitor size={17}/>}</button>;
}
