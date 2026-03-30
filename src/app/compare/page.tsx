import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, DollarSign, Bot, Sparkles } from 'lucide-react';
import { getAllComparisons } from '@/data/comparisons';

export const metadata: Metadata = {
  title: 'KontentFire vs Competitors: Compare Social Media Tools | KontentFire',
  description:
    'See how KontentFire compares to Hootsuite, Buffer, Sprout Social, Later, Jasper AI, Copy.ai, ChatGPT, and Canva. Find the best social media automation tool for your business.',
  keywords:
    'KontentFire alternatives, best social media automation tool, social media tool comparison, KontentFire vs Hootsuite, KontentFire vs Buffer, AI social media tools 2026',
  alternates: { canonical: '/compare' },
  openGraph: {
    title: 'How KontentFire Compares to Other Social Media Tools',
    description:
      'Side-by-side comparisons of KontentFire with Hootsuite, Buffer, Sprout Social, Jasper AI, and more. See features, pricing, and which tool fits your needs.',
    type: 'website',
    url: 'https://kontentfire.com/compare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KontentFire vs Competitors | Social Media Tool Comparison',
    description:
      'Compare KontentFire with top social media tools. AI content generation, scheduling, and publishing at a fraction of the cost.',
  },
};

const hubFaqs = [
  {
    question: 'What makes KontentFire different from other social media tools?',
    answer:
      'KontentFire is the only tool that combines AI content generation using multiple providers (OpenAI, Claude, Gemini), AI image generation, multi-platform scheduling, and direct publishing in a single platform starting at $19/month. Most competitors offer only one or two of these capabilities.',
  },
  {
    question: 'Is KontentFire a good alternative to Hootsuite and Buffer?',
    answer:
      'Yes. KontentFire provides scheduling and publishing like Hootsuite and Buffer, but adds AI content and image generation that neither competitor offers. For small and mid-size businesses, KontentFire delivers more value at a lower price point.',
  },
  {
    question: 'How much does KontentFire cost compared to competitors?',
    answer:
      'KontentFire starts at $19/month with AI content generation included. Hootsuite starts at $99/month, Sprout Social at $249/seat/month, Jasper AI at $49/month, and none of those include the full creation-to-publishing workflow that KontentFire offers.',
  },
  {
    question: 'Can KontentFire replace multiple social media tools?',
    answer:
      'Yes. KontentFire replaces the need for a separate AI writing tool (like Jasper or ChatGPT), an image generator, and a social media scheduler. This consolidation saves money and eliminates the manual copy-paste workflow between tools.',
  },
  {
    question: 'Which social media platforms does KontentFire support?',
    answer:
      'KontentFire supports publishing to Facebook, Instagram, LinkedIn, and WordPress. Additional platforms are on the roadmap. The AI generates platform-specific content optimized for each network format and audience expectations.',
  },
];

const competitorIcons: Record<string, string> = {
  hootsuite: 'H',
  buffer: 'B',
  'sprout-social': 'S',
  later: 'L',
  jasper: 'J',
  'copy-ai': 'C',
  chatgpt: 'G',
  canva: 'V',
};

const competitorColors: Record<string, string> = {
  hootsuite: 'bg-yellow-100 text-yellow-700',
  buffer: 'bg-blue-100 text-blue-700',
  'sprout-social': 'bg-green-100 text-green-700',
  later: 'bg-pink-100 text-pink-700',
  jasper: 'bg-purple-100 text-purple-700',
  'copy-ai': 'bg-indigo-100 text-indigo-700',
  chatgpt: 'bg-emerald-100 text-emerald-700',
  canva: 'bg-cyan-100 text-cyan-700',
};

export default function ComparePage() {
  const comparisons = getAllComparisons();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumb items={[{ label: 'Compare', href: '/compare' }]} />
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            How <span className="text-orange-500">KontentFire</span> Compares
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            See how KontentFire stacks up against the most popular social media tools.
            AI-powered content creation, scheduling, and publishing — all in one platform.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-700">
              <Bot className="h-5 w-5 text-orange-500" />
              <span className="font-medium">AI Content Generation</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <DollarSign className="h-5 w-5 text-orange-500" />
              <span className="font-medium">From $19/month</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Zap className="h-5 w-5 text-orange-500" />
              <span className="font-medium">Full Automation</span>
            </div>
          </div>
          <div className="max-w-md mx-auto">
            <Image
              src="/mockups/graphic-stats.png"
              alt="KontentFire delivers 3x more engagement for your social media content"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold ${competitorColors[comparison.slug] ?? 'bg-slate-100 text-slate-700'}`}
                  >
                    {competitorIcons[comparison.slug] ?? '?'}
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-900 group-hover:text-orange-500 transition-colors">
                      vs {comparison.competitor}
                    </h2>
                    <p className="text-sm text-slate-500">{comparison.pricing.competitor.split('(')[0].trim()}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{comparison.tagline}</p>
                <div className="flex items-center gap-1 text-orange-500 text-sm font-medium group-hover:gap-2 transition-all">
                  Compare now <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why KontentFire */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Why Businesses Choose KontentFire
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Sparkles className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Creates Your Content</h3>
                <p className="text-slate-600">
                  Stop staring at blank pages. KontentFire uses OpenAI, Claude, and Gemini to generate
                  platform-specific posts with text and images in seconds.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Zap className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Full Automation</h3>
                <p className="text-slate-600">
                  Generate, schedule, and publish to Facebook, Instagram, LinkedIn, and WordPress
                  without switching between tools or copying content manually.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <DollarSign className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Save 80% or More</h3>
                <p className="text-slate-600">
                  Starting at $19/month with AI content included, KontentFire costs a fraction of
                  enterprise tools like Hootsuite ($99+) or Sprout Social ($249+).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join thousands of businesses using AI to automate their social media content.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button variant="primary" size="lg">
                Try KontentFire Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {hubFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: hubFaqs.map((faq) => ({
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
