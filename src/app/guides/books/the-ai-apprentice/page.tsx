import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

// Force dynamic rendering — this page reads 12 manuscript files (55K words)
export const dynamic = 'force-dynamic';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Clock,
  Download,
  Mail,
  Sparkles,
  Star,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import { markdownToHtml } from '@/lib/markdown';
import {
  CHAPTERS,
  BOOK_PARTS,
  PART_COLORS,
  PART_ACCENT_COLORS,
  PART_BG_COLORS,
  type BookImage,
} from '@/data/book-chapters';

export const metadata: Metadata = {
  title:
    'The AI Apprentice: A Tradesperson\'s Guide to Social Media Content | Free Book',
  description:
    'Read the full book free. Learn how plumbers, roofers, HVAC techs, electricians, and other trade pros use AI to create months of social media content in hours. 10 chapters, real stories, copy-paste prompts.',
  keywords:
    'AI social media for trades, tradesperson marketing book, AI content for contractors, social media for plumbers, HVAC marketing guide, roofing social media, electrician marketing, AI apprentice book',
  alternates: { canonical: '/guides/books/the-ai-apprentice' },
  openGraph: {
    title:
      'The AI Apprentice: A Tradesperson\'s Guide to Social Media Content',
    description:
      'Free book: How trade pros use AI to build a content engine that generates leads while they are on the job site. 10 chapters, real stories, actionable prompts.',
    type: 'article',
    url: 'https://kontentfire.com/guides/books/the-ai-apprentice',
    images: [
      {
        url: '/books/ai-apprentice/images/ch00-004-book-roadmap.png',
        width: 1200,
        height: 630,
        alt: 'The AI Apprentice book roadmap showing the journey from chapter 1 through chapter 10',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AI Apprentice | Free Book for Trade Pros',
    description:
      'Learn how to use AI to create months of social media content in hours. Written for plumbers, roofers, HVAC techs, and every trade business owner.',
  },
};

// ---------------------------------------------------------------------------
// Data loading -- runs at build time (server component)
// ---------------------------------------------------------------------------

interface ManifestImage {
  id: string;
  chapter: string;
  position: string;
  provider: string;
  prompt: string;
  style: string;
  filename: string;
}

async function loadManifest(): Promise<ManifestImage[]> {
  try {
    const manifestPath = path.join(
      process.cwd(),
      'book',
      'images',
      'manifest.json'
    );
    const raw = await fs.readFile(manifestPath, 'utf-8');
    const data = JSON.parse(raw) as { images: ManifestImage[] };
    return data.images;
  } catch {
    // manifest.json may not exist on Vercel (book/images/ excluded)
    return [];
  }
}

async function loadChapterMarkdown(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'book', 'manuscript', fileName);
  return fs.readFile(filePath, 'utf-8');
}

function groupImagesByChapter(
  images: ManifestImage[]
): Record<string, BookImage[]> {
  const grouped: Record<string, BookImage[]> = {};
  for (const img of images) {
    if (!grouped[img.chapter]) {
      grouped[img.chapter] = [];
    }
    grouped[img.chapter].push({
      id: img.id,
      chapter: img.chapter,
      filename: img.filename,
      position: img.position,
      style: img.style,
    });
  }
  return grouped;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm text-orange-300 mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Free to read online</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              The AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Apprentice
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-6 leading-relaxed">
              A Tradesperson&apos;s Guide to Social Media Content That Actually
              Works
            </p>
            <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
              How plumbers, roofers, HVAC techs, electricians, landscapers, and
              every trade pro can use AI to create months of content in
              hours&nbsp;&mdash; while they are on the job site, not hunched
              over a phone at 7&nbsp;PM.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#chapter-0">
                <Button size="lg">
                  Start Reading <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#table-of-contents">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Table of Contents
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> ~4 hour read
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" /> 10 chapters
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" /> 50+ AI prompts
              </span>
            </div>
          </div>
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
                    A Tradesperson&apos;s Guide
                    <br />
                    to Social Media Content
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
  );
}

function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      className="bg-white dark:bg-slate-950 py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center">
          Table of Contents
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center mb-12">
          Four parts. Ten chapters. One complete system.
        </p>
        <div className="space-y-8">
          {BOOK_PARTS.map((part) => (
            <div key={part.number}>
              <div
                className={`inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3 ${
                  part.number === 0
                    ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    : part.number === 5
                      ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      : `bg-gradient-to-r ${PART_COLORS[part.number]} text-white`
                }`}
              >
                {part.number === 0
                  ? 'Start Here'
                  : part.number === 5
                    ? 'Reference'
                    : `Part ${part.number}: ${part.title}`}
              </div>
              <div className="space-y-2">
                {part.chapters.map((chIdx) => {
                  const ch = CHAPTERS[chIdx];
                  return (
                    <a
                      key={ch.id}
                      href={`#chapter-${ch.number}`}
                      className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                      <span
                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold bg-gradient-to-br ${PART_COLORS[ch.partNumber]} text-white`}
                      >
                        {ch.number === 11 ? 'A' : ch.number}
                      </span>
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {ch.title}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {ch.subtitle}
                          {ch.protagonist && ch.trade
                            ? ` \u2014 featuring ${ch.protagonist} (${ch.trade})`
                            : ''}
                        </div>
                      </div>
                      <ArrowRight className="flex-shrink-0 h-5 w-5 text-slate-300 group-hover:text-orange-500 transition-colors mt-0.5 ml-auto" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadCaptureCard() {
  return (
    <div className="my-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 md:p-10 text-white shadow-xl">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
          <Download className="h-4 w-4" />
          <span>Free Bonus Resource</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Get the AI Prompt Swipe File
        </h3>
        <p className="text-white/80 mb-6 leading-relaxed">
          Every single AI prompt from this book &mdash; plus 20 bonus prompts
          &mdash; organized by chapter and ready to copy-paste. Enter your email
          and we will send it straight to your inbox.
        </p>
        <form
          action="https://app.kontentfire.com/api/lead-capture"
          method="POST"
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input type="hidden" name="source" value="book-ai-apprentice" />
          <input type="hidden" name="asset" value="prompt-swipe-file" />
          <label htmlFor="lead-email" className="sr-only">
            Email address
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="flex-1 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-orange-600 transition-shadow duration-200"
          />
          <button
            type="submit"
            className="bg-white text-orange-600 font-semibold rounded-lg px-6 py-3 hover:bg-orange-50 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-orange-600 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Send It
          </button>
        </form>
        <p className="text-xs text-white/50 mt-3">
          No spam. Unsubscribe anytime. We respect your inbox like you respect
          your customers&apos; homes.
        </p>
      </div>
    </div>
  );
}

function ChapterImages({
  images,
  maxImages = 3,
}: {
  images: BookImage[];
  maxImages?: number;
}) {
  const displayed = images.slice(0, maxImages);
  if (displayed.length === 0) return null;

  return (
    <div className="my-8 grid gap-6 sm:grid-cols-2">
      {displayed.map((img) => (
        <figure key={img.id} className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            src={`/books/ai-apprentice/images/${img.filename}`}
            alt={img.position.replace(/^after /, '').replace(/^before /, '')}
            width={700}
            height={460}
            className="w-full h-auto"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 350px"
          />
          <figcaption className="sr-only">
            {img.position}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ChapterNav({
  currentIndex,
}: {
  currentIndex: number;
}) {
  const prev = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const next =
    currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
      {prev ? (
        <a
          href={`#chapter-${prev.number}`}
          className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">{prev.title}</span>
          <span className="sm:hidden">Previous</span>
        </a>
      ) : (
        <span />
      )}
      <a
        href="#table-of-contents"
        className="text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        Contents
      </a>
      {next ? (
        <a
          href={`#chapter-${next.number}`}
          className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
        >
          <span className="hidden sm:inline">{next.title}</span>
          <span className="sm:hidden">Next</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page component (server component)
// ---------------------------------------------------------------------------

export default async function AIApprenticeBookPage() {
  // Load all data at build time
  const manifestImages = await loadManifest();
  const imagesByChapter = groupImagesByChapter(manifestImages);

  const chaptersWithContent = await Promise.all(
    CHAPTERS.map(async (ch) => {
      const md = await loadChapterMarkdown(ch.fileName);
      const html = markdownToHtml(md);
      return { ...ch, html };
    })
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'The AI Apprentice',
    alternateName:
      "A Tradesperson's Guide to Social Media Content That Actually Works",
    author: { '@type': 'Organization', name: 'KontentFire' },
    publisher: { '@type': 'Organization', name: 'KontentFire' },
    inLanguage: 'en',
    genre: 'Business & Marketing',
    about:
      'AI-powered social media marketing for trade service businesses',
    audience: {
      '@type': 'Audience',
      audienceType:
        'Trade service business owners: plumbers, roofers, HVAC technicians, electricians, landscapers, painters, cleaners, pest control operators',
    },
    isAccessibleForFree: true,
    url: 'https://kontentfire.com/guides/books/the-ai-apprentice',
  };

  // Determine which chapters get the lead capture CTA after them
  const leadCaptureAfterChapters = new Set([2, 5, 8]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main className="min-h-screen bg-white dark:bg-slate-950 scroll-smooth">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Books', href: '/guides/books' },
              {
                label: 'The AI Apprentice',
                href: '/guides/books/the-ai-apprentice',
              },
            ]}
          />
        </div>

        {/* Hero */}
        <HeroSection />

        {/* Social proof bar */}
        <div className="bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-6">
          <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-orange-500" />
              Written for trade pros
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-orange-500" />
              Real stories, real results
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-orange-500" />
              Copy-paste AI prompts
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-orange-500" />
              No tech skills required
            </span>
          </div>
        </div>

        {/* Table of Contents */}
        <TableOfContents />

        {/* Chapters */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          {chaptersWithContent.map((ch, idx) => {
            const chapterKey =
              ch.id === 'appendices'
                ? 'appendix-a-platform-cheat-sheets'
                : ch.fileName.replace('.md', '');
            const images = imagesByChapter[chapterKey] || [];

            // Also gather appendix sub-chapters if this is the appendices chapter
            const appendixImages: BookImage[] = [];
            if (ch.id === 'appendices') {
              for (const key of Object.keys(imagesByChapter)) {
                if (
                  key.startsWith('appendix-') &&
                  key !== 'appendix-a-platform-cheat-sheets'
                ) {
                  appendixImages.push(...imagesByChapter[key]);
                }
              }
            }

            const allImages = [...images, ...appendixImages];

            return (
              <article
                key={ch.id}
                id={`chapter-${ch.number}`}
                className="scroll-mt-20"
              >
                {/* Part divider -- show when entering a new part */}
                {idx === 0 ||
                CHAPTERS[idx - 1].partNumber !== ch.partNumber ? (
                  <div
                    className={`mt-16 mb-10 rounded-2xl p-6 md:p-8 ${PART_BG_COLORS[ch.partNumber]}`}
                  >
                    <div
                      className={`text-xs font-bold tracking-widest uppercase mb-1 ${PART_ACCENT_COLORS[ch.partNumber]}`}
                    >
                      {ch.partNumber === 0
                        ? 'Begin'
                        : ch.partNumber === 5
                          ? 'Reference Material'
                          : `Part ${ch.partNumber}`}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                      {ch.partTitle}
                    </div>
                  </div>
                ) : null}

                {/* Chapter header */}
                <header className="mt-12 mb-8">
                  <div
                    className={`text-xs font-bold tracking-widest uppercase mb-2 ${PART_ACCENT_COLORS[ch.partNumber]}`}
                  >
                    {ch.partTitle}
                    {ch.protagonist && ch.trade
                      ? ` \u00b7 ${ch.protagonist} (${ch.trade})`
                      : ''}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {ch.title}
                  </h2>
                  {ch.subtitle && (
                    <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
                      {ch.subtitle}
                    </p>
                  )}
                </header>

                {/* First batch of images (hero-style for the chapter) */}
                {allImages.length > 0 && (
                  <figure className="my-6 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={`/books/ai-apprentice/images/${allImages[0].filename}`}
                      alt={`Illustration for ${ch.title}`}
                      width={900}
                      height={500}
                      className="w-full h-auto"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 900px"
                    />
                  </figure>
                )}

                {/* Chapter body */}
                <div
                  className="book-content"
                  dangerouslySetInnerHTML={{ __html: ch.html }}
                />

                {/* Remaining images gallery */}
                {allImages.length > 1 && (
                  <ChapterImages
                    images={allImages.slice(1)}
                    maxImages={4}
                  />
                )}

                {/* Chapter navigation */}
                <ChapterNav currentIndex={idx} />

                {/* Lead capture CTA after select chapters */}
                {leadCaptureAfterChapters.has(ch.number) && (
                  <LeadCaptureCard />
                )}
              </article>
            );
          })}

          {/* Final CTA */}
          <section className="mt-20 mb-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Build Your Content Engine?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              You just read the entire playbook. Now it is time to put it into
              action. KontentFire automates everything you learned&nbsp;&mdash;
              brand voice, AI prompts, scheduling, analytics&nbsp;&mdash; in one
              platform built for trade businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/free-trial">
                <Button size="lg">
                  Start Your Free Trial{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  View Pricing
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Sticky mobile TOC toggle */}
      <MobileTocToggle />
    </>
  );
}

// ---------------------------------------------------------------------------
// Client-side mobile TOC toggle (small island)
// ---------------------------------------------------------------------------

function MobileTocToggle() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href="#table-of-contents"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white shadow-2xl ring-4 ring-orange-500/20 hover:bg-orange-600 active:scale-95 transition-all duration-200"
        aria-label="Jump to table of contents"
      >
        <BookOpen className="h-6 w-6" />
      </a>
    </div>
  );
}
