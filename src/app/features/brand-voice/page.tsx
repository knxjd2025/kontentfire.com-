import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Mic, CheckCircle, ArrowRight, Settings, Palette, Shield, Brain, RefreshCw, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Brand Voice - Consistent Brand Messaging Across Platforms',
  description: 'Maintain your brand voice with AI. KontentFire learns your tone, style, and messaging to generate on-brand social media content every time.',
  keywords: ['AI brand voice', 'maintain brand voice with AI', 'consistent brand messaging', 'brand tone of voice tool', 'AI brand consistency'],
  alternates: {
    canonical: '/features/brand-voice',
  },
};

const capabilities = [
  { icon: Settings, title: 'Custom Voice Profiles', description: 'Define your brand\'s tone, personality, and style guidelines. Choose from professional, casual, witty, authoritative, friendly, or create a custom blend.' },
  { icon: Brain, title: 'AI That Learns', description: 'The more you use KontentFire, the better it understands your brand. The AI adapts to your editing patterns and preferences over time.' },
  { icon: Palette, title: 'Platform Adaptation', description: 'Your brand voice stays consistent but adapts naturally to each platform. Professional on LinkedIn, conversational on Twitter, visual on Instagram.' },
  { icon: Shield, title: 'Brand Guardrails', description: 'Set words to always use or never use. Define key messages, banned topics, and competitor mentions to keep content on-brand automatically.' },
  { icon: RefreshCw, title: 'Style Consistency', description: 'Whether generating one post or one hundred, every piece of content sounds like it came from the same team member.' },
  { icon: Mic, title: 'Multiple Brand Voices', description: 'Manage different brand voices for different products, campaigns, or audience segments — all from one account.' },
];

const steps = [
  { step: '1', title: 'Define Your Voice', description: 'Set your brand\'s tone, personality traits, key messages, and style preferences in a simple setup wizard.' },
  { step: '2', title: 'Provide Examples', description: 'Share examples of content that represents your brand well. The AI analyzes patterns in your existing content.' },
  { step: '3', title: 'Generate On-Brand Content', description: 'Every AI-generated post automatically follows your brand guidelines, tone, and messaging rules.' },
  { step: '4', title: 'Refine Over Time', description: 'Edit and approve content as usual. The AI learns from your changes to improve brand accuracy continuously.' },
];

const faqs = [
  { question: 'How does AI maintain my brand voice?', answer: 'KontentFire uses your brand voice profile — including tone settings, personality traits, key messages, and example content — as context for every piece of content it generates. The AI models process these guidelines alongside your content request to produce output that matches your specific brand identity.' },
  { question: 'Can I set different brand voices for different platforms?', answer: 'Yes. While your core brand identity stays consistent, you can set platform-specific tone adjustments. For example, your LinkedIn voice might be more professional and thought-leadership focused, while your Instagram voice is more casual and visual. The AI adapts naturally to these platform preferences.' },
  { question: 'How long does it take to set up my brand voice?', answer: 'The initial setup takes about 5 to 10 minutes. You select tone preferences, add key messages, and optionally paste examples of content you like. The AI starts generating on-brand content immediately. Brand voice accuracy improves over time as you edit and approve content.' },
  { question: 'What if the AI generates something off-brand?', answer: 'You can easily edit any generated content before publishing. More importantly, your edits help the AI learn. Over time, off-brand suggestions become rare. You can also set hard guardrails — specific words, phrases, or topics to always include or always avoid.' },
  { question: 'Can multiple team members use the same brand voice?', answer: 'Yes. Brand voice profiles are shared across your account, so every team member generating content uses the same guidelines. This ensures consistent messaging regardless of who creates the content — a major advantage over manual content creation where voice varies by writer.' },
];

export default function BrandVoicePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'Brand Voice', href: '/features/brand-voice' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Mic className="h-4 w-4" />
              <span>AI Brand Voice</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Your <span className="fire-text">Brand Voice</span>, Powered by AI
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Keep every post on-brand, every time. KontentFire learns your tone, style, and messaging to generate content that sounds authentically you — across every platform.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Set Up Your Brand Voice <ArrowRight className="ml-2 h-5 w-5" />
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
                <Image src="/screenshots/brand-voice.png" alt="KontentFire brand voice settings" width={1280} height={800} className="w-full" />
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Brand Voice Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white mb-4">
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
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 md:p-12">
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
              <Link href="/features/ai-content" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Content</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Generate with GPT-4 & Claude</div>
              </Link>
              <Link href="/features/templates" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Templates</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Proven content formats</div>
              </Link>
              <Link href="/features/social-media-posts" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">AI Post Generator</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Create posts with AI</div>
              </Link>
              <Link href="/features/post-ideas" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Post Ideas</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Never run out of ideas</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Define Your Brand Voice?</h2>
            <p className="text-slate-300 mb-8">Set up your brand voice in minutes and start generating on-brand content today.</p>
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
