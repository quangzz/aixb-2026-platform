"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "Doanh nghiệp tôi cần chuẩn bị gì trước khi làm Quick Scan?",
      a: "Anh/Chị không cần chuẩn bị kỹ thuật. Chỉ cần tập hợp sơ bộ các báo cáo tài chính/vận hành và sự sẵn lòng chia sẻ vấn đề thực tế từ 1-2 quản lý phòng ban."
    },
    {
      q: "Bao nhiêu người từ phía chúng tôi cần tham gia?",
      a: "Thường chỉ cần CEO (1 giờ kick-off và 2 giờ nghe báo cáo) cùng 1-2 quản lý cấp trung (dành khoảng 2 giờ phỏng vấn mỗi người)."
    },
    {
      q: "Sau Quick Scan, tôi có bắt buộc phải làm tiếp với AIX không?",
      a: "Hoàn toàn không. Báo cáo Quick Scan là tài sản của doanh nghiệp. Anh/Chị có thể sử dụng nó để đấu thầu hoặc tự triển khai với đội ngũ nội bộ."
    },
    {
      q: "Dữ liệu của chúng tôi có được bảo mật không?",
      a: "Chắc chắn. Mọi dự án đều bắt đầu bằng việc ký kết thỏa thuận bảo mật NDA (Non-Disclosure Agreement) chặt chẽ trước khi AIX tiếp cận bất kỳ hệ thống nào."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Câu hỏi thường gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border bg-background rounded-lg overflow-hidden">
              <button 
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 text-muted-foreground border-t border-border bg-secondary/10">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
