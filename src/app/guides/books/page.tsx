import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Hammer,
  Sparkles,
  Star,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import {
  getAllChapters,
  getTotalWordCount,
  getEstimatedReadingTime,
  PART_COLORS,
  PART_ACCENT_COLORS,
} from '@/data/book-chapters';

export const metadata: Metadata = {
  title:
    'The AI Apprentice: Free Book on AI Social Media for Trade Businesses',
  description:
    'Read the full book free online. Learn how plumbers, roofers, HVAC techs, electricians, and contractors use AI to automate social media marketing. 54,000+ words, 10 chapters, 120+ illustrations.',
  keywords:
    'AI social media book, social media for contractors book, AI marketing guide trade businesses, AI apprentice book, trade business social media',
  alternates: { canonical: '/guides/books' },
  openGraph: {
    title:
      'The AI Apprentice: Free Book on AI Social Media for Trade Businesses',
    description:
      'Read the full book free online. 54,000+ words on how trade businesses use AI to automate social media marketing.',
    type: 'website',
    url: 'https://kontentfire.com/guides/books',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AI Apprentice | Free AI Marketing Book for Trades',
    description:
      '54,000+ words. 10 chapters. 120+ illustrations. Learn how plumbers, roofers, HVAC techs, and contractors use AI for social media.',
  },
};

const TRADES = [
  { name: 'Plumbing', icon: Wrench, color: 'text-blue-500' },
  { name: 'Roofing', icon: Hammer, color: 'text-red-500' },
  { name: 'HVAC', icon: Zap, color: 'text-yellow-500' },
  { name: 'Electrical', icon: Zap, color: 'text-amber-500' },
  { name: 'Landscaping', icon: Star, color: 'text-green-500' },
  { name: 'Painting', icon: Star, color: 'text-purple-500' },
  { name: 'Cleaning', icon: Sparkles, color: 'text-cyan-500' },
  { name: 'Pest Control', icon: CheckCircle2, color: 'text-orange-500' },
];

const FAQ_ITEMS = [
  {
    question: 'Is this book really free to read online?',
    answer:
      'Yes, every chapter is available to read for free on this website. No email required, no paywall, no tricks. We believe in providing value upfront.',
  },
  {
    question: 'Do I need to be tech-savvy to use the techniques in this book?',
    answer:
      'Not at all. If you can send a text message and use Google, you have every technical skill needed. The book uses plain language and step-by-step instructions designed for busy trade professionals, not tech experts.',
  },
  {
    question: 'Which AI tools does the book cover?',
    answer:
      'The book covers free tools like ChatGPT and Claude, plus KontentFire which was built specifically for trade businesses. Every technique works with free AI tools. KontentFire is optional but offers the fastest, most automated version of the system.',
  },
  {
    question: 'How long does it take to read the entire book?',
    answer:
      'The full book is about 54,000 words across 10 chapters plus appendices. At an average reading pace, that is roughly 3.5 to 4 hours. But you do not need to read it all at once. Each chapter stands on its own and includes actionable steps you can implement immediately.',
  },
  {
    question:
      'Is this book relevant for my specific trade (plumbing, roofing, HVAC, etc.)?',
    answer:
      'Yes. Each chapter features a different trade as its primary example, including plumbing, roofing, HVAC, electrical, landscaping, painting, cleaning, and pest control. The principles apply to every trade service business, and the appendices include trade-specific prompt templates.',
  },
];

export default function BooksPage() {
  const chapters = getAllChapters();
  const totalWords = getTotalWordCount();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'The AI Apprentice: How Trade Service Businesses Build a Content Engine That Prints Money',
    author: { '@type': 'Organization', name: 'KontentFire' },
    publisher: { '@type': 'Organization', name: 'KontentFire' },
    inLanguage: 'en',
    genre: 'Business & Marketing',
    isAccessibleForFree: true,
    url: 'https://kontentfire.com/guides/books',
    numberOfPages: 12,
    about:
      'AI-powered social media marketing for trade service businesses including plumbers, roofers, HVAC technicians, electricians, landscapers, painters, cleaners, and pest control operators.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      <main className="min-h-screen bg-white dark:bg-slate-950">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Books', href: '/guides/books' },
            ]}
            className="mb-8"
          />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 text-sm text-green-300 mb-6">
                  <BookOpen className="h-4 w-4" />
                  <span>Read Free Online</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                  The AI{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                    Apprentice
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 mb-4 leading-relaxed">
                  How Trade Service Businesses Build a Content Engine That Prints
                  Money
                </p>
                <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
                  The complete playbook for plumbers, roofers, HVAC techs,
                  electricians, landscapers, painters, cleaners, and pest control
                  operators who want to dominate social media using AI&nbsp;&mdash;
                  without becoming a full-time content creator.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/guides/books/the-ai-apprentice">
                    <Button size="lg">
                      Start Reading <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="#chapters">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                    >
                      View Chapters
                    </Button>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 max-w-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {Math.floor(totalWords / 1000)}K+
                    </div>
                    <div className="text-xs text-slate-400">Words</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-xs text-slate-400">Chapters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">120+</div>
                    <div className="text-xs text-slate-400">Illustrations</div>
                  </div>
                </div>
              </div>

              {/* Book visual */}
              <div className="relative hidden md:flex justify-center">
                <div className="relative w-72 h-96 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-2xl border border-white/10" />
                  <div className="absolute inset-4 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-1 bg-white/40 rounded mb-3" />
                      <div className="text-2xl font-extrabold leading-tight">
                        The AI
                        <br />
                        Apprentice
                      </div>
                      <div className="text-sm text-white/70 mt-2 leading-snug">
                        A Content Engine
                        <br />
                        That Prints Money
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-white/50" />
                      <Zap className="h-5 w-5 text-white/50" />
                      <Sparkles className="h-5 w-5 text-white/50" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-72 h-96 bg-slate-700/30 rounded-2xl -z-10 transform rotate-6" />
              </div>
            </div>
          </div>
        </section>

        {/* About the Book */}
        <section className="py-16 md:py-20 bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Who This Book Is For
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300 space-y-4">
              <p className="leading-relaxed">
                This book was written for one person: the trade service business
                owner who knows they need to show up on social media but
                doesn&apos;t have the time, energy, or desire to become a
                content creator.
              </p>
              <p className="leading-relaxed">
                If you run a plumbing company, a roofing business, an HVAC
                service, an electrical contracting firm, a landscaping
                operation, a painting company, a cleaning service, a pest
                control business&nbsp;&mdash; or any other trade service where
                you get paid to solve real problems with your hands and your
                expertise&nbsp;&mdash; this book is your playbook.
              </p>
              <p className="leading-relaxed">
                You don&apos;t need to be tech-savvy. You don&apos;t need a
                marketing degree. You need a system. And that&apos;s exactly
                what you&apos;re going to get.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6 text-center">
              What You&apos;ll Learn
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Define your brand voice so every piece of content sounds like you',
                'Use AI tools to generate dozens of high-quality posts in one sitting',
                'Build a content calendar covering every week of the year',
                'Batch your content creation into a monthly routine',
                'Edit AI-generated content using the Punch List system',
                'Schedule and publish across Facebook, Instagram, Google Business Profile, and more',
                'Measure what is working and cut what is not',
                'Delegate the entire system to someone else so your marketing runs itself',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter Listing */}
        <section
          id="chapters"
          className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
              All Chapters
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-12">
              Four parts. Ten chapters. Appendices. One complete system.
            </p>

            <div className="space-y-4">
              {chapters.map((ch) => (
                <Link
                  key={ch.slug}
                  href={`/guides/books/${ch.slug}`}
                  className="group block bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className="flex items-start gap-4 p-5">
                    <span
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br ${PART_COLORS[ch.partNumber]} text-white`}
                    >
                      {ch.number === 11 ? 'App' : ch.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {ch.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        {ch.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        {ch.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        {ch.tradeFocus && (
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full font-medium ${PART_ACCENT_COLORS[ch.partNumber]} bg-slate-100 dark:bg-slate-700`}
                          >
                            {ch.tradeFocus}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {ch.wordCount.toLocaleString()} words
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {getEstimatedReadingTime(ch.wordCount)} min read
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="flex-shrink-0 h-5 w-5 text-slate-300 group-hover:text-orange-500 transition-colors mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What Trades Are Covered */}
        <section className="py-16 md:py-20 bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Written for These Trades
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Each chapter features a different trade as its primary
              example. The principles apply to every trade service business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRADES.map((trade) => {
                const Icon = trade.icon;
                return (
                  <div
                    key={trade.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                  >
                    <Icon className={`h-8 w-8 ${trade.color}`} />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {trade.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm text-orange-300 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Ready to Put This Into Practice?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Start Building Your Content Engine Today
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Everything you read in the book works with free AI tools. But if
              you want the fastest, most automated version of the
              system&nbsp;&mdash; brand voice, AI prompts, scheduling, analytics
              &mdash; all in one platform built for trade
              businesses&nbsp;&mdash; KontentFire does it all.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">
                  Try KontentFire Free{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides/books/the-ai-apprentice">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Start Reading Chapter 1
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white dark:bg-slate-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.question}
                  className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
