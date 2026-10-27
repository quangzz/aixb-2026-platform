"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "motion/react";
import { BookOpen, Video, Calendar, ArrowRight } from "lucide-react";

const partners = [
  "Vietcombank",
  "MB Bank",
  "Viettel",
  "ROX Group",
  "Vinhomes",
  "Taseco",
  "Toyota VN",
  "Samsung",
  "Nestlé",
  "Pepsico"
];

export function ResourcesSection() {
  const t = useTranslations('HomePage.Resources');

  const resourceCards = [
    {
      type: t('tab1_title'),
      icon: BookOpen,
      title: t('tab1_item1_title'),
      desc: t('tab1_item1_desc'),
      href: "/resources",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      type: t('tab2_title'),
      icon: Video,
      title: t('tab2_item1_title'),
      desc: t('tab2_item1_desc'),
      href: "/resources",
      tagColor: "bg-[#FED55E]/10 text-[#FED55E] border-[#FED55E]/20"
    },
    {
      type: t('tab3_title'),
      icon: Calendar,
      title: t('tab3_item1_title'),
      desc: t('tab3_item1_desc'),
      href: "/resources",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }
  ];

  return (
    <section className="py-24 bg-[#00262B] text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 text-[#FED55E]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t('subtitle')}
          </p>
        </div>

        {/* 3 White Boxes on Deep Navy Dark Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {resourceCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white text-[#00262B] rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-[#E1DDD2]"
              >
                <div>
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase mb-6 bg-[#00262B] text-[#FED55E]">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.type}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black italic text-[#00262B] mb-4 group-hover:text-[#D4513A] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center font-bold text-sm text-[#00262B] group-hover:text-[#D4513A] transition-colors pt-4 border-t border-gray-100"
                >
                  {t('viewDetail')}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Banner Logo Đối Tác & Doanh Nghiệp Đồng Hành */}
        <div className="border-t border-[#1F453D] pt-16 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FED55E] mb-8">
            {t('partners_title')}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14 opacity-75">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white/80 hover:text-white hover:scale-105 transition-all duration-200"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
