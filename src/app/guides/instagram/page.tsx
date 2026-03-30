import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Clock,
  Hash,
  BarChart3,
  Zap,
  Camera,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instagram Marketing Guide: Strategy, Scheduling & Growth (2026)',
  description:
    'Complete Instagram marketing guide for 2026. Learn Reels strategy, hashtag tactics, best times to post, growth hacks, and how to automate Instagram with AI. Data-backed tips for businesses.',
  keywords:
    'Instagram scheduler, Instagram marketing, how to grow on Instagram, Instagram content strategy, Instagram Reels strategy, Instagram hashtag strategy, best time to post on Instagram 2026',
  alternates: { canonical: '/guides/instagram' },
  openGraph: {
    title: 'Instagram Marketing Guide: Strategy, Scheduling & Growth (2026)',
    description:
      'Data-backed Instagram marketing strategies for businesses. Reels, Stories, Carousels, hashtags, posting times, and AI automation.',
    type: 'article',
    url: 'https://kontentfire.com/guides/instagram',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Marketing Guide 2026 | KontentFire',
    description:
      'Master Instagram marketing with our comprehensive guide. Reels, Stories, hashtags, best posting times, and AI-powered automation.',
  },
};

const bestTimesData = [
  { day: 'Monday', bestTimes: '6:00 AM, 12:00 PM, 7:00 PM', engagement: 'Medium' },
  { day: 'Tuesday', bestTimes: '8:00 AM, 1:00 PM, 7:00 PM', engagement: 'High' },
  { day: 'Wednesday', bestTimes: '7:00 AM, 11:00 AM, 7:00 PM', engagement: 'Highest' },
  { day: 'Thursday', bestTimes: '6:00 AM, 12:00 PM, 8:00 PM', engagement: 'High' },
  { day: 'Friday', bestTimes: '9:00 AM, 1:00 PM, 5:00 PM', engagement: 'Medium-High' },
  { day: 'Saturday', bestTimes: '9:00 AM, 12:00 PM', engagement: 'Medium' },
  { day: 'Sunday', bestTimes: '10:00 AM, 2:00 PM', engagement: 'Low-Medium' },
];

const faqs = [
  {
    question: 'What is the best time to post on Instagram?',
    answer:
      'Based on aggregated engagement data across millions of posts, the best times to post on Instagram are Tuesday through Thursday between 11 AM and 1 PM in your audience\'s local time zone. Wednesday at 11 AM consistently shows the highest engagement rates. However, your optimal posting time depends on your specific audience. Use Instagram Insights to identify when your followers are most active, and consider using an AI scheduler like KontentFire that analyzes your account data to recommend personalized posting times.',
  },
  {
    question: 'How do I schedule Instagram posts?',
    answer:
      'You can schedule Instagram posts natively through Meta Business Suite for basic scheduling, or use a third-party tool like KontentFire for advanced AI-powered scheduling. With KontentFire, you connect your Instagram Business or Creator account, generate AI-written captions and hashtags, select or generate images, and schedule posts for optimal engagement times. The platform handles Reels, carousels, and single-image posts with automatic publishing.',
  },
  {
    question: 'How many hashtags should I use on Instagram in 2026?',
    answer:
      'Instagram\'s current recommendation is to use 3 to 5 highly relevant hashtags per post rather than the maximum of 30. Research from 2025-2026 confirms that fewer, more targeted hashtags outperform large hashtag dumps. Focus on a mix of niche-specific hashtags (under 500K posts), moderately popular ones (500K to 5M posts), and one or two broad hashtags. Rotate your hashtag sets regularly to avoid being flagged as repetitive by the algorithm.',
  },
  {
    question: 'Are Instagram Reels still important for growth in 2026?',
    answer:
      'Absolutely. Instagram Reels remain the highest-reach content format on the platform in 2026, generating 2 to 3 times more impressions than static posts. Instagram continues to prioritize short-form video in its algorithm. Businesses that post 4 to 7 Reels per week consistently see faster follower growth and higher engagement rates than those relying solely on feed posts or Stories. Reels also appear in Explore and the dedicated Reels tab, expanding your discoverability beyond your existing followers.',
  },
  {
    question: 'How often should a business post on Instagram?',
    answer:
      'For optimal growth, businesses should aim for 3 to 5 feed posts per week (including Reels and carousels), daily Stories, and 1 to 2 Reels specifically per week at minimum. Consistency matters more than volume. It is better to post 3 high-quality posts per week on a predictable schedule than to post 7 mediocre posts irregularly. AI tools like KontentFire help maintain consistency by generating and scheduling content in advance, ensuring you never miss a posting window.',
  },
  {
    question: 'What type of content gets the most engagement on Instagram?',
    answer:
      'In 2026, carousel posts generate the highest average engagement rate per impression (3.1%), followed by Reels (2.3%) and single-image posts (1.7%). Educational carousels, behind-the-scenes Reels, user-generated content reposts, and relatable meme-style content consistently outperform polished promotional content. The key is creating content that encourages saves and shares, as Instagram\'s algorithm heavily weights these actions over simple likes.',
  },
];

export default function InstagramGuidePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'Instagram', href: '/guides/instagram' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <header className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8 md:p-12">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6">
                <Camera className="h-4 w-4" />
                Platform Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Instagram Marketing Guide: Strategy, Scheduling &amp; Growth (2026)
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mb-6">
                Everything you need to build a high-performing Instagram presence for your business.
                From Reels strategy to hashtag tactics to AI-powered automation.
              </p>
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90">
                  Start Automating Instagram <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </header>

          {/* Why Instagram for Business */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Why Instagram for Business
              </h2>
            </div>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Instagram has over 2 billion monthly active users as of 2026, making it one of the largest and most engaged social media platforms in the world. For businesses, Instagram offers an unmatched combination of visual storytelling, discovery tools, and direct shopping integration. Unlike platforms where content disappears quickly, Instagram posts can continue generating engagement for days or even weeks after publishing, especially when optimized for the Explore page and hashtag searches.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The platform skews toward a 18-44 demographic that has significant purchasing power. Over 80% of Instagram users follow at least one business, and 70% of shoppers look to Instagram for product discovery. For small businesses, agencies, and creators, Instagram provides a low-cost channel to build brand awareness, nurture community, and drive sales without the ad spend required on other platforms.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Instagram&apos;s algorithm in 2026 rewards consistency, content quality, and engagement velocity. Accounts that post regularly with content that generates saves, shares, and comments will see their reach expand organically. This algorithmic behavior makes Instagram particularly rewarding for businesses willing to invest in a content strategy rather than relying solely on paid advertising.
              </p>
            </div>
          </section>

          {/* Content Types That Work */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <Camera className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Content Types That Work
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Reels (Short-Form Video)</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Reels are the single most important content format on Instagram in 2026. They receive the highest organic reach of any content type, often reaching 2 to 10 times your follower count. Instagram actively surfaces Reels to non-followers through the Reels tab and Explore page, making them the fastest way to grow your audience organically.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Effective business Reels fall into several categories: educational tips (quick how-tos in your niche), behind-the-scenes content (showing your process, team, or workspace), trending audio adaptations (putting your brand spin on viral sounds), before-and-after transformations, and product demonstrations. The ideal Reel length in 2026 is 15 to 45 seconds, with a strong hook in the first 2 seconds.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Optimize your Reels with on-screen text captions (85% of Reels are watched without sound), a clear call-to-action in the caption, and 3 to 5 targeted hashtags. Post Reels during peak engagement hours for maximum initial velocity, which signals to the algorithm that the content is worth distributing further.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Stories</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Stories are your daily touchpoint with your existing audience. While they do not generate the reach of Reels, Stories keep your brand top-of-mind and drive direct engagement through polls, questions, quizzes, and link stickers. Businesses that post Stories daily see 40% higher profile visits than those that post Stories sporadically.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Use Stories for time-sensitive announcements, flash promotions, customer testimonials, quick tips, and content that feels more casual and authentic than your main feed. The sweet spot is 3 to 7 Story frames per day. Save your best Story sequences as Highlights to create an evergreen resource library on your profile.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Carousels (Multi-Image Posts)</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Carousel posts consistently generate the highest engagement rate of any feed format. Instagram shows carousel posts multiple times in a follower&apos;s feed if they did not swipe through all slides on the first view, effectively giving you multiple chances to capture attention. The average carousel receives 1.4 times more reach than single-image posts.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Top-performing carousel formats include educational slides (breaking down a concept across 5 to 10 slides), step-by-step tutorials, data and statistics presentations, portfolio showcases, and myth-busting series. Use the first slide as a compelling headline and the last slide as a call-to-action. Keep text readable on mobile with large fonts and high-contrast backgrounds.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Static Posts (Single Images)</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  While single-image posts have lower reach than Reels and carousels, they remain important for brand consistency, quote graphics, announcements, and product photography. High-quality, visually striking images still perform well when paired with engaging captions that prompt comments. Use static posts to maintain a cohesive feed aesthetic while mixing in higher-reach formats. Strong captions with a clear question or call-to-action can push engagement rates above 2% even for single images.
                </p>
              </div>
            </div>
          </section>

          {/* Hashtag Strategy */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                <Hash className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Hashtag Strategy
              </h2>
            </div>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Instagram&apos;s approach to hashtags has evolved significantly. In 2026, the platform uses hashtags primarily as a content categorization signal rather than a discovery mechanism on its own. This means using a smaller number of highly relevant hashtags (3 to 5 per post) is more effective than loading up on 20 to 30 loosely related tags.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Build your hashtag strategy around three tiers. First, create 2 to 3 niche-specific hashtags that directly describe your content (under 500,000 total posts). These give you the best chance of appearing in hashtag search results. Second, include 1 to 2 moderately popular hashtags (500K to 5 million posts) for broader discovery. Third, optionally include one broad industry hashtag for categorization, though these are highly competitive.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Create 5 to 10 hashtag sets that you rotate between posts. This prevents Instagram from flagging your account for repetitive behavior and ensures you are reaching different audience segments. Research new hashtags monthly by analyzing what top accounts in your niche are using and checking which hashtags your best-performing posts used. KontentFire&apos;s AI analyzes your content and automatically suggests relevant hashtags based on your niche, audience, and current trends.
              </p>
            </div>
          </section>

          {/* Best Times to Post */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Clock className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Best Times to Post on Instagram
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              These times are based on aggregated data from business accounts across multiple industries. All times are in your audience&apos;s local time zone. Your specific optimal times may differ based on your industry and audience demographics. Use Instagram Insights or KontentFire&apos;s analytics to refine these recommendations for your account.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Day</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Best Times</th>
                    <th className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">Engagement Level</th>
                  </tr>
                </thead>
                <tbody>
                  {bestTimesData.map((row, i) => (
                    <tr
                      key={row.day}
                      className={
                        i % 2 === 0
                          ? 'bg-white dark:bg-slate-800'
                          : 'bg-slate-50 dark:bg-slate-800/50'
                      }
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                        {row.day}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                        {row.bestTimes}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            row.engagement === 'Highest'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                              : row.engagement === 'High'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                                : row.engagement === 'Medium-High'
                                  ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300'
                                  : row.engagement === 'Medium'
                                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                                    : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {row.engagement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Growth Strategies */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Growth Strategies
              </h2>
            </div>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Growing on Instagram in 2026 requires a deliberate strategy that goes beyond simply posting good content. The most successful business accounts combine consistent content creation with community engagement and cross-platform promotion.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Content consistency:</strong> Post a minimum of 3 to 5 times per week to the main feed, with at least 2 Reels included. Maintain daily Stories to keep your account active in followers&apos; feeds. Use a content calendar to plan themes and ensure variety across educational, entertaining, and promotional content.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Community engagement:</strong> Spend 15 to 30 minutes daily responding to comments, engaging with similar accounts, and participating in relevant conversations. The algorithm rewards accounts that are active participants on the platform, not just broadcasters. Respond to every comment on your posts within the first hour of publishing.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Collaborations and cross-promotion:</strong> Partner with complementary businesses or creators for Instagram Collabs (joint posts that appear on both profiles). Cross-promote your Instagram content on your website, email newsletter, and other social platforms. Feature user-generated content to build community trust and encourage more followers to create content about your brand.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">SEO optimization:</strong> Instagram now supports keyword search in addition to hashtag and account search. Optimize your bio, captions, and alt text with relevant keywords. Write descriptive captions that include the terms your target audience searches for. This helps your content surface in Instagram&apos;s search results and in external search engines that index Instagram content.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Analytics-driven iteration:</strong> Review your Instagram Insights weekly. Identify which content formats, topics, and posting times generate the most saves and shares (the two metrics that most influence algorithmic reach). Double down on what works and phase out what does not. Track follower growth rate, reach rate, and engagement rate as your primary KPIs.
              </p>
            </div>
          </section>

          {/* How KontentFire Automates Instagram */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                <Zap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                How KontentFire Automates Instagram
              </h2>
            </div>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none mb-8">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Maintaining a consistent Instagram presence is time-consuming. Between ideating content, writing captions, sourcing visuals, researching hashtags, and scheduling posts, many businesses spend 10 to 15 hours per week on Instagram alone. KontentFire automates the most labor-intensive parts of this process so you can focus on strategy and engagement.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">AI caption generation:</strong> KontentFire uses multiple AI models (OpenAI, Claude, Gemini) to generate Instagram-optimized captions that match your brand voice. The AI understands Instagram best practices including ideal caption length, emoji usage, call-to-action placement, and line break formatting. Generate a week&apos;s worth of captions in minutes instead of hours.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">AI image generation:</strong> Need visuals for your posts? KontentFire generates on-brand images using AI, eliminating the need for stock photos or graphic design tools. Each image is generated to match Instagram&apos;s optimal dimensions and your brand aesthetic.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Smart scheduling:</strong> KontentFire analyzes engagement patterns and schedules your posts for the times when your audience is most active. Set up your content calendar, approve the AI-generated posts, and let KontentFire handle the rest. Posts are published automatically at the optimal time.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Multi-platform repurposing:</strong> Content created for Instagram can be automatically adapted for LinkedIn, Facebook, and other platforms. KontentFire adjusts the tone, length, hashtags, and formatting to match each platform&apos;s requirements, multiplying your content output without multiplying your workload.
              </p>
            </div>
            <Link href="https://app.kontentfire.com/login">
              <Button size="lg">
                Try KontentFire Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:border-pink-200 dark:hover:border-pink-800 transition-colors"
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
          <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Automate Your Instagram Marketing Today
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Generate captions, create images, and schedule posts across Instagram and every other platform. KontentFire handles the heavy lifting so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  View All Guides
                </Button>
              </Link>
            </div>
          </section>
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
            mainEntity: faqs.map((f) => ({
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
            headline: 'Instagram Marketing Guide: Strategy, Scheduling & Growth (2026)',
            description:
              'Complete Instagram marketing guide for 2026. Learn Reels strategy, hashtag tactics, best times to post, growth hacks, and how to automate Instagram with AI.',
            url: 'https://kontentfire.com/guides/instagram',
            keywords:
              'Instagram scheduler, Instagram marketing, how to grow on Instagram, Instagram content strategy',
            publisher: {
              '@type': 'Organization',
              name: 'KontentFire',
              url: 'https://kontentfire.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://kontentfire.com/guides/instagram',
            },
          }),
        }}
      />
    </>
  );
}
