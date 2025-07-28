import React from 'react';
import { LeadSnapshot } from '@/lib/types';

interface Props {
  data: LeadSnapshot;
  setData: React.Dispatch<React.SetStateAction<LeadSnapshot>>;
}

const capitalBrackets = ["<10K", "10-25K", "25-50K", "50-100K", "100-250K", "250K+", "NA"] as const;
const creditRanges = ["Good", "Fair", "Unsure"] as const;
const experienceLevels = ["New", "Some", "Seasoned"] as const;

export const ResourcesStep: React.FC<Props> = ({ data, setData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-ink">Resources & Comfort</h2>
      
      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="capital" className="block text-sm font-medium text-slate-ink">Approx. Investable Capital</label>
          <p className="text-xs text-slate-ink/50">A bracket helps us tailor financing advice.</p>
          <select
            id="capital"
            value={data.capitalBracket || ''}
            onChange={(e) => setData({ ...data, capitalBracket: e.target.value as typeof capitalBrackets[number] })}
            className="mt-1 block w-full px-4 py-2 bg-white/50 border border-white/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
          >
            <option value="" disabled>Select a bracket</option>
            {capitalBrackets.map(bracket => <option key={bracket} value={bracket}>{bracket === 'NA' ? 'Prefer Not to Say' : bracket}</option>)}
          </select>
        </div>

        <div>
            <label className="block text-sm font-medium text-slate-ink">Credit Range</label>
            <div className="mt-2 flex gap-4">
                {creditRanges.map(range => (
                    <button key={range} onClick={() => setData({ ...data, creditRange: range })}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${data.creditRange === range ? 'bg-high-altitude-blue text-white' : 'bg-white/50'}`}>
                        {range}
                    </button>
                ))}
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-slate-ink">Experience Level</label>
            <div className="mt-2 flex gap-4">
                {experienceLevels.map(level => (
                    <button key={level} onClick={() => setData({ ...data, experience: level })}
                        className={`px-4 py-2 rounded-lg text-sm transition-colors ${data.experience === level ? 'bg-high-altitude-blue text-white' : 'bg-white/50'}`}>
                        {level === 'New' ? 'New (0 properties)' : level === 'Some' ? 'Some (1-3)' : 'Seasoned (4+)'}
                    </button>
                ))}
            </div>
        </div>

        <div>
            <label htmlFor="risk" className="block text-sm font-medium text-slate-ink">Risk Comfort</label>
            <p className="text-xs text-slate-ink/50">How much wiggle room feels okay?</p>
            <input 
                type="range" 
                id="risk" 
                min="1" max="5" 
                value={data.riskComfort || 3}
                onChange={(e) => setData({ ...data, riskComfort: parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 })}
                className="w-full mt-2"
            />
            <div className="flex justify-between text-xs text-slate-ink/70">
                <span>Cautious</span>
                <span>Balanced</span>
                <span>Bold</span>
            </div>
        </div>

      </div>
    </div>
  );
}; 