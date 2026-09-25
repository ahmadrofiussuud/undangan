"use client";

import React from "react";
import Image from "next/image";
import { Clock, MapPin, Navigation } from "lucide-react";
import {
  BurgundyCardFrame,
  FloralHeaderDivider,
  GoldenCornerFlourish,
  GoldIslamicDomeEmblem,
  GoldRingsEmblem,
} from "./SvgOrnaments";
import { GoldenSparkleParticles } from "./GoldenSparkleParticles";

export default function EventDetailSection() {
  const mapDirectionsUrl =
    "https://maps.google.com/?q=Plataran+Dharmawangsa+Jakarta";

  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden text-[#fbf8f2]">
      {/* Floating Golden Sparkle Particles */}
      <GoldenSparkleParticles />
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/burgundy_bg.jpg"
          alt="Burgundy Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-[#2b040a]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="reveal text-center max-w-xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbf74] font-semibold">
            Rangkaian Acara
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#dfbf74] drop-shadow gold-shimmer-text">
            Waktu &amp; Tempat
          </h2>
          <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Card 1: Akad Nikah */}
          <div className="reveal-left">
            <BurgundyCardFrame className="h-full flex flex-col justify-between text-center space-y-6 bg-[#520d18]/95 relative overflow-hidden group">
              {/* Corner Flourishes */}
              <GoldenCornerFlourish className="absolute top-1 left-1 w-8 h-8 text-[#dfbf74] opacity-80" />
              <GoldenCornerFlourish className="absolute top-1 right-1 w-8 h-8 text-[#dfbf74] opacity-80 rotate-90" />
              
              <div className="space-y-3 pt-2">
                <div className="flex justify-center mb-1">
                  <GoldIslamicDomeEmblem className="w-12 h-10 text-[#dfbf74] filter drop-shadow-md animate-pulse" />
                </div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#dfbf74] text-[#2b040a] shadow-md">
                  Akad Nikah
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#ebd397]">
                  Kamis, 17 Desember 2026
                </h3>
                <p className="text-sm text-stone-200 flex items-center justify-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#dfbf74]" />
                  Pukul 09.00 WIB - Selesai
                </p>
              </div>

              <div className="border-t border-[#dfbf74]/40 pt-6 space-y-2">
                <p className="font-semibold text-base text-[#ebd397] flex items-center justify-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#dfbf74]" />
                  Plataran Dharmawangsa
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Jl. Dharmawangsa Raya No. 6, Kebayoran Baru, Jakarta Selatan
                </p>
              </div>
            </BurgundyCardFrame>
          </div>

          {/* Card 2: Resepsi Pernikahan */}
          <div className="reveal-right">
            <BurgundyCardFrame className="h-full flex flex-col justify-between text-center space-y-6 bg-[#520d18]/95 relative overflow-hidden group">
              {/* Corner Flourishes */}
              <GoldenCornerFlourish className="absolute top-1 left-1 w-8 h-8 text-[#dfbf74] opacity-80" />
              <GoldenCornerFlourish className="absolute top-1 right-1 w-8 h-8 text-[#dfbf74] opacity-80 rotate-90" />

              <div className="space-y-3 pt-2">
                <div className="flex justify-center mb-1">
                  <GoldRingsEmblem className="w-12 h-10 text-[#dfbf74] filter drop-shadow-md animate-pulse" />
                </div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ebd397] text-[#2b040a] shadow-md">
                  Resepsi Pernikahan
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#ebd397]">
                  Kamis, 17 Desember 2026
                </h3>
                <p className="text-sm text-stone-200 flex items-center justify-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#dfbf74]" />
                  Pukul 11.00 WIB - Selesai
                </p>
              </div>

              <div className="border-t border-[#dfbf74]/40 pt-6 space-y-2">
                <p className="font-semibold text-base text-[#ebd397] flex items-center justify-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#dfbf74]" />
                  Plataran Dharmawangsa
                </p>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Jl. Dharmawangsa Raya No. 6, Kebayoran Baru, Jakarta Selatan
                </p>
              </div>
            </BurgundyCardFrame>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="reveal-scale max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#dfbf74] bg-[#2b040a]">
          <div className="relative w-full h-80 sm:h-96">
            <iframe
              title="Lokasi Acara Pernikahan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1264878415414!2d106.79727407499066!3d-6.247055993741364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16d99999999%3A0x9999999999999999!2sPlataran%20Dharmawangsa!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter brightness-95"
            />
          </div>

          <div className="p-4 bg-[#3d0710] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-t border-[#dfbf74]/40">
            <div>
              <p className="font-serif font-semibold text-sm text-[#ebd397]">
                Plataran Dharmawangsa
              </p>
              <p className="text-xs text-stone-300">
                Jl. Dharmawangsa Raya No. 6, Kebayoran Baru, Jakarta Selatan
              </p>
            </div>
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#dfbf74] hover:bg-[#ebd397] text-[#2b040a] text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4 text-[#2b040a]" />
              <span>Buka Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
