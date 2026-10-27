import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/features/services/quick-scan/HeroSection';
import { TargetAudience } from '@/components/features/services/quick-scan/TargetAudience';
import { Deliverables } from '@/components/features/services/quick-scan/Deliverables';
import { Timeline } from '@/components/features/services/quick-scan/Timeline';
import { Pricing } from '@/components/features/services/quick-scan/Pricing';
import { FAQ } from '@/components/features/services/quick-scan/FAQ';
import { CTA } from '@/components/features/services/quick-scan/CTA';

export default async function QuickScanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroSection />
      <TargetAudience />
      <Deliverables />
      <Timeline />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
