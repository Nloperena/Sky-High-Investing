import React from 'react';
import Image from 'next/image';
import { buildMeta } from '@/lib/seo';
import { FaPhone, FaFax, FaEnvelope } from 'react-icons/fa';

export const metadata = buildMeta({
  title: 'Contact Us | Sky High Investing',
  description: 'Get in touch with our team for any inquiries.',
  url: '/contact',
});

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gradient text-center mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <Image src="/img/contact-hero.jpg" alt="Contact illustration" width={275} height={183} className="rounded-lg shadow-lg mb-8" />
          
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p>We’d love to hear from you! Please fill in the form and we will get back to you as soon as possible.</p>
          
          <div className="space-y-4">
            <p><strong>Address:</strong> 9100 Conroy Windermere Rd. Suite 200, Windermere, FL 34786</p>
            <p className="flex items-center gap-2"><FaPhone /> <strong>Office:</strong> (407) 352-3220</p>
            <p className="flex items-center gap-2"><FaFax /> <strong>Fax:</strong> (407) 738-4816</p>
            <p className="flex items-center gap-2"><FaEnvelope /> <strong>Email:</strong> <a href="mailto:carlos@skyhighinvesting.com" className="text-blue-500 hover:underline">carlos@skyhighinvesting.com</a></p>
          </div>
        </div>

        <div className="glass p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name (required)</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email (required)</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 