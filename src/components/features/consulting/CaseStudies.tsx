import React from "react";
import Image from "next/image";
import { Quote, TrendingUp, Clock, Zap } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      id: "cs1",
      companyPlaceholder: "https://placehold.co/120x40/1e293b/ffffff?text=Retail+Group+JS",
      contactName: "Mr. Thomas Tran - Giám đốc Chuỗi Cung Ứng",
      problem: "Đứt gãy chuỗi phân tích tồn kho. Bộ phận mua hàng phải tổng hợp thủ công từ 40 file Excel mỗi tuần, gây lãng phí 80 giờ làm việc và ra quyết định sai lệch mùa vụ.",
      solution: "Triển khai Agentic AI kết nối trực tiếp API của ERP. Agent tự động crawl data, làm sạch và chẩn đoán biểu đồ Forecast Inventory hằng ngày mà không cần Human-in-the-loop ban đầu.",
      roi: [
        { icon: <Clock size={16}/>, text: "Giảm 90% thời gian báo cáo (Còn 8 giờ/tuần)." },
        { icon: <TrendingUp size={16}/>, text: "Giảm rủi ro Out-of-stock xuống 1.5%." }
      ],
      quote: "DeepB không bán cho chúng tôi ChatGPT. Họ bán một cỗ máy tự động đưa ra quyết định mua hàng sắc bén hơn bất kỳ chuyên viên tồn kho cũ nào của tôi."
    },
    {
      id: "cs2",
      companyPlaceholder: "https://placehold.co/120x40/0ea5e9/ffffff?text=EduTech+Global",
      contactName: "Ms. Linda Pham - CMO",
      problem: "Chi phí nhân sự SEO Content phình to nhưng Traffic chững lại. Content writer mất 3 ngày/bài để thiết kế khung ý tưởng (Outline) và viết bài chuẩn SEO kỹ thuật.",
      solution: "Đập đi làm lại bằng mô hình Meta-Prompting. Tự động hóa Pipeline với Llama-3: Agent 1 lọc Keyword -> Agent 2 viết dàn ý -> Agent 3 viết thân bài -> Agent 4 tự Audit Pagerank.",
      roi: [
        { icon: <Zap size={16}/>, text: "Tốc độ sản xuất Nội dung SEO tăng gấp 10 lần." },
        { icon: <TrendingUp size={16}/>, text: "Tiết kiệm ngân sách nhân sự 60% chỉ sau 2 tháng." }
      ],
      quote: "Chúng tôi đã sa thải các tool viết AI rác rẻ tiền để đầu tư hẳn một Local Pipeline của DeepB. Kết quả SEO lên Top 1 chỉ trong 1 đêm thực sự ngoạn mục."
    },
    {
      id: "cs3",
      companyPlaceholder: "https://placehold.co/120x40/8b5cf6/ffffff?text=Fintech+Bank",
      contactName: "Mr. David Hoang - VP of Risk Management",
      problem: "Vấn đề bảo mật cực kỳ nghiêm ngặt khiến họ không được sử dụng các AI Public (như OpenAI/Gemini) để tóm tắt Báo Cáo Thẩm Định Tín Dụng nội bộ của Khách hàng VIP.",
      solution: "Thiết lập Cloud GPU bảo mật (VPC Dedicated) chạy Private LLM (Llama-3 70B Quantized). Ứng dụng PII Masking che dấu danh tính KH trước khi chèn vào hệ RAG Database.",
      roi: [
        { icon: <ShieldCheck size={16}/>, text: "Đạt 100% tuân thủ Check-list kiểm toán Bảo mật Ngân hàng." },
        { icon: <Clock size={16}/>, text: "Thời gian thẩm duyệt Hồ sơ Tín dụng nhanh hơn 3 lần." }
      ],
      quote: "Giờ đây nhân viên Teller của tôi có thể chat tự nhiên với Dữ liệu khổng lồ của Ngân hàng mà không sợ rò rỉ mã thẻ hay tên tuổi. Privacy by Design là vũ khí tối thượng của DeepB."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Kết Quả Thay Lời Nói</h2>
          <p className="text-muted-foreground text-lg">Hồ sơ năng lực của chúng tôi là biên lợi nhuận của khách hàng (ROI). Cùng tham khảo các bài toán cấu trúc điển hình do DeepB giải quyết.</p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {cases.map((cs, idx) => (
            <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-8 bg-muted/20 border rounded-3xl hover:border-primary/40 transition-colors">
              
              {/* Cột trái: Thông tin Cty & Đánh giá */}
              <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border pb-6 lg:pb-0 lg:pr-6">
                <div>
                  <img src={cs.companyPlaceholder} alt="Client Logo" className="h-10 object-contain mb-6 opacity-80" />
                  <div className="flex gap-4">
                    <Quote className="text-primary/40 rotate-180 shrink-0" size={32} />
                    <p className="text-sm italic text-foreground/80 leading-relaxed font-medium">"{cs.quote}"</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-xs font-bold text-foreground">{cs.contactName}</p>
                </div>
              </div>

              {/* Cột phải: Vấn đề, Giải pháp & ROI */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-destructive mb-2">Vấn Đề (Pain-Point)</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cs.problem}</p>
                </div>
                
                <div className="mb-8 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Giải Pháp AI (Solution)</h4>
                  <p className="text-foreground text-sm font-medium leading-relaxed">{cs.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Hiệu Suất Đo Lường (ROI)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {cs.roi.map((roi, i) => (
                       <div key={i} className="flex items-center gap-3 bg-background border px-4 py-3 rounded-lg shadow-sm">
                         <div className="text-primary">{roi.icon}</div>
                         <span className="text-sm font-medium">{roi.text}</span>
                       </div>
                     ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Thêm cái icon thiếu
function ShieldCheck({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
