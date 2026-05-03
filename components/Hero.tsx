"use client";

import { useEffect, useState } from "react";

const roles = [
  "Building scalable web apps with React & Next.js",
  "Cloud & DevOps Intern",
  "Aspiring Specialist Programmer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, j + 1));
        setJ(j + 1);

        if (j + 1 === current.length) {
          setDeleting(true);
        }
      } else {
        setText(current.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setDeleting(false);
          setI((i + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [j, deleting, i]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <p className="mb-5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-sm text-blue-600 dark:text-blue-400 font-medium">
        Full-Stack Developer • Cloud & DevOps Intern
      </p>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
        I am{" "}
        <span className="text-blue-600 dark:text-blue-400">{text}</span>
      </h1>

      <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
        Computer Science student with real-world experience in frontend
        development, cloud infrastructure, DevOps workflows, and customer-facing
        systems.
      </p>
    </section>
  );
}