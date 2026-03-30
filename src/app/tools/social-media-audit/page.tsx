'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
  Circle,
  HelpCircle,
  User,
  FileText,
  MessageSquare,
  BarChart3,
  Target,
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  recommendation: string;
}

interface Category {
  name: string;
  icon: React.ElementType;
  items: ChecklistItem[];
}

const CATEGORIES: Category[] = [
  {
    name: 'Profile Optimization',
    icon: User,
    items: [
      { id: 'p1', label: 'Profile photo is high-quality and on-brand across all platforms', recommendation: 'Use a consistent, high-resolution logo or headshot across all profiles. This builds instant recognition.' },
      { id: 'p2', label: 'Bio/about section is complete with keywords and a clear value proposition', recommendation: 'Rewrite your bio to include relevant keywords and clearly state what you offer and who you help.' },
      { id: 'p3', label: 'Website link is current and tracked with UTM parameters', recommendation: 'Add UTM parameters to your profile links so you can track social media traffic in your analytics.' },
      { id: 'p4', label: 'Contact information is accurate and easy to find', recommendation: 'Verify your email, phone, and address on every platform. Make it effortless for customers to reach you.' },
      { id: 'p5', label: 'Cover images are updated and aligned with current campaigns', recommendation: 'Update cover images quarterly to reflect current promotions, seasonal themes, or brand campaigns.' },
    ],
  },
  {
    name: 'Content Quality',
    icon: FileText,
    items: [
      { id: 'c1', label: 'Posting at least 3-5 times per week on primary platforms', recommendation: 'Increase posting frequency to at least 3x per week. Consistency is the single biggest factor in social media growth.' },
      { id: 'c2', label: 'Content mix includes education, entertainment, and promotion (4-1-1 rule)', recommendation: 'Rebalance your content: 4 educational/entertaining posts for every 1 soft sell and 1 direct promotion.' },
      { id: 'c3', label: 'Visual content is high-quality and consistent with brand guidelines', recommendation: 'Create brand templates for recurring post types. Use consistent colors, fonts, and image styles.' },
      { id: 'c4', label: 'Posts are optimized for each platform (not just cross-posted)', recommendation: 'Adapt content for each platform. LinkedIn posts need different formatting than Instagram captions.' },
      { id: 'c5', label: 'Using a content calendar to plan posts in advance', recommendation: 'Set up a content calendar. Plan at least 2 weeks ahead to maintain consistency and quality.' },
    ],
  },
  {
    name: 'Engagement',
    icon: MessageSquare,
    items: [
      { id: 'e1', label: 'Responding to comments and messages within 24 hours', recommendation: 'Set up notifications and aim to respond within 2 hours during business hours. Fast responses build loyalty.' },
      { id: 'e2', label: 'Actively engaging with followers\' content and industry peers', recommendation: 'Spend 15 minutes daily engaging with your audience\'s posts. Comment meaningfully, not just likes.' },
      { id: 'e3', label: 'Using calls-to-action in posts to encourage interaction', recommendation: 'End posts with questions or clear CTAs. Posts with questions get 2x more comments on average.' },
      { id: 'e4', label: 'Running polls, Q&As, or interactive content regularly', recommendation: 'Add at least one interactive content piece per week: polls, quizzes, AMAs, or live sessions.' },
      { id: 'e5', label: 'Community guidelines are established and moderation is active', recommendation: 'Create clear community guidelines and moderate comments consistently. A safe space drives more engagement.' },
    ],
  },
  {
    name: 'Analytics & Tracking',
    icon: BarChart3,
    items: [
      { id: 'a1', label: 'Tracking key metrics monthly (reach, engagement rate, follower growth)', recommendation: 'Set up a monthly metrics review. Track engagement rate, reach, follower growth, and link clicks at minimum.' },
      { id: 'a2', label: 'Using UTM parameters on all social media links', recommendation: 'Create a UTM naming convention and apply it to every link you share on social media for accurate attribution.' },
      { id: 'a3', label: 'Identified top-performing content types and doubling down', recommendation: 'Review your last 30 days of content. Identify the top 5 posts by engagement and create more like them.' },
      { id: 'a4', label: 'Monitoring competitor social media activity regularly', recommendation: 'Track 3-5 competitors monthly. Note their posting frequency, content types, and engagement levels.' },
      { id: 'a5', label: 'Reporting social media ROI to stakeholders', recommendation: 'Create a monthly one-page report showing social media impact on business goals: leads, traffic, and revenue attribution.' },
    ],
  },
  {
    name: 'Strategy & Growth',
    icon: Target,
    items: [
      { id: 's1', label: 'Written social media strategy with clear goals and KPIs', recommendation: 'Document your social media strategy with specific, measurable goals. Without written goals, you cannot measure success.' },
      { id: 's2', label: 'Target audience personas are defined and guide content creation', recommendation: 'Create 2-3 detailed audience personas. Every piece of content should be written for a specific persona.' },
      { id: 's3', label: 'Hashtag strategy is researched and documented per platform', recommendation: 'Research and save platform-specific hashtag sets. Use a mix of popular, niche, and branded hashtags.' },
      { id: 's4', label: 'Social media tools are in place for scheduling and automation', recommendation: 'Invest in a social media management tool like KontentFire to automate scheduling, content creation, and analytics.' },
      { id: 's5', label: 'Strategy is reviewed and updated quarterly', recommendation: 'Schedule quarterly strategy reviews. Assess what is working, what is not, and adjust goals and tactics accordingly.' },
    ],
  },
];

const TOTAL_ITEMS = CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);

const faqs = [
  {
    question: 'What is a social media audit?',
    answer:
      'A social media audit is a systematic review of your social media presence, strategy, and performance. It evaluates your profiles, content quality, engagement levels, analytics tracking, and overall strategy to identify gaps and opportunities. Regular audits, ideally quarterly, ensure your social media efforts stay aligned with your business goals and adapt to platform changes.',
  },
  {
    question: 'How often should I conduct a social media audit?',
    answer:
      'Conduct a comprehensive social media audit at least once per quarter. However, certain elements should be reviewed more frequently: check content performance weekly, review engagement metrics bi-weekly, and audit profile information monthly. A quarterly deep audit ensures you catch strategic gaps that weekly reviews might miss.',
  },
  {
    question: 'What metrics matter most in a social media audit?',
    answer:
      'The most important metrics to audit are engagement rate (likes, comments, shares divided by reach), follower growth rate, click-through rate on links, content reach and impressions, and conversion rate from social traffic. Focus on engagement rate above all else, as it indicates how well your content resonates with your audience regardless of follower count.',
  },
  {
    question: 'Can I do a social media audit myself or do I need an agency?',
    answer:
      'You can absolutely conduct a social media audit yourself using checklists like this one. The key is being honest about your gaps and committing to fix them. For deeper competitive analysis or platform-specific algorithm optimization, agencies and AI tools like KontentFire can provide more sophisticated insights and automate the improvements.',
  },
  {
    question: 'What should I do after completing a social media audit?',
    answer:
      'After completing your audit, prioritize the gaps you identified by impact. Focus on quick wins first: profile optimization, posting consistency, and response time. Then address strategic gaps like content diversification and analytics tracking. Create an action plan with deadlines and review progress in 30 days. Tools like KontentFire can automate many of the improvements identified in an audit.',
  },
];

export default function SocialMediaAuditPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const completionPercent = Math.round(
    (checkedItems.size / TOTAL_ITEMS) * 100
  );

  const rating = useMemo(() => {
    if (completionPercent >= 80) return { label: 'Excellent', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' };
    if (completionPercent >= 50) return { label: 'Good', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30' };
    return { label: 'Needs Work', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/30' };
  }, [completionPercent]);

  const uncheckedRecommendations = useMemo(() => {
    const recs: Array<{ category: string; recommendation: string }> = [];
    for (const category of CATEGORIES) {
      for (const item of category.items) {
        if (!checkedItems.has(item.id)) {
          recs.push({ category: category.name, recommendation: item.recommendation });
        }
      }
    }
    return recs.slice(0, 5);
  }, [checkedItems]);

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'Social Media Audit', href: '/tools/social-media-audit' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Free Interactive Tool</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Free Social Media Audit Checklist
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Evaluate your social media presence with this 25-item interactive
              checklist. Get a score and personalized recommendations to improve
              your strategy.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Progress: {checkedItems.size} / {TOTAL_ITEMS} items
              </span>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${rating.bg} ${rating.color}`}>
                {completionPercent}% - {rating.label}
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>

          {/* Checklist Categories */}
          <div className="space-y-6 mb-12">
            {CATEGORIES.map((category) => {
              const categoryChecked = category.items.filter((item) =>
                checkedItems.has(item.id)
              ).length;
              return (
                <div
                  key={category.name}
                  className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                        <category.icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                        {category.name}
                      </h2>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {categoryChecked} / {category.items.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item) => {
                      const isChecked = checkedItems.has(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 ${
                            isChecked
                              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-700'
                          }`}
                        >
                          {isChecked ? (
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm ${
                              isChecked
                                ? 'text-green-700 dark:text-green-300 line-through'
                                : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Score & Recommendations */}
          <div className="bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Your Audit Score
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-bold text-orange-600 dark:text-orange-400">
                {completionPercent}%
              </span>
              <span className={`text-lg font-bold px-4 py-2 rounded-full ${rating.bg} ${rating.color}`}>
                {rating.label}
              </span>
            </div>

            {uncheckedRecommendations.length > 0 ? (
              <>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Top Recommendations
                </h3>
                <div className="space-y-3 mb-6">
                  {uncheckedRecommendations.map((rec, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
                    >
                      <span className="text-xs font-medium text-orange-600 dark:text-orange-400 uppercase tracking-wide">
                        {rec.category}
                      </span>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                        {rec.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Congratulations! You have checked every item on the audit. Your
                social media presence is in great shape. Keep up the excellent
                work and continue optimizing.
              </p>
            )}

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Let KontentFire Fix Your Gaps Automatically
              </h3>
              <p className="text-slate-300 mb-4 text-sm max-w-lg mx-auto">
                AI-powered content generation, smart scheduling, cross-platform
                publishing, and analytics in one platform. Address every gap in
                your audit without the manual work.
              </p>
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>FAQ</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Social Media Audit FAQ
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700"
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
        </div>
      </main>
      <Footer />
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
    </>
  );
}
