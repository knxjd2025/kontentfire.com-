import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Wrench,
  Thermometer,
  Zap,
  Paintbrush,
  Layers,
  ChefHat,
  Bath,
  Home,
  LayoutPanelLeft,
  PaintBucket,
  DoorOpen,
  Blocks,
  Fence,
  TreePine,
  Scissors,
  TreeDeciduous,
  Droplets,
  Bug,
  DoorClosed,
  Waves,
  Sparkles,
  Hammer,
  Droplet,
  Sun,
  TrendingUp,
  BarChart3,
  Users,
} from 'lucide-react';
import { getAllIndustries, getIndustriesByCategory, type Industry } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Social Media Marketing for Home Service Businesses | KontentFire',
  description:
    'AI-powered social media marketing for contractors, plumbers, roofers, HVAC, landscapers, and home service businesses. Generate content that drives leads.',
  keywords:
    'social media for contractors, AI marketing for home services, plumber marketing, roofer social media, HVAC advertising, landscaper content marketing',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Social Media Marketing for Home Service Businesses | KontentFire',
    description:
      'AI-powered content automation for every home service trade. Plumbing, HVAC, roofing, landscaping, and more.',
    type: 'website',
    url: 'https://kontentfire.com/industries',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Social Media Marketing for Home Services | KontentFire',
    description:
      'Generate professional social media content for your trade business with AI. 20+ industries supported.',
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Thermometer,
  Zap,
  Paintbrush,
  Layers,
  ChefHat,
  Bath,
  Home,
  LayoutPanelLeft,
  PaintBucket,
  DoorOpen,
  Blocks,
  Fence,
  TreePine,
  Scissors,
  TreeDeciduous,
  Droplets,
  Bug,
  DoorClosed,
  Waves,
  Sparkles,
  Hammer,
  Droplet,
  Sun,
};

const categories = [
  { slug: 'interior' as const, label: 'Interior' },
  { slug: 'exterior' as const, label: 'Exterior' },
  { slug: 'lawn-garden' as const, label: 'Lawn & Garden' },
  { slug: 'specialty' as const, label: 'Specialty' },
];

const hubFaqs = [
  {
    question: 'What is the best AI social media tool for home service businesses?',
    answer:
      'KontentFire is purpose-built for home service businesses. It generates industry-specific social media content for plumbers, roofers, HVAC companies, landscapers, electricians, and more. The AI understands trade-specific language, seasonal trends, and local marketing strategies to create posts that actually resonate with homeowners.',
  },
  {
    question: 'How does AI-generated social media content help contractors get more leads?',
    answer:
      'AI-generated content keeps your social media active and professional without requiring hours of your time. Consistent posting with educational tips, project showcases, and local engagement builds trust with homeowners. Businesses that post regularly on social media see 3-5x more inbound leads compared to those with inactive profiles.',
  },
  {
    question: 'Can AI create social media posts specific to my trade?',
    answer:
      'Yes. KontentFire generates content tailored to your specific trade, whether you are a plumber, roofer, HVAC technician, landscaper, electrician, or any other home service professional. The AI creates industry-appropriate captions, suggests relevant hashtags, and aligns content with seasonal demand patterns unique to your trade.',
  },
  {
    question: 'How much time can contractors save using AI for social media?',
    answer:
      'Most contractors report saving 5-10 hours per week on social media marketing when using AI content tools. Instead of spending evenings crafting posts, you can review and approve AI-generated content in minutes, then focus your time on billable work and growing your business.',
  },
  {
    question: 'Which social media platforms work best for home service businesses?',
    answer:
      'Facebook is the top platform for most home service businesses due to local targeting and community group engagement. Instagram is excellent for visual before-and-after content. TikTok works well for satisfying project videos. YouTube builds long-term authority with educational content. The best strategy uses 2-3 platforms consistently rather than trying to be everywhere.',
  },
];

function IndustryCard({ industry }: { industry: Industry }) {
  const IconComponent = iconMap[industry.icon] ?? Wrench;

  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group block rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-orange-600 dark:text-orange-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {industry.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
            {industry.description}
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <BarChart3 className="h-3 w-3" />
              {industry.stats.avgMonthlySearches.toLocaleString()} searches/mo
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {industry.stats.estimatedROI} ROI
            </span>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
}

export default function IndustriesPage() {
  const allIndustries = getAllIndustries();
  const totalSearches = allIndustries.reduce((s, i) => s + i.stats.avgMonthlySearches, 0);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Industries', href: '/industries' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              <span>{allIndustries.length}+ Trade Verticals</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Social Media Marketing for{' '}
              <span className="fire-text">Home Service Businesses</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              KontentFire generates AI-powered social media content tailored for every home
              service trade. From plumbers to roofers, HVAC to landscapers, we help contractors
              build their online presence and attract more customers.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-orange-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {allIndustries.length}+
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Industries Served
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-blue-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {totalSearches.toLocaleString()}+
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Monthly Searches
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">3-10x</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Average ROI</div>
                </div>
              </div>
            </div>

            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Start Creating Content <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Industries by Category */}
          {categories.map((category) => {
            const categoryIndustries = getIndustriesByCategory(category.slug);
            if (categoryIndustries.length === 0) return null;

            return (
              <section key={category.slug} className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {category.label} Services
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Social media marketing solutions for {category.label.toLowerCase()} home service
                  businesses.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryIndustries.map((industry) => (
                    <IndustryCard key={industry.slug} industry={industry} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Automate Your Social Media Marketing?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Join thousands of home service businesses using KontentFire to generate professional
              social media content with AI. Save time and get more leads.
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
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Common questions about AI social media marketing for home service businesses.
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {hubFaqs.map((faq) => (
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
    </>
  );
}
