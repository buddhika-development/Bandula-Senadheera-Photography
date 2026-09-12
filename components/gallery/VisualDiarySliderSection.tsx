"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, MapPin, Maximize2 } from "lucide-react";
import { FullScreenCollectionModal, PhotoCollection } from "@/components/ui";

interface ShowcaseSlide {
  id: string;
  couple: string;
  event: string;
  location: string;
  category: string;
  imageUrl: string;
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "slide-1",
    couple: "Kavinda & Dilini",
    event: "Highland Sanctuary Destination Wedding",
    location: "Nuwara Eliya, Sri Lanka",
    category: "Luxury Wedding",
    imageUrl: "/550park-luxury-wedding-films-CvNj1vubkIA-unsplash.jpg",
  },
  {
    id: "slide-2",
    couple: "Roshan & Nimasha",
    event: "Golden Hour Oceanfront Vows",
    location: "Mirissa Coast, Sri Lanka",
    category: "Beach Wedding",
    imageUrl: "/camila-cordeiro-haRyBAihS_0-unsplash.jpg",
  },
  {
    id: "slide-3",
    couple: "Sahan & Rashmi",
    event: "Authentic Unscripted Romance",
    location: "Kandy Botanical Gardens",
    category: "Pre-Wedding Session",
    imageUrl: "/eugenia-pan-kiv-1Bs2sZ9fD2Q-unsplash.jpg",
  }
];

const COLLECTIONS: PhotoCollection[] = [
  {
    id: "luxury-weddings",
    name: "Luxury Weddings",
    photos: SHOWCASE_SLIDES.map((slide) => ({
      id: slide.id,
      title: `${slide.couple} - ${slide.event}`,
      category: slide.category,
      imageUrl: slide.imageUrl,
    })),
  },
];

export default function VisualDiarySliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

  const total = SHOWCASE_SLIDES.length;
  const currentSlide = SHOWCASE_SLIDES[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic slideshow transition
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-black overflow-hidden group select-none">
      {/* Background Full-Screen Image Showcase */}
      <div className="absolute inset-0 w-full h-full">
        {SHOWCASE_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
              }`}
          >
            <Image
              src={slide.imageUrl}
              alt={`${slide.couple} - ${slide.event}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Desktop Overlay: Bottom to Middle Gradient Overlay with Couple & Event Info */}
      {/* Hides on hover on desktop (opacity-100 group-hover:opacity-0), and hidden on mobile (hidden md:flex) */}
      <div className="hidden md:flex flex-col justify-end absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/60 via-50% to-transparent pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-0 z-10 px-8 lg:px-20 pb-28">
        <div className="max-w-3xl space-y-3 transform translate-y-0 transition-transform duration-500">
          {/* Badge & Location */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs tracking-widest uppercase font-mono backdrop-blur-md">
              {currentSlide.category}
            </span>
            <span className="text-neutral-300 text-xs flex items-center gap-1.5 font-light tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              {currentSlide.location}
            </span>
          </div>

          {/* Couple Name */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-wide drop-shadow-2xl font-normal leading-none">
            {currentSlide.couple}
          </h2>

          {/* Event Title */}
          <p className="text-sm md:text-lg text-neutral-300 tracking-wider font-light uppercase drop-shadow-md">
            {currentSlide.event}
          </p>
        </div>
      </div>

      {/* Manual Navigation Controls: Side Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/40 border border-white/20 text-white/80 hover:text-white hover:bg-black/75 hover:scale-110 hover:border-white/50 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-2xl group/btn"
        aria-label="Previous Image"
        title="Previous Image"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover/btn:-translate-x-0.5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:left-auto md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/40 border border-white/20 text-white/80 hover:text-white hover:bg-black/75 hover:scale-110 hover:border-white/50 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-2xl group/btn"
        aria-label="Next Image"
        title="Next Image"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover/btn:translate-x-0.5" />
      </button>

      {/* Bottom Manual Control Bar: Slide Indicators, Counter & Autoplay Controls */}
      <div className="absolute bottom-6 inset-x-0 z-30 px-6 md:px-16 flex items-center justify-between gap-4">
        {/* Left / Center: Interactive Slide Indicator Bars */}
        <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-full px-4 py-2.5 backdrop-blur-md">
          {SHOWCASE_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${index === currentIndex
                ? "w-8 bg-white"
                : "w-2.5 bg-white/30 hover:bg-white/70"
                }`}
              title={`Go to ${slide.couple}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Right: Slide Counter, Auto-Play Toggle & Full Screen Modal Button */}
        <div className="flex items-center gap-3">
          {/* Controls Capsule */}
          <div className="flex items-center gap-3.5 bg-black/40 border border-white/15 rounded-full px-4 py-2 backdrop-blur-md">
            {/* Counter */}
            <span className="text-xs font-mono tracking-widest text-neutral-200">
              {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            <div className="h-3.5 w-[1px] bg-white/20" />

            {/* Auto-Play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 font-mono uppercase tracking-wider transition-colors cursor-pointer"
              title={isAutoPlaying ? "Pause Automatic Slideshow" : "Start Automatic Slideshow"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Auto</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="hidden sm:inline">Paused</span>
                </>
              )}
            </button>
          </div>

          {/* Full Screen View Modal Button */}
          <button
            onClick={() => setIsFullScreenOpen(true)}
            className="p-2.5 rounded-full bg-black/40 border border-white/15 text-white/80 hover:text-white hover:bg-black/75 hover:scale-105 border-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer hidden sm:flex items-center justify-center"
            title="Expand Full Screen Gallery"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full Screen Immersive Gallery Modal */}
      <FullScreenCollectionModal
        isOpen={isFullScreenOpen}
        onClose={() => setIsFullScreenOpen(false)}
        collections={COLLECTIONS}
        initialCollectionId="luxury-weddings"
        initialPhotoIndex={currentIndex}
      />
    </section>
  );
}
