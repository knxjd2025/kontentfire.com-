'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Copy,
  RotateCcw,
  Shield,
  Lock,
  HelpCircle,
} from 'lucide-react';

// Pre-built post examples by platform + type
const posts: Record<string, Record<string, Array<{ title: string; body: string; hashtags: string[]; tip: string }>>> = {
  linkedin: {
    'thought-leadership': [
      { title: 'Industry Insight', body: "Here's something most people in our industry won't tell you:\n\nThe businesses that are winning on social media in 2026 aren't the ones with the biggest budgets. They're the ones who show up consistently with valuable content.\n\nI've seen companies with 500 followers outperform brands with 50,000 — simply because they post helpful, authentic content 4-5x per week.\n\nThe secret isn't going viral. It's being reliably valuable.\n\nThree things that make the difference:\n\n1. Share what you actually know (not what sounds impressive)\n2. Respond to every comment within 2 hours\n3. Post at the same times each week so your audience expects you\n\nConsistency beats creativity every single time.\n\nWhat's your biggest challenge with staying consistent on social media?", hashtags: ['SocialMediaMarketing', 'ContentStrategy', 'BusinessGrowth', 'LinkedInTips'], tip: 'End with a question to boost comments by 2-3x' },
      { title: 'Contrarian Take', body: "Unpopular opinion: You don't need to be on every social media platform.\n\nIn fact, trying to be everywhere is probably hurting your results.\n\nHere's what I recommend instead:\n\n→ Pick ONE platform where your customers actually spend time\n→ Post 4-5x per week with genuinely helpful content\n→ Engage with every comment and message\n→ Do this for 90 days before adding another platform\n\nI've watched businesses try to manage 5 platforms and get zero traction on all of them. Then they focus on just LinkedIn, post consistently, and generate 3x more leads.\n\nLess is more. Master one, then expand.\n\nWhich platform drives the most business for you?", hashtags: ['MarketingStrategy', 'SocialMediaTips', 'SmallBusinessMarketing', 'FocusWins'], tip: 'Contrarian posts get 40% more engagement on LinkedIn' },
    ],
    'how-to': [
      { title: 'Step-by-Step Guide', body: "How to create a week of social media content in 30 minutes:\n\nStep 1: Pick 5 topics your customers ask about most\nStep 2: Turn each topic into a simple post format (tip, myth, how-to, story, question)\nStep 3: Write the posts in a batch (don't switch between tasks)\nStep 4: Schedule all 5 for the week using an automation tool\nStep 5: Spend 10 min/day responding to comments\n\nThat's it. No fancy strategy. No content calendar templates. No 3-hour planning sessions.\n\nThe businesses winning on social media aren't overcomplicating it. They're just showing up consistently with helpful content.\n\nWhat's your biggest time-saver for content creation?", hashtags: ['ContentCreation', 'SocialMediaTips', 'ProductivityHacks', 'MarketingAutomation'], tip: 'Numbered steps get saved and shared more than any other format' },
    ],
    'story': [
      { title: 'Personal Story', body: "Last year, I almost gave up on social media marketing.\n\nI was spending 2+ hours every day creating posts, and the results were... nothing. No leads. No engagement. Just crickets.\n\nThen I changed ONE thing: I stopped trying to sound like a marketer and started sharing what I actually know.\n\nInstead of \"5 Tips for Better ROI\" I wrote about a real project where things went wrong and what I learned.\n\nThe response was immediate. Comments. DMs. Actual business inquiries.\n\nHere's what I learned: People don't connect with polished marketing. They connect with real stories and genuine expertise.\n\nIf your social media isn't working, try being more you and less \"marketing.\"\n\nHas anyone else experienced this shift?", hashtags: ['AuthenticMarketing', 'SocialMediaStory', 'RealTalk', 'BusinessLessons'], tip: 'Personal stories get 3x more engagement than tips posts' },
    ],
    'question': [
      { title: 'Engagement Question', body: "Quick poll for business owners:\n\nHow much time do you spend on social media marketing each week?\n\nA) Less than 1 hour\nB) 1-3 hours\nC) 3-5 hours\nD) More than 5 hours\nE) What social media marketing? 😅\n\nI'm genuinely curious because most business owners I talk to say they KNOW social media is important but can't find the time.\n\nDrop your answer below — I'll share the results and some time-saving strategies next week.", hashtags: ['SocialMediaPoll', 'BusinessOwners', 'TimeManagement', 'MarketingSurvey'], tip: 'Polls with emoji options get 5x more responses' },
    ],
    'list': [
      { title: 'Numbered List', body: "7 social media posts that generate leads (not just likes):\n\n1. Before/after project showcases with results\n2. Customer testimonials with specific outcomes\n3. \"How we solved [problem]\" case studies\n4. FAQ answers your sales team hears daily\n5. Behind-the-scenes of your process\n6. Industry myth-busting posts\n7. \"Here's what most people get wrong about [topic]\"\n\nNotice what's NOT on the list:\n❌ Motivational quotes\n❌ Holiday posts\n❌ \"Happy Friday\" updates\n\nThose get likes. The list above gets leads.\n\nWhich of these 7 types works best for your business?", hashtags: ['LeadGeneration', 'ContentMarketing', 'SocialMediaStrategy', 'B2BMarketing'], tip: 'Save this post — list posts are the most bookmarked format on LinkedIn' },
    ],
  },
  facebook: {
    'thought-leadership': [
      { title: 'Expert Advice', body: "🏠 Homeowners, here's something your contractor probably won't tell you:\n\nThe cheapest quote isn't always the best deal.\n\nI've been in this industry for 15 years, and here's what I've learned about getting the best value:\n\n✅ Get 3 quotes minimum (not just the cheapest)\n✅ Check if they're licensed AND insured\n✅ Ask for references from the last 6 months\n✅ Get everything in writing before work starts\n✅ A fair price means quality materials + skilled labor + warranty\n\nCutting corners on your home always costs more in the long run.\n\nTag a friend who's planning a home project — this could save them thousands! 👇", hashtags: ['HomeImprovement', 'HomeownerTips', 'ContractorAdvice', 'HomeRepair'], tip: 'Ask users to tag friends to expand organic reach' },
    ],
    'how-to': [
      { title: 'DIY Tips', body: "🔧 5 things every homeowner should check this season:\n\n1️⃣ HVAC filters — dirty filters = higher bills + poor air quality\n2️⃣ Gutters — clear debris before the next rain\n3️⃣ Smoke detectors — test batteries, replace if older than 10 years\n4️⃣ Water heater — flush sediment for better efficiency\n5️⃣ Exterior caulking — check windows and doors for gaps\n\n💡 Pro tip: Set a calendar reminder to do this check every 3 months. It'll save you thousands in emergency repairs.\n\nNeed help with any of these? Drop a comment or send us a message!\n\n📞 Free estimates available", hashtags: ['HomeMaintenance', 'DIYTips', 'HomeownerChecklist', 'SeasonalMaintenance'], tip: 'Educational posts with numbered lists get 2x more shares on Facebook' },
    ],
    'story': [
      { title: 'Customer Success', body: "📸 This kitchen went from 1985 to 2026 in just 3 weeks!\n\nOur client Sarah had been living with dated cabinets, worn countertops, and a layout that didn't work for her family.\n\nHere's what we did:\n→ Custom shaker cabinets in white\n→ Quartz countertops\n→ New tile backsplash\n→ Updated lighting and fixtures\n→ Optimized the layout for better flow\n\nSarah's reaction when she saw it for the first time? \"I can't believe this is my house!\" 🥹\n\nThat's why we do what we do.\n\nThinking about a kitchen remodel? Comment KITCHEN below and we'll send you our free planning guide!", hashtags: ['KitchenRemodel', 'BeforeAndAfter', 'HomeRenovation', 'TransformationTuesday'], tip: 'Before/after posts with a CTA keyword get 4x more comments' },
    ],
    'question': [
      { title: 'Community Question', body: "🤔 Quick question for our community:\n\nWhat's the ONE home improvement project you've been putting off?\n\nA) Kitchen update\nB) Bathroom remodel\nC) New flooring\nD) Exterior painting\nE) Something else (tell us in the comments!)\n\nWe're curious what's on everyone's wish list! \n\n💡 P.S. — We're running a spring special right now. Comment or DM us for details!", hashtags: ['HomeImprovement', 'SpringProjects', 'HomeRenovation', 'CommunityPoll'], tip: 'Polls in Facebook posts boost comment rates by 300%' },
    ],
    'list': [
      { title: 'Tips List', body: "🏡 10 ways to increase your home's value without breaking the bank:\n\n1. Fresh coat of paint (interior or exterior)\n2. Update light fixtures and hardware\n3. Power wash the driveway and walkways\n4. Add landscaping and curb appeal\n5. Replace old faucets and showerheads\n6. Install a smart thermostat\n7. Upgrade your front door\n8. Add under-cabinet lighting in the kitchen\n9. Refresh grout and caulking in bathrooms\n10. Declutter and deep clean\n\nMost of these cost under $500 but can add thousands to your home's value.\n\nWhich ones have you done? Which are you planning? 👇\n\nSave this post for later! 🔖", hashtags: ['HomeValue', 'HomeImprovementTips', 'RealEstateTips', 'CurbAppeal'], tip: 'Posts asking to "save this" increase bookmark rate significantly' },
    ],
  },
  instagram: {
    'thought-leadership': [
      { title: 'Expert Insight', body: "The truth about social media that nobody talks about 👇\n\nYou don't need:\n❌ 10K followers\n❌ Viral content\n❌ Professional photos\n❌ Posting 3x a day\n\nYou DO need:\n✅ Consistent posting (3-4x/week)\n✅ Content your audience actually finds useful\n✅ Genuine engagement with your community\n✅ Patience (results take 90+ days)\n\nStop chasing vanity metrics. Start building real connections.\n\nThe businesses winning on Instagram aren't the ones with the most followers — they're the ones that show up every day with value.\n\nDouble tap if you agree 🔥", hashtags: ['InstagramTips', 'SocialMediaMarketing', 'ContentCreator', 'BusinessGrowth', 'MarketingTips', 'SmallBusinessTips'], tip: 'Use "double tap if" to boost likes, which signals the algorithm' },
    ],
    'how-to': [
      { title: 'Tutorial Post', body: "How to write Instagram captions that convert 📝\n\nStep 1: Hook them in the first line\n(Ask a question or make a bold statement)\n\nStep 2: Deliver value in the middle\n(Tips, story, or insight they can use TODAY)\n\nStep 3: End with a clear CTA\n(Tell them exactly what to do next)\n\nBonus tips:\n• Use line breaks for readability\n• Add relevant emojis (but don't overdo it)\n• Keep hashtags in the first comment\n• Write at a 6th grade reading level\n\nSave this for your next post! 💾\n\nWhat's your biggest caption struggle? Comment below 👇", hashtags: ['InstagramCaptions', 'ContentTips', 'SocialMediaStrategy', 'CaptionWriting', 'InstagramGrowth', 'MarketingHacks'], tip: 'Carousel posts with tutorials get 3x more saves than single images' },
    ],
    'story': [
      { title: 'Transformation Story', body: "From zero to 500 followers in 90 days. Here's exactly what we did 📈\n\nMonth 1: Posted 4x/week. Got 12 followers. Felt like quitting.\n\nMonth 2: Started sharing real projects and behind-the-scenes. Engagement doubled.\n\nMonth 3: A before/after post got shared 47 times. Gained 200 followers in one week.\n\nThe lesson? 🎯\n\nNobody cares about your business in the beginning. They care about YOUR STORY and YOUR WORK.\n\nShow the real stuff. The messy job sites. The 5am starts. The satisfied customers.\n\nAuthenticity > Perfection. Every single time.\n\nWhat's your Instagram journey been like? Share below 👇", hashtags: ['InstagramGrowth', 'SmallBusinessJourney', 'AuthenticContent', 'GrowthMindset', 'BusinessStory', 'SocialMediaJourney'], tip: 'Growth story posts with specific numbers get massive engagement' },
    ],
    'question': [
      { title: 'This or That', body: "This or that? 🤔\n\nStories or Reels?\nCarousels or Single posts?\nHashtags or No hashtags?\nPost daily or 3x/week?\nPlan ahead or Post spontaneously?\n\nTell us your picks in the comments! 👇\n\nThere's no wrong answer — we just want to know how YOU do social media.\n\nOur picks: Reels, Carousels, Hashtags (in first comment), 4x/week, Plan ahead 📅\n\nSave this and come back to it when you need content inspo! 💡", hashtags: ['ThisOrThat', 'InstagramStrategy', 'SocialMediaDebate', 'ContentCreation', 'InstagramPoll', 'MarketingChat'], tip: '"This or that" posts consistently outperform standard polls on Instagram' },
    ],
    'list': [
      { title: 'Tips Carousel', body: "Swipe for 5 Instagram hacks that actually work in 2026 ➡️\n\n1️⃣ Post Reels 3x/week (the algorithm LOVES short video)\n\n2️⃣ Use 3-5 specific hashtags instead of 30 generic ones\n\n3️⃣ Reply to every comment in the first hour\n\n4️⃣ Share to Stories when you post (doubles your reach)\n\n5️⃣ Use AI tools to batch-create a week of content in 30 min\n\nBonus: The best posting times in 2026 are Wednesday and Thursday between 9-11am and 6-8pm.\n\nSave this post 💾 and try these this week!\n\nWhich one are you going to try first? 👇", hashtags: ['InstagramHacks', 'SocialMediaTips2026', 'InstagramGrowth', 'ContentStrategy', 'InstagramAlgorithm', 'GrowOnInstagram'], tip: 'Label it as a carousel even if single image — sets expectation of value' },
    ],
  },
  twitter: {
    'thought-leadership': [
      { title: 'Hot Take', body: "Hot take: 90% of social media advice is wrong for small businesses.\n\n\"Post 3x a day\" — no, post 3x a week with quality\n\"Be on every platform\" — no, master one first\n\"Go viral\" — no, be consistently helpful\n\"Hire an agency\" — no, automate with AI tools\n\nSimple beats complex. Consistency beats virality.", hashtags: ['SocialMediaMarketing', 'SmallBusiness', 'MarketingTips'], tip: 'Contrarian tweets with a list format get the most retweets' },
    ],
    'how-to': [
      { title: 'Quick Thread', body: "How to create a month of social media content in 1 hour:\n\n1. List 20 questions your customers ask\n2. Turn each into a short post\n3. Add one before/after photo per week\n4. Schedule everything with an AI tool\n5. Spend 10 min/day on engagement\n\nThat's it. Stop overcomplicating it.", hashtags: ['ContentCreation', 'SocialMediaTips', 'MarketingHacks'], tip: 'Threads starting with "How to" get 2x more impressions' },
    ],
    'story': [
      { title: 'Micro Story', body: "A plumber in Houston told me social media was \"a waste of time.\"\n\n6 months later, after posting 3x/week:\n→ 47 new customers from Facebook\n→ $23K in revenue from social leads\n→ 4.9 star rating with 60+ reviews\n\nSocial media isn't a waste of time. Inconsistency is.", hashtags: ['SmallBusinessSuccess', 'SocialMediaROI', 'MarketingWins'], tip: 'Specific numbers make stories 10x more credible and shareable' },
    ],
    'question': [
      { title: 'Quick Poll', body: "Business owners — what's your biggest social media challenge?\n\n🅰️ Finding time to post\n🅱️ Knowing what to post\n🅲 Getting engagement\n🅳 Measuring ROI\n\nReply with your letter 👇", hashtags: ['SmallBusiness', 'SocialMediaMarketing', 'MarketingPoll'], tip: 'Single-letter reply format makes it easy to engage = more replies' },
    ],
    'list': [
      { title: 'Quick List', body: "Social media tools worth your money in 2026:\n\n🔥 Content generation: KontentFire\n📅 Scheduling: Buffer (free tier)\n📊 Analytics: Sprout Social\n🎨 Design: Canva\n📸 Stock photos: Unsplash (free)\n\nTotal cost for a small business: Under $50/mo\n\nBookmark this.", hashtags: ['MarketingTools', 'SocialMediaTools', 'SmallBusinessTools'], tip: 'Tool recommendation tweets get bookmarked more than any other format' },
    ],
  },
};

function getPost(platform: string, type: string) {
  const platformPosts = posts[platform];
  if (!platformPosts) return null;
  const typePosts = platformPosts[type];
  if (!typePosts || typePosts.length === 0) return null;
  return typePosts[Math.floor(Math.random() * typePosts.length)];
}

const platforms = [
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700' },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'border-pink-500 bg-pink-50 dark:bg-pink-900/20 text-pink-600' },
  { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'border-sky-500 bg-sky-50 dark:bg-sky-900/20 text-sky-600' },
];

const postTypes = [
  { id: 'thought-leadership', name: 'Thought Leadership', emoji: '💡' },
  { id: 'how-to', name: 'How-To / Tips', emoji: '📋' },
  { id: 'story', name: 'Story / Case Study', emoji: '📖' },
  { id: 'question', name: 'Engagement Question', emoji: '❓' },
  { id: 'list', name: 'Numbered List', emoji: '🔢' },
];

const faqs = [
  { question: 'Is this social media post generator really free?', answer: 'Yes. You can generate social media posts for free by providing your name and email. For unlimited AI-generated posts that are unique every time, multi-platform scheduling, and automated publishing, sign up for a KontentFire plan.' },
  { question: 'How is this different from ChatGPT?', answer: 'This generator creates platform-optimized posts with hashtags, posting tips, and engagement strategies built in. ChatGPT gives you raw text. KontentFire gives you ready-to-publish social media content tailored to each platform\'s best practices.' },
  { question: 'Can I use these posts for my business?', answer: 'Absolutely. All generated posts are free to use, edit, and publish on your social media accounts. We recommend customizing them with your specific business details, brand voice, and local information for best results.' },
  { question: 'What makes KontentFire\'s full platform better than this free tool?', answer: 'The full KontentFire platform generates unique AI content every time (not pre-built examples), connects directly to your social accounts for one-click publishing, includes smart scheduling, analytics tracking, AI image generation, 13+ content templates, and brand voice customization.' },
  { question: 'Do I need social media experience to use this?', answer: 'No experience needed. Select your platform and post type, and the tool generates a complete post with hashtags and a pro tip. The full KontentFire platform is even easier — it automates the entire process from content creation to publishing.' },
];

export default function SocialMediaPostGeneratorPage() {
  const [step, setStep] = useState<'config' | 'lead' | 'generating' | 'result'>('config');
  const [platform, setPlatform] = useState('');
  const [postType, setPostType] = useState('');
  const [topic, setTopic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<{ title: string; body: string; hashtags: string[]; tip: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleGenerate = () => {
    if (!name.trim()) return;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setStep('generating');
    setTimeout(() => {
      const post = getPost(platform, postType);
      setResult(post);
      setStep('result');
    }, 2500);
  };

  const handleCopy = () => {
    if (!result) return;
    const text = `${result.body}\n\n${result.hashtags.map(h => `#${h}`).join(' ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setStep('config');
    setPlatform('');
    setPostType('');
    setTopic('');
    setResult(null);
  };

  const configReady = platform && postType;

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Free Tool</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Free AI Social Media <span className="fire-text">Post Generator</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Generate ready-to-publish social media posts for LinkedIn, Facebook, Instagram, and Twitter. Choose your platform and post type, and get professional content with hashtags and engagement tips.
            </p>
          </div>

          {/* Generator Tool */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                AI Post Generator
              </h2>
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {step === 'config' && (
                  <motion.div key="config" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Platform Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">1. Choose Platform</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {platforms.map((p) => {
                          const Icon = p.icon;
                          return (
                            <button
                              key={p.id}
                              onClick={() => setPlatform(p.id)}
                              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                                platform === p.id
                                  ? `${p.color} border-current`
                                  : 'border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500'
                              }`}
                            >
                              <Icon className="h-6 w-6" />
                              <span className="text-sm font-medium">{p.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Post Type */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">2. Choose Post Type</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {postTypes.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setPostType(t.id)}
                            className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all text-left ${
                              postType === t.id
                                ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                                : 'border-slate-200 dark:border-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <span className="text-xl">{t.emoji}</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Topic (optional) */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">3. Topic <span className="text-slate-400 font-normal">(optional)</span></label>
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., home renovation, digital marketing, fitness..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                      />
                    </div>

                    <Button
                      onClick={() => configReady && setStep('lead')}
                      disabled={!configReady}
                      className="w-full"
                      size="lg"
                    >
                      Next: Get Your Free Post <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                )}

                {step === 'lead' && (
                  <motion.div key="lead" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <div className="text-center mb-6">
                      <div className="inline-flex p-3 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-3">
                        <Lock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Almost There!</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Enter your info to unlock your free AI-generated post. We&apos;ll also send you weekly social media tips.</p>
                    </div>

                    <div className="space-y-4 max-w-md mx-auto">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-3 rounded-xl border ${emailError ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'} bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none`}
                        />
                        {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
                      </div>

                      <Button onClick={handleGenerate} className="w-full" size="lg">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate My Free Post
                      </Button>

                      <button onClick={() => setStep('config')} className="block w-full text-center text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                        ← Go back and change settings
                      </button>

                      <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
                        <Shield className="h-3 w-3" />
                        We respect your privacy. Unsubscribe anytime.
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === 'generating' && (
                  <motion.div key="generating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 text-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="inline-block mb-4">
                      <Sparkles className="h-8 w-8 text-orange-500" />
                    </motion.div>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">AI is crafting your post...</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Optimizing for {platforms.find(p => p.id === platform)?.name}</p>
                    <div className="mt-4 flex justify-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div key={i} className="w-2.5 h-2.5 rounded-full bg-orange-500" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }} />
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 'result' && result && (
                  <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {(() => {
                          const p = platforms.find(pl => pl.id === platform);
                          if (!p) return null;
                          const Icon = p.icon;
                          return <><Icon className="h-5 w-5 text-slate-500" /><span className="text-sm font-medium text-slate-500">{p.name} Post</span></>;
                        })()}
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={handleCopy} className="text-sm text-slate-500 hover:text-orange-500 flex items-center gap-1 transition-colors">
                          <Copy className="h-3.5 w-3.5" /> {copied ? 'Copied!' : 'Copy'}
                        </button>
                        <button onClick={handleReset} className="text-sm text-slate-500 hover:text-orange-500 flex items-center gap-1 transition-colors">
                          <RotateCcw className="h-3.5 w-3.5" /> New post
                        </button>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6 mb-4">
                      <p className="text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed text-sm">{result.body}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {result.hashtags.map((h, i) => (
                        <span key={i} className="text-xs bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-full">#{h}</span>
                      ))}
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
                      <p className="text-sm text-amber-800 dark:text-amber-300 flex items-start gap-2">
                        <Sparkles className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span><strong>Pro tip:</strong> {result.tip}</span>
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-center text-white">
                      <h3 className="font-bold text-lg mb-2">Want Unlimited AI Posts?</h3>
                      <p className="text-orange-100 text-sm mb-4">KontentFire generates unique posts every time, schedules them automatically, and publishes directly to your accounts.</p>
                      <Link href="https://app.kontentfire.com/login">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                          Start Free 7-Day Trial <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <p className="text-xs text-orange-200 mt-2">No credit card required</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* What You Get Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">What This Free Tool Generates</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📝', title: 'Platform-Optimized Post', desc: 'Content tailored to each platform\'s best practices and character limits' },
                { icon: '#️⃣', title: 'Relevant Hashtags', desc: 'Curated hashtags to maximize reach and discoverability' },
                { icon: '💡', title: 'Engagement Tips', desc: 'Pro tips to boost likes, comments, and shares on each post' },
                { icon: '📊', title: 'Post Formatting', desc: 'Proper formatting with line breaks, emojis, and CTAs' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700 text-center">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="h-4 w-4" />
                <span>FAQs</span>
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-800 transition-colors">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for Unlimited AI Content?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              This free tool shows you what&apos;s possible. The full KontentFire platform generates unique content, schedules posts, publishes automatically, and tracks analytics — all from one dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://app.kontentfire.com/login">
                <Button size="lg">Start Free 7-Day Trial <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">View Pricing</Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">No credit card required. Cancel anytime.</p>
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
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'KontentFire AI Social Media Post Generator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: 'https://kontentfire.com/tools/social-media-post-generator',
            description: 'Free AI-powered social media post generator. Create platform-optimized posts for LinkedIn, Facebook, Instagram, and Twitter with hashtags and engagement tips.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />
    </>
  );
}
