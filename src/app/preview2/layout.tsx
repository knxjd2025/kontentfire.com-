import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "../preview/preview.css";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preview 2 — Stadium Cinema — KontentFire",
  description:
    "Hero variant A: full-bleed 40px stadium with headline and CTAs overlaid on the video.",
  robots: { index: false, follow: false },
};

export default function Preview2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`preview-root ${sofia.variable}`}>{children}</div>;
}
