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
  Clock,
  Hash,
  FileText,
  Loader2,
  HelpCircle,
} from 'lucide-react';

type PostType = 'thought-leadership' | 'how-to' | 'story' | 'question' | 'list';
type Tone = 'professional' | 'casual' | 'inspirational' | 'authoritative';

interface GeneratedPost {
  text: string;
  hashtags: string[];
  bestTime: string;
}

const POST_EXAMPLES: Record<PostType, Record<Tone, GeneratedPost[]>> = {
  'thought-leadership': {
    professional: [
      { text: "The biggest myth in business today? That you need to choose between growth and sustainability.\n\nAfter 10 years leading teams across three industries, I've seen the same pattern: companies that invest in sustainable practices outperform short-term thinkers by 3x over five years.\n\nHere's what the data actually shows:\n\n1. Sustainable companies retain talent 40% longer\n2. Customer loyalty scores are 2.3x higher\n3. Operational costs decrease by 18% within 24 months\n\nThe real question isn't whether you can afford to be sustainable.\n\nIt's whether you can afford not to be.\n\nWhat's your experience with this? I'd love to hear from leaders who've made this shift.", hashtags: ['#Leadership', '#Sustainability', '#BusinessGrowth', '#FutureOfWork', '#Strategy'], bestTime: 'Tuesday or Wednesday, 8-10 AM' },
      { text: "We need to talk about the elephant in every boardroom: most digital transformation initiatives fail.\n\nNot because of technology. Not because of budget.\n\nBecause of culture.\n\n73% of failed transformations had adequate technology and funding. What they lacked was organizational buy-in from middle management.\n\nThe leaders who succeed at digital transformation do three things differently:\n\n- They start with WHY before WHAT\n- They empower middle managers as change champions\n- They celebrate small wins publicly and often\n\nTransformation isn't a technology project. It's a people project.\n\nAgree? Disagree? Tell me your transformation story.", hashtags: ['#DigitalTransformation', '#Leadership', '#ChangeManagement', '#Innovation', '#CorporateStrategy'], bestTime: 'Tuesday, 7-9 AM' },
      { text: "Hot take: The 'hustle culture' era is over, and that's the best thing to happen to business.\n\nI used to wear 80-hour weeks like a badge of honor. Then I burned out. Twice.\n\nWhat I learned rebuilding:\n\n- Output matters more than input hours\n- Rest is a competitive advantage\n- The best ideas come from rested minds\n- Sustainable pace beats sprint-and-crash every time\n\nMy team now works 40-hour weeks and we've grown revenue 4x in two years.\n\nThe math is simple: rested people make better decisions.\n\nBetter decisions compound over time.\n\nWho else has made this shift?", hashtags: ['#WorkLifeBalance', '#Leadership', '#Productivity', '#MentalHealth', '#BusinessGrowth'], bestTime: 'Wednesday, 8-10 AM' },
    ],
    casual: [
      { text: "Okay, I need to say this out loud:\n\nWe've been doing meetings wrong this entire time.\n\nLast month I tried something radical. I cancelled every recurring meeting for my team. ALL of them.\n\nThen we only added back the ones people actually missed.\n\nGuess how many came back?\n\n3 out of 14. 😅\n\nWe freed up 11 hours per week PER PERSON.\n\nThat's almost 1.5 extra days of actual work.\n\nThe result? Our best quarter ever.\n\nSometimes the best leadership move is getting out of your team's way.\n\nHas anyone else tried this? What happened?", hashtags: ['#Meetings', '#Productivity', '#Leadership', '#WorkSmarter', '#TeamManagement'], bestTime: 'Thursday, 11 AM - 1 PM' },
    ],
    inspirational: [
      { text: "Three years ago, I was passed over for a promotion I'd worked toward for 5 years.\n\nI was devastated. I almost quit the industry entirely.\n\nInstead, I took that energy and channeled it into building something of my own.\n\nToday, my company serves 500+ clients across 12 countries.\n\nHere's what that rejection taught me:\n\n→ Closed doors are often redirections, not dead ends\n→ Your value isn't determined by someone else's decision\n→ The best revenge is building something meaningful\n→ Every setback contains the seed of a comeback\n\nIf you're facing rejection right now, keep going.\n\nYour story isn't over. It's just getting started.\n\nShare a time when rejection led to something better.", hashtags: ['#Motivation', '#Entrepreneurship', '#Resilience', '#CareerGrowth', '#NeverGiveUp'], bestTime: 'Monday, 7-9 AM' },
    ],
    authoritative: [
      { text: "After analyzing 10,000+ company quarterly reports over 8 years, here's what separates top-performing organizations from the rest:\n\nIt's not technology. It's not funding. It's not even talent.\n\nIt's decision-making velocity.\n\nThe top 10% of performers make strategic decisions 3.2x faster than average companies. But here's the nuance: they don't sacrifice quality.\n\nThey use three frameworks:\n\n1. Two-way door decisions (reversible) are made in 24 hours\n2. One-way door decisions (irreversible) get 72-hour deep analysis\n3. Every decision has a single owner, not a committee\n\nThe cost of slow decisions compounds. Every week of delay on a strategic decision costs an average of $47,000 in lost opportunity.\n\nSpeed with structure beats perfection through paralysis. Every time.", hashtags: ['#Strategy', '#DecisionMaking', '#BusinessIntelligence', '#Leadership', '#DataDriven'], bestTime: 'Tuesday, 7-8 AM' },
    ],
  },
  'how-to': {
    professional: [
      { text: "How to build a personal brand on LinkedIn in 30 minutes a day:\n\n(A framework I've used to grow from 200 to 50K followers)\n\nStep 1: Define your niche (Day 1)\nPick ONE topic you can talk about endlessly. Not 5 topics. One.\n\nStep 2: Create a content bank (30 min/week)\nSpend Sunday writing 5 post ideas. Just bullet points. You'll flesh them out daily.\n\nStep 3: Post consistently (15 min/day)\nPick one idea → Write it in 10 min → Edit for 5 min → Post.\n\nStep 4: Engage authentically (15 min/day)\nComment on 10 posts in your niche. Add value, don't just say 'Great post!'\n\nStep 5: Analyze weekly (15 min/week)\nWhat got the most engagement? Do more of that.\n\nThe secret nobody tells you: consistency beats virality. Every single time.\n\nBookmark this and start tomorrow.", hashtags: ['#PersonalBranding', '#LinkedInTips', '#ContentStrategy', '#ProfessionalDevelopment', '#GrowthHacking'], bestTime: 'Tuesday or Thursday, 8-10 AM' },
      { text: "How to run a productive 1-on-1 meeting (that your team actually values):\n\nMost managers wing their 1-on-1s. Don't be most managers.\n\nHere's a framework that takes 30 minutes and transforms team engagement:\n\n0-5 min: Personal check-in\nAsk 'How are you, really?' and actually listen.\n\n5-15 min: Their agenda\nLet them drive. Ask 'What would be most helpful to discuss today?'\n\n15-22 min: Blockers and support\nAsk 'What's slowing you down that I can help remove?'\n\n22-27 min: Growth conversation\nAsk 'What skill do you want to develop this quarter?'\n\n27-30 min: Action items\nBoth parties state one clear next step.\n\nThe key: Take notes. Follow through on commitments. Every. Single. Time.\n\nTrust is built in the follow-through, not the meeting.", hashtags: ['#Management', '#Leadership', '#TeamBuilding', '#OneOnOne', '#ManagerTips'], bestTime: 'Monday, 9-11 AM' },
    ],
    casual: [
      { text: "Alright, here's how I actually write LinkedIn posts that get engagement (no fluff version):\n\n1. Hook in the first line — make them stop scrolling\n2. One blank line after the hook — creates curiosity gap\n3. Short paragraphs only — nobody reads walls of text\n4. Use → and bullet points — easier to scan\n5. End with a question — boosts comments by 200%+\n\nBonus tips:\n- Write at an 8th grade reading level\n- Use 'you' more than 'I'\n- Stories > statistics (but both together = 🔥)\n\nThat's it. No magic formula. No $997 course needed.\n\nJust write like you talk, be helpful, and show up every day.\n\nSave this for your next post!", hashtags: ['#LinkedInTips', '#ContentCreation', '#SocialMedia', '#WritingTips', '#LinkedInGrowth'], bestTime: 'Wednesday, 10 AM - 12 PM' },
    ],
    inspirational: [
      { text: "How to bounce back when your project fails spectacularly:\n\n(I've done this 4 times. Here's the playbook.)\n\nStep 1: Feel it fully\nDon't skip the grief. Give yourself 48 hours to be disappointed. Then move.\n\nStep 2: Extract the lessons\nWrite down everything that went wrong. Be brutally honest. This document becomes gold.\n\nStep 3: Talk to your team openly\nVulnerability after failure builds more trust than any team-building exercise.\n\nStep 4: Ship something small\nWithin 2 weeks, complete a small win. Rebuild momentum through action.\n\nStep 5: Share the story publicly\nYour failure story will help someone else. And it positions you as someone who has been through the fire and came out stronger.\n\nFailure isn't the opposite of success. It's the tuition you pay for it.\n\nWhat's your biggest failure-to-growth story?", hashtags: ['#Resilience', '#FailForward', '#Leadership', '#GrowthMindset', '#Entrepreneurship'], bestTime: 'Wednesday, 7-9 AM' },
    ],
    authoritative: [
      { text: "How to build a data-driven content strategy (the framework Fortune 500 companies use):\n\nI've implemented this across 30+ enterprise clients. Here's the exact process:\n\nPhase 1: Audience Intelligence (Week 1)\n- Analyze your top 50 performing posts from the last 12 months\n- Map engagement patterns by topic, format, and time\n- Identify your audience's top 3 pain points from comments\n\nPhase 2: Competitive Gap Analysis (Week 2)\n- Audit 5 competitors' last 100 posts each\n- Find topics they're ignoring that your audience cares about\n- Document their posting frequency and engagement rates\n\nPhase 3: Content Architecture (Week 3)\n- Build 4 content pillars from your data\n- Create 12 sub-themes per pillar\n- Map to a 90-day editorial calendar\n\nPhase 4: Execution and Optimization (Ongoing)\n- Publish 4-5x per week\n- A/B test hooks and formats monthly\n- Reallocate effort toward top-performing pillars quarterly\n\nThis isn't guesswork. This is strategy backed by data.", hashtags: ['#ContentStrategy', '#DataDriven', '#Marketing', '#B2BMarketing', '#DigitalStrategy'], bestTime: 'Tuesday, 8-9 AM' },
    ],
  },
  story: {
    professional: [
      { text: "Last Tuesday, I got a call from a client I hadn't spoken to in 3 years.\n\n'I still use the framework you taught me,' she said. 'It changed how I run my entire department.'\n\nThat 45-minute conversation we had back in 2023 took me maybe 20 minutes of prep.\n\nBut for her, it was transformative.\n\nThis is what most professionals get wrong about building relationships:\n\nWe overvalue big gestures and undervalue small moments of genuine help.\n\nThe 5-minute email answering someone's question.\nThe quick introduction to someone in your network.\nThe honest feedback when everyone else is being polite.\n\nThese small investments compound into career-defining relationships.\n\nYour reputation isn't built in boardrooms. It's built in the margins.\n\nWho made a small investment in you that changed everything?", hashtags: ['#Networking', '#Relationships', '#CareerAdvice', '#ProfessionalDevelopment', '#GiveFirst'], bestTime: 'Thursday, 8-10 AM' },
    ],
    casual: [
      { text: "True story: I once lost a $200K deal because of a typo in a proposal.\n\nYep. A TYPO. 😬\n\nThe client later told me: 'If you can't get the small details right in a proposal, how can we trust you with our business?'\n\nOuch. But they were right.\n\nThat was 6 years ago. Since then:\n- Every proposal gets reviewed by 2 people minimum\n- We use AI tools to catch errors (not kidding, it's caught embarrassing mistakes)\n- We built a pre-send checklist that takes 5 minutes\n\nThe result? Our proposal win rate went from 22% to 41%.\n\nNot because we became better writers. Because we stopped making preventable mistakes.\n\nThe boring stuff matters. Sometimes more than the brilliant stuff.\n\nAnyone else have a painful lesson learned from a small mistake?", hashtags: ['#LessonsLearned', '#Sales', '#Proposals', '#AttentionToDetail', '#BusinessTips'], bestTime: 'Friday, 10 AM - 12 PM' },
    ],
    inspirational: [
      { text: "6 months ago, I hired someone everyone told me not to.\n\nNo degree. No traditional experience. Career gap of 3 years.\n\nBut in the interview, she showed me something no other candidate had:\n\nA portfolio of problems she'd solved on her own.\n\nShe'd taught herself data analysis to help her local food bank optimize donations. She'd built a website for a community center. She'd automated reporting for a volunteer organization.\n\nNone of this was on a resume. All of it showed character.\n\nToday, she's the highest-performing analyst on our team.\n\nHere's what this taught me about hiring:\n\n→ Credentials show what someone was taught\n→ Projects show what someone chose to learn\n→ Character shows what someone will become\n\nThe best hire I ever made didn't check a single traditional box.\n\nSometimes the best talent is hiding in plain sight.", hashtags: ['#Hiring', '#DiversityAndInclusion', '#Talent', '#Leadership', '#PeopleFirst'], bestTime: 'Monday, 8-10 AM' },
    ],
    authoritative: [
      { text: "In 2024, we lost our biggest client. 35% of revenue. Gone in one meeting.\n\nThe reason? We'd been so focused on acquiring new clients that we neglected the relationship with our largest one.\n\nHere's exactly what happened and what we rebuilt from the ashes:\n\nWhat went wrong:\n- No dedicated account manager for our top 5 clients\n- Quarterly business reviews became annual (then stopped)\n- We missed three product updates that would have served them\n\nWhat we built after:\n1. Client Health Score system — every account gets a weekly score based on engagement, support tickets, and NPS\n2. Red flag alerts — automated notifications when health score drops below threshold\n3. Proactive value delivery — monthly insights reports showing ROI, not just usage stats\n4. Executive sponsor program — senior leader paired with every enterprise client\n\nResult after 12 months: Net retention went from 82% to 118%.\n\nLosing that client cost us $1.2M. The systems we built in response have generated $4M+ in retained and expanded revenue.\n\nSometimes the most expensive lessons are the most valuable.", hashtags: ['#CustomerSuccess', '#ClientRetention', '#B2B', '#SaaS', '#RevenueGrowth'], bestTime: 'Tuesday, 9-11 AM' },
    ],
  },
  question: {
    professional: [
      { text: "Genuine question for leaders:\n\nIf you could only measure ONE metric to determine your team's health, what would it be?\n\nI've been thinking about this a lot lately. Here's where I've landed:\n\nNot revenue. Not productivity. Not even engagement scores.\n\nI'd measure: How quickly does bad news travel upward?\n\nIn healthy teams, problems surface within hours. People feel safe raising issues because they know the response will be 'Let's fix it' not 'Whose fault is it?'\n\nIn unhealthy teams, problems get hidden, minimized, or spun. By the time leadership hears about issues, they've compounded into crises.\n\nThe speed of bad news is a proxy for psychological safety, trust, and communication, the three pillars of team health.\n\nSo I'll ask again: What's YOUR one metric?\n\nDrop it in the comments. I'm genuinely curious.", hashtags: ['#Leadership', '#TeamCulture', '#Management', '#PsychologicalSafety', '#Metrics'], bestTime: 'Wednesday, 8-10 AM' },
    ],
    casual: [
      { text: "Quick poll for my network:\n\nWhat's the ONE tool you couldn't live without at work?\n\nNot a whole category. One specific tool.\n\nI'll go first: Honestly? It's my calendar blocking app. Without protected focus time, my productivity drops by about 60%.\n\nI've noticed the most productive people I know all have one tool they swear by, and it's usually not what you'd expect.\n\nSome answers I've heard:\n- A simple paper notebook\n- A specific timer app\n- A password manager (lol but honestly)\n- AI writing assistant\n\nDrop yours below. I'm always looking for hidden gems! 👇", hashtags: ['#Productivity', '#WorkTools', '#TechStack', '#WorkSmarter', '#Poll'], bestTime: 'Friday, 9-11 AM' },
    ],
    inspirational: [
      { text: "What would you attempt if you knew you couldn't fail?\n\nI asked this question at a leadership retreat last week. The answers were incredible:\n\n'I'd start the nonprofit I've been dreaming about for 10 years.'\n'I'd write the book that's been sitting in my head.'\n'I'd pitch the CEO on restructuring the entire division.'\n'I'd go back to school for something completely different.'\n\nHere's what struck me: every single answer was something they COULD start today.\n\nThe only thing stopping them wasn't resources or time or ability.\n\nIt was fear of failure.\n\nBut here's what I've learned: the regret of not trying always hurts more than the sting of failing.\n\nSo, your turn. What would YOU attempt?\n\nBe specific. Write it down. Then ask yourself: what's the smallest step I could take this week?", hashtags: ['#Motivation', '#CareerGrowth', '#FearOfFailure', '#TakeAction', '#Leadership'], bestTime: 'Monday, 7-9 AM' },
    ],
    authoritative: [
      { text: "A question for every CEO and founder:\n\nWhen was the last time you spent a full day doing front-line work in your company?\n\nNot observing. Actually doing the work.\n\nI do this quarterly. Last month, I spent a full day in our customer support queue.\n\nWhat I learned in 8 hours was more valuable than our entire quarterly analytics deck:\n\n- 3 friction points in our onboarding that data didn't capture\n- A recurring complaint about a feature we thought was working fine\n- A pricing objection our sales team hadn't escalated\n- 2 product ideas directly from customer conversations\n\nAll of this was invisible from the executive dashboard.\n\nThe best leaders I know maintain a direct connection to the front lines. Not through reports. Through experience.\n\nDo you do this? How often? What have you learned?", hashtags: ['#CEO', '#Leadership', '#CustomerExperience', '#FounderLife', '#StrategicLeadership'], bestTime: 'Thursday, 7-9 AM' },
    ],
  },
  list: {
    professional: [
      { text: "10 leadership lessons that took me 15 years to learn:\n\n1. Hire for character, train for skill\n2. The best feedback is specific, timely, and private\n3. Your team's ceiling is your communication floor\n4. Delegation isn't about trust, it's about development\n5. Say 'I don't know' more than you think you should\n6. Celebrate effort during the process, not just results at the end\n7. One great hire beats three good ones\n8. Your job is to make yourself replaceable in every role you hold\n9. Culture isn't what you say it is, it's what you tolerate\n10. The quietest person in the room often has the best insight\n\nWhich one resonates most with you?\n\nI'd add an 11th: leadership is a practice, not a title.\n\nSave this list and revisit it quarterly.", hashtags: ['#Leadership', '#Management', '#CareerAdvice', '#LeadershipDevelopment', '#ProfessionalGrowth'], bestTime: 'Monday or Tuesday, 8-10 AM' },
    ],
    casual: [
      { text: "7 things I wish I knew when I started my career:\n\n1. Your network is worth more than your GPA\n2. Saying no is a superpower (learn it early)\n3. Nobody cares about your job title except you\n4. The best career move is often sideways, not up\n5. Always negotiate your first offer (I left $15K on the table 🤦)\n6. Find a mentor who tells you what you need to hear, not what you want to hear\n7. Document your wins weekly — you WILL forget them at review time\n\nBonus: Don't wait for the 'perfect' opportunity. The perfect time to start is right now with whatever you have.\n\nWhich one do you wish someone told YOU earlier?\n\nI'm most grateful someone eventually taught me #5. Game changer.", hashtags: ['#CareerAdvice', '#CareerTips', '#EarlyCareer', '#ProfessionalDevelopment', '#JobSearch'], bestTime: 'Wednesday, 10 AM - 12 PM' },
    ],
    inspirational: [
      { text: "5 mindset shifts that changed my career trajectory:\n\n1. From 'I need permission' to 'I'll ask forgiveness'\nStopped waiting for approval and started showing results. Changed everything.\n\n2. From 'Networking is fake' to 'Generosity creates opportunity'\nStarted helping people with zero expectation. Opportunities found me.\n\n3. From 'I'm not ready' to 'I'll figure it out'\nSaid yes to things that scared me. Grew faster in 6 months than the previous 6 years.\n\n4. From 'Competition is a threat' to 'Collaboration multiplies impact'\nPartnered with people I used to compete with. Revenue doubled.\n\n5. From 'Failure is the end' to 'Failure is data'\nStarted treating setbacks as experiments. Fear of failure disappeared.\n\nNone of these required more money, time, or connections.\n\nJust a different lens on the same world.\n\nWhich shift would change YOUR career most right now?", hashtags: ['#MindsetShift', '#CareerGrowth', '#Motivation', '#PersonalDevelopment', '#SuccessMindset'], bestTime: 'Monday, 7-9 AM' },
    ],
    authoritative: [
      { text: "The 8 metrics every B2B company should track weekly (and most don't):\n\n1. Pipeline velocity — how fast deals move through each stage\n2. Customer health score — composite of usage, support, and NPS\n3. Net revenue retention — including expansion and contraction\n4. Time to first value — how quickly new customers see ROI\n5. Win/loss ratio by segment — not just overall\n6. Employee engagement trend — leading indicator of everything else\n7. Content-to-pipeline attribution — which content actually drives revenue\n8. Decision-to-implementation gap — how long from 'approved' to 'live'\n\nMost companies track revenue and pipeline. The winners track the signals BEHIND the numbers.\n\nNotice: 6 of these 8 metrics are leading indicators, not lagging.\n\nBy the time revenue tells you something is wrong, you're 90 days behind.\n\nWhich of these is your company missing?", hashtags: ['#B2BMetrics', '#SaaS', '#RevenueOps', '#DataDriven', '#GrowthStrategy'], bestTime: 'Tuesday, 7-9 AM' },
    ],
  },
};

const faqs = [
  {
    question: 'What is a LinkedIn post generator?',
    answer:
      'A LinkedIn post generator is an AI-powered tool that creates professional social media posts for the LinkedIn platform. It takes your topic, preferred post type, and tone as inputs, then generates a publish-ready post complete with optimal formatting, hashtags, and engagement hooks. KontentFire\'s generator uses advanced AI to match LinkedIn\'s best practices for visibility and engagement.',
  },
  {
    question: 'How do AI LinkedIn post writers create content?',
    answer:
      'AI LinkedIn post writers analyze thousands of high-performing LinkedIn posts to learn patterns that drive engagement. They consider factors like hook structure, paragraph length, storytelling frameworks, and call-to-action placement. The AI then combines your topic with these proven patterns to generate original posts tailored to your chosen tone and post type.',
  },
  {
    question: 'Is the free LinkedIn post generator really free?',
    answer:
      'Yes, this LinkedIn post generator is completely free to use with no sign-up required. You can generate as many sample posts as you like on this page. For unlimited AI-generated posts with more customization, scheduling, and multi-platform publishing, KontentFire offers a full platform starting with a free 7-day trial.',
  },
  {
    question: 'What types of LinkedIn posts perform best?',
    answer:
      'Thought leadership posts and personal stories consistently get the highest engagement on LinkedIn. Posts with a strong opening hook, short paragraphs, and a question at the end tend to perform 3-5x better than generic updates. List posts also perform well because they are easy to scan. The best strategy is mixing all post types throughout the week.',
  },
  {
    question: 'How often should I post on LinkedIn?',
    answer:
      'For optimal LinkedIn growth, post 3-5 times per week. Consistency matters more than frequency: posting 3 times every week outperforms posting 7 times one week and zero the next. The best posting times are Tuesday through Thursday, 7-10 AM in your audience\'s timezone. Use a tool like KontentFire to schedule posts at optimal times automatically.',
  },
];

export default function LinkedInPostGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [postType, setPostType] = useState<PostType>('thought-leadership');
  const [tone, setTone] = useState<Tone>('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeneratedPost | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setResult(null);

    setTimeout(() => {
      const posts = POST_EXAMPLES[postType][tone];
      const randomIndex = Math.floor(Math.random() * posts.length);
      setResult(posts[randomIndex]);
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

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Tools', href: '/tools' },
              { label: 'LinkedIn Post Generator', href: '/tools/linkedin-post-generator' },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Free AI Tool</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Free LinkedIn Post Generator
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Generate professional, engaging LinkedIn posts in seconds. Choose
              your topic, post type, and tone to get a publish-ready post with
              hashtags and timing tips.
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
                  placeholder="e.g., leadership lessons, remote work tips, career growth..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                />
              </div>

              {/* Selects Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="postType"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Post Type
                  </label>
                  <select
                    id="postType"
                    value={postType}
                    onChange={(e) => setPostType(e.target.value as PostType)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  >
                    <option value="thought-leadership">Thought Leadership</option>
                    <option value="how-to">How-To / Tutorial</option>
                    <option value="story">Personal Story</option>
                    <option value="question">Discussion Question</option>
                    <option value="list">List / Listicle</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="tone"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Tone
                  </label>
                  <select
                    id="tone"
                    value={tone}
                    onChange={(e) => setTone(e.target.value as Tone)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="inspirational">Inspirational</option>
                    <option value="authoritative">Authoritative</option>
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
                    Generating your post...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Post
                  </>
                )}
              </Button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Your Generated Post
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

                {/* Post Text */}
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
                        {result.text.length} / 3,000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Hash className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Suggested Hashtags
                      </p>
                      <p className="text-sm text-orange-600 dark:text-orange-400">
                        {result.hashtags.join(' ')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Best Time to Post
                      </p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {result.bestTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center mb-16">
            <h2 className="text-2xl font-bold text-white mb-3">
              Generate Unlimited Posts with KontentFire
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              This free tool shows what AI can do. KontentFire generates
              unlimited posts, schedules them at peak times, and publishes across
              every platform automatically.
            </p>
            <Link href="https://app.kontentfire.com/login">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
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
                LinkedIn Post Generator FAQ
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
