'use client';

import React from 'react';
import { Persona } from './SegmentedCTA';

interface PersonaCardProps {
  persona: Persona;
  title: string;
  description: string;
  onStartQuiz: () => void;
}

export const PersonaCard: React.FC<PersonaCardProps> = ({ persona, title, description, onStartQuiz }) => {
  return (
    <div
      className="bg-blue-100/50 dark:bg-blue-900/50 p-8 rounded-[5rem] text-center flex flex-col items-center transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:scale-105"
      data-persona={persona}
    >
      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">{title}</h3>
      <p className="mt-2 text-sm text-blue-600 dark:text-blue-300 flex-grow">{description}</p>
      <button
        onClick={onStartQuiz}
        className="mt-6 rounded-full bg-blue-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
}; 