import React from 'react';
import Image from 'next/image';
import { buildMeta } from '@/lib/seo';

export const metadata = buildMeta({
  title: 'About | Sky High Investing',
  description: 'Founded in 2007 to serve communities through real estate.',
  url: '/about',
});

const coreValues = [
  "Passion", "Innovation", "Accountability", "Service", "Personal Growth & Balance",
  "Inspire", "Curiosity", "Intrapreneurship", "Team Power", "Focused Determination",
  "The Journey is success", "Faith", "Abundance; Build wealth", "Environmental stewardship",
  "Tolerance of temporary defeat", "Embrace uncertainty"
];

const specialties = [
    "Investing & Wealth building strategies", "Probate & Inherited properties",
    "Foreclosure Avoidance", "Debt Removal or Renegotiation", "Bank Owned Property & REO",
    "Selling Your Property Without Realtor Commissions", "Solving Title Issues",
    "Relocation Assistance", "Vacant Properties & Houses in Major Disrepair",
    "Environmental or Structural Problems", "Bankruptcy", "Over-leveraged Properties",
    "Clearing up Judgments or Outside Liens"
];


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gradient text-center mb-12">About Us</h1>

      <div className="grid md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-8 space-y-4">
          <h2 className="text-3xl font-semibold">Discover the Sky High difference</h2>
          <p>
            At Sky High Investing you will discover a thoughtful approach to serving our community through real estate. We are focused on real estate investing, redevelopment, &amp; education. In addition, our team is constantly training and masterminding with industry leaders and top experts nationwide so we can provide our clients with the most effective solutions and exceptional experiences. We believe that our profit levels will be determined by the amount of problems we solve for others.
          </p>
          <p>
            Sky High Investing, Inc. was founded in 2007 with the vision of making it simpler to invest, buy and sell real estate. We are passionate about serving our community and helping those in real estate distress. We have created win-win solutions for hundreds of homeowners, sellers, buyers, investors, brokers, attorneys, &amp; title companies. Our successful business model has attracted millions of dollars in private capital to fund our projects. We also love transforming houses into dream homes and providing quality homes to more families.
          </p>
        </div>
        <div className="md:col-span-4">
          <Image src="/img/about-us.jpg" alt="Modern building" width={300} height={198} className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="mb-16 glass p-8">
        <h3 className="text-2xl font-semibold mb-4">Real Estate Specialties:</h3>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          {specialties.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          Solving real estate problems &amp; inspiring greatness. Acquiring &amp; rebuilding homes with high quality and integrity to improve communities. Providing education and solutions that enrich quality of life. Sharing proven investing, peak performance, &amp; wealth building strategies that empower more people to achieve lifestyle freedom.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="glass p-8">
            <h3 className="text-2xl font-semibold mb-4">Company Culture</h3>
            <p className="mb-4">
                Our company has been built by our deep passion &amp; continual team development. Our team is comprised of entrepreneurial-minded professionals that are committed to giving back and making a positive impact. They are passionate about improving themselves, the company, community, and the lives of others.
            </p>
            <p>
                We embrace new challenges and believe there is always more to learn and grow. Leading by example we aim to inspire others to become everything they are meant to be. This begins at the top with our founders. Their passion, vision, work ethic, and incessant desire to improve themselves and the business inspire our entire team.
            </p>
        </div>
        <div className="glass p-8">
            <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
              {coreValues.map(value => <li key={value}>{value}</li>)}
            </ul>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our C.E.O.</h2>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Image src="/img/ceo.png" alt="Carlos A. Chica, C.E.O." width={240} height={300} className="rounded-lg shadow-lg mx-auto" />
          </div>
          <div className="md:col-span-8 space-y-4">
            <p>
              Carlos A. Chica is a successful real estate investor and entrepreneur. His mentors and business partners include Than Merrill &amp; Paul Esajian, stars of A&amp;E’s tv show “Flip this House”. They are the founders of FortuneBuilders, ranked #1 in Education by Inc. 500. Carlos has been able to continue developing professionally &amp; personally by masterminding with the most successful investors in the nation.
            </p>
            <p>
              In 2005, Carlos moved to Central Florida from New York City with his wife to provide a better life for their 2-year-old daughter. The purchase of his first home sparked an interest in real estate investing and the following year he purchased two investment properties. He became self-employed at the young age of 23.
            </p>
            <p>
              Currently, his company invests throughout Florida and his hometown of New York City.<br />
              Favorite quote: “It’s kind of fun to do the impossible.” – Walt Disney
            </p>
          </div>
        </div>
      </div>

    </div>
  );
} 