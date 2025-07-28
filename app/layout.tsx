import { Roboto_Condensed, Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { ReactNode } from 'react';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
  weight: ['300', '400', '700'],
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
    <html lang="en" className={`${robotoCondensed.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
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