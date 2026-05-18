import type { ProductCategory } from '@/types';

interface ProductTableProps {
    category: ProductCategory;
}

export default function ProductTable({ category }: ProductTableProps) {
    return (
        <div id={category.id} className="scroll-mt-24">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
                <p className="text-gray-600 italic">{category.subtitle}</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-brand-blue-500 text-white">
                            {category.columns.map((col) => (
                                <th key={col} className="text-left px-4 py-3.5 font-semibold whitespace-nowrap first:rounded-tl-xl last:rounded-tr-xl">
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {category.rows.map((row, i) => (
                            <tr
                                key={i}
                                className={`border-t border-gray-100 transition-colors hover:bg-brand-blue-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                            >
                                {row.map((cell, j) => (
                                    <td key={j} className={`px-4 py-3 text-gray-700 align-top ${j === 0 ? 'font-semibold text-gray-900' : ''}`}>
                                        {typeof cell === 'string' && (cell.startsWith('/images/') || cell.startsWith('http')) ? (
                                            <img src={cell} alt="Product" className="w-12 h-12 object-contain rounded" />
                                        ) : (
                                            cell
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
