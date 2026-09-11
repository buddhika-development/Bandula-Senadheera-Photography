"use client";

import { useState } from "react";
import Image from "next/image";
import { CallNoticeModal } from "@/components/ui";

interface MarqueePhoto {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio: string;
}

const PHOTOS: MarqueePhoto[] = [
  {
    id: "photo-1",
    src: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
    alt: "Wedding Portrait",
    category: "Wedding",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "photo-2",
    src: "/jonathan-borba-aC5_EFhq7Fs-unsplash.jpg",
    alt: "Romantic Moment",
    category: "Love Story",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "photo-3",
    src: "/hisu-lee-FTW8ADj5igs-unsplash.jpg",
    alt: "Cinematic Portrait",
    category: "Portrait",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "photo-4",
    src: "/jakob-owens-mLIurLmSRAY-unsplash.jpg",
    alt: "Event Emotion",
    category: "Event",
    aspectRatio: "aspect-[16/10]",
  },
  {
    id: "photo-5",
    src: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
    alt: "Bridal Elegance",
    category: "Wedding",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "photo-6",
    src: "/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg",
    alt: "Scenic Landscape",
    category: "Landscape",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "photo-7",
    src: "/nikita-shirokov-7wjxyiUvt4I-unsplash.jpg",
    alt: "Atmospheric Lighting",
    category: "Editorial",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "photo-8",
    src: "/sandy-millar-8vaQKYnawHw-unsplash.jpg",
    alt: "Joyful Celebration",
    category: "Celebration",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "photo-9",
    src: "/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
    alt: "Fine Art Portrait",
    category: "Portrait",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "photo-10",
    src: "/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
    alt: "Destination Moment",
    category: "Travel",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "photo-11",
    src: "/getulio-moraes-jbtbin3u0Xw-unsplash.jpg",
    alt: "Intimate Couples",
    category: "Couples",
    aspectRatio: "aspect-[3/4]",
  },
];

// Distribute photos into 4 vertical marquee columns
const col1 = [PHOTOS[0], PHOTOS[1], PHOTOS[2], PHOTOS[3]];
const col2 = [PHOTOS[4], PHOTOS[5], PHOTOS[6]];
const col3 = [PHOTOS[7], PHOTOS[8], PHOTOS[9]];
const col4 = [PHOTOS[10], PHOTOS[0], PHOTOS[2], PHOTOS[5]];

export default function MarqueeGallerySection() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] py-24 bg-black overflow-hidden flex items-center justify-center">
      {/* Background Infinite Scrolling Marquee Wall */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 px-4 opacity-60 sm:opacity-70 hover:opacity-90 transition-opacity duration-700 pointer-events-none">
        {/* Column 1 - Moves UP */}
        <div className="overflow-hidden relative h-full">
          <div className="flex flex-col gap-4 animate-marquee-up">
            {[...col1, ...col1].map((photo, idx) => (
              <div
                key={`col1-${idx}`}
                className={`relative w-full ${photo.aspectRatio} rounded-2xl overflow-hidden border border-white/10 shadow-2xl group`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 - Moves DOWN */}
        <div className="overflow-hidden relative h-full">
          <div className="flex flex-col gap-4 animate-marquee-down">
            {[...col2, ...col2].map((photo, idx) => (
              <div
                key={`col2-${idx}`}
                className={`relative w-full ${photo.aspectRatio} rounded-2xl overflow-hidden border border-white/10 shadow-2xl group`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 - Moves UP (Fast) */}
        <div className="hidden md:block overflow-hidden relative h-full">
          <div className="flex flex-col gap-4 animate-marquee-up-fast">
            {[...col3, ...col3].map((photo, idx) => (
              <div
                key={`col3-${idx}`}
                className={`relative w-full ${photo.aspectRatio} rounded-2xl overflow-hidden border border-white/10 shadow-2xl group`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 4 - Moves DOWN (Fast) */}
        <div className="hidden md:block overflow-hidden relative h-full">
          <div className="flex flex-col gap-4 animate-marquee-down-fast">
            {[...col4, ...col4].map((photo, idx) => (
              <div
                key={`col4-${idx}`}
                className={`relative w-full ${photo.aspectRatio} rounded-2xl overflow-hidden border border-white/10 shadow-2xl group`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top & Bottom Vignette Overlay for Smooth Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      {/* Foreground Attention-Grabbing Glassmorphic Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="backdrop-blur-xl bg-black/60 border border-white/15 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl shadow-black/80 flex flex-col items-center">

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-2xl">
            Capturing Life&apos;s Unscripted & Timeless Moments
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-xl font-light leading-relaxed">
            Every photograph is a doorway to an authentic memory. From delicate emotional glances to grand celebrations, experience imagery crafted with precision and soul.
          </p>

          {/* Key Stat Badges */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="block text-2xl md:text-3xl font-bold text-white font-mono">500+</span>
              <span className="text-[11px] text-neutral-400 tracking-wider uppercase mt-1 block">Weddings & Events</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="block text-2xl md:text-3xl font-bold text-white font-mono">10+</span>
              <span className="text-[11px] text-neutral-400 tracking-wider uppercase mt-1 block">Years Crafting Art</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="block text-2xl md:text-3xl font-bold text-white font-mono">100%</span>
              <span className="text-[11px] text-neutral-400 tracking-wider uppercase mt-1 block">Authentic Moments</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setIsCallModalOpen(true)}
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 cursor-pointer"
            >
              Book A Call
            </button>
            <button
              onClick={() => setIsCallModalOpen(true)}
              className="px-7 py-3.5 rounded-full border border-amber-300/40 bg-amber-500/10 text-amber-200 font-semibold text-xs uppercase tracking-widest hover:bg-amber-500/20 hover:border-amber-300 transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-sm shadow-lg shadow-amber-950/20"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Now
            </button>
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
