import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  Icon: LucideIcon;
}

export default function IndustryCard({ name, Icon }: IndustryCardProps) {
  return (
    <div className="flex items-center gap-x-4 rounded-xl bg-white p-6 ring-1 ring-zinc-200 hover:ring-blue-600 transition-colors cursor-default">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="text-base font-semibold leading-7 text-gray-900">{name}</div>
    </div>
  );
}
