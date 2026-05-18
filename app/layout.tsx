import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Breston Technologies Limited | Medical & Industrial Gas Solutions',
  description: 'Providing safe, reliable, and high-quality medical and industrial gases, accessories, and engineering solutions across Uganda.',
  keywords: ['medical gases Uganda', 'industrial gas suppliers Kampala', 'gas cylinder hire Uganda', 'medical gas pipeline installation', 'oxygen gas suppliers'],
  openGraph: {
    title: 'Breston Technologies Limited',
    description: 'Medical & Industrial Gas Solutions — Uganda',
    images: [{ url: '/Breston_Technologies_logo.jpg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
