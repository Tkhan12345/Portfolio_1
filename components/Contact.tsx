"use client";

import useReveal from "@/hooks/useReveal";

const contactCards = [
  {
    label: "Location",
    value: "Pune, India",
  },
  {
    label: "Email",
    value: "tufelkhandz@gmail.com",
  },
  {
    label: "Focus",
    value: "Full-Stack / Cloud",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Tkhan12345",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tufail-khan-308581275/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/__tufelkhan/",
  },
];

export default function Contact() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div
          ref={revealRef}
          className="fade-up grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Left Content */}
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/10">
              Available for opportunities
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Let’s build
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                something meaningful.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
              I’m open to internships, fresher roles, freelance projects, and
              collaborations in full-stack development, cloud, and DevOps. Feel
              free to reach out.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:tufelkhandz@gmail.com"
                className="group relative overflow-hidden rounded-full bg-cyan-400 px-8 py-4 text-center font-black text-black shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/30"
              >
                <span className="relative z-10">Email Me</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 text-center font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                View Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="premium-card premium-card-hover group relative overflow-hidden rounded-[2rem] p-6">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl transition group-hover:bg-cyan-500/30" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl transition group-hover:bg-purple-500/30" />

            {/* Terminal Header */}
            <div className="relative z-10 mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <p className="ml-3 text-sm text-gray-400">contact.json</p>
            </div>

            <div className="relative z-10 space-y-4">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <p className="text-sm text-gray-500">{card.label}</p>

                  <p className="mt-1 break-all text-lg font-bold text-white">
                    {card.value}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 shadow-lg shadow-cyan-500/10">
                <p className="text-sm font-medium text-cyan-300">Status</p>

                <p className="mt-1 text-lg font-black text-white">
                  Open to internships & fresher roles
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-gray-500">Response</p>

                <p className="mt-1 text-lg font-bold text-white">
                  Usually available for project discussions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}