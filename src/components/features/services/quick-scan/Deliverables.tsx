import { CheckCircle } from 'lucide-react';

export function Deliverables() {
  const items = [
    "Báo cáo 3 quy trình AI ưu tiên cao nhất",
    "Ước tính ROI (Tỷ suất hoàn vốn) cụ thể",
    "Roadmap triển khai chi tiết bước tiếp theo",
    "Buổi thuyết trình trực tiếp 1:1 với CEO"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Anh/Chị nhận được gì?</h2>
            <p className="text-muted-foreground mb-8">
              Chỉ sau 2 tuần làm việc, chúng tôi sẽ bàn giao một kế hoạch rõ ràng bằng số liệu, giúp loại bỏ hoàn toàn sự cảm tính trong quyết định đầu tư công nghệ.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-secondary p-8 rounded-xl border border-border">
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mr-3 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
