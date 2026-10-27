import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Target, Bot, BrainCircuit, Activity } from "lucide-react";
import { useTranslations } from "next-intl";

export function ServicesGrid() {
  const t = useTranslations('HomePage.Flywheel');

  const services = [
    {
      id: "s1",
      icon: <Target className="w-10 h-10 text-primary mb-4" />,
      title: t('consulting_title'),
      desc: t('consulting_desc')
    },
    {
      id: "s2",
      icon: <BrainCircuit className="w-10 h-10 text-emerald-500 mb-4" />,
      title: t('edu_title'),
      desc: t('edu_desc')
    },
    {
      id: "s3",
      icon: <Activity className="w-10 h-10 text-accent mb-4" />,
      title: t('audit_title'),
      desc: t('audit_desc')
    },
    {
      id: "s4",
      icon: <Bot className="w-10 h-10 text-orange-500 mb-4" />,
      title: t('governance_title'),
      desc: t('governance_desc')
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Hệ điều hành AIxOS</h2>
          <p className="text-muted-foreground text-lg">AIxB cung cấp 4 trụ cột dịch vụ để đưa tổ chức đến trạng thái Trí tuệ Tự chủ (Sovereign Intelligence).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {services.map((svc) => (
            <Card key={svc.id} className="relative group overflow-hidden border border-white/5 transition-all hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 bg-secondary/30 h-full">
              <CardHeader className="p-8">
                {svc.icon}
                <CardTitle className="text-xl mb-3 leading-snug group-hover:text-accent transition-colors whitespace-pre-line">{svc.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-400">{svc.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
