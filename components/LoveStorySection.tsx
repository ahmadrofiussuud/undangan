"use client";

import React from "react";
import { BurgundyCardFrame, FloralHeaderDivider, GoldenCornerFlourish, GoldenVineNode } from "./SvgOrnaments";

const stories = [
  {
    title: "Awal Pertemuan",
    text: "Tidak ada yang benar-benar kebetulan di dunia ini. Setiap pertemuan telah diatur dengan indah, hanya menunggu waktu yang tepat untuk terjadi. Berawal dari sebuah perkenalan sederhana, kami dipertemukan dalam cara yang tidak pernah kami duga sebelumnya.",
  },
  {
    title: "Perjalanan Bersama",
    text: "Seiring berjalannya waktu, kebersamaan kecil yang kami lalui perlahan tumbuh menjadi sesuatu yang lebih berarti. Dalam setiap cerita, tentu ada tawa dan tantangan. Dari situlah kami belajar untuk saling memahami, menerima, dan melengkapi satu sama lain.",
  },
  {
    title: "Komitmen",
    text: "Hingga akhirnya kami menyadari bahwa perjalanan ini bukan lagi tentang dua orang yang berjalan sendiri, melainkan tentang dua hati yang memilih untuk melangkah bersama. Dengan penuh rasa syukur dan keyakinan, kami memutuskan untuk mengikat janji suci.",
  },
];

export default function LoveStorySection() {
  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto overflow-hidden text-[#fbf8f2]">
      {/* Section Header */}
      <div className="reveal text-center max-w-xl mx-auto mb-16 space-y-3">
        <p className="text-4xl sm:text-5xl font-serif italic text-[#dfbf74] drop-shadow gold-shimmer-text">
          Love Story
        </p>
        <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />
        <p className="text-xs text-stone-300 uppercase tracking-widest">
          Kisah Perjalanan Cinta Nurdiana &amp; Thalib
        </p>
      </div>

      {/* Story Timeline Cards */}
      <div className="relative space-y-8 before:absolute before:left-5 sm:before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#dfbf74] before:via-[#ebd397] before:to-[#dfbf74]/20">
        {stories.map((story, index) => (
          <div key={index} className="reveal-scale relative pl-12 sm:pl-16">
            {/* Timeline Botanical Golden Node */}
            <div className="absolute left-0 top-3 z-10 filter drop-shadow-lg animate-pulse">
              <GoldenVineNode className="w-10 h-10 text-[#dfbf74]" />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#ebd397]">
                0{index + 1}
              </span>
            </div>

            <BurgundyCardFrame className="bg-[#3d0710]/95 border-2 border-[#dfbf74]/60 relative overflow-hidden group hover:border-[#dfbf74] transition-all duration-300">
              <GoldenCornerFlourish className="absolute top-1 right-1 w-7 h-7 text-[#dfbf74] opacity-75 rotate-90" />
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-[#ebd397]">
                  {story.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                  {story.text}
                </p>
              </div>
            </BurgundyCardFrame>
          </div>
        ))}
      </div>
    </section>
  );
}

