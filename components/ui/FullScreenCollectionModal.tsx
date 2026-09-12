"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Photo } from "@/types";

export interface PhotoCollection {
  id: string;
  name: string;
  photos: Photo[];
}

interface FullScreenCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  collections: PhotoCollection[];
  initialCollectionId?: string;
  initialPhotoIndex?: number;
}

export function FullScreenCollectionModal({
  isOpen,
  onClose,
  collections,
  initialCollectionId,
  initialPhotoIndex = 0,
}: FullScreenCollectionModalProps) {
  const [activeCollectionId, setActiveCollectionId] = useState<string>(
    initialCollectionId || collections[0]?.id || ""
  );
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(initialPhotoIndex);

  useEffect(() => {
    if (initialCollectionId) {
      setActiveCollectionId(initialCollectionId);
    }
    setCurrentPhotoIndex(initialPhotoIndex);
  }, [initialCollectionId, initialPhotoIndex, isOpen]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const activeCollection =
    collections.find((c) => c.id === activeCollectionId) || collections[0];

  const currentPhotos = activeCollection?.photos || [];
  const currentPhoto = currentPhotos[currentPhotoIndex] || currentPhotos[0];

  // Keyboard navigation & ESC close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentPhotos.length, currentPhotoIndex]);

  if (!isOpen || !currentPhoto) return null;

  const handlePrev = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % currentPhotos.length);
  };

  return (
    <div className="fixed inset-0 z-[100] w-screen h-screen bg-black overflow-hidden flex flex-col justify-between select-none">
      {/* 100vw x 100vh Full Screen Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          key={`${activeCollection.id}-${currentPhoto.id}`}
          src={currentPhoto.imageUrl}
          alt={currentPhoto.title || "Full size photo"}
          fill
          priority
          sizes="100vw"
          className="object-cover w-full h-full transition-opacity duration-500"
        />
        {/* Subtle Vignette Gradient for UI contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* Top Bar Navigation: Title, Collection Selector Pills & Close Button */}
      <div className="relative z-20 w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between gap-4 bg-gradient-to-b from-black/90 to-transparent">
        {/* Left: Collection Name Badge */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-neutral-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md hidden sm:inline-block">
            Collection
          </span>
          <h3 className="text-sm sm:text-lg font-bold text-white tracking-wide">
            {activeCollection.name}
          </h3>
        </div>

        {/* Center: Collection Selector Switcher Pills */}
        <div className="hidden lg:flex items-center gap-2 bg-black/60 border border-white/15 rounded-full p-1.5 backdrop-blur-xl">
          {collections.map((col) => {
            const isActive = col.id === activeCollectionId;
            return (
              <button
                key={col.id}
                onClick={() => {
                  setActiveCollectionId(col.id);
                  setCurrentPhotoIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-neutral-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {col.name}
              </button>
            );
          })}
        </div>

        {/* Right: Close Button */}
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md cursor-pointer shadow-2xl group"
          title="Close Full Screen Gallery"
        >
          <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
        </button>
      </div>

      {/* Floating Prev / Next Image Controllers */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer shadow-2xl"
        title="Previous Photo"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer shadow-2xl"
        title="Next Photo"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Mobile Collection Selector Bar & Bottom Info */}
      <div className="relative z-20 w-full px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        {/* Mobile Collection Pills Bar */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto max-w-full pb-2 scrollbar-none">
          {collections.map((col) => {
            const isActive = col.id === activeCollectionId;
            return (
              <button
                key={col.id}
                onClick={() => {
                  setActiveCollectionId(col.id);
                  setCurrentPhotoIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "bg-black/60 border border-white/15 text-neutral-300"
                }`}
              >
                {col.name}
              </button>
            );
          })}
        </div>

        {/* Counter Display */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          <span className="text-xs font-mono tracking-widest text-neutral-300 bg-black/60 border border-white/15 rounded-full px-4 py-2 backdrop-blur-md">
            {String(currentPhotoIndex + 1).padStart(2, "0")} / {String(currentPhotos.length).padStart(2, "0")}
          </span>

          <span className="text-xs text-neutral-400 font-light hidden sm:inline-block">
            Press ESC to exit full screen
          </span>
        </div>
      </div>
    </div>
  );
}
