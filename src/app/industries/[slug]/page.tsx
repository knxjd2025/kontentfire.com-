import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Lightbulb,
  Calendar,
  MessageSquare,
  Star,
  CheckCircle2,
  Leaf,
  Sun,
  CloudSnow,
  CloudRain,
} from 'lucide-react';
import { getAllIndustries, getIndustryBySlug } from '@/data/industries';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) return {};

  return {
    title: `Social Media Marketing for ${industry.name} | KontentFire`,
    description: `AI-powered social media content for ${industry.name.toLowerCase()} businesses. ${industry.description}`,
    keywords: industry.keywords.join(', '),
    alternates: { canonical: `/industries/${slug}` },
    openGraph: {
      title: `Social Media Marketing for ${industry.name} | KontentFire`,
      description: industry.description,
      type: 'website',
      url: `https://kontentfire.com/industries/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${industry.name} Social Media Marketing | KontentFire`,
      description: industry.description,
    },
  };
}

const seasonIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  spring: Leaf,
  summer: Sun,
  fall: CloudRain,
  winter: CloudSnow,
};

const seasonLabels: Record<string, string> = {
  spring: 'Spring',
  summer: 'Summer',
  fall: 'Fall',
  winter: 'Winter',
};

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.name, href: `/industries/${slug}` },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <section className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              <span>{industry.category} Services</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media Marketing for{' '}
              <span className="fire-text">{industry.name}</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              {industry.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-orange-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {industry.stats.avgMonthlySearches.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Monthly Searches
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {industry.stats.estimatedROI}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Estimated ROI</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
                    {industry.stats.competitionLevel}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Competition</div>
                </div>
              </div>
            </div>

            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Start Creating {industry.name} Content{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </section>

          {/* Why Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              Why {industry.name} Businesses Need Social Media
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Home service businesses that consistently post on social media generate 3-5x more
              leads than those that do not. Here is why {industry.name.toLowerCase()} companies
              cannot afford to ignore their online presence.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                  <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Build Trust and Credibility
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  87% of homeowners check a contractor&apos;s social media before hiring.
                  Professional, consistent content builds the trust that converts browsers into
                  customers.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Generate Qualified Leads
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Targeted social media content reaches homeowners actively looking for{' '}
                  {industry.name.toLowerCase()} services. Educational content attracts
                  higher-quality leads who are ready to book.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Stand Out from Competitors
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Most {industry.name.toLowerCase()} businesses have weak or inactive social media.
                  A consistent, professional presence makes you the obvious choice when homeowners
                  need your services.
                </p>
              </div>
            </div>
          </section>

          {/* Content Ideas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              Content Ideas for {industry.name} Businesses
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Never run out of ideas. Here are proven content types that drive engagement and
              leads for {industry.name.toLowerCase()} companies.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industry.contentIdeas.map((idea) => (
                <div
                  key={idea}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                >
                  <Lightbulb className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{idea}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Platform Strategy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              Platform Strategy for {industry.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Not all platforms are equal. Here is where {industry.name.toLowerCase()} businesses
              should focus their social media efforts.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {platform.strategy}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Seasonal Content Calendar */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              Seasonal Content Calendar
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Stay relevant year-round with seasonal content ideas for your{' '}
              {industry.name.toLowerCase()} business.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(Object.keys(industry.seasonalContent) as Array<keyof typeof industry.seasonalContent>).map(
                (season) => {
                  const SeasonIcon = seasonIcons[season] ?? Calendar;
                  return (
                    <div
                      key={season}
                      className="rounded-xl border border-slate-200 dark:border-slate-700 p-6"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <SeasonIcon className="h-5 w-5 text-orange-500" />
                        <h3 className="font-semibold text-slate-900 dark:text-white">
                          {seasonLabels[season]}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {industry.seasonalContent[season].map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                },
              )}
            </div>
          </section>

          {/* Social Media Tips */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              Social Media Tips for {industry.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Expert tips to maximize your social media impact as a{' '}
              {industry.name.toLowerCase()} business.
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {industry.socialMediaTips.map((tip, index) => (
                <div
                  key={tip}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-700 p-5"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-sm font-bold text-orange-600 dark:text-orange-400">
                    {index + 1}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Grow Your {industry.name} Business?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Let KontentFire generate professional social media content tailored for your{' '}
              {industry.name.toLowerCase()} business. Save time and get more leads.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
              >
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              {industry.name} Social Media Marketing FAQ
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Common questions about social media marketing for {industry.name.toLowerCase()}{' '}
              businesses.
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {industry.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-slate-200 dark:border-slate-700 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Browse Other Industries */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Explore Other Industries
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              KontentFire serves all home service trades. Browse other industries we support.
            </p>
            <Link href="/industries">
              <Button variant="outline">
                View All Industries <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>
        </div>
      </main>
      <Footer />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: industry.faqs.map((faq) => ({
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
    </>
  );
}
