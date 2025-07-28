import React from 'react';
import Image from 'next/image';
import { buildMeta } from '@/lib/seo';
import { TestimonialCard } from '@/components/TestimonialCard';

export const metadata = buildMeta({
  title: 'Reviews | Sky High Investing',
  description: 'Hear from our satisfied clients and partners.',
  url: '/reviews',
});

const clientTestimonials = [
    {
        id: 'ivan-w',
        persona: 'First Time Home Buyer',
        quote: "My experience with Carlos and his team was amazing! I was a first time home buyer and he made the whole process as simple and painless as possible. I couldn’t ask for a better experience or a better first home!",
        name: 'Ivan W.',
        asset: '/img/avatars/ivan.jpg',
        rating: 5
    },
    {
        id: 'luis-leona-s',
        persona: 'Home Buyer',
        quote: "Thank you very much! We are overwhelmed with excitement and can hardly wait to see it in person, the pictures are stunning! Thanks for the well wishes and working with us on the deal!",
        name: 'Luis and Leona S.',
        asset: '/img/avatars/luis.jpg',
        rating: 5
    },
    {
        id: 'zaicha-m',
        persona: 'Client',
        quote: "Awesome!!! Thank you soo much for your help… Now please sell my moms restaurant so she can come and live with me…",
        name: 'Zaicha M.',
        asset: '/img/avatars/zaicha.jpg',
        rating: 5
    },
    {
        id: 'mary-c',
        persona: 'Client',
        quote: "Carlos working with your company was a great pleasure. You exceeded our expectations. I will be sure to forward your company’s name to anybody I feel could benefit from your expertise.",
        name: 'Mary C.',
        asset: '/img/avatars/mary.jpg',
        rating: 5
    }
];

const proTestimonials = [
    {
        id: 'than-paul',
        persona: 'Stars from A&E’s ”Flip This House”',
        quote: "Carlos A. Chica & Sky High Investing are committed to providing real estate solutions and improving the community. If you are looking to sell, buy, renovate, or solve any real estate problem look no further.",
        name: 'Than Merrill & Paul Esajian',
        asset: '/img/avatars/than.jpg',
        rating: 5
    },
    {
        id: 'jackie-guelde',
        persona: 'Broker',
        quote: "I have had 100% closing on all the deals I have given him and the sellers are very happy with his performance. I would recommend him and his company to anyone considering doing a short sale.",
        name: 'Jackie Guelde',
        asset: '/img/avatars/jackie.jpg',
        rating: 5
    }
];

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient">What Our Clients Are Saying</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {clientTestimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>

      <div className="text-center my-16">
        <h2 className="text-3xl font-bold text-gradient">What the Pros Are Saying</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {proTestimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
    </div>
  );
} 