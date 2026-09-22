"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Sparkles, Heart } from "lucide-react";
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
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpenInvitation();
    }, 900);
  };

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
          className="object-cover object-center brightness-[0.65] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e14]/90 via-[#14281a]/40 to-[#0f1e14]/80" />
      </div>

      {/* Hanging Floral Garland top border */}
      <div className="absolute top-0 left-0 right-0 h-44 z-10 opacity-90 pointer-events-none">
        <Image
          src="/floral_swag.jpg"
          alt="Lush Floral Swag"
          fill
          className="object-cover object-top filter drop-shadow-2xl brightness-110"
        />
      </div>

      {/* Floating Gold Sparkles Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <span className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#dfbf74] animate-ping opacity-75" />
        <span className="absolute top-1/3 right-12 w-3 h-3 rounded-full bg-[#ebd397] animate-float opacity-60" />
        <span className="absolute bottom-1/4 left-1/5 w-2 h-2 rounded-full bg-[#dfbf74] animate-pulse opacity-80" />
      </div>

      {/* Top Title */}
      <div className="relative z-20 pt-10 space-y-1 animate-fade-in">
        <p className="text-3xl sm:text-4xl font-serif italic text-[#dfbf74] drop-shadow-md">
          We&apos;re
        </p>
        <h1 className="text-2xl sm:text-4xl font-serif tracking-[0.2em] uppercase font-light text-white drop-shadow">
          Getting Married
        </h1>
        <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#ebd397] italic drop-shadow-lg">
          Nurdiana &amp; Thalib
        </h2>
        <p className="text-xs uppercase tracking-widest text-stone-300 font-medium pt-1">
          Kamis, 17 Desember 2026
        </p>
      </div>

      {/* 3D Realistic Envelope Container */}
      <div className="relative z-20 my-auto w-full max-w-md mx-auto px-3 perspective-[1000px]">
        {/* Envelope Outer Frame */}
        <div className="relative w-full rounded-3xl bg-[#fbf8f2] border-4 border-[#dfbf74] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Top Triangle Flap */}
          <div
            className={`absolute top-0 inset-x-0 h-28 bg-[#520d18] border-b-2 border-[#dfbf74] origin-top transition-transform duration-700 z-30 flex items-center justify-center ${
              isOpening ? "[transform:rotateX(180deg)] opacity-0" : "[transform:rotateX(0deg)]"
            }`}
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          >
            <div className="pt-2">
              <VintageWaxSeal onClick={handleOpen} className="w-14 h-14" />
            </div>
          </div>

          {/* Letter Content Card Inside Envelope */}
          <div
            className={`p-6 sm:p-8 pt-10 text-[#2b040a] space-y-4 transition-transform duration-1000 ${
              isOpening ? "-translate-y-8 scale-105" : "translate-y-0"
            }`}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-[#6e1523] bg-[#520d18]/10 border border-[#6e1523]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#6e1523]" />
              Undangan Pernikahan
            </span>

            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium">
                Kepada Yth. Bapak/Ibu/Saudara/i:
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#520d18] capitalize drop-shadow-sm">
                {guestName || "Tamu Undangan"}
              </h3>
            </div>

            <p className="text-xs text-stone-700 leading-relaxed font-light px-1">
              Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i,{" "}
              <strong className="font-semibold text-[#520d18]">{guestName || "Tamu Undangan"}</strong>{" "}
              untuk menghadiri acara pernikahan kami.
            </p>

            <button
              onClick={handleOpen}
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#520d18] hover:bg-[#3d0710] text-[#ebd397] font-semibold text-xs tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#dfbf74]/60 active:scale-95"
            >
              <Mail className="w-4 h-4 text-[#ebd397] group-hover:scale-110 transition-transform" />
              <span>Buka Amplop Undangan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="relative z-20 pb-4 text-xs text-[#dfbf74] font-serif italic tracking-wider animate-pulse">
        Click Envelope to Open
      </div>
    </section>
  );
}
