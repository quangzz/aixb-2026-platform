import Link from 'next/link';
import { ArrowRight, Calculator, CheckCircle2, Target } from 'lucide-react';

export function ToolsStrip() {
  return (
    <section className="py-12 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary/50 rounded-xl border border-border flex flex-col items-center text-center hover:bg-secondary/70 transition-colors">
            <Target className="w-10 h-10 text-primary mb-4" />
            <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-3 uppercase">Miễn phí</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">AI Maturity Check</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">Đánh giá mức độ trưởng thành AI của doanh nghiệp bạn trong 3 phút.</p>
            <Link href="/tools/maturity-check" className="flex items-center text-primary font-medium hover:underline">
              Dùng ngay <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="p-6 bg-secondary/50 rounded-xl border border-border flex flex-col items-center text-center hover:bg-secondary/70 transition-colors">
            <Calculator className="w-10 h-10 text-primary mb-4" />
            <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-3 uppercase">Miễn phí</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">AI Cost Calculator</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">Ước tính ngân sách và ROI cho việc triển khai AI.</p>
            <Link href="/tools/cost-calculator" className="flex items-center text-primary font-medium hover:underline">
              Dùng ngay <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="p-6 bg-secondary/50 rounded-xl border border-border flex flex-col items-center text-center hover:bg-secondary/70 transition-colors">
            <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
            <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-3 uppercase">Miễn phí</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">AI Readiness Checklist</h3>
            <p className="text-muted-foreground text-sm mb-6 flex-1">Bộ 20 tiêu chí tự đánh giá sự sẵn sàng của hạ tầng.</p>
            <Link href="/tools/readiness-checklist" className="flex items-center text-primary font-medium hover:underline">
              Dùng ngay <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
