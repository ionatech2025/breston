import Link from 'next/link';
import Image from 'next/image';
import { CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-blue-900">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gas_cylinders.jpg"
          alt="Breston Gas Cylinders background"
          fill
          className="object-cover object-center lg:object-right"
          sizes="100vw"
          priority
        />
        {/* Bluish transparent gradient overlay to blend into the brand blue theme and ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/95 via-brand-blue-900/85 to-brand-blue-900/60 lg:from-brand-blue-900/98 lg:via-brand-blue-900/85 lg:to-brand-blue-900/45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col">
            {/* Pre-heading style matching screenshot: — WHO WE ARE */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-green-500 shrink-0" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-green-400">
                Who We Are
              </span>
            </div>

            {/* Heading matching screenshot layout */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              Powering <br /> Healthcare <br /> &amp; <span className="text-brand-green-400 italic font-serif font-normal">Industry</span> <br /> with Trusted Gas Solutions
            </h2>

            {/* Post-heading line matching screenshot */}
            <div className="w-16 h-[2px] bg-brand-green-500 mb-8" />

            {/* Descriptions */}
            <p className="text-slate-300 leading-relaxed mb-6 text-base md:text-lg">
              Breston Technologies Limited was established with the vision of becoming a trusted partner in the medical and industrial gas industry. We bridge the gap between quality supply, technical expertise, and customer-focused service delivery.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8 text-base md:text-lg">
              We serve hospitals, laboratories, manufacturers, the oil &amp; gas sector, welding and fabrication industries, research institutions, and commercial enterprises with reliable, safe, and efficient gas solutions.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              {[
                'ISO-compliant gas handling procedures',
                'Certified technical specialists',
                'Fleet-supported nationwide delivery',
                'Emergency gas supply available',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green-400 shrink-0" />
                  <span className="text-slate-200 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Link */}
            <div>
              <Link
                href="/about"
                id="about-intro-learn-more"
                className="inline-flex items-center gap-2 text-brand-green-400 font-bold hover:text-brand-green-300 transition-colors group text-sm md:text-base"
              >
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Empty (allows background cylinders image to be visible on desktop) */}
          <div className="hidden lg:block h-[400px]" />
        </div>
      </div>
    </section>
  );
}


