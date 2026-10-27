import React from "react";
import { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { SolutionsList } from "@/components/features/solutions/SolutionsList";
import { getArticles } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Blog & Insights | AI Thought Leadership - DeepB",
  description: "Trang thông tin chuyên sâu (Insights) từ các chuyên gia hàng đầu DeepB Academy về cách thiết kế lộ trình (Strategy), ứng dụng trí tuệ nhân tạo (GenAI, Agentic AI) vào các lĩnh vực bán lẻ, y tế, tài chính.",
};

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const articles = getArticles(locale);

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Header Báo cáo */}
      <section className="bg-gradient-to-b from-primary/10 to-background pt-20 pb-10 border-b">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-4">DeepB Academy Insights</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Trung Tâm Kiến Thức B2B
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed px-4">
            Khám phá trọn bộ thư viện Case-Studies, kỹ thuật tinh chỉnh LLM và Chiến lược vượt qua rào cản AI Ethic dành riêng cho người dẫn dắt (Leadership).
          </p>
        </div>
      </section>

      {/* Main List Rendering */}
      <SolutionsList articles={articles} />
    </main>
  );
}
