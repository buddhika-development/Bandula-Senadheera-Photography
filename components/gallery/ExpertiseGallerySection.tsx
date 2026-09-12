"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Photo } from "@/types";
import { PhotoLightboxModal } from "@/components/ui";
import { Maximize2 } from "lucide-react";

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
    <section className="relative w-full bg-black py-12 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Lighting Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        {/* Category Filter Pills (Clean, Centered) */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-8">
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

        {/* Full-Width Aligned Fixed Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredPhotos.map((photo, index) => {
            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative w-full h-[320px] sm:h-[380px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer transition-all duration-500 hover:border-white/40 shadow-xl"
              >
                {/* Clean Pure Image */}
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Ambient Hover Overlay & Minimal View Icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3.5 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                    <Maximize2 className="w-5 h-5" />
                  </div>
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
