import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    columns: string[];
    row: string[];
}

export default function ProductCard({ columns, row }: ProductCardProps) {
    const hasImage = columns[0] === 'Image' || row[0].startsWith('/images/');
    const image = hasImage ? row[0] : '/images/placeholder.png';
    const startIdx = hasImage ? 1 : 0;
    const title = row[startIdx];

    // Extract details excluding the image and the title
    const details = columns.slice(startIdx + 1).map((col, idx) => ({
        label: col,
        value: row[startIdx + 1 + idx]
    })).filter(detail => detail.value); // Only show non-empty details

    const formulaDetail = details.find(d => d.label === 'Chemical Formula');
    const casDetail = details.find(d => d.label === 'CAS Number');
    const remainingDetails = details.filter(d => d.label !== 'Chemical Formula' && d.label !== 'CAS Number');

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col h-full group">
            <div className="relative h-56 bg-gray-50 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-blue-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                        Available
                    </span>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                {!(formulaDetail || casDetail) ? (
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue-600 transition-colors">
                        {title}
                    </h3>
                ) : (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {formulaDetail && (
                            <span className="inline-flex items-center gap-1 bg-gray-50 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-200">
                                <span className="bg-brand-blue-100 text-brand-blue-700 px-1.5 py-0.5 rounded">
                                    Formula
                                </span>
                                {formulaDetail.value}
                            </span>

                        )}
                        {casDetail && (
                            <span className="inline-flex items-center gap-1 bg-gray-50 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-200">
                                <span className="bg-brand-blue-100 text-brand-blue-700 px-1.5 py-0.5 rounded">
                                    CAS
                                </span>
                                {casDetail.value}
                            </span>
                        )}
                    </div>
                )}

                <div className="space-y-2.5 mb-6 flex-1">
                    {remainingDetails.map(({ label, value }) => (
                        <div key={label} className="text-sm flex flex-col">
                            <span className="font-bold text-gray-800 text-xs uppercase tracking-wider">{label}</span>
                            <span className="text-gray-700 line-clamp-2">{value}</span>
                        </div>
                    ))}
                </div>

                <Link
                    href={`/contact?product=${encodeURIComponent(title)}`}
                    className="inline-flex items-center justify-center gap-2 bg-brand-green-500 hover:bg-brand-green-400 text-white px-5 py-3 rounded-lg font-semibold transition-all hover:shadow-md active:scale-95"
                >
                    <ShoppingCart className="w-4 h-4" />
                    Get Price and Availability
                </Link>
            </div>
        </div>
    );
}
