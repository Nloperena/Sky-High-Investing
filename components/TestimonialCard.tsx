'use client';

import React from 'react';
import Image from 'next/image';

export interface TestimonialCardProps {
  id: string;
  quote: string;
  name: string;
  persona: string;
  asset: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, persona, asset }) => (
  <div className="apple-card p-8 bg-white/95 backdrop-blur-sm">
    <p className="text-apple-gray-700 italic leading-relaxed">"{quote}"</p>
    <div className="mt-6 flex items-center gap-4">
      <Image src={asset} alt={name} width={48} height={48} className="h-12 w-12 rounded-full object-cover shadow-apple" />
      <div>
        <div className="font-builders font-bold text-apple-gray-900">{name}</div>
        <div className="text-sm text-apple-gray-600 font-builders">{persona}</div>
      </div>
    </div>
  </div>
); 