import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductTable from '@/components/ui/ProductTable';
import CTABanner from '@/components/ui/CTABanner';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';

export const metadata = {
    title: 'Our Products | Breston Technologies Limited',
    description: 'Browse our full range of medical, industrial, and specialty gases, cylinders, accessories, and welding equipment.',
};

export default function ProductsPage() {
    return (
        <main className="pt-[88px]">
            {/* Hero */}
            <section className="bg-gradient-to-r from-brand-blue-800 to-brand-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block text-brand-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Product Catalogue</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
                    <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto">
                        A comprehensive range of medical, industrial, and specialty gases together with high-quality gas accessories, equipment, and engineering solutions.
                    </p>
                </div>
            </section>

            {/* Category nav */}
            <section className="bg-white border-b border-gray-200 sticky top-[88px] z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                        {PRODUCT_CATEGORIES.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-blue-500 hover:bg-brand-blue-50 transition-colors whitespace-nowrap"
                            >
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product tables */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 space-y-16">
                    {PRODUCT_CATEGORIES.map((cat) => (
                        <ProductTable key={cat.id} category={cat} />
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <SectionHeading
                        label="Need Something Specific?"
                        title="Can't Find What You're Looking For?"
                        subtitle="Contact our team for custom gas solutions, specialty gases, or bulk supply inquiries."
                    />
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 border border-brand-blue-200 text-brand-blue-600 hover:bg-brand-blue-50 px-8 py-3.5 rounded-lg font-semibold transition-colors"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
