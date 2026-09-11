"use client";

import { useState } from "react";
import Image from "next/image";
import { LoadingScreen } from "@/components/ui";
import {
  MarqueeGallerySection,
  ServicesSplitSection,
  InteractiveGallerySection,
} from "@/components/gallery";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <div
        className={`bg-black text-white min-h-screen transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Section 1: Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          {/* Subtle Background Lighting Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

          {/* Rotating Sri Lankan Traditional Art Background Motif (Protruding from top edge) */}
          <div className="absolute -top-36 sm:-top-52 md:-top-72 left-1/2 -translate-x-1/2 w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] md:w-[850px] md:h-[850px] opacity-20 hover:opacity-30 transition-opacity duration-700 pointer-events-none z-0">
            <Image
              src="/bkacground_sri_lanka_traditional_art.png"
              alt="Sri Lanka Traditional Art Motif"
              fill
              priority
              className="object-contain animate-spin-slow"
            />
          </div>

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
                href="#services"
                className="px-8 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors duration-300"
              >
                Explore Experiences
              </a>
              <a
                href="#gallery"
                className="px-8 py-3.5 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold uppercase tracking-wider hover:border-white hover:text-white transition-colors duration-300"
              >
                View Gallery
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Split-Screen Photography Services (Weddings & Events) */}
        <div id="services">
          <ServicesSplitSection />
        </div>

        {/* Section 3: Infinite Photo Marquee Wall & Showcase */}
        <div id="portfolio">
          <MarqueeGallerySection />
        </div>

        {/* Section 4: Filterable Interactive Portfolio Gallery & Lightbox Modal */}
        <div id="gallery">
          <InteractiveGallerySection />
        </div>
      </div>
    </>
  );
}
