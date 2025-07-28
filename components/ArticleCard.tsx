'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { FaBook, FaBullseye, FaShieldAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

const iconMap: { [key: string]: IconType } = {
  FaBook,
  FaBullseye,
  FaShieldAlt,
};

export interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ slug, title, excerpt, icon }) => {
  const Icon = iconMap[icon];

  return (
    <motion.div variants={fadeInUp} className="glass p-6 flex flex-col text-center">
      {Icon && <Icon className="text-4xl text-blue-500 mx-auto mb-4" />}
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-75 flex-grow">{excerpt}</p>
      <Link href={slug} className="mt-4 inline-block text-brand-accent underline">
        Read more
      </Link>
    </motion.div>
  );
}; 