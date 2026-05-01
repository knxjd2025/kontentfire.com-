import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "../preview/preview.css";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preview 3 — Full-Bleed Cinema — KontentFire",
  description:
    "Hero variant D: 100vh full-bleed video with content overlaid. The most cinematic of the set.",
  robots: { index: false, follow: false },
};

export default function Preview3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`preview-root ${sofia.variable}`}>{children}</div>;
}
