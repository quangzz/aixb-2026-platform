"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Award, Linkedin } from "lucide-react";

export function TeamGrid() {
  const t = useTranslations('AboutPage.Team');

  const experts = [
    {
      name: t('expert1_name'),
      role: t('expert1_role'),
      image: "/team/dung-vu.jpg",
      bio: t('expert1_bio'),
      highlight: "Tiến sĩ ĐH Cambridge, MBA Webster, Nguyên Viện trưởng sáng lập ĐH Việt Nhật & VinUni"
    },
    {
      name: t('expert2_name'),
      role: t('expert2_role'),
      image: "/team/phong-bui.png",
      bio: t('expert2_bio'),
      highlight: "25+ năm kinh nghiệm, Phó Chủ tịch CSMO Việt Nam, Tác giả 5Ps Experience Architecture"
    },
    {
      name: t('expert3_name'),
      role: t('expert3_role'),
      image: "/team/linh-dinh.jpg",
      bio: t('expert3_bio'),
      highlight: "20 năm công nghệ, CTO UNIKON, Sáng lập URAH, Business Translator ứng dụng AI Agent"
    }
  ];

  return (
    <section className="py-24 bg-[#00262B] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FED55E]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#FED55E]/30 bg-[#FED55E]/10 text-[#FED55E]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white tracking-tight mb-4 leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t('subtitle')}
          </p>
        </div>

        {/* Core Experts 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {experts.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#001D21] border border-[#1F453D] rounded-3xl overflow-hidden shadow-xl hover:border-[#FED55E]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="w-full aspect-[4/5] bg-black/40 relative overflow-hidden border-b border-[#1F453D]">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D21] via-transparent to-transparent opacity-80" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-[#00262B]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#FED55E] border border-white/10">
                    Chuyên gia AIxB
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black italic text-white mb-1 group-hover:text-[#FED55E] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FED55E] mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Highlight summary footer */}
              <div className="p-6 pt-0 border-t border-[#1F453D]/60 mx-6 sm:mx-8 mb-6 mt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400 pt-4">
                  <Award className="w-4 h-4 text-[#FED55E] shrink-0" />
                  <span className="line-clamp-2">{member.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Council Note */}
        <div className="text-center text-sm text-gray-400 font-medium bg-[#001D21]/60 py-4 px-6 rounded-2xl border border-[#1F453D] max-w-xl mx-auto">
          {t('expert_more')}
        </div>

      </div>
    </section>
  );
}
