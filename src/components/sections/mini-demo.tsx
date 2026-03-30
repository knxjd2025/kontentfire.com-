'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, RotateCcw, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { demoTemplates, getRandomDemoContent } from '@/data/demo-content';

const platformIcons = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

export function MiniDemo() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof getRandomDemoContent> | null>(null);

  const handleGenerate = (templateId: string) => {
    setSelectedTemplate(templateId);
    setIsGenerating(true);
    setResult(null);

    setTimeout(() => {
      const content = getRandomDemoContent(templateId);
      setResult(content);
      setIsGenerating(false);
    }, 1800);
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setResult(null);
    setIsGenerating(false);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Try It Now</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            See AI Content Generation <span className="fire-text">in Action</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Pick a template and watch AI create social media content instantly. No account needed.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!result && !isGenerating ? (
              <motion.div
                key="templates"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-8"
              >
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Choose a content template:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {demoTemplates.slice(0, 8).map((template) => (
                    <button
                      key={template.id}
                      onClick={() => handleGenerate(template.id)}
                      className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all text-center"
                    >
                      <span className="text-2xl">{template.icon}</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-600">{template.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : isGenerating ? (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 text-center"
              >
                <div className="inline-flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="h-6 w-6 text-orange-500" />
                  </motion.div>
                  <span className="text-lg font-medium text-slate-700 dark:text-slate-300">AI is generating your content...</span>
                </div>
                <div className="mt-4 flex justify-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-orange-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const Icon = platformIcons[result.platform as keyof typeof platformIcons];
                      return Icon ? <Icon className="h-5 w-5 text-slate-500" /> : null;
                    })()}
                    <span className="text-sm font-medium text-slate-500 capitalize">{result.platform} Post</span>
                  </div>
                  <button onClick={handleReset} className="text-sm text-slate-500 hover:text-orange-500 flex items-center gap-1">
                    <RotateCcw className="h-3.5 w-3.5" /> Try another
                  </button>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{result.generatedTitle}</h3>
                <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line mb-4 text-sm leading-relaxed">{result.generatedContent}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {result.hashtags.map((tag, i) => (
                    <span key={i} className="text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{result.scheduleSuggestion}</span>
                  <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{result.engagementTip}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="https://app.kontentfire.com/login" className="flex-1">
                    <Button className="w-full">
                      Create Unlimited Content <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/free-trial" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Full Interactive Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
