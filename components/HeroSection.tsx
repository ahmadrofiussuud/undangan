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

      {/* Seamless Floating 3D Envelope Container (NO rectangle image box / NO background clash!) */}
      <div
        onClick={onOpenInvitation}
        className="relative z-20 my-auto w-full max-w-sm sm:max-w-md mx-auto px-4 cursor-pointer group"
      >
        <div className="relative w-full p-8 sm:p-10 rounded-3xl bg-[#fbf8f2] border-4 border-[#dfbf74] shadow-[0_30px_70px_rgba(0,0,0,0.85)] -rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 overflow-visible">
          {/* Top-Left Floral Bouquet Cluster Decoration */}
          <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-30 filter drop-shadow-lg">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#dfbf74]">
              <circle cx="35" cy="35" r="18" fill="#e8a598" opacity="0.9" />
              <circle cx="20" cy="45" r="14" fill="#d9777f" opacity="0.85" />
              <circle cx="48" cy="25" r="12" fill="#520d18" opacity="0.9" />
              <circle cx="35" cy="35" r="8" fill="#ebd397" />
              <path d="M15 15C25 5 45 10 55 5" stroke="#7e947c" strokeWidth="3" strokeLinecap="round" />
              <path d="M5 30C0 20 10 5 25 10" stroke="#5f755e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Bottom-Right Floral Bouquet Cluster Decoration */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-30 filter drop-shadow-lg rotate-180">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#dfbf74]">
              <circle cx="35" cy="35" r="18" fill="#e8a598" opacity="0.9" />
              <circle cx="20" cy="45" r="14" fill="#d9777f" opacity="0.85" />
              <circle cx="48" cy="25" r="12" fill="#520d18" opacity="0.9" />
              <circle cx="35" cy="35" r="8" fill="#ebd397" />
              <path d="M15 15C25 5 45 10 55 5" stroke="#7e947c" strokeWidth="3" strokeLinecap="round" />
              <path d="M5 30C0 20 10 5 25 10" stroke="#5f755e" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Envelope Flap Fold V-Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L50 45 L100 0" stroke="#dfbf74" strokeWidth="0.8" fill="none" opacity="0.6" />
            <path d="M0 100 L45 50" stroke="#e6d7c3" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M100 100 L55 50" stroke="#e6d7c3" strokeWidth="0.6" fill="none" opacity="0.5" />
          </svg>

          {/* Delicate White Lace Ribbon across envelope center */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-8 bg-[#f2e9dc] border-y border-[#dfbf74]/40 flex items-center justify-between px-2 opacity-90 pointer-events-none">
            <span className="w-full h-full border-t border-b border-dashed border-[#dfbf74]/60" />
          </div>

          {/* Central Burgundy Wax Seal Stamp Button */}
          <div className="relative z-20 flex justify-center my-4">
            <VintageWaxSeal className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
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
