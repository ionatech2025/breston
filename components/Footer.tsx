import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <span className="font-bold text-xl text-gray-900">Breston</span>
            <p className="mt-4 text-sm text-gray-600">
              Trusted provider of medical and industrial gas solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/products" className="text-sm text-gray-600 hover:text-blue-600">Our Products</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-blue-600">Our Services</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-600 hover:text-blue-600">Careers</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">Gayaza - Kampala Road, Kanyanya</li>
              <li className="text-sm text-gray-600">Kampala, Uganda</li>
              <li className="text-sm text-gray-600">+256-704 723296</li>
              <li className="text-sm text-gray-600">+256-777 014310</li>
              <li><a href="mailto:info@brestontech.com" className="text-sm text-gray-600 hover:text-blue-600">info@brestontech.com</a></li>
            </ul>
          </div>

          {/* Column 4: Working Hours */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Working Hours</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">Mon – Fri: 8:30 AM – 6:00 PM</li>
              <li className="text-sm text-gray-600">Saturday: 8:30 AM – 3:00 PM</li>
              <li className="text-sm text-gray-600">Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Breston Technologies Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
