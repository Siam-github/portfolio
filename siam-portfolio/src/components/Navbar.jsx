// =============================
// Navbar.jsx (Dark Mode Added)
// =============================
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow px-6 py-3 flex justify-between">
      <h1 className="font-bold">Siam</h1>
      <button onClick={toggleDark}>{dark ? "☀️" : "🌙"}</button>
    </nav>
  );
}