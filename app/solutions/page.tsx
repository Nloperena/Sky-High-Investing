'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerChildren } from '@/lib/animations';
import { FaHammer, FaHome, FaHandshake, FaCheckCircle, FaUsers, FaChartLine, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import { ContactWizard } from '@/components/ContactWizard';

const buildingServices = [
  {
    icon: FaHammer,
    title: 'Custom Home Construction',
    description: 'From concept to completion, we build your dream home with premium materials and expert craftsmanship.',
    features: ['Architectural design', 'Custom floor plans', 'Premium materials', 'Timeline management']
  },
  {
    icon: FaHome,
    title: 'Property Development',
    description: 'Transform raw land into profitable real estate with our comprehensive development services.',
    features: ['Land acquisition', 'Zoning compliance', 'Infrastructure planning', 'Market analysis']
  },
  {
    icon: FaUsers,
    title: 'Multi-Family Projects',
    description: 'Scale your investment portfolio with our multi-family development expertise.',
    features: ['Apartment complexes', 'Townhouse communities', 'Mixed-use developments', 'ROI optimization']
  },
  {
    icon: FaChartLine,
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing properties with our renovation and remodeling services.',
    features: ['Kitchen remodels', 'Bathroom upgrades', 'Structural improvements', 'Modern amenities']
  }
];

const buyingServices = [
  {
    icon: FaHome,
    title: 'Investment Property Acquisition',
    description: 'Strategic property selection for maximum returns and long-term growth potential.',
    features: ['Market analysis', 'Property evaluation', 'Negotiation support', 'Due diligence']
  },
  {
    icon: FaShieldAlt,
    title: 'First-Time Homebuyer Program',
    description: 'Guided homebuying experience with education, support, and financing assistance.',
    features: ['Homebuyer education', 'Credit counseling', 'Down payment assistance', 'Closing support']
  },
  {
    icon: FaLightbulb,
    title: 'Fixer-Upper Opportunities',
    description: 'Identify and acquire properties with renovation potential for maximum value creation.',
    features: ['Property assessment', 'Renovation planning', 'Cost analysis', 'Value projection']
  }
];

const sellingServices = [
  {
    icon: FaHandshake,
    title: 'Traditional Home Sales',
    description: 'Comprehensive marketing and sales support to maximize your property value.',
    features: ['Professional photography', 'Virtual tours', 'Marketing campaigns', 'Negotiation expertise']
  },
  {
    icon: FaCheckCircle,
    title: 'As-Is Property Sales',
    description: 'Quick, hassle-free sales for properties that need work or immediate attention.',
    features: ['Cash offers', 'Quick closing', 'No repairs needed', 'Fair market value']
  },
  {
    icon: FaChartLine,
    title: 'Investment Portfolio Liquidation',
    description: 'Strategic exit strategies for real estate investors looking to liquidate assets.',
    features: ['Portfolio analysis', 'Tax optimization', 'Market timing', 'Buyer network']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Initial meeting to understand your goals, timeline, and budget requirements.'
  },
  {
    step: '02',
    title: 'Planning & Design',
    description: 'Detailed planning phase including architectural design, permits, and project timeline.'
  },
  {
    step: '03',
    title: 'Execution',
    description: 'Professional construction and project management with regular updates and quality control.'
  },
  {
    step: '04',
    title: 'Completion',
    description: 'Final walkthrough, quality assurance, and handover with ongoing support.'
  }
];

export default function SolutionsPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="apple-section bg-apple-gradient">
        <div className="apple-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="text-gradient font-builders font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Build. Buy. Sell.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
            className="text-xl text-apple-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive real estate solutions in Florida and New York. From custom construction to strategic investments, we bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Building Services - Lead Section */}
      <section className="apple-section">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-gradient font-builders font-bold text-3xl md:text-4xl mb-4">
              Building Excellence
            </h2>
            <p className="text-apple-gray-600 max-w-2xl mx-auto">
              Transform your vision into reality with our comprehensive building and development services. From custom homes to large-scale projects, we deliver quality and value.
            </p>
          </div>
          
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            {buildingServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="apple-card p-8 hover:shadow-apple-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-apple-blue-100 rounded-xl flex items-center justify-center">
                    <service.icon className="text-2xl text-apple-blue-600" />
                  </div>
                  <h3 className="text-xl font-builders font-bold text-apple-gray-900">{service.title}</h3>
                </div>
                <p className="text-apple-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-apple-gray-700">
                      <FaCheckCircle className="text-apple-blue-600 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Buying Services */}
      <section className="apple-section bg-apple-gray-50">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-gradient font-builders font-bold text-3xl md:text-4xl mb-4">
              Strategic Buying
            </h2>
            <p className="text-apple-gray-600 max-w-2xl mx-auto">
              Make informed investment decisions with our comprehensive buying services. From first-time homebuyers to seasoned investors, we guide you to the right property.
            </p>
          </div>
          
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {buyingServices.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="apple-card p-8 hover:shadow-apple-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-apple-blue-100 rounded-xl flex items-center justify-center">
                    <service.icon className="text-2xl text-apple-blue-600" />
                  </div>
                  <h3 className="text-xl font-builders font-bold text-apple-gray-900">{service.title}</h3>
                </div>
                <p className="text-apple-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-apple-gray-700">
                      <FaCheckCircle className="text-apple-blue-600 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Selling Services */}
      <section className="apple-section">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-gradient font-builders font-bold text-3xl md:text-4xl mb-4">
              Smart Selling
            </h2>
            <p className="text-apple-gray-600 max-w-2xl mx-auto">
              Maximize your property value with our strategic selling services. Whether you need a quick sale or want to maximize returns, we have the right solution.
            </p>
          </div>
          
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {sellingServices.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="apple-card p-8 hover:shadow-apple-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-apple-blue-100 rounded-xl flex items-center justify-center">
                    <service.icon className="text-2xl text-apple-blue-600" />
                  </div>
                  <h3 className="text-xl font-builders font-bold text-apple-gray-900">{service.title}</h3>
                </div>
                <p className="text-apple-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-apple-gray-700">
                      <FaCheckCircle className="text-apple-blue-600 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="apple-section bg-apple-gray-50">
        <div className="apple-container">
          <div className="text-center mb-16">
            <h2 className="text-gradient font-builders font-bold text-3xl md:text-4xl mb-4">
              Our Process
            </h2>
            <p className="text-apple-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures your project success from start to finish.
            </p>
          </div>
          
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-apple-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-builders font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-builders font-bold text-apple-gray-900 mb-3">{step.title}</h3>
                <p className="text-apple-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apple-section">
        <div className="apple-container text-center">
          <h2 className="text-gradient font-builders font-bold text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-apple-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss your project and find the perfect solution for your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="apple-button text-lg px-8 py-4"
            >
              Get Started
            </button>
            <button className="apple-button-secondary text-lg px-8 py-4">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      <ContactWizard open={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
} 