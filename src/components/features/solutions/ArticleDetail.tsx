"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/solutions";
import { COURSES } from "@/data/courses";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ArrowRight, Share2, BookmarkPlus } from "lucide-react";

export function ArticleDetail({ article }: { article: Article }) {
  // Tìm khóa học liên quan dựa trên Array slug
  const relatedCourses = COURSES.filter(c => article.relatedCourseSlugs.includes(c.slug));

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Nút quay lại */}
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
          <ChevronLeft size={16} className="mr-1" /> Trở về danh sách Blog
        </Link>

        {/* Hero Bài viết */}
        <header className="mb-12">
          <div className="flex gap-2 mb-6">
            <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20 transition-colors uppercase tracking-widest">{article.category}</Badge>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-8">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 border-y py-6">
            <div className="flex items-center gap-4">
              <Image src={article.author.avatar} alt={article.author.name} width={50} height={50} className="rounded-full border border-border" />
              <div>
                <p className="font-bold text-foreground">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">{article.author.role}</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-center text-sm text-muted-foreground">
              <div className="flex flex-col sm:items-end">
                <span><span className="font-medium text-foreground">Xuất bản:</span> {article.publishedAt}</span>
                <span><span className="font-medium text-foreground">Đọc lúc rảnh:</span> {article.readTime}</span>
              </div>
              <div className="flex gap-2 border-l pl-6">
                <Button variant="ghost" size="icon" className="rounded-full text-foreground hover:bg-muted"><Share2 size={18} /></Button>
                <Button variant="ghost" size="icon" className="rounded-full text-foreground hover:bg-muted"><BookmarkPlus size={18} /></Button>
              </div>
            </div>
          </div>
        </header>

        {/* Ảnh Cover Hình Nền */}
        <div className="relative w-full aspect-[2/1] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm mb-16 border bg-muted">
          <Image src={article.thumbnail} alt={article.title} fill className="object-cover" priority />
        </div>

        {/* Nội dung kết hợp Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Cột HTML Content */}
          <article className="lg:w-2/3 max-w-none
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-foreground
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-foreground
            [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-foreground/90
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3 [&_ul]:text-foreground/90
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-3 [&_ol]:text-foreground/90
            [&_li]:leading-relaxed
            [&_strong]:font-bold [&_strong]:text-foreground
            [&_img]:rounded-2xl [&_img]:shadow-xl [&_img]:my-10 [&_img]:border [&_img]:w-full
            [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-8
          ">
            <div dangerouslySetInnerHTML={{ __html: article.contentHTML }} />
          </article>

          {/* Cột Sidebar Sticky Liên kết Đăng ký */}
          <aside className="lg:w-1/3 space-y-8">
            
            <div className="sticky top-24">
              <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-muted-foreground border-b pb-4">Tài Nguyên Đề Xuất</h3>
              
              <div className="space-y-6">
                {relatedCourses.map(c => (
                  <Card key={c.id} className="overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="relative h-32 w-full bg-muted">
                      <Image src={c.thumbnail} alt={c.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="outline" className="text-[10px] mb-2">{c.audience}</Badge>
                      <h4 className="font-bold text-base leading-tight mb-2 group-hover:text-primary transition-colors">{c.title}</h4>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-primary font-bold text-sm">{c.price}</span>
                        <Link href={`/courses/${c.slug}`}>
                          <Button size="sm" variant="secondary" className="gap-2 rounded-full border border-primary/20">
                            Khóa Học <ArrowRight size={14} />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {relatedCourses.length === 0 && (
                  <div className="p-6 bg-muted/30 rounded-xl border border-dashed text-center">
                    <p className="text-sm text-muted-foreground">Hiện chưa có khóa học đào tạo đối ứng cho chủ đề này.</p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold mb-2">Bạn cần tư vấn 1-1?</h4>
                <p className="text-sm text-muted-foreground mb-4">Các chuyên gia của chúng tôi luôn sẵn sàng tháo gỡ điểm nghẽn doanh nghiệp.</p>
                <Link href="/#consulting-form">
                  <Button className="w-full">Yêu cầu Đánh Giá Free</Button>
                </Link>
              </div>

            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}
