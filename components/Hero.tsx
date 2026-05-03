"use client";

import { useEffect, useState } from "react";

const roles = [
  "Building scalable web apps with React & Next.js",
  "Cloud & DevOps Intern",
  "Aspiring Specialist Programmer (21 LPA Track)",
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
   <section id="home" className="h-screen flex flex-col justify-center items-center text-center pt-20">
      <h1 className="text-5xl font-bold">
        I am <span className="text-blue-600">{text}</span>
      </h1>

     <p className="mt-4 text-gray-500 max-w-xl">
  Computer Science student with real-world experience in frontend development, cloud, and customer-facing systems.
</p>
    </section>
  );
}