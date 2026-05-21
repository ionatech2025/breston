import HeroCarousel from '@/components/HeroCarousel';
import AboutIntro from '@/components/home/AboutIntro';
import ServicesSection from '@/components/home/ServicesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import CommitmentSection from '@/components/home/CommitmentSection';
import CTABanner from '@/components/ui/CTABanner';

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <AboutIntro />
      <ServicesSection />
      <IndustriesSection />
      <CommitmentSection />
      <CTABanner />
    </main>
  );
}
