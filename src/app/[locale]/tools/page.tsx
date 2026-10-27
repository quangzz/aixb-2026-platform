import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Calculator, CheckCircle2, Target } from 'lucide-react';

export default async function ToolsHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tools = [
    {
      id: "maturity-check",
      icon: <Target className="w-12 h-12 text-primary mb-6" />,
      title: "AI Maturity Check",
      desc: "Công cụ đánh giá mức độ trưởng thành AI của doanh nghiệp qua 15 tiêu chí, trả về báo cáo phân tích điểm mạnh yếu và vị thế so với ngành.",
      href: "/tools/maturity-check",
      tag: "Được khuyên dùng"
    },
    {
      id: "cost-calculator",
      icon: <Calculator className="w-12 h-12 text-primary mb-6" />,
      title: "AI Cost Calculator",
      desc: "Ước tính Tổng chi phí sở hữu (TCO) và Tỷ suất hoàn vốn (ROI) khi triển khai hệ thống AI, xóa bỏ ảo tưởng về cấu trúc chi phí.",
      href: "/tools/cost-calculator"
    },
    {
      id: "readiness-checklist",
      icon: <CheckCircle2 className="w-12 h-12 text-primary mb-6" />,
      title: "AI Readiness Checklist",
      desc: "Bộ 20 tiêu chí tự chẩn đoán nhanh xem dữ liệu và hạ tầng của doanh nghiệp đã sẵn sàng cho AI hay chưa.",
      href: "/tools/readiness-checklist"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Công cụ chẩn đoán AI miễn phí</h1>
          <p className="text-xl text-muted-foreground">Hiểu đúng hiện trạng để ra quyết định đầu tư công nghệ chuẩn xác.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-secondary p-8 rounded-2xl border border-border flex flex-col hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,153,204,0.1)] transition-all group relative overflow-hidden">
              {tool.tag && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                  {tool.tag}
                </div>
              )}
              {tool.icon}
              <h2 className="text-2xl font-bold mb-4 text-foreground">{tool.title}</h2>
              <p className="text-muted-foreground mb-8 flex-1">{tool.desc}</p>
              <Link href={tool.href} className="inline-flex items-center text-primary font-bold group-hover:underline">
                Bắt đầu đánh giá <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
