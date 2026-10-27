"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Search, Video, LineChart, FileText, Settings, ArrowRight, Loader2, Sparkles } from "lucide-react";
// Stub cho static export - sẽ kết nối lại khi có Cloud Functions
async function qualifyLeadAgent(_params: Record<string, string>) {
  console.log('[STUB] qualifyLeadAgent:', _params);
  return { success: true, score: 75, reasoning: 'Doanh nghiệp phù hợp để ứng dụng AI ở giai đoạn khám phá.', nextAction: 'Đặt lịch tư vấn Quick Scan™ với chuyên gia.' };
}

const steps = [
  { icon: Search, title: "1. Khảo sát", desc: "Thu thập hồ sơ nghiệp vụ." },
  { icon: Video, title: "2. Phỏng vấn", desc: "Meeting 2 giờ cùng chuyên gia." },
  { icon: LineChart, title: "3. Phân tích", desc: "1 tuần đánh giá hệ thống." },
  { icon: FileText, title: "4. Báo cáo", desc: "Đề xuất lộ trình AI (1 ngày)." },
  { icon: Settings, title: "5. Triển khai", desc: "Tùy chỉnh & Tích hợp." },
];

export function ConsultingSection() {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<null | {score: number, reasoning: string, nextAction: string}>(null);

  async function handleAIQualify(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const leadParam = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      jobTitle: formData.get("jobTitle") as string,
      companySize: formData.get("companySize") as string,
      painPoint: formData.get("painPoint") as string,
    };
    
    const res = await qualifyLeadAgent(leadParam);
    if(res.success) {
      setResult({score: res.score, reasoning: res.reasoning, nextAction: res.nextAction});
    }
    setLoading(false);
  }

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Không Chỉ Đào Tạo.<br />Chúng Tôi Hỗ Trợ Triển Khai.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Nhập thông tin nghiệp vụ bên dưới. Đặc vụ AI sẽ tự động chấm điểm tiềm năng và tạo ngay phác đồ tiếp cận ban đầu cho doanh nghiệp của bạn.
            </p>
            
            <Card className="border shadow-lg p-6 flex-1">
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.form key="form" onSubmit={handleAIQualify} className="flex flex-col gap-4" exit={{ opacity: 0, y: -20 }}>
                    <div className="grid grid-cols-2 gap-4">
                      <input name="name" required placeholder="Họ và Tên" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                      <input name="email" required type="email" placeholder="Email Công Ty" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input name="jobTitle" required placeholder="Chức Danh (VD: CEO, CIO)" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                      <select name="companySize" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground">
                        <option value="">Quy mô nhân sự</option>
                        <option value="1-50">1 - 50</option>
                        <option value="51-200">51 - 200</option>
                        <option value="200+">Trên 200</option>
                      </select>
                    </div>
                    <textarea name="painPoint" required placeholder="Vấn đề hiện tại doanh nghiệp đang gặp phải về ứng dụng AI là gì?" rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></textarea>
                    <Button variant="premium" className="w-full mt-2" disabled={loading}>
                      {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Hệ Thống AI Đang Phân Tích...</> : <><Sparkles className="mr-2 h-4 w-4" /> Bắt Đầu Chấm Điểm & Phân Tích</>}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4 h-full justify-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">
                      {result.score}
                    </div>
                    <h3 className="text-center font-bold text-lg">Phân Tích Sơ Bộ Từ AI</h3>
                    <div className="bg-secondary p-4 rounded-md text-sm text-secondary-foreground space-y-2">
                      <p><strong>Lý do:</strong> {result.reasoning}</p>
                      <p><strong>Khuyến nghị:</strong> {result.nextAction}</p>
                    </div>
                    <Button onClick={() => setResult(null)} variant="outline" className="mt-4">Khảo sát lại</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          {/* Quy trình 5 Bước */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-8 top-8 bottom-8 w-px bg-border hidden md:block"></div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="relative z-10 border-0 shadow-sm bg-background">
                  <CardContent className="p-4 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
