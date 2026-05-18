import Link from "next/link";

export default function Home() {
  return (
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
  );
}

