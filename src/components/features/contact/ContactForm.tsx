"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronDown, Send, Loader2, User, Mail, Phone, Briefcase, MessageSquare } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    service: "",
    teamSize: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Giả lập API call
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  // Màn hình thành công
  if (status === "success") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-10 lg:p-14 flex flex-col items-center justify-center text-center min-h-[500px]">
        {/* Hiệu ứng glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 blur-[80px] rounded-full" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/10">
            <CheckCircle2 className="text-primary w-10 h-10" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">Đã Tiếp Nhận Thông Tin!</h3>
          <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
            Yêu cầu của bạn đã được chuyển đến đội ngũ chuyên gia AIX. Chúng tôi sẽ liên hệ lại trong vòng <span className="text-primary font-semibold">24 giờ</span> làm việc.
          </p>
          <button 
            onClick={() => { setStatus("idle"); setFormData({ fullName: "", email: "", phone: "", company: "", position: "", service: "", teamSize: "", message: "" }); }} 
            className="px-8 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 font-semibold transition-all"
          >
            Gửi thêm yêu cầu khác
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/50 backdrop-blur-sm">
      {/* Header form */}
      <div className="px-8 lg:px-10 pt-8 lg:pt-10 pb-6 border-b border-border/50">
        <h3 className="text-2xl font-bold text-foreground mb-2">Đăng ký tư vấn miễn phí</h3>
        <p className="text-sm text-muted-foreground">Điền thông tin bên dưới để nhận phân tích sơ bộ từ chuyên gia AI</p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 lg:px-10 py-8 space-y-5">
        {/* Row 1: Họ tên + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <User size={14} className="text-primary" /> Họ và tên <span className="text-red-400">*</span>
            </label>
            <input 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required 
              placeholder="Nguyễn Văn A" 
              className="w-full rounded-lg px-4 h-12 text-sm bg-background border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Mail size={14} className="text-primary" /> Email công ty <span className="text-red-400">*</span>
            </label>
            <input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="ten@congty.com" 
              className="w-full rounded-lg px-4 h-12 text-sm bg-background border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" 
            />
          </div>
        </div>

        {/* Row 2: SĐT + Tên công ty */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Phone size={14} className="text-primary" /> Số điện thoại
            </label>
            <input 
              name="phone"
              type="tel" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="+84 912 345 678" 
              className="w-full rounded-lg px-4 h-12 text-sm bg-background border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Briefcase size={14} className="text-primary" /> Tên công ty <span className="text-red-400">*</span>
            </label>
            <input 
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Công ty ABC" 
              className="w-full rounded-lg px-4 h-12 text-sm bg-background border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" 
            />
          </div>
        </div>

        {/* Row 3: Chức danh + Quy mô */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Chức danh / Vị trí</label>
            <input 
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="CEO, CTO, Trưởng phòng IT..." 
              className="w-full rounded-lg px-4 h-12 text-sm bg-background border border-border/80 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Quy mô đội ngũ</label>
            <div className="relative">
              <select 
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                className="w-full bg-background border border-border/80 h-12 rounded-lg px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-sm text-foreground transition-all"
              >
                <option value="">Chọn quy mô</option>
                <option value="1-10">1 - 10 nhân sự</option>
                <option value="11-50">11 - 50 nhân sự</option>
                <option value="51-200">51 - 200 nhân sự</option>
                <option value="201-500">201 - 500 nhân sự</option>
                <option value="500+">Trên 500 nhân sự</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Dịch vụ quan tâm */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Dịch vụ quan tâm <span className="text-red-400">*</span></label>
          <div className="relative">
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              required 
              className="w-full bg-background border border-border/80 h-12 rounded-lg px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-sm text-foreground transition-all"
            >
              <option value="">Chọn dịch vụ bạn quan tâm</option>
              <option value="quick-scan">Quick Scan™ — Chẩn đoán nhanh AI (2 tuần)</option>
              <option value="full-audit">Full Audit™ — Kiểm toán hạ tầng AI toàn diện</option>
              <option value="training">Đào tạo đội ngũ nội bộ (Corporate Training)</option>
              <option value="consulting">Tư vấn kiến trúc GenAI / Agentic AI</option>
              <option value="implementation">Triển khai & tích hợp AI thực chiến</option>
              <option value="retainer">AI Retainer™ — Giám đốc AI bán thời gian</option>
              <option value="other">Khác (mô tả bên dưới)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
          </div>
        </div>

        {/* Mô tả nhu cầu */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <MessageSquare size={14} className="text-primary" /> Mô tả nhu cầu cụ thể
          </label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4} 
            placeholder="Ví dụ: Công ty tôi đang muốn tự động hóa quy trình chăm sóc khách hàng bằng AI, cần tư vấn lộ trình triển khai phù hợp..."
            className="w-full bg-background border border-border/80 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-sm text-foreground placeholder:text-muted-foreground/60 resize-y transition-all"
          />
        </div>

        {/* Nút submit */}
        <button 
          type="submit" 
          disabled={status === "submitting"} 
          className="w-full h-14 rounded-lg font-bold text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Đang gửi thông tin...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Gửi yêu cầu tư vấn
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Bằng việc gửi form, bạn đồng ý với{" "}
          <a href="#" className="text-primary hover:underline">Chính sách bảo mật</a> của DeepB AIX.
          Thông tin được mã hóa và bảo mật tuyệt đối.
        </p>
      </form>
    </div>
  );
}
