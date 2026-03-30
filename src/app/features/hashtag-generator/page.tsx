import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { Hash, CheckCircle, ArrowRight, TrendingUp, Target, Layers, BarChart3, Zap, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Hashtag Generator - Best Hashtags for Social Media',
  description: 'Generate optimized hashtags for social media with AI. KontentFire suggests the best hashtags for Instagram, Twitter, LinkedIn, and Facebook to maximize your reach.',
  keywords: ['AI hashtag generator', 'best hashtags for social media', 'hashtag optimization', 'Instagram hashtag generator', 'social media hashtags'],
  alternates: {
    canonical: '/features/hashtag-generator',
  },
};

const capabilities = [
  { icon: TrendingUp, title: 'Trending Hashtags', description: 'AI identifies trending and high-performing hashtags in your industry. Stay relevant by using hashtags that are gaining momentum right now.' },
  { icon: Target, title: 'Niche Targeting', description: 'Get hashtags tailored to your specific niche and audience. The AI balances popular hashtags with niche-specific ones for maximum discoverability.' },
  { icon: Layers, title: 'Hashtag Sets', description: 'Generate complete hashtag sets optimized for each platform. Instagram gets 20-30 strategic hashtags, Twitter gets 2-3 targeted ones, LinkedIn gets industry-specific tags.' },
  { icon: BarChart3, title: 'Performance Data', description: 'See estimated reach and competition level for each suggested hashtag. Make informed decisions about which hashtags to include in your posts.' },
  { icon: Zap, title: 'Auto-Insertion', description: 'Hashtags are automatically added to AI-generated posts. No need to research and add them manually — the AI handles it as part of content creation.' },
  { icon: Hash, title: 'Banned Tag Detection', description: 'AI automatically avoids shadow-banned and restricted hashtags that could limit your content reach. Stay safe from platform penalties.' },
];

const steps = [
  { step: '1', title: 'Enter Your Topic', description: 'Provide a topic, keyword, or let the AI analyze your post content to suggest relevant hashtags.' },
  { step: '2', title: 'Select Your Platform', description: 'Choose the target platform — hashtag strategy differs significantly between Instagram, Twitter, and LinkedIn.' },
  { step: '3', title: 'Review Suggestions', description: 'Browse AI-suggested hashtags with reach estimates. Mix trending, niche, and branded hashtags for optimal results.' },
  { step: '4', title: 'Add to Your Post', description: 'Select hashtags to add to your content, or let the AI automatically include the optimal set.' },
];

const faqs = [
  { question: 'How does the AI hashtag generator work?', answer: 'KontentFire\'s AI analyzes your post content, industry, target audience, and current trends to suggest the most effective hashtags. It considers factors like hashtag popularity, competition level, relevance to your content, and platform-specific best practices to generate optimized hashtag sets.' },
  { question: 'How many hashtags should I use on each platform?', answer: 'The optimal number varies by platform. Instagram supports up to 30 hashtags, and research suggests 20-30 strategic hashtags perform best. Twitter works best with 1-3 hashtags. LinkedIn performs well with 3-5 industry-specific hashtags. KontentFire automatically adjusts the number based on your target platform.' },
  { question: 'Does the AI avoid banned or restricted hashtags?', answer: 'Yes. KontentFire maintains an updated database of shadow-banned and restricted hashtags across all platforms. The AI automatically filters these out of suggestions to protect your content from reduced visibility or platform penalties.' },
  { question: 'Can I save hashtag sets for reuse?', answer: 'Yes. You can save frequently used hashtag combinations as sets and apply them to future posts with one click. This is especially useful for recurring content themes or campaigns where you want consistent hashtag strategy.' },
  { question: 'Are the hashtags customized to my specific industry?', answer: 'Absolutely. The AI considers your industry, brand profile, and content history when suggesting hashtags. A real estate company, fitness brand, and SaaS startup will all receive completely different hashtag recommendations — even for similar content topics.' },
];

export default function HashtagGeneratorPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'Hashtag Generator', href: '/features/hashtag-generator' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Hash className="h-4 w-4" />
              <span>Hashtag Generator</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              AI-Powered <span className="fire-text">Hashtag Generator</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Stop guessing which hashtags work. KontentFire&apos;s AI suggests the best hashtags for your content, industry, and platform — maximizing your reach and discoverability.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Generate Hashtags Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Smart Hashtag Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white mb-4">
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
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12">
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
              <Link href="/features/post-ideas" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Post Ideas</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Never run out of ideas</div>
              </Link>
              <Link href="/features/multi-platform" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Multi-Platform</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Publish everywhere at once</div>
              </Link>
              <Link href="/features/analytics" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Analytics</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Track hashtag performance</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Optimize Your Hashtags?</h2>
            <p className="text-slate-300 mb-8">Start using AI-powered hashtags to boost your social media reach today.</p>
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
