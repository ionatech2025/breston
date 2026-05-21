'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Award, Truck, Clock } from 'lucide-react';

const CAROUSEL_IMAGES = [
  {
    src: '/images/homepage_carousel/med_oxy.webp',
    alt: 'Medical Oxygen Solutions',
  },
  {
    src: '/images/homepage_carousel/compressed_air.jpg',
    alt: 'Industrial Gas Equipment',
  },
  {
    src: '/images/homepage_carousel/Truck transporting cylinders.png',
    alt: 'Gas Cylinder Delivery and Logistics',
  },
];

const HERO_FEATURES = [
  { icon: Shield, label: 'Safety Certified' },
  { icon: Award, label: 'Quality Assured' },
  { icon: Truck, label: 'Reliable Delivery' },
  { icon: Clock, label: '24/7 Emergency Support' },
];

const STATS = [
  { value: '45+', label: 'Industries Served' },
  { value: '100%', label: 'Safety Compliant' },
  { value: '8', label: 'Product Categories' },
  { value: '24/7', label: 'Emergency Support' },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 4000); // transitions every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 bg-brand-blue-900">
        {CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Rich gradient overlay keeping the logo's signature blue (brand-blue-500) but transparent enough to see the images */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500/70 via-brand-blue-900/60 to-brand-blue-900/35 lg:from-brand-blue-500/75 lg:via-brand-blue-900/55 lg:to-brand-blue-900/25" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column (Text content) */}
          <div>
            <span className="inline-block bg-brand-green-500/20 text-brand-green-300 border border-brand-green-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-xs">
              {"Uganda's Trusted Gas Solutions Provider"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
              Medical &amp; Industrial
              <span className="block text-brand-green-400">Gas Solutions</span>
            </h1>
            <p className="text-brand-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-xl drop-shadow-xs">
              Providing safe, reliable, and high-quality medical and industrial gases, accessories, and engineering solutions to power healthcare, manufacturing, and critical operations across the region.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-400 text-white px-7 py-3.5 rounded-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                View Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-lg font-semibold transition-all backdrop-blur-xs"
              >
                Request a Quote
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {HERO_FEATURES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/15 backdrop-blur-xs">
                  <div className="w-8 h-8 rounded-lg bg-brand-green-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-brand-green-400" />
                  </div>
                  <span className="text-brand-blue-100 text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column (Stats container - no logo) */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-brand-green-500/10 rounded-3xl blur-2xl scale-110" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {STATS.map(({ value, label }) => (
                    <div key={label} className="bg-white/10 backdrop-blur-xs rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                      <div className="text-3xl font-extrabold text-white">{value}</div>
                      <div className="text-brand-blue-200 text-xs font-bold mt-2 uppercase tracking-wide">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                ? 'bg-brand-green-400 w-8'
                : 'bg-white/40 hover:bg-white/70 w-2.5'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
