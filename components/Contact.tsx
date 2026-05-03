"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl">
          
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 px-6 py-16 md:px-14 text-center">
            
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              Available for opportunities
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              Let’s Build Something
              <span className="text-blue-600"> Meaningful</span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
              I’m open to internships, fresher roles, freelance projects, and
              collaborations in full-stack development, cloud, and DevOps.
              Feel free to reach out.
            </p>

            {/* Main Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a
                href="mailto:tufelkhandz@gmail.com"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition"
              >
                Email Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-105 transition"
              >
                View Resume
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Location
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Pune, India
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="font-semibold text-gray-900 dark:text-white break-all">
                  tufelkhandz@gmail.com
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Interest
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Full-Stack / Cloud
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/Tkhan12345"
                target="_blank"
                className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/tufail-khan-308581275/"
                target="_blank"
                className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/__tufelkhan/"
                target="_blank"
                className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Instagram
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}