import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-accent">Siam</h1>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-accent transition-colors ${
                location.pathname === link.path ? "text-accent font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleDark}
          className="text-2xl hover:scale-110 transition-transform"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}