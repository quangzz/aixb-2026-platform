"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles, Quote, Flag, Award } from "lucide-react";

export function AboutStory() {
  const tHero = useTranslations('AboutPage.Hero');
  const tStory = useTranslations('AboutPage.OriginStory');

  return (
    <section className="pt-32 pb-20 bg-[#00262B] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FED55E]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1F453D]/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* SECTION 1: GIỚI THIỆU TỔNG QUAN */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 text-[#FED55E]">
            <Award className="w-4 h-4" />
            <span className="text-xs font-black tracking-widest uppercase">{tHero('badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-white mb-8 leading-tight">
            {tHero('title')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            <div className="space-y-6">
              <p className="border-l-2 border-[#FED55E] pl-4 italic text-white font-medium">
                {tHero('lead1')}
              </p>
              <p>
                {tHero('lead2')}
              </p>
            </div>
            <div className="space-y-6">
              <p>
                {tHero('lead3')}
              </p>
              <p className="bg-[#001D21] p-5 rounded-2xl border border-[#1F453D] text-[#FED55E] font-medium">
                {tHero('lead4')}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: CÂU CHUYỆN THƯƠNG HIỆU */}
        <div className="bg-[#001D21] border border-[#1F453D] rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FED55E]/5 rounded-bl-full pointer-events-none" />

          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 text-[#FED55E]">
            <span className="text-xs font-black tracking-widest uppercase">{tStory('badge')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic text-white mb-6">
            {tStory('title')}
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-gray-200 leading-relaxed font-normal mb-10">
            <p>{tStory('p1')}</p>
            <p>{tStory('p2')}</p>
            <p className="text-lg font-bold text-white bg-[#00262B] p-5 rounded-xl border border-[#FED55E]/30">
              🚀 {tStory('highlight')}
            </p>
          </div>

          {/* Positioning & Tagline Showcase Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#1F453D]">
            <div className="bg-[#00262B] p-6 rounded-2xl border border-[#1F453D]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FED55E] uppercase tracking-wider mb-2">
                <Quote className="w-4 h-4" />
                {tStory('positioning_title')}
              </div>
              <p className="text-base text-gray-200 italic font-medium leading-relaxed">
                {tStory('positioning_quote')}
              </p>
            </div>

            <div className="bg-[#00262B] p-6 rounded-2xl border border-[#1F453D] flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FED55E] uppercase tracking-wider mb-2">
                <Flag className="w-4 h-4" />
                {tStory('tagline_title')}
              </div>
              <p className="text-xl sm:text-2xl font-black italic text-[#FED55E] leading-snug">
                {tStory('tagline_text')}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
