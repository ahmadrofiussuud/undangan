"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";
import {
  fetchRsvpList,
  submitRsvp,
  RsvpEntry,
} from "@/lib/supabaseClient";
import { FloralHeaderDivider, BurgundyCardFrame } from "./SvgOrnaments";
import { Send, CheckCircle2, MessageSquare, Users, User } from "lucide-react";

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
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#dfbf74", "#ebd397", "#6e1523"],
        });
      } catch (err) {
        // ignore
      }
      loadWishes();
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  return (
    <section id="rsvp" className="relative py-20 px-4 max-w-4xl mx-auto overflow-hidden text-[#fbf8f2]">
      {/* Texture Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/burgundy_bg.jpg"
          alt="Burgundy Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-[#2b040a]/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <div className="reveal text-center max-w-xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#dfbf74] font-semibold">
            Konfirmasi Kehadiran &amp; Ucapan
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#dfbf74] drop-shadow">
            RSVP &amp; Buku Tamu
          </h2>
          <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />
        </div>

        {/* Form Card */}
        <div className="reveal-scale mb-16">
          <BurgundyCardFrame className="bg-[#520d18]/95 border-2 border-[#dfbf74]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-serif font-semibold text-[#ebd397] text-center border-b border-[#dfbf74]/40 pb-4">
                Kirim Konfirmasi &amp; Doa Restu
              </h3>

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-400 text-emerald-100 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Terima kasih atas konfirmasinya!</p>
                    <p className="text-xs text-emerald-200 mt-0.5">
                      Pesan &amp; ucapan Anda telah berhasil tersimpan dalam buku tamu kami.
                    </p>
                  </div>
                </div>
              )}

              {/* Nama Tamu */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbf74]">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#dfbf74]" />
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda..."
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-[#dfbf74]/50 bg-[#2b040a]/90 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#dfbf74] transition-all"
                  />
                </div>
              </div>

              {/* Radio Konfirmasi Kehadiran */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbf74]">
                  Konfirmasi Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance("hadir")}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-medium border flex items-center justify-center gap-2 transition-all ${
                      attendance === "hadir"
                        ? "bg-[#dfbf74] text-[#2b040a] border-[#dfbf74] font-bold shadow-lg"
                        : "bg-[#2b040a]/80 text-stone-300 border-[#dfbf74]/30 hover:bg-[#3d0710]"
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
                        ? "bg-[#dfbf74] text-[#2b040a] border-[#dfbf74] font-bold shadow-lg"
                        : "bg-[#2b040a]/80 text-stone-300 border-[#dfbf74]/30 hover:bg-[#3d0710]"
                    }`}
                  >
                    <span>Maaf, Tidak Hadir</span>
                  </button>
                </div>
              </div>

              {/* Jumlah Tamu */}
              {attendance === "hadir" && (
                <div className="space-y-2 animate-fade-in">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbf74]">
                    Jumlah Tamu Yang Hadir
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-[#dfbf74]" />
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-[#dfbf74]/50 bg-[#2b040a]/90 text-white focus:outline-none focus:ring-2 focus:ring-[#dfbf74] transition-all"
                    >
                      <option value={1} className="bg-[#2b040a]">1 Orang</option>
                      <option value={2} className="bg-[#2b040a]">2 Orang</option>
                      <option value={3} className="bg-[#2b040a]">3 Orang</option>
                      <option value={4} className="bg-[#2b040a]">4 Orang / Keluarga</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Pesan & Ucapan */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#dfbf74]">
                  Ucapan &amp; Doa Restu
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan ucapan selamat dan doa terbaik untuk kedua mempelai..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 text-sm rounded-xl border border-[#dfbf74]/50 bg-[#2b040a]/90 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#dfbf74] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#dfbf74] hover:bg-[#ebd397] text-[#2b040a] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Mengirim...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#2b040a]" />
                    <span>Kirim Ucapan</span>
                  </>
                )}
              </button>
            </form>
          </BurgundyCardFrame>
        </div>

        {/* Guestbook List */}
        <div className="reveal space-y-6">
          <div className="flex items-center justify-between border-b border-[#dfbf74]/40 pb-4">
            <h3 className="text-lg font-serif font-bold text-[#ebd397] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dfbf74]" />
              Buku Tamu &amp; Ucapan ({wishes.length})
            </h3>
            <span className="text-xs text-[#dfbf74]">Terbaru</span>
          </div>

          {loadingWishes ? (
            <div className="py-12 text-center text-xs text-[#dfbf74]">
              Memuat ucapan tamu...
            </div>
          ) : wishes.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#dfbf74]">
              Belum ada ucapan. Jadilah yang pertama memberikan doa terbaik!
            </div>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {wishes.map((item, index) => (
                <div
                  key={item.id || index}
                  className="p-4 rounded-2xl bg-[#520d18]/90 border border-[#dfbf74]/50 shadow-md space-y-2 hover:border-[#dfbf74] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#3d0710] text-[#dfbf74] font-serif font-bold flex items-center justify-center text-xs border border-[#dfbf74]/50">
                        {item.guest_name.charAt(0).toUpperCase()}
                      </span>
                      <div>
                        <h4 className="font-semibold text-sm text-[#ebd397]">
                          {item.guest_name}
                        </h4>
                        <span
                          className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            item.attendance === "hadir"
                              ? "bg-[#dfbf74] text-[#2b040a]"
                              : "bg-[#2b040a] text-stone-300"
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
                  <p className="text-xs text-stone-200 leading-relaxed pt-1 pl-10 italic">
                    &ldquo;{item.message}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
