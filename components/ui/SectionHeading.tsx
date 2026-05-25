import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    label?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
    labelClassName?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

export default function SectionHeading({
    label,
    title,
    subtitle,
    centered = true,
    light = false,
    labelClassName,
    titleClassName,
    subtitleClassName,
}: SectionHeadingProps) {
    return (
        <div className={cn('mb-8 md:mb-12', centered && 'text-center')}>
            {label && (
                <span className={cn(
                    'inline-block text-brand-green-500 font-semibold text-sm uppercase tracking-widest mb-3',
                    labelClassName
                )}>
                    {label}
                </span>
            )}
            <h2 className={cn(
                'text-3xl md:text-4xl font-bold mb-4 leading-tight',
                light ? 'text-white' : 'text-gray-900',
                titleClassName
            )}>
                {title}
            </h2>
            {subtitle && (
                <p className={cn(
                    'text-lg max-w-2xl leading-relaxed',
                    centered && 'mx-auto',
                    light ? 'text-blue-100' : 'text-gray-600',
                    subtitleClassName
                )}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
