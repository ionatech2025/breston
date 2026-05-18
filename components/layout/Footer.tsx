import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Twitter } from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/lib/constants';

const Facebook = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const SOCIAL_LINKS = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'X (Twitter)', href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-brand-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-5">
                            <div className="bg-white rounded-lg p-1.5">
                                <Image
                                    src="/Breston_Technologies_logo.jpg"
                                    alt="Breston Technologies"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white leading-tight">Breston</div>
                                <div className="text-brand-green-400 font-semibold text-xs tracking-widest uppercase">Technologies</div>
                            </div>
                        </Link>
                        <p className="text-brand-blue-200 text-sm leading-relaxed mb-6">
                            Leading provider of medical and industrial gas solutions, serving healthcare, manufacturing, and critical sectors across Uganda.
                        </p>
                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg bg-brand-blue-700 hover:bg-brand-green-500 flex items-center justify-center transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-blue-200 hover:text-brand-green-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Our Services</h3>
                        <ul className="space-y-3 text-sm text-brand-blue-200">
                            {['Medical Gas Supply', 'Industrial Gas Supply', 'Cylinder Hire & Refilling', 'Gas Pipeline Installation', 'Equipment Maintenance', 'Technical Consultation', 'Delivery & Logistics'].map((s) => (
                                <li key={s}>
                                    <Link href="/services" className="hover:text-brand-green-400 transition-colors">{s}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-brand-blue-200">
                            <li className="flex gap-3">
                                <MapPin className="w-4 h-4 text-brand-green-400 shrink-0 mt-0.5" />
                                <span>{BRAND.address}</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-4 h-4 text-brand-green-400 shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <a href={`tel:${BRAND.phone1}`} className="block hover:text-brand-green-400 transition-colors">{BRAND.phone1}</a>
                                    <a href={`tel:${BRAND.phone2}`} className="block hover:text-brand-green-400 transition-colors">{BRAND.phone2}</a>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-4 h-4 text-brand-green-400 shrink-0 mt-0.5" />
                                <a href={`mailto:${BRAND.email}`} className="hover:text-brand-green-400 transition-colors">{BRAND.email}</a>
                            </li>
                            <li className="flex gap-3">
                                <Clock className="w-4 h-4 text-brand-green-400 shrink-0 mt-0.5" />
                                <div className="space-y-1 text-xs">
                                    <div>Mon – Fri: 8:30 AM – 6:00 PM</div>
                                    <div>Saturday: 8:30 AM – 3:00 PM</div>
                                    <div className="text-brand-blue-300">Sunday & Holidays: Closed</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-brand-blue-700">
                <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-brand-blue-300">
                    <p>&copy; {new Date().getFullYear()} Breston Technologies Limited. All rights reserved.</p>
                    <p className="text-xs">{BRAND.website}</p>
                </div>
            </div>
        </footer>
    );
}
