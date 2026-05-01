import Link from "next/link";
import {
  PreviewNav,
  PreviewBody,
  PreviewFooter,
} from "@/components/preview/preview-shell";

/**
 * /preview5 — Hero Variant B: ASYMMETRIC PILL
 *
 * Two-column editorial split. Ghost-watermark "Ignite." behind the
 * headline on the left. Vertical 999px-radius pill video on the right
 * with a satellite play button protruding bottom-right and a thin
 * orange orbital arc curving between the watermark and the pill.
 */
export default function Preview5() {
  return (
    <>
      <PreviewNav />

      <section className="px-4 md:px-6 lg:px-8 pt-12 md:pt-16 pb-12 md:pb-16 hero-pill-stage">
        <div className="max-w-[1240px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            <span
              className="ghost-watermark hidden lg:block"
              style={{ top: 20, left: -8, zIndex: 0 }}
              aria-hidden
            >
              Ignite.
            </span>

            <div
              className="lg:col-span-7 relative rise r-2"
              style={{ zIndex: 2 }}
            >
              <span className="t-eyebrow">AI-Powered Content Automation</span>
              <h1 className="t-h1 mt-6">Set Your Social Media on Fire.</h1>
              <p
                className="t-body-lg mt-7"
                style={{ maxWidth: 480, color: "var(--granite)" }}
              >
                Automate your social media content with AI. Generate, schedule,
                and publish posts across LinkedIn, Facebook, Instagram, and
                Twitter — saving hours every week.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
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

            <div className="lg:col-span-5 relative rise r-3">
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
                  <span className="pill-video-counter">Watch · 0:42</span>
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

      <PreviewBody />
      <PreviewFooter />
    </>
  );
}
