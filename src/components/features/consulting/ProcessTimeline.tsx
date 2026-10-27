import React from "react";
import { ClipboardList, MessageSquare, Microscope, Presentation, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export function ProcessTimeline() {
  const t = useTranslations('HomePage.Framework5B');

  const steps = [
    {
      id: 1,
      title: t('b1_title'),
      desc: t('b1_desc'),
      icon: <ClipboardList size={24} />
    },
    {
      id: 2,
      title: t('b2_title'),
      desc: t('b2_desc'),
      icon: <Microscope size={24} />
    },
    {
      id: 3,
      title: t('b3_title'),
      desc: t('b3_desc'),
      icon: <Presentation size={24} />
    },
    {
      id: 4,
      title: t('b4_title'),
      desc: t('b4_desc'),
      icon: <Rocket size={24} />
    },
    {
      id: 5,
      title: t('b5_title'),
      desc: t('b5_desc'),
      icon: <MessageSquare size={24} />
    }
  ];

  return (
    <section className="py-24 bg-muted border-y overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Lộ Trình Tư Vấn</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">{t('title')}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="relative">
          {/* Đường kẻ nối Timeline (Chỉ hiện trên PC) */}
          <div className="hidden lg:block absolute top-[32px] left-[40px] right-[40px] h-0.5 bg-border -z-10" />

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative flex lg:flex-col items-start lg:items-center w-full group">
                
                {/* Vòng tròn Số/Icon */}
                <div className="flex shrink-0 w-16 h-16 rounded-full bg-background border-2 border-border items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all shadow-sm z-10 mr-6 lg:mr-0 lg:mb-6">
                  {step.icon}
                </div>

                {/* Đường kẻ dọc trên Mobile/Tablet - Không hiển thị ở bước cuối cùng */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-[-2rem] w-0.5 bg-border -z-10" />
                )}

                {/* Nội dung */}
                <div className="lg:text-center pt-2 lg:pt-0">
                  <h3 className="text-lg font-bold text-foreground mb-1">Bước {step.id}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 bg-primary/10 inline-block px-2 py-1 rounded">{step.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
