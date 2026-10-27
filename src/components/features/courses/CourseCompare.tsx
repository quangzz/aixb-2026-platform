"use client";

import React from "react";
import { Course } from "@/data/courses";
import { Check, Minus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useTranslations } from "next-intl";

interface CourseCompareProps {
  courses: Course[];
}

export function CourseCompare({ courses }: CourseCompareProps) {
  // So sánh 4 khóa học Top Popular
  const compareItems = courses.filter(c => c.popular).slice(0, 4);
  const t = useTranslations('CoursesPage.Compare');

  return (
    <section className="py-16 bg-muted/30 border-y">
      <div className="container mx-auto px-6 overflow-x-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">{t('badge')}</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="min-w-[800px] bg-background rounded-2xl border shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-6 w-1/5 font-semibold text-muted-foreground uppercase tracking-wider text-sm">{t('criteria')}</th>
                {compareItems.map(course => (
                  <th key={course.id} className="p-6 font-bold w-1/5 align-top">
                    <p className="text-lg leading-tight mb-2 text-foreground">{course.title}</p>
                    <Badge variant="outline" className="text-primary border-primary/20">{course.type}</Badge>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b transition-colors hover:bg-muted/30">
                <td className="p-5 font-medium text-muted-foreground">{t('duration')}</td>
                {compareItems.map(c => <td key={c.id} className="p-5">{c.duration}</td>)}
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/30">
                <td className="p-5 font-medium text-muted-foreground">{t('audience')}</td>
                {compareItems.map(c => <td key={c.id} className="p-5">{c.audience}</td>)}
              </tr>
              <tr className="border-b transition-colors hover:bg-muted/30">
                <td className="p-5 font-medium text-muted-foreground">{t('practical')}</td>
                {compareItems.map(c => (
                  <td key={c.id} className="p-5 text-center">
                    {c.slug.includes('agentic') || c.slug.includes('fine-tuning') || c.slug.includes('enterprise-rag') 
                      ? <Check className="text-accent mx-auto" /> 
                      : <Minus className="text-muted-foreground/30 mx-auto" />}
                  </td>
                ))}
              </tr>
               <tr className="border-b transition-colors hover:bg-muted/30">
                <td className="p-5 font-medium text-muted-foreground">{t('certificate')}</td>
                {compareItems.map(c => (
                  <td key={c.id} className="p-5 text-center">
                     <Check className="text-green-500 mx-auto" /> 
                  </td>
                ))}
              </tr>
              <tr className="transition-colors bg-primary/5">
                <td className="p-5 font-medium text-primary">{t('investment')}</td>
                {compareItems.map(c => <td key={c.id} className="p-5 font-bold text-lg">{c.price}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
