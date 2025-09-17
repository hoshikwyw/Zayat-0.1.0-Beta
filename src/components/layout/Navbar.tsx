import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/vlogs", label: "Vlogs" },
    { to: "/detail/:id", label: "Detail" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center z-50">
      <div
        className={`px-6 md:px-8 border transition-all duration-300 backdrop-blur-xl my-3 w-[80%] md:w-[80%] lg:w-[60%] rounded-2xl shadow-lg flex items-center justify-between
          ${
            scrolled
              ? "bg-gradient-to-r from-accent/40 to-primary/40 border-white/30 py-2"
              : "bg-gradient-to-r from-white/20 to-white/10 border-white/20"
          }
        `}
      >
        {/* Logo / Brand */}
        <NavLink to="/" className="font-bold text-lg text-primary">
          FlavorMap
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `title transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "hover:text-primary/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions (theme + mobile menu) */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full px-6">
          <div className="flex flex-col items-center gap-4 bg-background/80 backdrop-blur-md rounded-xl shadow-md py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `title text-lg transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "hover:text-primary/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
