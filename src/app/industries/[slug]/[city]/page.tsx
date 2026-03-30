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
  MapPin,
  Building2,
  Users,
  CheckCircle2,
} from 'lucide-react';
import {
  getAllIndustries,
  getIndustryBySlug,
  getTopIndustries,
  type Industry,
} from '@/data/industries';
import {
  getAllCities,
  getCityBySlug,
  getStateBySlug,
  getCitiesForState,
  formatNumber,
  type City,
  type State,
} from '@/data/locations';

interface PageProps {
  params: Promise<{ slug: string; city: string }>;
}

// Top 20 industries by search volume and top 50 cities by population
function getTopIndustrySlugs(n: number): string[] {
  return getTopIndustries(n).map((i) => i.slug);
}

function getTopCitySlugs(n: number): string[] {
  return [...getAllCities()]
    .sort((a, b) => b.population - a.population)
    .slice(0, n)
    .map((c) => c.slug);
}

// All pages generated on-demand and cached (ISR).
export async function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const industry = getIndustryBySlug(slug);
  const city = getCityBySlug(citySlug);

  if (!industry || !city) return {};

  const state = getStateBySlug(city.stateSlug);
  const stateAbbr = state?.abbreviation ?? '';
  const title = `Social Media Marketing for ${industry.name} in ${city.name}, ${stateAbbr} | KontentFire`;
  const description = `AI-powered social media content for ${industry.name.toLowerCase()} businesses in ${city.name}, ${stateAbbr}. Reach ${formatNumber(city.population)}+ residents with targeted content.`;

  return {
    title,
    description,
    keywords: [
      `${industry.name.toLowerCase()} ${city.name}`,
      `${industry.name.toLowerCase()} social media ${city.name}`,
      `${industry.name.toLowerCase()} marketing ${stateAbbr}`,
      ...industry.keywords.slice(0, 3),
    ].join(', '),
    alternates: { canonical: `/industries/${slug}/${citySlug}` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://kontentfire.com/industries/${slug}/${citySlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${industry.name} Marketing in ${city.name} | KontentFire`,
      description,
    },
  };
}

function getNearbyCities(city: City, limit: number): City[] {
  return getCitiesForState(city.stateSlug)
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => b.population - a.population)
    .slice(0, limit);
}

function getRelatedIndustries(current: Industry, limit: number): Industry[] {
  return getAllIndustries()
    .filter((i) => i.slug !== current.slug)
    .filter((i) => i.category === current.category)
    .slice(0, limit);
}

function buildCityFaqs(industry: Industry, city: City, state: State | undefined) {
  const stateAbbr = state?.abbreviation ?? '';
  const cityState = `${city.name}, ${stateAbbr}`;

  return [
    {
      question: `How can ${industry.name.toLowerCase()} businesses in ${city.name} use social media to get more customers?`,
      answer: `${industry.name} businesses in ${cityState} can attract more local customers by posting project showcases, sharing maintenance tips relevant to the ${city.name} market, running targeted Facebook and Instagram ads within the ${city.name} metro area, and engaging with local community groups. With ${formatNumber(city.population)}+ residents and ${formatNumber(city.businessCount)}+ businesses, ${city.name} offers significant opportunity for ${industry.name.toLowerCase()} companies that maintain a strong social media presence.`,
    },
    {
      question: `What is the best social media platform for ${industry.name.toLowerCase()} in ${city.name}?`,
      answer: `For ${industry.name.toLowerCase()} businesses in ${cityState}, Facebook is typically the most effective platform due to its local targeting capabilities and ${(city.socialMediaStats.facebookPenetration * 100).toFixed(0)}% penetration in the area. Instagram is excellent for visual project content with ${(city.socialMediaStats.instagramPenetration * 100).toFixed(0)}% local penetration. The best strategy uses both platforms with content tailored to each audience.`,
    },
    {
      question: `How much does social media marketing cost for ${industry.name.toLowerCase()} companies in ${city.name}?`,
      answer: `${industry.name} companies in ${cityState} can expect to invest $500-$2,000 per month for effective social media marketing. AI tools like KontentFire significantly reduce costs by automating content creation while maintaining professional quality. The competition density in ${city.name} is ${city.competitorDensity}, making consistent posting even more important for standing out.`,
    },
    {
      question: `Can KontentFire generate social media content for ${industry.name.toLowerCase()} businesses in ${city.name}?`,
      answer: `Yes, KontentFire generates AI-powered social media content specifically tailored for ${industry.name.toLowerCase()} businesses serving the ${cityState} market. The platform creates industry-appropriate posts, suggests local hashtags, aligns content with seasonal trends relevant to ${state?.name ?? ''}, and schedules posts across multiple platforms automatically.`,
    },
  ];
}

export default async function IndustryCityPage({ params }: PageProps) {
  const { slug, city: citySlug } = await params;
  const industry = getIndustryBySlug(slug);
  const city = getCityBySlug(citySlug);

  if (!industry || !city) {
    notFound();
  }

  const state = getStateBySlug(city.stateSlug);
  const stateAbbr = state?.abbreviation ?? '';
  const cityState = `${city.name}, ${stateAbbr}`;
  const nearbyCities = getNearbyCities(city, 6);
  const relatedIndustries = getRelatedIndustries(industry, 4);
  const faqs = buildCityFaqs(industry, city, state);

  // Contextualize a few content ideas for the city
  const localContentIdeas = industry.contentIdeas.slice(0, 4).map((idea) => {
    if (idea.toLowerCase().includes('before') || idea.toLowerCase().includes('after')) {
      return `${idea} in ${city.name}`;
    }
    return `${idea} for ${city.name} homeowners`;
  });

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.name, href: `/industries/${slug}` },
              { label: city.name, href: `/industries/${slug}/${citySlug}` },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <section className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              <span>
                {city.name}, {stateAbbr}
              </span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media Marketing for{' '}
              <span className="fire-text">{industry.name}</span> in {city.name},{' '}
              {stateAbbr}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              AI-powered social media content for {industry.name.toLowerCase()} businesses
              serving the {cityState} market. Reach {formatNumber(city.population)}+ local
              residents with professional, targeted content.
            </p>

            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Start Creating Content for {city.name}{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </section>

          {/* Local Market Stats */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              {city.name} Market Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Key statistics about the {city.name} market that matter for{' '}
              {industry.name.toLowerCase()} businesses planning their social media strategy.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 text-center">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {formatNumber(city.population)}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Population</div>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 text-center">
                <Building2 className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {formatNumber(city.businessCount)}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Local Businesses</div>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 text-center">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {(city.growthRate * 100).toFixed(1)}%
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Business Growth Rate
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-6 text-center">
                <BarChart3 className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
                  {city.competitorDensity}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Competitor Density
                </div>
              </div>
            </div>

            {/* Social Media Penetration */}
            <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Social Media Penetration in {city.name}
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Facebook
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {(city.socialMediaStats.facebookPenetration * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${city.socialMediaStats.facebookPenetration * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Instagram
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {(city.socialMediaStats.instagramPenetration * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-pink-500 h-2 rounded-full"
                      style={{
                        width: `${city.socialMediaStats.instagramPenetration * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      LinkedIn
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {(city.socialMediaStats.linkedinPenetration * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-blue-700 h-2 rounded-full"
                      style={{
                        width: `${city.socialMediaStats.linkedinPenetration * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Localized Content Ideas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              Content Ideas for {industry.name} in {city.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Proven content types tailored for {industry.name.toLowerCase()} businesses
              serving the {city.name} market.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {localContentIdeas.map((idea) => (
                <div
                  key={idea}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 dark:border-slate-700 p-4"
                >
                  <Lightbulb className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{idea}</span>
                </div>
              ))}
              {industry.contentIdeas.slice(4).map((idea) => (
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

          {/* CTA */}
          <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Grow Your {industry.name} Business in {city.name}
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Join {industry.name.toLowerCase()} businesses in {cityState} using KontentFire
              to automate their social media marketing. Save time and attract more local
              customers.
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
              {industry.name} Marketing in {city.name} FAQ
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
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

          {/* Related Links */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Same industry, nearby cities */}
              {nearbyCities.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {industry.name} Marketing in Nearby Cities
                  </h3>
                  <ul className="space-y-2">
                    {nearbyCities.map((nearby) => {
                      const nearbyState = getStateBySlug(nearby.stateSlug);
                      return (
                        <li key={nearby.slug}>
                          <Link
                            href={`/industries/${slug}/${nearby.slug}`}
                            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                          >
                            <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                            {industry.name} in {nearby.name},{' '}
                            {nearbyState?.abbreviation ?? ''}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Other industries in same city */}
              {relatedIndustries.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Other Industries in {city.name}
                  </h3>
                  <ul className="space-y-2">
                    {relatedIndustries.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/industries/${related.slug}/${citySlug}`}
                          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                        >
                          <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          {related.name} in {city.name}, {stateAbbr}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 text-sm mt-4 font-medium"
                  >
                    View all industries <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
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
            mainEntity: faqs.map((faq) => ({
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

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `KontentFire - ${industry.name} Social Media Marketing in ${city.name}`,
            description: `AI-powered social media content automation for ${industry.name.toLowerCase()} businesses in ${cityState}.`,
            url: `https://kontentfire.com/industries/${slug}/${citySlug}`,
            areaServed: {
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'State',
                name: state?.name ?? '',
              },
            },
            serviceType: `Social Media Marketing for ${industry.name}`,
            provider: {
              '@type': 'Organization',
              name: 'KontentFire',
              url: 'https://kontentfire.com',
            },
          }),
        }}
      />
    </>
  );
}
