import Link from 'next/link';
import { ArrowRight, Heart, Factory, FlaskConical, Package, GitBranch, Wrench } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const KEY_OFFERINGS = [
  {
    icon: Heart,
    title: 'Medical Gases',
    description: 'Medical oxygen, nitrous oxide, medical air, and Entonox for healthcare facilities, hospitals, and emergency services.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Factory,
    title: 'Industrial Gases',
    description: 'Oxygen, nitrogen, argon, acetylene, CO₂, and more for welding, cutting, manufacturing, and fabrication.',
    color: 'text-brand-blue-500',
    bg: 'bg-brand-blue-50',
  },
  {
    icon: FlaskConical,
    title: 'High Purity Gases',
    description: 'Ultra and high purity gases for laboratories, analytical instruments, calibration, and research applications.',
    color: 'text-brand-green-500',
    bg: 'bg-brand-green-50',
  },
  {
    icon: Package,
    title: 'Cylinder Services',
    description: 'Cylinder hire, exchange, refilling, and sales with flexible options for short and long-term needs.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: GitBranch,
    title: 'Pipeline Installation',
    description: 'Professional medical gas pipeline design, installation, testing, and commissioning for healthcare facilities.',
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description: 'Expert consultation, equipment installation, preventive maintenance, and troubleshooting services.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue-500 via-brand-blue-700 to-brand-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          label="WHAT WE DO"
          title="Our Services"
          subtitle="End-to-end gas solutions from supply and distribution to installation, maintenance, and technical support — all backed by a commitment to safety and quality."
          light={true}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_OFFERINGS.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
