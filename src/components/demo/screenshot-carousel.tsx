'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScreenshotEntry {
  src: string;
  alt: string;
  caption: string;
}

const screenshots: readonly ScreenshotEntry[] = [
  {
    src: '/screenshots/dashboard.png',
    alt: 'Dashboard Overview',
    caption: 'Your content command center — see stats, recent posts, and platform performance at a glance',
  },
  {
    src: '/screenshots/content-create.png',
    alt: 'AI Content Creator',
    caption: 'Pick a template, enter your topic, and let AI generate platform-ready content in seconds',
  },
  {
    src: '/screenshots/content-list.png',
    alt: 'Content Management',
    caption: 'Manage all your content in one place — drafts, scheduled, published, and archived',
  },
  {
    src: '/screenshots/template-selector.png',
    alt: 'Template Library',
    caption: '13+ proven content templates including Battle Royale, Myth Buster, Checklist, and more',
  },
  {
    src: '/screenshots/schedule-calendar.png',
    alt: 'Schedule Calendar',
    caption: 'Plan your content weeks ahead with a visual calendar across all platforms',
  },
  {
    src: '/screenshots/analytics-dashboard.png',
    alt: 'Analytics Dashboard',
    caption: 'Track impressions, engagement, click-through rates, and top-performing posts',
  },
  {
    src: '/screenshots/multi-platform.png',
    alt: 'Multi-Platform Publishing',
    caption: 'Connect LinkedIn, Facebook, Instagram, and Twitter — publish everywhere from one dashboard',
  },
  {
    src: '/screenshots/brand-voice.png',
    alt: 'Brand Voice Settings',
    caption: 'Configure your brand identity, tone, and style so AI writes content that sounds like you',
  },
] as const;

const AUTO_ADVANCE_MS = 5000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

interface ScreenshotCarouselProps {
  className?: string;
}

export function ScreenshotCarousel({ className }: ScreenshotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(goNext, AUTO_ADVANCE_MS);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, goNext]);

  const current = screenshots[currentIndex];

  return (
    <div
      className={cn('w-full', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 overflow-hidden shadow-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700/50">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white dark:bg-slate-900/60 rounded-md px-4 py-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
              app.kontentfire.com
            </div>
          </div>
        </div>

        {/* Slide area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white/80 hover:text-white transition-colors z-10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white/80 hover:text-white transition-colors z-10"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Caption and dots */}
        <div className="px-6 py-4 bg-white dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">{current.alt}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{current.caption}</p>
            </div>
            <div className="flex items-center gap-1.5">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'w-6 h-2 bg-orange-500'
                      : 'w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
