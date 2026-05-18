import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
}

export default function ServiceCard({ title, description, Icon, href }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-zinc-50 p-8 ring-1 ring-zinc-200 hover:ring-blue-600 transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">{title}</h3>
      <p className="mt-2 flex-auto text-base leading-7 text-gray-600">
        {description}
      </p>
      <p className="mt-6">
        <Link href={href} className="text-sm font-semibold leading-6 text-blue-600">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </p>
    </div>
  );
}
