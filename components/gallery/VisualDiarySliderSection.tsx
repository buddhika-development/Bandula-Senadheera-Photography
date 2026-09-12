"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause, Maximize2 } from "lucide-react";
import { Photo } from "@/types";
import { FullScreenCollectionModal, PhotoCollection } from "@/components/ui";

const DUAL_SHOWCASE_PHOTOS: Photo[] = [
  {
    id: "dual-1",
    title: "Eternal Bridal Moment",
    category: "Wedding",
    imageUrl: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg",
  },
  {
    id: "dual-2",
    title: "Golden Hour Embrace",
    category: "Wedding",
    imageUrl: "/jonathan-borba-mvasDnG41is-unsplash.jpg",
  },
  {
    id: "dual-3",
    title: "Cinematic Portraiture",
    category: "Portrait",
    imageUrl: "/hisu-lee-FTW8ADj5igs-unsplash.jpg",
  },
  {
    id: "dual-4",
    title: "Electric Gala Celebration",
    category: "Event",
    imageUrl: "/sandy-millar-8vaQKYnawHw-unsplash.jpg",
  },
  {
    id: "dual-5",
    title: "Authentic Unscripted Romance",
    category: "Love Story",
    imageUrl: "/jonathan-borba-aC5_EFhq7Fs-unsplash.jpg",
  },
  {
    id: "dual-6",
    title: "Fine Art Shadow Play",
    category: "Fine Art",
    imageUrl: "/nikita-shirokov-7wjxyiUvt4I-unsplash.jpg",
  },
  {
    id: "dual-7",
    title: "Destination Horizon",
    category: "Travel",
    imageUrl: "/elvis-bekmanis-WJc87MVcDaA-unsplash.jpg",
  },
  {
    id: "dual-8",
    title: "Mountain Serenity",
    category: "Landscape",
    imageUrl: "/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg",
  },
  {
    id: "dual-9",
    title: "Pure Heirloom Elegance",
    category: "Wedding",
    imageUrl: "/getulio-moraes-jbtbin3u0Xw-unsplash.jpg",
  },
  {
    id: "dual-10",
    title: "Fine Art Silhouette",
    category: "Portrait",
    imageUrl: "/ulyana-tim-AbnCRgL2DNs-unsplash.jpg",
  },
];

const COLLECTIONS: PhotoCollection[] = [
  {
    id: "luxury-weddings",
    name: "Luxury Weddings",
    photos: DUAL_SHOWCASE_PHOTOS.filter((p) => p.category === "Wedding"),
  },
  {
    id: "cinematic-portraits",
    name: "Cinematic Portraits",
    photos: DUAL_SHOWCASE_PHOTOS.filter((p) => p.category === "Portrait"),
  },
  {
    id: "grand-events",
    name: "Grand Events",
    photos: DUAL_SHOWCASE_PHOTOS.filter((p) => p.category === "Event"),
  },
  {
    id: "fine-art-editorial",
    name: "Fine Art Editorial",
    photos: DUAL_SHOWCASE_PHOTOS.filter((p) => p.category === "Fine Art"),
  },
  {
    id: "destination-stories",
    name: "Destination Stories",
    photos: DUAL_SHOWCASE_PHOTOS.filter((p) => p.category === "Travel" || p.category === "Landscape"),
  },
];

export default function VisualDiarySliderSection() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const [fullScreenCollectionId, setFullScreenCollectionId] = useState("luxury-weddings");

  const total = DUAL_SHOWCASE_PHOTOS.length;
  const rightIndex = (leftIndex + 1) % total;

  const leftPhoto = DUAL_SHOWCASE_PHOTOS[leftIndex];
  const rightPhoto = DUAL_SHOWCASE_PHOTOS[rightIndex];

  // Automatic slideshow transition
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % total);
    }, 3800);

    return () => clearInterval(interval);
  }, [isAutoPlaying, total]);

  const handlePrev = () => {
    setLeftIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setLeftIndex((prev) => (prev + 1) % total);
  };

  const openFullScreenModal = () => {
    setIsFullScreenOpen(true);
  };

  return (
    <section className="relative w-full bg-black py-10 sm:py-16 md:py-24 px-3 sm:px-6 md:px-10 overflow-hidden">
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto flex flex-col items-center">
        {/* Dual Split-Screen Section (Left-Handed & Right-Handed Image Frames) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
          {/* Left-Handed Image Section */}
          <div
            onClick={openFullScreenModal}
            className="group relative w-full h-[450px] sm:h-[600px] md:h-[700px] lg:h-[760px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/40"
          >
            <Image
              key={`left-${leftPhoto.id}`}
              src={leftPhoto.imageUrl}
              alt={leftPhoto.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center w-full h-full transition-all duration-1000 ease-out group-hover:scale-105"
            />
            {/* Ambient Hover Overlay & Minimal View Icon */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-4 rounded-full bg-black/70 border border-white/30 text-white backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                <Maximize2 className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right-Handed Image Section */}
          <div
            onClick={openFullScreenModal}
            className="group relative w-full h-[450px] sm:h-[600px] md:h-[700px] lg:h-[760px] rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 cursor-pointer shadow-2xl transition-all duration-500 hover:border-white/40"
          >
            <Image
              key={`right-${rightPhoto.id}`}
              src={rightPhoto.imageUrl}
              alt={rightPhoto.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center w-full h-full transition-all duration-1000 ease-out group-hover:scale-105"
            />
            {/* Ambient Hover Overlay & Minimal View Icon */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-4 rounded-full bg-black/70 border border-white/30 text-white backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                <Maximize2 className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Controllers Bar & Bottom View Full Gallery CTA */}
        <div className="mt-8 sm:mt-12 w-full flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
          {/* Left / Center Controllers */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md">
            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Previous Images"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Counter */}
            <span className="text-xs font-mono tracking-widest text-neutral-300">
              {String(leftIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title="Next Images"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="h-4 w-[1px] bg-white/20" />

            {/* Auto-Play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 font-mono uppercase tracking-wider transition-colors cursor-pointer"
              title={isAutoPlaying ? "Pause Automatic Slideshow" : "Start Automatic Slideshow"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Auto On</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto Off</span>
                </>
              )}
            </button>
          </div>

          {/* Primary View Full Gallery Button positioned at the bottom */}
          <button
            onClick={openFullScreenModal}
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-xl shadow-white/10 flex items-center gap-2.5 cursor-pointer group"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* 100vw x 100vh Full Screen Immersive Gallery Modal */}
      <FullScreenCollectionModal
        isOpen={isFullScreenOpen}
        onClose={() => setIsFullScreenOpen(false)}
        collections={COLLECTIONS}
        initialCollectionId={fullScreenCollectionId}
        initialPhotoIndex={leftIndex}
      />
    </section>
  );
}
