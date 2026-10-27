import { setRequestLocale } from 'next-intl/server';
import { ArrowRight, Check, X } from 'lucide-react';
import Link from 'next/link';

export default async function Framework5DPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const steps = [
    {
      id: "Discover",
      title: "Discover (Khám phá)",
      desc: "Xác định rõ tầm nhìn, kỳ vọng và những hạn chế hiện tại của doanh nghiệp. Chúng tôi lắng nghe CEO để hiểu rõ 'bài toán kinh doanh' trước khi nghĩ đến 'giải pháp công nghệ'."
    },
    {
      id: "Diagnose",
      title: "Diagnose (Chẩn đoán)",
      desc: "Đánh giá mức độ trưởng thành dữ liệu (Data Maturity) và năng lực tiếp nhận công nghệ của đội ngũ. Kết quả là bản báo cáo minh bạch về những điểm mù cần khắc phục."
    },
    {
      id: "Design",
      title: "Design (Thiết kế)",
      desc: "Xây dựng kiến trúc giải pháp và lộ trình triển khai (Roadmap) cá nhân hóa. Đảm bảo mọi tính năng được đề xuất đều gắn liền trực tiếp với chỉ số ROI."
    },
    {
      id: "Deploy",
      title: "Deploy (Triển khai)",
      desc: "Thực thi nhanh gọn theo mô hình Agile (Sprint 2-4 tuần). Đưa các Use-case vào hoạt động thực tế, ưu tiên giải quyết các quy trình mang lại giá trị nhanh nhất (Quick Wins)."
    },
    {
      id: "Drive",
      title: "Drive (Vận hành & Mở rộng)",
      desc: "Đào tạo đội ngũ nội bộ làm chủ hệ thống, đo lường hiệu năng thực tế và tiếp tục tối ưu hóa. Thiết lập văn hóa AI-first để doanh nghiệp tự động hóa liên tục."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          5D Framework™<br />
          <span className="text-primary text-2xl md:text-3xl mt-4 block">Phương pháp AI-first cho doanh nghiệp cỡ vừa Việt Nam</span>
        </h1>
        
        {/* 5 Steps Section */}
        <div className="max-w-4xl mx-auto my-20">
          <div className="space-y-12 relative">
            {/* Connecting vertical line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 w-full">
                  <div className={`bg-secondary p-8 rounded-xl border border-border ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="w-14 h-14 rounded-full bg-background border-4 border-primary flex items-center justify-center text-primary font-bold text-xl z-10 shrink-0 shadow-lg shadow-primary/20">
                  {idx + 1}
                </div>
                
                <div className="flex-1 w-full hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto my-24 overflow-x-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Vì sao chọn AIX 5D Framework?</h2>
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-secondary">
                <th className="p-4 border-b border-border">Tiêu chí</th>
                <th className="p-4 border-b border-border text-primary font-bold">AIX 5D Framework</th>
                <th className="p-4 border-b border-border">Tư vấn truyền thống</th>
                <th className="p-4 border-b border-border">Mua SaaS Tool</th>
                <th className="p-4 border-b border-border">Tự học / Freelancer</th>
              </tr>
            </thead>
            <tbody className="bg-background">
              <tr>
                <td className="p-4 border-b border-border font-medium">Bám sát thực tế DN</td>
                <td className="p-4 border-b border-border text-primary"><Check className="w-5 h-5 inline" /> Rất cao</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Lý thuyết</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Rập khuôn</td>
                <td className="p-4 border-b border-border"><Check className="w-5 h-5 inline text-muted-foreground" /> Trung bình</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border font-medium">Tốc độ triển khai</td>
                <td className="p-4 border-b border-border text-primary"><Check className="w-5 h-5 inline" /> Nhanh (Sprint)</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Rất chậm (Năm)</td>
                <td className="p-4 border-b border-border"><Check className="w-5 h-5 inline text-muted-foreground" /> Nhanh</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Chậm</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border font-medium">Cam kết ROI</td>
                <td className="p-4 border-b border-border text-primary"><Check className="w-5 h-5 inline" /> Rõ ràng từ đầu</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Mơ hồ</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Không có</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Không có</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border font-medium">Chuyển giao tri thức</td>
                <td className="p-4 border-b border-border text-primary"><Check className="w-5 h-5 inline" /> Trọn vẹn</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Giữ bí quyết</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Phụ thuộc vendor</td>
                <td className="p-4 border-b border-border"><X className="w-5 h-5 inline text-muted-foreground" /> Khó kế thừa</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center bg-secondary p-12 rounded-2xl border border-border">
          <h2 className="text-3xl font-bold mb-6">Trải nghiệm 5D Framework™ ngay hôm nay</h2>
          <Link href="/dich-vu/quick-scan" className="inline-flex items-center bg-primary text-primary-foreground font-bold py-4 px-8 rounded-lg hover:scale-105 transition-transform">
            Bắt đầu với Quick Scan <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
