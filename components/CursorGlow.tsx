"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frameId: number;

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setVisible(true);
      });
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-0 hidden h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 lg:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${position.x - 144}px, ${
          position.y - 144
        }px, 0)`,
      }}
    />
  );
}