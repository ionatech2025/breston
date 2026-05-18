import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import IndustryCard from "../components/IndustryCard";
import { services, industries, safetyCommitments, featuredItems } from "../data/home";
import FeaturedCard from "../components/FeaturedCard";


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
      {/* Industries We Serve Section */}
      <div className="bg-zinc-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Providing reliable gas solutions across diverse sectors.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                Icon={industry.Icon}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Safety & Quality Commitment Section */}
      <div className="bg-slate-900 py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Safety & Quality Commitment
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Safety and quality are at the center of our operations. We follow strict safety procedures and industry best practices across all areas:
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {safetyCommitments.map((commitment) => (
              <div key={commitment} className="flex items-center gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="text-base font-semibold leading-7 text-white">{commitment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Featured Products & Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products & Services
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Explore our top solutions for medical and industrial needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {featuredItems.map((item) => (
              <FeaturedCard
                key={item.title}
                type={item.type}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom CTA Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to power your operations?
            <br />
            Get in touch with us today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-xs hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


