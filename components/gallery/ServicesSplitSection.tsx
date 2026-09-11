"use client";

import { useState } from "react";
import Image from "next/image";
import { CallNoticeModal } from "@/components/ui";

export default function ServicesSplitSection() {
  const [hoveredSide, setHoveredSide] = useState<"wedding" | "event" | null>(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <section className="relative w-full bg-black py-16 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-mono block mb-2">
          Tailored Photography Experiences
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          What Type Of Experience Are You Creating?
        </h2>
        <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">
          Whether you are embarking on a lifelong love story or hosting an unforgettable celebration, explore how we capture your unique world.
        </p>
      </div>

      {/* Split Screen Container: h-auto on mobile, fixed h-[650px] on desktop */}
      <div className="relative w-full max-w-7xl mx-auto h-auto lg:h-[650px] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 border border-white/10 shadow-2xl bg-neutral-950 p-2 lg:p-0">
        
        {/* LEFT PANEL: WEDDING PHOTOGRAPHY */}
        <div
          onMouseEnter={() => setHoveredSide("wedding")}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-full h-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group rounded-2xl lg:rounded-none ${
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

          {/* High-Contrast Dark Gradient Overlay for Maximum Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 lg:from-black lg:via-black/60 lg:to-black/30 group-hover:via-black/70 transition-colors duration-500" />

          {/* Content Box */}
          <div className="relative z-10 h-full p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            {/* Top Category Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-white tracking-[0.3em] uppercase font-mono shadow-md">
                Love & Romance
              </span>
              <span className="text-white/70 text-xs tracking-widest font-mono bg-black/40 px-2 py-0.5 rounded-full border border-white/10">01</span>
            </div>

            {/* Bottom Content */}
            <div className="max-w-lg pt-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-amber-100 transition-colors duration-500 mb-3 drop-shadow-md">
                Wedding Photography
              </h3>

              <div className="transition-all duration-700 ease-in-out opacity-100 max-h-[500px] pointer-events-auto lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:max-h-[500px] lg:group-hover:pointer-events-auto lg:group-hover:overflow-visible space-y-4 pt-2">
                <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed drop-shadow">
                  Your wedding day is a sacred masterpiece of unscripted tears, quiet glances, and promises spoken from the heart. We capture every glance and intimate detail so your love story lives forever.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCallModalOpen(true);
                    }}
                    className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 cursor-pointer"
                  >
                    Book A Call
                  </button>
                  <a
                    href="#portfolio"
                    className="px-6 py-3 rounded-full border border-white/40 bg-black/40 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-md"
                  >
                    See My Other Works
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCallModalOpen(true);
                    }}
                    className="p-3 rounded-full border border-amber-300/40 bg-amber-500/20 text-amber-200 hover:bg-amber-500/30 hover:border-amber-300 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg shadow-amber-950/20 hover:scale-110"
                    title="Call Now (+94 71 561 3103)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: EVENT PHOTOGRAPHY */}
        <div
          onMouseEnter={() => setHoveredSide("event")}
          onMouseLeave={() => setHoveredSide(null)}
          className={`relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-full h-full overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group rounded-2xl lg:rounded-none ${
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

          {/* High-Contrast Dark Gradient Overlay for Maximum Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 lg:from-black lg:via-black/60 lg:to-black/30 group-hover:via-black/70 transition-colors duration-500" />

          {/* Content Box */}
          <div className="relative z-10 h-full p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            {/* Top Category Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-white tracking-[0.3em] uppercase font-mono shadow-md">
                Energy & Celebration
              </span>
              <span className="text-white/70 text-xs tracking-widest font-mono bg-black/40 px-2 py-0.5 rounded-full border border-white/10">02</span>
            </div>

            {/* Bottom Content */}
            <div className="max-w-lg pt-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-emerald-100 transition-colors duration-500 mb-3 drop-shadow-md">
                Event Photography
              </h3>

              <div className="transition-all duration-700 ease-in-out opacity-100 max-h-[500px] pointer-events-auto lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:max-h-[500px] lg:group-hover:pointer-events-auto lg:group-hover:overflow-visible space-y-4 pt-2">
                <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed drop-shadow">
                  From high-profile corporate galas to electrifying celebrations, we capture the vibrant spirit, key milestones, and unforgettable atmosphere of your event with cinematic precision.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCallModalOpen(true);
                    }}
                    className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 cursor-pointer"
                  >
                    Book A Call
                  </button>
                  <a
                    href="#portfolio"
                    className="px-6 py-3 rounded-full border border-white/40 bg-black/40 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 hover:border-white transition-all duration-300 backdrop-blur-md"
                  >
                    See My Other Works
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsCallModalOpen(true);
                    }}
                    className="p-3 rounded-full border border-amber-300/40 bg-amber-500/20 text-amber-200 hover:bg-amber-500/30 hover:border-amber-300 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg shadow-amber-950/20 hover:scale-110"
                    title="Call Now (+94 71 561 3103)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call Notice Modal */}
      <CallNoticeModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </section>
  );
}
