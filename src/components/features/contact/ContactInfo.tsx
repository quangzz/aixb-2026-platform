import React from "react";
import { Mail, MapPin, Phone, Clock, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Liên hệ</p>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-foreground">
          Bắt đầu hành trình <br className="hidden lg:block" />
          <span className="text-primary">AI cho doanh nghiệp</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base">
          Đội ngũ chuyên gia AIX sẵn sàng lắng nghe và tư vấn giải pháp AI phù hợp nhất cho doanh nghiệp của bạn. Hoàn toàn miễn phí cho buổi tư vấn đầu tiên.
        </p>
      </div>

      {/* Thông tin liên hệ */}
      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all group">
          <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
             <MapPin className="text-primary w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-foreground">Văn phòng</h4>
            <p className="text-sm text-muted-foreground">Tầng 15, Tech Tower, 123 Đường AI, Quận 1, TP.HCM</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all group">
          <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
             <Phone className="text-primary w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-foreground">Hotline B2B</h4>
            <p className="text-sm text-muted-foreground">+84 (0) 289 123 4567</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all group">
          <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
             <Mail className="text-primary w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-foreground">Email</h4>
            <p className="text-sm text-muted-foreground">enterprise@deepb-aix.com.vn</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all group">
          <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
             <Clock className="text-primary w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-foreground">Giờ làm việc</h4>
            <p className="text-sm text-muted-foreground">Thứ 2 - Thứ 6: 08:30 - 18:00</p>
            <p className="text-xs text-primary/80 mt-1">* AI Support xử lý ticket 24/7</p>
          </div>
        </div>
      </div>

      {/* Trust badge */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <Shield className="text-primary w-5 h-5 shrink-0" />
        <p className="text-xs text-muted-foreground">
          Thông tin được bảo mật theo tiêu chuẩn <span className="text-foreground font-medium">NDA</span> và{" "}
          <span className="text-foreground font-medium">Luật An ninh mạng 2026</span>
        </p>
      </div>

      {/* CTA phụ */}
      <Link 
        href="/tools/maturity-check"
        className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20 hover:border-primary/40 transition-all group"
      >
        <div>
          <p className="font-semibold text-foreground text-sm">Chưa sẵn sàng liên hệ?</p>
          <p className="text-xs text-muted-foreground mt-1">Thử AI Maturity Check miễn phí — chỉ 3 phút</p>
        </div>
        <ArrowRight className="text-primary w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
