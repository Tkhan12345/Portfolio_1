"use client";

const skillGroups = [
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, modern, and scalable user interfaces.",
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
    description:
      "Designing REST APIs, CRUD systems, and backend workflows.",
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
    description:
      "Working with cloud deployment, monitoring, and DevOps basics.",
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
    description:
      "Using modern developer tools for collaboration and delivery.",
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
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="reveal mb-20 text-center">
          <p className="section-label mb-4">
            Technical Stack
          </p>

          <h2 className="gradient-text text-4xl font-bold md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-400">
            Technologies I use to build scalable full-stack systems,
            cloud-ready infrastructure, and premium frontend experiences.
          </p>

          <div className="glow-line mx-auto mt-6" />
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className={`reveal premium-card premium-card-hover group relative overflow-hidden rounded-3xl p-7 ${
                i % 2 === 1 ? "reveal-delay-1" : ""
              }`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-[130%]" />

              {/* Top Glow Line */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="mb-3 text-2xl font-semibold text-white transition duration-300 group-hover:text-cyan-300">
                  {group.title}
                </h3>

                <p className="mb-7 text-sm leading-relaxed text-gray-400">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}