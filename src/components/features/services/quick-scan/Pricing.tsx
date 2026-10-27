import Link from 'next/link';

export function Pricing() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-secondary p-6 sm:p-10 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(0,153,204,0.1)] relative overflow-hidden">
          {/* Glassmorphism glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold mb-2">Đầu tư xứng đáng</h2>
          <p className="text-muted-foreground mb-8">Chi phí tối thiểu để giảm thiểu tối đa rủi ro thất bại khi làm AI.</p>
          
          <div className="mb-6">
            <span className="text-lg text-muted-foreground line-through decoration-destructive decoration-2">Giá thị trường (Big Tech): &gt;500.000.000 VNĐ</span>
          </div>
          
          <div className="flex justify-center items-end gap-2 mb-8">
            <span className="text-xl font-medium text-muted-foreground mb-2">Từ</span>
            <span className="text-5xl font-extrabold text-primary">30</span>
            <span className="text-2xl font-bold text-foreground mb-1">Triệu VNĐ</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-8">
            *Khoản phí này sẽ được khấu trừ trực tiếp 100% nếu doanh nghiệp ký kết hợp đồng Implementation Sprint™ tiếp theo.
          </p>
          
          <Link href="#contact" className="inline-block w-full bg-foreground text-background font-bold py-4 rounded-lg hover:bg-foreground/90 transition-colors text-lg">
            Khảo sát sự phù hợp ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
