import Image from "next/image";
import Link from "next/link";

/**
 * Shared shell for the editorial preview pages.
 *   - <PreviewNav />     floating pill nav
 *   - <PreviewBody />    everything between hero and footer
 *   - <PreviewFooter />  ink-black editorial footer
 *
 * Used by /preview, /preview2, /preview3, /preview4.
 * Each preview page composes its own hero between Nav and Body.
 */

// ============================================================
// DATA
// ============================================================

type FeatureTone =
  | "portrait-warm"
  | "portrait-cream"
  | "portrait-ink"
  | "portrait-clay";

interface Feature {
  title: string;
  description: string;
  link: string;
  eyebrow: string;
  tone: FeatureTone;
}

const features: ReadonlyArray<Feature> = [
  {
    title: "AI Content Generation",
    description:
      "Create engaging posts, articles, and captions powered by GPT-4 and Claude. Our multi-AI approach ensures high-quality content every time.",
    link: "/features/ai-content",
    eyebrow: "Generation",
    tone: "portrait-warm",
  },
  {
    title: "Smart Scheduling",
    description:
      "Schedule content weeks in advance. Set optimal posting times based on when your audience is most active.",
    link: "/features/scheduling",
    eyebrow: "Scheduling",
    tone: "portrait-cream",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track performance across all platforms. Get insights to improve engagement and understand what works.",
    link: "/features/analytics",
    eyebrow: "Analytics",
    tone: "portrait-ink",
  },
  {
    title: "AI Image Generation",
    description:
      "Create stunning visuals with DALL-E and Stable Diffusion. Generate custom images that match your brand.",
    link: "/features/images",
    eyebrow: "Imagery",
    tone: "portrait-clay",
  },
  {
    title: "Content Templates",
    description:
      "Choose from proven templates for different content types. Battle Royale, Myth Busters, How-To guides and more.",
    link: "/features/templates",
    eyebrow: "Templates",
    tone: "portrait-cream",
  },
  {
    title: "Full Automation",
    description:
      "Set up automated workflows that create and publish content on your schedule without manual intervention.",
    link: "/features/automation",
    eyebrow: "Automation",
    tone: "portrait-warm",
  },
];

const platformNames = ["LinkedIn", "Facebook", "Instagram", "X/Twitter"] as const;

const trialBenefits = [
  "Full AI content generation",
  "Multi-platform publishing",
  "Smart scheduling",
  "No credit card required",
] as const;

const socialPosts = [
  { platform: "LinkedIn", src: "/mockups/linkedin-post-2.png", alt: "AI-generated LinkedIn post about marketing automation" },
  { platform: "Instagram", src: "/mockups/instagram-post-2.png", alt: "AI-generated Instagram post for landscaping business" },
  { platform: "Facebook", src: "/mockups/facebook-post-1.png", alt: "AI-generated Facebook post for HVAC company" },
  { platform: "Twitter", src: "/mockups/twitter-post-1.png", alt: "AI-generated Twitter post with analytics data" },
] as const;

const plans = [
  {
    name: "Spark",
    price: 99,
    salePrice: 19,
    description: "Perfect for getting started with social media automation",
    credits: 100,
    features: [
      "100 AI content credits/month",
      "All social platforms",
      "Basic templates",
      "Manual scheduling",
      "Email support",
    ],
    cta: "Get Spark",
    popular: false,
  },
  {
    name: "Blaze",
    price: 299,
    salePrice: 59,
    description: "For creators serious about growing their presence",
    credits: 400,
    features: [
      "400 AI content credits/month",
      "All social platforms",
      "Premium templates",
      "Smart auto-scheduling",
      "Analytics dashboard",
      "AI image generation",
      "Priority support",
    ],
    cta: "Get Blaze",
    popular: true,
  },
  {
    name: "Inferno",
    price: 999,
    salePrice: 199,
    description: "Maximum power for agencies and power users",
    credits: 1000,
    features: [
      "1000 AI content credits/month",
      "All social platforms",
      "All templates + custom",
      "Full automation workflows",
      "Advanced analytics",
      "Unlimited AI images",
      "API access",
      "Dedicated support",
      "White-label options",
    ],
    cta: "Get Inferno",
    popular: false,
  },
] as const;

const earlyAdopterBenefits = [
  { title: "Early Access", description: "Be among the first to use our cutting-edge AI content automation tools." },
  { title: "Shape the Product", description: "Your feedback directly influences our roadmap and feature development." },
  { title: "Founder Support", description: "Get direct access to our team for onboarding and personalized assistance." },
  { title: "Launch Pricing", description: "Lock in special early adopter pricing that you keep forever." },
] as const;

const topCities = [
  { name: "New York City", state: "NY", href: "/locations/new-york/new-york-city" },
  { name: "Los Angeles", state: "CA", href: "/locations/california/los-angeles" },
  { name: "Chicago", state: "IL", href: "/locations/illinois/chicago" },
  { name: "Houston", state: "TX", href: "/locations/texas/houston" },
  { name: "Miami", state: "FL", href: "/locations/florida/miami" },
  { name: "Atlanta", state: "GA", href: "/locations/georgia/atlanta" },
  { name: "Dallas", state: "TX", href: "/locations/texas/dallas" },
  { name: "San Francisco", state: "CA", href: "/locations/california/san-francisco" },
  { name: "Boston", state: "MA", href: "/locations/massachusetts/boston" },
  { name: "Seattle", state: "WA", href: "/locations/washington/seattle" },
  { name: "Denver", state: "CO", href: "/locations/colorado/denver" },
  { name: "Phoenix", state: "AZ", href: "/locations/arizona/phoenix" },
] as const;

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Compare", href: "/compare" },
    { label: "Free Trial", href: "/free-trial" },
  ],
  solutions: [
    { label: "Industries", href: "/industries" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "vs Hootsuite", href: "/compare/hootsuite" },
    { label: "vs Buffer", href: "/compare/buffer" },
    { label: "vs Sprout Social", href: "/compare/sprout-social" },
    { label: "vs Jasper", href: "/compare/jasper" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/resources" },
    { label: "Platform Guides", href: "/guides" },
    { label: "Books", href: "/guides/books" },
    { label: "Free Tools", href: "/tools" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

// ============================================================
// NAV
// ============================================================

export function PreviewNav() {
  return (
    <header className="px-4 md:px-6 lg:px-8">
      <nav className="nav-pill rise r-1">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-transparent.png"
            alt="KontentFire"
            width={48}
            height={48}
            priority
            className="h-9 w-auto block"
            style={{ transform: "translateY(-2px)" }}
          />
          <span style={{ fontSize: 22, letterSpacing: "-0.025em", lineHeight: 1, fontWeight: 500 }}>
            Kontent<span style={{ color: "var(--signal)" }}>Fire</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center" style={{ gap: 26 }}>
          <div className="nav-item">
            <Link className="nav-link has-dropdown" href="/features">
              Features
              <span className="chev" aria-hidden />
            </Link>
            <div className="nav-dropdown" role="menu">
              <Link href="/features" className="nav-dropdown-link" role="menuitem">All Features</Link>
              <Link href="/how-it-works" className="nav-dropdown-link" role="menuitem">How It Works</Link>
              <Link href="/free-trial" className="nav-dropdown-link" role="menuitem">Free Trial</Link>
            </div>
          </div>

          <Link className="nav-link" href="/use-cases">Use Cases</Link>
          <Link className="nav-link" href="/industries">Industries</Link>
          <Link className="nav-link" href="/pricing">Pricing</Link>
          <Link className="nav-link" href="/locations">Locations</Link>
          <Link className="nav-link" href="/compare">Compare</Link>

          <div className="nav-item">
            <Link className="nav-link has-dropdown" href="/guides">
              Guides &amp; Books
              <span className="chev" aria-hidden />
            </Link>
            <div className="nav-dropdown" role="menu">
              <Link href="/guides" className="nav-dropdown-link" role="menuitem">Platform Guides</Link>
              <Link href="/guides/books" className="nav-dropdown-link" role="menuitem">Books</Link>
              <Link href="/blog" className="nav-dropdown-link" role="menuitem">Blog</Link>
              <Link href="/resources" className="nav-dropdown-link" role="menuitem">Resources</Link>
              <Link href="/tools" className="nav-dropdown-link" role="menuitem">Free Tools</Link>
              <Link href="/faq" className="nav-dropdown-link" role="menuitem">FAQ</Link>
              <Link href="/about" className="nav-dropdown-link" role="menuitem">About Us</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="nav-search hidden sm:inline-flex" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <Link href="https://app.kontentfire.com/login" className="nav-link hidden md:inline-block">
            Log In
          </Link>
          <Link href="https://app.kontentfire.com/register" className="btn-ink">
            Sign Up Now
          </Link>

          <details className="mobile-nav lg:hidden">
            <summary aria-label="Open menu">
              <span></span>
              <span></span>
              <span></span>
            </summary>
            <div className="mobile-menu" role="menu">
              <Link href="/features" className="mobile-menu-link" role="menuitem">Features</Link>
              <Link href="/how-it-works" className="mobile-menu-link" role="menuitem">How It Works</Link>
              <Link href="/free-trial" className="mobile-menu-link" role="menuitem">Free Trial</Link>
              <div className="mobile-menu-divider" aria-hidden />
              <Link href="/use-cases" className="mobile-menu-link" role="menuitem">Use Cases</Link>
              <Link href="/industries" className="mobile-menu-link" role="menuitem">Industries</Link>
              <Link href="/pricing" className="mobile-menu-link" role="menuitem">Pricing</Link>
              <Link href="/locations" className="mobile-menu-link" role="menuitem">Locations</Link>
              <Link href="/compare" className="mobile-menu-link" role="menuitem">Compare</Link>
              <div className="mobile-menu-divider" aria-hidden />
              <Link href="/guides" className="mobile-menu-link" role="menuitem">Platform Guides</Link>
              <Link href="/guides/books" className="mobile-menu-link" role="menuitem">Books</Link>
              <Link href="/blog" className="mobile-menu-link" role="menuitem">Blog</Link>
              <Link href="/resources" className="mobile-menu-link" role="menuitem">Resources</Link>
              <Link href="/tools" className="mobile-menu-link" role="menuitem">Free Tools</Link>
              <Link href="/faq" className="mobile-menu-link" role="menuitem">FAQ</Link>
              <Link href="/about" className="mobile-menu-link" role="menuitem">About Us</Link>
              <div className="mobile-menu-divider" aria-hidden />
              <Link href="https://app.kontentfire.com/login" className="mobile-menu-link" role="menuitem">Log In</Link>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}

// ============================================================
// BODY — features → trial → social proof → pricing → adopters
//        → dashboard → locations → final CTA
// ============================================================

export function PreviewBody() {
  return (
    <>
      {/* FEATURES — circular portraits with satellite CTAs + orbital arcs */}
      <section
        id="features"
        className="px-4 md:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28 relative overflow-hidden"
      >
        <div className="max-w-[1240px] mx-auto relative">
          <span className="ghost-watermark hidden lg:block" style={{ top: 60, left: -40 }} aria-hidden>
            Everything
          </span>
          <span className="ghost-watermark hidden lg:block" style={{ top: 200, right: -60, textAlign: "right" }} aria-hidden>
            you need
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-24 relative" style={{ zIndex: 1 }}>
            <div className="lg:col-span-7">
              <span className="t-eyebrow">Powerful Features</span>
              <h2 className="t-h2 mt-6" style={{ maxWidth: 720 }}>
                Everything You Need to Dominate Social
              </h2>
            </div>
            <p className="lg:col-span-5 t-body-lg" style={{ alignSelf: "end" }}>
              From AI-powered content creation to automated publishing, KontentFire has all the tools you need to build a powerful social media presence.
            </p>
          </div>

          <div className="relative" style={{ zIndex: 2 }}>
            <svg className="orbit-svg hidden lg:block" viewBox="0 0 1200 900" preserveAspectRatio="none" aria-hidden>
              <path className="orbit-path" d="M 200 180 C 380 90, 620 90, 800 180" />
              <path className="orbit-path" d="M 1000 200 C 1100 360, 950 480, 800 500" />
              <path className="orbit-path" d="M 600 540 C 460 660, 280 660, 180 540" />
              <path className="orbit-path" d="M 200 760 C 380 700, 620 700, 800 760" />
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 lg:gap-y-28">
              {features.map((feature, i) => {
                const offsetClasses = [
                  "lg:translate-y-0",
                  "lg:translate-y-12",
                  "lg:translate-y-4",
                  "lg:translate-y-8",
                  "lg:translate-y-0",
                  "lg:translate-y-16",
                ];
                return (
                  <article key={feature.title} className={`relative ${offsetClasses[i]}`}>
                    <div className="portrait mx-auto" style={{ maxWidth: 280 }}>
                      <div className={`portrait-circle ${feature.tone}`}>
                        <span
                          className="portrait-num"
                          style={{
                            color: feature.tone === "portrait-cream" ? "#f97316" : "#fffaeb",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <Link href={feature.link} className="satellite" aria-label={`Learn more about ${feature.title}`}>
                        <span aria-hidden>→</span>
                      </Link>
                    </div>

                    <div className="portrait-eyebrow-below text-center" style={{ maxWidth: 320, margin: "28px auto 0" }}>
                      <span className="t-eyebrow">{feature.eyebrow}</span>
                      <h3 className="t-h3 mt-4">{feature.title}</h3>
                      <p className="t-body mt-3" style={{ color: "var(--granite)" }}>
                        {feature.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="t-h3">Publish to All Major Platforms</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {platformNames.map((name) => (
                <span key={name} className="chip">{name}</span>
              ))}
            </div>
            <p className="t-caption mt-6">
              + Google My Business and WordPress integration coming soon
            </p>
          </div>
        </div>
      </section>

      {/* FREE TRIAL BANNER */}
      <section className="px-4 md:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-[1240px] mx-auto">
          <div
            className="card-stadium stadium-shadow"
            style={{
              padding: "64px 56px",
              background: "linear-gradient(135deg, #fcfbfa 0%, #f4e4cc 50%, #e8d3b4 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="t-eyebrow">Limited Time Offer</span>
                <h2 className="t-h2 mt-6">Start Your Free 7-Day Trial</h2>
                <p className="t-body-lg mt-6" style={{ maxWidth: 560 }}>
                  Try every feature with no restrictions. Create AI-powered content, schedule posts, and publish to all your social accounts.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="https://app.kontentfire.com/login" className="btn-ink">
                    Start Free Trial
                    <span aria-hidden>→</span>
                  </Link>
                  <span className="t-caption">No credit card required. Cancel anytime.</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div style={{ borderTop: "1px solid rgba(20,20,19,0.12)" }}>
                  {trialBenefits.map((b, i) => (
                    <div
                      key={b}
                      className="flex items-center gap-4"
                      style={{ padding: "16px 0", borderBottom: "1px solid rgba(20,20,19,0.12)" }}
                    >
                      <span style={{ fontSize: 12, letterSpacing: "0.04em", color: "var(--signal)", fontWeight: 700, width: 24 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="t-body">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-4 md:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
            <div className="lg:col-span-7">
              <span className="t-eyebrow">Real Output</span>
              <h2 className="t-h2 mt-6">See What KontentFire Creates</h2>
            </div>
            <p className="lg:col-span-5 t-body-lg">
              Real examples of AI-generated social media posts across every major platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {socialPosts.map((post, i) => {
              const offsetClasses = ["", "md:translate-y-12", "md:-translate-y-4", "md:translate-y-8"];
              return (
                <div key={post.platform} className={offsetClasses[i]}>
                  <article className="stadium stadium-shadow" style={{ background: "#ffffff" }}>
                    <Image
                      src={post.src}
                      alt={post.alt}
                      width={600}
                      height={600}
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    />
                  </article>
                  <div className="mt-4 flex items-center justify-between" style={{ paddingInline: 8 }}>
                    <span className="t-eyebrow">{post.platform}</span>
                    <span
                      className="t-caption"
                      style={{ letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}
                    >
                      {String(i + 1).padStart(2, "0")} / 04
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex items-center justify-between flex-wrap gap-4">
            <p className="t-body-lg" style={{ color: "var(--granite)" }}>
              All generated by AI in seconds. Real posts, real engagement.
            </p>
            <Link href="/free-trial" className="btn-ink">
              Start Your Free Trial
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="px-4 md:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28"
        style={{ background: "var(--lifted)" }}
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
            <div className="lg:col-span-7">
              <span className="t-eyebrow">Simple Pricing</span>
              <h2 className="t-h2 mt-6">Choose Your Fire Power</h2>
            </div>
            <p className="lg:col-span-5 t-body-lg">
              Simple, transparent pricing. Cancel anytime, no hidden costs. Sign up now and lock in 80% off your monthly plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const isFeatured = plan.popular;
              return (
                <div
                  key={plan.name}
                  className={isFeatured ? "price-card-feature stadium-shadow" : "price-card"}
                  style={isFeatured ? undefined : { boxShadow: "rgba(0,0,0,0.04) 0 8px 24px" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="t-eyebrow">{plan.name}</span>
                    {isFeatured && (
                      <span
                        style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700, color: "#fb923c" }}
                      >
                        Recommended
                      </span>
                    )}
                  </div>

                  <p
                    className="t-body"
                    style={{
                      color: isFeatured ? "rgba(243,240,238,0.85)" : "var(--granite)",
                      minHeight: 50,
                    }}
                  >
                    {plan.description}
                  </p>

                  <div>
                    <div className="price-strike">${plan.price}</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="price-now">${plan.salePrice}</span>
                      <span
                        className="t-caption"
                        style={{ color: isFeatured ? "rgba(243,240,238,0.65)" : "var(--slate)" }}
                      >
                        / month
                      </span>
                    </div>
                    <div
                      className="mt-3"
                      style={{
                        fontSize: 12,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        color: isFeatured ? "#fb923c" : "var(--signal)",
                      }}
                    >
                      {plan.credits} credits/month
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "10px 0",
                          borderBottom: `1px solid ${isFeatured ? "rgba(243,240,238,0.12)" : "rgba(20,20,19,0.08)"}`,
                          fontSize: 15,
                          fontWeight: 450,
                          color: isFeatured ? "var(--canvas)" : "var(--ink)",
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            marginTop: 8,
                            width: 6,
                            height: 6,
                            background: isFeatured ? "#fb923c" : "var(--signal)",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                    <li
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "10px 0",
                        fontSize: 15,
                        fontWeight: 450,
                        color: isFeatured ? "var(--canvas)" : "var(--ink)",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          marginTop: 8,
                          width: 6,
                          height: 6,
                          background: isFeatured ? "#fb923c" : "var(--signal)",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      <span>Cancel anytime</span>
                    </li>
                  </ul>

                  <Link
                    href="https://app.kontentfire.com/login"
                    className={isFeatured ? "btn-outline" : "btn-ink"}
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      ...(isFeatured ? { background: "var(--canvas)", borderColor: "var(--canvas)", color: "var(--ink)" } : {}),
                    }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="mt-12 text-center t-caption">
            Need more? Buy additional credits anytime at $1/credit.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Features", sub: "See all capabilities", href: "/features" },
              { label: "Use Cases", sub: "See who uses KontentFire", href: "/use-cases" },
              { label: "How It Works", sub: "3 simple steps", href: "/how-it-works" },
              { label: "Locations", sub: "Serving all 50 states", href: "/locations" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="location-pill"
                style={{ flexDirection: "column", alignItems: "flex-start", gap: 4, padding: "20px 22px" }}
              >
                <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.02em" }}>
                  {item.label}
                </div>
                <div className="state">{item.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY ADOPTERS */}
      <section className="px-4 md:px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <span className="t-eyebrow">Join Early Adopters</span>
              <h2 className="t-h2 mt-6">Be Part of the Revolution</h2>
            </div>
            <p className="lg:col-span-5 t-body-lg">
              KontentFire is transforming how businesses create and manage social media content. Join our growing community of early adopters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {earlyAdopterBenefits.map((benefit, i) => (
              <div key={benefit.title}>
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "var(--signal)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} / 04
                </div>
                <h3 className="t-h4 mt-4">{benefit.title}</h3>
                <p className="t-body mt-3" style={{ color: "var(--granite)" }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <h3 className="lg:col-span-7 t-h2">
              Ready to Transform Your Social Media?
            </h3>
            <div className="lg:col-span-5">
              <p className="t-body-lg">
                Join forward-thinking businesses and creators who are automating their content creation with AI. Start your special offer today.
              </p>
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <Link href="https://app.kontentfire.com/login" className="btn-ink">
                  Get Started
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/contact" className="btn-outline">
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="px-4 md:px-6 lg:px-8 pt-20 md:pt-24 pb-24 md:pb-32" style={{ background: "var(--lifted)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-14 max-w-[820px] mx-auto">
            <span className="t-eyebrow">Dashboard</span>
            <h2 className="t-h2 mt-6">Your Content Command Center</h2>
            <p className="t-body-lg mt-6">
              Manage content, schedule posts, and track performance from one powerful dashboard.
            </p>
          </div>

          <div className="stadium stadium-shadow mx-auto" style={{ background: "#ffffff" }}>
            <Image
              src="/screenshots/dashboard.png"
              alt="KontentFire dashboard showing content management and analytics"
              width={2000}
              height={1200}
              className="w-full h-auto"
              priority
              style={{ display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* POPULAR LOCATIONS */}
      <section className="px-4 md:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="t-eyebrow">Serving All 50 States</span>
              <h2 className="t-h2 mt-6">Social Media Marketing in Your City</h2>
            </div>
            <p className="lg:col-span-5 t-body-lg">
              KontentFire helps businesses across the United States automate their social media content. Find local marketing insights for your area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {topCities.map((city) => (
              <Link key={city.name} href={city.href} className="location-pill">
                <span>{city.name}</span>
                <span className="state">{city.state}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/locations/states" className="btn-text">
              Browse All 50 States <span aria-hidden>→</span>
            </Link>
            <Link href="/locations/cities" className="btn-text">
              View All 100+ Cities <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-24 md:pb-32 relative overflow-hidden">
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "120%",
            height: "140%",
            background:
              "radial-gradient(ellipse 60% 45% at center, rgba(243, 115, 56, 0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="relative max-w-[920px] mx-auto text-center">
          <h2 className="t-h1">Ready to Ignite Your Social Media?</h2>
          <p className="t-body-lg mt-8 mx-auto" style={{ maxWidth: 580, color: "var(--granite)" }}>
            Join thousands of creators and businesses who are saving time and growing their audience with KontentFire.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link href="https://app.kontentfire.com/login" className="btn-ink">
              Get Started
              <span aria-hidden>→</span>
            </Link>
            <Link href="#pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>
          <p className="t-caption mt-6">Launch special: 80% off monthly plans.</p>
        </div>
      </section>
    </>
  );
}

// ============================================================
// FOOTER
// ============================================================

export function PreviewFooter() {
  return (
    <footer className="footer">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-14 pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-8">
          <div className="lg:col-span-8">
            <div className="footer-eyebrow">Ready when you are</div>
            <h2 className="footer-h2">
              Stop wrestling with your content calendar.{" "}
              <span className="accent">Set it on fire instead.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-end">
            <Link href="https://app.kontentfire.com/register" className="footer-cta">
              <span>Start your trial</span>
              <span className="arrow" aria-hidden>→</span>
            </Link>
            <p className="footer-cta-note">7 days. Full access. Cancel anytime.</p>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 pt-7 mb-8"
          style={{ borderTop: "1px solid rgba(243,240,238,0.12)" }}
        >
          <FooterColumn title="Product" items={footerLinks.product} />
          <FooterColumn title="Solutions" items={footerLinks.solutions} />
          <FooterColumn title="Resources" items={footerLinks.resources} />
          <div>
            <div className="footer-col-head">Need Help?</div>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="mailto:hello@kontentfire.com" className="footer-link">
                  hello@kontentfire.com
                </a>
              </li>
              <li>
                <a href="mailto:support@kontentfire.com" className="footer-link">
                  support@kontentfire.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="footer-link">Contact us</Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(243,240,238,0.12)",
            paddingTop: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
            fontSize: 12.5,
            color: "var(--dust)",
            letterSpacing: "0.01em",
          }}
        >
          <div className="flex items-baseline gap-3">
            <span style={{ fontSize: 13, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--canvas)", lineHeight: 1, whiteSpace: "nowrap" }}>
              <Image
                src="/logo-transparent.png"
                alt=""
                width={28}
                height={28}
                className="inline-block h-[18px] w-auto mr-1.5"
                style={{ verticalAlign: "-4px" }}
              />
              Kontent<span className="ignite">Fire</span>
            </span>
            <span aria-hidden style={{ color: "rgba(243,240,238,0.3)" }}>·</span>
            <span>© {new Date().getFullYear()} Built to ignite content</span>
          </div>

          <div className="flex items-center gap-5">
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link" style={{ fontSize: 12.5 }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://twitter.com/kontentfire" className="footer-link" style={{ fontSize: 12.5 }} aria-label="Twitter">
              Twitter
            </a>
            <a href="https://linkedin.com/company/kontentfire" className="footer-link" style={{ fontSize: 12.5 }} aria-label="LinkedIn">
              LinkedIn
            </a>
            <span className="country-pill" style={{ padding: "6px 14px", fontSize: 12 }}>
              English (US)
              <span aria-hidden>▾</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  items: ReadonlyArray<{ readonly label: string; readonly href: string }>;
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <div className="footer-col-head">{title}</div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="footer-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
