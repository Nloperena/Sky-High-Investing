import React from 'react';
import { LeadSnapshot } from '@/lib/types';

interface Props {
  data: LeadSnapshot;
  setStep: (step: "about" | "goal" | "resources" | "focus") => void;
  setData: React.Dispatch<React.SetStateAction<LeadSnapshot>>;
}

const Section: React.FC<{ title: string; onEdit: () => void; children: React.ReactNode }> = ({ title, onEdit, children }) => (
    <div className="bg-white/50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-slate-ink">{title}</h3>
            <button onClick={onEdit} className="text-sm text-high-altitude-blue">Edit</button>
        </div>
        {children}
    </div>
);

const Info: React.FC<{ label: string; value: any }> = ({ label, value }) => (
    <div className="text-sm">
        <span className="font-medium text-slate-ink/70">{label}: </span>
        <span className="text-slate-ink">{value}</span>
    </div>
);

export const SummaryStep: React.FC<Props> = ({ data, setStep, setData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-ink">Looks Good?</h2>
      
      <div className="mt-6 space-y-4">
        <Section title="About You" onEdit={() => setStep('about')}>
            <Info label="Name" value={data.name} />
            <Info label="Email" value={data.email} />
            {data.phone && <Info label="Phone" value={data.phone} />}
            <Info label="Contact Method" value={data.contactMethod} />
        </Section>
        
        <Section title="Your Goal" onEdit={() => setStep('goal')}>
            <Info label="Primary Goal" value={data.goal} />
            {data.targetMonthlyCashFlow && <Info label="Target Cash Flow" value={`$${data.targetMonthlyCashFlow}/mo`} />}
            <Info label="Timeline" value={data.timeline} />
        </Section>
        
        <Section title="Resources & Comfort" onEdit={() => setStep('resources')}>
            <Info label="Investable Capital" value={data.capitalBracket} />
            <Info label="Credit Range" value={data.creditRange} />
            <Info label="Experience" value={data.experience} />
            <Info label="Risk Comfort" value={data.riskComfort} />
        </Section>

        <Section title="Focus & Location" onEdit={() => setStep('focus')}>
            <Info label="Property Type" value={data.propertyType} />
            <Info label="Target Markets" value={data.markets.join(', ')} />
            {data.obstacle && <Info label="Biggest Obstacle" value={data.obstacle} />}
        </Section>

        <div className="mt-6 flex items-start">
            <input 
                type="checkbox" 
                id="consent" 
                checked={data.consent}
                onChange={(e) => setData({ ...data, consent: e.target.checked })}
                className="h-5 w-5 rounded text-high-altitude-blue focus:ring-high-altitude-blue"
            />
            <label htmlFor="consent" className="ml-3 text-sm text-slate-ink">
                Yes, send me simple step tips (no spam).
            </label>
        </div>
      </div>
    </div>
  );
}; 