"use client";

const aboutCards = [
  {
    title: "🚀 Industry Exposure",
    text: "Internship and professional experience working on real-world systems, workflows, and customer operations.",
  },
  {
    title: "⚡ Rapid Adaptability",
    text: "Strong ability to learn modern frameworks, cloud tools, and evolving technologies quickly.",
  },
  {
    title: "🧠 Engineering Mindset",
    text: "Focused on scalable architecture, practical problem-solving, and performance-driven development.",
  },
  {
    title: "🌐 Full-Stack + Cloud",
    text: "Experience across frontend systems, backend APIs, databases, authentication, deployment, and cloud infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Engineer. Builder. Problem Solver.
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-400" />
        </div>

        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="reveal reveal-delay-1">
            <p className="text-lg leading-relaxed text-gray-300">
              I’m a Computer Science Engineering student graduating in 2026,
              focused on building scalable full-stack applications and modern
              cloud-based systems. My experience spans MERN stack development,
              AWS cloud infrastructure, REST APIs, analytics systems, and
              responsive frontend engineering.
            </p>

            <p className="mt-6 leading-relaxed text-gray-400">
              Currently working as a Cloud & DevOps Intern, I’ve gained
              practical exposure to deployment workflows, backend architecture,
              monitoring systems, and real-world software collaboration. I also
              bring strong communication and customer-focused problem-solving
              experience from my professional role at Concentrix.
            </p>

            <p className="mt-6 text-lg font-medium text-cyan-300">
              🎯 Goal: To build impactful software products and grow into a
              high-performance Specialist Programmer role.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aboutCards.map((card, index) => (
              <div
                key={card.title}
                className={`reveal group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  index % 2 === 1 ? "reveal-delay-2" : "reveal-delay-1"
                }`}
              >
                <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-300">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}