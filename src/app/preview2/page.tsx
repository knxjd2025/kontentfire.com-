import Link from "next/link";
import {
  PreviewNav,
  PreviewBody,
  PreviewFooter,
} from "@/components/preview/preview-shell";

/**
 * /preview2 — Hero Variant A: STADIUM CINEMA
 *
 * Full-bleed 40px stadium frame. Eyebrow chip, play button, and the
 * entire copy block (eyebrow, h1, body, CTAs) live INSIDE the video
 * frame on a soft bottom-up vignette. The most atmospheric of the
 * three; lets the footage do the talking.
 */
export default function Preview2() {
  return (
    <>
      <PreviewNav />

      <section className="px-4 md:px-6 lg:px-8 pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-[1240px] mx-auto">
          <div className="hero-cinema rise r-2">
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
              Live · AI-Powered Content Automation
            </span>

            <button
              className="hero-cinema-play"
              type="button"
              aria-label="Play hero video"
            />

            <div className="hero-cinema-content">
              <h1 className="t-h1">Set Your Social Media on Fire.</h1>
              <p className="t-body-lg body">
                Automate your social media content with AI. Generate, schedule,
                and publish posts across LinkedIn, Facebook, Instagram, and
                Twitter — saving hours every week.
              </p>
              <div className="hero-cinema-cta-row">
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
                <span className="trust">
                  Launch special — 80% off monthly plans
                </span>
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
