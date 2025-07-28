'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ContactWizard } from '@/components/ContactWizard';

// Buy page with syntax fix for Credit Challenged quotes - force new deployment
const benefits = [
    "Get you pre-qualified quickly, and at no cost to you!",
    "Help \"Credit Challenged\" buyers get qualified for a home.",
    "Our network of mortgage brokers, real estate agents, attorneys and other real estate professionals will be your resources as well!",
    "You get a clear-cut, honest transaction with a reputable company you can trust.",
    "We will work hard to make your home buying experience smooth and successful!",
];

export default function BuyPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div className="apple-container py-16">
      <div className="text-center mb-16">
        <h1 className="text-gradient font-builders font-bold mb-6">We Can Help You Buy a Home!</h1>
        <p className="text-apple-gray-600 max-w-3xl mx-auto">
          Now is one of the best times in history to buy a home. With low interest rates and home values still recovering, the American dream is more possible than ever.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-12 mb-16 items-center">
        <div className="md:col-span-4">
          <div className="apple-card p-6">
            <Image src="/img/buy-hero.png" alt="Happy family in front of a new home" width={300} height={278} className="rounded-xl shadow-apple" />
          </div>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-apple-gray-700 leading-relaxed">
            You may find the process of purchasing a new home to be overwhelming. It is a milestone in your life and therefore deserves adequate preparation.
          </p>
          <p className="text-apple-gray-700 leading-relaxed">
            We want to arm you with the knowledge to make the best decisions. Being well informed is the key to a smooth and successful home purchase. This will give you peace of mind and save you valuable time & money. A brief phone conversation with us can be life-changing.
          </p>
        </div>
      </div>

      <div className="apple-card p-8 mb-16">
        <h3 className="text-2xl font-builders font-bold mb-6 text-apple-gray-900">How we can help you BUY A HOME:</h3>
        <ul className="space-y-4">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-apple-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-apple-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mb-16">
        <p className="max-w-3xl mx-auto text-apple-gray-600">
          Take a look at <strong className="text-apple-gray-900">Our Available Properties</strong>. Due to overwhelming demand, our properties move very fast, so if you don't see what you're looking for, contact us TODAY or fill out our Home Ownership Application below.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-builders font-bold mb-8 text-apple-gray-900">Home Ownership Application</h2>
        <button
          onClick={() => setIsWizardOpen(true)}
          className="apple-button"
        >
          Start Your Application
        </button>
      </div>

      <ContactWizard open={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
    </div>
  );
} 