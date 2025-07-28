import React from 'react';
import Image from 'next/image';
import { buildMeta } from '@/lib/seo';
import { FaGraduationCap, FaHandshake, FaChartLine } from 'react-icons/fa';

export const metadata = buildMeta({
  title: 'Wealth Building Strategies | Sky High Investing',
  description: 'Learn how to build long-term wealth through real estate with our proven strategies, educational resources, and investment opportunities.',
  url: '/learn/wealth-building',
});

const strategies = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    text: 'We provide top-tier real estate education, empowering you with the knowledge to make informed investment decisions and accelerate your financial growth.',
  },
  {
    icon: FaHandshake,
    title: 'Opportunities',
    text: 'Gain access to exclusive, real estate-secured investment opportunities that are typically reserved for industry insiders, giving you a competitive edge.',
  },
  {
    icon: FaChartLine,
    title: 'Execution',
    text: 'Our team of experts will guide you through the execution of proven wealth-building strategies, helping you achieve your financial goals faster.',
  },
];

export default function WealthBuildingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gradient">Build Your Wealth with Real Estate</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Discover our systematic approach to building generational wealth through strategic real estate investments.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Image 
          src="/img/buy-hero.png" 
          alt="Wealth building through real estate" 
          width={1000} 
          height={500}
          className="rounded-lg shadow-lg mb-12"
        />

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Proven Approach</h2>
          <p className="max-w-3xl mx-auto text-lg">
            At Sky High Investing, we believe in a three-pronged approach to wealth creation: providing exceptional education, offering exclusive opportunities, and executing proven strategies. This powerful combination is your key to unlocking financial freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {strategies.map((item, index) => (
            <div key={index} className="glass p-8">
              <item.icon className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 