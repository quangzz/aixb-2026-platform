import React from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from 'next-intl/server';
import { COURSES, getCourseBySlug } from "@/data/courses";
import { CourseDetail } from "@/components/features/courses/CourseDetail";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params;
  const course = getCourseBySlug(slug, locale);

  if (!course) {
    return { title: "Không tìm thấy nội dung | DeepB AIX" };
  }

  return {
    title: `${course.title} | DeepB AIX Academy`,
    description: course.shortDesc,
    openGraph: {
      title: course.title,
      description: course.shortDesc,
      images: [course.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const locales = ['vi', 'en'];
  return locales.flatMap((locale) =>
    COURSES.map((course) => ({
      locale,
      slug: course.slug,
    }))
  );
}

export default async function CoursePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const course = getCourseBySlug(slug, locale);

  if (!course) {
    notFound();
  }

  return <CourseDetail course={course} />;
}
