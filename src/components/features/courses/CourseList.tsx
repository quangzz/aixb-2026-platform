"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Course } from "@/data/courses";
import { CourseFilter } from "./CourseFilter";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Clock, Users, ArrowRight, Star, Tag } from "lucide-react";
import { motion } from "motion/react";
import { CheckoutModal } from "@/components/features/checkout/CheckoutModal";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  const t = useTranslations('CoursesPage.List');
  const [type, setType] = useState("All");
  const [audience, setAudience] = useState("All");
  const [industry, setIndustry] = useState("All");
  
  const [checkoutCourse, setCheckoutCourse] = useState<{id: number, title: string} | null>(null);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchType = type === "All" || course.type === type;
      const matchAudience = audience === "All" || course.audience === audience;
      const matchIndustry = industry === "All" || course.industry === industry;
      return matchType && matchAudience && matchIndustry;
    });
  }, [type, audience, industry]);

  const handleFilterChange = (t: string, a: string, i: string) => {
    setType(t);
    setAudience(a);
    setIndustry(i);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        
        {/* Lọc danh sách */}
        <CourseFilter 
          activeType={type} 
          activeAudience={audience} 
          activeIndustry={industry} 
          onFilterChange={handleFilterChange} 
        />
        
        {/* Báo cáo số lượng */}
        <div className="mb-8">
          <p className="text-muted-foreground">{t('showing')} <span className="font-bold text-foreground">{filteredCourses.length}</span> {t('courses_match')}</p>
        </div>

        {/* Danh sách Khóa học - Grid View */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col relative group overflow-hidden border transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                  
                  {/* Badge & Hình ảnh */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image src={course.thumbnail} alt={course.title} width={800} height={450} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    {course.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-xl z-10 shadow-md">
                        Học Viên Yêu Thích
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 flex gap-2">
                       <Badge variant="secondary" className="bg-black/70 text-white border-none backdrop-blur-sm shadow-sm">{course.audience}</Badge>
                    </div>
                  </div>

                  <CardHeader className="pt-4 pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="outline" className="text-xs text-primary border-primary/20 bg-primary/5">{course.type}</Badge>
                      <div className="flex items-center text-amber-500 text-sm">
                        <Star size={14} className="fill-amber-500 mr-1" />
                        <span className="font-bold">{course.rating}</span>
                        <span className="text-muted-foreground ml-1 text-xs">({course.reviewsCount})</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors overflow-hidden text-ellipsis mb-1">
                      <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {course.shortDesc}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 py-2">
                    <div className="flex flex-col space-y-2 mt-2 text-xs text-muted-foreground border-t border-border/50 pt-3">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-primary/70" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-lg text-foreground">{course.price}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 pb-6 px-6 gap-3">
                      <Button 
                        onClick={() => setCheckoutCourse({id: Number(course.id.replace('c', '')), title: course.title})}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm group"
                      >
                        {t('register')}
                      </Button>
                      <Link href={`/courses/${course.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full group">
                          {t('details')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-muted/30 rounded-2xl border border-dashed">
            <Tag className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-bold mb-2">Không tìm thấy chủ đề phù hợp</h3>
            <p className="text-muted-foreground mb-6">Xin vui lòng điều chỉnh lại bộ lọc hoặc tải lại các danh mục.</p>
            <Button variant="outline" onClick={() => handleFilterChange("All", "All", "All")}>Xóa Bộ Lọc</Button>
          </div>
        )}

        <CheckoutModal 
          isOpen={!!checkoutCourse} 
          onClose={() => setCheckoutCourse(null)} 
          course={checkoutCourse} 
        />
      </div>
    </section>
  );
}
