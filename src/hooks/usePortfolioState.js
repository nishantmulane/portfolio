import { useContext } from "react";
import { PortfolioContext } from "../app/portfolioContext";

export function usePortfolioState() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolioState must be used within PortfolioProvider");
  return context;
}
