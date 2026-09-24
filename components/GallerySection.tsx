"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FloralHeaderDivider, GoldenCornerFlourish } from "./SvgOrnaments";
import { GoldenSparkleParticles } from "./GoldenSparkleParticles";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    caption: "Sweet Moments & Forever Promise",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    caption: "Pre-wedding Outdoor Photography",
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    caption: "Authentic Romantic Couple",
  },
  {
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    caption: "Floral Wedding Decoration Detail",
  },
  {
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    caption: "The Wedding Rings & Promise",
  },
  {
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    caption: "Golden Sunset Pre-wedding Walk",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden text-[#fbf8f2]">
      {/* Golden Sparkles Overlay */}
      <GoldenSparkleParticles />

      {/* Texture Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/burgundy_bg.jpg"
          alt="Burgundy Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-[#3d0710]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="reveal text-center max-w-xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbf74] font-semibold">
            Galeri Kenangan
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#dfbf74] drop-shadow">
            Momen Indah Kami
          </h2>
          <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="reveal-scale group relative h-52 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-2xl bg-[#520d18] border-2 border-[#dfbf74] hover:scale-[1.02] transition-transform duration-500"
            >
              <GoldenCornerFlourish className="absolute top-1 left-1 z-20 w-6 h-6 text-[#dfbf74] opacity-80 pointer-events-none animate-corner-sway" />
              <GoldenCornerFlourish className="absolute bottom-1 right-1 z-20 w-6 h-6 text-[#dfbf74] opacity-80 pointer-events-none rotate-180 animate-corner-sway" />

              <Image
                src={img.url}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white z-10">
                <p className="text-xs font-serif italic text-[#ebd397]">
                  {img.caption}
                </p>
                <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-slate-200 uppercase tracking-widest font-semibold">
                  <ZoomIn className="w-3.5 h-3.5 text-[#dfbf74]" /> Perbesar
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#3d0710] rounded-3xl overflow-hidden p-3 sm:p-5 shadow-2xl border-2 border-[#dfbf74] space-y-3"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-[#dfbf74] hover:bg-black transition-colors border border-[#dfbf74]/50"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <p className="text-center font-serif italic text-sm text-[#ebd397]">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
