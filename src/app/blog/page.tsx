import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Breadcrumb } from "@/components/seo/breadcrumb-schema";
import { getBlogPosts, type GHLBlogPost } from "@/lib/ghl";
import { Calendar, User, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog - Social Media Marketing Tips for Contractors & Home Services",
  description:
    "Social media marketing guides for plumbers, HVAC companies, roofers, electricians, and contractors. AI-powered content tips, seasonal strategies, and lead generation insights.",
  keywords: [
    "social media marketing for contractors",
    "AI marketing for home services",
    "social media tips for plumbers",
    "HVAC social media marketing",
    "contractor marketing blog",
  ],
  alternates: {
    canonical: "/blog",
  },
};

const fallbackPosts: GHLBlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to Social Media Marketing for Contractors",
    slug: "social-media-marketing-for-contractors",
    content: "",
    excerpt:
      "Everything contractors need to know about building a social media presence that generates leads. Platform selection, content ideas, and automation strategies.",
    publishedAt: "2026-03-15T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "1", name: "Trade Guides" }],
  },
  {
    id: "2",
    title: "50 Social Media Post Ideas for Plumbers That Get Customers",
    slug: "social-media-post-ideas-plumbers",
    content: "",
    excerpt:
      "Struggling with what to post? Here are 50 proven social media post ideas specifically for plumbing businesses that drive engagement and leads.",
    publishedAt: "2026-03-10T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "2", name: "Social Media Tips" }],
  },
  {
    id: "3",
    title: "How HVAC Companies Can Automate Social Media in 2026",
    slug: "hvac-social-media-automation",
    content: "",
    excerpt:
      "HVAC businesses are too busy for daily posting. Learn how AI automation keeps your social media active while you focus on service calls.",
    publishedAt: "2026-03-05T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "1", name: "Trade Guides" }],
  },
  {
    id: "4",
    title: "Social Media Marketing for Roofers: The Complete Playbook",
    slug: "social-media-marketing-for-roofers",
    content: "",
    excerpt:
      "Roofing companies that post consistently on social media see 3x more leads. Here's your complete playbook for storm season content, project showcases, and more.",
    publishedAt: "2026-02-28T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "1", name: "Trade Guides" }],
  },
  {
    id: "5",
    title: "Best AI Social Media Tools for Home Service Businesses",
    slug: "best-ai-social-media-tools-home-services",
    content: "",
    excerpt:
      "Comparing the top AI social media tools for contractors and home service businesses. Find out which platform saves you the most time and generates the most leads.",
    publishedAt: "2026-02-20T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "3", name: "Industry News" }],
  },
  {
    id: "6",
    title: "What Electricians Should Post on Social Media (With Examples)",
    slug: "what-electricians-should-post-social-media",
    content: "",
    excerpt:
      "Real examples of high-performing social media posts from electrical contractors. Safety tips, project reveals, and seasonal content that works.",
    publishedAt: "2026-02-15T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "2", name: "Social Media Tips" }],
  },
  {
    id: "7",
    title: "Landscaping Social Media: A Seasonal Content Calendar",
    slug: "landscaping-social-media-seasonal-calendar",
    content: "",
    excerpt:
      "A month-by-month content calendar for landscaping businesses. Know exactly what to post in spring, summer, fall, and winter to keep customers coming back.",
    publishedAt: "2026-02-10T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "2", name: "Social Media Tips" }],
  },
  {
    id: "8",
    title: "How to Get More Customers as a Plumber Using Social Media",
    slug: "get-more-customers-plumber-social-media",
    content: "",
    excerpt:
      "Practical strategies for plumbing businesses to turn social media followers into paying customers. Local targeting, review showcases, and emergency service promotion.",
    publishedAt: "2026-02-05T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "1", name: "Trade Guides" }],
  },
  {
    id: "9",
    title: "KontentFire vs Hootsuite: Which Is Better for Contractors?",
    slug: "kontentfire-vs-hootsuite-contractors",
    content: "",
    excerpt:
      "A head-to-head comparison of KontentFire and Hootsuite for trade service businesses. See why contractors are switching to AI-powered content automation.",
    publishedAt: "2026-01-28T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "4", name: "Case Studies" }],
  },
  {
    id: "10",
    title: "Social Media ROI for Home Service Companies: Data and Benchmarks",
    slug: "social-media-roi-home-service-companies",
    content: "",
    excerpt:
      "Real data on what home service businesses can expect from social media marketing. Cost per lead, engagement rates, and ROI benchmarks by trade vertical.",
    publishedAt: "2026-01-20T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "3", name: "Industry News" }],
  },
  {
    id: "11",
    title: "AI Social Media Agents: How Autonomous Content Creation Works in 2026",
    slug: "ai-social-media-agents-2026",
    content: "",
    excerpt:
      "AI has entered the agentic era. Learn how autonomous AI agents research topics, generate content, create visuals, and publish to social media — all without human intervention.",
    publishedAt: "2026-03-29T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "3", name: "Industry News" }],
  },
  {
    id: "12",
    title: "Social Media Algorithm Changes 2026: Instagram, Facebook, LinkedIn & TikTok",
    slug: "social-media-algorithm-changes-2026",
    content: "",
    excerpt:
      "Major algorithm shifts in 2026: Instagram rewards shares over likes, Facebook prioritizes community, LinkedIn favors expertise. Here's what changed and how to adapt.",
    publishedAt: "2026-03-28T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "3", name: "Industry News" }],
  },
  {
    id: "13",
    title: "Why Niche Beats Viral: The Shift to Targeted Social Media in 2026",
    slug: "niche-vs-viral-social-media-2026",
    content: "",
    excerpt:
      "The era of chasing viral content is over. In 2026, niche alignment with highly relevant audiences drives more business than million-view posts. Here's why and how to adapt.",
    publishedAt: "2026-03-27T10:00:00Z",
    status: "published",
    author: { id: "1", name: "KontentFire Team" },
    categories: [{ id: "2", name: "Social Media Tips" }],
  },
];

export default async function BlogPage() {
  let posts: GHLBlogPost[] = [];

  if (process.env.GHL_BLOG_ID && process.env.GHL_REFRESH_TOKEN) {
    posts = await getBlogPosts(process.env.GHL_BLOG_ID);
  }

  if (posts.length === 0) {
    posts = fallbackPosts;
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} className="mb-8" />
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              <span>KontentFire Blog</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Social Media Marketing for <span className="fire-text">Home Services</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Guides, tips, and strategies for contractors, plumbers, HVAC companies, roofers, and home service businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const gradients = [
                'from-orange-500 to-amber-500',
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-emerald-500 to-teal-500',
                'from-rose-500 to-orange-500',
                'from-indigo-500 to-blue-500',
                'from-amber-500 to-yellow-500',
                'from-teal-500 to-emerald-500',
                'from-pink-500 to-rose-500',
                'from-cyan-500 to-blue-500',
              ];
              const readTime = post.content
                ? `${Math.max(3, Math.ceil(post.content.replace(/<[^>]+>/g, '').split(/\s+/).length / 200))} min read`
                : '5 min read';

              return (
                <Link key={post.id} href={"/blog/" + post.slug} className="group">
                  <article className="h-full flex flex-col bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-xl transition-all duration-300">
                    <div className={`h-44 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative`}>
                      <BookOpen className="h-14 w-14 text-white/40" />
                      <span className="absolute top-3 right-3 text-xs font-medium bg-black/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {readTime}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category) => (
                            <span
                              key={category.id}
                              className="text-xs font-medium px-2.5 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full"
                            >
                              {category.name}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <time>
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                        <span className="inline-flex items-center gap-1 text-orange-500 font-medium group-hover:gap-2 transition-all">
                          Read <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* Explore More */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/features" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Features</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See all capabilities</div>
              </Link>
              <Link href="/pricing" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Pricing</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Plans starting at $29/mo</div>
              </Link>
              <Link href="/use-cases" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Use Cases</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">See who uses KontentFire</div>
              </Link>
              <Link href="/locations" className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all text-center">
                <div className="font-semibold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">Locations</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Serving all 50 states</div>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Social Media?</h2>
            <p className="text-slate-300 mb-8">Start creating AI-powered content that drives engagement.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
