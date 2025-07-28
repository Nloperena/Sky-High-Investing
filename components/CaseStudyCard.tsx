'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface CaseStudyCardProps {
  slug: string;
  title: string;
  thumbnail: string;
  status?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ slug, title, thumbnail, status }) => (
  <Link href={`/portfolio/${slug}`}>
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div className="relative">
        <Image src={thumbnail} alt={title} width={400} height={260} className="h-56 w-full object-cover" />
        {status && (
          <div className="absolute top-2 right-2 bg-high-altitude-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
            {status}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-semibold text-lg text-slate-ink">{title}</h3>
      </div>
    </div>
  </Link>
); 