"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";
import { VintageWaxSeal } from "./SvgOrnaments";

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
          className="object-cover object-center brightness-[0.6] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e14]/90 via-[#14281a]/40 to-[#0f1e14]/80" />
      </div>

      {/* Top Hanging Floral Garland Header (Returned as requested!) */}
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

      {/* Clean Realistic Envelope Graphic Cover (Matching User Screenshot) */}
      <div
        onClick={onOpenInvitation}
        className="relative z-20 my-auto w-full max-w-sm sm:max-w-md mx-auto px-2 cursor-pointer group"
      >
        <div className="relative p-6 sm:p-8 rounded-3xl bg-[#fbf8f2] border-4 border-[#dfbf74] shadow-[0_30px_60px_rgba(0,0,0,0.9)] text-[#2b040a] space-y-4 -rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
          {/* Wax Seal Stamp */}
          <div className="w-16 h-16 mx-auto rounded-full bg-[#520d18] border-2 border-[#dfbf74] flex items-center justify-center shadow-2xl -mt-12 sm:-mt-14 animate-glow-pulse">
            <Sparkles className="w-8 h-8 text-[#dfbf74]" />
          </div>

          <div className="space-y-1 pt-2">
            <p className="text-[11px] uppercase tracking-widest text-[#520d18] font-bold">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#520d18] capitalize drop-shadow">
              {guestName || "Tamu Undangan"}
            </h3>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed font-light px-2">
            Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
          </p>

          <button
            type="button"
            className="w-full py-3.5 rounded-full bg-[#520d18] group-hover:bg-[#3d0710] text-[#ebd397] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-xl border border-[#dfbf74]"
          >
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>

      {/* Footer hint */}
      <div className="relative z-20 pb-4 text-xs text-[#dfbf74] font-serif italic tracking-wider animate-pulse uppercase">
        Click Envelope to Open
      </div>
    </section>
  );
}
