import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng để bắt đầu?</h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Đặt lịch trao đổi 15 phút với chuyên gia của chúng tôi để xác định xem Quick Scan có phù hợp với công ty bạn hay không.
        </p>
        <Link 
          href="/lien-he" 
          className="inline-block bg-background text-foreground font-bold py-4 px-10 rounded-lg text-lg shadow-xl hover:scale-105 transition-transform"
        >
          Đặt lịch trao đổi 15 phút — Miễn phí
        </Link>
        <p className="mt-6 text-sm opacity-70">Không cam kết. Không ràng buộc.</p>
      </div>
    </section>
  );
}
