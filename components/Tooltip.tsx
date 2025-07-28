'use client';
import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      {open && (
        <span className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white">
          {content}
        </span>
      )}
    </span>
  );
}; 