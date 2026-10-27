import React from "react";
import { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead by Agentic AI | AIxB Academy",
  description: "Khóa huấn luyện cốt lõi: Trở thành The Reinventor.",
};

export default async function LeadByAgenticAIPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-sm mb-6">
          Khóa Huấn Luyện Cốt Lõi
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Lead by Agentic AI</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Hành trình chuyển hóa tư duy từ một nhà quản lý truyền thống sang "The Reinventor" - người dẫn dắt kỷ nguyên Trí tuệ tự chủ.
        </p>
        
        <div className="bg-secondary/30 border border-white/5 p-12 rounded-3xl mb-12 text-left">
          <h2 className="text-2xl font-bold mb-6 text-center">Nội dung sắp ra mắt</h2>
          <ul className="space-y-4 mb-8 max-w-lg mx-auto text-muted-foreground">
            <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Hiểu sâu về Agentic AI và ứng dụng vào vận hành.</li>
            <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Thay đổi mô hình kinh doanh theo hướng AI-First.</li>
            <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> Thực hành xây dựng chiến lược "Sovereign Intelligence".</li>
          </ul>
          <div className="text-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors">
              Đăng Ký Nhận Tư Vấn
            </button>
          </div>
        </div>

        <Link href="/courses" className="inline-flex items-center text-primary font-bold hover:underline">
          Khám phá các khóa học khác <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </main>
  );
}
