"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Copy, Check, Gift, CreditCard, Smartphone } from "lucide-react";
import { BurgundyCardFrame, FloralHeaderDivider, GoldenCornerFlourish, VintageWaxSeal } from "./SvgOrnaments";

const accounts = [
  {
    type: "BCA",
    accountNumber: "2010471926",
    accountHolder: "DIANA KHOLIDA ZAIN",
    icon: CreditCard,
  },
  {
    type: "DANA",
    accountNumber: "083853582948",
    accountHolder: "MOH. THALIB",
    icon: Smartphone,
  },
];

export default function DigitalGiftSection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (accNumber: string) => {
    navigator.clipboard.writeText(accNumber);
    setCopiedAccount(accNumber);
    setTimeout(() => setCopiedAccount(null), 3000);
  };

  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto overflow-hidden text-[#fbf8f2]">
      {/* Background Image: Deep Burgundy Texture with Gold Damask */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/burgundy_bg.jpg"
          alt="Burgundy Luxury Background"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-[#3d0710]/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title & Gift Illustration */}
        <div className="reveal text-center max-w-xl mx-auto mb-14 space-y-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#520d18] border-2 border-[#dfbf74] flex items-center justify-center shadow-xl">
            <Gift className="w-8 h-8 text-[#dfbf74]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif italic text-[#dfbf74] drop-shadow">
            Wedding Gift
          </h2>
          <FloralHeaderDivider className="w-44 h-10 mx-auto text-[#dfbf74]" />
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-md mx-auto pt-2 font-light">
            Doa restu dan kehadiran Anda merupakan karunia yang sangat berarti bagi kami. Namun, jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui di bawah ini:
          </p>
        </div>

        {/* Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map((acc, index) => {
            const IconComp = acc.icon;
            const isCopied = copiedAccount === acc.accountNumber;

            return (
              <div key={index} className="reveal-scale">
                <BurgundyCardFrame className="text-center space-y-4 bg-[#520d18]/95 relative overflow-hidden group">
                  <GoldenCornerFlourish className="absolute top-1 left-1 w-7 h-7 text-[#dfbf74] opacity-75" />
                  <GoldenCornerFlourish className="absolute top-1 right-1 w-7 h-7 text-[#dfbf74] opacity-75 rotate-90" />
                  
                  <div className="flex items-center justify-between border-b border-[#dfbf74]/40 pb-3 pt-1">
                    <span className="font-serif font-bold text-lg text-[#ebd397] flex items-center gap-2">
                      <IconComp className="w-5 h-5 text-[#dfbf74]" />
                      {acc.type}
                    </span>
                    <VintageWaxSeal className="w-9 h-9" />
                  </div>

                  <div className="space-y-1 py-1">
                    <p className="text-[11px] text-stone-300 uppercase tracking-widest">
                      Nomor Rekening / E-Wallet
                    </p>
                    <p className="text-2xl font-mono font-bold text-white tracking-wider">
                      {acc.accountNumber}
                    </p>
                    <p className="text-xs text-[#ebd397] font-medium pt-1">
                      a.n <span className="font-semibold text-white">{acc.accountHolder}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(acc.accountNumber)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                      isCopied
                        ? "bg-emerald-600 text-white border border-emerald-400"
                        : "bg-[#ebd397] hover:bg-[#dfbf74] text-[#2b040a] border border-[#dfbf74]"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Salin Berhasil!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Salin No. Rekening</span>
                      </>
                    )}
                  </button>
                </BurgundyCardFrame>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

