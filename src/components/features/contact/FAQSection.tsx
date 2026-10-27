"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Bật sẵn câu số 1

  const faqs = [
    {
      q: "Học Viện DeepB có cam kết kết quả (KPI/ROI) sau quá trình đào tạo và tư vấn không?",
      a: "Hoàn toàn có. Đối với Hợp đồng Tư Vấn Doanh Nghiệp (Consulting), chúng tôi chỉ nghiệm thu khi hệ thống AI chứng minh được khả năng tối ưu hóa chi phí hoặc tăng tốc quy trình theo cam kết ban đầu (thường từ 20-40% thời gian tùy tác vụ)."
    },
    {
      q: "Nhân viên công ty tôi không có nền tảng CNTT hay lập trình (Non-tech) thì có học thuật toán Agentic AI được không?",
      a: "Tất cả lộ trình Đào tạo của DeepB được thiết kế theo tư duy Low-code/No-code trước. Nhân viên kinh doanh, Marketing hoàn toàn có thể hiểu cấu trúc Logic và tự thiết lập Agent qua giao diện kéo thả. Phần Code lõi sẽ dành riêng cho khóa IT Manager."
    },
    {
      q: "Dữ liệu nội bộ của công ty (Ví dụ sao kê tài chính, mức lương) khi đưa vào AI của Học viện có bị lộ cho AI của Google/OpenAI học lỏm không?",
      a: "Không. Triết lý của DeepB khi set-up hệ thống là Privacy by Design. Mọi dữ liệu đi qua Cổng Server đều được Data Masking (Che mờ dấu vết PII) - hoặc chứng tôi sẽ giúp bạn host nguyên một Local LLM Model tại Server của chính công ty bạn."
    },
    {
      q: "Chi phí duy trì hệ thống AI sau khi triển khai Tư vấn là bao nhiêu?",
      a: "Phụ thuộc vào Token Inference (độ dài Input/Output Hằng ngày). Với Local Model chi phí bằng 0 (chỉ tốn tiền điện chạy Server). Với Cloud Model, một công ty SME có thể tốn từ 200 - 500 USD/tháng."
    },
    {
      q: "Tại sao thời gian Tư vấn Phân tích Kiến trúc (Bước 3) mất tới 1 tuần?",
      a: "Chúng tôi cần Audit lại toàn bộ tình trạng dữ liệu của Doanh nghiệp (Nằm riêng lẻ ở Excel, Database rỗng hay ERP). Việc dọn 'rác' dữ liệu trước khi đào tạo AI là bước sinh tử, không thể đốt cháy giai đoạn."
    },
    {
      q: "Ai là người trực tiếp đào tạo các Khóa Học tại doanh nghiệp của tôi?",
      a: "100% Cố vấn trực tiếp là các Chuyên gia Vận hành (C-Level/Lead Engineers) nằm trong Hội đồng Chuyên môn của DeepB, không thuê ngoài giảng viên lý thuyết."
    },
    {
      q: "Nếu hệ thống Agentic AI tự đưa ra quyết định sai sót gây thiệt hại thì ai chịu trách nhiệm?",
      a: "Hệ thống Agent của chúng tôi luôn đi kèm 'Human-in-the-loop' (Nút bấm chặn do con người kiểm duyệt cuối cùng) tại các Điểm Quyết Định Quan Trọng như chuyển tiền, gửi báo giá. Máy móc làm 99%, con người chốt 1% để loại bỏ rủi ro sai sót sinh học."
    },
    {
      q: "Tôi có thể mua riêng Lộ trình Đào tạo SEO bằng Prompt (gen-Z) thay vì mua gói Tổng thể được không?",
      a: "Bạn hoàn toàn có quyền yêu cầu Customize 1 Khóa học đơn lẻ ghép nối với 1 quy trình tư vấn. Đội ngũ DeepB linh hoạt như một Co-founder công nghệ của bạn."
    },
    {
      q: "Chương trình C-Suite Strategy khác gì so với Manager Level?",
      a: "Khóa C-Suite bỏ qua hoàn toàn các bước thao tác (How-to). Tập trung duy nhất vào Bài toán Tư duy Mua / Build AI, Bảo vệ Tài sản Dữ liệu, và Thay máu bộ máy nhân lực cồng kềnh (AI Ethics & Change Management)."
    },
    {
      q: "Công ty của tôi thuộc lĩnh vực Bất Động Sản (hoặc lĩnh vực đặc thù khác), DeepB có Case Study cho ngành này chưa?",
      a: "Cơ chế hoạt động của Thuật toán Sinh ngữ (LLM) hay Đặc vụ Tự chủ (ReAct Logic) là phi ngành nghề. Miễn là công ty bạn có Văn bản, Có Quy trình lặp lại, chúng tôi đều tạo ra được Hệ thống tối ưu, dù bạn làm BĐS, F&B hay Y Dược."
    }
  ];

  return (
    <section className="py-24 bg-muted/30 border-t">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Tự Động Gỡ Rối</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">10 Vấn Đề Lớn Nhất Khi Lên Onboard AI</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-background border-primary/40 shadow-md" : "bg-transparent border-border/50 hover:border-primary/20"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-base text-foreground focus:outline-none"
                >
                  <span className="pr-8">{faq.q}</span>
                  <ChevronDown className={`shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} size={20} />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                   <p className="text-muted-foreground leading-relaxed pt-2 border-t border-border/50">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/20">
           <h4 className="font-bold text-lg mb-2">Câu hỏi của bạn chưa có ở đây?</h4>
           <p className="text-sm text-muted-foreground mb-4">Gửi gắm nỗi lo của bạn thông qua Biểu mẫu phía trên. Chatbot AI của chúng tôi tuy chưa live, nhưng chuyên gia Hệ thống sẽ tự trả lời Mail cho bạn!</p>
        </div>
      </div>
    </section>
  );
}
