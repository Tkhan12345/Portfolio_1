"use client";

import Image from "next/image";
import { projects, featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 md:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="reveal mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Real-world projects built with modern frontend, backend, cloud, and
            database technologies.
          </p>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400" />
        </div>

        {/* Featured Projects */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`reveal ${
                index === 1 ? "reveal-delay-2" : "reveal-delay-1"
              } group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/20`}
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

              {/* Shine */}
              <div className="absolute inset-0 translate-x-[-140%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-[140%]" />

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full border border-cyan-400/20 bg-black/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-300">
                  {project.description}
                </p>

                {"publication" in project && project.publication && (
                  <div className="mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                      Publication
                    </p>
                    <p className="text-sm leading-relaxed text-gray-200">
                      {project.publication}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8 flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/25"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="reveal mb-10 text-center text-3xl font-bold text-white">
            More Projects
          </h3>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`reveal group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  index % 3 === 1
                    ? "reveal-delay-1"
                    : index % 3 === 2
                    ? "reveal-delay-2"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="mb-3 text-xl font-semibold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h4>

                  <p className="mb-5 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="flex-1 rounded-lg bg-cyan-500 px-4 py-2 text-center font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}