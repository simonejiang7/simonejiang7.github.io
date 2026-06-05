'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
  title?: string;
}

export default function SkillsSection({ categories, title = 'Skills' }: SkillsSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!categories || categories.length === 0) return null;

  const active = categories[activeTab];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-neutral-200 dark:border-neutral-800 mb-4">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-150 border-b-2 -mb-px ${
              i === activeTab
                ? 'border-accent text-accent'
                : 'border-transparent text-neutral-500 hover:text-primary'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {active.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </motion.section>
  );
}
