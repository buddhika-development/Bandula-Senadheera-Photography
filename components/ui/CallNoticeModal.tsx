"use client";

import { useEffect } from "react";

interface CallNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
}

export default function CallNoticeModal({
  isOpen,
  onClose,
  phoneNumber = "+94715613103",
}: CallNoticeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formattedPhone = "+94 71 561 3103";

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-neutral-950 border border-white/15 rounded-3xl p-6 sm:p-8 text-center shadow-2xl overflow-hidden group">
        {/* Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          title="Close (Esc)"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        {/* Top Phone Icon Badge */}
        <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-amber-200 mb-5 shadow-lg">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </div>

        {/* Header */}
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 block mb-1">
          Direct Contact
        </span>
        <h3 className="text-2xl font-bold text-white tracking-tight">
          A Warm Welcome
        </h3>

        {/* Optimized Reassuring Copy */}
        <p className="mt-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          If I am unable to answer your call immediately, please don&apos;t worry—I am likely behind the lens capturing a special wedding or event. Your call is deeply important to me, and I guarantee to return your call as soon as I wrap up the shoot!
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          {/* Direct Tel Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="w-full py-3.5 px-6 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now ({formattedPhone})
          </a>

          {/* Schedule Button */}
          <a
            href="#contact"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
            </svg>
            Schedule A Call Instead
          </a>
        </div>
      </div>
    </div>
  );
}
