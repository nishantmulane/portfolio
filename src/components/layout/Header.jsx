import { useState } from "react";
import useAppContext from "../../context/useAppContext";

const Header = () => {
  const { theme, setTheme } = useAppContext();
  const isDark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const navItems = ["Home", "Projects", "Skills", "Experience", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-black/10 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-semibold tracking-tight text-xl">
          Nishant Mulane
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="gradient-underline focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                {item}
              </a>
            </li>
          ))}

          <button
            onClick={toggleTheme}
            className="
              ml-8 p-4 py-1.5 rounded-full text-xs
              border border-black/20 dark:border-white/20
              transition-all duration-300
              hover:border-emerald-500
              focus:outline-none
              focus:ring-2 focus:ring-emerald-500/40
            "
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100"></span>
            <span className="block w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100"></span>
            <span className="block w-6 h-0.5 bg-neutral-900 dark:bg-neutral-100"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950">
          <ul className="flex flex-col px-6 py-6 gap-4 text-sm font-medium">
            {navItems.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="gradient-underline block w-fit"
                >
                  {item}
                </a>
              </li>
            ))}

            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="
                mt-2 w-fit px-4 py-1.5 rounded-full text-xs
                border border-black/20 dark:border-white/20
                hover:border-emerald-500
              "
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
