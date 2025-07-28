import React from 'react';
import { buildMeta } from '@/lib/seo';
import { ArticleCard } from '@/components/ArticleCard'; 
import { FaBook, FaBullseye, FaShieldAlt } from 'react-icons/fa';

export const metadata = buildMeta({
  title: 'Learn With Sky High Investing',
  description: 'Explore our educational resources on real estate investing, including short sales, wealth building, and homeowner tips.',
  url: '/learn',
});

const resources = [
  {
    title: 'Homeowner Resources',
    description: 'Find valuable information to help you navigate the complexities of homeownership, from maintenance to financial planning.',
    href: '/learn/homeowner-resources',
    icon: 'FaBook',
  },
  {
    title: 'Short Sales',
    description: 'Understand the short sale process and how it can be a viable alternative to foreclosure, protecting your financial future.',
    href: '/learn/short-sales',
    icon: 'FaShieldAlt',
  },
  {
    title: 'Wealth Building',
    description: 'Learn proven strategies for building long-term wealth through real estate, including passive income and investment opportunities.',
    href: '/learn/wealth-building',
    icon: 'FaBullseye',
  },
];

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient">
          Expand Your Real Estate Knowledge
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Whether you're a new homeowner or a seasoned investor, our resources are designed to help you succeed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ArticleCard
            key={resource.href}
            slug={resource.href}
            title={resource.title}
            excerpt={resource.description}
            icon={resource.icon}
          />
        ))}
      </div>
    </div>
  );
} 