"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FloralHeaderDivider } from "./SvgOrnaments";
import { X, ZoomIn, Heart } from "lucide-react";

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
    <section className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      <div className="reveal text-center max-w-xl mx-auto mb-16 space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[#5f755e] font-semibold">
          Galeri Kenangan
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2a3229]">
          Momen Indah Kami
        </h2>
        <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#7e947c]" />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="reveal-scale group relative h-48 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md bg-stone-200 border border-[#e6d7c3]"
          >
            <Image
              src={img.url}
              alt={img.caption}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <p className="text-xs font-serif italic text-[#ebd397]">
                {img.caption}
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-[10px] text-slate-200 uppercase tracking-widest font-semibold">
                <ZoomIn className="w-3.5 h-3.5 text-[#ebd397]" /> Perbesar
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#fdfbf7] rounded-3xl overflow-hidden p-2 sm:p-4 shadow-2xl space-y-3"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
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

            <p className="text-center font-serif italic text-sm text-[#4c5d4b]">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
