import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, ArrowRight, TrendingUp, Shuffle, Calendar, Target, Brain, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Post Ideas - AI-Powered Content Ideas Generator',
  description: 'Never run out of social media post ideas. KontentFire\'s AI suggests content ideas based on your industry, trends, and audience — so you always know what to post.',
  keywords: ['social media post ideas', 'content ideas for social media', 'what to post on social media', 'social media content ideas', 'AI content ideas'],
  alternates: {
    canonical: '/features/post-ideas',
  },
};

const capabilities = [
  { icon: Brain, title: 'Industry-Specific Ideas', description: 'AI generates content ideas tailored to your specific industry. A fitness studio gets different suggestions than a law firm or SaaS company.' },
  { icon: TrendingUp, title: 'Trend-Based Suggestions', description: 'Stay relevant with ideas based on current trends, seasonal events, and industry news. The AI monitors what is resonating right now.' },
  { icon: Shuffle, title: 'Content Mix Variety', description: 'Get a balanced mix of educational, entertaining, promotional, and engagement-focused ideas. Never fall into a repetitive content rut.' },
  { icon: Calendar, title: 'Calendar Integration', description: 'Ideas connect directly to your content calendar. Accept an idea and it becomes a scheduled post with one click — ready for AI generation.' },
  { icon: Target, title: 'Goal-Aligned Ideas', description: 'Tell the AI your goals — brand awareness, lead generation, engagement — and get ideas specifically designed to achieve those objectives.' },
  { icon: Lightbulb, title: 'Unlimited Inspiration', description: 'Generate fresh ideas anytime. Request new batches on demand or receive weekly idea suggestions automatically via your dashboard.' },
];

const steps = [
  { step: '1', title: 'Set Your Profile', description: 'Tell us your industry, target audience, and content goals. The AI uses this context for relevant suggestions.' },
  { step: '2', title: 'Browse Ideas', description: 'Review AI-generated content ideas organized by category, platform, and content type.' },
  { step: '3', title: 'Select & Expand', description: 'Choose the ideas you like and let AI expand them into full posts with captions, hashtags, and images.' },
  { step: '4', title: 'Schedule & Publish', description: 'Add finished posts to your content calendar and publish across all your connected platforms.' },
];

const ideaCategories = [
  'Educational tips & how-tos',
  'Behind-the-scenes content',
  'Customer success stories',
  'Industry news & trends',
  'Polls & engagement posts',
  'Seasonal & holiday content',
  'Product showcases',
  'Team & culture highlights',
];

const faqs = [
  { question: 'How does AI suggest social media post ideas?', answer: 'KontentFire\'s AI analyzes your industry, target audience, content history, and current trends to generate relevant post ideas. It considers factors like seasonal relevance, platform-specific content types, engagement patterns, and your stated business goals to produce ideas that are both timely and strategic.' },
  { question: 'Are the ideas customized to my specific business?', answer: 'Yes. The AI uses your business profile, industry, and past content performance to tailor suggestions. A restaurant will get ideas about menu highlights and food photography, while a tech startup gets ideas about product demos and thought leadership. The more you use KontentFire, the more personalized the suggestions become.' },
  { question: 'Can I turn an idea directly into a post?', answer: 'Absolutely. Every generated idea can be expanded into a full post with one click. The AI creates platform-optimized content complete with captions, hashtags, and image suggestions. From idea to publishable post in seconds — no manual writing required.' },
  { question: 'How often are new ideas generated?', answer: 'You can generate new ideas on demand anytime you need inspiration. Additionally, KontentFire can be set to deliver fresh idea batches weekly or daily to your dashboard. The AI ensures ideas stay fresh and avoids repeating suggestions you have already seen or used.' },
  { question: 'What types of content ideas does it suggest?', answer: 'KontentFire suggests a diverse mix of content types including educational tips, behind-the-scenes content, customer stories, industry news commentary, engagement posts like polls and questions, seasonal content, product showcases, and team culture highlights. The mix is balanced to keep your feed varied and engaging.' },
];

export default function PostIdeasPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Features', href: '/features' }, { label: 'Post Ideas', href: '/features/post-ideas' }]} className="mb-8" />
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4" />
              <span>Post Ideas</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Never Run Out of <span className="fire-text">Post Ideas</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Stuck on what to post? KontentFire&apos;s AI suggests endless content ideas tailored to your industry, audience, and goals — so you always know exactly what to share.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Get Content Ideas <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Capabilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Smart Idea Generation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 text-white mb-4">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Idea Categories */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Content Idea Categories
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {ideaCategories.map((category, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                    <span className="text-white font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">How It Works</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((s, index) => (
                <div key={index} className="text-center bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 text-white font-bold text-xl mb-4">{s.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{s.description}</p>
                </div>
              ))}
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
                <div className="text-sm text-slate-500 dark:text-slate-400">Turn ideas into posts</div>
              </Link>
              <Link href="/features/content-calendar" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Calendar</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plan your schedule</div>
              </Link>
              <Link href="/features/brand-voice" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Brand Voice</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Keep your tone consistent</div>
              </Link>
              <Link href="/features/templates" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Content Templates</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Proven content formats</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for Unlimited Content Ideas?</h2>
            <p className="text-slate-300 mb-8">Let AI handle the brainstorming so you can focus on growing your business.</p>
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
