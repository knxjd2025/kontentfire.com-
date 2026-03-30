'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
    </div>
  );
}

function Placeholder({ alt }: { alt: string }) {
  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-orange-600/20 flex flex-col items-center justify-center gap-4">
      <div className="p-4 rounded-full bg-orange-500/10 border border-orange-500/20">
        <Flame className="h-10 w-10 text-orange-500" />
      </div>
      <p className="text-sm text-slate-400 font-medium">{alt || 'Screenshot coming soon'}</p>
    </div>
  );
}

export function AppScreenshot({
  src,
  alt,
  caption,
  className,
  priority = false,
}: AppScreenshotProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const openModal = useCallback(() => {
    if (!hasError) {
      setIsModalOpen(true);
    }
  }, [hasError]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <div className={cn('group', className)}>
        {/* Browser frame */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="rounded-xl overflow-hidden border border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/5 transition-shadow duration-300 bg-slate-900 cursor-pointer"
          onClick={openModal}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-800 border-b border-slate-700/50">
            <BrowserDots />
            <div className="flex-1 flex justify-center">
              <div className="bg-slate-900/60 rounded-md px-4 py-1 text-xs text-slate-400 font-mono max-w-xs truncate">
                app.kontentfire.com
              </div>
            </div>
            {!hasError && (
              <Maximize2 className="h-3.5 w-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>

          {/* Screenshot content */}
          {hasError ? (
            <Placeholder alt={alt} />
          ) : (
            <div className="relative w-full aspect-video">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                priority={priority}
                onError={() => setHasError(true)}
              />
            </div>
          )}
        </motion.div>

        {/* Caption */}
        {caption && (
          <p className="mt-3 text-sm text-slate-400 text-center">{caption}</p>
        )}
      </div>

      {/* Full-screen modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-6xl w-full rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal browser chrome */}
              <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-800 border-b border-slate-700/50">
                <BrowserDots />
                <div className="flex-1 flex justify-center">
                  <div className="bg-slate-900/60 rounded-md px-4 py-1 text-xs text-slate-400 font-mono">
                    app.kontentfire.com
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-md hover:bg-slate-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-slate-400" />
                </button>
              </div>

              {/* Modal image */}
              <div className="relative w-full aspect-video">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain bg-slate-950"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Modal caption */}
              {caption && (
                <div className="px-4 py-3 bg-slate-800 border-t border-slate-700/50">
                  <p className="text-sm text-slate-300 text-center">{caption}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
