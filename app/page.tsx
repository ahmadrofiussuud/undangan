"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import OpeningCardSection from "@/components/OpeningCardSection";
import AudioPlayer from "@/components/AudioPlayer";
import CoupleSection from "@/components/CoupleSection";
import CountdownSection from "@/components/CountdownSection";
import EventDetailSection from "@/components/EventDetailSection";
import LoveStorySection from "@/components/LoveStorySection";
import GallerySection from "@/components/GallerySection";
import RsvpSection from "@/components/RsvpSection";
import DigitalGiftSection from "@/components/DigitalGiftSection";
import FooterSection from "@/components/FooterSection";

function InvitationContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Bapak/Ibu/Saudara/i";

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize IntersectionObserver for smooth 60fps GPU scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.15,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [isOpen]);

  // Handle Opening Invitation
  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);

    // Smooth scroll to main content section
    setTimeout(() => {
      const contentEl = document.getElementById("content");
      if (contentEl) {
        contentEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <main className="relative min-h-screen bg-[#14281a] text-[#fbf8f2]">
      {/* Fullscreen Hero Cover (Scroll Locked until opened) */}
      <HeroSection
        guestName={guestName}
        isOpen={isOpen}
        onOpenInvitation={handleOpenInvitation}
      />

      {/* Floating Audio Player Bar */}
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Main Invitation Content */}
      <div id="content" className={isOpen ? "block" : "hidden"}>
        {/* Dedicated Opening Card addressed to Guest Name */}
        <OpeningCardSection guestName={guestName !== "Bapak/Ibu/Saudara/i" ? guestName : ""} />

        {/* Couple Profiles & Surah Ar-Rum Quote (NO floral image header) */}
        <CoupleSection />

        {/* Countdown Timer & Save the Date */}
        <CountdownSection />

        {/* Event Timing & Location Map */}
        <EventDetailSection />

        {/* Love Story Timeline */}
        <LoveStorySection />

        {/* Photo Gallery */}
        <GallerySection />

        {/* RSVP Form & Guestbook */}
        <RsvpSection defaultGuestName={guestName !== "Bapak/Ibu/Saudara/i" ? guestName : ""} />

        {/* Digital Gift */}
        <DigitalGiftSection />

        {/* Footer */}
        <FooterSection />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#14281a] text-[#dfbf74] font-serif">
          <div className="animate-pulse text-center space-y-2">
            <h1 className="text-2xl font-bold">Nurdiana &amp; Thalib Wedding</h1>
            <p className="text-xs uppercase tracking-widest text-stone-300">Memuat Undangan...</p>
          </div>
        </div>
      }
    >
      <InvitationContent />
    </Suspense>
  );
}
