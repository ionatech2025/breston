import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const KEY_OFFERINGS = [
  {
    image: '/images/home/services/medical_gases.jpg',
    title: 'Medical Gases',
    description: 'Medical oxygen, nitrous oxide, medical air, and Entonox for healthcare facilities, hospitals, and emergency services.',
    accentColor: 'bg-red-500',
  },
  {
    image: '/images/home/services/industrial_gases.webp',
    title: 'Industrial Gases',
    description: 'Oxygen, nitrogen, argon, acetylene, CO₂, and more for welding, cutting, manufacturing, and fabrication.',
    accentColor: 'bg-brand-blue-500',
  },
  {
    image: '/images/home/services/high_purity_gases.jpg',
    title: 'High Purity Gases',
    description: 'Ultra and high purity gases for laboratories, analytical instruments, calibration, and research applications.',
    accentColor: 'bg-brand-green-500',
  },
  {
    image: '/images/home/services/cylinder_services.jpg',
    title: 'Cylinder Services',
    description: 'Cylinder hire, exchange, refilling, and sales with flexible options for short and long-term needs.',
    accentColor: 'bg-amber-500',
  },
  {
    image: '/images/home/services/pipeline_installation3.webp',
    title: 'Pipeline Installation',
    description: 'Professional medical gas pipeline design, installation, testing, and commissioning for healthcare facilities.',
    accentColor: 'bg-teal-500',
  },
  {
    image: '/images/home/services/technical_support.jpg',
    title: 'Technical Support',
    description: 'Expert consultation, equipment installation, preventive maintenance, and troubleshooting services.',
    accentColor: 'bg-orange-500',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-blue-500 via-brand-blue-700 to-brand-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          label="WHAT WE DO"
          title="Our Services"
          subtitle="End-to-end gas solutions from supply and distribution to installation, maintenance, and technical support — all backed by a commitment to safety and quality."
          light={true}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KEY_OFFERINGS.map(({ image, title, description, accentColor }) => (
            <div
              key={title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-100">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle colored accent strip at the bottom of the image */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${accentColor}`} />
              </div>
              
              {/* Text details below */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {description}
                </p>
                <div className="mt-auto pt-2 flex items-center text-brand-blue-500 font-semibold text-xs group-hover:text-brand-blue-700 transition-colors">
                  Learn More <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-brand-blue-700 hover:bg-brand-blue-50 px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 border border-white/20"
          >
            Explore All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

