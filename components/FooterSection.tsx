"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FloralHeaderDivider, GoldenCornerFlourish, RoyalMonogramEmblem } from "./SvgOrnaments";

export default function FooterSection() {
  return (
    <footer className="relative pt-20 pb-32 px-4 bg-[#0f1e14] text-[#fbf8f2] text-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.jpg"
          alt="Velvet Footer Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14281a]/90 via-[#0f1e14]/80 to-[#0f1e14]" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto space-y-8">
        <FloralHeaderDivider className="w-40 h-8 mx-auto text-[#dfbf74]" />

        <div className="p-8 sm:p-10 rounded-3xl bg-[#520d18]/95 border-2 border-[#dfbf74] shadow-2xl space-y-6 relative overflow-hidden group">
          <GoldenCornerFlourish className="absolute top-1 left-1 w-8 h-8 text-[#dfbf74] opacity-80" />
          <GoldenCornerFlourish className="absolute top-1 right-1 w-8 h-8 text-[#dfbf74] opacity-80 rotate-90" />
          
          {/* Royal Monogram Emblem */}
          <div className="flex justify-center mb-2">
            <RoyalMonogramEmblem className="w-20 h-20 text-[#dfbf74] filter drop-shadow-xl animate-candle-flicker" />
          </div>

          <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
            Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia kami. Terimakasih atas segala ucapan, doa, dan perhatian yang diberikan.
          </p>

          <p className="text-sm font-serif italic text-[#dfbf74] font-semibold">
            Sampai jumpa di hari pernikahan kami!
          </p>

          <div className="space-y-1 pt-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold italic text-[#ebd397] gold-shimmer-text">
              Diana &amp; Thalib
            </h2>
            <p className="text-xs text-stone-300">Beserta Keluarga Besar Kedua Mempelai</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-2 text-[11px] text-stone-400">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> for Diana &amp; Thalib Wedding
          </p>
          <p>&copy; 2026 Digital Wedding Invitation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
