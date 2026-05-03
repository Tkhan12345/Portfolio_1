"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Load theme on refresh
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !dark;

    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-bold text-lg">Tufail Khan</h1>

        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#experience" className="hover:text-blue-500">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <a
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-1 rounded-full bg-blue-600 text-white text-sm hover:scale-105 transition"
            >
              Resume
            </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-full border text-sm hover:scale-105 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </nav>
  );
}