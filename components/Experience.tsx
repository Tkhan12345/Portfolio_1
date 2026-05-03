"use client";

export default function Experience() {
  return (
    <section id="experience" className="py-32 max-w-5xl mx-auto px-6">
      
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-20 text-gray-900 dark:text-white tracking-tight">
        Experience
      </h2>

      <div className="relative border-l border-gray-300 dark:border-gray-700">

        {/* ITEM 1 */}
        <div className="mb-16 ml-6">
          {/* Dot */}
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-black">
          </span>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Cloud & DevOps Intern
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            2025 • Internship
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Worked on cloud-based infrastructure and deployment workflows.</li>
            <li>Gained hands-on experience with CI/CD pipelines.</li>
            <li>Improved application performance and scalability.</li>
          </ul>
        </div>

        {/* ITEM 2 */}
        <div className="mb-16 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-black"></span>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Associate – Customer Service & Sales
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Concentrix • Jun 2022 – Mar 2024
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Handled customer queries using ticketing systems.</li>
            <li>Worked with Citrix for remote environment management.</li>
            <li>Improved customer satisfaction through problem-solving.</li>
          </ul>
        </div>

        {/* ITEM 3 */}
        <div className="ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-black"></span>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Independent Projects
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Self-directed
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Built full-stack applications using React & Next.js.</li>
            <li>Designed scalable UI systems with performance focus.</li>
            <li>Implemented APIs, authentication, and dashboards.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}