import Link from "next/link";
import { Stethoscope, Zap, RefreshCw, Wrench } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Medical Gases",
    description: "High-purity gases meeting strict medical standards for hospitals and clinics.",
    Icon: Stethoscope,
    href: "/products",
  },
  {
    title: "Industrial Gases",
    description: "Reliable supply for manufacturing, welding, cutting, and processing operations.",
    Icon: Zap,
    href: "/products",
  },
  {
    title: "Cylinder Services",
    description: "Flexible hire, safe refilling, and reliable exchange programs.",
    Icon: RefreshCw,
    href: "/services",
  },
  {
    title: "Technical Support",
    description: "Professional guidance, system installation, and maintenance services.",
    Icon: Wrench,
    href: "/services",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#0ea5e9] to-[#2563eb] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                  Welcome to Breston
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Healthcare and Industry with Reliable Gas Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Breston Technologies Limited provides safe, reliable, and high-quality medical and industrial gas products, accessories, and engineering solutions tailored to your needs.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                View Products <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brief Introduction Section */}
      <div className="bg-zinc-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Who We Are
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Bridging the gap between quality supply, technical expertise, and customer-focused service.
              </p>
            </div>
            <div className="text-lg leading-8 text-gray-600 space-y-6">
              <p>
                <strong>Breston Technologies Limited</strong> was established with the vision of becoming a trusted partner in the medical and industrial gas industry by providing dependable gas products, engineering solutions, and technical support services.
              </p>
              <p>
                Recognizing the growing demand for reliable medical and industrial gases, gas accessories, and engineering services, the company was founded to bridge the gap between quality supply, technical expertise, and customer-focused service delivery.
              </p>
              <p>
                Over time, we have continued to expand our capabilities to serve hospitals, laboratories, manufacturers, the oil & gas sector, welding and fabrication industries, research institutions, and commercial enterprises with reliable and efficient gas solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Key Service Highlights Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Service Highlights
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Reliable solutions for healthcare, industry, and specialized operations.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


