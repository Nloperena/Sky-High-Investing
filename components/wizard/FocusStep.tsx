import React, { useState } from 'react';
import { LeadSnapshot } from '@/lib/types';

interface Props {
  data: LeadSnapshot;
  setData: React.Dispatch<React.SetStateAction<LeadSnapshot>>;
}

const propertyTypes = ["Single-Family", "Small Multi", "Short-Term", "Mixed"] as const;

export const FocusStep: React.FC<Props> = ({ data, setData }) => {
  const [marketInput, setMarketInput] = useState('');

  const addMarket = () => {
    if (marketInput && !data.markets.includes(marketInput)) {
      setData({ ...data, markets: [...data.markets, marketInput] });
      setMarketInput('');
    }
  };

  const removeMarket = (marketToRemove: string) => {
    setData({ ...data, markets: data.markets.filter(m => m !== marketToRemove) });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-ink">Focus & Location</h2>
      
      <div className="mt-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-ink">Preferred Property Type</label>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {propertyTypes.map(type => (
              <button
                key={type}
                onClick={() => setData({ ...data, propertyType: type })}
                className={`px-4 py-3 rounded-lg text-sm transition-colors text-left ${
                  data.propertyType === type ? 'bg-high-altitude-blue text-white' : 'bg-white/50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="markets" className="block text-sm font-medium text-slate-ink">Target Markets (City/State)</label>
          <div className="mt-1 flex gap-2">
            <input
              type="text"
              id="markets"
              value={marketInput}
              onChange={(e) => setMarketInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addMarket()}
              className="flex-grow px-4 py-2 bg-white/50 border border-white/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
            />
            <button onClick={addMarket} className="px-4 py-2 bg-high-altitude-blue text-white rounded-lg text-sm">Add</button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.markets.map(market => (
              <div key={market} className="flex items-center gap-2 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                <span>{market}</span>
                <button onClick={() => removeMarket(market)} className="text-blue-500 hover:text-blue-700">×</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="obstacle" className="block text-sm font-medium text-slate-ink">Biggest Obstacle</label>
          <p className="text-xs text-slate-ink/50">What’s slowing you down most?</p>
          <textarea
            id="obstacle"
            rows={3}
            maxLength={120}
            value={data.obstacle || ''}
            onChange={(e) => setData({ ...data, obstacle: e.target.value })}
            className="mt-1 block w-full px-4 py-2 bg-white/50 border border-white/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
          />
        </div>

      </div>
    </div>
  );
}; 