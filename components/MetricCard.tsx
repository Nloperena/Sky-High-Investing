'use client';

import React, { FC } from 'react';

export interface MetricCardProps {
  label: string;
  value: string | number;
  tooltip?: string;
  footnote?: string;
}

export const MetricCard: FC<MetricCardProps> = ({ label, value, tooltip, footnote }) => (
  <div className="bg-blue-100/50 dark:bg-blue-900/50 p-6 rounded-[5rem] text-center transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:scale-105">
    <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-300">{value}</div>
    <div className="mt-2 text-sm font-medium text-blue-800 dark:text-blue-200">{label}</div>
    {footnote && <small className="mt-1 text-xs opacity-70">{footnote}</small>}
    {tooltip && (
      <span role="tooltip" className="sr-only">
        {tooltip}
      </span>
    )}
  </div>
); 