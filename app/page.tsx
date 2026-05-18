import Link from 'next/link';
import Image from 'next/image';
import { Shield, Star, Users, Zap, CircleCheck as CheckCircle, ArrowRight, Heart, Factory, Flame, FlaskConical, UtensilsCrossed, HardHat, Droplets, Building2, GraduationCap, Truck, Package, GitBranch, Wrench, RefreshCw, Award, ThumbsUp, Clock } from 'lucide-react';
import CTABanner from '@/components/ui/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';

const HERO_FEATURES = [
  { icon: Shield, label: 'Safety Certified' },
  { icon: Award, label: 'Quality Assured' },
  { icon: Truck, label: 'Reliable Delivery' },
  { icon: Clock, label: '24/7 Emergency Support' },
];

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

const STATS = [
  { value: '9+', label: 'Industries Served' },
  { value: '100%', label: 'Safety Compliant' },
  { value: '8', label: 'Product Categories' },
  { value: '24/7', label: 'Emergency Support' },
];

const CORE_VALUES = [
  { icon: Shield, title: 'Safety', description: 'Prioritizing health, safety, and well-being in every operation.' },
  { icon: Star, title: 'Integrity', description: 'Honest, ethical, and transparent business conduct.' },
  { icon: ThumbsUp, title: 'Reliability', description: 'Consistent product quality and dependable service delivery.' },
  { icon: Users, title: 'Customer Focus', description: 'Understanding and delivering on customer needs.' },
  { icon: Zap, title: 'Excellence', description: 'Operational excellence through continuous improvement.' },
  { icon: RefreshCw, title: 'Innovation', description: 'Embracing modern technologies for better efficiency.' },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-green-500 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brand-blue-300 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-green-500/20 text-brand-green-300 border border-brand-green-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                {"Uganda's Trusted Gas Solutions Provider"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Medical &amp; Industrial
                <span className="block text-brand-green-400">Gas Solutions</span>
              </h1>
              <p className="text-brand-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
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
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-lg font-semibold transition-all"
                >
                  Request a Quote
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {HERO_FEATURES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-green-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-brand-green-400" />
                    </div>
                    <span className="text-brand-blue-100 text-xs font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green-500/20 rounded-3xl blur-2xl scale-110" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <Image
                    src="/Breston_Technologies_logo.jpg"
                    alt="Breston Technologies Limited"
                    width={320}
                    height={320}
                    className="object-contain"
                  />
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {STATS.map(({ value, label }) => (
                      <div key={label} className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-brand-blue-200 text-xs mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Who We Are"
                title="Powering Healthcare & Industry with Trusted Gas Solutions"
                centered={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                Breston Technologies Limited was established with the vision of becoming a trusted partner in the medical and industrial gas industry. We bridge the gap between quality supply, technical expertise, and customer-focused service delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We serve hospitals, laboratories, manufacturers, the oil &amp; gas sector, welding and fabrication industries, research institutions, and commercial enterprises with reliable, safe, and efficient gas solutions.
              </p>
              <div className="space-y-3">
                {['ISO-compliant gas handling procedures', 'Certified technical specialists', 'Fleet-supported nationwide delivery', 'Emergency gas supply available'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-brand-blue-500 font-semibold hover:text-brand-blue-700 transition-colors"
                >
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/Oxygen cylinders.png"
                  alt="Medical gas cylinders"
                  className="rounded-2xl object-cover w-full h-48"
                />
                <img
                  src="/images/Welding torch.png"
                  alt="Industrial welding"
                  className="rounded-2xl object-cover w-full h-64"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/images/medical-oxygen.png"
                  alt="Hospital equipment"
                  className="rounded-2xl object-cover w-full h-64"
                />
                <img
                  src="/images/Specialty gases.png"
                  alt="Laboratory research"
                  className="rounded-2xl object-cover w-full h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="What We Offer"
            title="Comprehensive Gas Solutions"
            subtitle="From medical oxygen to specialty gases, cylinders to pipeline installation — we deliver what your operations need."
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

      {/* Industries */}
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

      {/* Safety & Quality */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-800 to-brand-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            label="Our Commitment"
            title="Safety & Quality at Every Step"
            subtitle="We follow strict safety procedures and industry best practices in gas handling, storage, transportation, and service delivery."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-green-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-green-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-brand-blue-200 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
