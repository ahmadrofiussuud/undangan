"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  guestName: string;
  isOpen: boolean;
  onOpenInvitation: () => void;
}

export default function HeroSection({
  guestName,
  isOpen,
  onOpenInvitation,
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center justify-between text-center px-4 py-6 transition-all duration-1000 ease-in-out z-40 ${
        isOpen
          ? "hidden"
          : "fixed inset-0 min-h-screen overflow-hidden bg-[#14281a]"
      }`}
    >
      {/* Background Image: Emerald Velvet Curtain */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.jpg"
          alt="Emerald Velvet Backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e14]/90 via-[#14281a]/40 to-[#0f1e14]/80" />
      </div>

      {/* Top Hanging Floral Garland Header */}
      <div className="absolute top-0 left-0 right-0 h-44 z-10 opacity-95 pointer-events-none">
        <Image
          src="/floral_swag.jpg"
          alt="Lush Floral Swag"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top filter drop-shadow-2xl brightness-110"
        />
      </div>

      {/* Floating Gold Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <span className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-[#dfbf74] animate-ping opacity-75" />
        <span className="absolute top-1/3 right-10 w-3 h-3 rounded-full bg-[#ebd397] animate-float opacity-60" />
        <span className="absolute bottom-1/4 left-1/5 w-2 h-2 rounded-full bg-[#dfbf74] animate-pulse opacity-80" />
      </div>

      {/* Top Header Title */}
      <div className="relative z-20 pt-12 space-y-1 animate-fade-in">
        <p className="text-3xl sm:text-4xl font-serif italic text-[#dfbf74] drop-shadow-md">
          We&apos;re
        </p>
        <h1 className="text-2xl sm:text-4xl font-serif tracking-[0.2em] uppercase font-light text-white drop-shadow">
          Getting Married
        </h1>
        <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#ebd397] italic drop-shadow-lg">
          Nurdiana &amp; Thalib
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-200 font-medium pt-1">
          Kamis, 17 Desember 2026
        </p>
      </div>

      {/* Plain Elite Vintage Envelope Graphic (Matching Screenshot 2 - NO text on envelope) */}
      <div
        onClick={onOpenInvitation}
        className="relative z-20 my-auto w-full max-w-sm sm:max-w-md mx-auto px-2 cursor-pointer group"
      >
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] border-4 border-[#dfbf74]/60 -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
          <Image
            src="/plain_envelope.jpg"
            alt="Plain Elite Wedding Envelope"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center filter drop-shadow-xl"
          />

          {/* Corner Floral Accents */}
          <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-[#dfbf74]/70 rounded-tl pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-[#dfbf74]/70 rounded-br pointer-events-none" />
        </div>
      </div>

      {/* Click Envelope to Open Button / Hint */}
      <div className="relative z-20 pb-6 space-y-2">
        <button
          onClick={onOpenInvitation}
          className="px-8 py-3.5 rounded-full bg-[#520d18] hover:bg-[#3d0710] text-[#ebd397] font-semibold text-xs tracking-[0.25em] uppercase shadow-2xl border-2 border-[#dfbf74] transition-all hover:scale-105 active:scale-95 animate-glow-pulse"
        >
          Click Envelope to Open
        </button>
      </div>
    </section>
  );
}
