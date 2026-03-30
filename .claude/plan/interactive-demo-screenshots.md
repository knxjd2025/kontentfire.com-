# Implementation Plan: Interactive Demo & Screenshots

## Summary
Add real product screenshots throughout the marketing website and build a lightweight interactive demo that lets visitors experience KontentFire's content generation without an account. Screenshots sourced from the production app at `kontentFire/`.

## Task Type
- [x] Frontend
- [ ] Backend
- [x] Fullstack (demo API proxy)

---

## Phase 1: Capture & Place Screenshots (Static)

### Step 1.1 — Capture screenshots from the production app
**Deliverable:** 10-15 optimized PNG/WebP screenshots in `public/screenshots/`

Capture these screens from `kontentFire` (either manually or via Playwright):

| Screenshot | Source Page | Used On |
|-----------|-----------|---------|
| `dashboard.webp` | home-page.tsx (WelcomeScreen) | Homepage hero, demo page |
| `content-create.webp` | content-page.tsx (CreateContentModal open) | Features/ai-content, demo page |
| `content-list.webp` | content-page.tsx (content list with status tabs) | Features, use-cases |
| `template-selector.webp` | template-selector.tsx | Features/templates |
| `schedule-calendar.webp` | schedule-page.tsx | Features/scheduling, content-calendar |
| `analytics-dashboard.webp` | analytics area | Features/analytics |
| `brand-voice.webp` | brand-settings-page.tsx | Features/brand-voice |
| `seo-tools.webp` | seo-page.tsx | Features, blog |
| `multi-platform.webp` | integrations/publishing UI | Features/multi-platform |
| `automation-setup.webp` | automation-management-page.tsx | Features/automation |
| `image-editor.webp` | image-editor.tsx | Features/images |
| `content-preview.webp` | content-preview-slider.tsx | Demo page, homepage |

**Action:** Place in `public/screenshots/` as optimized WebP (1200×800px max, quality 85).

### Step 1.2 — Create a reusable Screenshot component
**File:** `src/components/ui/app-screenshot.tsx`

```tsx
// Client component with lazy loading, blur placeholder, and lightbox
interface AppScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}
// Uses next/image with blur placeholder, optional click-to-enlarge modal
```

### Step 1.3 — Embed screenshots across existing pages

| Page | Screenshot(s) | Placement |
|------|--------------|-----------|
| Homepage (`page.tsx`) | `dashboard.webp`, `content-create.webp` | Below hero, in features section |
| `/demo` | All 12 screenshots in a carousel/slider | Replace "video coming soon" placeholder |
| `/features/ai-content` | `content-create.webp`, `template-selector.webp` | Hero area and how-it-works steps |
| `/features/scheduling` | `schedule-calendar.webp` | Hero area |
| `/features/analytics` | `analytics-dashboard.webp` | Hero area |
| `/features/templates` | `template-selector.webp` | Hero area |
| `/features/automation` | `automation-setup.webp` | Hero area |
| `/features/images` | `image-editor.webp` | Hero area |
| `/features/brand-voice` | `brand-voice.webp` | Hero area |
| `/features/multi-platform` | `multi-platform.webp` | Hero area |
| `/features/content-calendar` | `schedule-calendar.webp` | Hero area |
| `/features/social-media-posts` | `content-create.webp` | Hero area |
| `/compare/*` | `dashboard.webp` | KontentFire side of comparison |

---

## Phase 2: Interactive Demo (Lightweight)

### Step 2.1 — Create demo data & mock responses
**File:** `src/data/demo-content.ts`

Pre-built demo content for each template type, so the "demo" doesn't need a real API:

```typescript
interface DemoContent {
  template: string;
  topic: string;
  platform: 'linkedin' | 'facebook' | 'instagram' | 'twitter';
  generatedContent: string;
  hashtags: string[];
  imagePrompt: string;
  scheduleSuggestion: string;
}

// 20-30 pre-generated examples across templates:
// Battle Royale, Myth Buster, How-To, Checklist, Tip of the Day, etc.
```

### Step 2.2 — Build the interactive demo component
**File:** `src/components/demo/interactive-demo.tsx` (client component)

A simplified version of the content creation flow:

```
┌─────────────────────────────────────────────┐
│  Step 1: Choose Template                     │
│  [Battle Royale] [Myth Buster] [How-To] ... │
├─────────────────────────────────────────────┤
│  Step 2: Enter Topic                         │
│  [Your business topic...        ] or [Random]│
├─────────────────────────────────────────────┤
│  Step 3: Choose Platform                     │
│  [LinkedIn] [Facebook] [Instagram] [Twitter] │
├─────────────────────────────────────────────┤
│  Step 4: ✨ Generate (simulated)            │
│  [Generating...] → Shows pre-built result   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ Generated Post Preview               │   │
│  │ "5 Myths About [Topic] Busted..."   │   │
│  │ #hashtag1 #hashtag2 #hashtag3       │   │
│  │ 📅 Best time: Tuesday 10am          │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  [🔥 Create Real Content - Sign Up]         │
└─────────────────────────────────────────────┘
```

**Behavior:**
- Steps 1-3: Real UI inputs (template picker, topic input, platform selector)
- Step 4: Fake 2-3 second "generation" animation, then show pre-built content from demo-content.ts matched to the selected template+platform
- Topic input: Match against pre-built content by fuzzy keyword, or fall back to a random example
- CTA at the end drives to `app.kontentfire.com/login`
- No API calls, no account needed, runs entirely client-side

### Step 2.3 — Build screenshot carousel component
**File:** `src/components/demo/screenshot-carousel.tsx` (client component)

Framer Motion animated carousel showing all app screenshots with captions. Used on the demo page below the interactive demo.

### Step 2.4 — Rebuild the demo page
**File:** Update `src/app/demo/page.tsx`

New structure:
1. Hero: "Try KontentFire — No Account Needed"
2. Interactive Demo component (Step 2.2)
3. Screenshot Carousel: "See the Full Platform"
4. Feature highlights grid with screenshots
5. CTA: "Ready for the real thing? Sign up now"
6. FAQ with schema

### Step 2.5 — Add mini-demo to homepage
Embed a smaller version of the interactive demo on the homepage between features and pricing sections. Just template picker + "Generate" → shows one example with CTA.

---

## Phase 3: Screenshot Placement Across Site

### Step 3.1 — Update all feature pages
Each feature page's hero section gets its relevant screenshot placed using the AppScreenshot component, replacing the current icon-only hero.

### Step 3.2 — Update comparison pages
Add `dashboard.webp` screenshot to the KontentFire side of each comparison page, making the visual comparison more concrete.

### Step 3.3 — Update homepage
Replace the current video-only hero with a split layout: left side keeps the text/CTA, right side shows an animated screenshot mockup (browser frame around `dashboard.webp` with subtle animation).

---

## Key Files

| File | Operation | Description |
|------|-----------|-------------|
| `public/screenshots/*.webp` | Create | 12 app screenshots |
| `src/components/ui/app-screenshot.tsx` | Create | Reusable screenshot component with lightbox |
| `src/data/demo-content.ts` | Create | Pre-generated demo content for 20+ scenarios |
| `src/components/demo/interactive-demo.tsx` | Create | Step-by-step interactive content generator |
| `src/components/demo/screenshot-carousel.tsx` | Create | Animated screenshot carousel |
| `src/app/demo/page.tsx` | Modify | Rebuild with interactive demo + screenshots |
| `src/app/page.tsx` | Modify | Add mini-demo and screenshots to homepage |
| `src/app/features/*/page.tsx` | Modify | Add relevant screenshots to each feature page |
| `src/app/compare/[slug]/page.tsx` | Modify | Add dashboard screenshot |
| `src/components/sections/hero.tsx` | Modify | Add screenshot to hero section |

## Risks and Mitigation

| Risk | Mitigation |
|------|------------|
| Screenshots become outdated as app evolves | Use a Playwright script to auto-capture; store capture date in filename |
| Demo content doesn't match user's industry | Include diverse examples across 10+ industries; add "surprise me" random button |
| Large images slow page load | Use WebP, next/image optimization, lazy loading, blur placeholders |
| Interactive demo sets wrong expectations | Clear "Demo Preview" badge; actual generation requires account |
| No real screenshots available yet | Phase 1 can use placeholder mockups (gradient cards) until real screenshots are captured |

## Implementation Priority

1. **Phase 2.1-2.4** (Interactive demo) — Highest impact, can launch with mockup screenshots
2. **Phase 1.1-1.3** (Real screenshots) — Requires access to running app, can be done async
3. **Phase 3** (Site-wide placement) — Incremental improvement after demo is live

## Notes

- The kontentFire app has 13 content templates (Battle Royale, Myth Buster, Checklist, etc.) — the demo should showcase at least 6-8 of these
- The interactive demo is purely client-side — no API keys or backend needed
- Screenshots should show the orange/fire branding prominently
- All CTAs in the demo funnel to `https://app.kontentfire.com/login`
