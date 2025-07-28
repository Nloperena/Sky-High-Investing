'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

export type Persona = 'sell' | 'invest' | 'buy' | 'learn';

interface SegmentedCTAProps {
  onSelect: (persona: Persona) => void;
}

const OPTIONS: { label: string; persona: Persona }[] = [
  { label: 'Sell Fast', persona: 'sell' },
  { label: 'Invest Passively', persona: 'invest' },
  { label: 'Buy Renovated', persona: 'buy' },
  { label: 'Learn & Grow', persona: 'learn' },
];

export const SegmentedCTA = ({ onSelect }: SegmentedCTAProps) => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="mt-6 flex flex-wrap justify-center gap-4"
    >
      {OPTIONS.map(({ label, persona }) => (
        <motion.button
          key={persona}
          variants={fadeInUp}
          onClick={() => onSelect(persona)}
          className="rounded-full bg-blue-500/10 px-6 py-2 text-blue-600 font-semibold border border-blue-500/20 shadow-sm hover:translate-y-[-4px] hover:scale-[1.01] hover:bg-blue-500/20 transition"
        >
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
}; 