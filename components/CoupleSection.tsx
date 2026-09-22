"use client";

import React from "react";
import Image from "next/image";
import { OvalLaceBorder, BurgundyCardFrame, FloralHeaderDivider } from "./SvgOrnaments";

export default function CoupleSection() {
  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden text-[#fbf8f2]">
      {/* Texture Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/burgundy_bg.jpg"
          alt="Burgundy Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-[#2b040a]/85" />
      </div>

      <div className="relative z-10">
        {/* Quran Quote Card with Oval Lace Border & Hanging Tassel (NO floral image header) */}
        <div className="reveal mb-16">
          <OvalLaceBorder>
            <div className="text-center space-y-4 py-4">
              <p className="text-3xl sm:text-4xl font-serif gold-shimmer-text font-bold">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#dfbf74] font-semibold">
                Maha Suci Allah SWT
              </p>
              <blockquote className="text-xs sm:text-sm font-serif italic text-stone-100 leading-relaxed max-w-md mx-auto">
                &ldquo;Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasang-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.&rdquo;
              </blockquote>
              <cite className="block text-xs font-semibold text-[#ebd397] not-italic tracking-widest uppercase pt-1">
                — QS. Ar-Rum: 21
              </cite>
            </div>
          </OvalLaceBorder>
        </div>

        {/* Opening Intro Copy */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs sm:text-sm font-light text-stone-200 leading-relaxed px-4">
            Dengan memohon rahmat &amp; ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada pernikahan kami:
          </p>
          <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />
        </div>

        {/* Main Couple Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Bride: Nurdiana Kholida Zain, S. Kep. */}
          <div className="reveal-left space-y-6 text-center">
            <BurgundyCardFrame className="max-w-sm mx-auto bg-[#520d18]/90">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-4 border-[#dfbf74]">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Nurdiana Kholida Zain, S. Kep."
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </BurgundyCardFrame>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#ebd397] drop-shadow gold-shimmer-text">
                Nurdiana Kholida Zain, S. Kep.
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#dfbf74] font-medium">
                Mempelai Wanita
              </p>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
                Putri Pertama dari <br />
                <span className="font-semibold text-white">Bpk. Alm. M Zainal Alim</span> &amp;{" "}
                <span className="font-semibold text-white">Ibu Sitti Azizah</span>
              </p>
            </div>
          </div>

          {/* Groom: Moh. Thalib, S.T. */}
          <div className="reveal-right space-y-6 text-center">
            <BurgundyCardFrame className="max-w-sm mx-auto bg-[#520d18]/90">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-4 border-[#dfbf74]">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Moh. Thalib, S.T."
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </BurgundyCardFrame>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#ebd397] drop-shadow gold-shimmer-text">
                Moh. Thalib, S.T.
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#dfbf74] font-medium">
                Mempelai Pria
              </p>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
                Putra Pertama dari <br />
                <span className="font-semibold text-white">Bpk. Moh Suri</span> &amp;{" "}
                <span className="font-semibold text-white">Ibu Hozaimah</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
