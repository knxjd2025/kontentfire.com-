import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  PenLine,
  MessageSquare,
  ClipboardCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Social Media Tools - AI Marketing Tools | KontentFire',
  description:
    'Free AI-powered social media tools: LinkedIn post generator, caption generator, and social media audit checklist. Create better content in seconds.',
  keywords: [
    'free social media tools',
    'AI marketing tools',
    'social media generator',
    'free content tools',
    'AI social media tools',
  ],
  alternates: {
    canonical: '/tools',
  },
  openGraph: {
    title: 'Free Social Media Tools - AI Marketing Tools | KontentFire',
    description:
      'Free AI-powered social media tools: LinkedIn post generator, caption generator, and social media audit checklist.',
    type: 'website',
    url: 'https://kontentfire.com/tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Social Media Tools | KontentFire',
    description:
      'Free AI-powered social media tools to create better content in seconds.',
  },
};

const tools = [
  {
    title: 'AI Social Media Post Generator',
    description:
      'Generate ready-to-publish posts for LinkedIn, Facebook, Instagram, and Twitter. Choose your platform, post type, and get professional content with hashtags and pro tips.',
    href: '/tools/social-media-post-generator',
    icon: Sparkles,
    badge: 'Most Popular',
  },
  {
    title: 'LinkedIn Post Generator',
    description:
      'Generate professional LinkedIn posts in seconds. Choose your topic, post type, and tone, then get a publish-ready post with hashtags and timing tips.',
    href: '/tools/linkedin-post-generator',
    icon: PenLine,
    badge: 'AI-Powered',
  },
  {
    title: 'AI Caption Generator',
    description:
      'Create engaging captions for Instagram, Facebook, Twitter, and LinkedIn. Pick your platform and mood to get captions with emoji and hashtag suggestions.',
    href: '/tools/ai-caption-generator',
    icon: MessageSquare,
    badge: 'Multi-Platform',
  },
  {
    title: 'Social Media Audit Checklist',
    description:
      'Evaluate your social media presence with a 25-item interactive checklist across 5 categories. Get a score and actionable recommendations.',
    href: '/tools/social-media-audit',
    icon: ClipboardCheck,
    badge: 'Interactive',
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Tools', href: '/tools' }]}
            className="mb-8"
          />

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>100% Free</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Free Social Media{' '}
              <span className="fire-text">Tools</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              AI-powered tools to help you create better social media content,
              audit your strategy, and grow your online presence. No sign-up
              required.
            </p>
          </div>

          {/* Tool Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group">
                <div className="h-full bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {tool.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center text-orange-600 dark:text-orange-400 font-medium group-hover:gap-2 transition-all">
                    Try it free <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Unlimited Content Generation?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              These free tools give you a taste. KontentFire generates unlimited
              AI content, schedules posts across every platform, and tracks
              performance, all on autopilot.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
