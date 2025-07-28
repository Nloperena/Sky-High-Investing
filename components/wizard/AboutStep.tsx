import React from 'react';
import { LeadSnapshot } from '@/lib/types';

interface Props {
  data: LeadSnapshot;
  setData: React.Dispatch<React.SetStateAction<LeadSnapshot>>;
}

export const AboutStep: React.FC<Props> = ({ data, setData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-ink">About You</h2>
      <p className="text-sm text-slate-ink/70">Just a way to reach you—no spam.</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-ink">First Name</label>
          <input
            type="text"
            id="name"
            value={data.name || ''}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="mt-1 block w-full px-4 py-2 bg-white/50 border border-white/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-ink">Email</label>
          <input
            type="email"
            id="email"
            value={data.email || ''}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="mt-1 block w-full px-4 py-2 bg-white/50 border border-white/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-ink">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            value={data.phone || ''}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className="mt-1 block w-full px-4 py-2 bg-white/50 border border-white/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-ink">Preferred Contact Method</label>
          <div className="mt-2 flex gap-4">
            {(['Email', 'Call', 'SMS'] as const).map((method) => (
              <button
                key={method}
                onClick={() => setData({ ...data, contactMethod: method })}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  data.contactMethod === method
                    ? 'bg-high-altitude-blue text-white shadow-md'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 