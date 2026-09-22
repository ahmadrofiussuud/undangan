"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  fetchRsvpList,
  submitRsvp,
  RsvpEntry,
} from "@/lib/supabaseClient";
import { FloralHeaderDivider, GoldenFrameBorder } from "./SvgOrnaments";
import { Send, CheckCircle2, MessageSquare, Users, User, Heart } from "lucide-react";

export default function RsvpSection({ defaultGuestName }: { defaultGuestName?: string }) {
  const [guestName, setGuestName] = useState(defaultGuestName || "");
  const [attendance, setAttendance] = useState<"hadir" | "tidak">("hadir");
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [wishes, setWishes] = useState<RsvpEntry[]>([]);
  const [loadingWishes, setLoadingWishes] = useState(true);

  useEffect(() => {
    if (defaultGuestName) {
      setGuestName(defaultGuestName);
    }
    loadWishes();
  }, [defaultGuestName]);

  const loadWishes = async () => {
    setLoadingWishes(true);
    const data = await fetchRsvpList();
    setWishes(data);
    setLoadingWishes(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const result = await submitRsvp({
      guest_name: guestName.trim(),
      attendance,
      guest_count: attendance === "hadir" ? guestCount : 0,
      message: message.trim(),
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitSuccess(true);
      setMessage("");
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#7e947c", "#c5a059", "#ebd397"],
        });
      } catch (err) {
        // ignore
      }
      // Refresh list
      loadWishes();
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section id="rsvp" className="relative py-20 px-4 max-w-4xl mx-auto overflow-hidden">
      {/* Title */}
      <div className="reveal text-center max-w-xl mx-auto mb-14 space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-[#5f755e] font-semibold">
          Konfirmasi Kehadiran &amp; Ucapan
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2a3229]">
          RSVP &amp; Buku Tamu
        </h2>
        <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#7e947c]" />
      </div>

      {/* Form Card */}
      <div className="reveal-scale mb-16">
        <GoldenFrameBorder className="bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-[#2a3229] text-center border-b border-[#e6d7c3] pb-4">
              Kirim Konfirmasi &amp; Doa Restu
            </h3>

            {submitSuccess && (
              <div className="p-4 rounded-xl bg-[#f4f6f4] border border-[#7e947c] text-[#3d4a3c] text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-[#5f755e] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Terima kasih atas konfirmasinya!</p>
                  <p className="text-xs text-[#5f755e] mt-0.5">
                    Pesan &amp; ucapan Anda telah berhasil tersimpan dalam buku tamu kami.
                  </p>
                </div>
              </div>
            )}

            {/* Nama Tamu */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d4a3c]">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#7e947c]" />
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-[#e6d7c3] bg-[#fdfbf7] focus:outline-none focus:ring-2 focus:ring-[#7e947c] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Radio Konfirmasi Kehadiran */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d4a3c]">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance("hadir")}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border flex items-center justify-center gap-2 transition-all ${
                    attendance === "hadir"
                      ? "bg-[#5f755e] text-white border-[#5f755e] shadow"
                      : "bg-[#fdfbf7] text-[#4c5d4b] border-[#e6d7c3] hover:bg-stone-100"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Saya Hadir</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance("tidak")}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border flex items-center justify-center gap-2 transition-all ${
                    attendance === "tidak"
                      ? "bg-[#2a3229] text-white border-[#2a3229] shadow"
                      : "bg-[#fdfbf7] text-[#4c5d4b] border-[#e6d7c3] hover:bg-stone-100"
                  }`}
                >
                  <span>Maaf, Tidak Hadir</span>
                </button>
              </div>
            </div>

            {/* Jumlah Tamu (hanya muncul jika Hadir) */}
            {attendance === "hadir" && (
              <div className="space-y-2 animate-fade-in">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d4a3c]">
                  Jumlah Tamu Yang Hadir
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-[#7e947c]" />
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-[#e6d7c3] bg-[#fdfbf7] focus:outline-none focus:ring-2 focus:ring-[#7e947c] transition-all"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4 Orang / Keluarga</option>
                  </select>
                </div>
              </div>
            )}

            {/* Pesan & Ucapan */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3d4a3c]">
                Ucapan &amp; Doa Restu
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tuliskan ucapan selamat dan doa terbaik untuk kedua mempelai..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 text-sm rounded-xl border border-[#e6d7c3] bg-[#fdfbf7] focus:outline-none focus:ring-2 focus:ring-[#7e947c] focus:border-transparent transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#5f755e] hover:bg-[#4c5d4b] text-white font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Mengirim...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#ebd397]" />
                  <span>Kirim Ucapan</span>
                </>
              )}
            </button>
          </form>
        </GoldenFrameBorder>
      </div>

      {/* Guestbook List (Chat Bubble style) */}
      <div className="reveal space-y-6">
        <div className="flex items-center justify-between border-b border-[#e6d7c3] pb-4">
          <h3 className="text-lg font-serif font-bold text-[#2a3229] flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#c5a059]" />
            Buku Tamu &amp; Ucapan ({wishes.length})
          </h3>
          <span className="text-xs text-[#7e947c]">Terbaru</span>
        </div>

        {loadingWishes ? (
          <div className="py-12 text-center text-xs text-[#7e947c]">
            Memuat ucapan tamu...
          </div>
        ) : wishes.length === 0 ? (
          <div className="py-12 text-center text-xs text-[#7e947c]">
            Belum ada ucapan. Jadilah yang pertama memberikan doa terbaik!
          </div>
        ) : (
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {wishes.map((item, index) => (
              <div
                key={item.id || index}
                className="p-4 rounded-2xl bg-white border border-[#e6d7c3] shadow-sm space-y-2 hover:border-[#c5a059] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#f4f6f4] text-[#5f755e] font-serif font-bold flex items-center justify-center text-xs border border-[#c8d3c7]">
                      {item.guest_name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm text-[#2a3229]">
                        {item.guest_name}
                      </h4>
                      <span
                        className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          item.attendance === "hadir"
                            ? "bg-[#e4e9e4] text-[#4c5d4b]"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {item.attendance === "hadir"
                          ? `Hadir (${item.guest_count || 1} orang)`
                          : "Tidak Hadir"}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-stone-400">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                        })
                      : "Baru saja"}
                  </span>
                </div>
                <p className="text-xs text-[#4c5d4b] leading-relaxed pt-1 pl-10 italic">
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
