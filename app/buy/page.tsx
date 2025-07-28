'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ContactWizard } from '@/components/ContactWizard';

const benefits = [
    "Get you pre-qualified quickly, and at no cost to you!",
    "Help “Credit Challenged” buyers get qualified for a home.",
    "Our network of mortgage brokers, real estate agents, attorneys and other real estate professionals will be your resources as well!",
    "You get a clear-cut, honest transaction with a reputable company you can trust.",
    "We will work hard to make your home buying experience smooth and successful!",
];

export default function BuyPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gradient text-center mb-12">We Can Help You Buy a Home!</h1>

      <div className="grid md:grid-cols-12 gap-8 mb-16 items-center">
        <div className="md:col-span-4">
          <Image src="/img/buy-hero.png" alt="Happy family in front of a new home" width={300} height={278} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:col-span-8 space-y-4">
          <p>
            Now is one of the best times in history to buy a home. With low interest rates and home values still recovering, the American dream is more possible than ever. You may find the process of purchasing a new home to be overwhelming. It is a milestone in your life and therefore deserves adequate preparation.
          </p>
          <p>
            We want to arm you with the knowledge to make the best decisions. Being well informed is the key to a smooth and successful home purchase. This will give you peace of mind and save you valuable time & money. A brief phone conversation with us can be life-changing.
          </p>
        </div>
      </div>

      <div className="mb-16 glass p-8">
        <h3 className="text-2xl font-semibold mb-4">How we can help you BUY A HOME:</h3>
        <ul className="list-disc list-inside space-y-2">
          {benefits.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="text-center mb-16">
        <p className="max-w-3xl mx-auto">
          Take a look at <strong>Our Available Properties</strong>. Due to overwhelming demand, our properties move very fast, so if you don’t see what you’re looking for, contact us TODAY or fill out our Home Ownership Application below.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center mb-8">Home Ownership Application</h2>
        <button 
          onClick={() => setIsWizardOpen(true)}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Start Your Application
        </button>
      </div>

      <ContactWizard open={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
    </div>
  );
} 