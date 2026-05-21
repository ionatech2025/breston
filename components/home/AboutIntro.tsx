import Link from 'next/link';
import { CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="py-24 bg-[#070e17] relative overflow-hidden">
      {/* Background Decorative glow */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
                className="inline-flex items-center gap-2 text-brand-green-400 font-bold hover:text-brand-green-300 transition-colors group text-sm md:text-base"
              >
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Grid and Blended Image */}
          <div className="flex justify-center items-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[520px] rounded-3xl overflow-hidden bg-slate-950/40 border border-white/5 flex items-center justify-center p-8 shadow-2xl group">
              {/* Subtle Grid Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(32, 120, 168, 0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(32, 120, 168, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '48px 48px',
                }}
              />
              
              {/* Floating ISO Certified Badge */}
              <div className="absolute top-6 right-6 bg-brand-green-500/10 backdrop-blur-md border border-brand-green-500/20 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs font-semibold text-brand-green-300 z-10 shadow-lg select-none">
                <span className="w-2 h-2 rounded-full bg-brand-green-400 animate-pulse" />
                ISO Certified
              </div>

              {/* Cylinders Image Container with soft radial gradient mask */}
              <div 
                className="relative w-full h-full flex items-center justify-center bg-white rounded-2xl p-6"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 45%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 75%)',
                }}
              >
                <img
                  src="/images/gas_cylinders.jpg"
                  alt="Breston Gas Cylinders"
                  className="object-contain max-h-[380px] max-w-full hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

