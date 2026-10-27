import React from "react";
import { Metadata } from "next";
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIX Quick Scan™ | AIxB Academy",
  description: "Khảo sát nhanh mức độ sẵn sàng AI của doanh nghiệp.",
};

export default async function AIXQuickScanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="min-h-screen pt-32 pb-24 bg-background flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">AIX Quick Scan™</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Đánh giá mức độ trưởng thành AI của tổ chức bạn trong 5 phút. Công cụ này sẽ giúp bạn nhận diện chính xác điểm nghẽn và cơ hội bứt phá.
        </p>
        
        <div className="bg-secondary/30 border border-white/5 p-12 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold mb-4">Hệ thống đang được nâng cấp</h2>
          <p className="text-muted-foreground mb-8">Chúng tôi đang hoàn thiện bài kiểm tra để mang lại kết quả chuẩn xác nhất dựa trên 5B Framework.</p>
          <button className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-colors">
            Nhận Thông Báo Khi Ra Mắt
          </button>
        </div>

        <Link href="/" className="inline-flex items-center text-primary font-bold hover:underline">
          Trở về Trang chủ <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </main>
  );
}
