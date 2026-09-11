"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServicesSplitSection() {
  const [hoveredSide, setHoveredSide] = useState<"wedding" | "event" | null>(null);

  return (
    <section className="relative w-full min-h-[90vh] bg-black py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-mono block mb-2">
          Tailored Photography Experiences
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          What Type Of Experience Are You Creating?
        </h2>
        <p className="mt-3 text-sm text-neutral-400 font-light">
          Whether you are embarking on a lifelong love story or hosting an unforgettable celebration, explore how we capture your unique world.
        </p>
      </div>

      {/* Split Screen Container */}
      <div className="relative w-full max-w-7xl mx-auto h-[600px] lg:h-[650px] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-2 border border-white/10 shadow-2xl bg-neutral-950">
        
        {/* LEFT PANEL: WEDDING PHOTOGRAPHY */}
        <div
          onMouseEnter={() => setHoveredSide("wedding")}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative h-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group ${
            hoveredSide === "wedding"
              ? "lg:col-span-1 lg:scale-[1.01] z-20"
              : hoveredSide === "event"
              ? "lg:col-span-1 opacity-70"
              : "lg:col-span-1"
          }`}
        >
          {/* Background Image */}
          <Image
            src="/jonathan-borba-mvasDnG41is-unsplash.jpg"
            alt="Wedding Photography by Bandula Senadheera"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/50 transition-colors duration-500" />

          {/* Content Box */}
          <div className="relative z-10 h-full p-8 sm:p-12 flex flex-col justify-between">
            {/* Top Category Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-white tracking-[0.3em] uppercase font-mono">
                Love & Romance
              </span>
              <span className="text-white/40 text-xs tracking-widest font-mono">01</span>
            </div>

            {/* Bottom Content */}
            <div className="space-y-4 max-w-lg">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-amber-100 transition-colors duration-300">
                Wedding Photography
              </h3>

              {/* Revealable Content on Desktop Hover / Always visible on Mobile */}
              <div className="transition-all duration-500 ease-out opacity-100 translate-y-0 pointer-events-auto lg:opacity-0 lg:translate-y-4 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto space-y-4">
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Your wedding day is a sacred masterpiece of unscripted tears, quiet glances, and promises spoken from the heart. We capture every glance and intimate detail so your love story lives forever.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
                  >
                    Book A Call
                  </a>
                  <a
                    href="#portfolio"
                    className="px-6 py-3 rounded-full border border-white/30 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                  >
                    See My Other Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: EVENT PHOTOGRAPHY */}
        <div
          onMouseEnter={() => setHoveredSide("event")}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative h-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group ${
            hoveredSide === "event"
              ? "lg:col-span-1 lg:scale-[1.01] z-20"
              : hoveredSide === "wedding"
              ? "lg:col-span-1 opacity-70"
              : "lg:col-span-1"
          }`}
        >
          {/* Background Image */}
          <Image
            src="/sandy-millar-8vaQKYnawHw-unsplash.jpg"
            alt="Event Photography by Bandula Senadheera"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:via-black/50 transition-colors duration-500" />

          {/* Content Box */}
          <div className="relative z-10 h-full p-8 sm:p-12 flex flex-col justify-between">
            {/* Top Category Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] text-white tracking-[0.3em] uppercase font-mono">
                Energy & Celebration
              </span>
              <span className="text-white/40 text-xs tracking-widest font-mono">02</span>
            </div>

            {/* Bottom Content */}
            <div className="space-y-4 max-w-lg">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-emerald-100 transition-colors duration-300">
                Event Photography
              </h3>

              {/* Revealable Content on Desktop Hover / Always visible on Mobile */}
              <div className="transition-all duration-500 ease-out opacity-100 translate-y-0 pointer-events-auto lg:opacity-0 lg:translate-y-4 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto space-y-4">
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  From high-profile corporate galas to electrifying celebrations, we capture the vibrant spirit, key milestones, and unforgettable atmosphere of your event with cinematic precision.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
                  >
                    Book A Call
                  </a>
                  <a
                    href="#portfolio"
                    className="px-6 py-3 rounded-full border border-white/30 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                  >
                    See My Other Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links Integrated Bar */}
      <div className="mt-8 flex items-center justify-center gap-6 text-neutral-400">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 hidden sm:inline">
          Connect With Bandula
        </span>
        <div className="h-4 w-[1px] bg-neutral-800 hidden sm:block" />

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-[11px] font-medium hidden md:inline">Instagram</span>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
            </svg>
            <span className="text-[11px] font-medium hidden md:inline">Facebook</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="YouTube"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            <span className="text-[11px] font-medium hidden md:inline">YouTube</span>
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span className="text-[11px] font-medium hidden md:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
