import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "../preview/preview.css";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preview 4 — Circular Orbit — KontentFire",
  description:
    "Hero variant C: circular video centered in a constellation of platform satellites with traced orange arcs.",
  robots: { index: false, follow: false },
};

export default function Preview4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`preview-root ${sofia.variable}`}>{children}</div>;
}
