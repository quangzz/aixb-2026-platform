import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, BarChart3, BrainCircuit, ShieldCheck } from "lucide-react";

export function ConsultingHero() {
  return (
    <section className="relative bg-muted/30 pt-24 pb-20 border-b overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center lg:text-left items-center pt-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-[1.1]">
              Giải Mã Nút Thắt Với <span className="italic border-b-4 border-dotted border-primary/50">Lực Lượng Đặc Nhiệm AI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Loại bỏ sự mơ hồ. Đội ngũ chuyên gia cấp cao của DeepB đến hệ thống của bạn, khảo sát thực trạng, và đưa ra kiến trúc Chuyển đổi số (Digital Transformation) minh bạch, có thể đo lường chỉ số ROI rõ ràng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base shadow-lg hover:shadow-primary/20 transition-all font-bold rounded-full w-full sm:w-auto">
                  Đặt Lịch Tư Vấn 1-1 Miễn Phí <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base rounded-full w-full sm:w-auto border-border">
                  Khám Phá Dịch Vụ
                </Button>
              </Link>
            </div>
            
            <div className="flex gap-6 mt-12 items-center justify-center lg:justify-start text-sm text-muted-foreground font-medium border-t border-border/50 pt-8">
              <span className="flex items-center gap-2"><BarChart3 size={18} className="text-primary"/> Phân Tích Thực Chiến</span>
              <span className="flex items-center gap-2"><BrainCircuit size={18} className="text-primary"/> GenAI & Agentic</span>
              <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary"/> Thuân thủ 100% Luật</span>
            </div>
          </div>

          <div className="hidden lg:block relative aspect-square max-w-md mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full animate-pulse blur-3xl"></div>
             <img src="https://placehold.co/600x600/1e293b/ffffff?text=AI+Consulting+Graph" alt="Consulting AI" className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-border/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
