import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "../preview/preview.css";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preview 5 — Asymmetric Pill — KontentFire",
  description:
    "Hero variant B: editorial split with a vertical 999px pill video and a satellite play CTA.",
  robots: { index: false, follow: false },
};

export default function Preview5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`preview-root ${sofia.variable}`}>{children}</div>;
}
