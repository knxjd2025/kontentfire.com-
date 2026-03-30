import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Share2, CheckCircle, ArrowRight, Globe, Zap, Shield, BarChart3, Repeat, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Platform Publishing - Post to All Social Media at Once',
  description: 'Publish to LinkedIn, Facebook, Instagram, and Twitter from one dashboard. KontentFire\'s multi-platform social media tool saves hours with cross-platform posting.',
  keywords: ['multi-platform social media tool', 'cross-platform posting', 'publish to all social media', 'social media publishing tool', 'post to multiple platforms'],
  alternates: {
    canonical: '/features/multi-platform',
  },
};

const platforms = [
  { name: 'LinkedIn', description: 'Professional content with proper formatting, hashtags, and article links optimized for the LinkedIn algorithm.' },
  { name: 'Facebook', description: 'Engaging posts with images, links, and calls to action tailored for Facebook Pages and business profiles.' },
  { name: 'Instagram', description: 'Visual-first content with optimized captions, hashtag sets, and story-ready formats for maximum engagement.' },
  { name: 'Twitter / X', description: 'Concise, punchy posts within character limits. Thread support for longer content and strategic hashtag usage.' },
];

const capabilities = [
  { icon: Globe, title: 'One Dashboard', description: 'Manage all your social media accounts from a single interface. No more switching between apps or browser tabs.' },
  { icon: Zap, title: 'Instant Cross-Posting', description: 'Publish to all connected platforms simultaneously with one click. Each version is automatically optimized for its platform.' },
  { icon: Shield, title: 'Platform Compliance', description: 'Content is automatically formatted to meet each platform\'s requirements — character limits, image sizes, and link formatting.' },
  { icon: BarChart3, title: 'Unified Analytics', description: 'Track performance across all platforms in one view. Compare engagement rates, reach, and growth side by side.' },
  { icon: Repeat, title: 'Smart Repurposing', description: 'Turn one piece of content into platform-specific versions. A blog post becomes a LinkedIn article, tweet thread, and Instagram carousel.' },
  { icon: Share2, title: 'Team Collaboration', description: 'Multiple team members can create, review, and approve content across all platforms with role-based access controls.' },
];

const steps = [
  { step: '1', title: 'Connect Your Accounts', description: 'Link your LinkedIn, Facebook, Instagram, and Twitter accounts with secure OAuth authentication.' },
  { step: '2', title: 'Create or Generate Content', description: 'Write your own posts or let AI generate platform-optimized versions for each connected account.' },
  { step: '3', title: 'Preview & Customize', description: 'See exactly how your post will appear on each platform. Make platform-specific tweaks if needed.' },
  { step: '4', title: 'Publish Everywhere', description: 'Hit publish once and your content goes live across all selected platforms simultaneously.' },
];

const faqs = [
  { question: 'Which social media platforms does KontentFire support?', answer: 'KontentFire currently supports LinkedIn, Facebook (Pages), Instagram, and Twitter/X. Google My Business integration is on the roadmap. All platforms are managed from a single dashboard with platform-specific content optimization.' },
  { question: 'Does cross-platform posting mean the same content goes everywhere?', answer: 'Not necessarily. KontentFire can post identical content to all platforms, but it also supports platform-specific customization. The AI automatically adapts tone, length, hashtags, and formatting for each platform. You can also manually edit the version for each platform before publishing.' },
  { question: 'How do I connect my social media accounts?', answer: 'Connecting accounts uses secure OAuth authentication. You click "Connect" for each platform, sign in to your social account, and grant KontentFire posting permissions. Your login credentials are never stored — only secure access tokens that can be revoked at any time.' },
  { question: 'Can I schedule posts for different times on different platforms?', answer: 'Yes. While you can publish to all platforms simultaneously, you can also set platform-specific scheduling. For example, post to LinkedIn at 8 AM for the professional audience, Instagram at noon for visual engagement, and Twitter at 5 PM for the evening scroll.' },
  { question: 'What happens if a post fails on one platform?', answer: 'KontentFire uses a robust retry system with exponential backoff. If a post fails on one platform, it automatically retries up to 5 times. Other platforms are not affected. You receive a notification if a post ultimately fails, and can manually retry or edit and repost.' },
];

export default function MultiPlatformPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'Multi-Platform Publishing', href: '/features/multi-platform' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Share2 className="h-4 w-4" />
              <span>Multi-Platform Publishing</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Publish to <span className="fire-text">Every Platform</span> at Once
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Stop logging into four different apps. Publish to LinkedIn, Facebook, Instagram, and Twitter from one dashboard — with content optimized for each platform.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Connect Your Accounts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white dark:bg-slate-900/60 rounded-md px-4 py-1 text-xs text-slate-500 dark:text-slate-400 font-mono">app.kontentfire.com</div>
                  </div>
                </div>
                <Image src="/screenshots/multi-platform.png" alt="KontentFire multi-platform connected accounts" width={1280} height={800} className="w-full" />
              </div>
            </div>
          </div>

          {/* Supported Platforms */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Supported Platforms
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{platform.name}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{platform.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Why Multi-Platform Matters
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                How It Works
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {steps.map((s, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white font-bold text-xl mb-4">{s.step}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-white/80 text-sm">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>FAQs</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Related Features</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features/social-media-posts" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Post Generator</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Create posts with AI</div>
              </Link>
              <Link href="/features/content-calendar" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Calendar</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plan your schedule</div>
              </Link>
              <Link href="/features/scheduling" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Smart Scheduling</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Post at the right time</div>
              </Link>
              <Link href="/features/analytics" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Analytics</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Track cross-platform performance</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Publish Everywhere?</h2>
            <p className="text-slate-300 mb-8">Connect your accounts and start publishing to all platforms from one place.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">Sign Up Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/features" className="text-slate-400 hover:text-white transition-colors">All Features</Link>
              <Link href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</Link>
              <Link href="/use-cases" className="text-slate-400 hover:text-white transition-colors">Use Cases</Link>
              <Link href="/locations" className="text-slate-400 hover:text-white transition-colors">Locations</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer }
            }))
          })
        }}
      />
    </>
  );
}
