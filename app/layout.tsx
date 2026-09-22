import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Rifa & Rizky",
  description:
    "Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami (Rifa & Rizky).",
  metadataBase: new URL("https://undangandiana.vercel.app"),
  openGraph: {
    title: "The Wedding of Rifa & Rizky",
    description: "Undangan Pernikahan Digital Rifa & Rizky - 20 Desember 2026",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rifa & Rizky Wedding",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#fdfbf7] text-[#2b352a] font-sans antialiased selection:bg-[#7e947c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
