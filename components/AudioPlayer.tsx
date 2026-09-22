"use client";

import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, Disc } from "lucide-react";

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function AudioPlayer({ isPlaying, setIsPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Audio stream URL (Romantic Acoustic Wedding Track - Karena Bersamamu)
  const AUDIO_URL =
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a74e53.mp3?filename=sweet-romantic-acoustic-guitar-wedding-10926.mp3";

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio autoplay blocked:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm">
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        loop
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="flex items-center gap-3 p-3 rounded-full bg-[#3d0710]/95 border-2 border-[#dfbf74]/70 text-[#fbf8f2] shadow-2xl backdrop-blur-md">
        {/* Animated Vinyl Icon */}
        <div
          onClick={togglePlay}
          className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-[#520d18] border border-[#dfbf74] shrink-0 cursor-pointer ${
            isPlaying ? "animate-spin-slow" : ""
          }`}
        >
          <Disc className="w-6 h-6 text-[#dfbf74]" />
        </div>

        {/* Track Title & Seekbar */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <p className="font-serif italic font-semibold text-[#ebd397] truncate">
              Karena Bersamamu (Dunia Terasa Indah)
            </p>
            <span className="text-[9px] uppercase tracking-wider text-stone-300 font-medium ml-1">
              {isPlaying ? "Playing" : "Paused"}
            </span>
          </div>
          {/* Progress bar line */}
          <div className="w-full h-1.5 bg-[#14281a] rounded-full overflow-hidden border border-[#dfbf74]/30">
            <div
              className="h-full bg-gradient-to-r from-[#dfbf74] to-[#ebd397] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="p-2 rounded-full bg-[#dfbf74] text-[#3d0710] hover:scale-105 transition-transform shrink-0 shadow-md"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}
