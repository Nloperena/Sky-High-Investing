import React from 'react';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { buildMeta } from '@/lib/seo';

export const metadata = buildMeta({
  title: 'Portfolio | Sky High Investing',
  description: 'See our transformation projects across markets.',
  url: '/portfolio',
});

const properties = [
    {
        slug: 'kissimmee-tiny-home',
        title: 'Kissimmee “Tiny” home',
        address: '841 w Birchwood cir',
        price: '$ 219,000',
        area: '1,162/ft²',
        beds: 2,
        baths: 2,
        floors: 1,
        thumbnail: '/img/portfolio/kissimmee-tiny-home.jpg',
        status: 'Sold'
    },
    {
        slug: 'lakeside-estates-waterview',
        title: 'Lakeside Estates waterview',
        address: '2325 Anhinga Dr.',
        price: '$ 269,000',
        area: '1,952/ft²',
        beds: 4,
        baths: 2,
        floors: 1,
        thumbnail: '/img/portfolio/lakeside-estates.jpg',
        status: 'Sold'
    },
    {
        slug: 'hgtv-style-renovated-kissimmee-pool-home',
        title: 'HGTV style Kissimmee Pool home',
        address: '2120 Mallard Creek',
        price: '$ 275,000',
        area: '1685/ft²',
        beds: 3,
        baths: 2,
        floors: 1,
        thumbnail: '/img/portfolio/hgtv-pool-home.jpg',
        status: 'Sold'
    },
    {
        slug: 'celebration-home-w-in-law-suite',
        title: 'Celebration Home w/ in-law suite',
        address: '201 Reserve Pl.',
        price: '$ 499,000',
        area: '3,487/ft²',
        beds: 5,
        baths: 4,
        floors: 2,
        thumbnail: '/img/portfolio/celebration-home.jpg',
        status: 'Sold'
    },
    {
        slug: 'oak-hammock-preserve-home',
        title: 'Oak Hammock Preserve home',
        address: '2323 Meadow oak',
        price: '$ 149,000',
        area: null,
        beds: null,
        baths: null,
        floors: null,
        thumbnail: '/img/portfolio/oak-hammock.jpg',
        status: 'Sold'
    },
    {
        slug: '5-acres-ready-to-build',
        title: '5.5 acres ready to build',
        address: '2321 Cheryl Ct.',
        price: '$ 299,000',
        area: null,
        beds: null,
        baths: null,
        floors: null,
        thumbnail: '/img/portfolio/5-acres.jpg',
        status: 'Sold'
    },
    {
        slug: 'wyndham-lakes-estates',
        title: 'Wyndham Lakes Estates w/Upgrades',
        address: '2601 Deansgate Ct.',
        price: '$ 259,000',
        area: '1995/ft²',
        beds: 4,
        baths: 2,
        floors: 1,
        thumbnail: '/img/portfolio/wyndham-lakes.jpg',
        status: 'Sold'
    },
    {
        slug: 'kissimmee-vacation-home',
        title: 'Kissimmee Vacation Home',
        address: '4661 Cheyenne Pt. Trail',
        price: '$ 195,000',
        area: '1778/ft²',
        beds: 4,
        baths: 2,
        floors: 1,
        thumbnail: '/img/portfolio/kissimmee-vacation.jpg',
        status: 'Sold'
    },
    {
        slug: 'grand-residence-in-kissimmee',
        title: 'Grand Residence in Kissimmee',
        address: '2621 Eagle Meadow Lane',
        price: '$ 299,000',
        area: '3,864/ft²',
        beds: 5,
        baths: 3,
        floors: 2,
        thumbnail: '/img/portfolio/grand-residence.jpg',
        status: 'Sold'
    }
];

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gradient mb-8 text-center">Our Portfolio</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((cs) => (
          <CaseStudyCard key={cs.slug} {...cs} />
        ))}
      </div>
    </section>
  );
} 