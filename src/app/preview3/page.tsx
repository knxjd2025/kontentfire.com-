import Link from "next/link";
import {
  PreviewNav,
  PreviewBody,
  PreviewFooter,
} from "@/components/preview/preview-shell";

/**
 * /preview3 — FULL-BLEED CINEMA
 *
 * 100vh hero, video fills the viewport. Frosted-glass nav at the top.
 * The LIVE chip, headline, body, and CTAs all sit inside a max-width
 * stage that mirrors the nav-pill's grid, so the KontentFire logo,
 * status pill, and content all share the same left rail.
 */
export default function Preview3() {
  return (
    <>
      <section className="hero-fullscreen rise r-2">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/logo-transparent.png"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-fullscreen-vignette" aria-hidden />
        <div className="hero-fullscreen-grain" aria-hidden />

        <div className="hero-fullscreen-nav-wrap">
          <PreviewNav />
        </div>

        <div className="hero-fullscreen-stage px-4 md:px-6 lg:px-8">
          <div className="hero-fullscreen-stage-row">
            <div className="hero-fullscreen-content">
              <div className="hero-fullscreen-status">
                <span className="status-segment">
                  <span className="live-dot" aria-hidden />
                  Live
                </span>
                <span className="status-divider" aria-hidden />
                <span className="status-segment">
                  AI-Powered Content Automation
                </span>
              </div>

              <h1 className="t-h1">
                Set Your Social Media{" "}
                <span className="italic-accent">on Fire.</span>
              </h1>

              <p className="t-body-lg body">
                Automate your social media content with AI. Generate,
                schedule, and publish posts across LinkedIn, Facebook,
                Instagram, and Twitter — saving hours every week.
              </p>

              <div className="hero-fullscreen-cta-row">
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
