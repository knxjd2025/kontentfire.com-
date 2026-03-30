import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Check,
  X,
  Minus,
  Trophy,
  Zap,
  DollarSign,
  Users,
  Star,
  HelpCircle,
} from 'lucide-react';
import {
  getAllComparisons,
  getComparisonBySlug,
  type ComparisonFeature,
} from '@/data/comparisons';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const comparisons = getAllComparisons();
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) return {};

  const title = `KontentFire vs ${comparison.competitor}: Which Is Better? (2026 Comparison)`;
  const description = `Compare KontentFire and ${comparison.competitor} side by side. Features, pricing, AI capabilities, and which tool is right for your business.`;

  return {
    title,
    description,
    keywords: comparison.keywords.join(', '),
    alternates: { canonical: `/compare/${slug}` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://kontentfire.com/compare/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `KontentFire vs ${comparison.competitor} | 2026 Comparison`,
      description,
    },
  };
}

const categoryLabels: Record<string, string> = {
  ai: 'AI & Content Generation',
  content: 'Content & Features',
  scheduling: 'Scheduling & Automation',
  platforms: 'Platform Support',
  analytics: 'Analytics & Reporting',
  pricing: 'Pricing',
};

const categoryOrder: ReadonlyArray<string> = [
  'ai',
  'content',
  'scheduling',
  'platforms',
  'analytics',
  'pricing',
];

function FeatureValue({ value }: { readonly value: string | boolean }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-500 mx-auto" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-slate-300 mx-auto" />;
  }
  return <span className="text-sm text-slate-700 font-medium">{value}</span>;
}

function groupFeaturesByCategory(
  features: ReadonlyArray<ComparisonFeature>,
): ReadonlyArray<{ category: string; label: string; items: ReadonlyArray<ComparisonFeature> }> {
  return categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat] ?? cat,
      items: features.filter((f) => f.category === cat),
    }))
    .filter((group) => group.items.length > 0);
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  const featureGroups = groupFeaturesByCategory(comparison.features);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb
            items={[
              { label: 'Compare', href: '/compare' },
              { label: `vs ${comparison.competitor}`, href: `/compare/${slug}` },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-orange-500 font-semibold mb-4 uppercase tracking-wide text-sm">
              2026 Comparison
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              KontentFire vs{' '}
              <span className="text-orange-500">{comparison.competitor}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-6">{comparison.tagline}</p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-8">
              {comparison.description}
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <Trophy className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-semibold text-slate-900 mb-1">Our Verdict</p>
                  <p className="text-slate-600">{comparison.verdict}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="bg-slate-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Quick Comparison Summary
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Zap className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">AI Content Creation</h3>
                <p className="text-sm text-slate-600">
                  KontentFire generates complete posts with text and images.{' '}
                  {comparison.competitor} does not include AI content generation
                  {comparison.slug === 'jasper' || comparison.slug === 'copy-ai' || comparison.slug === 'chatgpt'
                    ? ' with publishing'
                    : ''}.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Pricing</h3>
                <p className="text-sm text-slate-600">{comparison.pricing.savings}</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">Best For</h3>
                <p className="text-sm text-slate-600">
                  KontentFire is built for small and mid-size businesses that need AI-powered
                  social media automation without enterprise complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Feature-by-Feature Comparison
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                <div className="px-6 py-4 font-semibold text-slate-700">Feature</div>
                <div className="px-6 py-4 font-semibold text-orange-500 text-center">
                  KontentFire
                </div>
                <div className="px-6 py-4 font-semibold text-slate-700 text-center">
                  {comparison.competitor}
                </div>
              </div>

              {/* Feature Rows Grouped by Category */}
              {featureGroups.map((group) => (
                <div key={group.category}>
                  <div className="px-6 py-3 bg-slate-100 border-y border-slate-200">
                    <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      {group.label}
                    </span>
                  </div>
                  {group.items.map((feature, idx) => (
                    <div
                      key={feature.name}
                      className={`grid grid-cols-3 ${
                        idx < group.items.length - 1 ? 'border-b border-slate-100' : ''
                      }`}
                    >
                      <div className="px-6 py-3 text-sm text-slate-700">{feature.name}</div>
                      <div className="px-6 py-3 text-center">
                        <FeatureValue value={feature.kontentfire} />
                      </div>
                      <div className="px-6 py-3 text-center">
                        <FeatureValue value={feature.competitor} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Pricing Comparison
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-orange-500">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-500 uppercase">
                    Recommended
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">KontentFire</h3>
                <p className="text-slate-600 mb-6">{comparison.pricing.kontentfire}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    AI content generation included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    AI image generation included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Multi-platform scheduling and publishing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    No per-seat pricing
                  </li>
                </ul>
                <Link href="https://app.kontentfire.com/login">
                  <Button variant="primary" className="w-full">
                    Try KontentFire Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="h-7 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {comparison.competitor}
                </h3>
                <p className="text-slate-600 mb-6">{comparison.pricing.competitor}</p>
                <ul className="space-y-3 mb-6">
                  {comparison.competitorAdvantages.slice(0, 4).map((adv) => (
                    <li key={adv} className="flex items-center gap-2 text-sm text-slate-700">
                      <Minus className="h-4 w-4 text-slate-400 flex-shrink-0" />
                      {adv.length > 80 ? `${adv.substring(0, 77)}...` : adv}
                    </li>
                  ))}
                </ul>
                <a
                  href={comparison.competitorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full">
                    Visit {comparison.competitor}
                  </Button>
                </a>
              </div>
            </div>
            <p className="text-center text-lg font-semibold text-orange-600 mt-8">
              {comparison.pricing.savings}
            </p>
          </div>
        </section>

        {/* Advantages Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* KontentFire Advantages */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  KontentFire Advantages
                </h2>
                <ul className="space-y-4">
                  {comparison.kontentfireAdvantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competitor Advantages */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {comparison.competitor} Advantages
                </h2>
                <ul className="space-y-4">
                  {comparison.competitorAdvantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Choose */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-orange-500">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Choose KontentFire If You...
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-700">
                    <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                    Need AI to create social media content for you
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                    Want a complete generate-schedule-publish workflow
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                    Are a small to mid-size business on a budget
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                    Want to save hours per week on content creation
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                    Prefer paying for output, not per seat
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-slate-400">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Choose {comparison.competitor} If You...
                </h2>
                <ul className="space-y-3">
                  {comparison.slug === 'hootsuite' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Run a large enterprise with complex approval workflows
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need deep CRM and helpdesk integrations
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Require advanced custom reporting for stakeholders
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Have a dedicated social media team with role-based access
                      </li>
                    </>
                  )}
                  {comparison.slug === 'buffer' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want the simplest possible scheduling interface
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Already create all your own content and just need to schedule it
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need a free plan to manage 3 or fewer social channels
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need a link-in-bio or landing page feature
                      </li>
                    </>
                  )}
                  {comparison.slug === 'sprout-social' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need enterprise-grade social listening and monitoring
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want deep Salesforce or HubSpot CRM integration
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Require a unified inbox for customer conversations
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need competitor benchmarking and advanced analytics
                      </li>
                    </>
                  )}
                  {comparison.slug === 'later' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Focus primarily on Instagram and visual content
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want a visual grid planner to curate your Instagram aesthetic
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need a Linkin.bio page for Instagram traffic
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Prioritize TikTok and Stories scheduling
                      </li>
                    </>
                  )}
                  {comparison.slug === 'jasper' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need AI writing for blogs, emails, and ads beyond social media
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want brand voice training for consistent AI output
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Require 50+ specialized content templates
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Already use a separate scheduling tool and just need AI writing
                      </li>
                    </>
                  )}
                  {comparison.slug === 'copy-ai' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need AI copywriting for emails, product pages, and ads
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want a free tier to test AI writing capabilities
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need workflow automation for sales outreach
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Require API access for custom AI integrations
                      </li>
                    </>
                  )}
                  {comparison.slug === 'chatgpt' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need a versatile AI for research, coding, and analysis
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want creative and flexible prompting for varied content
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Only create social posts occasionally and can paste manually
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want access to custom GPTs and a plugin ecosystem
                      </li>
                    </>
                  )}
                  {comparison.slug === 'canva' && (
                    <>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need full visual design tools for custom graphics and videos
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Want brand kit management with custom fonts and colors
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Need design tools for presentations and print materials
                      </li>
                      <li className="flex items-start gap-2 text-slate-700">
                        <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                        Prefer designing every post manually with full creative control
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {comparison.faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Try KontentFire Free</h2>
            <p className="text-lg text-orange-100 mb-8">
              See why businesses are switching from {comparison.competitor} to KontentFire.
              AI-powered content creation, scheduling, and publishing in one platform.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: comparison.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
