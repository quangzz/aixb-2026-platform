"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
// Stub cho static export - sẽ kết nối lại khi có Cloud Functions
async function processCourseEnrollment(id: number, title: string, price: number, email: string) {
  console.log('[STUB] processCourseEnrollment:', { id, title, price, email });
  return { success: false, url: null };
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: { id: number; title: string } | null;
}

export function CheckoutModal({ isOpen, onClose, course }: CheckoutModalProps) {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  if (!course) return null;

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    // Giả định giá fix 5,000,000 cho mọi khóa để demo logic
    const res = await processCourseEnrollment(course!.id, course!.title, 5000000, email);
    
    if (res.success && res.url) {
      // Chuyển hướng người dùng sang VNPAY/Airwallex Sandbox
      window.location.href = res.url;
    } else {
      setLoading(false);
      alert("Hệ thống thanh toán đang bận. Vui lòng thử lại sau.");
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] sm:w-full sm:max-w-md -translate-x-1/2 -translate-y-1/2 bg-background p-6 rounded-xl shadow-2xl border"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold">Xác nhận ghi danh</h3>
                <p className="text-sm text-muted-foreground mt-1">Cổng thanh toán sinh viên B2B</p>
              </div>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-secondary">
                <X size={20} />
              </button>
            </div>

            <div className="bg-secondary/50 p-4 rounded-lg mb-6 border">
              <p className="text-xs text-muted-foreground mb-1">Khóa học đang đăng ký:</p>
              <p className="font-semibold">{course.title}</p>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
                <span className="text-sm font-medium">Tổng thanh toán:</span>
                <span className="font-bold text-primary">5.000.000 VNĐ</span>
              </div>
            </div>

            <form onSubmit={handleCheckout} className="flex flex-col space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email công việc của bạn</label>
                <input 
                  type="email" 
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ceo@company.com" 
                  className="w-full h-10 px-3 rounded-md border border-input focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-accent/10 text-accent p-2 rounded">
                <ShieldCheck size={16} />
                <span>Bảo mật chuẩn mã hoá SSL bởi VNPAY/Airwallex.</span>
              </div>

              <Button type="submit" variant="premium" className="w-full h-11 text-base mt-2" disabled={loading || !email}>
                {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Đang thiết lập mã hoá kết nối...</> : "Thanh Toán & Kích Hoạt LMS"}
              </Button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
