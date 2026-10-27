"use client";

import { useTransition, useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false);
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
        disabled={isPending}
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium uppercase">{locale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-background border rounded-md shadow-lg overflow-hidden z-50">
          <button 
            onClick={() => handleLocaleChange('vi')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${locale === 'vi' ? 'bg-primary/10 text-primary font-semibold' : ''}`}
          >
            Tiếng Việt (VI)
          </button>
          <button 
            onClick={() => handleLocaleChange('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${locale === 'en' ? 'bg-primary/10 text-primary font-semibold' : ''}`}
          >
            English (EN)
          </button>
        </div>
      )}
    </div>
  );
}
