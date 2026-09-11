"use client";

import { useState, useMemo, useEffect, useRef } from "react";
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
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "All") return PORTFOLIO_PHOTOS;
    return PORTFOLIO_PHOTOS.filter((photo) => photo.category === selectedCategory);
  }, [selectedCategory]);

  // Auto-play feature
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredPhotos.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const activeElement = container.children[activePhotoIndex] as HTMLElement;
      if (activeElement) {
        const scrollLeft =
          activeElement.offsetLeft -
          container.clientWidth / 2 +
          activeElement.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activePhotoIndex]);

  const currentPhoto = filteredPhotos[activePhotoIndex] || filteredPhotos[0];

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-mono block mb-2">
          Exhibition Gallery
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Framed Showcase
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-400 font-light">
          Experience Bandula Senadheera&apos;s portfolio enclosed in luxury exhibition frames. Use the bottom slider or controls to browse.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto z-10">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActivePhotoIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#8d6e63] text-white shadow-lg shadow-[#8d6e63]/30 scale-105"
                  : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Main Center Stage: Brown-Toned Picture Frame & Controller */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Luxury Brown Wood Frame Container */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[550px] border-[12px] sm:border-[18px] md:border-[22px] border-[#2b1810] rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.95)] ring-1 ring-[#6d4c41]/40 bg-[#160d0a] overflow-hidden group">
          {/* Inner Pass-Partout Shadow Effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(0,0,0,0.85)] z-10 pointer-events-none" />

          {/* Category Badge (Top-Left of Frame) */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3.5 py-1.5 rounded-full bg-black/75 border border-[#8d6e63]/40 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#d7ccc8] uppercase shadow-lg">
              {currentPhoto.category}
            </span>
          </div>

          {/* Expand / Lightbox Button (Top-Right of Frame) */}
          <button
            onClick={() => setLightboxIndex(activePhotoIndex)}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/75 hover:bg-black border border-[#8d6e63]/40 backdrop-blur-md text-white transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
            title="Expand Fullscreen View"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          </button>

          {/* Active Image */}
          <div
            onClick={() => setLightboxIndex(activePhotoIndex)}
            className="relative w-full h-full cursor-pointer"
          >
            <Image
              key={currentPhoto.id}
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
              className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </div>

          {/* Controller Arrow Overlay Buttons (Floating inside Frame Sides) */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-black/60 hover:bg-[#3e2723] border border-[#8d6e63]/40 text-white/80 hover:text-white backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer"
            title="Previous Image"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3.5 rounded-full bg-black/60 hover:bg-[#3e2723] border border-[#8d6e63]/40 text-white/80 hover:text-white backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer"
            title="Next Image"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Photo Meta & Controller Bar */}
        <div className="w-full mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2 text-center sm:text-left">
          {/* Metadata */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {currentPhoto.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 max-w-md">
              {currentPhoto.description}
            </p>
          </div>

          {/* Controller Status Controls */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md">
            {/* Index Counter */}
            <span className="text-xs font-mono tracking-widest text-[#d7ccc8]">
              {String(activePhotoIndex + 1).padStart(2, "0")} / {String(filteredPhotos.length).padStart(2, "0")}
            </span>

            <div className="h-4 w-[1px] bg-white/20" />

            {/* Auto-Play Toggle Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 tracking-wider uppercase font-mono transition-colors cursor-pointer"
            >
              {isAutoPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  Pause
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Auto-Play
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Thumbnail Slider Carousel */}
      <div className="w-full max-w-5xl mx-auto mt-12">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-xs uppercase tracking-[0.3em] font-mono text-neutral-400">
            Exhibition Filmstrip
          </span>
          <span className="text-xs text-neutral-500 font-mono">
            {filteredPhotos.length} Photographs
          </span>
        </div>

        {/* Scrollable Thumbnail Strip */}
        <div
          ref={thumbnailContainerRef}
          className="flex items-center gap-4 overflow-x-auto py-3 px-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredPhotos.map((photo, index) => {
            const isActive = index === activePhotoIndex;
            return (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                className={`relative flex-shrink-0 w-28 sm:w-36 aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 snap-center group ${
                  isActive
                    ? "ring-2 ring-amber-400 scale-105 border-transparent shadow-lg shadow-amber-900/40 z-10"
                    : "opacity-45 hover:opacity-100 border border-white/10 hover:border-white/40"
                }`}
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.title}
                  fill
                  sizes="150px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Micro Badge */}
                <div className="absolute top-1.5 left-1.5 z-10">
                  <span className="px-1.5 py-0.5 rounded bg-black/80 text-[8px] font-mono text-neutral-300 uppercase tracking-wider">
                    {photo.category}
                  </span>
                </div>

                {/* Active Overlay Glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-amber-500/10 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
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
