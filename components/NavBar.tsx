'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { ContactWizard } from './ContactWizard';
import { FaHome, FaSearch, FaBriefcase, FaUser, FaBars } from 'react-icons/fa';

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/solutions', label: 'Solutions', icon: FaSearch },
  { href: '/portfolio', label: 'Portfolio', icon: FaBriefcase },
  { href: '/about', label: 'About', icon: FaUser },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <header className={clsx('fixed inset-x-0 top-0 z-50 transition-all duration-300 hidden md:block', 
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-apple border-b border-apple-gray-200' : 'bg-transparent'
      )}>
        <div className="apple-container flex items-center justify-between py-4">
          <Link href="/" aria-label="Sky High Investing home" className="flex items-center gap-3">
            <Image src="/brand/logo-main.jpg" alt="Sky High Investing logo" width={124} height={62} className="h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="font-builders text-apple-gray-700 hover:text-apple-blue-600 transition-colors duration-200 font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setIsModalOpen(true)}
            className="apple-button text-sm"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white border-t border-apple-gray-200 shadow-apple-lg">
          <div className="flex items-center justify-around py-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-apple-gray-50"
              >
                <item.icon className="text-xl text-apple-gray-600 mb-1" />
                <span className="text-xs font-builders font-bold text-apple-gray-700">{item.label}</span>
              </Link>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-apple-gray-50"
            >
              <div className="w-5 h-5 bg-apple-blue-600 rounded-full mb-1 flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
              <span className="text-xs font-builders font-bold text-apple-gray-700">Contact</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 md:hidden">
        <div className={clsx('transition-all duration-300', 
          scrolled ? 'bg-white/90 backdrop-blur-xl shadow-apple border-b border-apple-gray-200' : 'bg-transparent'
        )}>
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" aria-label="Sky High Investing home" className="flex items-center">
              <Image src="/brand/logo-main.jpg" alt="Sky High Investing logo" width={80} height={40} className="h-8 w-auto object-contain" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-apple-gray-100 transition-colors duration-200"
            >
              <FaBars className="text-xl text-apple-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-apple-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-builders font-bold text-apple-gray-900">Menu</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-apple-gray-100 transition-colors duration-200"
                >
                  <span className="text-2xl text-apple-gray-700">×</span>
                </button>
              </div>
              <nav className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-apple-gray-50 transition-colors duration-200"
                  >
                    <item.icon className="text-xl text-apple-gray-600" />
                    <span className="font-builders font-bold text-apple-gray-900">{item.label}</span>
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-apple-blue-600 text-white hover:bg-apple-blue-700 transition-colors duration-200"
                >
                  <span className="text-xl">+</span>
                  <span className="font-builders font-bold">Contact Us</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      <ContactWizard open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}; 