import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Marketing Guides & Books | KontentFire',
  description:
    'Platform-specific marketing guides and comprehensive books for Instagram, LinkedIn, Facebook, and TikTok. Learn strategies, best posting times, content ideas, and how to automate your social media with AI.',
  keywords:
    'social media marketing guides, AI marketing books, platform marketing guides, Instagram marketing guide, LinkedIn marketing guide, Facebook marketing guide, TikTok marketing guide, social media strategy 2026',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Marketing Guides & Books | KontentFire',
    description:
      'Master every major social platform with our in-depth marketing guides and comprehensive books. Strategies, posting schedules, content ideas, and AI automation tips.',
    type: 'website',
    url: 'https://kontentfire.com/guides',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Guides & Books | KontentFire',
    description:
      'In-depth guides and books for Instagram, LinkedIn, Facebook, and TikTok marketing. Strategies, best times to post, and AI-powered automation.',
  },
};

const platformGuides = [
  {
    slug: 'instagram',
    name: 'Instagram',
    description:
      'Master Reels, Stories, Carousels, and hashtag strategy. Learn the best times to post, growth tactics, and how to automate your Instagram marketing with AI.',
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
    iconBg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    keywords: 'Reels, Stories, Carousels, Hashtags, Growth',
  },
  {
    slug: 'linkedin',
    name: 'LinkedIn',
    description:
      'Build thought leadership with LinkedIn content strategy. Discover algorithm tips, post formats that drive engagement, and AI-powered post generation for B2B audiences.',
    gradient: 'from-blue-600 to-blue-800',
    iconBg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    keywords: 'B2B, Thought Leadership, Articles, Newsletters',
  },
  {
    slug: 'facebook',
    name: 'Facebook',
    description:
      'Leverage Facebook Pages, Groups, and Ads for your business. Strategies for local businesses, content types that perform, and automation tips for consistent posting.',
    gradient: 'from-blue-500 to-blue-700',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    keywords: 'Pages, Groups, Ads, Local Business, Community',
  },
  {
    slug: 'tiktok',
    name: 'TikTok',
    description:
      'Tap into TikTok for business growth. Understand the algorithm, create content that goes viral, and learn how AI helps you keep up with the fastest-moving social platform.',
    gradient: 'from-black via-pink-600 to-cyan-400',
    iconBg: 'bg-gradient-to-br from-black via-pink-600 to-cyan-400',
    keywords: 'Trends, Algorithm, Short-Form Video, Viral Content',
  },
];

export default function GuidesHubPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Guides', href: '/guides' }]}
            className="mb-8"
          />

          {/* Hero */}
          <section className="text-center mb-16">
            <div className="inline-flex p-3 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-6">
              <BookOpen className="h-8 w-8 text-orange-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Marketing Guides & Books
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Every social platform has its own rules, audience, and best practices.
              Our in-depth guides and comprehensive books break down the strategies, posting schedules, and content
              formats that actually work &mdash; plus how KontentFire automates the hardest parts.
            </p>
          </section>

          {/* Platform Cards */}
          <section className="grid sm:grid-cols-2 gap-8 mb-20">
            {platformGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${guide.gradient}`}
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${guide.iconBg} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {guide.name[0]}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {guide.name} Marketing Guide
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {guide.keywords}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                    Read the Full Guide
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </section>

          {/* Books & Comprehensive Guides */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              Books & Comprehensive Guides
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto mb-10">
              Go deeper with our full-length books covering AI-powered content marketing strategies,
              complete with templates, prompts, and step-by-step playbooks.
            </p>
            <div className="max-w-3xl mx-auto">
              <Link
                href="/guides/books/the-ai-apprentice"
                className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-amber-200 dark:border-amber-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500" />
                <div className="p-8 sm:p-10">
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex shrink-0 w-20 h-28 rounded-lg bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 items-center justify-center shadow-lg">
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                          Book
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                          70,000+ Words
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                          119 Illustrations
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors mb-3">
                        The AI Apprentice: How Trade Service Businesses Build a Content Engine That Prints Money
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                        A comprehensive guide to using AI for social media marketing in trade businesses.
                        Covers plumbing, HVAC, electrical, roofing, landscaping, painting, cleaning, and
                        pest control. Includes 50+ ready-to-use AI prompts, templates, checklists, and
                        119 illustrations.
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                        Read More
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex p-3 rounded-full bg-orange-500/20 mb-4">
              <Sparkles className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Social Media?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              KontentFire generates platform-optimized content for Instagram, LinkedIn,
              Facebook, and more. Stop spending hours on content creation and start growing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
