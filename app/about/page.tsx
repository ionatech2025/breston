import { Shield, Star, Users, Zap, ThumbsUp, RefreshCw, CircleCheck as CheckCircle, Target, Eye } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';

export const metadata = {
    title: 'About Us | Breston Technologies Limited',
    description: 'Learn about Breston Technologies Limited, our vision, mission, core values, and commitment to quality and safety.',
};

const CORE_VALUES = [
    { icon: Shield, title: 'Safety', description: 'Prioritizing the health, safety, and well-being of employees, customers, communities, and the environment in everything we do.' },
    { icon: Star, title: 'Integrity', description: 'Conducting business honestly, ethically, and transparently with all stakeholders.' },
    { icon: Users, title: 'Customer Focus', description: 'Understanding customer needs and consistently delivering reliable, responsive solutions.' },
    { icon: Zap, title: 'Excellence', description: 'Pursuing operational excellence through professionalism, quality, and continuous improvement.' },
    { icon: RefreshCw, title: 'Innovation', description: 'Embracing modern technologies and best practices to improve efficiency and reliability.' },
    { icon: ThumbsUp, title: 'Teamwork', description: 'Believing that collaboration, respect, and shared responsibility are essential to success.' },
    { icon: CheckCircle, title: 'Reliability', description: 'Being a dependable partner for consistent product quality and timely service delivery.' },
];

const ETHICS = [
    { title: 'Compliance', description: 'Adhering to all applicable laws, regulations, industry standards, and safety requirements.' },
    { title: 'Honesty & Transparency', description: 'Maintaining open and honest communication with customers, partners, and employees.' },
    { title: 'Respect', description: 'Treating all individuals with fairness, dignity, and mutual respect regardless of background.' },
    { title: 'Safety & Environment', description: 'Operating safely and responsibly with regard to environmental impact and community well-being.' },
    { title: 'Customer Commitment', description: 'Providing accurate information, dependable products, and exceptional service at all times.' },
    { title: 'Confidentiality', description: 'Protecting confidential business and customer information with discretion and professionalism.' },
];

const QUALITY_POLICIES = [
    'Supplying products and services that consistently meet customer and regulatory requirements',
    'Maintaining the highest standards of safety in handling, storage, transportation, and distribution',
    'Continuously improving our processes, technologies, and service delivery',
    'Training and empowering employees to uphold quality and safety standards',
    'Building strong relationships through professionalism and integrity',
];

export default function AboutPage() {
    return (
        <main className="pt-[88px]">
            {/* Hero */}
            <section 
                className="relative bg-cover bg-center bg-no-repeat py-20"
                style={{ backgroundImage: "url('/images/top_banner_images/aboutus.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/80 to-brand-blue-700/80" />
                <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
                    <span className="inline-block text-brand-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">About Breston Technologies</h1>
                    <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto">
                        A trusted partner in medical and industrial gas solutions, committed to safety, quality, and exceptional service across Uganda and the region.
                    </p>
                </div>
            </section>

            {/* Background */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeading
                                label="Our Background"
                                title="Who We Are"
                                centered={false}
                            />
                            <div className="space-y-5 text-gray-600 leading-relaxed">
                                <p>
                                    Breston Technologies Limited was established with the vision of becoming a trusted partner in the medical and industrial gas industry by providing dependable gas products, engineering solutions, and technical support services.
                                </p>
                                <p>
                                    Recognizing the growing demand for reliable medical and industrial gases, gas accessories, and engineering services, the company was founded to bridge the gap between quality supply, technical expertise, and customer-focused service delivery.
                                </p>
                                <p>
                                    Over time, Breston Technologies Limited has continued to expand its capabilities to serve hospitals, laboratories, manufacturers, the oil &amp; gas sector, welding and fabrication industries, research institutions, and commercial enterprises with reliable and efficient gas solutions.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.pexels.com/photos/3825572/pexels-photo-3825572.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Gas cylinders"
                                className="rounded-2xl object-cover w-full h-56"
                            />
                            <img
                                src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Hospital setting"
                                className="rounded-2xl object-cover w-full h-56 mt-6"
                            />
                            <img
                                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Laboratory"
                                className="rounded-2xl object-cover w-full h-48"
                            />
                            <img
                                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="Industrial operations"
                                className="rounded-2xl object-cover w-full h-48 mt-4"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 rounded-2xl p-8 text-white">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                                <Eye className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-brand-blue-100 leading-relaxed text-lg">
                                To become the leading and most trusted provider of medical and industrial gas solutions recognized for quality, safety, innovation, and exceptional customer service across the region.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-brand-green-500 to-brand-green-700 rounded-2xl p-8 text-white">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-green-50 leading-relaxed text-lg">
                                To provide safe, reliable, and high-quality medical and industrial gas products, accessories, and engineering solutions that empower healthcare providers, industries, and businesses to operate efficiently and sustainably.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeading
                        label="What We Stand For"
                        title="Our Core Values"
                        subtitle="These values guide every decision, interaction, and operation at Breston Technologies Limited."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CORE_VALUES.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:border-brand-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all bg-white">
                                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-brand-blue-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Policy */}
            <section className="py-20 bg-gradient-to-br from-brand-blue-800 to-brand-blue-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block text-brand-green-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Standards</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Quality Policy</h2>
                            <p className="text-brand-blue-200 leading-relaxed mb-8">
                                We are committed to maintaining the highest standards of quality across all aspects of our business — from product selection to delivery and after-sale support.
                            </p>
                            <ul className="space-y-4">
                                {QUALITY_POLICIES.map((policy) => (
                                    <li key={policy} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-brand-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle className="w-4 h-4 text-brand-green-400" />
                                        </div>
                                        <span className="text-brand-blue-100 leading-relaxed">{policy}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
                                <h3 className="font-bold text-white text-xl mb-6">Code of Ethics</h3>
                                <div className="space-y-5">
                                    {ETHICS.map(({ title, description }) => (
                                        <div key={title} className="border-l-2 border-brand-green-500 pl-4">
                                            <div className="font-semibold text-white mb-1">{title}</div>
                                            <div className="text-brand-blue-200 text-sm leading-relaxed">{description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
