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
      <header className={clsx('fixed inset-x-0 top-0 z-50 transition-all', scrolled ? 'glass' : '')}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" aria-label="Sky High Investing home" className="flex items-center gap-2">
            <Image src="/brand/logo-main.jpg" alt="Sky High Investing logo" width={124} height={62} className="h-12 w-auto object-contain" />
          </Link>
          <nav className="hidden gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-cloud-white/80 hover:text-cloud-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-cloud-white px-6 py-2 text-sm font-semibold text-high-altitude-blue shadow-lg hover:bg-cloud-white/80 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </header>
      <ContactWizard open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}; 