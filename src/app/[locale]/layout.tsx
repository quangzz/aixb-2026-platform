import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/features/chatbot/ChatWidget";
import "../../styles/index.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = "https://aix.vn";
  
  return {
    title: "AIxB | From AI Adoption to Sovereign Intelligence",
    description: "AIxB — Đơn vị Tư vấn Chuyển đổi AI chuyên biệt. Chúng tôi giúp doanh nghiệp xây dựng Trí tuệ Tự chủ (Sovereign Intelligence) thông qua đào tạo, tư vấn chiến lược và triển khai Agentic AI thực chiến.",
    keywords: ["Sovereign Intelligence", "AI Transformation", "AIxB", "Agentic AI", "Đào tạo AI doanh nghiệp", "AI cho C-Suite", "DeepB AIX Academy"],
    authors: [{ name: "DeepB AIX Team" }],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'vi': '/vi',
        'en': '/en',
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    other: {
      "c2pa-ai-certified": "compliant",
      "c2pa-llm-engines": "Gemini-2.5-Flash",
      "c2pa-transparency-policy": "https://deepb-aix.vn/trust"
    }
  };
}

export function generateStaticParams() {
  return [{ locale: 'vi' }, { locale: 'en' }];
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  // Lấy messages cho NextIntlClientProvider
  const messages = await getMessages();
  
  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pt-20 relative overflow-x-hidden font-sans">
        {/* Global Vibrant Aurora Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/15 blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[140px]"></div>
          <div className="absolute bottom-[10%] right-[30%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px]"></div>
        </div>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

