'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProductCategory } from '@/types';

interface CategoryNavProps {
    categories: ProductCategory[];
    currentCategoryId: string;
}

export default function CategoryNav({ categories, currentCategoryId }: CategoryNavProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const checkScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            // Show left arrow if we are scrolled to the right (i.e. scrollLeft > 5)
            setShowLeftArrow(scrollLeft > 5);
            // Show right arrow if the content extends beyond the visible width
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            checkScroll();
            container.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll, { passive: true });

            // Find the active element and scroll it into view
            const activeElement = container.querySelector('[data-active="true"]');
            if (activeElement) {
                // We use setTimeout to ensure page has rendered and sizes are stable
                const timer = setTimeout(() => {
                    activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    checkScroll();
                }, 100);
                return () => {
                    clearTimeout(timer);
                    container.removeEventListener('scroll', checkScroll);
                    window.removeEventListener('resize', checkScroll);
                };
            }
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, [currentCategoryId]);

    // Force recheck on mount and when DOM might have finished layout/loading fonts
    useEffect(() => {
        const timer = setTimeout(checkScroll, 500);
        return () => clearTimeout(timer);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth * 0.6;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative max-w-7xl mx-auto px-4">
            <div className="relative flex items-center">
                {/* Left Arrow with white gradient background */}
                <div
                    className={cn(
                        "absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/95 to-transparent flex items-center z-10 transition-all duration-300 pointer-events-none",
                        showLeftArrow ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    )}
                >
                    <button
                        onClick={() => scroll('left')}
                        className="pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-brand-blue-500 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-1 overflow-x-auto py-3 scrollbar-hide w-full scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/products/${cat.id}`}
                            data-active={currentCategoryId === cat.id}
                            className={cn(
                                "shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                                currentCategoryId === cat.id
                                    ? "text-brand-blue-500 bg-brand-blue-50 font-semibold"
                                    : "text-gray-600 hover:text-brand-blue-500 hover:bg-brand-blue-50"
                            )}
                        >
                            {cat.title}
                        </Link>
                    ))}
                </div>

                {/* Right Arrow with white gradient background */}
                <div
                    className={cn(
                        "absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/95 to-transparent flex items-center justify-end z-10 transition-all duration-300 pointer-events-none",
                        showRightArrow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    )}
                >
                    <button
                        onClick={() => scroll('right')}
                        className="pointer-events-auto flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-brand-blue-500 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
