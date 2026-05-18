'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAV_LINKS, PRODUCT_CATEGORIES, BRAND } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setProductsOpen(false);
    }, [pathname]);

    return (
        <header className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        )}>
            {/* Top bar */}
            <div className="bg-brand-blue-500 text-white text-sm py-1.5 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <span className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5" />
                        <a href={`tel:${BRAND.phone1}`} className="hover:text-brand-green-300 transition-colors">{BRAND.phone1}</a>
                        <span className="opacity-50">|</span>
                        <a href={`tel:${BRAND.phone2}`} className="hover:text-brand-green-300 transition-colors">{BRAND.phone2}</a>
                    </span>
                    <a href={`mailto:${BRAND.email}`} className="hover:text-brand-green-300 transition-colors">{BRAND.email}</a>
                </div>
            </div>

            {/* Main nav */}
            <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <Image
                        src="/Breston_Technologies_logo.jpg"
                        alt="Breston Technologies Limited"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                    <div className="hidden sm:block">
                        <div className="text-brand-blue-500 font-bold text-lg leading-tight">Breston</div>
                        <div className="text-brand-green-500 font-semibold text-xs tracking-widest uppercase">Technologies</div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.map((link) =>
                        link.label === 'Our Products' ? (
                            <li key={link.href} className="relative group">
                                <button
                                    className={cn(
                                        'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                        pathname.startsWith('/products')
                                            ? 'text-brand-blue-500 bg-brand-blue-50'
                                            : 'text-gray-700 hover:text-brand-blue-500 hover:bg-gray-50'
                                    )}
                                    onMouseEnter={() => setProductsOpen(true)}
                                    onMouseLeave={() => setProductsOpen(false)}
                                >
                                    {link.label}
                                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                                </button>
                                <div
                                    className="absolute top-full left-0 pt-2 hidden group-hover:block"
                                    onMouseEnter={() => setProductsOpen(true)}
                                    onMouseLeave={() => setProductsOpen(false)}
                                >
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-64">
                                        {PRODUCT_CATEGORIES.map((cat) => (
                                            <Link
                                                key={cat.href}
                                                href={cat.href}
                                                className="block px-4 py-2.5 text-sm text-gray-700 hover:text-brand-blue-500 hover:bg-brand-blue-50 transition-colors"
                                            >
                                                {cat.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ) : (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                        pathname === link.href
                                            ? 'text-brand-blue-500 bg-brand-blue-50'
                                            : 'text-gray-700 hover:text-brand-blue-500 hover:bg-gray-50'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                <div className="hidden lg:block">
                    <Link
                        href="/contact"
                        className="bg-brand-green-500 hover:bg-brand-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Request a Quote
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                        {NAV_LINKS.map((link) =>
                            link.label === 'Our Products' ? (
                                <div key={link.href}>
                                    <button
                                        className="flex items-center justify-between w-full px-3 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                                        onClick={() => setProductsOpen(!productsOpen)}
                                    >
                                        {link.label}
                                        <ChevronDown className={cn('w-4 h-4 transition-transform', productsOpen && 'rotate-180')} />
                                    </button>
                                    {productsOpen && (
                                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-blue-100 pl-4">
                                            {PRODUCT_CATEGORIES.map((cat) => (
                                                <Link
                                                    key={cat.href}
                                                    href={cat.href}
                                                    className="block py-2 text-sm text-gray-600 hover:text-brand-blue-500"
                                                >
                                                    {cat.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                                        pathname === link.href
                                            ? 'text-brand-blue-500 bg-brand-blue-50'
                                            : 'text-gray-700 hover:text-brand-blue-500 hover:bg-gray-50'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="block bg-brand-green-500 hover:bg-brand-green-600 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center transition-colors"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
