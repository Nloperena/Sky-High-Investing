import React from 'react';
import Image from 'next/image';
import { buildMeta } from '@/lib/seo';

export const metadata = buildMeta({
  title: 'Short Sales Explained | Sky High Investing',
  description: 'Learn about the short sale process and how it can be a viable alternative to foreclosure. Our expert team can guide you through every step.',
  url: '/learn/short-sales',
});

export default function ShortSalesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient">Understanding Short Sales</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          An excellent solution for homeowners who owe more on their home than it's worth.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Image 
          src="/img/learn-hero.jpg" 
          alt="Short sales assistance" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg mb-8"
        />
        
        <div className="prose lg:prose-xl max-w-none">
          <h3>Loss Mitigation Services</h3>
          <p>
            Sky High Investing is part of a national network of loss mitigation experts. Our division is dedicated to assisting you throughout the short sale process, leveraging well-developed systems to overcome common obstacles. We ensure every option is explored to achieve the best possible outcome.
          </p>

          <h4>Short Sales Explained</h4>
          <p>
            A short sale can be an excellent solution for homeowners who need to sell and owe more on their homes than they are worth. While previously rare, banks and lenders are now more willing to accept short sales due to market changes. Recent policy shifts have improved approval times and even introduced incentives like relocation assistance.
          </p>
          <blockquote>
            A homeowner is 'short' when the amount owed on their property is higher than its current market value. A short sale occurs when a mortgage company agrees to accept less than the full loan balance at closing.
          </blockquote>

          <h4>Do You Qualify for a Short Sale?</h4>
          <ul>
            <li><strong>Financial Hardship:</strong> A situation causing difficulty in affording your mortgage.</li>
            <li><strong>Monthly Income Shortfall:</strong> Your expenses exceed your income, making it difficult to keep up with payments.</li>
            <li><strong>Insolvency:</strong> You lack significant liquid assets to pay down your mortgage.</li>
          </ul>

          <h4>Benefits for You and Your Family</h4>
          <ul>
            <li>Avoid foreclosure and its long-term impact on your credit.</li>
            <li>Gain more time to move and plan your next steps.</li>
            <li>The home is marketed and sold "AS IS," saving you from costly repairs.</li>
            <li>Our services come at no cost to you.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 