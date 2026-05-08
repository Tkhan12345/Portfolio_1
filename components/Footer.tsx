"use client";

const quickLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Publications",
  "Contact",
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Tkhan12345",
    icon: "🐙",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tufail-khan-308581275/",
    icon: "💼",
  },
  {
    name: "Email",
    href: "mailto:tufelkhandz@gmail.com",
    icon: "📧",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/80 px-6 py-16 backdrop-blur-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white">
              Tufail
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Khan
              </span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Full-stack developer focused on building scalable web apps,
              cloud-ready systems, and practical software products.
            </p>

            <a
              href="#contact"
              className="group relative mt-6 inline-flex overflow-hidden rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              <span className="relative z-10">Let’s Work Together →</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-5 font-bold text-white">Quick Links</h4>

            <div className="grid max-w-xs grid-cols-2 gap-3 text-sm text-gray-400">
              {quickLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:translate-x-1 hover:text-cyan-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-5 font-bold text-white">Connect</h4>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex w-fit items-center gap-3 transition hover:text-cyan-300"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition group-hover:-translate-y-1 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                    {social.icon}
                  </span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Tufail Khan. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}