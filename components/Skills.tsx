"use client";

const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern, and scalable user interfaces.",
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
    description: "Designing REST APIs, CRUD systems, and backend workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "CRUD Systems",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Working with cloud deployment, monitoring, and DevOps basics.",
    skills: [
      "AWS EC2",
      "IAM",
      "CloudWatch",
      "Linux",
      "Docker Basics",
      "Vercel",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Using modern developer tools for collaboration and delivery.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Agile Basics",
      "API Testing",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Technical Stack
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Technologies I use to build full-stack applications, cloud-ready
            systems, and clean developer workflows.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-cyan-400" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className={`reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                i % 2 === 1 ? "reveal-delay-1" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-[130%]" />

              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-semibold text-white transition group-hover:text-cyan-300">
                  {group.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}