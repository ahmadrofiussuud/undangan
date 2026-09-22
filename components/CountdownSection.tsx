"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { FloralHeaderDivider } from "./SvgOrnaments";

export default function CountdownSection() {
  const targetDate = new Date("2026-12-17T09:00:00+07:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Pernikahan Nurdiana & Thalib"
  )}&dates=20261217T020000Z/20261217T070000Z&details=${encodeURIComponent(
    "Acara Pernikahan Nurdiana Kholida Zain & Moh. Thalib. Mohon kehadiran dan doanya."
  )}&location=${encodeURIComponent("Plataran Dharmawangsa, Jakarta")}`;

  return (
    <section className="relative py-20 px-4 bg-[#14281a] text-[#fbf8f2] overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#dfbf74_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        {/* Save the Date */}
        <div className="reveal space-y-2">
          <p className="text-4xl sm:text-6xl font-serif italic text-[#dfbf74] drop-shadow-md">
            Save the Date
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-200 font-semibold pt-1">
            Kamis, 17 Desember 2026
          </p>
          <FloralHeaderDivider className="w-40 h-8 mx-auto text-[#dfbf74]" />
        </div>

        {/* Akad & Resepsi Timing Badges */}
        <div className="reveal-scale grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="p-4 rounded-2xl bg-[#520d18]/90 border-2 border-[#dfbf74]/60 shadow-xl text-center space-y-1">
            <span className="text-xs font-serif italic text-[#dfbf74] uppercase tracking-wider block">
              Akad Nikah
            </span>
            <p className="text-lg font-bold text-white">09.00 WIB</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#520d18]/90 border-2 border-[#dfbf74]/60 shadow-xl text-center space-y-1">
            <span className="text-xs font-serif italic text-[#dfbf74] uppercase tracking-wider block">
              Resepsi
            </span>
            <p className="text-lg font-bold text-white">11.00 WIB</p>
          </div>
        </div>

        {/* Countdown Grid */}
        <div className="reveal-scale grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#3d0710]/90 backdrop-blur-md border border-[#dfbf74]/50 shadow-xl"
            >
              <span className="text-2xl sm:text-4xl font-serif font-bold text-[#ebd397] tabular-nums">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-300 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Add to Calendar Button */}
        <div className="reveal pt-2">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#dfbf74] hover:bg-[#ebd397] text-[#2b040a] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 border border-[#dfbf74]"
          >
            <Calendar className="w-4 h-4 text-[#2b040a]" />
            <span>Simpan Tanggal ke Google Calendar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
