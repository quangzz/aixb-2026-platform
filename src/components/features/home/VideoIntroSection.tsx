"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import Image from "next/image";

export function VideoIntroSection() {
  const t = useTranslations('HomePage.VideoSection');
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section className="py-24 bg-[#F9F8F6] border-t border-[#E1DDD2] text-[#00262B] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-[#00262B]/20 bg-[#00262B]/5 text-[#00262B]">
            <span className="text-xs font-black tracking-widest uppercase">{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-[#00262B] tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            {t('subtitle')}
          </p>
        </div>

        {/* Video Player Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#00262B] group"
        >
          {!isPlaying ? (
            <div className="relative w-full h-full">
              <Image 
                src="/hero_tech_ai.png" 
                alt="AIxB Video Showcase" 
                fill
                className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00262B]/90 via-[#00262B]/40 to-transparent" />
              
              {/* Play Button Action */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FED55E] hover:bg-[#F6C34E] text-[#00262B] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 mb-6 group-hover:shadow-[#FED55E]/30"
                  aria-label="Play Video"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </button>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold">
                  <Sparkles className="w-4 h-4 text-[#FED55E]" />
                  Khám phá Phương pháp Huấn luyện & Chuyển đổi Thực chiến
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black">
              {/* Responsive Video Embed or Native Player */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="AIxB Video Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
