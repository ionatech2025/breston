import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BRAND } from '@/lib/constants';

interface CTABannerProps {
    title?: string;
    subtitle?: string;
}

export default function CTABanner({
    title = 'Ready to Get Started?',
    subtitle = 'Contact our team for product inquiries, technical consultation, bulk supply solutions, or cylinder hire services.',
}: CTABannerProps) {
    return (
        <section className="bg-gradient-to-r from-brand-blue-500 to-brand-blue-800 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                <p className="text-brand-blue-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-brand-green-500 hover:bg-brand-green-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Request a Quote
                    </Link>
                    <a
                        href={`tel:${BRAND.phone1}`}
                        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg"
                    >
                        <Phone className="w-4 h-4" />
                        {BRAND.phone1}
                    </a>
                </div>
            </div>
        </section>
    );
}
