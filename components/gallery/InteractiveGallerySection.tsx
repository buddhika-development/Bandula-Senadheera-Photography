"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Photo } from "@/types";
import { PhotoLightboxModal } from "@/components/ui";
import { Maximize2 } from "lucide-react";

interface GalleryPhoto extends Photo {
  aspectClass?: string;
  colIndex: number;
}

const MASONRY_PORTFOLIO_PHOTOS: GalleryPhoto[] = [
  {
    id: "gallery-1",
    title: "Eternal Bridal Promises",
    category: "Wedding",
    imageUrl: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
    aspectClass: "h-[380px] sm:h-[440px]",
    colIndex: 0,
  },
  {
    id: "gallery-2",
    title: "Golden Hour Embrace",
    category: "Wedding",
    imageUrl: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
    aspectClass: "h-[400px] sm:h-[480px]",
    colIndex: 1,
  },
  {
    id: "gallery-3",
    title: "Cinematic Portraiture",
    category: "Portrait",
    imageUrl: "/hisu-lee-FTW8ADj5igs-unsplash.jpg",
    aspectClass: "h-[380px] sm:h-[440px]",
    colIndex: 2,
  },
  {
    id: "gallery-4",
    title: "Fine Art Silhouette",
    category: "Portrait",
    imageUrl: "/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
    aspectClass: "h-[380px] sm:h-[440px]",
    colIndex: 3,
  },
  {
    id: "gallery-5",
    title: "Timeless Bridal Devotion",
    category: "Wedding",
    imageUrl: "/getulio-moraes-jbtbin3u0Xw-unsplash.jpg",
    aspectClass: "h-[320px] sm:h-[380px]",
    colIndex: 0,
  },
  {
    id: "gallery-6",
    title: "Unscripted Romance",
    category: "Love Story",
    imageUrl: "/jonathan-borba-aC5_EFhq7Fs-unsplash.jpg",
    aspectClass: "h-[320px] sm:h-[380px]",
    colIndex: 1,
  },
  {
    id: "gallery-7",
    title: "Gala Celebration Atmosphere",
    category: "Event",
    imageUrl: "/sandy-millar-8vaQKYnawHw-unsplash.jpg",
    aspectClass: "h-[320px] sm:h-[380px]",
    colIndex: 2,
  },
  {
    id: "gallery-8",
    title: "Electric Stage Emotion",
    category: "Event",
    imageUrl: "/jakob-owens-mLIurLmSRAY-unsplash.jpg",
    aspectClass: "h-[320px] sm:h-[380px]",
    colIndex: 3,
  },
  {
    id: "gallery-9",
    title: "Dramatic Shadow Play",
    category: "Fine Art",
    imageUrl: "/nikita-shirokov-7wjxyiUvt4I-unsplash.jpg",
    aspectClass: "h-[220px] sm:h-[260px]",
    colIndex: 1,
  },
  {
    id: "gallery-10",
    title: "Coastal Wanderer Horizon",
    category: "Editorial",
    imageUrl: "/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
    aspectClass: "h-[280px] sm:h-[320px]",
    colIndex: 0,
  },
  {
    id: "gallery-11",
    title: "Untamed Mountain Serenity",
    category: "Landscape",
    imageUrl: "/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg",
    aspectClass: "h-[280px] sm:h-[320px]",
    colIndex: 2,
  },
];

const CATEGORIES = ["ALL WORKS", "WEDDING", "PORTRAIT", "EVENT", "FINE ART", "LOVE STORY"];

export default function InteractiveGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("ALL WORKS");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "ALL WORKS") return MASONRY_PORTFOLIO_PHOTOS;
    return MASONRY_PORTFOLIO_PHOTOS.filter((photo) => {
      if (selectedCategory === "WEDDING") return photo.category === "Wedding" || photo.category === "Love Story";
      if (selectedCategory === "PORTRAIT") return photo.category === "Portrait";
      if (selectedCategory === "EVENT") return photo.category === "Event";
      if (selectedCategory === "FINE ART") return photo.category === "Fine Art" || photo.category === "Editorial";
      if (selectedCategory === "LOVE STORY") return photo.category === "Love Story";
      return photo.category.toUpperCase() === selectedCategory.toUpperCase();
    });
  }, [selectedCategory]);

  // Distribute filtered photos across 4 masonry grid columns
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
      {/* Background Radial Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto">

        {/* 4-Column Editorial Masonry Layout */}
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
                    {/* Pure High-Res Photo */}
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
