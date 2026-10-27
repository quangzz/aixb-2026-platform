"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Eye, Target, ShieldCheck, Zap, Scale, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function CoreValues() {
  const tVision = useTranslations('AboutPage.VisionMission');
  const tValues = useTranslations('AboutPage.CoreValues');

  const values = [
    {
      icon: Scale,
      title: tValues('v1_title'),
      desc: tValues('v1_desc'),
      accentColor: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: Zap,
      title: tValues('v2_title'),
      desc: tValues('v2_desc'),
      accentColor: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      icon: Sparkles,
      title: tValues('v3_title'),
      desc: tValues('v3_desc'),
      accentColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: ShieldCheck,
      title: tValues('v4_title'),
      desc: tValues('v4_desc'),
      accentColor: "text-[#FED55E] bg-[#FED55E]/10 border-[#FED55E]/20"
    }
  ];

  return (
    <section className="py-24 bg-[#F9F8F6] text-[#00262B] border-t border-[#E1DDD2]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* VISION & MISSION DUAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1DDD2] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-2xl bg-[#00262B] text-[#FED55E] w-fit mb-6 shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black italic text-[#00262B] mb-4">
              {tVision('vision_title')}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              {tVision('vision_desc')}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1DDD2] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-2xl bg-[#00262B] text-[#FED55E] w-fit mb-6 shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black italic text-[#00262B] mb-4">
              {tVision('mission_title')}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              {tVision('mission_desc')}
            </p>
          </motion.div>
        </div>

        {/* 4 CORE VALUES */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#00262B]/20 bg-[#00262B]/5 text-[#00262B]">
            <span className="text-xs font-black tracking-widest uppercase">{tValues('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-[#00262B] tracking-tight">
            {tValues('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E1DDD2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${val.accentColor}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black italic text-[#00262B] mb-4 group-hover:text-[#D4513A] transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
