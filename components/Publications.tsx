"use client";

import useReveal from "@/hooks/useReveal";

export default function Publications() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="publications" className="relative overflow-hidden px-6 py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-20 text-center">
          <p className="section-label mb-4">Research & Publication</p>

          <h2 className="gradient-text text-4xl font-bold md:text-5xl">
            Publications
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-400">
            Academic work focused on building practical technology solutions
            with real-world application.
          </p>

          <div className="glow-line mx-auto mt-6" />
        </div>

        <div
          ref={revealRef}
          className="fade-up premium-card premium-card-hover group relative overflow-hidden rounded-[2rem] p-6 md:p-10"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl transition duration-500 group-hover:bg-cyan-500/30" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl transition duration-500 group-hover:bg-purple-500/30" />

          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />

          <div className="relative z-10 grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:items-center">
            <div>
              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Accepted for Publication
              </span>

              <h3 className="mt-6 text-2xl font-black leading-tight text-white md:text-3xl">
                Design and Implementation of UniKart: A College E-Commerce
                Website
              </h3>

              <p className="mt-5 max-w-3xl leading-relaxed text-gray-400">
                Research paper based on UniKart, a campus-focused e-commerce
                platform designed to help students access products, services,
                and campus utilities through a centralized digital system.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "ICSICE-2026",
                  "Scopus / Wiley",
                  "Certificate No: ICSEC2618234",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Conference", value: "ICSICE" },
                  { label: "Year", value: "2026" },
                  { label: "Status", value: "Accepted" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-1 font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[1.7rem] border border-white/10 bg-black/30 p-6 text-center transition duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5">
              <div className="float-slow mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-4xl shadow-lg shadow-cyan-500/10">
                📄
              </div>

              <h4 className="text-xl font-bold text-white">
                International Conference
              </h4>

              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                Presented at the 4th International Conference on Sustainability
                Innovation in Computing and Engineering.
              </p>

              <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-600/10 px-4 py-3">
                <p className="text-sm font-semibold text-cyan-300">
                  Published / Accepted Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}