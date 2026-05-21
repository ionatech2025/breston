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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          label="Industries We Serve"
          title="Trusted Across Critical Sectors"
          subtitle="Our gas solutions support the operations of diverse industries that depend on safety and reliability."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {INDUSTRIES.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-brand-blue-200 hover:bg-brand-blue-50 transition-all group cursor-default min-w-[110px]"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-50 group-hover:bg-brand-blue-100 flex items-center justify-center transition-colors">
                <Icon className="w-6 h-6 text-brand-blue-500" />
              </div>
              <span className="text-xs text-center text-gray-600 font-medium leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
