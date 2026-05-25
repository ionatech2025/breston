import Link from 'next/link';
import { Truck, Package, GitBranch, Wrench, Headphones, RefreshCw, MapPin, Heart, Factory, Flame, FlaskConical, UtensilsCrossed, HardHat, Droplets, Building2, GraduationCap, CircleCheck as CheckCircle, Shield, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';

export const metadata = {
    title: 'Our Services | Breston Technologies Limited',
    description: 'Gas supply, cylinder hire, medical pipeline installation, equipment maintenance, and technical support services.',
};

const SERVICES = [
    {
        icon: Truck,
        title: 'Gas Supply & Distribution',
        description: 'Reliable supply and delivery of medical and industrial gases to hospitals, industries, laboratories, and commercial clients.',
        details: ['Scheduled deliveries', 'Emergency gas supply', 'Bulk supply solutions', 'Cylinder exchange & hire services'],
        color: 'text-brand-blue-500',
        bg: 'bg-brand-blue-50',
    },
    {
        icon: Package,
        title: 'Cylinder Hire Services',
        description: 'Flexible and affordable cylinder hire for short-term or long-term use with delivery and collection services.',
        details: ['Medical gas cylinder hire', 'Industrial gas cylinder hire', 'Short-term and long-term rental', 'Cylinder replacement and exchange', 'Reliable delivery and collection'],
        color: 'text-brand-green-500',
        bg: 'bg-brand-green-50',
    },
    {
        icon: GitBranch,
        title: 'Medical Gas Pipeline Installation',
        description: 'Professional installation of medical gas pipeline systems for healthcare facilities to the highest standards.',
        details: ['System design', 'Installation', 'Testing and commissioning', 'Maintenance and inspections'],
        color: 'text-teal-500',
        bg: 'bg-teal-50',
    },
    {
        icon: Wrench,
        title: 'Equipment Installation & Maintenance',
        description: 'Technical support and maintenance services for gas equipment and systems to ensure optimal performance.',
        details: ['Equipment setup', 'Preventive maintenance', 'Troubleshooting and repairs', 'System upgrades'],
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
    {
        icon: Headphones,
        title: 'Technical Support & Consultation',
        description: 'Professional guidance to help customers select and maintain the right gas systems and equipment.',
        details: ['Product selection guidance', 'Gas system planning', 'Safety guidance', 'Operational support'],
        color: 'text-amber-500',
        bg: 'bg-amber-50',
    },
    {
        icon: RefreshCw,
        title: 'Cylinder Refilling Services',
        description: 'Safe and efficient cylinder refilling for medical and industrial gases with quality-controlled processes.',
        details: ['Quality-controlled filling', 'Safe handling procedures', 'Timely turnaround', 'Compliance with safety standards'],
        color: 'text-red-500',
        bg: 'bg-red-50',
    },
    {
        icon: MapPin,
        title: 'Delivery & Logistics',
        description: 'Efficient and reliable transportation services for gas cylinders and related products across the region.',
        details: ['Door-to-door delivery', 'Fleet-supported logistics', 'Timely dispatch and tracking', 'Emergency delivery support'],
        color: 'text-blue-500',
        bg: 'bg-blue-50',
    },
];

const INDUSTRIES = [
    { label: 'Hospitals & Healthcare', icon: Heart },
    { label: 'Manufacturing Industries', icon: Factory },
    { label: 'Welding & Fabrication', icon: Flame },
    { label: 'Laboratories & Research', icon: FlaskConical },
    { label: 'Food & Beverage', icon: UtensilsCrossed },
    { label: 'Mining & Construction', icon: HardHat },
    { label: 'Oil & Gas Sector', icon: Droplets },
    { label: 'Commercial Businesses', icon: Building2 },
    { label: 'Educational Institutions', icon: GraduationCap },
];

const SAFETY_AREAS = [
    'Gas handling and storage',
    'Cylinder transportation procedures',
    'Equipment installation protocols',
    'Medical gas pipeline standards',
    'Regulatory compliance',
    'Customer safety training',
];

export default function ServicesPage() {
    return (
        <main className="pt-[88px]">
            {/* Hero */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-16 md:py-20"
                style={{ backgroundImage: "url('/images/top_banner_images/products_gas_cylinders.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/80 to-brand-blue-700/80" />
                <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
                    <span className="inline-block text-brand-green-300 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
                    <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto">
                        End-to-end gas solutions from supply and distribution to installation, maintenance, and technical support — all backed by a commitment to safety and quality.
                    </p>
                </div>
            </section>

            {/* Services grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeading
                        label="Service Offerings"
                        title="Everything Your Operations Need"
                        subtitle="We provide a full spectrum of gas services designed to keep healthcare, industrial, and commercial operations running safely and efficiently."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map(({ icon: Icon, title, description, details, color, bg }) => (
                            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                                    <Icon className={`w-6 h-6 ${color}`} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                                <ul className="space-y-2">
                                    {details.map((d) => (
                                        <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-brand-green-500 shrink-0 mt-0.5" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cylinder Hire highlight */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-br from-brand-blue-50 to-brand-green-50 rounded-3xl p-10 md:p-14">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block text-brand-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Flexible Solutions</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cylinder Hire — No Purchase Needed</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Our cylinder hire program offers a practical and cost-effective solution for operations that need gas supply without the capital commitment of buying cylinders. Suitable for both short-term projects and long-term operations.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                                >
                                    Enquire About Hire <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {['Hospitals and clinics', 'Construction sites', 'Welding workshops', 'Laboratories', 'Industrial operations', 'Temporary projects & events'].map((item) => (
                                    <div key={item} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-brand-green-500 shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeading
                        label="Industries We Serve"
                        title="Serving Critical Sectors Across Uganda"
                    />
                    <div className="flex flex-wrap justify-center gap-4">
                        {INDUSTRIES.map(({ label, icon: Icon }) => (
                            <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-gray-100 hover:border-brand-blue-200 hover:shadow-md transition-all">
                                <div className="w-9 h-9 rounded-lg bg-brand-blue-50 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-brand-blue-500" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety commitment */}
            <section className="py-20 bg-brand-blue-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-brand-green-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Priority</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Safety & Quality Commitment</h2>
                            <p className="text-brand-blue-200 leading-relaxed mb-8">
                                Safety and quality are at the center of everything we do. Our team follows strict safety procedures and industry best practices across all service areas.
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-brand-green-400 font-semibold hover:text-brand-green-300 transition-colors"
                            >
                                Learn About Our Values <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {SAFETY_AREAS.map((area) => (
                                <div key={area} className="bg-white/10 rounded-xl p-4 flex items-start gap-3 border border-white/10">
                                    <Shield className="w-5 h-5 text-brand-green-400 shrink-0 mt-0.5" />
                                    <span className="text-brand-blue-100 text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
