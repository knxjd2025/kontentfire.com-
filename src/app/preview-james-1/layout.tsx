import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./preview.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-pj1-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pj1-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-pj1-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preview James 1 — KontentFire",
  description:
    "Full-bleed video hero, ember accents, fire-gradient typography. Preview of the Claude Design redesign bundle.",
  robots: { index: false, follow: false },
};

export default function PreviewJames1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`pj1-root cursor-on ${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      {children}
    </div>
  );
}
