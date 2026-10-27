export function TargetAudience() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Dịch vụ này dành cho ai?</h2>
        <div className="max-w-3xl mx-auto bg-background p-8 rounded-xl border border-border shadow-lg">
          <p className="text-lg text-foreground mb-4 font-semibold">
            Dành riêng cho CEO / Chủ doanh nghiệp cỡ vừa (30-500 nhân sự)
          </p>
          <ul className="text-left space-y-4 text-muted-foreground mt-6">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span>Muốn ứng dụng AI để tối ưu chi phí nhưng <strong>không biết bắt đầu từ đâu</strong>.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span>Đã thử nghiệm một số công cụ (ChatGPT, Copilot) nhưng <strong>chưa thấy hiệu quả rõ rệt</strong> trên toàn hệ thống.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <span>Sợ đầu tư sai lầm hàng tỷ đồng vào các dự án công nghệ rủi ro cao.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
