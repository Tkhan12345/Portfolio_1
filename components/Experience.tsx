"use client";

const experiences = [
  {
    role: "Cloud & DevOps Intern",
    company: "DrCloud Pvt. Ltd.",
    period: "Jan 2026 – Present",
    points: [
      "Worked on cloud infrastructure, deployment workflows, and backend integrations.",
      "Gained hands-on exposure to AWS services including EC2, IAM, and CloudWatch.",
      "Improved frontend responsiveness, API workflows, and overall application stability.",
      "Collaborated on scalable web systems using React, Node.js, and GitHub workflows.",
    ],
  },
  {
    role: "Associate – Customer Service & Sales",
    company: "Concentrix Limited",
    period: "Jun 2022 – Mar 2024",
    points: [
      "Handled customer support operations and issue resolution in high-volume environments.",
      "Worked with ticketing systems and Citrix-based remote work infrastructure.",
      "Developed strong communication, problem-solving, and customer handling skills.",
      "Maintained service quality while managing customer queries and operational workflows.",
    ],
  },
  {
    role: "Independent Full-Stack Projects",
    company: "Self-Directed",
    period: "2024 – Present",
    points: [
      "Built scalable MERN and Next.js applications with authentication and analytics systems.",
      "Developed REST APIs, dashboards, CRUD systems, and responsive frontend interfaces.",
      "Worked on cloud-based deployments, GitHub workflows, and UI performance optimization.",
      "Created production-style portfolio and SaaS-inspired application architectures.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="reveal mb-20 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Professional experience, technical exposure, and hands-on project
            development shaping my journey as a software engineer.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-cyan-400" />
        </div>

        <div className="relative ml-3 border-l border-white/10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`reveal relative mb-16 ml-8 ${
                index === 1
                  ? "reveal-delay-1"
                  : index === 2
                  ? "reveal-delay-2"
                  : ""
              }`}
            >
              <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-black bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white transition group-hover:text-cyan-300">
                        {exp.role}
                      </h3>

                      <p className="mt-1 text-cyan-300">{exp.company}</p>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 leading-relaxed text-gray-300"
                      >
                        <span className="mt-1 text-cyan-400">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}