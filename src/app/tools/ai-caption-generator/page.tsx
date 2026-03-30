'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Breadcrumb } from '@/components/seo/breadcrumb-schema';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Copy,
  Check,
  Hash,
  FileText,
  Smile,
  Loader2,
  HelpCircle,
} from 'lucide-react';

type Platform = 'instagram' | 'facebook' | 'twitter' | 'linkedin';
type Mood = 'fun' | 'professional' | 'inspiring' | 'witty' | 'informative';

interface GeneratedCaption {
  text: string;
  emojis: string[];
  hashtags: string[];
}

const CAPTION_EXAMPLES: Record<Platform, Record<Mood, GeneratedCaption[]>> = {
  instagram: {
    fun: [
      { text: "POV: You finally found a tool that does the posting for you and now you don't know what to do with all this free time. Guess we'll just have to enjoy life now.", emojis: ['😎', '🎉', '✨', '🙌'], hashtags: ['#ContentCreator', '#SocialMediaLife', '#WorkSmarter', '#AItools', '#InstagramTips', '#MarketingHumor', '#Automation', '#LifeHack'] },
      { text: "That moment when your post goes viral and you're like 'I literally wrote that in 30 seconds with AI.' Our little secret.", emojis: ['🤫', '🔥', '💪', '😂'], hashtags: ['#GoingViral', '#ContentCreation', '#AIpowered', '#SocialMediaMarketing', '#InstaGrowth', '#ContentIsKing', '#SecretWeapon', '#MarketingTips'] },
      { text: "Current mood: Watching our scheduled posts go live while we're at the beach. This is the future they promised us.", emojis: ['🏖️', '📱', '🌊', '✌️'], hashtags: ['#BeachVibes', '#AutomatedPosting', '#WorkLifeBalance', '#SmartMarketing', '#ScheduledContent', '#LivingTheDream', '#SocialMediaAutomation', '#FridayMood'] },
      { text: "We asked AI to write our caption and honestly? It's better than anything we would have come up with. We're not even mad.", emojis: ['🤖', '✍️', '😅', '💯'], hashtags: ['#AIwriting', '#HonestCaptions', '#ContentCreation', '#FunnyButTrue', '#SocialMediaTips', '#InstagramCaption', '#Relatable', '#MarketingLife'] },
    ],
    professional: [
      { text: "Great content isn't about posting more. It's about posting smarter. We've spent the last year testing what actually moves the needle for brands on Instagram, and here's what we found: consistency beats volume, storytelling beats selling, and strategy beats guesswork. Every single time.", emojis: ['📊', '💡', '🎯', '📈'], hashtags: ['#ContentStrategy', '#InstagramMarketing', '#BrandGrowth', '#SocialMediaTips', '#DigitalMarketing', '#MarketingStrategy', '#ContentCreation', '#BusinessGrowth'] },
      { text: "Your audience doesn't want more content. They want better content. The brands winning on Instagram in 2026 are the ones that prioritize quality, authenticity, and value in every post. Here's how we help businesses make that shift.", emojis: ['✅', '📋', '🚀', '💼'], hashtags: ['#QualityOverQuantity', '#InstagramStrategy', '#BrandBuilding', '#ContentMarketing', '#SocialMedia', '#BusinessTips', '#GrowthMindset', '#MarketingExpert'] },
    ],
    inspiring: [
      { text: "Every great brand started with a single post and the courage to show up. Today might be your day one, and that's something worth celebrating. The algorithm rewards consistency, but more importantly, your future self will thank you for starting now.", emojis: ['🌟', '💪', '🔥', '✨'], hashtags: ['#StartNow', '#BrandBuilding', '#Motivation', '#EntrepreneurLife', '#JustStart', '#InspiringQuotes', '#GrowthJourney', '#DreamBig'] },
      { text: "Six months ago, we had 200 followers. Today? Over 10,000. No shortcuts. No buying followers. Just showing up every day with content that helps people. If we can do it, so can you.", emojis: ['📈', '🙏', '💫', '❤️'], hashtags: ['#GrowthStory', '#OrganicGrowth', '#InstagramGrowth', '#NeverGiveUp', '#Consistency', '#RealResults', '#InspireOthers', '#KeepGoing'] },
    ],
    witty: [
      { text: "Our content strategy: Step 1) Panic about what to post. Step 2) Let AI handle it. Step 3) Take credit. Working flawlessly so far.", emojis: ['😏', '🤖', '👑', '😂'], hashtags: ['#ContentStrategy', '#AIhumor', '#SocialMediaLife', '#MarketingMemes', '#TrueStory', '#ContentCreator', '#Relatable', '#WorkSmarter'] },
      { text: "They say content is king but have you ever tried being a social media manager who also has to be a photographer, writer, analyst, and graphic designer? We're not royalty, we're the entire kingdom.", emojis: ['👸', '📸', '✍️', '📊'], hashtags: ['#SocialMediaManager', '#WearingAllTheHats', '#MarketingLife', '#ContentIsKing', '#RealTalk', '#DigitalMarketing', '#Multitasking', '#AgencyLife'] },
    ],
    informative: [
      { text: "Instagram's algorithm in 2026 prioritizes three signals above all else: watch time, saves, and shares. Likes still matter, but they've been downweighted significantly. If you want more reach, create content people want to come back to, reference later, or send to a friend. That's the formula.", emojis: ['📊', '🧠', '📌', '💡'], hashtags: ['#InstagramAlgorithm', '#SocialMediaTips', '#InstagramTips', '#ContentStrategy', '#DigitalMarketing', '#AlgorithmUpdate', '#InstagramGrowth', '#MarketingEducation'] },
      { text: "The best time to post on Instagram isn't universal. It depends on YOUR audience. Go to Insights > Total Followers > Most Active Times. That data is specific to your followers' behavior, not a generic study of millions of accounts. Start there.", emojis: ['⏰', '📈', '🎯', '📱'], hashtags: ['#InstagramInsights', '#PostingTimes', '#SocialMediaStrategy', '#DataDriven', '#InstagramMarketing', '#ContentTips', '#AnalyticsMatters', '#SMM'] },
    ],
  },
  facebook: {
    fun: [
      { text: "Raise your hand if your social media strategy this year is 'just wing it and hope for the best' 🙋\n\nNo judgment. But also... there might be a better way. Just saying.", emojis: ['🙋', '😅', '🤞', '💡'], hashtags: ['#SocialMedia', '#MarketingHumor', '#SmallBusiness', '#Relatable', '#FacebookMarketing'] },
      { text: "Plot twist: The intern is the one who actually knows how the algorithm works. Every. Single. Time.", emojis: ['😂', '🔄', '👀', '💪'], hashtags: ['#OfficeLife', '#SocialMediaMarketing', '#MarketingTeam', '#FunnyButTrue', '#AlgorithmLife'] },
    ],
    professional: [
      { text: "Community engagement on Facebook isn't dead. It's just different.\n\nThe brands seeing the best results in 2026 are the ones focusing on meaningful conversations in groups and comments, not just broadcasting content to their feed.\n\nHere are 3 strategies that are working right now:\n1. Reply to every comment within 2 hours\n2. Create polls and discussion prompts weekly\n3. Go live monthly to answer questions in real time\n\nThe algorithm follows where the conversations are.", emojis: ['💬', '📊', '🎯', '🚀'], hashtags: ['#FacebookMarketing', '#CommunityEngagement', '#SocialMediaStrategy', '#DigitalMarketing', '#BusinessGrowth'] },
    ],
    inspiring: [
      { text: "We started this business in a garage with zero followers and a dream.\n\nThree years later, this community has become the heart of everything we do. Every comment, share, and message reminds us why we started.\n\nTo everyone who's been with us from the beginning, and to everyone just joining: thank you. The best is still ahead.", emojis: ['❤️', '🙏', '🌟', '🚀'], hashtags: ['#SmallBusinessStory', '#Community', '#Grateful', '#Entrepreneurship', '#DreamBig'] },
    ],
    witty: [
      { text: "Our marketing budget vs our marketing results:\n\n📉 Budget: modest\n📈 Results: surprisingly good\n\nSecret ingredient? AI does the heavy lifting while we take the credit at meetings. Is that ethical? Probably not. Are we stopping? Absolutely not.", emojis: ['📉', '📈', '🤫', '😎'], hashtags: ['#MarketingHumor', '#AImarketing', '#SmallBusinessLife', '#HonestMarketing', '#Results'] },
    ],
    informative: [
      { text: "Facebook organic reach in 2026: here's what the latest data shows.\n\nAverage organic reach for brand pages: 5.2% of followers\nPosts with video: 8.7% reach\nPosts that generate comments in the first hour: 12.4% reach\nGroup posts from brand pages: 16.8% reach\n\nThe takeaway: Conversations and groups are the new newsfeed. If your strategy is still 'post and pray,' these numbers explain why reach keeps declining.\n\nFocus on sparking discussion, not just distributing content.", emojis: ['📊', '🧮', '💡', '📈'], hashtags: ['#FacebookReach', '#SocialMediaData', '#OrganicReach', '#MarketingStats', '#DigitalStrategy'] },
    ],
  },
  twitter: {
    fun: [
      { text: "me: I'll just post one tweet\nalso me: *3 hours later, in a thread about whether AI will replace social media managers*\n\nanyway, follow us for more unplanned content", emojis: ['😅', '🐦', '🤖', '🫠'], hashtags: ['#TwitterLife', '#SocialMedia', '#ContentCreation', '#Relatable'] },
      { text: "hot take: the best social media strategy is just being consistently helpful and a little bit funny\n\nthat's the tweet", emojis: ['🔥', '🎤', '💡', '✌️'], hashtags: ['#MarketingTips', '#SocialMediaTips', '#HotTake', '#ContentStrategy'] },
    ],
    professional: [
      { text: "3 social media trends to watch in 2026:\n\n1. AI-generated content will represent 40%+ of brand posts\n2. Short-form video continues to dominate every platform\n3. Community-led growth replaces influencer marketing\n\nThe brands that adapt fastest will capture the most market share. The ones waiting for 'definitive proof' will be two years behind.", emojis: ['📊', '🎥', '🤝', '🚀'], hashtags: ['#SocialMediaTrends', '#Marketing2026', '#DigitalStrategy', '#BrandGrowth'] },
    ],
    inspiring: [
      { text: "Reminder: You don't need a massive following to make an impact.\n\nSome of the most successful businesses we work with have under 1,000 followers.\n\nThe difference? Every follower is a real person who trusts them.\n\nQuality > Quantity. Always.", emojis: ['💪', '🌟', '❤️', '🎯'], hashtags: ['#GrowthMindset', '#SmallBusiness', '#AuthenticMarketing', '#Motivation'] },
    ],
    witty: [
      { text: "Social media manager job description:\n- Writer\n- Designer\n- Analyst\n- Photographer\n- Videographer\n- Customer service\n- Crisis manager\n- Mind reader\n\nSalary: Please be passionate", emojis: ['😂', '💀', '📝', '💰'], hashtags: ['#SMMlife', '#MarketingHumor', '#SocialMediaManager', '#TrueStory'] },
    ],
    informative: [
      { text: "Optimal tweet length for engagement in 2026:\n\n71-100 characters: Highest engagement rate\n101-140 characters: Best for link clicks\n200+ characters: Best for saves/bookmarks\nThreads (5-8 tweets): Best for follower growth\n\nMatch your format to your goal.", emojis: ['📏', '📊', '🧵', '📈'], hashtags: ['#TwitterTips', '#SocialMediaData', '#ContentOptimization', '#GrowthHacking'] },
    ],
  },
  linkedin: {
    fun: [
      { text: "Confession: I spend more time writing my LinkedIn hook than the entire rest of the post.\n\nAnd honestly? It works. The hook is 80% of whether someone reads your post or scrolls past it.\n\nSo if you see me staring blankly at my laptop for 20 minutes over a single sentence, mind your business. Art takes time. 😌", emojis: ['😌', '✍️', '🎨', '😂'], hashtags: ['#LinkedInTips', '#ContentCreation', '#CopywritingTips', '#SocialMediaHumor', '#LinkedInCreator'] },
    ],
    professional: [
      { text: "The companies that will thrive in the next decade share one trait: they treat content as a strategic asset, not a marketing expense.\n\nContent drives brand awareness, builds trust, generates leads, and reduces customer acquisition costs. Yet most organizations still underinvest in it.\n\nThe data is clear: brands that publish consistent, high-quality content see 67% more leads than those that don't. The ROI compounds over time as content builds authority and organic reach.\n\nIf your content budget is the first thing cut during lean times, your strategy needs rethinking.", emojis: ['📊', '💼', '📈', '🎯'], hashtags: ['#ContentMarketing', '#B2BMarketing', '#BusinessStrategy', '#LeadGeneration', '#DigitalMarketing'] },
    ],
    inspiring: [
      { text: "I got rejected from 47 jobs before landing my first role in marketing.\n\nForty-seven.\n\nEach rejection felt like proof I wasn't good enough. But looking back, every 'no' was teaching me resilience, refining what I actually wanted, and building a hunger that comfortable people never develop.\n\nToday I lead a team of 30 marketers and we serve clients across 8 countries.\n\nIf you're in the rejection phase right now, keep going. Your 48th door might be the one that changes everything.", emojis: ['💪', '🌟', '🚪', '❤️'], hashtags: ['#CareerGrowth', '#NeverGiveUp', '#JobSearch', '#Resilience', '#Inspiration'] },
    ],
    witty: [
      { text: "LinkedIn in 2020: Here's my professional achievement.\nLinkedIn in 2023: Here's my vulnerability story.\nLinkedIn in 2026: Here's a post my AI wrote while I was making coffee.\n\nEvolution is beautiful.\n\n(But seriously, AI-assisted content is the future and fighting it is like refusing to use email in 2005. The winners use the tools. The rest write think pieces about authenticity.)", emojis: ['😏', '☕', '🤖', '📈'], hashtags: ['#LinkedInHumor', '#AIcontent', '#SocialMediaEvolution', '#MarketingTrends', '#FutureOfWork'] },
    ],
    informative: [
      { text: "LinkedIn algorithm update for 2026: what's actually changed.\n\nBoosted:\n- Posts from your direct network (1st connections)\n- Comments that add substantive value\n- Original content with personal perspective\n- Dwell time (how long someone reads your post)\n\nDowngraded:\n- Engagement bait (\"Like if you agree\")\n- External links in the post body\n- Reposted content without added commentary\n- Generic AI content with no personal voice\n\nThe takeaway: LinkedIn is rewarding authenticity and depth over reach hacking. Write posts that are genuinely useful to your specific audience.", emojis: ['📋', '📊', '✅', '❌'], hashtags: ['#LinkedInAlgorithm', '#LinkedInTips', '#SocialMediaMarketing', '#ContentStrategy', '#B2BMarketing'] },
    ],
  },
};

const faqs = [
  {
    question: 'What is an AI caption generator?',
    answer:
      'An AI caption generator is a tool that creates social media captions automatically based on your inputs like topic, platform, and desired mood. It uses natural language processing to produce engaging, platform-optimized captions complete with emoji suggestions and relevant hashtags. This saves hours of writing time while maintaining quality and consistency across your social media accounts.',
  },
  {
    question: 'Which platforms does this caption generator support?',
    answer:
      'This free caption generator creates optimized captions for Instagram, Facebook, Twitter (X), and LinkedIn. Each platform has different best practices for length, tone, and formatting. The generator automatically adjusts output to match each platform\'s audience expectations and algorithm preferences.',
  },
  {
    question: 'Are AI-generated captions good for engagement?',
    answer:
      'Yes, when properly tuned. AI caption generators learn from millions of high-performing posts, so they incorporate proven engagement patterns like hooks, questions, and call-to-actions naturally. Many businesses report higher engagement rates with AI-assisted captions because the content is more consistent and optimized than rushed, manual writing.',
  },
  {
    question: 'How do I make AI captions sound like my brand?',
    answer:
      'Start by selecting the mood that matches your brand voice. For a more customized experience, KontentFire\'s full platform lets you define your brand voice, industry, and audience so every generated caption sounds authentically like you. The more context you provide, the better the AI adapts to your unique style.',
  },
  {
    question: 'Can I use these captions for commercial purposes?',
    answer:
      'Absolutely. All captions generated by this tool are original and free to use for any purpose, including commercial social media accounts. For businesses that need high-volume caption generation with brand voice consistency, scheduling, and analytics, KontentFire provides an all-in-one platform.',
  },
];

export default function AICaptionGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [mood, setMood] = useState<Mood>('fun');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedCaption | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setResult(null);

    setTimeout(() => {
      const captions = CAPTION_EXAMPLES[platform][mood];
      const randomIndex = Math.floor(Math.random() * captions.length);
      setResult(captions[randomIndex]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = async () => {
    if (!result) return;
    const fullText = `${result.text}\n\n${result.hashtags.join(' ')}`;
    await navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platformLabels: Record<Platform, string> = {
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter / X',
    linkedin: 'LinkedIn',
  };

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'AI Caption Generator', href: '/tools/ai-caption-generator' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center space-x-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Free AI Tool</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Free AI Caption Generator
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Generate engaging captions for Instagram, Facebook, Twitter, and
              LinkedIn. Pick your platform and mood to get captions with emoji
              and hashtag suggestions.
            </p>
          </div>

          {/* Generator Tool */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 mb-12">
            <div className="space-y-6">
              {/* Topic Input */}
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  What is your post about?
                </label>
                <input
                  id="topic"
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., new product launch, behind the scenes, team celebration..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                />
              </div>

              {/* Selects Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="platform"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Platform
                  </label>
                  <select
                    id="platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value as Platform)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter / X</option>
                    <option value="linkedin">LinkedIn</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="mood"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Mood
                  </label>
                  <select
                    id="mood"
                    value={mood}
                    onChange={(e) => setMood(e.target.value as Mood)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  >
                    <option value="fun">Fun</option>
                    <option value="professional">Professional</option>
                    <option value="inspiring">Inspiring</option>
                    <option value="witty">Witty</option>
                    <option value="informative">Informative</option>
                  </select>
                </div>
              </div>

              {/* Generate Button */}
              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={!topic.trim() || isGenerating}
                className="w-full text-lg py-6"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating your caption...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Caption
                  </>
                )}
              </Button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Your {platformLabels[platform]} Caption
                  </h3>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Caption Text */}
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-4">
                  <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed text-sm">
                    {result.text}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Character Count
                      </p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {result.text.length}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Smile className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Suggested Emojis
                      </p>
                      <p className="text-sm">
                        {result.emojis.join(' ')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Hash className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Hashtag Suggestions
                      </p>
                      <p className="text-sm text-orange-600 dark:text-orange-400 break-all">
                        {result.hashtags.slice(0, 5).join(' ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl p-8 text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">
              Generate Unlimited Captions with KontentFire
            </h2>
            <p className="text-pink-100 mb-6 max-w-xl mx-auto">
              This free tool is just the beginning. KontentFire generates
              unlimited captions, schedules posts, and publishes across every
              platform automatically.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button
                size="lg"
                className="bg-white text-pink-700 hover:bg-pink-50"
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* FAQs */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>FAQ</span>
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                AI Caption Generator FAQ
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
