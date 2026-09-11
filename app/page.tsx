"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/ui";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <main
        className={`min-h-screen bg-black text-white flex flex-col items-center justify-center relative transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Subtle Background Lighting Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl px-6 py-20 flex flex-col items-center gap-6">
          <span className="text-xs uppercase tracking-[0.5em] text-neutral-400 font-light">
            Portfolio & Visual Arts
          </span>

          <h1 className="font-signature text-6xl sm:text-8xl md:text-9xl text-white tracking-wide">
            Bandula Senadheera
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 tracking-[0.3em] uppercase max-w-lg">
            Capturing Timeless Moments & Emotional Stories
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors duration-300"
            >
              Explore Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold uppercase tracking-wider hover:border-white hover:text-white transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
