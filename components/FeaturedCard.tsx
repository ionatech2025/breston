import Link from 'next/link';
import Image from 'next/image';

interface FeaturedCardProps {
  type: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function FeaturedCard({ type, title, description, image, href }: FeaturedCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200 hover:ring-blue-600 transition-colors">
      <div className="relative h-48 w-full bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-x-2">
          <span className="inline-flex items-center rounded-full bg-blue-600/10 px-2.5 py-0.5 text-xs font-medium text-blue-600">
            {type}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">{title}</h3>
        <p className="mt-2 flex-auto text-base leading-7 text-gray-600">
          {description}
        </p>
        <p className="mt-6">
          <Link href={href} className="text-sm font-semibold leading-6 text-blue-600">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
