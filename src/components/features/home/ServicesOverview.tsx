"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, UserCheck, Compass, Zap } from "lucide-react";

export function ServicesOverview() {
  const t = useTranslations('HomePage.Offerings');

  const offerings = [
    {
      id: "01",
      tag: t('box1_tag'),
      title: t('box1_title'),
      desc: t('box1_desc'),
      cta: t('box1_cta'),
      href: "/courses",
      icon: Zap,
      imgSrc: "/service_2_ai.png"
    },
    {
      id: "02",
      tag: t('box2_tag'),
      title: t('box2_title'),
      desc: t('box2_desc'),
      cta: t('box2_cta'),
      href: "/courses",
      icon: Compass,
      imgSrc: "/service_1_ai.png"
    },
    {
      id: "03",
      tag: t('box3_tag'),
      title: t('box3_title'),
      desc: t('box3_desc'),
      cta: t('box3_cta'),
      href: "/contact",
      icon: UserCheck,
      imgSrc: "/service_4_ai.png"
    }
  ];

  return (
    <section className="py-24 bg-[#F9F8F6] border-t border-[#E1DDD2] relative overflow-hidden text-[#00262B]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#00262B]/20 bg-[#00262B]/5 text-[#00262B]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-[#00262B] mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            {t('description')}
          </p>
        </div>

        {/* 3 Offerings Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl border border-[#E1DDD2] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle Card Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FED55E]/10 rounded-bl-full pointer-events-none group-hover:bg-[#FED55E]/20 transition-colors" />

                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#00262B] text-[#FED55E] tracking-wider uppercase">
                      {item.tag}
                    </span>
                    <span className="text-4xl font-black italic text-[#00262B]/10 group-hover:text-[#00262B]/20 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#FED55E]/20 text-[#00262B] group-hover:bg-[#FED55E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-black italic text-[#00262B] group-hover:text-[#D4513A] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                {/* Card Image & CTA Button */}
                <div>
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 border border-[#E1DDD2]/60">
                    <Image 
                      src={item.imgSrc} 
                      alt={item.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <Link
                    href={item.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-md group-hover:shadow-lg"
                  >
                    {item.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
