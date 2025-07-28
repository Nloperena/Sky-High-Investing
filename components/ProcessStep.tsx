'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ index, title, description }) => (
  <motion.li variants={fadeInUp} className="flex flex-col items-center text-center min-w-[120px]">
    <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/20 text-sm font-medium">
      {index}
    </span>
    <h4 className="font-semibold text-sm">{title}</h4>
    {description && <p className="mt-1 text-xs opacity-70">{description}</p>}
  </motion.li>
); 