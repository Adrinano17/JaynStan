import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () =>
    setTheme(theme === "luxury" ? "corporate" : "luxury");

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/portfolio", text: "Portfolio" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-base-300/90 border-b border-base-content/
      10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 m-2">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 ">
              <img src="/JaynStan.png" alt="JaynStan Logo" className="object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`transition-all hover:text-primary ${
                    location.pathname === to ? "text-primary font-semibold" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Toggle Theme */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-base-300 transition"
                aria-label="Toggle Theme"
              >
                {theme === "luxury" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
