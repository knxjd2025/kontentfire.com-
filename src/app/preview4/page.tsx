import Link from "next/link";
import {
  PreviewNav,
  PreviewBody,
  PreviewFooter,
} from "@/components/preview/preview-shell";

const platforms = [
  { name: "LinkedIn", style: { top: "16%", left: "8%" } },
  { name: "Instagram", style: { top: "16%", right: "8%" } },
  { name: "Facebook", style: { bottom: "12%", left: "16%" } },
  { name: "X · Twitter", style: { bottom: "12%", right: "16%" } },
] as const;

/**
 * /preview4 — Hero Variant C: CIRCULAR ORBIT
 *
 * The video is the center of a constellation. Massive cream-on-cream
 * "IGNITE." watermark behind, perfect-circle video portrait at center
 * with a pulsing play button, four platform satellites at the corners
 * connected by traced orange arcs. Most theatrical / most
 * "Mastercard-pure" of the three.
 */
export default function Preview4() {
  return (
    <>
      <PreviewNav />

      <section className="px-4 md:px-6 lg:px-8 pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="hero-orbit-stage rise r-2">
            <span className="hero-orbit-watermark" aria-hidden>
              IGNITE.
            </span>

            <svg
              className="orbit-arc-svg"
              viewBox="0 0 1200 800"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <path d="M 470 290 C 360 240, 280 220, 200 220" />
              <path d="M 730 290 C 840 240, 920 220, 1000 220" />
              <path d="M 460 580 C 420 620, 380 670, 320 700" />
              <path d="M 740 580 C 780 620, 820 670, 880 700" />
            </svg>

            {platforms.map((p) => (
              <div
                key={p.name}
                className="platform-satellite"
                style={p.style as React.CSSProperties}
              >
                <span className="dot" aria-hidden />
                <span>{p.name}</span>
              </div>
            ))}

            <div className="circle-video-portrait">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/logo-transparent.png"
              >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
              <div className="circle-play-overlay">
                <button
                  className="circle-play-btn"
                  type="button"
                  aria-label="Play hero video"
                />
              </div>
            </div>
          </div>

          <div className="hero-orbit-copy rise r-3">
            <span className="t-eyebrow">AI-Powered Content Automation</span>
            <h1 className="t-h1">Set Your Social Media on Fire.</h1>
            <p
              className="t-body-lg mt-6"
              style={{ color: "var(--granite)" }}
            >
              Automate your social media content with AI. Generate, schedule,
              and publish posts across LinkedIn, Facebook, Instagram, and
              Twitter — saving hours every week.
            </p>
            <div className="hero-orbit-copy-cta">
              <Link
                href="https://app.kontentfire.com/login"
                className="btn-ink"
              >
                Get Started
                <span aria-hidden>→</span>
              </Link>
              <Link href="/free-trial" className="btn-outline">
                Start Free Trial
              </Link>
              <span className="trust">80% off · cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <PreviewBody />
      <PreviewFooter />
    </>
  );
}
