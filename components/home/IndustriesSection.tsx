import Image from 'next/image';
import { Heart, Factory, Flame, FlaskConical, UtensilsCrossed, HardHat, Droplets, Building2, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const INDUSTRIES = [
  { label: 'Hospitals & Healthcare', icon: Heart },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Welding & Fabrication', icon: Flame },
  { label: 'Laboratories', icon: FlaskConical },
  { label: 'Food & Beverage', icon: UtensilsCrossed },
  { label: 'Mining & Construction', icon: HardHat },
  { label: 'Oil & Gas', icon: Droplets },
  { label: 'Commercial Businesses', icon: Building2 },
  { label: 'Education & Research', icon: GraduationCap },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* Background Image with Whitish Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/trusted/trusted.jpg"
          alt="Trusted sectors background"
          fill
          className="object-cover object-center filter saturate-75 opacity-90"
          sizes="100vw"
        />
        {/* Whitish transparent gradient overlay to fade the image and preserve high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/55 to-white/75 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeading
          label="Industries We Serve"
          title="Trusted Across Critical Sectors"
          subtitle="Our gas solutions support the operations of diverse industries that depend on safety and reliability."
          labelClassName="text-brand-green-600 font-extrabold"
          titleClassName="text-slate-900 font-black tracking-tight"
          subtitleClassName="text-slate-800 font-semibold"
        />
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {INDUSTRIES.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/80 bg-white/75 backdrop-blur-[8px] hover:bg-white/95 hover:border-brand-blue-500 hover:shadow-xl hover:shadow-brand-blue-900/10 hover:-translate-y-1 transition-all duration-300 group cursor-default flex-1 basis-[140px] max-w-[200px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue-50/90 border border-brand-blue-100/50 group-hover:bg-brand-blue-900 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-110">
                <Icon className="w-7 h-7 text-brand-blue-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-xs md:text-sm text-center text-slate-800 font-bold group-hover:text-brand-blue-950 transition-colors duration-300 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
