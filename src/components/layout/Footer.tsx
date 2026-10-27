import * as React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-[#1F453D] bg-[#00262B] pt-20 pb-12 relative overflow-hidden text-white">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[600px] bg-[#FED55E]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] z-0 select-none flex items-center justify-center h-full">
        <span className="text-giant-bg whitespace-nowrap text-white font-black italic tracking-tighter">AIxB</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Col 1: Logo & Tagline Statement */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="AIxB Academy of Transformation" 
                width={260} 
                height={65} 
                className="object-contain h-12 md:h-14 w-auto" 
              />
            </Link>

            <div className="space-y-3 max-w-md">
              <p className="text-base font-bold text-[#FED55E] italic leading-snug">
                “{t('tagline')}”
              </p>
              <p className="text-xs text-gray-400 italic">
                “{t('tagline_en')}”
              </p>
              <p className="text-sm text-gray-300 leading-relaxed font-normal pt-2">
                {t('about_desc')}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 sm:pl-4">
            <h4 className="font-bold mb-5 text-xs text-[#FED55E] uppercase tracking-widest">
              Điều hướng chính
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-[#FED55E] transition-colors">Trang chủ</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-[#FED55E] transition-colors">Về AIxB & Hồ sơ Chuyên gia</Link></li>
              <li><Link href="/courses" className="text-sm text-gray-300 hover:text-[#FED55E] transition-colors">Chương trình Huấn luyện</Link></li>
              <li><Link href="/resources" className="text-sm text-gray-300 hover:text-[#FED55E] transition-colors">Tài nguyên & Tri thức</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-[#FED55E] transition-colors">Liên hệ tư vấn</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact & Social */}
          <div className="lg:col-span-4">
            <h4 className="font-bold mb-5 text-xs text-[#FED55E] uppercase tracking-widest">
              Thông tin liên hệ chính thức
            </h4>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#FED55E] font-bold">📍</span>
                <span>{t('address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FED55E] font-bold">📞</span>
                <span>Hotline: {t('hotline')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FED55E] font-bold">✉️</span>
                <span>Email: {t('email')}</span>
              </li>

              {/* Social Channels according to docx */}
              <li className="pt-4 border-t border-[#1F453D] mt-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Kết nối với AIxB</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#001D21] border border-[#1F453D] hover:border-[#FED55E] hover:text-[#FED55E] flex items-center justify-center text-sm font-bold transition-all"
                    aria-label="Facebook"
                  >
                    F
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#001D21] border border-[#1F453D] hover:border-[#FED55E] hover:text-[#FED55E] flex items-center justify-center text-sm font-bold transition-all"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#001D21] border border-[#1F453D] hover:border-[#FED55E] hover:text-[#FED55E] flex items-center justify-center text-sm font-bold transition-all"
                    aria-label="YouTube"
                  >
                    ▶
                  </a>
                  <a
                    href="https://zalo.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 h-10 rounded-full bg-[#001D21] border border-[#1F453D] hover:border-[#FED55E] hover:text-[#FED55E] flex items-center justify-center text-xs font-bold transition-all"
                    aria-label="Zalo"
                  >
                    Zalo
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-[#1F453D] flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>{t('copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">{t('terms')}</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
