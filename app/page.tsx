'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerChildren } from '@/lib/animations';
import Link from 'next/link';
import { FaArrowRight, FaHome, FaPiggyBank, FaBook, FaKey } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';

const valuePillars = [
  {
    title: 'See Clearly',
    description: 'Simple breakdowns without the fluff.',
  },
  {
    title: 'Grow Steadily',
    description: 'Proven principles for patient progress.',
  },
  {
    title: 'Stay Supported',
    description: 'Guidance when you actually need it.',
  },
];

const userPaths: { title: string; description: string; href: string; icon: IconType }[] = [
  {
    title: 'Sell a Property',
    description: 'Get a fair, fast offer without the hassle of repairs or showings.',
    href: '/solutions',
    icon: FaKey,
  },
  {
    title: 'Invest with Us',
    description: 'Grow your wealth through vetted, real-estate-backed opportunities.',
    href: '/solutions',
    icon: FaPiggyBank,
  },
  {
    title: 'Buy a Home',
    description: 'Find a beautifully renovated, move-in-ready home for your family.',
    href: '/solutions',
    icon: FaHome,
  },
  {
    title: 'Learn the Ropes',
    description: 'Explore our guides on real estate, from basics to advanced strategies.',
    href: '/learn',
    icon: FaBook,
  },
];

const clientTestimonials = [
    {
        id: 'ivan-w',
        persona: 'First Time Home Buyer',
        quote: "My experience with Carlos and his team was amazing! I was a first time home buyer and he made the whole process as simple and painless as possible. I couldn't ask for a better experience or a better first home!",
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
        id: 'than-paul',
        persona: "Stars from A&E's \"Flip This House\"",
        quote: "Carlos A. Chica & Sky High Investing are committed to providing real estate solutions and improving the community. If you are looking to sell, buy, renovate, or solve any real estate problem look no further.",
        name: 'Than Merrill & Paul Esajian',
        asset: '/img/avatars/than.jpg',
        rating: 5
    }
];

const featuredProperties = [
    {
        slug: 'kissimmee-tiny-home',
        title: 'Kissimmee "Tiny" home',
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
];

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero */}
      <section className="relative flex min-h-[80dvh] flex-col items-start justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="https://videos.ctfassets.net/3oo3h6xy6p0k/2lT5pRSCjJoAULMT2fHyGh/708a940071fcd4a9d6c3c813835daa45/Untitled.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-apple-gray-900 via-apple-gray-900/80 to-apple-gray-900/40 z-10"></div>
        <div className="relative z-20 px-4 apple-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="text-left max-w-4xl"
          >
            <h1 className="text-gradient font-builders font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Buy,<br />
              Build,<br />
              Sell Home<br />
              <span className="text-apple-gray-100">In Florida and New York.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-balance text-apple-gray-100 text-left text-xl md:text-2xl font-builders"
          >
            Professional architecture, engineering and advice is only one click away
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.4 }}
            className="apple-button mt-8 text-lg px-8 py-4"
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="apple-section">
        <div className="apple-container">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {valuePillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="apple-card p-8 text-center"
              >
                <h3 className="text-xl font-builders font-bold text-apple-gray-900">{pillar.title}</h3>
                <p className="mt-3 text-apple-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Find Your Path Section */}
      <section className="apple-section bg-apple-gray-50">
        <div className="apple-container text-center">
          <h2 className="text-gradient font-builders font-bold">Find Your Path</h2>
          <p className="mt-4 max-w-2xl mx-auto text-apple-gray-600">
            Whether you're starting out or scaling up, we have a clear path for you.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {userPaths.map((path) => (
              <Link href={path.href} key={path.title}>
                <div className="apple-card p-8 hover:shadow-apple-lg transition-all duration-300 h-full flex flex-col group">
                  <path.icon className="text-4xl text-apple-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-xl font-builders font-bold text-apple-gray-900">{path.title}</h3>
                  <p className="mt-3 text-apple-gray-600 flex-grow">{path.description}</p>
                  <div className="mt-4 text-apple-blue-600 font-builders font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-200">
                    Learn More <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="apple-section bg-apple-gray-900">
        <div className="apple-container text-center">
          <h2 className="text-gradient font-builders font-bold">Hear From Our Clients</h2>
          <p className="mt-4 max-w-2xl mx-auto text-apple-gray-300">
            We've helped hundreds of people achieve their real estate goals.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="apple-section bg-apple-gray-50">
        <div className="apple-container text-center">
          <h2 className="text-gradient font-builders font-bold">Featured Properties</h2>
          <p className="mt-4 max-w-2xl mx-auto text-apple-gray-600">
            Take a look at some of our recent transformations.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <CaseStudyCard key={property.slug} {...property} />
            ))}
          </div>
          <div className="mt-12">
            <Link href="/portfolio" className="apple-button">
                View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="apple-section">
        <div className="apple-container max-w-2xl text-center">
          <h2 className="text-gradient font-builders font-bold">Stay Ahead of the Curve</h2>
          <p className="mt-4 text-apple-gray-600">
            Subscribe to our newsletter for market insights, new listings, and exclusive tips.
          </p>
          <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="apple-input flex-grow"
              required 
            />
            <button 
              type="submit"
              className="apple-button w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 