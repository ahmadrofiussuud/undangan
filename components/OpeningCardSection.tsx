"use client";

import React from "react";
import Image from "next/image";
import { BurgundyCardFrame, FloralHeaderDivider } from "./SvgOrnaments";
import { Sparkles } from "lucide-react";

export default function OpeningCardSection({ guestName }: { guestName: string }) {
  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto overflow-hidden text-[#fbf8f2]">
      {/* Background Image: Emerald Velvet Curtain Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.jpg"
          alt="Emerald Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-[#14281a]/80" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* Hanging White Orchid Bouquet - Top Left Corner Ornament (Modeled from Referensi 2) */}
        <div className="absolute -top-16 -left-8 sm:-top-20 sm:-left-16 z-30 w-32 sm:w-48 pointer-events-none filter drop-shadow-2xl animate-orchid-sway">
          <Image
            src="/hanging_orchid.png"
            alt="Hanging White Orchid Garland"
            width={518}
            height={1167}
            priority
            className="w-full h-auto opacity-95"
          />
        </div>

        {/* Hanging White Orchid Bouquet - Top Right Corner Ornament (Modeled from Referensi 2) */}
        <div className="absolute -top-16 -right-8 sm:-top-20 sm:-right-16 z-30 w-32 sm:w-48 pointer-events-none filter drop-shadow-2xl animate-orchid-sway-reverse">
          <Image
            src="/hanging_orchid.png"
            alt="Hanging White Orchid Garland"
            width={518}
            height={1167}
            priority
            className="w-full h-auto opacity-95"
          />
        </div>
        <BurgundyCardFrame className="bg-[#520d18]/95 border-2 border-[#dfbf74] shadow-2xl p-8 sm:p-12 space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#3d0710] border-2 border-[#dfbf74] flex items-center justify-center shadow-lg">
            <Sparkles className="w-7 h-7 text-[#dfbf74]" />
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbf74] font-semibold">
            Walimatul &apos;Ursy
          </p>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold italic text-[#ebd397] drop-shadow gold-shimmer-text">
            Diana &amp; Thalib
          </h2>

          <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />

          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase tracking-widest text-stone-300 font-medium">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <p className="text-2xl font-serif font-bold text-white capitalize">
              {guestName || "Tamu Undangan"}
            </p>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light px-4">
              Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i,{" "}
              <strong className="font-semibold text-[#ebd397]">{guestName || "Tamu Undangan"}</strong>{" "}
              untuk menghadiri acara pernikahan kami.
            </p>
          </div>

          <div className="pt-4 border-t border-[#dfbf74]/30">
            <p className="text-xs font-serif italic text-[#dfbf74]">
              Kamis, 17 Desember 2026
            </p>
          </div>
        </BurgundyCardFrame>
      </div>
    </section>
  );
}
