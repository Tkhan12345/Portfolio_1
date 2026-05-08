"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setHide(true);
    }, 1400);

    const removeTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2100);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black transition-all duration-700 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

      {/* Background glow */}
      <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl animate-pulse" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 text-3xl font-black text-white shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              TK
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Loading Portfolio
        </p>

        <div className="mt-5 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-loader rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
      </div>
    </div>
  );
}   