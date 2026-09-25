"use client";

import React from "react";

export function FallingPetalsOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Petal 1 - Gold */}
      <div className="absolute top-0 left-[8%] animate-petal-1">
        <svg className="w-5 h-6 text-[#dfbf74]/70 filter drop-shadow-[0_2px_8px_rgba(223,191,116,0.5)]" viewBox="0 0 30 35" fill="currentColor">
          <path d="M15 0 C25 10, 30 22, 15 35 C0 22, 5 10, 15 0 Z" />
        </svg>
      </div>

      {/* Petal 2 - Rose Pink */}
      <div className="absolute top-0 left-[25%] animate-petal-2">
        <svg className="w-4 h-5 text-rose-300/60 filter drop-shadow-[0_2px_6px_rgba(244,63,94,0.4)]" viewBox="0 0 30 35" fill="currentColor">
          <path d="M15 0 C25 10, 30 22, 15 35 C0 22, 5 10, 15 0 Z" />
        </svg>
      </div>

      {/* Petal 3 - Gold Light */}
      <div className="absolute top-0 left-[45%] animate-petal-3">
        <svg className="w-6 h-7 text-[#ebd397]/75 filter drop-shadow-[0_2px_10px_rgba(235,211,151,0.6)]" viewBox="0 0 30 35" fill="currentColor">
          <path d="M15 0 C25 10, 30 22, 15 35 C0 22, 5 10, 15 0 Z" />
        </svg>
      </div>

      {/* Petal 4 - Gold */}
      <div className="absolute top-0 left-[68%] animate-petal-1 [animation-delay:4s]">
        <svg className="w-5 h-6 text-[#dfbf74]/70 filter drop-shadow-[0_2px_8px_rgba(223,191,116,0.5)]" viewBox="0 0 30 35" fill="currentColor">
          <path d="M15 0 C25 10, 30 22, 15 35 C0 22, 5 10, 15 0 Z" />
        </svg>
      </div>

      {/* Petal 5 - Rose Pink */}
      <div className="absolute top-0 left-[85%] animate-petal-2 [animation-delay:2s]">
        <svg className="w-4 h-5 text-rose-200/60 filter drop-shadow-[0_2px_6px_rgba(244,63,94,0.4)]" viewBox="0 0 30 35" fill="currentColor">
          <path d="M15 0 C25 10, 30 22, 15 35 C0 22, 5 10, 15 0 Z" />
        </svg>
      </div>
    </div>
  );
}
