import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * /preview/heroes — Three hero proposals using the Mastercard-inspired
 * design system from design.md. Same copy across all three so the
 * design language is the only variable.
 *
 *   A. Stadium Cinema       — full-bleed 40px stadium, content overlaid
 *   B. Asymmetric Pill      — editorial split, vertical 999px pill video
 *   C. Circular Orbit       — circular video centered in a constellation
 */

export const metadata: Metadata = {
  title: "Hero Variants — KontentFire Preview",
  description:
    "Three Mastercard-inspired hero proposals for the KontentFire homepage.",
  robots: { index: false, follow: false },
};

const heroEyebrow = "AI-Powered Content Automation";
const heroH1 = "Set Your Social Media on Fire.";
const heroBody =
  "Automate your social media content with AI. Generate, schedule, and publish posts across LinkedIn, Facebook, Instagram, and Twitter — saving hours every week.";

const platforms = [
  { name: "LinkedIn", style: { top: "16%", left: "8%" } },
  { name: "Instagram", style: { top: "16%", right: "8%" } },
  { name: "Facebook", style: { bottom: "12%", left: "16%" } },
  { name: "X · Twitter", style: { bottom: "12%", right: "16%" } },
] as const;

export default function HeroVariants() {
  return (
    <>
      {/* ============================================================
          NAV — minimal pill, links back to /preview
          ============================================================ */}
      <header className="px-4 md:px-6 lg:px-8">
        <nav className="nav-pill rise r-1">
          <Link href="/preview" className="flex items-center gap-2.5">
            <Image
              src="/logo-transparent.png"
              alt="KontentFire"
              width={48}
              height={48}
              priority
              className="h-9 w-auto block"
              style={{ transform: "translateY(-2px)" }}
            />
            <span
              style={{
                fontSize: 22,
                letterSpacing: "-0.025em",
                lineHeight: 1,
                fontWeight: 500,
              }}
            >
              Kontent
              <span style={{ color: "var(--signal)" }}>Fire</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center" style={{ gap: 32 }}>
            <Link className="nav-link" href="/preview">
              Preview Home
            </Link>
            <Link
              className="nav-link"
              href="/preview/heroes"
              style={{ color: "var(--signal)" }}
            >
              Hero Variants
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://app.kontentfire.com/register"
              className="btn-ink"
            >
              Sign Up Now
            </Link>
          </div>
        </nav>
      </header>

      {/* ============================================================
          INTRO
          ============================================================ */}
      <section className="px-4 md:px-6 lg:px-8 pt-12 md:pt-16 pb-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end rise r-2">
            <div className="lg:col-span-7">
              <span className="t-eyebrow">Three Hero Proposals</span>
              <h1 className="t-h1 mt-6" style={{ maxWidth: 720 }}>
                One copy, three takes on the same system.
              </h1>
            </div>
            <p
              className="lg:col-span-5 t-body-lg"
              style={{ color: "var(--granite)" }}
            >
              Each variant exercises a different geometry from the
              vocabulary — stadium, vertical pill, full circle — so you
              can see how the same content reads across three radii of
              the same family.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          A. STADIUM CINEMA
          ============================================================ */}
      <section className="px-4 md:px-6 lg:px-8 pt-6 pb-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="variant-label rise r-2">
            <span className="num">A</span>
            <span className="name">Stadium Cinema</span>
            <span className="desc">
              Full-bleed 40px stadium frame. Eyebrow, headline and CTAs
              live <em>inside</em> the video — the most atmospheric of the
              three. Lets the footage do the heavy lifting.
            </span>
          </div>

          <div className="hero-cinema rise r-3">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
              poster="/logo-transparent.png"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="hero-cinema-vignette" aria-hidden />

            <span className="hero-cinema-chip">
              <span className="live-dot" aria-hidden />
              Live · {heroEyebrow}
            </span>

            <button
              className="hero-cinema-play"
              type="button"
              aria-label="Play hero video"
            />

            <div className="hero-cinema-content">
              <h2 className="t-h1">{heroH1}</h2>
              <p className="t-body-lg body">{heroBody}</p>
              <div className="hero-cinema-cta-row">
                <Link
                  href="https://app.kontentfire.com/register"
                  className="btn-ink"
                >
                  Get Started
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/free-trial" className="btn-outline">
                  Start Free Trial
                </Link>
                <span className="trust">
                  Launch special — 80% off monthly plans
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          B. ASYMMETRIC PILL
          ============================================================ */}
      <section className="px-4 md:px-6 lg:px-8 pt-12 pb-10 hero-pill-stage">
        <div className="max-w-[1240px] mx-auto relative">
          <div className="variant-label rise r-2">
            <span className="num">B</span>
            <span className="name">Asymmetric Pill</span>
            <span className="desc">
              Two-column editorial split. Ghost-watermark "Ignite." behind
              the headline; vertical 999px pill video right with a satellite
              play button. Tight asymmetry, magazine pacing.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12 relative">
            <span
              className="ghost-watermark hidden lg:block"
              style={{ top: 20, left: -8, zIndex: 0 }}
              aria-hidden
            >
              Ignite.
            </span>

            <div
              className="lg:col-span-7 relative rise r-3"
              style={{ zIndex: 2 }}
            >
              <span className="t-eyebrow">{heroEyebrow}</span>
              <h2 className="t-h1 mt-6">{heroH1}</h2>
              <p
                className="t-body-lg mt-7"
                style={{ maxWidth: 480, color: "var(--granite)" }}
              >
                {heroBody}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="https://app.kontentfire.com/register"
                  className="btn-ink"
                >
                  Get Started
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/free-trial" className="btn-outline">
                  Start Free Trial
                </Link>
              </div>
              <p
                className="t-caption mt-7"
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <span style={{ color: "var(--signal)", letterSpacing: 1 }}>
                  ★★★★★
                </span>
                Trusted by 12,000+ creators · 80% off launch
              </p>
            </div>

            <div className="lg:col-span-5 relative rise r-4">
              <svg
                className="hero-pill-arc"
                viewBox="0 0 360 180"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M -40 90 C 80 30, 220 140, 360 50" />
              </svg>

              <div className="pill-video-wrap">
                <div className="pill-video stadium-shadow">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/logo-transparent.png"
                  >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                  </video>
                  <div className="pill-video-overlay" aria-hidden />
                  <span className="pill-video-counter">
                    Watch · 0:42
                  </span>
                  <div className="pill-video-meta">
                    <span>Live demo</span>
                    <span className="duration">EP. 01</span>
                  </div>
                </div>
                <Link
                  href="/free-trial"
                  className="satellite"
                  aria-label="Watch the demo"
                >
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          C. CIRCULAR ORBIT
          ============================================================ */}
      <section className="px-4 md:px-6 lg:px-8 pt-12 pb-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="variant-label rise r-2">
            <span className="num">C</span>
            <span className="name">Circular Orbit</span>
            <span className="desc">
              The video is the center of a constellation — perfect circle,
              four platform satellites, traced orange arcs. Most theatrical
              and most "Mastercard-pure" of the three.
            </span>
          </div>

          <div className="hero-orbit-stage rise r-3">
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

          <div className="hero-orbit-copy rise r-4">
            <span className="t-eyebrow">{heroEyebrow}</span>
            <h2 className="t-h1">{heroH1}</h2>
            <p
              className="t-body-lg mt-6"
              style={{ color: "var(--granite)" }}
            >
              {heroBody}
            </p>
            <div className="hero-orbit-copy-cta">
              <Link
                href="https://app.kontentfire.com/register"
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

      {/* ============================================================
          FOOTNOTE
          ============================================================ */}
      <section className="px-4 md:px-6 lg:px-8 pb-20">
        <div
          className="max-w-[1240px] mx-auto pt-10"
          style={{ borderTop: "1px dashed rgba(20,20,19,0.18)" }}
        >
          <p
            className="t-caption"
            style={{ maxWidth: 720, color: "var(--granite)" }}
          >
            All three reuse <code>/videos/hero-bg.mp4</code> with the
            existing warm grading filter. Buttons, eyebrow, ghost watermark,
            satellite CTA and orbital arc styles are the same primitives
            from <code>preview.css</code> — only the geometry changes.
          </p>
        </div>
      </section>
    </>
  );
}
