import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-center z-50">
      <div
        className={`px-8 border transition-all duration-300 backdrop-blur-xl my-4 w-[50%] rounded-2xl shadow-lg flex items-center justify-between
          ${
            scrolled
              ? "bg-gradient-to-r from-accent/40 to-primary/40 border-white/30 py-2"
              : "bg-gradient-to-r from-white/20 to-white/10 border-white/20"
          }
        `}
      >
        {/* Navigation links */}
        <div className="flex items-center justify-evenly gap-8 py-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `title transition-colors duration-200 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary/80"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/vlogs"
            className={({ isActive }) =>
              `title transition-colors duration-200 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary/80"
              }`
            }
          >
            Vlogs
          </NavLink>
          <NavLink
            to="/detail/:id"
            className={({ isActive }) =>
              `title transition-colors duration-200 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary/80"
              }`
            }
          >
            Detail
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `title transition-colors duration-200 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary/80"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `title transition-colors duration-200 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:text-primary/80"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full transition-all hover:scale-110 active:scale-95"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-foreground" />
          ) : (
            <Sun className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
