import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Download } from "lucide-react";
import useAppContext from "../../context/useAppContext";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const { colorMode, setColorMode } = useAppContext();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isDark = colorMode === "dark";

  const toggleTheme = () => {
    setColorMode(isDark ? "light" : "dark");
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const resumeLink = "/Nishant_Rahul_Mulane.pdf";

  return (<header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
  <nav className="mx-auto flex h-20 max-w-layout items-center justify-between px-6">
    {/* Logo */}
    <a
      href="#home"
      className="text-2xl font-display tracking-tight text-primary transition-opacity duration-300 hover:opacity-80"
    >
      Nishant Mulane
    </a>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 lg:flex">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.slice(1);

        return (
          <a
            key={item.label}
            href={item.href}
            className={`group relative py-1 text-sm transition-all duration-300 ${
              isActive
                ? "text-primary"
                : "text-secondary hover:text-primary"
            }`}
          >
            {item.label}

            <span
              className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        );
      })}

      {/* Resume */}
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-secondary transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5"
      >
        Resume
        <Download size={16} />
      </a>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="rounded-full border border-border p-2 transition-all duration-300 hover:border-primary hover:rotate-180"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>

    {/* Mobile Buttons */}
    <div className="flex items-center gap-2 lg:hidden">
      <button
        onClick={toggleTheme}
        className="rounded-full border border-border p-2 transition-colors duration-300 hover:border-primary"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded-full border border-border p-2 transition-colors duration-300 hover:border-primary"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </nav>

  {/* Mobile Menu */}
  <div
    className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
      menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="border-t border-border bg-background px-6 py-6">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          );
        })}

        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
        >
          Resume
          <Download size={16} />
        </a>
      </div>
    </div>
  </div>
</header>
  );
};

export default Header;