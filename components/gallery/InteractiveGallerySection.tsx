"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Photo } from "@/types";
import { PhotoLightboxModal } from "@/components/ui";
import { Maximize2 } from "lucide-react";

interface GalleryPhoto extends Photo {
  aspectClass?: string;
  colIndex: number; // 0, 1, 2, 3 for 4-column layout mapping
}

const MASONRY_PORTFOLIO_PHOTOS: GalleryPhoto[] = [
  // Column 1 Photos
  {
    id: "sl-1",
    title: "Kandyan Bridal Elegance",
    category: "Wedding",
    imageUrl: "/sl_wedding_1.jpg",
    aspectClass: "h-[380px] sm:h-[440px]",
    colIndex: 0,
  },
  {
    id: "sl-2",
    title: "Intricate Kandyan Jewelry",
    category: "Wedding",
    imageUrl: "/sl_wedding_2.jpg",
    aspectClass: "h-[320px] sm:h-[380px]",
    colIndex: 0,
  },

  // Column 2 Photos
  {
    id: "sl-3",
    title: "Bridal Preparation",
    category: "Wedding",
    imageUrl: "/sl_wedding_3.jpg",
    aspectClass: "h-[180px] sm:h-[220px]",
    colIndex: 1,
  },
  {
    id: "sl-4",
    title: "Royal Purple Fine Art Gown",
    category: "Fine Art",
    imageUrl: "/sl_wedding_4.jpg",
    aspectClass: "h-[400px] sm:h-[480px]",
    colIndex: 1,
  },
  {
    id: "sl-5",
    title: "Atmospheric Wood Lighting",
    category: "Love Story",
    imageUrl: "/sl_wedding_5.jpg",
    aspectClass: "h-[220px] sm:h-[260px]",
    colIndex: 1,
  },

  // Column 3 Photos
  {
    id: "sl-6",
    title: "Ethereal Veil Portrait",
    category: "Portrait",
    imageUrl: "/sl_wedding_6.jpg",
    aspectClass: "h-[380px] sm:h-[440px]",
    colIndex: 2,
  },
  {
    id: "sl-7",
    title: "Outdoor Garden Couple",
    category: "Wedding",
    imageUrl: "/sl_wedding_7.jpg",
    aspectClass: "h-[320px] sm:h-[380px]",
    colIndex: 2,
  },

  // Column 4 Photos
  {
    id: "sl-8",
    title: "Golden Throne Heirloom Bride",
    category: "Wedding",
    imageUrl: "/sl_wedding_8.jpg",
    aspectClass: "h-[380px] sm:h-[440px]",
    colIndex: 3,
  },
  {
    id: "sl-9",
    title: "Velvet & Lace Romance",
    category: "Wedding",
    imageUrl: "/sl_wedding_9.jpg",
    aspectClass: "h-[320px] sm:h-[380px]",
    colIndex: 3,
  },
];

const CATEGORIES = ["ALL WORKS", "WEDDING", "PORTRAIT", "EVENT", "FINE ART", "LOVE STORY"];

export default function InteractiveGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("ALL WORKS");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "ALL WORKS") return MASONRY_PORTFOLIO_PHOTOS;
    return MASONRY_PORTFOLIO_PHOTOS.filter(
      (photo) => photo.category.toUpperCase() === selectedCategory.toUpperCase()
    );
  }, [selectedCategory]);

  // Distribute filtered photos into 4 columns for exact masonry alignment
  const columns = useMemo(() => {
    const col0: GalleryPhoto[] = [];
    const col1: GalleryPhoto[] = [];
    const col2: GalleryPhoto[] = [];
    const col3: GalleryPhoto[] = [];

    filteredPhotos.forEach((photo, idx) => {
      const colTarget = photo.colIndex % 4;
      if (colTarget === 0) col0.push(photo);
      else if (colTarget === 1) col1.push(photo);
      else if (colTarget === 2) col2.push(photo);
      else col3.push(photo);
    });

    return [col0, col1, col2, col3];
  }, [filteredPhotos]);

  return (
    <section className="relative w-full bg-black py-12 sm:py-16 md:py-24 px-2 sm:px-4 md:px-6 overflow-hidden">
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Category Filter Pills (Clean, Centered) */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
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

        {/* 4-Column Editorial Masonry Layout matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
          {columns.map((colPhotos, colIdx) => (
            <div key={`col-${colIdx}`} className="flex flex-col gap-3 sm:gap-4">
              {colPhotos.map((photo) => {
                const globalIndex = filteredPhotos.findIndex((p) => p.id === photo.id);
                return (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className={`group relative w-full ${photo.aspectClass} rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer shadow-xl transition-all duration-500 hover:border-white/40`}
                  >
                    {/* Pure High-Res Photo - No Text Overlays */}
                    <Image
                      src={photo.imageUrl}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Ambient Hover Lighting & Minimal Zoom Trigger */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3.5 rounded-full bg-black/70 border border-white/30 text-white backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* 100vw x 100vh Full Screen Lightbox Modal */}
      <PhotoLightboxModal
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
