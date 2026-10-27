export function Timeline() {
  const steps = [
    { title: "Kick-off", desc: "Xác định mục tiêu kinh doanh lõi với CEO." },
    { title: "Data scan", desc: "Đánh giá nhanh tình trạng dữ liệu hiện tại." },
    { title: "Phỏng vấn", desc: "Làm việc với 1-2 quản lý cấp trung (Ops/Sales)." },
    { title: "Phân tích", desc: "Chuyên gia AIX xử lý dữ liệu và xây dựng mô hình giả lập." },
    { title: "Trình bày", desc: "Báo cáo trực tiếp với Ban giám đốc." }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Lộ trình 2 tuần (10 ngày làm việc)</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Connecting Line - Căn chỉnh đường nối đi qua tâm vòng tròn số (top-6) */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-border -z-10"></div>
          
          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center text-primary font-bold text-lg mb-4 shadow-lg shadow-primary/20">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
