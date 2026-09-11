"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/constants";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

interface FooterProps {
  onOpenCallModal?: () => void;
}

export default function Footer({ onOpenCallModal }: FooterProps) {
  return (
    <footer className="relative bg-black text-white py-20 px-6 overflow-hidden border-t border-white/10 flex flex-col items-center justify-center text-center">
      {/* Background Radial Lighting Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Rotating Sri Lankan Traditional Art Background Motif (Low Opacity) */}
      <div className="absolute -bottom-48 sm:-bottom-64 md:-bottom-[380px] left-1/2 -translate-x-1/2 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] md:w-[750px] md:h-[750px] opacity-10 pointer-events-none z-0">
        <Image
          src="/bkacground_sri_lanka_traditional_art.png"
          alt="Sri Lanka Traditional Art Motif"
          fill
          className="object-contain animate-spin-slow"
        />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-8">
        {/* 1. Branding */}
        <h2 className="font-signature text-5xl sm:text-7xl text-white tracking-wide drop-shadow-md">
          Bandula Senadheera
        </h2>

        {/* 2. Statement */}
        <p className="text-xs sm:text-sm text-neutral-400 tracking-[0.25em] uppercase max-w-xl leading-relaxed font-light">
          Capturing timeless moments, emotional stories, and unscripted beauty across Sri Lanka & worldwide.
        </p>

        {/* 3. Action Buttons: Book a Call & Call Directly */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Book a Call Button */}
          <button
            onClick={onOpenCallModal}
            className="px-8 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-white/10 cursor-pointer"
          >
            Book a Call
          </button>

          {/* Call Line Button */}
          <a
            href={SITE_CONFIG.socials.call}
            onClick={(e) => {
              if (onOpenCallModal) {
                e.preventDefault();
                onOpenCallModal();
              }
            }}
            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-neutral-200 text-xs font-semibold uppercase tracking-wider hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Call {SITE_CONFIG.phoneDisplay}
          </a>
        </div>

        {/* 4. Social Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4 fill-current" />
            <span className="text-[11px] font-medium">Instagram</span>
          </a>

          <a
            href={SITE_CONFIG.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="Facebook"
          >
            <FacebookIcon className="w-4 h-4 fill-current" />
            <span className="text-[11px] font-medium">Facebook</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="YouTube"
          >
            <YouTubeIcon className="w-4 h-4 fill-current" />
            <span className="text-[11px] font-medium">YouTube</span>
          </a>

          <a
            href={SITE_CONFIG.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-xs flex items-center gap-2"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span className="text-[11px] font-medium">WhatsApp</span>
          </a>
        </div>

        {/* 5. Minimal Copyright */}
        <p className="mt-8 text-[11px] font-mono text-neutral-500 tracking-wider">
          © {new Date().getFullYear()} Bandula Senadheera Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
