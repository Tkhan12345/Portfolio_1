"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.add("dark");
  //   localStorage.setItem("theme", "dark");
  // }, []);

 return (
  <nav className="fixed top-0 w-full z-50">
    {/* Glow line */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

    <div className="mx-auto mt-4 max-w-6xl px-6">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl">
        
        {/* Logo */}
        <a
          href="#home"
          className="group text-lg font-bold tracking-tight text-white"
        >
          Tufail
          <span className="text-blue-500 group-hover:text-blue-400 transition">
            {" "}Khan
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 hover:scale-105 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mt-3 rounded-3xl border border-white/10 bg-black/90 p-4 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2 text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 hover:bg-white/10 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-500 transition"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </div>
  </nav>
);
}