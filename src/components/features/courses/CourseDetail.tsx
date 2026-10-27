"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Course } from "@/data/courses";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Clock, Users, ShieldAlert, Star, Quote, ChevronRight, FileText } from "lucide-react";
import { CheckoutModal } from "@/components/features/checkout/CheckoutModal";

export function CourseDetail({ course }: { course: Course }) {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-muted border-b relative">
        <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-2 mb-4">
              <Badge variant="outline" className="border-primary/50 text-primary">{course.type}</Badge>
              <Badge variant="secondary">{course.industry}</Badge>
              {course.popular && <Badge className="bg-destructive text-destructive-foreground border-transparent">Tham Gia Nhiều</Badge>}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 line-clamp-3">{course.fullDesc}</p>
            
            <div className="flex flex-wrap gap-6 items-center text-sm font-medium">
              <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-md">
                <Star className="fill-amber-500" size={16} />
                <span>{course.rating} ({course.reviewsCount} Đánh giá)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-muted-foreground" />
                <span>{course.audience}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
            <Image src={course.thumbnail} alt={course.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Cột Chi Tiết (Bên Trái) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Mục tiêu khóa học */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-primary" /> Bạn sẽ nhận được gì?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.objectives.map((obj, i) => (
                <div key={i} className="flex gap-3 items-start bg-muted/30 p-4 rounded-xl border">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nội dung môn học (Syllabus) */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="text-primary" /> Lộ trình chi tiết
            </h2>
            <div className="space-y-3">
              {course.topics.map((topic, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background border rounded-lg hover:border-primary/30 transition-colors">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-medium text-sm md:text-base">{topic.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-2 sm:mt-0 font-medium whitespace-nowrap block">
                    {topic.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          {course.testimonials.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Quote className="text-primary" /> Đánh giá từ Học viên
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.testimonials.map((t, i) => (
                  <Card key={i} className="bg-primary/5 border-none shadow-none">
                    <CardContent className="pt-6">
                      <Quote size={24} className="text-primary/20 mb-4" />
                      <p className="italic text-sm text-foreground/80 mb-6 line-clamp-4">&quot;{t.content}&quot;</p>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">{t.name}</span>
                        <span className="text-xs text-muted-foreground">{t.role}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Cột Thông Tin Đăng Ký (Sidebar Phải) */}
        <div className="space-y-6">
          
          {/* Card Đăng ký Sticky */}
          <Card className="sticky top-24 border-primary/20 shadow-xl overflow-hidden">
            <div className="bg-primary/5 p-6 border-b border-primary/10 text-center">
              <p className="text-muted-foreground text-sm uppercase font-semibold tracking-wider mb-2">Ngân sách đầu tư</p>
              <h3 className="text-3xl font-bold text-primary">{course.price}</h3>
              <p className="text-xs text-muted-foreground mt-2">Chưa bao gồm thuế VAT (Nếu có)</p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-muted-foreground">Lịch Khai Giảng:</span>
                <span className="font-medium text-right">{course.schedule}</span>
              </div>
              <div className="flex justify-between text-sm py-2 border-b">
                <span className="text-muted-foreground">Nhóm Phù Hợp:</span>
                <span className="font-medium text-right max-w-[150px]">{course.targetAudience.join(", ")}</span>
              </div>
              
              <Button 
                onClick={() => setCheckoutOpen(true)} 
                size="lg" 
                className="w-full mt-6 shadow-lg hover:shadow-primary/20 transition-all font-bold"
              >
                Ghi Danh Lớp Này Ngay
              </Button>
              <p className="text-[10px] text-center text-muted-foreground mt-2">Nhận bộ Quà tặng Starter Kit AI miễn phí khi thanh toán sớm!</p>
            </CardContent>
          </Card>

          {/* Card Giảng Viên */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chuyên Gia Dẫn Dắt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border">
                  <Image src={course.instructor.avatar} alt={course.instructor.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{course.instructor.name}</h4>
                  <p className="text-xs text-primary font-medium">{course.instructor.role}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground bg-muted p-3 rounded-lg leading-relaxed">
                {course.instructor.experience}
              </p>
            </CardContent>
          </Card>

          {/* Điều kiện Tiên quyết */}
          <Card className="bg-destructive/5 border-destructive/20 line-clamp-none">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <ShieldAlert size={18} className="text-destructive" />
                <CardTitle className="text-lg text-destructive">Điều Kiện Tiên Quyết</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {course.prerequisites.map((req, i) => (
                  <li key={i} className="text-xs text-destructive/80 flex items-start gap-2">
                    <ChevronRight size={14} className="mt-0.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Tích hợp Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
        course={{ id: Number(course.id.replace('c','')), title: course.title }} 
      />
    </div>
  );
}
