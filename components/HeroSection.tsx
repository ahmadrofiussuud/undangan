"use client";

import React from "react";
import Image from "next/image";
import { VintageWaxSeal } from "./SvgOrnaments";
import { Sparkles, Heart } from "lucide-react";

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

      {/* Hanging White Orchid Bouquet - Top Left Corner Ornament (Modeled from Referensi 2) */}
      <div className="absolute top-0 left-0 z-30 w-28 sm:w-44 pointer-events-none filter drop-shadow-2xl animate-orchid-sway">
        <Image
          src="/hanging_orchid.png"
          alt="Hanging White Orchid Garland"
          width={518}
          height={1167}
          priority
          className="w-full h-auto opacity-90"
        />
      </div>

      {/* Hanging White Orchid Bouquet - Top Right Corner Ornament (Modeled from Referensi 2) */}
      <div className="absolute top-0 right-0 z-30 w-28 sm:w-44 pointer-events-none filter drop-shadow-2xl animate-orchid-sway-reverse">
        <Image
          src="/hanging_orchid.png"
          alt="Hanging White Orchid Garland"
          width={518}
          height={1167}
          priority
          className="w-full h-auto opacity-90"
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
          Diana &amp; Thalib
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-200 font-medium pt-1">
          Kamis, 17 Desember 2026
        </p>
      </div>

      {/* Realistic Luxury 3D Envelope Container with Gentle 3D Float */}
      <div
        onClick={onOpenInvitation}
        className="relative z-20 my-auto w-full max-w-xs sm:max-w-md mx-auto px-2 cursor-pointer group animate-float-gentle"
      >
        {/* outer gold glow container */}
        <div className="relative p-1.5 sm:p-2 rounded-[2rem] bg-gradient-to-b from-[#dfbf74] via-[#ebd397]/70 to-[#dfbf74] shadow-[0_30px_70px_rgba(0,0,0,0.85)] group-hover:scale-[1.03] transition-all duration-500">
          <div className="relative w-full overflow-hidden rounded-[1.7rem] bg-[#14281a]/90 border border-[#dfbf74]/60 shadow-inner">
            <Image
              src="/realistic_envelope.jpg"
              alt="Luxury Realistic Wedding Envelope"
              width={780}
              height={510}
              priority
              className="w-full h-auto object-cover object-center filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle light overlay sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#14281a]/40 via-transparent to-[#14281a]/20 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Click Envelope to Open Button / Hint */}
      <div className="relative z-20 pb-24 sm:pb-28 pt-2 space-y-2">
        <button
          onClick={onOpenInvitation}
          className="px-9 py-4 rounded-full bg-[#520d18] hover:bg-[#3d0710] text-[#ebd397] font-semibold text-xs tracking-[0.25em] uppercase shadow-2xl border-2 border-[#dfbf74] transition-all hover:scale-105 active:scale-95 animate-subtle-glow cursor-pointer"
        >
          Buka Undangan
        </button>
      </div>
    </section>
  );
}
