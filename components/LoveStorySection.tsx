"use client";

import React from "react";
import { BurgundyCardFrame, FloralHeaderDivider } from "./SvgOrnaments";
import { Heart, Sparkles, Compass } from "lucide-react";

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
        <p className="text-4xl sm:text-5xl font-serif italic text-[#dfbf74] drop-shadow">
          Love Story
        </p>
        <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />
        <p className="text-xs text-stone-300 uppercase tracking-widest">
          Kisah Perjalanan Cinta Nurdiana &amp; Thalib
        </p>
      </div>

      {/* Story Timeline Cards */}
      <div className="space-y-6">
        {stories.map((story, index) => (
          <div key={index} className="reveal-scale">
            <BurgundyCardFrame className="bg-[#3d0710]/85 border-[#dfbf74]/50">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#520d18] border border-[#dfbf74] flex items-center justify-center text-[#dfbf74] shrink-0 font-serif font-bold text-sm">
                  0{index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#ebd397]">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                    {story.text}
                  </p>
                </div>
              </div>
            </BurgundyCardFrame>
          </div>
        ))}
      </div>
    </section>
  );
}
