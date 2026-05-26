import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import CTABanner from '@/components/ui/CTABanner';
import CylinderWarning from '@/components/ui/CylinderWarning';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';
import { cn } from '@/lib/utils';

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export function generateStaticParams() {
    return PRODUCT_CATEGORIES.map((cat) => ({
        category: cat.id,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { category } = await params;
    const cat = PRODUCT_CATEGORIES.find((c) => c.id === category);
    if (!cat) return {};

    return {
        title: `${cat.title} | Breston Technologies Limited`,
        description: cat.subtitle,
    };
}

const CATEGORY_BANNERS: Record<string, string> = {
    purity: '/images/home/services/high_purity_gases2.jpg',
    industrial: '/images/top_banner_images/products_industrial_gases.png',
    medical: '/images/home/services/medical_gases2.jpg',
    specialty: '/images/top_banner_images/products_specialty_gases.png',
    cylinders: '/images/top_banner_images/products_industrial_gases.png',
    accessories: '/images/top_banner_images/products_accessories.png',
    welding: '/images/top_banner_images/products_welding.png',
    dryice: '/images/top_banner_images/products_dryice.png',
};

export default async function ProductCategoryPage({ params }: PageProps) {
    const { category } = await params;
    const currentCategory = PRODUCT_CATEGORIES.find((c) => c.id === category);

    if (!currentCategory) {
        notFound();
    }

    return (
        <main className="pt-[88px]">
            {/* Hero */}
            <section
                className="relative bg-cover bg-center bg-no-repeat py-16 md:py-20"
                style={{ backgroundImage: `url('${CATEGORY_BANNERS[currentCategory.id] || "/images/top_banner_images/services.png"}')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/80 to-brand-blue-700/80" />
                <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
                    <span className="inline-block text-brand-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Product Catalogue</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentCategory.title}</h1>
                    <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto font-medium">
                        {currentCategory.subtitle}
                    </p>
                </div>
            </section>

            {/* Category nav */}
            <section className="bg-white border-b border-gray-200 sticky top-[88px] z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                        {PRODUCT_CATEGORIES.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/products/${cat.id}`}
                                className={cn(
                                    "shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                                    currentCategory.id === cat.id
                                        ? "text-brand-blue-500 bg-brand-blue-50 font-semibold"
                                        : "text-gray-600 hover:text-brand-blue-500 hover:bg-brand-blue-50"
                                )}
                            >
                                {cat.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product cards */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionHeading
                        title={currentCategory.title}
                        subtitle={currentCategory.subtitle}
                        centered={false}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentCategory.rows.map((row, idx) => (
                            <ProductCard key={idx} columns={currentCategory.columns} row={row} />
                        ))}
                    </div>
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
            {['purity', 'industrial', 'medical', 'specialty', 'cylinders', 'welding'].includes(currentCategory.id) && (
                <CylinderWarning />
            )}
        </main>
    );
}
