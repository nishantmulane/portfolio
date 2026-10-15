import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const next = mode === "system" ? "dark" : mode === "dark" ? "light" : "system";
  return <button className="icon-button" type="button" aria-label={`Switch to ${next} theme`} title={`Theme: ${mode}`} onClick={() => setMode(next)}>{mode === "dark" ? <Sun size={17}/> : mode === "light" ? <Moon size={17}/> : <Monitor size={17}/>}</button>;
}
