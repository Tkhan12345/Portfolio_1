"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-4xl mx-auto px-6 text-center">
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
        Get In Touch
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        I'm open to internships, freelance work, and collaborations.
        Feel free to reach out.
      </p>

      {/* Email Button */}
      <a
        href="mailto:iam.tufailkhan@gmail.com"
        className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition"
      >
        Email Me
      </a>

      {/* Social Links */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/tufail-khan-308581275/"
          target="_blank"
          className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/__tufelkhan/"
          target="_blank"
          className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}