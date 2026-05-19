import { Phone, Mail, MapPin, Clock, MessageCircle, TriangleAlert as AlertTriangle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from './ContactForm';
import { BRAND } from '@/lib/constants';

export const metadata = {
    title: 'Contact Us | Breston Technologies Limited',
    description: 'Get in touch with Breston Technologies Limited for gas supply, cylinder hire, pipeline installation, or technical support.',
};

const CONTACT_CARDS = [
    {
        icon: Phone,
        title: 'Phone',
        lines: [BRAND.phone1, BRAND.phone2],
        href: `tel:${BRAND.phone1}`,
        color: 'text-brand-blue-500',
        bg: 'bg-brand-blue-50',
    },
    {
        icon: Mail,
        title: 'Email',
        lines: [BRAND.email],
        href: `mailto:${BRAND.email}`,
        color: 'text-brand-green-500',
        bg: 'bg-brand-green-50',
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        lines: [BRAND.whatsapp],
        href: `https://wa.me/256777014310`,
        color: 'text-teal-500',
        bg: 'bg-teal-50',
    },
    {
        icon: MapPin,
        title: 'Location',
        lines: ['Gayaza - Kampala Road', 'Kanyanya, Kampala, Uganda'],
        href: 'https://maps.google.com/?q=Kanyanya+Kampala+Uganda',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
    },
];

export default function ContactPage() {
    return (
        <main className="pt-[88px]">
            {/* Hero */}
            <section className="bg-gradient-to-r from-brand-blue-500 to-brand-blue-800 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block text-brand-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto">
                        Reach out for product inquiries, quotations, technical consultation, installation services, or any support you need.
                    </p>
                </div>
            </section>

            {/* Contact cards */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {CONTACT_CARDS.map(({ icon: Icon, title, lines, href, color, bg }) => (
                            <a
                                key={title}
                                href={href}
                                target={title === 'Location' || title === 'WhatsApp' ? '_blank' : undefined}
                                rel={title === 'Location' || title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-brand-blue-200 hover:shadow-lg transition-all group"
                            >
                                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`w-6 h-6 ${color}`} />
                                </div>
                                <div className="font-semibold text-gray-900 mb-2">{title}</div>
                                {lines.map((line) => (
                                    <div key={line} className="text-sm text-gray-600">{line}</div>
                                ))}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + info */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-5 gap-10">
                        {/* Form */}
                        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                            <p className="text-gray-600 mb-7">Fill in the form and our team will respond promptly.</p>
                            <ContactForm />
                        </div>

                        {/* Info sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Working hours */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-blue-50 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-brand-blue-500" />
                                    </div>
                                    <h3 className="font-bold text-gray-900">Working Hours</h3>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Monday – Friday</span>
                                        <span className="font-medium text-gray-900">8:30 AM – 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Saturday</span>
                                        <span className="font-medium text-gray-900">8:30 AM – 3:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sunday &amp; Holidays</span>
                                        <span className="text-gray-400">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency support */}
                            <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Emergency Support</h3>
                                        <p className="text-sm text-gray-600">
                                            For urgent medical gas supply or emergency support requests, contact us directly by phone.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={`tel:${BRAND.phone1}`}
                                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors w-full mt-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    Emergency Line: {BRAND.phone1}
                                </a>
                            </div>

                            {/* Quick services */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                <h3 className="font-bold text-gray-900 mb-4">Quick Service Reference</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {[
                                        'Medical gas supply',
                                        'Industrial gas supply',
                                        'Gas cylinders and accessories',
                                        'Gas pipeline systems',
                                        'Cylinder delivery services',
                                        'Technical support and maintenance',
                                    ].map((s) => (
                                        <li key={s} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green-500 shrink-0" />
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="h-96 bg-gray-200 relative overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7486!2d32.5649!3d0.3791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1234abcdef%3A0x1234567890abcdef!2sKanyanya%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1620000000000!5m2!1sen!2sug"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Breston Technologies Location"
                />
            </section>
        </main>
    );
}
