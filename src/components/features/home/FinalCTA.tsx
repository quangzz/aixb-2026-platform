"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, MessageSquare } from "lucide-react";

export function FinalCTA() {
  const t = useTranslations('HomePage.FinalCTA');

  return (
    <section className="py-20 bg-[#F9F8F6] border-t border-[#E1DDD2] text-[#00262B] relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-[#00262B] mb-6 leading-tight">
          {t('title')}
        </h2>
        <p className="text-base sm:text-xl text-gray-700 font-bold max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold text-[#00262B] bg-[#FED55E] hover:bg-[#F6C34E] transition-all shadow-xl hover:scale-105"
        >
          <MessageSquare size={20} />
          {t('cta')}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
