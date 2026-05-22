import Link from 'next/link';
import { Truck, Users, GraduationCap, Shield, Heart, TrendingUp, CircleCheck as CheckCircle, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/ui/CTABanner';
import { BRAND } from '@/lib/constants';

export const metadata = {
    title: 'Careers | Breston Technologies Limited',
    description: 'Join the Breston Technologies team. We are looking for drivers, sales professionals, and early-career candidates.',
};

const WHY_US = [
    {
        icon: Heart,
        title: 'Meaningful Impact',
        description: 'Support healthcare facilities and industries with essential gas solutions that make a real difference.',
    },
    {
        icon: TrendingUp,
        title: 'Career Growth',
        description: 'Access training, skill development, and long-term career advancement opportunities.',
    },
    {
        icon: Shield,
        title: 'Safety First',
        description: 'We maintain the highest standards of safety, compliance, and professionalism in all we do.',
    },
    {
        icon: Users,
        title: 'Team Culture',
        description: 'A collaborative and supportive environment focused on integrity, accountability, and respect.',
    },
];

const ROLES = [
    {
        icon: Truck,
        title: 'Drivers & Logistics',
        department: 'Operations',
        description: 'Responsible and safety-conscious drivers to support our transportation and delivery operations across Uganda.',
        responsibilities: [
            'Deliver gas cylinders and equipment safely and on time',
            'Inspect cylinders and delivery vehicles before each trip',
            'Maintain accurate delivery documentation',
            'Ensure full compliance with safety procedures',
            'Provide excellent customer service during deliveries',
        ],
        requirements: [
            'Valid driver\'s license (commercial preferred)',
            'Experience in commercial driving is an advantage',
            'Strong commitment to safety',
            'Reliable and professional attitude',
        ],
    },
    {
        icon: Users,
        title: 'Sales & Customer Service',
        department: 'Commercial',
        description: 'Help clients identify the right products and solutions for their operations, and build lasting relationships.',
        responsibilities: [
            'Respond promptly to customer inquiries',
            'Prepare accurate quotations and invoices',
            'Build and maintain strong client relationships',
            'Support hospitals, industries, and distributors',
            'Coordinate product deliveries and orders',
        ],
        requirements: [
            'Strong written and verbal communication skills',
            'Customer-focused mindset and professional attitude',
            'Sales or customer service experience preferred',
            'Basic technical understanding of gas products is an advantage',
        ],
    },
    {
        icon: GraduationCap,
        title: 'Early Career Opportunities',
        department: 'Various',
        description: 'We welcome students, recent graduates, and early-career professionals looking to grow in a dynamic industry.',
        responsibilities: [
            'Support day-to-day operations in your assigned department',
            'Learn industry best practices and safety standards',
            'Assist with customer service and administrative tasks',
            'Contribute to continuous improvement initiatives',
        ],
        requirements: [
            'Diploma or degree in a relevant field',
            'Eagerness to learn and grow professionally',
            'Strong teamwork and communication skills',
            'Commitment to safety and quality standards',
        ],
    },
];

export default function CareersPage() {
    return (
        <main className="pt-[88px]">
            {/* Hero */}
            <section 
                className="relative bg-cover bg-center bg-no-repeat py-20"
                style={{ backgroundImage: "url('/images/top_banner_images/careers.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/80 to-brand-blue-700/80" />
                <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
                    <span className="inline-block text-brand-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Join Our Team</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Build a Career at Breston Technologies</h1>
                    <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto mb-8">
                        Be part of a growing company building reliable medical and industrial gas solutions that power hospitals, laboratories, manufacturers, and critical infrastructure across the region.
                    </p>
                    <a
                        href={`mailto:${BRAND.careersEmail}`}
                        className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-400 text-white px-7 py-3.5 rounded-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <Mail className="w-4 h-4" /> Apply Now
                    </a>
                </div>
            </section>

            {/* Why work with us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeading
                        label="Why Choose Us"
                        title="Why Work With Breston Technologies?"
                        subtitle="We invest in our people and create an environment where careers thrive."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {WHY_US.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-blue-50 hover:shadow-md transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-brand-blue-100 flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-7 h-7 text-brand-blue-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open roles */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeading
                        label="Open Positions"
                        title="Career Opportunities"
                        subtitle="We are always looking for talented, safety-conscious, and customer-focused individuals to join our growing team."
                    />
                    <div className="space-y-8">
                        {ROLES.map(({ icon: Icon, title, department, description, responsibilities, requirements }) => (
                            <div key={title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row">
                                    <div className="bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 p-8 flex flex-col items-center justify-center text-center md:w-56 shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-3">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="font-bold text-white text-lg leading-tight">{title}</h3>
                                        <span className="mt-2 text-xs text-brand-blue-200 bg-white/10 px-3 py-1 rounded-full">{department}</span>
                                    </div>
                                    <div className="p-8 flex-1">
                                        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Responsibilities</h4>
                                                <ul className="space-y-2">
                                                    {responsibilities.map((r) => (
                                                        <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <CheckCircle className="w-4 h-4 text-brand-green-500 shrink-0 mt-0.5" />
                                                            {r}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Ideal Candidate</h4>
                                                <ul className="space-y-2">
                                                    {requirements.map((r) => (
                                                        <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <CheckCircle className="w-4 h-4 text-brand-blue-400 shrink-0 mt-0.5" />
                                                            {r}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <a
                                                href={`mailto:${BRAND.careersEmail}?subject=Application: ${title}`}
                                                className="inline-flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                                            >
                                                <Mail className="w-4 h-4" /> Apply for This Role
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to apply */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <SectionHeading
                        label="Application Process"
                        title="How to Apply"
                        subtitle="We make it simple. Send your application and our team will be in touch."
                    />
                    <div className="bg-gradient-to-br from-brand-blue-50 to-brand-green-50 rounded-2xl p-8 border border-brand-blue-100 text-left">
                        <h3 className="font-bold text-gray-900 mb-4">Your application should include:</h3>
                        <ul className="space-y-3 mb-6">
                            {['Updated CV/Resume', 'Cover letter explaining your interest and relevant experience', 'Relevant certifications or licenses'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-brand-green-500 shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={`mailto:${BRAND.careersEmail}`}
                                className="inline-flex items-center justify-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                {BRAND.careersEmail}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner title="Questions About Working With Us?" subtitle="Reach out to our team and we will be happy to answer any questions about career opportunities at Breston Technologies." />
        </main>
    );
}
