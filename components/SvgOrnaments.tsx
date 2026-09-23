import React from "react";

export function ScallopedCloudFrame({
  children,
  className = "",
  showOrchids = true,
  showTassel = true,
}: {
  children: React.ReactNode;
  className?: string;
  showOrchids?: boolean;
  showTassel?: boolean;
}) {
  return (
    <div className={`relative max-w-xl mx-auto ${className}`}>
      {/* Top-Right Hanging Gold Vintage Lantern Ornament */}
      {showOrchids && (
        <div className="absolute top-2 -right-2 sm:top-3 sm:-right-3 z-30 w-22 sm:w-32 pointer-events-none filter drop-shadow-2xl animate-lantern-sway-reverse">
          <img
            src="/hanging_lantern.png"
            alt="Hanging Vintage Gold Lantern"
            className="w-full h-auto opacity-95"
          />
        </div>
      )}

      {/* Bottom-Left Hanging Gold Vintage Lantern Ornament */}
      {showOrchids && (
        <div className="absolute bottom-8 -left-6 sm:bottom-12 sm:-left-8 z-30 w-22 sm:w-32 pointer-events-none filter drop-shadow-2xl animate-lantern-sway">
          <img
            src="/hanging_lantern.png"
            alt="Hanging Vintage Gold Lantern"
            className="w-full h-auto opacity-95"
          />
        </div>
      )}

      {/* Scalloped Outer Container */}
      <div className="relative p-6 sm:p-10 text-[#fbf8f2]">
        {/* SVG Scalloped Wavy Border Background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          viewBox="0 0 500 650"
          preserveAspectRatio="none"
        >
          {/* Outer Solid Gold Scalloped Path */}
          <path
            d="M 120 18 Q 160 5, 200 18 Q 250 5, 300 18 Q 340 5, 380 18 Q 440 18, 465 45 Q 492 70, 482 120 Q 495 170, 482 220 Q 495 270, 482 320 Q 495 370, 482 420 Q 495 470, 482 530 Q 492 580, 465 605 Q 440 632, 380 632 Q 340 645, 300 632 Q 250 645, 200 632 Q 160 645, 120 632 Q 60 632, 35 605 Q 8 580, 18 530 Q 5 470, 18 420 Q 5 370, 18 320 Q 5 270, 18 220 Q 5 170, 18 120 Q 8 70, 35 45 Q 60 18, 120 18 Z"
            fill="#3d0710"
            stroke="#dfbf74"
            strokeWidth="5"
          />
          {/* Inner Dotted Gold Line */}
          <path
            d="M 123 26 Q 160 15, 200 26 Q 250 15, 300 26 Q 340 15, 377 26 Q 432 26, 456 50 Q 480 74, 471 120 Q 484 170, 471 220 Q 484 270, 471 320 Q 484 370, 471 420 Q 484 470, 471 525 Q 480 571, 456 595 Q 432 619, 377 619 Q 340 630, 300 619 Q 250 630, 200 619 Q 160 630, 123 619 Q 68 619, 44 595 Q 20 571, 29 525 Q 16 470, 29 420 Q 16 370, 29 320 Q 16 270, 29 220 Q 16 170, 29 120 Q 20 74, 44 50 Q 68 26, 123 26 Z"
            fill="none"
            stroke="#ebd397"
            strokeWidth="1.8"
            strokeDasharray="4 3"
            opacity="0.85"
          />
        </svg>

        {/* Content Container */}
        <div className="relative z-10 p-2 sm:p-4">{children}</div>
      </div>

      {/* Decorative Hanging Tassel at bottom center */}
      {showTassel && (
        <div className="flex justify-center -mt-3 animate-tassel">
          <svg className="w-10 h-16 text-[#dfbf74] filter drop-shadow-lg" viewBox="0 0 40 60" fill="none">
            <circle cx="20" cy="10" r="6" stroke="currentColor" strokeWidth="2" fill="#520d18" />
            <path d="M20 16V28" stroke="currentColor" strokeWidth="3" />
            <path d="M12 28C12 28 15 50 20 50C25 50 28 28 28 28H12Z" fill="#520d18" stroke="currentColor" strokeWidth="2" />
            <path d="M14 48L10 58M18 50L17 60M22 50L23 60M26 48L30 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function OvalLaceBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ScallopedCloudFrame className={className} showOrchids={true} showTassel={true}>
      {children}
    </ScallopedCloudFrame>
  );
}

export function VintageWaxSeal({
  className = "w-16 h-16",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Wax Seal"
      className={`relative inline-flex items-center justify-center cursor-pointer group focus:outline-none transition-transform duration-300 hover:scale-110 active:scale-95 animate-glow-pulse ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full filter drop-shadow-2xl"
        fill="none"
      >
        <path
          d="M50 5C65 2 82 12 88 28C95 44 92 65 82 78C72 91 52 98 35 94C18 90 5 75 3 58C1 41 12 22 28 12C44 2 35 8 50 5Z"
          fill="#6e1523"
        />
        <path
          d="M50 8C63 5 78 14 83 28C88 42 86 61 77 72C68 83 50 89 35 85C20 81 9 68 7 53C5 38 15 21 29 12C43 3 37 11 50 8Z"
          fill="#520d18"
        />
        <circle cx="50" cy="50" r="32" stroke="#dfbf74" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="28" stroke="#ebd397" strokeWidth="1" strokeDasharray="3 2" />
        <path
          d="M38 58L42 44L50 52L58 44L62 58H38Z"
          fill="#dfbf74"
        />
        <circle cx="50" cy="42" r="2.5" fill="#ebd397" />
        <circle cx="42" cy="42" r="2" fill="#ebd397" />
        <circle cx="58" cy="42" r="2" fill="#ebd397" />
      </svg>
    </button>
  );
}

export function FloralHeaderDivider({
  className = "w-48 h-12 text-[#dfbf74]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 20C80 20 70 5 40 5C20 5 0 20 0 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M100 20C120 20 130 5 160 5C180 5 200 20 200 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M100 20C96 14 90 12 84 14C82 18 86 24 100 20Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M100 20C104 14 110 12 116 14C118 18 114 24 100 20Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="100" cy="20" r="3" fill="#dfbf74" />
    </svg>
  );
}

export function BurgundyCardFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative p-6 sm:p-8 rounded-3xl border-2 border-[#dfbf74]/60 bg-[#3d0710]/95 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-md text-[#fbf8f2] ${className}`}
    >
      {/* Corner borders */}
      <span className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-[#dfbf74] rounded-tl" />
      <span className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-[#dfbf74] rounded-tr" />
      <span className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-[#dfbf74] rounded-bl" />
      <span className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-[#dfbf74] rounded-br" />
      {children}
    </div>
  );
}

export const GoldenFrameBorder = BurgundyCardFrame;

export function LuxuryCouplePhotoFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative group max-w-xs sm:max-w-sm mx-auto filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] ${className}`}>
      {/* Top Royal Gold Crest Wreath Emblem */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 w-16 h-14 text-[#dfbf74] pointer-events-none filter drop-shadow-lg">
        <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
          <path
            d="M50 5C62 18 82 12 92 28C78 33 72 52 50 46C28 52 22 33 8 28C18 12 38 18 50 5Z"
            fill="url(#goldGradientArch)"
          />
          <path
            d="M50 12C45 22 35 25 25 25C35 32 42 42 50 42C58 42 65 32 75 25C65 25 55 22 50 12Z"
            fill="#520d18"
            opacity="0.8"
          />
          <circle cx="50" cy="22" r="5" fill="#ebd397" />
          <circle cx="28" cy="28" r="3" fill="#dfbf74" />
          <circle cx="72" cy="28" r="3" fill="#dfbf74" />
          <defs>
            <linearGradient id="goldGradientArch" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dfbf74" />
              <stop offset="50%" stopColor="#ebd397" />
              <stop offset="100%" stopColor="#b38e46" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Outer Metallic Gold Gradient Frame */}
      <div className="relative p-2 sm:p-2.5 rounded-t-[8rem] rounded-b-3xl bg-gradient-to-b from-[#dfbf74] via-[#ebd397] to-[#b38e46] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
        
        {/* Inner Dark Burgundy & Dotted Gold Border */}
        <div className="relative p-2 rounded-t-[7.5rem] rounded-b-[1.4rem] bg-[#3d0710] border-2 border-dashed border-[#dfbf74]/60 overflow-hidden">
          
          {/* Photo Image Container */}
          <div className="relative w-64 h-84 sm:w-72 sm:h-96 mx-auto rounded-t-[7rem] rounded-b-xl overflow-hidden shadow-inner bg-[#14281a]">
            {/* Image Component */}
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000 ease-out"
            />

            {/* Soft Ambient Vignette & Gold Light Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d0710]/70 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 border-[3px] border-[#dfbf74]/40 rounded-t-[7rem] rounded-b-xl pointer-events-none" />
          </div>

          {/* Bottom Gold Filigree Corner Ornaments inside Frame */}
          <svg className="absolute bottom-1 left-1.5 w-7 h-7 text-[#dfbf74] opacity-85 pointer-events-none" viewBox="0 0 40 40" fill="none">
            <path d="M5 35C5 20 20 5 35 5" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-1 right-1.5 w-7 h-7 text-[#dfbf74] opacity-85 pointer-events-none rotate-90" viewBox="0 0 40 40" fill="none">
            <path d="M5 35C5 20 20 5 35 5" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}

