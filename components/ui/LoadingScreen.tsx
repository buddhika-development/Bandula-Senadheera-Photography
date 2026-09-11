"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number; // duration in ms
}

export default function LoadingScreen({
  onComplete,
  minDuration = 2800,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Progress counter animation
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(
        100,
        Math.floor((elapsed / minDuration) * 100)
      );

      setProgress(calculatedProgress);

      if (elapsed >= minDuration * 0.65) {
        setShowSubtitle(true);
      }

      if (elapsed >= minDuration) {
        clearInterval(interval);
        setIsFading(true);
        const fadeTimer = setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 700);
        return () => clearTimeout(fadeTimer);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center p-8 max-w-2xl w-full text-center">
        {/* Handwriting Signature SVG Animation Container */}
        <div className="relative w-full max-w-lg h-32 md:h-40 flex items-center justify-center">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 600 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f5f5f7" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Signature Animated Text Path */}
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-signature text-6xl md:text-7xl animate-draw-signature"
              stroke="url(#goldGradient)"
              strokeWidth="1.8"
              fill="none"
              style={{
                filter: "url(#glow)",
              }}
            >
              Bandula Senadheera
            </text>

            {/* Second overlay text for solid fill fade-in */}
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-signature text-6xl md:text-7xl transition-opacity duration-1000 ease-out"
              fill="white"
              style={{
                opacity: progress > 65 ? (progress - 65) / 35 : 0,
              }}
            >
              Bandula Senadheera
            </text>
          </svg>
        </div>

        {/* Subtitle "PHOTOGRAPHY" with smooth tracking & reveal */}
        <div
          className={`mt-4 transition-all duration-700 ease-out transform ${
            showSubtitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <p className="text-xs md:text-sm tracking-[0.45em] text-neutral-400 font-light uppercase">
            P h o t o g r a p h y
          </p>
        </div>

        {/* Minimalist Progress Bar & Percentage */}
        <div className="mt-12 w-48 flex flex-col items-center gap-2">
          <div className="w-full h-[1px] bg-neutral-800 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-white transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] tracking-widest text-neutral-500 font-mono">
            {progress}%
          </span>
        </div>
      </div>

      {/* Optional Skip Button */}
      <button
        onClick={() => {
          setIsFading(true);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 400);
        }}
        className="absolute bottom-8 right-8 text-xs text-neutral-500 hover:text-white transition-colors duration-200 tracking-wider uppercase font-sans cursor-pointer"
      >
        Skip Intro
      </button>
    </div>
  );
}
