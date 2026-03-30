import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  Wrench,
  Target,
  Sparkles,
  Clock,
} from 'lucide-react';
import { getAllResources, getResourcesByCategory } from '@/data/resources';

export const metadata: Metadata = {
  title: 'Free Guides & Resources for Social Media Marketing | KontentFire',
  description:
    'Free guides, tools, and strategies for social media marketing and content automation. Learn how to automate social media, generate AI content, and grow your business.',
  keywords:
    'social media marketing resources, content automation guides, social media strategy guides, AI content generation resources',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Free Guides & Resources for Social Media Marketing | KontentFire',
    description:
      'Free guides, tools, and strategies for social media marketing and content automation.',
    type: 'website',
    url: 'https://kontentfire.com/resources',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing Resources | KontentFire',
    description:
      'Free guides, tools, and strategies for social media marketing and content automation.',
  },
};

const categoryConfig = {
  guides: {
    label: 'Guides',
    icon: BookOpen,
    description: 'In-depth guides covering social media marketing and AI content generation from beginner to advanced.',
  },
  tools: {
    label: 'Tools & Templates',
    icon: Wrench,
    description: 'Practical tools, templates, and calculators to streamline your social media workflow.',
  },
  strategies: {
    label: 'Strategies',
    icon: Target,
    description: 'Proven strategies for growing your brand, measuring ROI, and optimizing your social media presence.',
  },
} as const;

const categoryBadgeColors: Record<string, string> = {
  guides: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  tools: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  strategies: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
};

const hubFaqs = [
  {
    question: 'What resources does KontentFire offer for free?',
    answer:
      'KontentFire provides free in-depth guides on social media automation, AI content generation, content calendars, posting strategies, ROI measurement, and more. Each resource includes actionable steps, templates, and FAQs designed to help businesses grow their social media presence.',
  },
  {
    question: 'Who are these resources for?',
    answer:
      'These resources are designed for small business owners, marketing managers, social media managers, and agencies who want to improve their social media marketing results using modern tools and AI-powered automation.',
  },
  {
    question: 'How can I automate my social media marketing?',
    answer:
      'Start with our comprehensive guide on social media automation, which walks you through selecting the right tools, setting up AI content generation, building a content calendar, and scheduling posts across multiple platforms. KontentFire automates the entire pipeline from content creation to publishing.',
  },
  {
    question: 'Do I need experience with AI to use these guides?',
    answer:
      'No. Each guide is written for beginners and progressively covers more advanced topics. You do not need any technical background or AI experience to follow the step-by-step instructions in our resources.',
  },
  {
    question: 'How often are these resources updated?',
    answer:
      'We update our resources regularly to reflect the latest platform algorithm changes, AI tool developments, and social media marketing best practices. All guides include current data and recommendations for 2026.',
  },
];

export default function ResourcesPage() {
  const guides = getResourcesByCategory('guides');
  const tools = getResourcesByCategory('tools');
  const strategies = getResourcesByCategory('strategies');

  const categories = [
    { key: 'guides' as const, resources: guides },
    { key: 'tools' as const, resources: tools },
    { key: 'strategies' as const, resources: strategies },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Resources', href: '/resources' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              <span>Free Resources</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Free Guides & Resources for{' '}
              <span className="fire-text">Social Media Marketing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Everything you need to automate social media, generate AI content, and grow your
              business online. Practical, actionable, and completely free.
            </p>
          </div>

          {/* Category Sections */}
          {categories.map(({ key, resources: categoryResources }) => {
            const config = categoryConfig[key];
            const Icon = config.icon;

            return (
              <section key={key} className="mb-16">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {config.label}
                  </h2>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 ml-12">
                  {config.description}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryResources.map((resource) => (
                    <Link
                      key={resource.slug}
                      href={`/resources/${resource.slug}`}
                      className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all hover:shadow-lg"
                    >
                      <span
                        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${categoryBadgeColors[resource.category]}`}
                      >
                        {categoryConfig[resource.category].label}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <Clock className="h-3.5 w-3.5" />
                          {Math.max(5, Math.ceil(resource.content.replace(/<[^>]+>/g, '').split(/\s+/).length / 200))} min read
                        </span>
                        <span className="inline-flex items-center text-sm font-medium text-orange-500 group-hover:gap-2 transition-all">
                          Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {hubFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex p-3 rounded-full bg-orange-500/20 mb-4">
              <Sparkles className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Put These Strategies Into Action?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              KontentFire automates everything you just learned. AI content generation,
              smart scheduling, multi-platform publishing, and analytics, all in one dashboard.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
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
            mainEntity: hubFaqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />

      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Free Guides & Resources for Social Media Marketing',
            description:
              'Free guides, tools, and strategies for social media marketing and content automation.',
            url: 'https://kontentfire.com/resources',
            publisher: {
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
