import React from "react";

export function OvalLaceBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative max-w-lg mx-auto ${className}`}>
      {/* Outer Lace Scallop SVG Frame */}
      <div className="relative p-8 sm:p-10 rounded-[4rem] bg-[#520d18] border-4 border-[#dfbf74]/60 shadow-2xl overflow-hidden">
        {/* Decorative Gold Filigree Top Left Corner */}
        <svg
          className="absolute top-2 left-2 w-16 h-16 text-[#dfbf74]/70 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M10 90C10 40 40 10 90 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle cx="50" cy="20" r="4" fill="currentColor" />
          <circle cx="20" cy="50" r="4" fill="currentColor" />
        </svg>

        {/* Decorative Gold Filigree Bottom Right Corner */}
        <svg
          className="absolute bottom-2 right-2 w-16 h-16 text-[#dfbf74]/70 pointer-events-none rotate-180"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M10 90C10 40 40 10 90 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle cx="50" cy="20" r="4" fill="currentColor" />
          <circle cx="20" cy="50" r="4" fill="currentColor" />
        </svg>

        {/* Content Container */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
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
      className={`relative inline-flex items-center justify-center cursor-pointer group focus:outline-none transition-transform duration-300 hover:scale-110 active:scale-95 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full filter drop-shadow-xl"
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
        opacity="0.8"
      />
      <path
        d="M100 20C104 14 110 12 116 14C118 18 114 24 100 20Z"
        fill="currentColor"
        opacity="0.8"
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
      className={`relative p-6 sm:p-8 rounded-3xl border-2 border-[#dfbf74]/40 bg-[#3d0710]/90 shadow-2xl backdrop-blur-md text-[#fbf8f2] ${className}`}
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
