import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./preview.css";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preview — KontentFire",
  description:
    "KontentFire homepage preview. Warm cream canvas, extreme-radius vocabulary, circular portraits with satellite CTAs.",
  robots: { index: false, follow: false },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`preview-root ${sofia.variable}`}>{children}</div>;
}
