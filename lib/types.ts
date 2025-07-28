export type LeadSnapshot = {
  name: string;
  email: string;
  phone?: string;
  contactMethod: "Email" | "Call" | "SMS";
  goal: "First Rental" | "Add Another" | "Passive Income" | "Prepare to Retire" | "Flip & Resell";
  targetMonthlyCashFlow?: number;
  timeline: "0-3" | "3-6" | "6-12" | "Exploring";
  capitalBracket: "<10K" | "10-25K" | "25-50K" | "50-100K" | "100-250K" | "250K+" | "NA";
  creditRange: "Good" | "Fair" | "Unsure";
  experience: "New" | "Some" | "Seasoned";
  riskComfort: 1 | 2 | 3 | 4 | 5;
  propertyType: "Single-Family" | "Small Multi" | "Short-Term" | "Mixed";
  markets: string[]; // chips
  obstacle: string;
  consent: boolean;
  score: number;
  createdAt: string;
}; 