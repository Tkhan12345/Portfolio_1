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

  const navbarOffset = id === "home" ? 0 : -10;

  const top =
    section.getBoundingClientRect().top + window.scrollY - navbarOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const currentSection = navLinks.find((link) => {
        const section = document.getElementById(link.id);
        if (!section) return false;

        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) setActiveSection(currentSection.id);
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
          className={`mx-auto flex items-center justify-between rounded-full border border-white/10 bg-black/70 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl transition-all duration-300 ${
            scrolled ? "max-w-5xl px-4 py-2" : "max-w-7xl px-5 py-3"
          }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="group whitespace-nowrap text-left text-lg font-black tracking-tight text-white"
          >
            Tufail
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              _Khan
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm font-semibold text-gray-300 lg:flex">
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

          <div className="hidden lg:block">
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-black"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "mt-3 max-h-[650px] opacity-100" : "max-h-0 opacity-0"
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
                      ? "bg-cyan-400 text-black"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
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