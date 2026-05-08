"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack MERN Developer",
  "AWS Cloud & DevOps Intern",
  "ICSICE-2026 Research Contributor",
  "Building scalable web products",
];

const techStack = ["React", "Next.js", "Node.js", "MongoDB", "AWS", "Docker"];

export default function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

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
    const current = roles[i];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, j + 1));
          setJ(j + 1);

          if (j + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1000);
          }
        } else {
          setText(current.substring(0, j - 1));
          setJ(j - 1);

          if (j === 0) {
            setDeleting(false);
            setI((i + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 80
    );

    return () => clearTimeout(timeout);
  }, [j, deleting, i]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div
          className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${mouse.x}px), ${mouse.y}px)`,
          }}
        />

        <div
          className="absolute bottom-0 left-0 h-72 w-72 bg-blue-600/10 blur-3xl"
          style={{
            transform: `translate(${mouse.x * -0.7}px, ${mouse.y * -0.7}px)`,
          }}
        />

        <div
          className="absolute right-0 top-0 h-72 w-72 bg-purple-600/10 blur-3xl"
          style={{
            transform: `translate(${mouse.x * 0.8}px, ${mouse.y * 0.8}px)`,
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <p className="reveal mb-6 text-sm uppercase tracking-[0.25em] text-cyan-400 md:text-base">
          Hi, I’m Tufail Khan
        </p>

        <div className="reveal reveal-delay-1 pointer-events-none absolute left-0 top-16 select-none text-[18vw] font-black uppercase leading-none text-white/[0.04] md:text-[13vw]">
          DEVELOPER
        </div>

        <div className="relative z-10">
          <h1 className="reveal reveal-delay-1 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
            Full-Stack
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              MERN Developer
            </span>
            <br />
            & Cloud Intern
          </h1>

          <div className="reveal reveal-delay-2 mt-8 h-[40px]">
            <h2 className="text-lg font-medium text-gray-300 sm:text-xl md:text-2xl">
              {text}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </div>

          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Computer Science Engineering student passionate about scalable web
            applications, cloud infrastructure, DevOps workflows, and modern
            frontend experiences.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("projects")}
              className="group rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/10"
            >
              View Resume
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-14 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="float-medium rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-4 mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["5+", "Projects Built"],
              ["AWS", "Certified"],
              ["82%", "NPTEL Cloud"],
              ["2026", "CSE Graduate"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-3xl font-bold text-white">{value}</h3>
                <p className="mt-2 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}