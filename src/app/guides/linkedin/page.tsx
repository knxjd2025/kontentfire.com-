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
  Lightbulb,
  BarChart3,
  Zap,
  Briefcase,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LinkedIn Marketing Guide: Content Strategy & Post Generator (2026)',
  description:
    'Complete LinkedIn marketing guide for 2026. Learn B2B content strategy, algorithm tips, best times to post, post ideas by industry, and how to generate LinkedIn posts with AI.',
  keywords:
    'LinkedIn post generator, LinkedIn marketing, LinkedIn content strategy, best time to post on LinkedIn, LinkedIn algorithm 2026, LinkedIn B2B marketing, LinkedIn thought leadership',
  alternates: { canonical: '/guides/linkedin' },
  openGraph: {
    title: 'LinkedIn Marketing Guide: Content Strategy & Post Generator (2026)',
    description:
      'B2B LinkedIn strategies, content formats, posting times, and AI-powered post generation for professionals and businesses.',
    type: 'article',
    url: 'https://kontentfire.com/guides/linkedin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Marketing Guide 2026 | KontentFire',
    description:
      'Master LinkedIn marketing with B2B content strategy, algorithm tips, and AI-powered post generation.',
  },
};

const bestTimesData = [
  { day: 'Monday', bestTimes: '7:30 AM, 12:00 PM, 5:00 PM', engagement: 'Medium-High' },
  { day: 'Tuesday', bestTimes: '7:00 AM, 10:00 AM, 12:00 PM', engagement: 'Highest' },
  { day: 'Wednesday', bestTimes: '7:00 AM, 10:30 AM, 12:00 PM', engagement: 'Highest' },
  { day: 'Thursday', bestTimes: '7:30 AM, 10:00 AM, 1:00 PM', engagement: 'High' },
  { day: 'Friday', bestTimes: '7:00 AM, 11:00 AM', engagement: 'Medium' },
  { day: 'Saturday', bestTimes: '10:00 AM', engagement: 'Low' },
  { day: 'Sunday', bestTimes: '10:00 AM', engagement: 'Low' },
];

const faqs = [
  {
    question: 'What is the best time to post on LinkedIn?',
    answer:
      'The best times to post on LinkedIn are Tuesday and Wednesday between 7:00 AM and 12:00 PM in your audience\'s local time zone. Tuesday at 10:00 AM consistently generates the highest engagement for B2B content. LinkedIn usage peaks during the morning commute (7-8 AM), mid-morning (10-11 AM), and lunch breaks (12-1 PM). Avoid posting on weekends as professional engagement drops by 60% or more. Use KontentFire to automatically schedule posts at optimal times based on your audience\'s activity patterns.',
  },
  {
    question: 'How do I generate LinkedIn posts with AI?',
    answer:
      'KontentFire generates LinkedIn posts by analyzing your industry, target audience, and brand voice. You provide a topic or keyword, and the AI creates a complete LinkedIn post with a hook, body content, call-to-action, and relevant hashtags. The posts are formatted specifically for LinkedIn\'s algorithm, including line breaks for readability and optimal length (1,200-1,500 characters for highest engagement). You can generate posts in bulk, edit as needed, and schedule them for automatic publishing.',
  },
  {
    question: 'How often should I post on LinkedIn?',
    answer:
      'For optimal reach and engagement, post 3 to 5 times per week on LinkedIn. Daily posting can work but is not necessary. Consistency is more important than frequency. Posting at least 3 times per week keeps your profile active in your network\'s feed and signals to the algorithm that you are a regular contributor. LinkedIn gives roughly 24 to 48 hours of organic reach per post, so spacing posts every 1 to 2 days is more effective than posting multiple times per day.',
  },
  {
    question: 'What type of LinkedIn content gets the most engagement?',
    answer:
      'Text-only posts with personal stories and actionable insights consistently generate the highest engagement on LinkedIn in 2026. Document carousels (PDF slideshows) rank second for engagement, particularly for educational and framework content. Polls generate high reach but lower quality engagement. Native video performs well for thought leadership but requires more production effort. The key is leading with a strong hook in the first two lines and ending with a question or call-to-action that prompts comments.',
  },
  {
    question: 'How does the LinkedIn algorithm work in 2026?',
    answer:
      'LinkedIn\'s 2026 algorithm prioritizes content from people you interact with regularly, content that sparks meaningful conversations, and posts that provide professional value. The algorithm evaluates posts in three stages: first, it tests your post with a small segment of your network. If that group engages (especially with comments and reposts), the post is shown to a wider audience. Posts that generate quick engagement in the first 60 to 90 minutes receive the biggest distribution boost. External links reduce reach by 40% or more compared to native content.',
  },
  {
    question: 'Should I use LinkedIn articles or posts for marketing?',
    answer:
      'For most businesses, LinkedIn posts (feed updates) generate higher engagement and wider reach than long-form articles. Posts appear directly in the feed and are optimized for mobile consumption, while articles require users to click through to read. However, articles are valuable for SEO because they are indexed by Google, providing long-term search visibility. The ideal strategy combines regular posts (3-5 per week) for engagement with occasional articles (1-2 per month) for thought leadership and search visibility.',
  },
];

export default function LinkedInGuidePage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Guides', href: '/guides' },
              { label: 'LinkedIn', href: '/guides/linkedin' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <header className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 p-8 md:p-12">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6">
                <Briefcase className="h-4 w-4" />
                Platform Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                LinkedIn Marketing Guide: Content Strategy &amp; Post Generator (2026)
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mb-6">
                Build thought leadership, generate leads, and grow your professional brand on the world&apos;s largest B2B platform. Data-backed strategies and AI automation.
              </p>
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
                  Generate LinkedIn Posts <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </header>

          {/* Why LinkedIn for B2B */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Why LinkedIn for B2B Marketing
              </h2>
            </div>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                LinkedIn has over 1 billion members globally with more than 65 million decision-makers and 10 million C-level executives active on the platform. For B2B businesses, LinkedIn is the single most effective organic social media channel for lead generation, brand building, and establishing industry authority. Over 80% of B2B social media leads come from LinkedIn, making it indispensable for professional services, SaaS companies, agencies, and consultants.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlike consumer-focused platforms where content competes with entertainment, LinkedIn users are in a professional mindset. They actively seek industry insights, career development content, and business solutions. This intent-rich environment means your content reaches people who are genuinely interested in professional topics and have the authority to make purchasing decisions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                LinkedIn&apos;s organic reach in 2026 still significantly exceeds other platforms for business content. A well-crafted LinkedIn post can reach 10 to 20% of your network without any paid promotion, compared to 1 to 3% on Facebook. The platform rewards consistent, high-quality contributors with expanded distribution, making it one of the few social networks where organic growth remains highly viable for businesses.
              </p>
            </div>
          </section>

          {/* Content Formats */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Content Formats That Drive Results
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Text Posts</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Text-only posts are the highest-performing format on LinkedIn for engagement rate. The algorithm favors native text content because it keeps users on the platform. The ideal text post length is 1,200 to 1,500 characters (roughly 200 to 250 words). Use short paragraphs (1 to 2 sentences each) with line breaks for mobile readability.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Structure your text posts with a hook in the first line (this is what shows before the &quot;see more&quot; fold), a personal story or data-driven insight in the body, and a question or call-to-action at the end. Posts that start with a bold statement, surprising statistic, or contrarian opinion consistently outperform generic updates. Avoid starting with &quot;I&apos;m excited to announce&quot; or similar overused openers.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Document Carousels (PDF Posts)</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  Document carousels are PDFs uploaded as native content that users can swipe through directly in the feed. They generate the highest impression-to-engagement ratio on LinkedIn because each slide keeps users engaged longer, sending positive signals to the algorithm. Document posts receive 3 to 5 times more reach than posts with external links.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Create carousels for frameworks, step-by-step guides, industry data breakdowns, and lessons-learned summaries. Use 8 to 12 slides with a compelling cover slide, one key point per slide, large readable text, and a final slide with your call-to-action. The cover slide is critical because it determines whether users start swiping.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">LinkedIn Articles</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Long-form articles on LinkedIn are indexed by Google and provide lasting SEO value. While they generate less immediate engagement than feed posts, articles position you as a deep subject-matter expert. Write articles on topics where you have unique expertise, original data, or contrarian perspectives. Aim for 1,000 to 2,000 words with clear headings, data points, and actionable takeaways. Publish 1 to 2 articles per month and promote each article through a companion feed post.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">LinkedIn Newsletters</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  LinkedIn Newsletters send push notifications to all subscribers when you publish, guaranteeing visibility in a way no other content format can match. Once activated, every new edition goes directly to subscriber inboxes and LinkedIn notifications. Build your subscriber base by promoting your newsletter in your regular posts. Publish on a consistent schedule (weekly or biweekly) to build a reliable readership. Newsletter content should provide exclusive insights not available in your regular feed posts.
                </p>
              </div>
            </div>
          </section>

          {/* Algorithm Tips */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Algorithm Tips for Maximum Reach
              </h2>
            </div>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                LinkedIn&apos;s algorithm in 2026 uses a three-phase distribution model. In the first hour after posting, your content is shown to a small test group from your network. If this group engages meaningfully (comments are weighted 10 times more than likes), the post enters a second phase of broader distribution. Posts that continue generating engagement enter viral distribution and can reach hundreds of thousands of views.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">First-hour engagement is critical.</strong> Respond to every comment within the first 60 minutes. Ask questions in your post that are easy to answer. Tag relevant people (sparingly, 1 to 3 maximum) who would genuinely add to the conversation. Consider posting when your most engaged connections are active to seed early interactions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Avoid external links in the post body.</strong> LinkedIn penalizes posts that drive users off-platform. Instead of putting a link in your post, share the insight natively and add the link in the first comment, or use the phrase &quot;Link in comments&quot; as a call-to-action. This single change can increase your reach by 40% or more.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Dwell time matters.</strong> The algorithm measures how long people spend reading your post. Longer, well-structured posts that keep readers engaged signal high quality. Use formatting techniques like short paragraphs, bullet lists, and line breaks to make content scannable while encouraging full reads.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Use 3 to 5 relevant hashtags.</strong> LinkedIn hashtags help categorize your content for users who follow specific topics. Use a mix of broad industry hashtags (100K+ followers) and niche hashtags (1K to 50K followers). Place hashtags at the end of your post, not scattered throughout the text.
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
                Best Times to Post on LinkedIn
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              LinkedIn is a professional platform, so engagement peaks during business hours. These recommendations are based on aggregated B2B account data. Times are in your audience&apos;s local time zone.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
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

          {/* LinkedIn Post Ideas by Industry */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                LinkedIn Post Ideas by Industry
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">SaaS &amp; Technology</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li>Product update announcements with user impact stories</li>
                  <li>Behind-the-scenes engineering decisions</li>
                  <li>Customer success metrics and case studies</li>
                  <li>Industry trend analysis and predictions</li>
                  <li>&quot;Lessons learned from scaling&quot; narratives</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Professional Services</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li>Common client problems and how you solve them</li>
                  <li>Industry regulation updates and implications</li>
                  <li>Frameworks and methodologies you use</li>
                  <li>Team culture and hiring philosophy posts</li>
                  <li>Conference takeaways and event highlights</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Marketing &amp; Agencies</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li>Campaign results with specific metrics</li>
                  <li>Platform algorithm updates and implications</li>
                  <li>Content creation process breakdowns</li>
                  <li>Tool and technology stack recommendations</li>
                  <li>Client transformation stories (with permission)</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Contractors &amp; Trades</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li>Before-and-after project showcases</li>
                  <li>Hiring and workforce development insights</li>
                  <li>Equipment and material recommendations</li>
                  <li>Business growth milestones and lessons</li>
                  <li>Safety practices and industry standards</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How KontentFire Generates LinkedIn Posts */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                <Zap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                How KontentFire Generates LinkedIn Posts
              </h2>
            </div>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none mb-8">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Creating consistent, high-quality LinkedIn content is one of the biggest challenges for busy professionals. KontentFire solves this by using advanced AI to generate LinkedIn-optimized posts that match your brand voice and industry expertise.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Topic-to-post in seconds:</strong> Enter a topic, keyword, or rough idea. KontentFire&apos;s AI generates a complete LinkedIn post with an attention-grabbing hook, structured body content, relevant hashtags, and a conversation-starting question. Each post is formatted for LinkedIn&apos;s algorithm with optimal line spacing and character count.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Brand voice consistency:</strong> The AI learns your writing style and industry terminology to ensure every generated post sounds authentically like you. Whether your tone is authoritative, conversational, or data-driven, KontentFire maintains consistency across all generated content.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Batch generation and scheduling:</strong> Generate a full week of LinkedIn posts in minutes. Review, edit as needed, and schedule them for optimal posting times. KontentFire publishes directly to your LinkedIn profile or company page at the scheduled time, eliminating the daily grind of manual posting.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Cross-platform adaptation:</strong> LinkedIn posts can be automatically adapted for other platforms. A thought leadership post on LinkedIn can be converted into an Instagram carousel, a Facebook post, or a Twitter thread, each optimized for its respective platform&apos;s format and audience expectations.
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
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
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
          <section className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Generate LinkedIn Posts with AI
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Stop staring at a blank screen. KontentFire generates professional LinkedIn posts in seconds, schedules them for peak engagement, and publishes automatically.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
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
            headline: 'LinkedIn Marketing Guide: Content Strategy & Post Generator (2026)',
            description:
              'Complete LinkedIn marketing guide for 2026. B2B content strategy, algorithm tips, best posting times, and AI-powered post generation.',
            url: 'https://kontentfire.com/guides/linkedin',
            keywords:
              'LinkedIn post generator, LinkedIn marketing, LinkedIn content strategy, best time to post on LinkedIn',
            publisher: {
              '@type': 'Organization',
              name: 'KontentFire',
              url: 'https://kontentfire.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://kontentfire.com/guides/linkedin',
            },
          }),
        }}
      />
    </>
  );
}
