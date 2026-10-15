import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { PortfolioProvider } from "./app/PortfolioProvider";
import { router } from "./app/router";
import "./index.css";

createRoot(document.getElementById("root")).render(<StrictMode><PortfolioProvider><RouterProvider router={router}/></PortfolioProvider></StrictMode>);
