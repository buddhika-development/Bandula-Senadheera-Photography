"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Photo } from "@/types";

interface PhotoLightboxModalProps {
  photos: Photo[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function PhotoLightboxModal({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: PhotoLightboxModalProps) {
  const isOpen = currentIndex !== null;
  const currentPhoto = currentIndex !== null ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(prevIndex);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(nextIndex);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-in fade-in duration-300">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto z-20">
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-widest text-white uppercase">
            {currentPhoto.category}
          </span>
          <span className="text-xs text-neutral-400 font-mono tracking-wider">
            {currentIndex! + 1} / {photos.length}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white transition-all duration-200 cursor-pointer"
          title="Close (Esc)"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>

      {/* Main Image Area with Controls */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-30 p-3.5 rounded-full bg-black/60 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-md cursor-pointer"
          title="Previous (Left Arrow)"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
          <Image
            src={currentPhoto.imageUrl}
            alt={currentPhoto.title}
            fill
            sizes="100vw"
            priority
            className="object-contain transition-all duration-300 select-none"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-30 p-3.5 rounded-full bg-black/60 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-md cursor-pointer"
          title="Next (Right Arrow)"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      {/* Bottom Information Footer */}
      <div className="w-full max-w-4xl mx-auto text-center space-y-1 z-20">
        <h3 className="text-lg sm:text-2xl font-bold text-white tracking-wide">
          {currentPhoto.title}
        </h3>
        {currentPhoto.description && (
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto">
            {currentPhoto.description}
          </p>
        )}
      </div>
    </div>
  );
}
