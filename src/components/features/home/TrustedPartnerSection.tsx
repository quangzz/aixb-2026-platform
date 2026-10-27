"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Quote, ArrowRight } from "lucide-react";

export function TrustedPartnerSection() {
  const t = useTranslations('HomePage.SocialProof');

  return (
    <section className="py-24 bg-[#00262B] text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#FED55E_0,transparent_25%)] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 text-[#FED55E]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white tracking-tight">
            Được Tin Tưởng Bởi Các Chuyên Gia Đầu Ngành
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#001D21] border border-[#1F453D] rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative"
          >
            <Quote className="w-14 h-14 text-[#FED55E]/20 absolute top-6 right-8 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Expert Avatar / Image */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-[#FED55E]/40 shadow-lg">
                <Image 
                  src="/team/dung-vu.jpg" 
                  alt={t('author')} 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote & Author Info */}
              <div className="flex-1 text-center md:text-left">
                {/* 5 Stars */}
                <div className="flex justify-center md:justify-start space-x-1.5 mb-4 text-[#FED55E]">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-bold italic text-gray-100 mb-6 leading-relaxed">
                  {t('quote')}
                </p>

                <div className="border-t border-[#1F453D] pt-4 mb-6">
                  <h4 className="text-lg font-black text-[#FED55E] mb-1">
                    {t('author')}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {t('role')}
                  </p>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-md"
                >
                  {t('cta')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
