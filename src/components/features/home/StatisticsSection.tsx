"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export function StatisticsSection() {
  const t = useTranslations('HomePage.AICMM');

  const levels = [
    { label: t('l1_title'), value: t('l1_desc') },
    { label: t('l2_title'), value: t('l2_desc') },
    { label: t('l3_title'), value: t('l3_desc') },
    { label: t('l4_title'), value: t('l4_desc') },
  ];

  return (
    <section className="relative py-24 bg-[#F9F8F6] overflow-hidden border-t border-[#E1DDD2]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic mb-4 text-[#00262B] tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl border border-[#00262B]">
          {/* Deep Navy Teal edX Block */}
          <div className="absolute inset-0 bg-[#00262B]"></div>
          
          <div className="relative flex flex-col lg:flex-row items-stretch bg-transparent">
            {levels.map((level, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1 border-b lg:border-b-0 lg:border-r border-[#1F453D] last:border-0 p-6 sm:p-10 flex flex-col justify-start hover:bg-[#1F453D]/50 transition-colors"
              >
                <div className="text-xl font-extrabold text-[#FED55E] mb-4 tracking-wide uppercase">
                  {level.label}
                </div>
                <div className="text-sm font-medium text-gray-200 leading-relaxed text-left">
                  {level.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
