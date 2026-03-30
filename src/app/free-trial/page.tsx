import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { ScreenshotCarousel } from '@/components/demo/screenshot-carousel';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  CreditCard,
  Sparkles,
  Zap,
  HelpCircle,
  Calendar,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free 7-Day Trial - Try KontentFire Risk-Free',
  description:
    'Start your free 7-day trial of KontentFire. Full access to AI content generation, multi-platform publishing, free social media scheduler, and analytics. No credit card required.',
  keywords: [
    'KontentFire free trial',
    'AI social media free trial',
    'social media automation free trial',
    'content generator free trial',
    'free social media scheduler',
  ],
  alternates: {
    canonical: '/free-trial',
  },
};

const trialIncludes = [
  'Full AI content generation with GPT-4 and Claude',
  'Publish to LinkedIn, Facebook, Instagram, and Twitter',
  'Smart scheduling and automation',
  'Analytics dashboard with engagement tracking',
  'All 13+ content templates',
  'AI image generation',
  'Brand voice customization',
  'Content calendar and planning',
];

const guarantees = [
  {
    icon: CreditCard,
    title: 'No Credit Card Required',
    description: 'Start your trial instantly without entering payment information.',
  },
  {
    icon: Clock,
    title: 'Full 7-Day Access',
    description: 'Try every feature with no restrictions for a full week.',
  },
  {
    icon: Shield,
    title: 'Cancel Anytime',
    description: 'No commitment, no hidden fees. Cancel before the trial ends and pay nothing.',
  },
  {
    icon: Zap,
    title: 'Set Up in Minutes',
    description: 'Connect your social accounts and start creating content right away.',
  },
];

const faqs = [
  {
    question: 'What do I get during the free trial?',
    answer:
      'Full access to every KontentFire feature for 7 days including AI content generation, multi-platform publishing, scheduling, analytics, templates, and AI image generation. No features are locked or limited.',
  },
  {
    question: 'Do I need a credit card to start the trial?',
    answer:
      'No. You can start your 7-day free trial with just your email address. We only ask for payment information if you choose to continue after the trial.',
  },
  {
    question: 'What happens after the 7 days?',
    answer:
      'At the end of your trial, you can choose a monthly plan to continue using KontentFire. If you don\'t subscribe, your account stays active in read-only mode so you won\'t lose any content you created.',
  },
  {
    question: 'How many credits do I get during the trial?',
    answer:
      'Trial accounts receive 50 credits to use across content generation, image creation, and other AI-powered features. This is enough to create dozens of posts and experience the full platform.',
  },
  {
    question: 'Can I connect my real social media accounts?',
    answer:
      'Yes. You can connect your LinkedIn, Facebook, Instagram, and Twitter accounts during the trial and publish real content to them.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      'Absolutely. There is no commitment during or after the trial. Cancel anytime from your account settings, and you will not be charged.',
  },
];

export default function FreeTrialPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Free Trial', href: '/free-trial' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>7-Day Free Trial</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Try KontentFire <span className="fire-text">Risk-Free</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Get full access to AI-powered content generation, multi-platform publishing, and smart scheduling for 7 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              No credit card required. Cancel anytime.
            </p>
          </div>

          {/* Guarantees */}
          <section className="mb-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"
                >
                  <div className="inline-flex p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Everything Included in Your Trial
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  No features locked. No limitations. Full platform access for 7 days.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
                {trialIncludes.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link href="https://app.kontentfire.com/login">
                  <Button size="lg">
                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Get Started in 3 Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  icon: Sparkles,
                  title: 'Create Your Account',
                  description: 'Sign up with your email in 30 seconds. No credit card needed.',
                },
                {
                  step: '2',
                  icon: Zap,
                  title: 'Connect & Create',
                  description: 'Connect your social accounts and generate your first AI content.',
                },
                {
                  step: '3',
                  icon: Calendar,
                  title: 'Schedule & Publish',
                  description: 'Schedule posts across all platforms and watch engagement grow.',
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Mockups */}
          <section className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                AI-Generated Posts, Ready to Publish
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Real examples of what KontentFire creates for your business.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                <Image
                  src="/mockups/linkedin-post-1.png"
                  alt="AI-generated LinkedIn post for a roofing company"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                <Image
                  src="/mockups/instagram-post-2.png"
                  alt="AI-generated Instagram post for a landscaping business"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Screenshot Carousel */}
          <section className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                See What You Get
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Full access to every feature during your 7-day trial.
              </p>
            </div>
            <ScreenshotCarousel />
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>Trial FAQs</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Common Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-800 transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Social Media?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI to create, schedule, and publish social media content. Start your free 7-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">No credit card required. Cancel anytime.</p>
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
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </>
  );
}
