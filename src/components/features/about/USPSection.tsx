"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ShieldCheck, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function USPSection() {
  const t = useTranslations('AboutPage.USP');

  const benefits = [
    {
      icon: ShieldCheck,
      title: t('benefit1_title'),
      desc: t('benefit1_desc'),
      number: "01"
    },
    {
      icon: Compass,
      title: t('benefit2_title'),
      desc: t('benefit2_desc'),
      number: "02"
    },
    {
      icon: HeartHandshake,
      title: t('benefit3_title'),
      desc: t('benefit3_desc'),
      number: "03"
    }
  ];

  return (
    <section className="py-24 bg-[#00262B] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FED55E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Top Header & Motto Box */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 text-[#FED55E]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FED55E] mb-2">
            {t('motto_title')}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black italic text-white mb-6 leading-tight">
            {t('motto')}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal bg-[#001D21] p-6 rounded-2xl border border-[#1F453D]">
            {t('definition')}
          </p>
        </div>

        {/* 3 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#001D21] border border-[#1F453D] rounded-3xl p-8 flex flex-col justify-between hover:border-[#FED55E]/40 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#FED55E]/10 text-[#FED55E] group-hover:bg-[#FED55E] group-hover:text-[#00262B] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black italic text-white/10 group-hover:text-white/20 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black italic text-white mb-4 group-hover:text-[#FED55E] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
