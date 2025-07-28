'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AboutStep } from './wizard/AboutStep';
import { GoalStep } from './wizard/GoalStep';
import { ResourcesStep } from './wizard/ResourcesStep';
import { FocusStep } from './wizard/FocusStep';
import { SummaryStep } from './wizard/SummaryStep';
import { LeadSnapshot } from "@/lib/types";

const steps = ["about", "goal", "resources", "focus", "summary", "success"] as const;
type Step = typeof steps[number];

const SuccessStep = ({ data }: { data: LeadSnapshot }) => (
    <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-ink">You're Set, {data.name}.</h2>
        <p className="mt-2 text-slate-ink/80">Here’s a simple starting lane.</p>
        <div className="mt-6 space-y-3 text-left bg-white/50 p-4 rounded-lg">
            <h3 className="font-semibold text-slate-ink">Your Starter Plan</h3>
            <p className="text-sm text-slate-ink">1. Clarify Budget: Confirm purchase range based on your capital bracket.</p>
            <p className="text-sm text-slate-ink">2. Local Screen: Pull 3 comps in your target market.</p>
            <p className="text-sm text-slate-ink">3. Action Call: Schedule 15-min intro to map financing path.</p>
        </div>
    </div>
);


export function ContactWizard({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState<Step>("about");
  const [data, setData] = useState<Partial<LeadSnapshot>>({ markets: [] });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const next = () => {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  };
  const back = () => {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  };

  const closeAndReset = () => {
    onClose();
    setTimeout(() => {
      setStep("about");
      setData({ markets: [] });
    }, 300);
  };

  const handleSubmit = () => {
      const score = 0; // Simplified scoring
      const finalData: LeadSnapshot = {
        ...data,
        score,
        createdAt: new Date().toISOString(),
      } as LeadSnapshot;
      console.log('Final Lead Data:', finalData);
      setStep('success');
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={closeAndReset}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl"
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.26, ease: [0.34,1.56,0.42,1] } }}
            exit={{ opacity: 0, y: 15, scale: 0.95, transition: { duration: 0.18 } }}
          >
            {/* Close */}
            <button
              onClick={closeAndReset}
              aria-label="Close contact form"
              className="absolute top-2 right-2 h-10 w-10 rounded-xl bg-white/30 hover:bg-white/50 flex items-center justify-center transition"
            >
              <span className="text-slate-700 text-xl leading-none">×</span>
            </button>

            {/* Progress */}
            {step !== 'success' && (
                <div className="h-1 bg-white/30">
                <motion.div
                    className="h-full bg-gradient-to-r from-cyan-300 to-blue-600"
                    style={{ width: `${(steps.indexOf(step) / (steps.length - 2)) * 100}%` }}
                    layout
                    transition={{ duration: 0.2 }}
                />
                </div>
            )}

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.22 } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
                  className="space-y-5"
                >
                  {step === "about" && <AboutStep data={data as LeadSnapshot} setData={setData} />}
                  {step === "goal" && <GoalStep data={data as LeadSnapshot} setData={setData} />}
                  {step === "resources" && <ResourcesStep data={data as LeadSnapshot} setData={setData} />}
                  {step === "focus" && <FocusStep data={data as LeadSnapshot} setData={setData} />}
                  {step === "summary" && <SummaryStep data={data as LeadSnapshot} setStep={setStep} setData={setData} />}
                  {step === "success" && <SuccessStep data={data as LeadSnapshot} />}
                </motion.div>
              </AnimatePresence>

              {/* Nav Buttons */}
              {step !== 'success' && (
                <div className="mt-6 flex items-center justify-between">
                    {step !== "about" ? (
                    <button
                        onClick={back}
                        className="text-sm font-medium text-slate-600 hover:text-slate-800"
                    >
                        Back
                    </button>
                    ) : <span />}
                    
                    {step !== "summary" ? (
                    <button
                        onClick={next}
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:-translate-y-0.5 transition"
                    >
                        Next
                    </button>
                    ) : (
                    <button
                        onClick={handleSubmit}
                        className="rounded-lg bg-growth-green px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:-translate-y-0.5 transition"
                    >
                        Get My Starter Plan
                    </button>
                    )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 