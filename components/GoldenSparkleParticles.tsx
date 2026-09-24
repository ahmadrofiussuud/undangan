"use client";

import React from "react";

export function GoldenSparkleParticles({ className = "inset-0" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none overflow-hidden z-10 ${className}`}>
      {/* Sparkle 1 */}
      <div className="absolute top-[15%] left-[10%] text-[#ebd397] animate-sparkle-1">
        <svg className="w-4 h-4 filter drop-shadow-[0_0_8px_#dfbf74]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Sparkle 2 */}
      <div className="absolute top-[45%] right-[12%] text-[#dfbf74] animate-sparkle-2">
        <svg className="w-5 h-5 filter drop-shadow-[0_0_10px_#ebd397]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Sparkle 3 */}
      <div className="absolute bottom-[20%] left-[20%] text-[#ebd397] animate-sparkle-3">
        <svg className="w-3.5 h-3.5 filter drop-shadow-[0_0_6px_#dfbf74]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Sparkle 4 */}
      <div className="absolute top-[75%] right-[25%] text-[#dfbf74] animate-sparkle-1">
        <svg className="w-4 h-4 filter drop-shadow-[0_0_8px_#ebd397]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
    </div>
  );
}
