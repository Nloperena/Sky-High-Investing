import React from 'react';
import { LeadSnapshot } from '@/lib/types';

interface Props {
  data: LeadSnapshot;
  setData: React.Dispatch<React.SetStateAction<LeadSnapshot>>;
}

const goals = ["First Rental", "Add Another", "Passive Income", "Prepare to Retire", "Flip & Resell"] as const;
const timelines = ["0-3", "3-6", "6-12", "Exploring"] as const;

export const GoalStep: React.FC<Props> = ({ data, setData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-ink">Your Goal</h2>
      <p className="text-sm text-slate-ink/70">What are you hoping this investment does?</p>

      <div className="mt-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-ink">Primary Goal</label>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {goals.map((goal) => (
              <button
                key={goal}
                onClick={() => setData({ ...data, goal })}
                className={`px-4 py-3 rounded-lg text-sm transition-colors text-left ${
                  data.goal === goal
                    ? 'bg-high-altitude-blue text-white shadow-md'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="cashflow" className="block text-sm font-medium text-slate-ink">Target Monthly Cash Flow</label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-ink/50">$</span>
            <input
              type="number"
              id="cashflow"
              value={data.targetMonthlyCashFlow || ''}
              onChange={(e) => setData({ ...data, targetMonthlyCashFlow: parseInt(e.target.value) })}
              className="pl-7 block w-full px-4 py-2 bg-white/50 border border-white/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
              placeholder="500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-ink">Desired Start Timeline</label>
           <p className="text-xs text-slate-ink/50">Rough target is fine.</p>
          <div className="mt-2 flex gap-4">
            {timelines.map((timeline) => (
              <button
                key={timeline}
                onClick={() => setData({ ...data, timeline })}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  data.timeline === timeline
                    ? 'bg-high-altitude-blue text-white shadow-md'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              >
                {timeline === 'Exploring' ? timeline : `${timeline} mo`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 