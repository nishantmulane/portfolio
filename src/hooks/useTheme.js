import { usePortfolioState } from "./usePortfolioState";

export function useTheme() {
  const { themeMode, setThemeMode } = usePortfolioState();
  return { mode: themeMode, setMode: setThemeMode };
}
