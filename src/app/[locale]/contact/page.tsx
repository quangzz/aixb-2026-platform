import React from "react";
import { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { ContactInfo } from "@/components/features/contact/ContactInfo";
import { ContactForm } from "@/components/features/contact/ContactForm";
import { FAQSection } from "@/components/features/contact/FAQSection";

export const metadata: Metadata = {
  title: "Liên Hệ & Đăng Ký Tư Vấn | DeepB AIX Academy",
  description: "Đăng ký nhận tư vấn miễn phí về giải pháp Agentic AI cho doanh nghiệp. Liên hệ chuyên gia AIX để được hỗ trợ ngay.",
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container relative mx-auto px-6 z-10 text-center max-w-3xl">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Liên hệ & Đăng ký</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Kết nối với <span className="text-primary">chuyên gia AIX</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Điền thông tin để nhận buổi tư vấn chiến lược AI miễn phí. Đội ngũ chuyên gia sẽ phân tích sơ bộ và đề xuất lộ trình phù hợp cho doanh nghiệp của bạn.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
           {/* Cột trái - Thông tin (2/5) */}
           <div className="lg:col-span-2">
             <ContactInfo />
           </div>
           
           {/* Cột phải - Form đăng ký (3/5) */}
           <div className="lg:col-span-3">
             <ContactForm />
           </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </main>
  );
}
