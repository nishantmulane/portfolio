import { Suspense, useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { personal } from "../../data/personal";

function setMeta(selector, attribute, value, content) {
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, value);
    document.head.append(meta);
  }
  meta.content = content;
}

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === "/";
    const title = isHome ? `${personal.name} — Portfolio` : `Page not found — ${personal.name}`;
    document.title = title;
    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "");

    if (siteUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = `${siteUrl}${location.pathname}`;
      setMeta('meta[property="og:url"]', "property", "og:url", `${siteUrl}${location.pathname}`);
    }

    const description = "Portfolio of Nishant Mulane, a Computer Engineering graduate and frontend developer in Pune, India.";
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
  }, [location.pathname]);

  useEffect(() => {
    const id = location.hash.slice(1);
    if (!id) return undefined;
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header/>
    <main id="main-content" tabIndex="-1">
      <Suspense fallback={<div className="page-wrap loading-state">Loading…</div>}>
        <Outlet/>
      </Suspense>
    </main>
    <Footer/>
    <ScrollRestoration/>
  </>;
}
