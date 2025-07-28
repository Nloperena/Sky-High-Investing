'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, alt }) => {
  const [pos, setPos] = useState(50);
  return (
    <div
      className="relative h-64 w-full cursor-col-resize overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos(((e.clientX - rect.left) / rect.width) * 100);
      }}
    >
      <Image src={after} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <Image src={before} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}; 