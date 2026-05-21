import { Shield, Star, ThumbsUp, Users, Zap, RefreshCw } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const CORE_VALUES = [
  { icon: Shield, title: 'Safety', description: 'Prioritizing health, safety, and well-being in every operation.' },
  { icon: Star, title: 'Integrity', description: 'Honest, ethical, and transparent business conduct.' },
  { icon: ThumbsUp, title: 'Reliability', description: 'Consistent product quality and dependable service delivery.' },
  { icon: Users, title: 'Customer Focus', description: 'Understanding and delivering on customer needs.' },
  { icon: Zap, title: 'Excellence', description: 'Operational excellence through continuous improvement.' },
  { icon: RefreshCw, title: 'Innovation', description: 'Embracing modern technologies for better efficiency.' },
];

export default function CommitmentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue-800 to-brand-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          label="Our Commitment"
          title="Safety & Quality at Every Step"
          subtitle="We follow strict safety procedures and industry best practices in gas handling, storage, transportation, and service delivery."
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-green-500/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-green-400" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
              <p className="text-brand-blue-200 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
