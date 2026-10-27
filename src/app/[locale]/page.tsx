import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from "@/components/features/home/HeroSection";
import { ServicesOverview } from "@/components/features/home/ServicesOverview";
import { SkillsSolutionsSection } from "@/components/features/home/SkillsSolutionsSection";
import { VideoIntroSection } from "@/components/features/home/VideoIntroSection";
import { TrustedPartnerSection } from "@/components/features/home/TrustedPartnerSection";
import { ConsultingLeadForm } from "@/components/features/home/ConsultingLeadForm";
import { ResourcesSection } from "@/components/features/home/ResourcesSection";
import { FAQSection } from "@/components/features/home/FAQSection";
import { FinalCTA } from "@/components/features/home/FinalCTA";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: Đào tạo - Tư vấn - Huấn luyện đồng hành */}
      <ServicesOverview />

      {/* Section 3: Kỹ năng và Giải pháp */}
      <SkillsSolutionsSection />

      {/* Section 4: Video giới thiệu chương trình huấn luyện */}
      <VideoIntroSection />

      {/* Section 5: Ý kiến chuyên gia (Social Proof) */}
      <TrustedPartnerSection />

      {/* Section 6: CTA - Đăng ký (Form tìm hiểu giải pháp) */}
      <ConsultingLeadForm />

      {/* Section 7: Tài nguyên liên quan và thông tin hoạt động của AIxB */}
      <ResourcesSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Section 8: CTA Trò chuyện với chúng tôi */}
      <FinalCTA />
    </div>
  );
}
