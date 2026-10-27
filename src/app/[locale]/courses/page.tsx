import React from "react";
import { Metadata } from "next";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CourseList } from "@/components/features/courses/CourseList";
import { CourseCompare } from "@/components/features/courses/CourseCompare";
import { getCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Chương Trình Đào Tạo AI | DeepB - AIX Academy",
  description: "Khám phá các khóa học và dịch vụ tư vấn AI hàng đầu dành cho C-Suite, IT Manager và Doanh nghiệp vừa và nhỏ. Học triển khai Agentic AI thực chiến.",
  keywords: "ai courses, agentic ai training, c-suite ai, prompt engineering, RAG systems, llm fine-tuning",
};

export default async function CoursesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const courses = getCourses(locale);
  const t = await getTranslations('CoursesPage');
  
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header Section */}
      <section className="bg-muted py-20 border-b relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] top-0 left-0" />
        
        <div className="container relative mx-auto px-6 z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {t('Hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('Hero.description')}
          </p>
        </div>
      </section>

      {/* Main Course Listing */}
      <CourseList courses={courses} />

      {/* Comparison Table */}
      <CourseCompare courses={courses} />
    </main>
  );
}
