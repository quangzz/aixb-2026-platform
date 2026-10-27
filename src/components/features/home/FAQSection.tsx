"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const t = useTranslations('HomePage.FAQ');
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [0, 1, 2, 3].map((i) => ({
    q: t(`q${i}`),
    a: t(`a${i}`)
  }));

  return (
    <section className="py-24 bg-[#F9F8F6] border-t border-[#E1DDD2] text-[#00262B]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black italic text-center mb-16 text-[#00262B] tracking-tight">
          {t('title')}
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">
          {/* Left: Image Card */}
          <div className="w-full lg:w-5/12">
            <div className="w-full aspect-video lg:aspect-[4/5] bg-white relative overflow-hidden shadow-xl rounded-2xl border border-[#E1DDD2]">
               <Image 
                 src="/faq_team_ai.png" 
                 alt="AIxB Team" 
                 fill
                 className="object-cover opacity-95"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
            </div>
          </div>
          
          {/* Right: Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="border-t border-[#E1DDD2]">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#E1DDD2]">
                  <button 
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className={`font-bold text-base sm:text-lg transition-colors ${openIndex === index ? "text-[#00262B]" : "text-[#00262B]/80 group-hover:text-[#D4513A]"}`}>
                      {faq.q}
                    </span>
                    <ArrowRight 
                      className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-90 text-[#D4513A]" : "text-gray-400"}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-gray-700 max-w-xl text-left leading-relaxed whitespace-pre-line font-medium">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
