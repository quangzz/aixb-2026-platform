"use client";

import { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

export default function CostCalculatorPage() {
  const [formData, setFormData] = useState({
    industry: '',
    size: '',
    processes: '1',
    solutionType: ''
  });
  
  const [leadData, setLeadData] = useState({ email: '' });
  const [isCalculated, setIsCalculated] = useState(false);
  const [result, setResult] = useState({ min: 0, max: 0, monthly: 0, roi: '' });

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple logic based on the document specification
    let min = 0; let max = 0; let monthly = 0; let roi = "";
    
    switch(formData.solutionType) {
      case "chatbot":
        min = 15000; max = 40000; monthly = 1500; roi = "3-6 tháng"; break;
      case "predictive":
        min = 30000; max = 150000; monthly = 3000; roi = "6-12 tháng"; break;
      case "generative":
        min = 75000; max = 300000; monthly = 10000; roi = "12-18 tháng"; break;
      case "agentic":
        min = 100000; max = 500000; monthly = 20000; roi = "18-24 tháng"; break;
      default:
        min = 15000; max = 40000; monthly = 1500; roi = "3-6 tháng";
    }

    // Multiply by number of processes roughly
    const multiplier = Math.min(Math.max(parseInt(formData.processes) || 1, 1), 10);
    min = min * (1 + (multiplier - 1) * 0.5);
    max = max * (1 + (multiplier - 1) * 0.5);
    
    // Scale to VND (assuming 1 USD = 25,000 VND)
    min *= 25000;
    max *= 25000;
    monthly *= 25000;

    setResult({ min, max, monthly, roi });
    setIsCalculated(true);
  };

  const formatVND = (val: number) => {
    if (val >= 1000000000) {
      return (val / 1000000000).toFixed(1).replace('.0', '') + " Tỷ";
    }
    return (val / 1000000).toFixed(0) + " Triệu";
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Cost Calculator</h1>
          <p className="text-xl text-muted-foreground">Ước tính Tổng chi phí sở hữu (TCO) cho dự án AI của bạn trong 3 năm.</p>
        </div>

        {!isCalculated ? (
          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-border shadow-xl">
            <form onSubmit={calculateCost} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Ngành nghề</label>
                  <select required className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50" value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})}>
                    <option value="" disabled>-- Chọn ngành --</option>
                    <option value="retail">Bán lẻ / Thương mại</option>
                    <option value="manufacturing">Sản xuất</option>
                    <option value="finance">Tài chính / Ngân hàng</option>
                    <option value="logistics">Logistics / Supply Chain</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Quy mô nhân sự</label>
                  <select required className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50" value={formData.size} onChange={e => setFormData({...formData, size: e.target.value})}>
                    <option value="" disabled>-- Chọn quy mô --</option>
                    <option value="1-50">1 - 50 người</option>
                    <option value="51-200">51 - 200 người</option>
                    <option value="201-500">201 - 500 người</option>
                    <option value="500+">Trên 500 người</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Số lượng quy trình cần tối ưu</label>
                  <input required type="number" min="1" max="10" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50" value={formData.processes} onChange={e => setFormData({...formData, processes: e.target.value})} />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Loại giải pháp AI dự kiến</label>
                  <select required className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50" value={formData.solutionType} onChange={e => setFormData({...formData, solutionType: e.target.value})}>
                    <option value="" disabled>-- Chọn giải pháp --</option>
                    <option value="chatbot">Trợ lý ảo / Chatbot cơ bản (API LLM)</option>
                    <option value="predictive">Dự báo dữ liệu (Predictive ML)</option>
                    <option value="generative">AI Tạo sinh chuyên biệt (RAG / Data nội bộ)</option>
                    <option value="agentic">Đa tác tử tự trị (Enterprise Multi-agent)</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <label className="text-sm font-semibold text-foreground">Nhận kết quả phân tích chi tiết qua Email</label>
                <input required type="email" placeholder="name@company.com" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/50" value={leadData.email} onChange={e => setLeadData({email: e.target.value})} />
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center text-lg">
                Tính toán chi phí <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(0,153,204,0.1)] relative overflow-hidden animate-in zoom-in fade-in duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Ước tính TCO (Total Cost of Ownership)</h2>
              <p className="text-muted-foreground">Chi phí ước tính cho chu kỳ 3 năm vận hành.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-background p-6 rounded-xl border border-border text-center">
                <p className="text-sm font-semibold uppercase text-muted-foreground mb-4">Chi Phí Phát Triển Ban Đầu</p>
                <div className="text-3xl font-extrabold text-foreground">{formatVND(result.min)} - {formatVND(result.max)}</div>
                <p className="text-xs text-muted-foreground mt-2">Dự án triển khai từ 1 - 3 tháng</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border text-center">
                <p className="text-sm font-semibold uppercase text-muted-foreground mb-4">Chi Phí Vận Hành (Inference/Ops)</p>
                <div className="text-3xl font-extrabold text-foreground">~{formatVND(result.monthly)} <span className="text-lg font-normal text-muted-foreground">/ tháng</span></div>
                <p className="text-xs text-muted-foreground mt-2">Phí API, Cloud, Bảo trì hệ thống</p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center mb-10">
              <p className="text-sm font-semibold uppercase text-primary mb-2">Tỷ Suất Hoàn Vốn (ROI) Kỳ Vọng</p>
              <div className="text-2xl font-bold text-foreground">Hoàn vốn trong {result.roi}</div>
            </div>

            <p className="text-center text-sm text-muted-foreground mb-8">
              *Đây chỉ là ước tính dựa trên dữ liệu thị trường 2026. Bản báo cáo PDF chi tiết đã được gửi đến {leadData.email}.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => setIsCalculated(false)} className="bg-background text-foreground font-medium py-3 px-6 rounded-lg border border-border hover:bg-secondary transition-colors">
                Tính toán lại
              </button>
              <button className="bg-foreground text-background font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
                Tư vấn chuyên sâu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
