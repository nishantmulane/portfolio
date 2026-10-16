import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { usePortfolioState } from "../../hooks/usePortfolioState";
import { navigation } from "../../data/nav";
import { personal } from "../../data/personal";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  const location = useLocation();
  const { activeSection, menuOpen, setMenuOpen } = usePortfolioState();
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, setMenuOpen]);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 20);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useLayoutEffect(() => {
    if (!menuOpen || !menuRef.current) return undefined;

    const previouslyFocused = document.activeElement;
    const scrollY = window.scrollY;
    const body = document.body;
    const root = document.documentElement;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    const previousScrollBehavior = root.style.scrollBehavior;
    const getFocusable = () => [...menuRef.current.querySelectorAll('a[href], button:not([disabled])')];
    const focusFrame = requestAnimationFrame(() => getFocusable()[0]?.focus());

    body.classList.add("menu-open");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    root.style.scrollBehavior = "auto";

    const handleKeyDown = event => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key !== "Tab") return;

      const nodes = getFocusable();
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      body.classList.remove("menu-open");
      Object.assign(body.style, previousBodyStyles);
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = previousScrollBehavior;
      previouslyFocused?.focus?.();
    };
  }, [menuOpen, setMenuOpen]);

  const hrefFor = id => location.pathname === "/" ? `#${id}` : `/#${id}`;
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="header-inner page-wrap" aria-label="Primary navigation">
        <Link className="wordmark" to="/" onClick={closeMenu}>
          {personal.name}<span>/ PORTFOLIO</span>
        </Link>
        <ul className="desktop-nav">
          {navigation.map(item => <li key={item.id}>
            <a
              className={location.pathname === "/" && activeSection === item.id ? "nav-active" : ""}
              href={hrefFor(item.id)}
              aria-current={location.pathname === "/" && activeSection === item.id ? "location" : undefined}
            >{item.label}</a>
          </li>)}
          <li><a href={personal.resume} download>Résumé</a></li>
        </ul>
        <div className="header-actions">
          <ThemeToggle/>
          <button
            className="icon-button menu-trigger"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </nav>
    </header>
    {menuOpen && createPortal(
      <div ref={menuRef} id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
        <button className="mobile-close icon-button" type="button" aria-label="Close navigation" onClick={closeMenu}><X/></button>
        <nav aria-label="Mobile navigation">
          <ul>{navigation.map((item, index) => <li key={item.id} style={{ "--item-index": index }}>
            <a href={hrefFor(item.id)} onClick={closeMenu}>{item.label}</a>
          </li>)}</ul>
          <a className="mobile-resume" href={personal.resume} download onClick={closeMenu}>Download résumé ↗</a>
        </nav>
        <ThemeToggle/>
      </div>,
      document.body,
    )}
  </>;
}
