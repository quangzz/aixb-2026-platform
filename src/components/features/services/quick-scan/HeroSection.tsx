import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-background border-b border-border text-center">
      <div className="absolute inset-0 bg-primary/10 blur-[100px] pointer-events-none rounded-full max-w-lg mx-auto"></div>
      <div className="container relative mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
          Quick Scan™<br />
          <span className="text-primary text-3xl md:text-4xl mt-4 block">2 tuần, biết ngay 3 quy trình AI ưu tiên nhất cho doanh nghiệp</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Xóa bỏ sự hoang mang. Phân tích dữ liệu thực tế và nhận lộ trình triển khai AI khả thi nhất cho công ty của bạn.
        </p>
        <Link href="#contact" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-[0_0_20px_rgba(0,153,204,0.3)] transition-all">
          Đặt lịch trao đổi 15 phút — miễn phí
        </Link>
      </div>
    </section>
  );
}
