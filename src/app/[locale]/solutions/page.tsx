import React from "react";
import { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { ConsultingHero } from "@/components/features/consulting/ConsultingHero";
import { ServicesGrid } from "@/components/features/consulting/ServicesGrid";
import { ProcessTimeline } from "@/components/features/consulting/ProcessTimeline";
import { CaseStudies } from "@/components/features/consulting/CaseStudies";

export const metadata: Metadata = {
  title: "Dịch Vụ Tư Vấn Chuyển Đổi AI | AIxB",
  description: "Trang bị sức mạnh Agentic AI cho Doanh nghiệp với Hệ điều hành AIxOS, bảo mật, và ROI đo lường được.",
};

export default async function ConsultingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="min-h-screen">
      <ConsultingHero />
      <ServicesGrid />
      <ProcessTimeline />
      <CaseStudies />
    </main>
  );
}
