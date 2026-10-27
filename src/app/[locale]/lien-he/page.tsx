"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Webhook logic will be connected here
    console.log(formData);
    alert("Cảm ơn anh/chị đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ với chuyên gia AIX</h1>
          <p className="text-xl text-muted-foreground">Để lại thông tin hoặc đặt lịch trực tiếp. Chúng tôi luôn sẵn lòng tư vấn.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info & Methods */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-secondary p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6">Thông tin trực tiếp</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Hotline chuyên gia</div>
                    <div className="text-muted-foreground">09xx xxx xxx</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@aix.vn</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Văn phòng chính</div>
                    <div className="text-muted-foreground">Hà Nội, Việt Nam</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-border text-center">
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tư vấn qua Zalo</h3>
              <p className="text-sm text-muted-foreground mb-6">Quét mã QR để trò chuyện trực tiếp với tư vấn viên.</p>
              <div className="w-48 h-48 bg-background border border-border mx-auto rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-medium">[QR Code Zalo]</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-secondary/50 p-8 md:p-10 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold mb-8">Gửi yêu cầu khảo sát</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Họ và tên *</label>
                  <input required type="text" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Nguyễn Văn A" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email doanh nghiệp *</label>
                  <input required type="email" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="name@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Số điện thoại *</label>
                  <input required type="tel" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="090..." value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tên công ty</label>
                  <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Công ty CP..." value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nhu cầu quan tâm *</label>
                <select required className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}>
                  <option value="" disabled>-- Chọn dịch vụ --</option>
                  <option value="quick-scan">Dịch vụ Quick Scan™ (Khảo sát 2 tuần)</option>
                  <option value="full-audit">Dịch vụ Full Audit™ (Kiểm toán toàn diện)</option>
                  <option value="implementation">Triển khai dự án AI cụ thể</option>
                  <option value="training">Đào tạo nội bộ (Academy/Workshop)</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Mô tả ngắn gọn về vấn đề của doanh nghiệp</label>
                <textarea rows={4} className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Ví dụ: Quy trình xuất hóa đơn chậm, dữ liệu chăm sóc khách hàng chưa tận dụng được..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors">
                Đặt lịch trao đổi 15 phút — Miễn phí
              </button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Thông tin của bạn được bảo mật tuyệt đối theo chuẩn an toàn dữ liệu.
              </p>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-96 bg-secondary border border-border rounded-2xl flex items-center justify-center">
          <span className="text-xl text-muted-foreground font-medium">[Bản đồ Văn phòng]</span>
        </div>
      </div>
    </div>
  );
}
