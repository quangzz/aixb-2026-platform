import React from "react";
import { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { AboutStory } from "@/components/features/about/AboutStory";
import { CoreValues } from "@/components/features/about/CoreValues";
import { USPSection } from "@/components/features/about/USPSection";
import { MethodologySection } from "@/components/features/about/MethodologySection";
import { TeamGrid } from "@/components/features/about/TeamGrid";
import { ResourcesSection } from "@/components/features/home/ResourcesSection";
import { FinalCTA } from "@/components/features/home/FinalCTA";

export const metadata: Metadata = {
  title: "Giới thiệu Học viện AIxB | Đào tạo & Tư vấn Chuyển đổi AI Tinh gọn",
  description: "Tìm hiểu về Học viện AIxB, Câu chuyện thương hiệu, Tầm nhìn, Sứ mệnh, 4 Giá trị cốt lõi, Phương pháp Lean AI 5B™ và Hội đồng chuyên gia uy tín.",
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Section 1 & 2: Giới thiệu & Câu chuyện thương hiệu */}
      <AboutStory />

      {/* Tầm nhìn, Sứ mệnh & 4 Giá trị cốt lõi */}
      <CoreValues />

      {/* Section 3: Sự khác biệt (USP) & 3 Lợi ích */}
      <USPSection />

      {/* Section 4: Mô hình, Phương pháp Lean AI 5B™ & Nền tảng LMS */}
      <MethodologySection />

      {/* Section 5: Hội đồng Học thuật & Chuyên gia */}
      <TeamGrid />

      {/* Section 6: Tài nguyên liên quan & Hoạt động */}
      <ResourcesSection />

      {/* Section 7 / CTA */}
      <FinalCTA />
    </main>
  );
}
