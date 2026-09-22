"use client";

import React from "react";
import Image from "next/image";
import { MailOpen, Heart, Sparkles } from "lucide-react";

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
      className={`relative w-full min-h-screen flex flex-col items-center justify-between text-center px-4 py-8 transition-all duration-1000 ease-in-out z-40 ${
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e14]/95 via-[#14281a]/50 to-[#0f1e14]/90" />
      </div>

      {/* Floating Gold Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <span className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#dfbf74] animate-ping opacity-75" />
        <span className="absolute top-1/3 right-12 w-3 h-3 rounded-full bg-[#ebd397] animate-float opacity-60" />
        <span className="absolute bottom-1/4 left-1/5 w-2 h-2 rounded-full bg-[#dfbf74] animate-pulse opacity-80" />
      </div>

      {/* Top Header Title */}
      <div className="relative z-20 pt-8 space-y-1 animate-fade-in">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ebd397] bg-white/10 backdrop-blur-md border border-[#dfbf74]/40 shadow-lg">
          <Heart className="w-3.5 h-3.5 text-[#dfbf74] fill-[#dfbf74]" />
          The Wedding Invitation
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#ebd397] italic drop-shadow-lg pt-3">
          Nurdiana &amp; Thalib
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-200 font-medium pt-1">
          Kamis, 17 Desember 2026
        </p>
      </div>

      {/* Realistic Clean Envelope Card */}
      <div className="relative z-20 my-auto w-full max-w-sm sm:max-w-md mx-auto px-2">
        <div className="relative p-6 sm:p-8 rounded-3xl bg-[#fbf8f2] border-4 border-[#dfbf74] shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-[#2b040a] space-y-5 transform hover:scale-[1.02] transition-transform duration-500">
          {/* Envelope Wax Seal Stamped Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-[#520d18] border-2 border-[#dfbf74] flex items-center justify-center shadow-xl -mt-12 sm:-mt-14">
            <Sparkles className="w-8 h-8 text-[#dfbf74]" />
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#520d18] font-bold">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#520d18] capitalize drop-shadow">
              {guestName || "Tamu Undangan"}
            </h2>
          </div>

          <p className="text-xs text-stone-700 leading-relaxed font-light px-2">
            Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
          </p>

          <button
            onClick={onOpenInvitation}
            className="w-full py-4 rounded-full bg-[#520d18] hover:bg-[#3d0710] text-[#ebd397] font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all shadow-xl hover:shadow-2xl border border-[#dfbf74] active:scale-95 animate-glow-pulse"
          >
            <MailOpen className="w-4 h-4 text-[#ebd397]" />
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>

      {/* Footer hint */}
      <div className="relative z-20 pb-4 text-xs text-[#dfbf74] font-serif italic tracking-wider animate-pulse">
        Click Button to Open Invitation
      </div>
    </section>
  );
}
