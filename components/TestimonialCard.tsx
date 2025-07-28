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
  <div className="bg-cloud-white/10 p-8 rounded-lg">
    <p className="text-cloud-white/80 italic">“{quote}”</p>
    <div className="mt-6 flex items-center gap-4">
      <Image src={asset} alt={name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-cloud-white">{name}</div>
        <div className="text-sm text-cloud-white/60">{persona}</div>
      </div>
    </div>
  </div>
); 