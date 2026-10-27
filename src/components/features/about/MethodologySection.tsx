"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { CheckCircle2, ArrowRight, BookOpen, Layers, Laptop, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function MethodologySection() {
  const t = useTranslations('AboutPage.Methodology');

  const steps5B = [
    t('step1'),
    t('step2'),
    t('step3'),
    t('step4'),
    t('step5')
  ];

  return (
    <section className="py-24 bg-[#F9F8F6] text-[#00262B] border-t border-[#E1DDD2]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#00262B]/20 bg-[#00262B]/5 text-[#00262B]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-[#00262B] tracking-tight mb-6">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* 2 Foundational Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Model 1: Consulting-led Training */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1DDD2] shadow-sm flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase mb-4 bg-[#00262B] text-[#FED55E]">
                {t('model1_badge')}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic text-[#00262B] mb-4 leading-tight">
                {t('model1_title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 font-medium">
                {t('model1_intro')}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                    {t('model1_point1')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                    {t('model1_point2')}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                    {t('model1_point3')}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-md mt-4"
            >
              {t('model1_cta')}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Model 2: Lean AI 5B™ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1DDD2] shadow-sm flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase mb-4 bg-[#00262B] text-[#FED55E]">
                {t('model2_badge')}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic text-[#00262B] mb-4 leading-tight">
                {t('model2_title')}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 font-medium">
                {t('model2_intro')}
              </p>

              <div className="space-y-3 mb-8">
                {steps5B.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F9F8F6] border border-[#E1DDD2] text-sm sm:text-base font-bold text-[#00262B] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#00262B] text-[#FED55E] text-xs flex items-center justify-center font-black shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/courses"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#00262B] hover:bg-[#1F453D] transition-all shadow-md mt-4"
            >
              {t('model2_cta')}
              <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>

        {/* LMS Online Platform Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#00262B] text-white rounded-3xl p-8 sm:p-12 border border-[#1F453D] shadow-xl flex flex-col md:flex-row items-center gap-8"
        >
          <div className="p-5 rounded-2xl bg-[#FED55E]/15 text-[#FED55E] shrink-0 border border-[#FED55E]/30">
            <Laptop className="w-12 h-12" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-black italic text-[#FED55E] mb-3">
              {t('lms_title')}
            </h4>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              {t('lms_desc')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
