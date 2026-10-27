"use client";

import { motion } from "motion/react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles, Award } from "lucide-react";

export function HeroSection() {
  const t = useTranslations('HomePage.Hero');

  return (
    <section className="relative overflow-hidden bg-[#00262B] pt-28 lg:pt-36 pb-0 text-white">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#FED55E]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1F453D]/40 blur-[160px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-6 z-10">
        {/* Top Partner / Professor Credential Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 backdrop-blur-md"
        >
          <Award className="w-4 h-4 text-[#FED55E] shrink-0" />
          <span className="text-xs sm:text-sm font-semibold text-[#FED55E] tracking-wide">
            {t('partner_badge')}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Big Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            <h1 className="text-[2.25rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.75rem] font-black italic text-white mb-6 whitespace-pre-line leading-[1.08] tracking-tight drop-shadow-sm">
              {t('title')}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-gray-200 leading-relaxed max-w-3xl mb-8">
              {t('tagline')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-lg hover:shadow-[#FED55E]/20 hover:-translate-y-0.5"
              >
                {t('cta1')}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white border-2 border-white/80 hover:bg-white hover:text-[#00262B] transition-all hover:-translate-y-0.5"
              >
                {t('cta2')}
                <Sparkles size={18} className="text-[#FED55E] group-hover:text-[#00262B]" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Strategic Statement Note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex items-start justify-end lg:pt-6"
          >
            <div className="border-t-2 border-[#FED55E]/60 pt-4 max-w-xs bg-white/5 p-5 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#FED55E] mb-2">
                Học Viện AIxB
              </p>
              <p className="text-sm text-gray-200 leading-relaxed font-normal">
                {t('subtitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Showcase Visual Card */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[480px] mt-8 flex justify-center items-end overflow-hidden z-10">
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl h-full flex justify-center items-end px-6"
        >
          <div className="w-full h-full relative rounded-t-3xl overflow-hidden border-t-4 border-x-4 border-white/20 bg-[#002125] shadow-2xl">
            <Image 
              src="/hero_tech_ai.png" 
              alt="AIxB Coaching and Consulting" 
              fill
              className="object-cover object-top opacity-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00262B] via-transparent to-transparent opacity-60" />
            
            {/* Top Floating Badge */}
            <div className="absolute top-6 right-6 bg-[#FED55E] text-[#00262B] text-xs font-black uppercase px-4 py-2 rounded-full shadow-lg border border-[#00262B]/10 tracking-wider">
              Lean AI 5B™ Framework
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
