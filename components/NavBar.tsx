'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { ContactWizard } from './ContactWizard';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/learn', label: 'Learn' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={clsx('fixed inset-x-0 top-0 z-50 transition-all duration-300', 
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
                className="font-builders text-apple-gray-700 hover:text-apple-blue-600 transition-colors duration-200 font-medium"
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
      <ContactWizard open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}; 