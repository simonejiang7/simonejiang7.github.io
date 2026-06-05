'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export interface TimelineEntry {
  period: string;
  content: string;
}

interface TimelineSectionProps {
  entries: TimelineEntry[];
  title?: string;
}

export default function TimelineSection({ entries, title = 'Timeline' }: TimelineSectionProps) {
  if (!entries || entries.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">{title}</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5.5rem] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />

        <div className="space-y-6">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex gap-4 items-start"
            >
              {/* Period label */}
              <span className="w-20 flex-shrink-0 text-xs font-medium text-neutral-500 dark:text-neutral-500 text-right pt-1 leading-tight">
                {entry.period}
              </span>

              {/* Dot */}
              <div className="flex-shrink-0 w-3 h-3 rounded-full bg-accent mt-1 ring-2 ring-background relative z-10" />

              {/* Content */}
              <div className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p>{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-accent">{children}</strong>,
                  }}
                >
                  {entry.content}
                </ReactMarkdown>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
