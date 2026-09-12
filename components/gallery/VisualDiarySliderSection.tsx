"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Photo } from "@/types";
import { FullScreenCollectionModal, PhotoCollection } from "@/components/ui";

const COLLECTIONS: PhotoCollection[] = [
  {
    id: "luxury-weddings",
    name: "Luxury Weddings",
    photos: [
      {
        id: "w-1",
        title: "Eternal Promises",
        category: "Wedding",
        imageUrl: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
      },
      {
        id: "w-2",
        title: "Golden Hour Embrace",
        category: "Wedding",
        imageUrl: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
      },
      {
        id: "w-3",
        title: "Timeless Devotion",
        category: "Wedding",
        imageUrl: "/getulio-moraes-jbtbin3u0Xw-unsplash.jpg",
      },
      {
        id: "w-4",
        title: "Unscripted Love",
        category: "Wedding",
        imageUrl: "/jonathan-borba-aC5_EFhq7Fs-unsplash.jpg",
      },
    ],
  },
  {
    id: "cinematic-portraits",
    name: "Cinematic Portraits",
    photos: [
      {
        id: "p-1",
        title: "Soulful Eyes",
        category: "Portrait",
        imageUrl: "/hisu-lee-FTW8ADj5igs-unsplash.jpg",
      },
      {
        id: "p-2",
        title: "Fine Art Silhouette",
        category: "Portrait",
        imageUrl: "/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
      },
      {
        id: "p-3",
        title: "Nature Introspection",
        category: "Portrait",
        imageUrl: "/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg",
      },
      {
        id: "p-4",
        title: "Ambient Horizon",
        category: "Portrait",
        imageUrl: "/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
      },
    ],
  },
  {
    id: "grand-events",
    name: "Grand Events",
    photos: [
      {
        id: "e-1",
        title: "Electric Gala Night",
        category: "Event",
        imageUrl: "/sandy-millar-8vaQKYnawHw-unsplash.jpg",
      },
      {
        id: "e-2",
        title: "Stage Atmosphere",
        category: "Event",
        imageUrl: "/jakob-owens-mLIurLmSRAY-unsplash.jpg",
      },
      {
        id: "e-3",
        title: "Celebration Moments",
        category: "Event",
        imageUrl: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
      },
      {
        id: "e-4",
        title: "Shared Joy",
        category: "Event",
        imageUrl: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
      },
    ],
  },
  {
    id: "fine-art-editorial",
    name: "Fine Art Editorial",
    photos: [
      {
        id: "f-1",
        title: "Dramatic Shadow Play",
        category: "Fine Art",
        imageUrl: "/nikita-shirokov-7wjxyiUvt4I-unsplash.jpg",
      },
      {
        id: "f-2",
        title: "Heirloom Elegance",
        category: "Fine Art",
        imageUrl: "/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
      },
      {
        id: "f-3",
        title: "Intimate Framing",
        category: "Fine Art",
        imageUrl: "/hisu-lee-FTW8ADj5igs-unsplash.jpg",
      },
      {
        id: "f-4",
        title: "Ethereal Light",
        category: "Fine Art",
        imageUrl: "/getulio-moraes-jbtbin3u0Xw-unsplash.jpg",
      },
    ],
  },
  {
    id: "destination-stories",
    name: "Destination Stories",
    photos: [
      {
        id: "d-1",
        title: "Coastal Wanderer",
        category: "Destination",
        imageUrl: "/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
      },
      {
        id: "d-2",
        title: "Mountain Serenity",
        category: "Destination",
        imageUrl: "/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg",
      },
      {
        id: "d-3",
        title: "Romantic Escape",
        category: "Destination",
        imageUrl: "/jonathan-borba-aC5_EFhq7Fs-unsplash.jpg",
      },
      {
        id: "d-4",
        title: "Tropical Sunrise",
        category: "Destination",
        imageUrl: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
      },
    ],
  },
];

export default function VisualDiarySliderSection() {
  const [activeCollectionIndex, setActiveCollectionIndex] = useState(0);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const [fullScreenPhotoIndex, setFullScreenPhotoIndex] = useState(0);

  const activeCollection = COLLECTIONS[activeCollectionIndex];

  // Helper to handle previous/next collection navigation in the 3D coverflow
  const handlePrevCollection = () => {
    setActiveCollectionIndex(
      (prev) => (prev - 1 + COLLECTIONS.length) % COLLECTIONS.length
    );
  };

  const handleNextCollection = () => {
    setActiveCollectionIndex((prev) => (prev + 1) % COLLECTIONS.length);
  };

  const openFullScreenModal = (collectionIdx: number, photoIdx: number = 0) => {
    setActiveCollectionIndex(collectionIdx);
    setFullScreenPhotoIndex(photoIdx);
    setIsFullScreenOpen(true);
  };

  return (
    <section className="relative w-full bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header Matching Reference Screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] uppercase tracking-[0.4em] text-neutral-400 font-mono block mb-2">
            GALLERY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            My Visual Diary
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            See the world through my lens: adventures in photos and videos
          </p>
        </div>

        {/* Collection Filter Pills Bar & View Full Gallery CTA */}
        <div className="w-full flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          {COLLECTIONS.map((col, idx) => {
            const isActive = idx === activeCollectionIndex;
            return (
              <button
                key={col.id}
                onClick={() => openFullScreenModal(idx, 0)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-lg shadow-white/10 scale-105"
                    : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {col.name}
              </button>
            );
          })}

          {/* View Full Gallery CTA Button matching reference right pill */}
          <button
            onClick={() => openFullScreenModal(activeCollectionIndex, 0)}
            className="px-6 py-2.5 rounded-full bg-transparent border border-white text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg group"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div className="relative w-full max-w-5xl h-[360px] sm:h-[480px] md:h-[540px] flex items-center justify-center">
          {COLLECTIONS.map((collection, idx) => {
            // Determine relative position from active item
            const total = COLLECTIONS.length;
            let offset = idx - activeCollectionIndex;

            // Handle wrap-around math for smooth looping
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            // Hide cards beyond 2 positions away
            if (absOffset > 2) return null;

            const coverPhoto = collection.photos[0];

            return (
              <div
                key={collection.id}
                onClick={() => openFullScreenModal(idx, 0)}
                className={`absolute transition-all duration-700 ease-out cursor-pointer rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group ${
                  isCenter
                    ? "z-30 w-[240px] sm:w-[340px] md:w-[400px] h-[320px] sm:h-[440px] md:h-[500px] scale-100 shadow-[0_30px_70px_rgba(0,0,0,0.95)] border-white/40 ring-1 ring-white/30"
                    : absOffset === 1
                    ? `z-20 w-[200px] sm:w-[280px] md:w-[320px] h-[270px] sm:h-[370px] md:h-[420px] scale-90 opacity-70 ${
                        offset < 0
                          ? "-translate-x-[140px] sm:-translate-x-[220px] md:-translate-x-[280px]"
                          : "translate-x-[140px] sm:translate-x-[220px] md:translate-x-[280px]"
                      }`
                    : `z-10 w-[160px] sm:w-[220px] md:w-[250px] h-[220px] sm:h-[300px] md:h-[340px] scale-75 opacity-40 ${
                        offset < 0
                          ? "-translate-x-[240px] sm:-translate-x-[360px] md:-translate-x-[440px]"
                          : "translate-x-[240px] sm:translate-x-[360px] md:translate-x-[440px]"
                      }`
                }`}
              >
                {/* Full Card Cover Image */}
                <Image
                  src={coverPhoto.imageUrl}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={isCenter}
                  className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Bottom Vignette & Collection Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    {collection.photos.length} Photos
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-wide mt-0.5">
                    {collection.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Previous / Next Circular Control Arrow Buttons */}
        <div className="flex items-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={handlePrevCollection}
            className="p-3.5 sm:p-4 rounded-full bg-white/5 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md"
            title="Previous Collection"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNextCollection}
            className="p-3.5 sm:p-4 rounded-full bg-white/5 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md"
            title="Next Collection"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* 100vw x 100vh Full Screen Immersive Gallery Modal */}
      <FullScreenCollectionModal
        isOpen={isFullScreenOpen}
        onClose={() => setIsFullScreenOpen(false)}
        collections={COLLECTIONS}
        initialCollectionId={activeCollection.id}
        initialPhotoIndex={fullScreenPhotoIndex}
      />
    </section>
  );
}
