import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  Wrench,
  Target,
  Sparkles,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { getAllResources, getResourceBySlug } from '@/data/resources';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const resources = getAllResources();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) return {};

  return {
    title: `${resource.title} | KontentFire`,
    description: resource.description,
    keywords: resource.keywords.join(', '),
    alternates: {
      canonical: `/resources/${slug}`,
    },
    openGraph: {
      title: `${resource.title} | KontentFire`,
      description: resource.description,
      type: 'article',
      url: `https://kontentfire.com/resources/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      description: resource.description,
    },
  };
}

const categoryConfig: Record<
  string,
  { label: string; icon: typeof BookOpen; color: string }
> = {
  guides: {
    label: 'Guide',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  },
  tools: {
    label: 'Tool',
    icon: Wrench,
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  },
  strategies: {
    label: 'Strategy',
    icon: Target,
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  },
};

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const catConfig = categoryConfig[resource.category];
  const CatIcon = catConfig.icon;

  const relatedResources = resource.relatedResources
    .map((relSlug) => getResourceBySlug(relSlug))
    .filter(Boolean);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Resources', href: '/resources' },
              { label: resource.title, href: `/resources/${slug}` },
            ]}
            className="mb-8"
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <span
                className={`inline-flex items-center space-x-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${catConfig.color}`}
              >
                <CatIcon className="h-3.5 w-3.5" />
                <span>{catConfig.label}</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {resource.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              {resource.description}
            </p>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <Clock className="h-4 w-4" />
              <span>{Math.max(5, Math.ceil(resource.content.replace(/<[^>]+>/g, '').split(/\s+/).length / 200))} min read</span>
            </div>
          </header>

          {/* Article Content */}
          <article
            className="prose prose-slate dark:prose-invert prose-lg max-w-none mb-16
              prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-lg prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
              prose-li:text-slate-600 dark:prose-li:text-slate-300
              prose-strong:text-slate-900 dark:prose-strong:text-white
              prose-a:text-orange-500 hover:prose-a:text-orange-600"
            dangerouslySetInnerHTML={{ __html: resource.content }}
          />

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="inline-flex p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {resource.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-800 transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          {relatedResources.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Related Resources
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedResources.map((related) => {
                  if (!related) return null;
                  const relCat = categoryConfig[related.category];
                  return (
                    <Link
                      key={related.slug}
                      href={`/resources/${related.slug}`}
                      className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all hover:shadow-lg"
                    >
                      <span
                        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${relCat.color}`}
                      >
                        {relCat.label}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex p-3 rounded-full bg-orange-500/20 mb-4">
              <Sparkles className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Social Media?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Stop spending hours on content creation. KontentFire uses AI to generate,
              schedule, and publish engaging social media posts across all your platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Browse All Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: resource.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: resource.title,
            description: resource.description,
            url: `https://kontentfire.com/resources/${slug}`,
            keywords: resource.keywords.join(', '),
            publisher: {
              '@type': 'Organization',
              name: 'KontentFire',
              url: 'https://kontentfire.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://kontentfire.com/resources/${slug}`,
            },
          }),
        }}
      />
    </>
  );
}
