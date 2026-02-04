import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () =>
    setTheme(theme === "luxury" ? "corporate" : "luxury");

  const navLinks = [
    {to: "/", text: "Home"},
    {to: "/about", text: "About"},
    {to: "/gallery", text: "Gallery"},
  ]

  return <div>
    Navbar
  </div>;
};

export default NavBar;
