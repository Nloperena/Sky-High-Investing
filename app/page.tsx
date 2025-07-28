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
        id: 'than-paul',
        persona: 'Stars from A&E’s ”Flip This House”',
        quote: "Carlos A. Chica & Sky High Investing are committed to providing real estate solutions and improving the community. If you are looking to sell, buy, renovate, or solve any real estate problem look no further.",
        name: 'Than Merrill & Paul Esajian',
        asset: '/img/avatars/than.jpg',
        rating: 5
    }
];

const featuredProperties = [
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
];


export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero */}
      <section className="relative flex min-h-[80dvh] flex-col items-center justify-center text-center overflow-hidden">
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
        <div className="absolute inset-0 bg-midnight-sky opacity-70 z-10"></div>
        <div className="relative z-20 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="text-4xl font-bold md:text-6xl text-cloud-white"
          >
            Transparent tools and guidance for long-term property growth.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-balance text-cloud-white/80"
          >
            No hype. Just a clear path from your first question to your first closing.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.4 }}
            className="mt-8 bg-high-altitude-blue text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-sky-400 transition-all duration-300 hover:scale-105"
          >
            Plan My First Step
          </motion.button>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="mx-auto max-w-6xl px-4">
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
              className="glass p-8 text-center"
            >
              <h3 className="text-xl font-bold text-slate-ink">{pillar.title}</h3>
              <p className="mt-2 text-slate-ink/80">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Find Your Path Section */}
      <section className="bg-cloud-white py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-midnight-sky">Find Your Path</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-ink/80">
            Whether you're starting out or scaling up, we have a clear path for you.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {userPaths.map((path) => (
              <Link href={path.href} key={path.title}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <path.icon className="text-4xl text-high-altitude-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-ink">{path.title}</h3>
                  <p className="mt-2 text-slate-ink/80 flex-grow">{path.description}</p>
                  <div className="mt-4 text-high-altitude-blue font-semibold flex items-center justify-center gap-2">
                    Learn More <FaArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-cloud-white">Hear From Our Clients</h2>
          <p className="mt-4 max-w-2xl mx-auto text-cloud-white/80">
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
      <section className="bg-cloud-white py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-midnight-sky">Featured Properties</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-ink/80">
            Take a look at some of our recent transformations.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <CaseStudyCard key={property.slug} {...property} />
            ))}
          </div>
          <div className="mt-12">
            <Link href="/portfolio" className="bg-high-altitude-blue text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-sky-400 transition-all duration-300 hover:scale-105">
                View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold text-cloud-white">Stay Ahead of the Curve</h2>
          <p className="mt-4 text-cloud-white/80">
            Subscribe to our newsletter for market insights, new listings, and exclusive tips.
          </p>
          <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:flex-grow px-4 py-3 rounded-full border border-horizon-mist bg-midnight-sky text-cloud-white placeholder-cloud-white/50 focus:outline-none focus:ring-2 focus:ring-high-altitude-blue"
              required 
            />
            <button 
              type="submit"
              className="w-full sm:w-auto bg-high-altitude-blue text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-sky-400 transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 