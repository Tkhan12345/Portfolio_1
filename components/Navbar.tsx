"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Publications", href: "#publications", id: "publications" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const navbarHeight = 10;

  if (id === "home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    const top =
      section.offsetTop - navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  setOpen(false);
};      

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      <div className="mx-auto mt-3">
        <div
  className={`mx-auto flex items-center justify-between rounded-full border border-white/10 backdrop-blur-2xl transition-all duration-500 ${
    scrolled
      ? "max-w-5xl bg-black/55 px-5 py-2 shadow-2xl shadow-cyan-500/10"
      : "max-w-[92rem] bg-white/[0.03] px-8 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.18)]"
  }`}
>
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className={`group whitespace-nowrap text-left font-black tracking-tight text-white transition-all duration-300 hover:scale-[1.02] ${
  scrolled ? "text-lg" : "text-xl"
}`}
          >
            Tufail
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              _Khan
            </span>
          </button>

          {/* Desktop Links */}
          <div className={`hidden items-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 lg:flex ${
  scrolled
    ? "gap-1 p-1 text-sm"
    : "gap-2 p-1.5 text-[15px]"
}`}>
            {navLinks.map((link) => {
              const active = activeSection === link.id;

              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative rounded-full px-3 py-2 transition-all duration-300 ${
                    active
                      ? "bg-cyan-400 text-black shadow-lg shadow-cyan-500/25"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Resume Button */}
          <div className="hidden lg:block">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "mt-3 max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[2rem] border border-white/10 bg-black/95 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Menu
              </p>
              <p className="text-xs text-gray-500">Portfolio</p>
            </div>

            <div className="grid gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`rounded-2xl px-4 py-3 text-left text-base font-bold transition ${
                    activeSection === link.id
                      ? "bg-cyan-400 text-black shadow-lg shadow-cyan-500/20"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-2xl bg-cyan-400 px-4 py-3 text-center font-black text-black transition hover:bg-cyan-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}