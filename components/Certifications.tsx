"use client";

import { useState } from "react";

const certifications = [
  {
    title: "NPTEL – Cloud Computing",
    issuer: "IIT Kanpur",
    detail:
      "Elite Certification with 82% score focused on cloud computing concepts and distributed systems.",
    tag: "Cloud",
    icon: "☁️",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    detail:
      "Validated understanding of AWS cloud services, infrastructure, security, and deployment fundamentals.",
    tag: "AWS",
    icon: "🚀",
  },
  {
    title: "Oracle OCI Foundation Associate",
    issuer: "Oracle",
    detail:
      "Foundation-level certification covering Oracle Cloud Infrastructure and cloud architecture concepts.",
    tag: "Oracle",
    icon: "🧩",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    detail:
      "Worked with Pandas, NumPy, data preprocessing, and visualization workflows using Python.",
    tag: "Data",
    icon: "📊",
  },
  {
    title: "Python for Data Science & AI",
    issuer: "IBM",
    detail:
      "Built foundational skills in Python programming, AI concepts, and data science workflows.",
    tag: "Python",
    icon: "🐍",
  },
  {
    title: "Agile Scrum Master",
    issuer: "Simplilearn",
    detail:
      "Learned Agile methodologies, Scrum workflows, sprint planning, and collaborative product delivery.",
    tag: "Agile",
    icon: "⚡",
  },
];

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="group relative [perspective:1000px]"
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-200 ease-out [transform-style:preserve-3d] hover:border-cyan-400/40 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden"
      >
        {/* Animated Glow */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

        {/* Shine Effect */}
        <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-[120%]" />

        <div className="relative z-10 [transform:translateZ(40px)]">
          {/* Top */}
          <div className="mb-6 flex items-center justify-between">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              {cert.tag}
            </span>

            <span className="text-4xl transition duration-300 group-hover:scale-110 group-hover:-rotate-6">
              {cert.icon}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
            {cert.title}
          </h3>

          {/* Issuer */}
          <p className="mt-2 text-sm text-cyan-400">{cert.issuer}</p>

          {/* Detail */}
          <p className="mt-5 text-sm leading-relaxed text-gray-400">
            {cert.detail}
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-10 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Learning & Credentials
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
            Certifications and learning experiences strengthening my foundation
            in cloud computing, software engineering, data analysis, and modern
            development workflows.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-cyan-400" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}