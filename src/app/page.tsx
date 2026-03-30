import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FreeTrialBanner } from "@/components/sections/free-trial-banner";
import { SocialProofShowcase } from "@/components/sections/social-proof-showcase";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { PopularLocations } from "@/components/sections/popular-locations";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { AppScreenshot } from "@/components/ui/app-screenshot";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <FreeTrialBanner />
        <SocialProofShowcase />
        <Pricing />
        <Testimonials />
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Your Content Command Center
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              Manage content, schedule posts, and track performance from one powerful dashboard.
            </p>
            <AppScreenshot
              src="/screenshots/dashboard.png"
              alt="KontentFire dashboard showing content management and analytics"
              caption="Your Content Command Center"
            />
          </div>
        </section>
        <PopularLocations />
        <CTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "KontentFire",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI-powered social media content automation platform. Generate, schedule, and publish content across LinkedIn, Facebook, Instagram, and Twitter. Used by small businesses, agencies, contractors, creators, and enterprises.",
            url: "https://kontentfire.com",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "99",
              highPrice: "999",
              priceCurrency: "USD",
              offerCount: "3",
            },
            author: {
              "@type": "Organization",
              name: "KontentFire",
              url: "https://kontentfire.com",
            },
          }),
        }}
      />
    </>
  );
}
