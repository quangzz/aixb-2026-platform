"use client";

import * as React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations('Header');
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#00262B]/95 backdrop-blur-md border-b border-[#1F453D] shadow-md"
          : "bg-[#00262B] border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/logo.png" 
            alt="AIxB Academy of Transformation" 
            width={240} 
            height={60} 
            className="w-auto h-10 md:h-12 object-contain" 
            priority 
          />
          <span className="hidden xl:inline-block text-[11px] text-[#FED55E] font-bold tracking-wider uppercase border-l border-white/20 pl-3 leading-tight">
            Toward<br />Sovereign<br />Intelligence
          </span>
        </Link>

        {/* DESKTOP NAV - MEGA MENU */}
        <nav className="hidden lg:flex items-center space-x-2 h-full">
          
          {/* Menu: Dịch vụ */}
          <div className="group h-full flex items-center px-4">
            <button className="text-sm font-semibold text-white hover:text-[#FED55E] transition-colors flex items-center gap-1 h-full">
              {t('solutions')} <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            
            {/* Mega Dropdown */}
            <div className="absolute top-20 left-0 w-full bg-[#F9F8F6] border-t border-[#E1DDD2] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-10 flex justify-center text-[#00262B]">
              <div className="container grid grid-cols-3 gap-12 max-w-5xl">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-[#00262B] border-b border-[#E1DDD2] pb-2">{t('enterprise_solutions')}</h4>
                  <ul className="space-y-3">
                    <li><Link href="/solutions" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('mega_solutions_b2b')}</Link></li>
                    <li><Link href="/courses" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('mega_solutions_edu')}</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4 text-[#00262B] border-b border-[#E1DDD2] pb-2">{t('training_formats')}</h4>
                  <ul className="space-y-3">
                    <li><Link href="/courses" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('mega_courses_exec')}</Link></li>
                    <li><Link href="/courses" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('mega_courses_short')}</Link></li>
                    <li><Link href="/contact" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('mega_courses_custom')}</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4 text-[#00262B] border-b border-[#E1DDD2] pb-2">{t('popular_courses')}</h4>
                  <ul className="space-y-3">
                    <li><Link href="/courses" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('mega_courses_leadership')}</Link></li>
                    <li><Link href="/courses" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('mega_courses_agentic')}</Link></li>
                    <li><Link href="/courses" className="text-sm font-bold text-[#D4513A] hover:underline mt-2 inline-block">{t('course_catalog')} →</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Menu: Chương trình đào tạo */}
          <div className="px-4 flex items-center h-full">
            <Link href="/courses" className="text-sm font-semibold text-white hover:text-[#FED55E] transition-colors">
              {t('courses')}
            </Link>
          </div>

          {/* Menu: Tài nguyên (Resources) */}
          <div className="group h-full flex items-center px-4">
            <button className="text-sm font-semibold text-white hover:text-[#FED55E] transition-colors flex items-center gap-1 h-full">
              {t('insights')} <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] bg-[#F9F8F6] border-t border-[#E1DDD2] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8 rounded-b-2xl flex gap-8 text-[#00262B]">
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-4 text-[#00262B] border-b border-[#E1DDD2] pb-2">{t('resources_center')}</h4>
                <ul className="space-y-3">
                  <li><Link href="/resources" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('resources_articles')}</Link></li>
                  <li><Link href="/resources" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('resources_agentic')}</Link></li>
                  <li><Link href="/resources" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('resources_report')}</Link></li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-4 text-[#00262B] border-b border-[#E1DDD2] pb-2">{t('tools')}</h4>
                <ul className="space-y-3">
                  <li><Link href="/tools/maturity-check" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('tools_maturity')}</Link></li>
                  <li><Link href="/tools/cost-calculator" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('tools_budget')}</Link></li>
                  <li><Link href="/contact" className="text-sm text-gray-700 hover:text-[#00262B] hover:font-bold">{t('contact')}</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Menu: Về AIxB */}
          <div className="px-4 flex items-center h-full">
            <Link href="/about" className="text-sm font-semibold text-white hover:text-[#FED55E] transition-colors">
              {t('about')}
            </Link>
          </div>
        </nav>

        {/* CTA BUTTON & LANGUAGE SWITCHER */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button className="bg-[#FED55E] hover:bg-[#F6C34E] text-[#00262B] font-bold px-7 py-2.5 rounded-full shadow-sm border-0 transition-all hover:scale-105">
              {t('contact_consulting')}
            </Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV DROP DOWN */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-[#00262B] border-b border-[#1F453D] px-6 py-4 flex flex-col space-y-4 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <Link href="/solutions" className="text-base font-bold text-white block py-2 border-b border-[#1F453D]">{t('solutions')}</Link>
          <Link href="/courses" className="text-base font-bold text-white block py-2 border-b border-[#1F453D]">{t('courses')}</Link>
          <Link href="/tools/maturity-check" className="text-base font-bold text-white block py-2 border-b border-[#1F453D]">{t('tools')}</Link>
          <Link href="/resources" className="text-base font-bold text-white block py-2 border-b border-[#1F453D]">{t('insights')}</Link>
          <Link href="/about" className="text-base font-bold text-white block py-2 border-b border-[#1F453D]">{t('about')}</Link>
          <div className="flex items-center justify-between py-2 border-b border-[#1F453D]">
            <span className="text-base font-bold text-white">Language</span>
            <LanguageSwitcher />
          </div>
          <Link href="/contact" className="w-full block pt-4">
            <Button className="w-full bg-[#FED55E] hover:bg-[#F6C34E] text-[#00262B] font-bold rounded-full py-4 text-center">
              {t('contact_consulting')}
            </Button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
