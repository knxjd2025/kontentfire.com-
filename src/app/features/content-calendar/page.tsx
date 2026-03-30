import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Calendar, CheckCircle, ArrowRight, Clock, Eye, Layers, BarChart3, Repeat, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Content Calendar - Plan & Schedule Posts',
  description: 'Plan your social media strategy with KontentFire\'s content calendar. Schedule posts across LinkedIn, Facebook, Instagram, and Twitter from one visual planner.',
  keywords: ['social media content calendar', 'content planning tool', 'social media planner', 'content scheduling calendar', 'social media schedule'],
  alternates: {
    canonical: '/features/content-calendar',
  },
};

const capabilities = [
  { icon: Eye, title: 'Visual Calendar View', description: 'See your entire content plan at a glance. Drag and drop posts to reschedule, spot gaps in coverage, and maintain a consistent posting cadence.' },
  { icon: Layers, title: 'Multi-Platform Overview', description: 'View all platforms in one calendar. Color-coded by platform so you can instantly see your LinkedIn, Facebook, Instagram, and Twitter schedule.' },
  { icon: Clock, title: 'Optimal Timing', description: 'AI suggests the best times to post based on your audience engagement patterns. Maximize reach by publishing when your followers are most active.' },
  { icon: Repeat, title: 'Recurring Schedules', description: 'Set up recurring posting patterns. Define weekly themes like Motivation Monday or Tip Tuesday and let the calendar auto-populate.' },
  { icon: BarChart3, title: 'Performance Tracking', description: 'See how scheduled posts perform after publishing. Track engagement directly from the calendar to refine your future content plan.' },
  { icon: Calendar, title: 'Bulk Scheduling', description: 'Upload or generate a batch of posts and schedule them all at once. Fill your calendar for the entire month in minutes.' },
];

const steps = [
  { step: '1', title: 'Generate Content', description: 'Use AI to create posts or import your own content into the calendar.' },
  { step: '2', title: 'Drag & Schedule', description: 'Place posts on specific dates and times using the visual calendar interface.' },
  { step: '3', title: 'Review & Approve', description: 'Preview how each post will look on its target platform before it goes live.' },
  { step: '4', title: 'Auto-Publish', description: 'KontentFire publishes your content automatically at the scheduled time.' },
];

const faqs = [
  { question: 'What is a social media content calendar?', answer: 'A social media content calendar is a planning tool that helps you organize, schedule, and manage your social media posts across multiple platforms. KontentFire\'s content calendar combines AI-powered content generation with visual scheduling so you can plan weeks or months of content in advance.' },
  { question: 'Can I schedule posts for multiple platforms at once?', answer: 'Yes. KontentFire\'s content calendar lets you schedule posts for LinkedIn, Facebook, Instagram, and Twitter simultaneously. You can create platform-specific versions of the same content or schedule unique posts for each platform — all from one visual interface.' },
  { question: 'Does the calendar suggest optimal posting times?', answer: 'Yes. KontentFire analyzes engagement patterns and suggests the best times to post for each platform. The AI considers factors like your audience\'s active hours, platform-specific peak times, and historical performance data to recommend optimal scheduling.' },
  { question: 'Can I plan content more than a month in advance?', answer: 'Absolutely. There is no limit on how far ahead you can schedule content. Many users plan content quarters in advance, especially around seasonal campaigns, product launches, or industry events. The calendar supports unlimited future scheduling.' },
  { question: 'How do I fill gaps in my content calendar?', answer: 'KontentFire\'s AI can automatically identify gaps in your content calendar and suggest posts to fill them. You can also use the bulk generation feature to create multiple posts at once, or set up recurring content themes that auto-populate your calendar weekly.' },
];

export default function ContentCalendarPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'Content Calendar', href: '/features/content-calendar' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Calendar className="h-4 w-4" />
              <span>Content Calendar</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Your <span className="fire-text">Content Calendar</span> on Autopilot
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Plan, schedule, and visualize your entire social media strategy from one powerful content calendar. Fill weeks of content in minutes with AI assistance.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Start Planning Content <ArrowRight className="ml-2 h-5 w-5" />
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
                <Image src="/screenshots/schedule-calendar.png" alt="KontentFire content calendar for planning and scheduling" width={1280} height={800} className="w-full" />
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Smart Calendar Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-4">
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
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12">
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
              <Link href="/features/scheduling" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Smart Scheduling</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Automated posting times</div>
              </Link>
              <Link href="/features/social-media-posts" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Post Generator</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Create posts with AI</div>
              </Link>
              <Link href="/features/automation" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Full Automation</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Set and forget workflows</div>
              </Link>
              <Link href="/features/multi-platform" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Multi-Platform</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Publish everywhere at once</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Plan Your Content?</h2>
            <p className="text-slate-300 mb-8">Start filling your content calendar with AI-generated posts today.</p>
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
