import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
} from 'lucide-react';
import { markdownToHtml } from '@/lib/markdown';
import {
  getAllChapters,
  getChapterBySlug,
  getEstimatedReadingTime,
  PART_COLORS,
  PART_ACCENT_COLORS,
  BOOK_TITLE,
} from '@/data/book-chapters';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) return {};

  const readingTime = getEstimatedReadingTime(chapter.wordCount);

  return {
    title: `${chapter.title} | ${BOOK_TITLE}`,
    description: chapter.description,
    keywords: chapter.keywords.join(', '),
    alternates: { canonical: `/guides/books/${slug}` },
    openGraph: {
      title: `${chapter.title} | ${BOOK_TITLE}`,
      description: chapter.description,
      type: 'article',
      url: `https://kontentfire.com/guides/books/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${chapter.title} | ${BOOK_TITLE}`,
      description: chapter.description,
    },
    other: {
      'article:reading_time': `${readingTime} minutes`,
    },
  };
}

function getChapterContent(manuscriptFile: string): string {
  try {
    const filePath = path.join(process.cwd(), manuscriptFile);
    const markdown = fs.readFileSync(filePath, 'utf-8');
    return markdownToHtml(markdown);
  } catch {
    return '<p>Chapter content is loading. Please check back shortly.</p>';
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const chapters = getAllChapters();
  const currentIndex = chapters.findIndex((ch) => ch.slug === slug);
  const prevChapter =
    currentIndex > 0 ? chapters[currentIndex - 1] : undefined;
  const nextChapter =
    currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : undefined;

  const htmlContent = getChapterContent(chapter.manuscriptFile);
  const readingTime = getEstimatedReadingTime(chapter.wordCount);

  // Related chapters: same part or adjacent
  const relatedChapters = chapters
    .filter(
      (ch) =>
        ch.slug !== slug &&
        (ch.partNumber === chapter.partNumber ||
          Math.abs(ch.number - chapter.number) === 1)
    )
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: chapter.title,
    description: chapter.description,
    author: { '@type': 'Organization', name: 'KontentFire' },
    publisher: {
      '@type': 'Organization',
      name: 'KontentFire',
      url: 'https://kontentfire.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kontentfire.com/guides/books/${slug}`,
    },
    isPartOf: {
      '@type': 'Book',
      name: 'The AI Apprentice: How Trade Service Businesses Build a Content Engine That Prints Money',
      url: 'https://kontentfire.com/guides/books',
    },
    wordCount: chapter.wordCount,
    inLanguage: 'en',
    isAccessibleForFree: true,
    keywords: chapter.keywords.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navigation />

      <main className="min-h-screen bg-white dark:bg-slate-950">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-4">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Books', href: '/guides/books' },
              { label: chapter.title, href: `/guides/books/${slug}` },
            ]}
          />
        </div>

        {/* Chapter Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-bold bg-gradient-to-br ${PART_COLORS[chapter.partNumber]} text-white`}
            >
              {chapter.number === 11 ? 'App' : chapter.number}
            </span>
            <span
              className={`text-xs font-bold tracking-widest uppercase ${PART_ACCENT_COLORS[chapter.partNumber]}`}
            >
              {chapter.partNumber === 0
                ? 'Introduction'
                : chapter.partNumber === 5
                  ? 'Reference'
                  : `Part ${chapter.partNumber}: ${chapter.partTitle}`}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
            {chapter.title}
          </h1>

          {chapter.subtitle && (
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-4">
              {chapter.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            {chapter.tradeFocus && (
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full font-medium text-xs ${PART_ACCENT_COLORS[chapter.partNumber]} bg-slate-100 dark:bg-slate-800`}
              >
                {chapter.tradeFocus}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {chapter.wordCount.toLocaleString()} words
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readingTime} min read
            </span>
          </div>
        </header>

        {/* Top Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
          <ChapterNavigation prev={prevChapter} next={nextChapter} />
        </div>

        {/* Chapter Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="book-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Bottom Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4">
          <ChapterNavigation prev={prevChapter} next={nextChapter} />
        </div>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 text-sm text-orange-300 mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Put This Chapter Into Practice</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Ready to Build Your Content Engine?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              KontentFire automates the techniques from this
              chapter&nbsp;&mdash; brand voice, AI prompts, scheduling,
              analytics&nbsp;&mdash; all in one platform built for trade
              businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">
                  Start Your Free Trial{' '}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides/books">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Back to All Chapters
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Chapters */}
        {relatedChapters.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Continue Reading
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedChapters.map((ch) => (
                <Link
                  key={ch.slug}
                  href={`/guides/books/${ch.slug}`}
                  className="group block bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 p-5 transition-all duration-200"
                >
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold bg-gradient-to-br ${PART_COLORS[ch.partNumber]} text-white mb-3`}
                  >
                    {ch.number === 11 ? 'A' : ch.number}
                  </span>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-1">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {ch.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                    <Clock className="h-3 w-3" />
                    {getEstimatedReadingTime(ch.wordCount)} min read
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface ChapterNavigationProps {
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

function ChapterNavigation({ prev, next }: ChapterNavigationProps) {
  return (
    <div className="flex items-center justify-between py-4 border-t border-b border-slate-200 dark:border-slate-700">
      {prev ? (
        <Link
          href={`/guides/books/${prev.slug}`}
          className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors max-w-[45%]"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
          <span className="truncate hidden sm:inline">{prev.title}</span>
          <span className="sm:hidden">Previous</span>
        </Link>
      ) : (
        <span />
      )}
      <Link
        href="/guides/books"
        className="text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex-shrink-0"
      >
        All Chapters
      </Link>
      {next ? (
        <Link
          href={`/guides/books/${next.slug}`}
          className="group flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors max-w-[45%] text-right"
        >
          <span className="truncate hidden sm:inline">{next.title}</span>
          <span className="sm:hidden">Next</span>
          <ArrowRight className="h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
