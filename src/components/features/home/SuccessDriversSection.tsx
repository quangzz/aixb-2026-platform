"use client";

import { useTranslations } from "next-intl";
import { Search, Activity, Map, Wrench, Megaphone } from "lucide-react";

export function SuccessDriversSection() {
  const t = useTranslations('HomePage.Framework5B');

  const drivers = [
    {
      icon: <Search className="w-6 h-6" />,
      title: t('b1_title'),
      desc: t('b1_desc')
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: t('b2_title'),
      desc: t('b2_desc')
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: t('b3_title'),
      desc: t('b3_desc')
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t('b4_title'),
      desc: t('b4_desc')
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: t('b5_title'),
      desc: t('b5_desc')
    }
  ];

  return (
    <section className="py-24 bg-[#F9F8F6] border-t border-[#E1DDD2]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic mb-4 text-[#00262B] tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {drivers.map((item, index) => (
            <div key={index} className="p-8 flex flex-col items-start bg-[#F3F1ED] border border-[#E1DDD2] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#00262B]/30 transition-all duration-300 group">
              <div className="text-[#00262B] mb-6 rounded-full p-4 bg-[#FED55E] group-hover:bg-[#F6C34E] transition-colors shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262B]">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed text-left">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
