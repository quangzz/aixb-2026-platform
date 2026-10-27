import React from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from 'next-intl/server';
import { ARTICLES, getArticleBySlug } from "@/data/solutions";
import { ArticleDetail } from "@/components/features/solutions/ArticleDetail";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug, locale);

  if (!article) {
    return { title: "Không tìm thấy Insight | DeepB AIX" };
  }

  return {
    title: `${article.title} | DeepB B2B Insights`,
    description: article.excerpt,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.thumbnail],
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

// Xây dựng sẵn SSG (Static Site Generation) cho toàn bộ Blog list. Rất tốt cho SEO.
export async function generateStaticParams() {
  const locales = ['vi', 'en'];
  return locales.flatMap((locale) =>
    ARTICLES.map((article) => ({
      locale,
      slug: article.slug,
    }))
  );
}

export default async function InsightArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticleBySlug(slug, locale);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
