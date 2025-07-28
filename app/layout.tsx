import { Sora, Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { ReactNode } from 'react';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Sky High Investing',
  description: 'Real estate solutions & investment opportunities.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans">
        <a href="#main" className="skip-nav">
          Skip to content
        </a>
        <NavBar />
        <main id="main" className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
} 