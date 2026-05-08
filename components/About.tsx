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
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="reveal mb-20 text-center">
          <p className="section-label mb-4">
            About Me
          </p>

          <h2 className="gradient-text text-4xl font-bold md:text-5xl">
            Engineer. Builder. Problem Solver.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-400">
            Passionate about building scalable digital products, cloud-ready
            systems, and modern full-stack experiences.
          </p>

          <div className="glow-line mx-auto mt-6" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="reveal reveal-delay-1">
            <div className="premium-card rounded-[2rem] p-8 md:p-10">
              <p className="text-lg leading-relaxed text-gray-300">
                I’m a Computer Science Engineering student graduating in 2026,
                focused on building scalable full-stack applications and modern
                cloud-based systems. My experience spans MERN stack
                development, AWS cloud infrastructure, REST APIs, analytics
                systems, and responsive frontend engineering.
              </p>

              <p className="mt-6 leading-relaxed text-gray-400">
                Currently working as a Cloud & DevOps Intern, I’ve gained
                practical exposure to deployment workflows, backend
                architecture, monitoring systems, and real-world software
                collaboration. I also bring strong communication and
                customer-focused problem-solving experience from my professional
                role at Concentrix.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Career Goal
                </p>

                <p className="mt-2 text-lg font-medium leading-relaxed text-white">
                  To build impactful software products and grow into a
                  high-performance Specialist Programmer role.
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aboutCards.map((card, index) => (
              <div
                key={card.title}
                className={`reveal premium-card premium-card-hover group rounded-3xl p-6 ${
                  index % 2 === 1
                    ? "reveal-delay-2"
                    : "reveal-delay-1"
                }`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white transition duration-300 group-hover:text-cyan-300">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}