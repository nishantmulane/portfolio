import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home";
const NotFound = lazy(() => import("../pages/NotFound"));
export const router = createBrowserRouter([{ element: <RootLayout/>, children: [
  { path: "/", element: <Home/> }, { path: "*", element: <NotFound/> },
]}]);
