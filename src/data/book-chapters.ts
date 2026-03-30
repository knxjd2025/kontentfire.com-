export interface BookImage {
  id: string;
  chapter: string;
  filename: string;
  position: string;
  style: string;
}

export interface BookChapter {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  tradeFocus: string;
  description: string;
  wordCount: number;
  keywords: string[];
  manuscriptFile: string;
  partNumber: number;
  partTitle: string;
  protagonist: string;
  trade: string;
  fileName: string;
}

export const BOOK_TITLE = 'The AI Apprentice';
export const BOOK_SUBTITLE =
  'How Trade Service Businesses Build a Content Engine That Prints Money';
export const BOOK_AUTHOR = 'KontentFire';

export const BOOK_PARTS = [
  { number: 0, title: 'Introduction', chapters: [0] },
  { number: 1, title: 'Foundation', chapters: [1, 2, 3] },
  { number: 2, title: 'The Content Engine', chapters: [4, 5, 6] },
  { number: 3, title: 'Amplify', chapters: [7, 8, 9] },
  { number: 4, title: 'Scale', chapters: [10] },
  { number: 5, title: 'Appendices', chapters: [11] },
];

export const CHAPTERS: readonly BookChapter[] = [
  {
    id: 'ch00',
    slug: 'introduction',
    number: 0,
    title: 'Introduction: The Post You Never Made',
    subtitle: 'Why this book exists and what you\'ll learn',
    tradeFocus: 'All trades',
    description:
      'Every trade business owner knows they should post on social media but never finds the time. This introduction explains who the book is for, what you\'ll learn, and how AI can turn content creation from a daily chore into a monthly routine.',
    wordCount: 2107,
    keywords: [
      'AI social media book',
      'social media for contractors',
      'trade business marketing',
      'content automation guide',
    ],
    manuscriptFile: 'book/manuscript/ch00-introduction.md',
    partNumber: 0,
    partTitle: 'Introduction',
    protagonist: 'You',
    trade: 'All trades',
    fileName: 'ch00-introduction.md',
  },
  {
    id: 'ch01',
    slug: 'trading-the-notepad',
    number: 1,
    title: 'Chapter 1: Trading the Notepad for the Tablet',
    subtitle: 'The AI Shift',
    tradeFocus: 'Plumbing',
    description:
      'Follow Bob the plumber as he discovers how AI tools can replace his scattered notepad marketing approach. Learn the fundamental shift from manual content creation to AI-assisted workflows that save hours every week.',
    wordCount: 4402,
    keywords: [
      'AI for plumbers',
      'social media for plumbing business',
      'AI marketing shift',
      'trade business technology',
    ],
    manuscriptFile: 'book/manuscript/ch01-trading-the-notepad.md',
    partNumber: 1,
    partTitle: 'Foundation',
    protagonist: 'Bob',
    trade: 'Plumbing',
    fileName: 'ch01-trading-the-notepad.md',
  },
  {
    id: 'ch02',
    slug: 'defining-brand-voice',
    number: 2,
    title: 'Chapter 2: Groundwork \u2014 Defining Your Brand Voice',
    subtitle: 'Make AI sound like you, not a robot',
    tradeFocus: 'HVAC',
    description:
      'Your brand voice is what makes AI-generated content sound like you wrote it on your best day. This chapter walks through the Brand Voice Template with an HVAC company example, so every post reflects your personality and expertise.',
    wordCount: 3793,
    keywords: [
      'brand voice for contractors',
      'defining business brand',
      'AI brand voice template',
      'roofing company marketing',
    ],
    manuscriptFile: 'book/manuscript/ch02-defining-brand-voice.md',
    partNumber: 1,
    partTitle: 'Foundation',
    protagonist: 'Maria',
    trade: 'HVAC',
    fileName: 'ch02-defining-brand-voice.md',
  },
  {
    id: 'ch03',
    slug: 'idea-generation',
    number: 3,
    title: 'Chapter 3: Pouring the Concrete \u2014 Idea Generation That Doesn\'t Suck',
    subtitle: 'Never stare at a blank screen again',
    tradeFocus: 'Electrical',
    description:
      'Dave the electrician stares at a blank screen every time he tries to post. This chapter reveals the Idea Factory system: AI-powered brainstorming, seasonal content calendars, and the 12-month content plan that eliminates writer\'s block forever.',
    wordCount: 5693,
    keywords: [
      'social media content ideas contractors',
      'what to post on social media',
      'content calendar for trades',
      'AI brainstorming for business',
    ],
    manuscriptFile: 'book/manuscript/ch03-idea-generation.md',
    partNumber: 1,
    partTitle: 'Foundation',
    protagonist: 'Dave',
    trade: 'Electrical',
    fileName: 'ch03-idea-generation.md',
  },
  {
    id: 'ch04',
    slug: 'writing-posts-captions',
    number: 4,
    title: 'Chapter 4: Framing the House \u2014 Writing Posts, Captions & Blogs',
    subtitle: 'Turn AI output into posts that sound like you',
    tradeFocus: 'Roofing',
    description:
      'Learn how to use AI to write social media posts, captions, and blog articles that actually sound like a real person. Includes copy-paste prompts for every content type and a framework for editing AI output into posts that generate calls.',
    wordCount: 5484,
    keywords: [
      'social media captions contractors',
      'writing social posts',
      'AI copywriting for trades',
      'blog posts for contractors',
    ],
    manuscriptFile: 'book/manuscript/ch04-writing-posts-captions.md',
    partNumber: 2,
    partTitle: 'The Content Engine',
    protagonist: 'Jake',
    trade: 'Roofing',
    fileName: 'ch04-writing-posts-captions.md',
  },
  {
    id: 'ch05',
    slug: 'images-graphics-video',
    number: 5,
    title: 'Chapter 5: Installing the Fixtures \u2014 Images, Graphics & Video Scripts',
    subtitle: 'Visual content that stops the scroll',
    tradeFocus: 'Landscaping',
    description:
      'Visual content gets 2.3x more engagement than text alone. This chapter covers AI image generation, before-and-after photo strategies, video script templates, and how landscaping businesses create scroll-stopping visual content.',
    wordCount: 5164,
    keywords: [
      'social media images contractors',
      'AI image generation',
      'video scripts for trade business',
      'before and after photos marketing',
    ],
    manuscriptFile: 'book/manuscript/ch05-images-graphics-video.md',
    partNumber: 2,
    partTitle: 'The Content Engine',
    protagonist: 'Carlos',
    trade: 'Landscaping',
    fileName: 'ch05-images-graphics-video.md',
  },
  {
    id: 'ch06',
    slug: 'platform-strategies',
    number: 6,
    title: 'Chapter 6: Navigating the Neighborhoods \u2014 Platform Strategies',
    subtitle: 'Facebook, Instagram, Google, and beyond',
    tradeFocus: 'Painting',
    description:
      'Not all social media platforms are equal for trade businesses. Learn which platforms deliver the most leads for your trade, how a painting company dominates Google Business Profile, and platform-specific posting strategies that work.',
    wordCount: 4661,
    keywords: [
      'social media platforms for contractors',
      'which platform for trade business',
      'Google Business Profile for contractors',
      'Facebook for trade businesses',
    ],
    manuscriptFile: 'book/manuscript/ch06-platform-strategies.md',
    partNumber: 2,
    partTitle: 'The Content Engine',
    protagonist: 'Lisa',
    trade: 'Painting',
    fileName: 'ch06-platform-strategies.md',
  },
  {
    id: 'ch07',
    slug: 'scheduling-automation',
    number: 7,
    title: 'Chapter 7: Setting the Thermostat \u2014 Scheduling & Automation',
    subtitle: 'Batch it, schedule it, forget it',
    tradeFocus: 'Cleaning',
    description:
      'Stop scrambling every day for something to post. Rosa runs a cleaning service and uses the batching system to create a full month of content in one Sunday session. Learn scheduling tools, automation workflows, and the set-it-and-forget-it system.',
    wordCount: 5069,
    keywords: [
      'social media automation',
      'scheduling posts',
      'content batching for business',
      'social media scheduling tools',
    ],
    manuscriptFile: 'book/manuscript/ch07-scheduling-automation.md',
    partNumber: 3,
    partTitle: 'Amplify',
    protagonist: 'Rosa',
    trade: 'Cleaning',
    fileName: 'ch07-scheduling-automation.md',
  },
  {
    id: 'ch08',
    slug: 'punch-list-editing',
    number: 8,
    title: 'Chapter 8: The Punch List \u2014 Reviewing, Editing & Avoiding AI Mistakes',
    subtitle: 'Quality control for AI-generated content',
    tradeFocus: 'Pest Control',
    description:
      'AI makes mistakes. This chapter gives you the Punch List: a simple, repeatable editing checklist that catches hallucinations, fixes awkward phrasing, and injects your personality into every post before it goes live.',
    wordCount: 4733,
    keywords: [
      'editing social media posts',
      'quality control content',
      'AI content editing checklist',
      'avoiding AI mistakes',
    ],
    manuscriptFile: 'book/manuscript/ch08-punch-list-editing.md',
    partNumber: 3,
    partTitle: 'Amplify',
    protagonist: 'Tony',
    trade: 'General Contractor',
    fileName: 'ch08-punch-list-editing.md',
  },
  {
    id: 'ch09',
    slug: 'analytics-roi',
    number: 9,
    title: 'Chapter 9: Measuring the Voltage \u2014 Analytics & What Actually Matters',
    subtitle: 'Track what works and cut what doesn\'t',
    tradeFocus: 'All trades',
    description:
      'Likes don\'t pay the bills. This chapter teaches you which metrics actually matter for trade businesses, how to track ROI from social media, and how to use data to double down on posts that bring in calls and cut the ones that don\'t.',
    wordCount: 5307,
    keywords: [
      'social media ROI contractors',
      'measuring results',
      'social media analytics trade business',
      'marketing metrics contractors',
    ],
    manuscriptFile: 'book/manuscript/ch09-analytics-roi.md',
    partNumber: 3,
    partTitle: 'Amplify',
    protagonist: 'Maria',
    trade: 'HVAC',
    fileName: 'ch09-analytics-roi.md',
  },
  {
    id: 'ch10',
    slug: 'scaling-the-crew',
    number: 10,
    title: 'Chapter 10: Scaling the Crew \u2014 Taking Your Content to the Next Level',
    subtitle: 'Delegate the system and get yourself out of the loop',
    tradeFocus: 'All trades',
    description:
      'The final chapter is about removing yourself from the content machine entirely. Build a Delegation SOP that lets an employee, VA, or family member run your content engine without you touching it. Go from doing marketing to having marketing done for you.',
    wordCount: 4955,
    keywords: [
      'scaling social media',
      'hiring marketing',
      'delegating social media',
      'SOP for content marketing',
    ],
    manuscriptFile: 'book/manuscript/ch10-scaling-the-crew.md',
    partNumber: 4,
    partTitle: 'Scale',
    protagonist: 'Marcus & Jennifer',
    trade: 'Pest Control',
    fileName: 'ch10-scaling-the-crew.md',
  },
  {
    id: 'appendices',
    slug: 'appendices',
    number: 11,
    title: 'Appendices',
    subtitle: 'Cheat sheets, prompt library, tool comparisons & checklists',
    tradeFocus: 'All trades',
    description:
      'Quick reference appendices including platform cheat sheets for Facebook, Instagram, and Google Business Profile, a complete AI prompt library, tool cost comparisons, and ready-to-use checklists for your first week of content creation.',
    wordCount: 3397,
    keywords: [
      'social media cheat sheets',
      'quick reference',
      'AI prompt library',
      'social media tools comparison',
    ],
    manuscriptFile: 'book/manuscript/appendices.md',
    partNumber: 5,
    partTitle: 'Appendices',
    protagonist: '',
    trade: '',
    fileName: 'appendices.md',
  },
] as const;

export const PART_COLORS: Record<number, string> = {
  0: 'from-slate-600 to-slate-800',
  1: 'from-blue-600 to-indigo-700',
  2: 'from-orange-500 to-red-600',
  3: 'from-emerald-600 to-teal-700',
  4: 'from-purple-600 to-violet-700',
  5: 'from-slate-500 to-slate-700',
};

export const PART_ACCENT_COLORS: Record<number, string> = {
  0: 'text-slate-600 dark:text-slate-400',
  1: 'text-blue-600 dark:text-blue-400',
  2: 'text-orange-600 dark:text-orange-400',
  3: 'text-emerald-600 dark:text-emerald-400',
  4: 'text-purple-600 dark:text-purple-400',
  5: 'text-slate-500 dark:text-slate-400',
};

export const PART_BG_COLORS: Record<number, string> = {
  0: 'bg-slate-50 dark:bg-slate-900/50',
  1: 'bg-blue-50 dark:bg-blue-950/30',
  2: 'bg-orange-50 dark:bg-orange-950/30',
  3: 'bg-emerald-50 dark:bg-emerald-950/30',
  4: 'bg-purple-50 dark:bg-purple-950/30',
  5: 'bg-slate-50 dark:bg-slate-900/50',
};

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getAllChapters(): readonly BookChapter[] {
  return CHAPTERS;
}

export function getChapterBySlug(slug: string): BookChapter | undefined {
  return CHAPTERS.find((ch) => ch.slug === slug);
}

export function getChapterByNumber(num: number): BookChapter | undefined {
  return CHAPTERS.find((ch) => ch.number === num);
}

export function getTotalWordCount(): number {
  return CHAPTERS.reduce((sum, ch) => sum + ch.wordCount, 0);
}

export function getEstimatedReadingTime(wordCount: number): number {
  return Math.ceil(wordCount / 250);
}
