"use client";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                
                <h3 className="text-white text-lg font-semibold mb-3">
                  {project.title}
                </h3>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:scale-105 transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}