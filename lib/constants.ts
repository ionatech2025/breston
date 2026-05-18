export const BRAND = {
    name: 'Breston Technologies Limited',
    shortName: 'Breston Technologies',
    phone1: '+256-704 723296',
    phone2: '+256-777 014310',
    whatsapp: '+256-777 014310',
    email: 'info@brestontech.com',
    careersEmail: 'info@brestontechnologies.com',
    website: 'www.brestontech.com',
    address: 'Gayaza - Kampala Road, Kanyanya, Kampala, Uganda',
    hours: {
        weekdays: 'Monday – Friday: 8:30 AM – 6:00 PM',
        saturday: 'Saturday: 8:30 AM – 3:00 PM',
        sunday: 'Sunday & Public Holidays: Closed',
    },
} as const;

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Our Products', href: '/products' },
    { label: 'Our Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
] as const;

export const PRODUCT_CATEGORIES = [
    { label: 'Ultra/High Purity Gases', href: '/products#purity' },
    { label: 'Industrial Grade Gases', href: '/products#industrial' },
    { label: 'Medical Grade Gases', href: '/products#medical' },
    { label: 'Specialty Gases', href: '/products#specialty' },
    { label: 'Gas Cylinders', href: '/products#cylinders' },
    { label: 'Gas Accessories', href: '/products#accessories' },
    { label: 'Welding Accessories', href: '/products#welding' },
    { label: 'Dry Ice', href: '/products#dryice' },
] as const;
