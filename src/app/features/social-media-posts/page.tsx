import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Sparkles, CheckCircle, ArrowRight, Zap, Brain, Share2, Target, Palette, PenTool, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Social Media Post Generator - Create Platform-Optimized Posts',
  description: 'Generate engaging social media posts with AI. KontentFire\'s AI post writer creates platform-optimized content for LinkedIn, Facebook, Instagram, and Twitter in seconds.',
  keywords: ['AI social media post generator', 'AI post writer', 'social media content generator', 'AI social media writer', 'generate social media posts'],
  alternates: {
    canonical: '/features/social-media-posts',
  },
};

const capabilities = [
  { icon: Brain, title: 'AI-Powered Writing', description: 'GPT-4 and Claude craft compelling posts tailored to your industry, audience, and goals. Every post is unique and on-brand.' },
  { icon: Target, title: 'Platform-Optimized', description: 'Each post is automatically formatted for the target platform — ideal length, tone, and structure for LinkedIn, Facebook, Instagram, or Twitter.' },
  { icon: Palette, title: 'Multiple Formats', description: 'Generate single posts, carousels, threads, polls, stories, and more. Choose the format that fits your content strategy.' },
  { icon: PenTool, title: 'Easy Editing', description: 'AI-generated posts are fully editable. Tweak the tone, add details, or completely rewrite — you always have full control.' },
  { icon: Share2, title: 'One-Click Publishing', description: 'Publish directly to connected accounts or schedule for later. No copy-pasting between tools.' },
  { icon: Zap, title: 'Bulk Generation', description: 'Generate a full week of posts in minutes. Batch creation saves hours compared to writing each post manually.' },
];

const steps = [
  { step: '1', title: 'Choose Your Platform', description: 'Select LinkedIn, Facebook, Instagram, Twitter, or all of the above.' },
  { step: '2', title: 'Describe Your Topic', description: 'Enter a topic, keyword, or let the AI suggest ideas based on your industry.' },
  { step: '3', title: 'Generate & Customize', description: 'AI creates platform-optimized posts. Edit, approve, or regenerate until it is perfect.' },
  { step: '4', title: 'Publish or Schedule', description: 'Post immediately or add to your content calendar for optimal timing.' },
];

const faqs = [
  { question: 'How does the AI social media post generator work?', answer: 'KontentFire uses advanced AI models including GPT-4 and Claude to generate social media posts. You provide a topic or keyword, select your target platform, and the AI creates optimized content with the right tone, length, and format for that platform.' },
  { question: 'Can I generate posts for multiple platforms at once?', answer: 'Yes. KontentFire can generate platform-specific versions of the same topic simultaneously. A single idea becomes a professional LinkedIn post, a casual Instagram caption, a concise tweet, and a Facebook update — all tailored to each platform\'s best practices.' },
  { question: 'Will the AI posts sound like they were written by a robot?', answer: 'No. KontentFire uses your brand voice settings and advanced language models to produce natural, human-sounding content. You can adjust tone from professional to casual, witty to authoritative, and the AI adapts accordingly.' },
  { question: 'How many posts can I generate per month?', answer: 'Post generation uses credits based on your subscription plan. Spark includes 50 credits per month, Blaze includes 200, and Inferno includes 500. Each post generation uses one credit, and additional credits can be purchased anytime.' },
  { question: 'Can I edit posts before publishing?', answer: 'Absolutely. Every AI-generated post is fully editable before publishing. You can modify the text, add emojis or hashtags, swap images, or regenerate entirely. The AI is a starting point — you have complete creative control.' },
];

export default function SocialMediaPostsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'AI Social Media Posts', href: '/features/social-media-posts' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>AI Post Generator</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Generate <span className="fire-text">Social Media Posts</span> with AI
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Stop staring at a blank screen. KontentFire&apos;s AI post writer creates platform-optimized social media content in seconds — for LinkedIn, Facebook, Instagram, and Twitter.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Start Generating Posts <ArrowRight className="ml-2 h-5 w-5" />
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
                <Image src="/screenshots/content-list.png" alt="KontentFire content management with generated social media posts" width={1280} height={800} className="w-full" />
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Powerful Post Generation Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4">
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
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12">
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
              <Link href="/features/content-calendar" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Calendar</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plan your content schedule</div>
              </Link>
              <Link href="/features/hashtag-generator" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Hashtag Generator</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Optimize your reach</div>
              </Link>
              <Link href="/features/brand-voice" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Brand Voice</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Keep your tone consistent</div>
              </Link>
              <Link href="/features/multi-platform" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Multi-Platform</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Publish everywhere at once</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Generate Amazing Posts?</h2>
            <p className="text-slate-300 mb-8">Join thousands of businesses using AI to power their social media content.</p>
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
