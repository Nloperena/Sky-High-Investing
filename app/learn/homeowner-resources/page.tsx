import React from 'react';
import { buildMeta } from '@/lib/seo';
import { FaWrench, FaHome, FaCalculator } from 'react-icons/fa';

export const metadata = buildMeta({
  title: 'Homeowner Resources | Sky High Investing',
  description: 'Access a wealth of information to help you navigate the complexities of homeownership, from maintenance tips to financial planning.',
  url: '/learn/homeowner-resources',
});

const resourceSections = [
  {
    icon: FaWrench,
    title: 'Maintenance Tips',
    text: 'Learn how to maintain your property to protect its value and prevent costly repairs. (Content coming soon)',
  },
  {
    icon: FaHome,
    title: 'Home Equity',
    text: 'Discover how to leverage your home equity to achieve your financial goals. (Content coming soon)',
  },
  {
    icon: FaCalculator,
    title: 'Financial Planning',
    text: 'Get expert advice on managing your mortgage, taxes, and other financial aspects of homeownership. (Content coming soon)',
  },
];

export default function HomeownerResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient">Homeowner Resources</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Your one-stop guide to navigating the complexities of homeownership.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {resourceSections.map((item, index) => (
            <div key={index} className="glass p-8">
              <item.icon className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold">More Content Coming Soon</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            We are continuously working on expanding our library of resources. Check back soon for in-depth articles, guides, and tools to help you on your homeownership journey.
          </p>
        </div>
      </div>
    </div>
  );
} 