"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "CRUD Systems",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (Basics)",
      "CI/CD",
      "Docker (Basics)",
      "Deployment (Vercel)",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Linux",
      "VS Code",
      "Agile Basics",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el?.classList.add("animate-in");
        }
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="skills"
      className="py-32 max-w-6xl mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-20 text-gray-900 dark:text-white tracking-tight">
        Skills & Technologies
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300"
          >
            {/* Category */}
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {group.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:scale-105 transition duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Animation trigger class */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}