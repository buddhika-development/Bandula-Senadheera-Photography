"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Photo } from "@/types";
import { PhotoLightboxModal } from "@/components/ui";

const PORTFOLIO_PHOTOS: Photo[] = [
  {
    id: "gallery-1",
    title: "Eternal Promises",
    category: "Wedding",
    imageUrl: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
    description: "An intimate bridal moment capturing gentle emotions and timeless love.",
  },
  {
    id: "gallery-2",
    title: "Sacred Vows",
    category: "Wedding",
    imageUrl: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
    description: "A tender embrace captured amidst golden hour natural sunlight.",
  },
  {
    id: "gallery-3",
    title: "Romantic Horizon",
    category: "Wedding",
    imageUrl: "/jonathan-borba-aC5_EFhq7Fs-unsplash.jpg",
    description: "Pure romance set against an ethereal natural landscape.",
  },
  {
    id: "gallery-4",
    title: "Gala Atmosphere",
    category: "Event",
    imageUrl: "/sandy-millar-8vaQKYnawHw-unsplash.jpg",
    description: "High-energy celebration captured with vibrant cinematic lighting.",
  },
  {
    id: "gallery-5",
    title: "Unscripted Joy",
    category: "Event",
    imageUrl: "/jakob-owens-mLIurLmSRAY-unsplash.jpg",
    description: "Authentic laughter and shared connection during an iconic evening event.",
  },
  {
    id: "gallery-6",
    title: "Soulful Portrait",
    category: "Portrait",
    imageUrl: "/hisu-lee-FTW8ADj5igs-unsplash.jpg",
    description: "Intimate portrait focusing on depth, expression, and mood.",
  },
  {
    id: "gallery-7",
    title: "Fine Art Silhouette",
    category: "Portrait",
    imageUrl: "/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
    description: "Elegant fine-art portrait combining dramatic shadows and light.",
  },
  {
    id: "gallery-8",
    title: "Nature's Serenity",
    category: "Landscape",
    imageUrl: "/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg",
    description: "Breathtaking landscape composition showcasing untamed natural beauty.",
  },
  {
    id: "gallery-9",
    title: "Dramatic Shadows",
    category: "Editorial",
    imageUrl: "/nikita-shirokov-7wjxyiUvt4I-unsplash.jpg",
    description: "Editorial photography exploring shape, atmosphere, and contrast.",
  },
  {
    id: "gallery-10",
    title: "Coastal Wanderer",
    category: "Editorial",
    imageUrl: "/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
    description: "Cinematic destination portrait capturing freedom and horizon.",
  },
  {
    id: "gallery-11",
    title: "Warm Embrace",
    category: "Wedding",
    imageUrl: "/getulio-moraes-jbtbin3u0Xw-unsplash.jpg",
    description: "Heartfelt celebration of unity and deep emotional bonds.",
  },
];

const CATEGORIES = ["All", "Wedding", "Event", "Portrait", "Landscape", "Editorial"];

export default function InteractiveGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "All") return PORTFOLIO_PHOTOS;
    return PORTFOLIO_PHOTOS.filter((photo) => photo.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="relative w-full min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-mono block mb-2">
          Curated Portfolio
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Selected Works & Moments
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light">
          Click any photograph to expand into full-screen view and explore the story behind the frame.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-16 max-w-4xl mx-auto">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-white text-black shadow-lg shadow-white/10 scale-105"
                  : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl cursor-pointer transition-all duration-500 hover:border-white/30 hover:scale-[1.02]"
          >
            {/* Category Badge on Top-Left */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-[10px] font-mono tracking-widest text-white uppercase">
                {photo.category}
              </span>
            </div>

            {/* Expand Icon Indicator on Top-Right */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </div>
            </div>

            {/* Image */}
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Title & Description Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-amber-100 transition-colors duration-300">
                {photo.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Pop-up Modal */}
      <PhotoLightboxModal
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
