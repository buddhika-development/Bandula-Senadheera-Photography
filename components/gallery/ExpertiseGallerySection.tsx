"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Photo } from "@/types";
import { PhotoLightboxModal } from "@/components/ui";
import { Maximize2, Sparkles } from "lucide-react";

const EXPERTISE_PHOTOS: Photo[] = [
  {
    id: "exp-1",
    title: "Eternal Promises & Vows",
    category: "Wedding",
    imageUrl: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
    description: "An intimate bridal portrait capturing raw emotion, delicate lace textures, and unscripted devotion.",
  },
  {
    id: "exp-2",
    title: "Sacred Embraces at Golden Hour",
    category: "Wedding",
    imageUrl: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
    description: "Golden hour glow enveloping a quiet embrace, demonstrating expertise in natural light manipulation.",
  },
  {
    id: "exp-3",
    title: "Cinematic Portraiture",
    category: "Portrait",
    imageUrl: "/hisu-lee-FTW8ADj5igs-unsplash.jpg",
    description: "High-contrast ambient lighting highlighting authentic character and quiet introspective beauty.",
  },
  {
    id: "exp-4",
    title: "Vibrant Gala Celebration",
    category: "Event",
    imageUrl: "/sandy-millar-8vaQKYnawHw-unsplash.jpg",
    description: "Capturing the electric atmosphere, ring details, and shared joy of high-profile celebrations.",
  },
  {
    id: "exp-5",
    title: "Authentic Couples Connection",
    category: "Love Story",
    imageUrl: "/jonathan-borba-aC5_EFhq7Fs-unsplash.jpg",
    description: "Unfiltered romance captured in soft natural light, highlighting candid emotional connection.",
  },
  {
    id: "exp-6",
    title: "Electrifying Atmosphere",
    category: "Event",
    imageUrl: "/jakob-owens-mLIurLmSRAY-unsplash.jpg",
    description: "Dynamic stage and event photography capturing movement, energy, and key milestone highlights.",
  },
  {
    id: "exp-7",
    title: "Atmospheric Editorial Lighting",
    category: "Fine Art",
    imageUrl: "/nikita-shirokov-7wjxyiUvt4I-unsplash.jpg",
    description: "Dramatic shadow interplay and mood composition tailored for editorial and luxury campaigns.",
  },
  {
    id: "exp-8",
    title: "Destination Fine Art",
    category: "Travel",
    imageUrl: "/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
    description: "Breathtaking scenic backdrop pairing couples with Sri Lanka's breathtaking natural landscapes.",
  },
  {
    id: "exp-9",
    title: "Timeless Bridal Elegance",
    category: "Wedding",
    imageUrl: "/getulio-moraes-jbtbin3u0Xw-unsplash.jpg",
    description: "Pure elegance and fine art framing designed for heirloom wedding photo albums.",
  },
];

const CATEGORIES = ["All Works", "Wedding", "Portrait", "Event", "Fine Art", "Love Story"];

export default function ExpertiseGallerySection() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All Works") return EXPERTISE_PHOTOS;
    return EXPERTISE_PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative w-full bg-black py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Lighting Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-[0.3em] mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Photographer Expertise & Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Crafting Timeless Moments
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            Explore a curated showcase of Bandula Senadheera&apos;s finest imagery—demonstrating light control, candid emotional depth, and artistic framing.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                    : "bg-white/5 text-neutral-400 border border-white/10 hover:text-white hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo, index) => {
            // Give specific cards larger bento sizing for layout variety
            const isFeatured = index === 0;
            const isWide = index === 3;

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer transition-all duration-500 hover:border-white/30 shadow-xl ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2 sm:row-span-2 h-[450px] sm:h-[580px]" : isWide ? "sm:col-span-2 lg:col-span-2 h-[320px] sm:h-[380px]" : "h-[320px] sm:h-[380px]"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* High Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Top Category Badge & Lightbox Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono text-white uppercase tracking-widest">
                    {photo.category}
                  </span>

                  <span className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 transform transition-transform duration-500">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-amber-100 transition-colors">
                    {photo.title}
                  </h3>
                  {photo.description && (
                    <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightboxModal
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
