"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "motion/react";
import { CheckCircle2, Clock, ShieldCheck, Layers, Cpu, Database, ArrowRight } from "lucide-react";

export function SkillsSolutionsSection() {
  const t = useTranslations('HomePage.Skills');

  return (
    <section className="py-24 bg-[#00262B] text-white relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FED55E]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1F453D]/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 text-[#FED55E]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white tracking-tight leading-tight">
            {t('title')}
          </h2>
        </div>

        {/* 2 Flagship Courses / Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: AI Marketing Playbook (Managers) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#001D21] border border-[#1F453D] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#FED55E]/40 transition-all duration-300 shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FED55E] bg-[#FED55E]/15 px-3.5 py-1 rounded-full border border-[#FED55E]/20">
                  {t('course1_sub')}
                </span>
                <Layers className="w-6 h-6 text-[#FED55E]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black italic text-white mb-6 group-hover:text-[#FED55E] transition-colors leading-tight">
                {t('course1_title')}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#FED55E]/10 text-[#FED55E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {t('course1_bullet1')}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#FED55E]/10 text-[#FED55E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {t('course1_bullet2')}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#FED55E]/10 text-[#FED55E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {t('course1_bullet3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Metadata Footer & Button */}
            <div className="border-t border-[#1F453D] pt-6 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 font-medium">
                <Clock className="w-4 h-4 text-[#FED55E]" />
                <span>{t('course1_duration')}</span>
              </div>

              <div className="flex items-start gap-2 text-sm text-[#FED55E] mb-6 font-bold bg-[#FED55E]/10 p-3.5 rounded-xl border border-[#FED55E]/20">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="leading-snug">{t('course1_commitment')}</span>
              </div>

              <Link
                href="/courses"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-md group-hover:shadow-lg"
              >
                {t('course1_cta')}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Value Creation & Business Model (Leaders) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#001D21] border border-[#1F453D] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#FED55E]/40 transition-all duration-300 shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FED55E] bg-[#FED55E]/15 px-3.5 py-1 rounded-full border border-[#FED55E]/20">
                  {t('course2_sub')}
                </span>
                <Cpu className="w-6 h-6 text-[#FED55E]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black italic text-white mb-6 group-hover:text-[#FED55E] transition-colors leading-tight">
                {t('course2_title')}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#FED55E]/10 text-[#FED55E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {t('course2_bullet1')}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#FED55E]/10 text-[#FED55E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {t('course2_bullet2')}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#FED55E]/10 text-[#FED55E] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                    {t('course2_bullet3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Metadata Footer & Button */}
            <div className="border-t border-[#1F453D] pt-6 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 font-medium">
                <Clock className="w-4 h-4 text-[#FED55E]" />
                <span>{t('course2_duration')}</span>
              </div>

              <div className="flex items-start gap-2 text-sm text-[#FED55E] mb-6 font-bold bg-[#FED55E]/10 p-3.5 rounded-xl border border-[#FED55E]/20">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="leading-snug">{t('course2_commitment')}</span>
              </div>

              <Link
                href="/courses"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-md group-hover:shadow-lg"
              >
                {t('course2_cta')}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
