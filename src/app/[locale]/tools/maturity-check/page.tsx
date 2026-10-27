"use client";

import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

type Question = {
  id: string;
  pillar: string;
  question: string;
  options: { text: string; score: number }[];
};

const questions: Question[] = [
  {
    id: "q1", pillar: "Data",
    question: "Dữ liệu của công ty bạn hiện đang được lưu trữ dưới hình thức nào?",
    options: [
      { text: "Rải rác trên file Excel cá nhân, giấy tờ thủ công", score: 0 },
      { text: "Lưu trữ tập trung trên Google Drive, SharePoint nhưng chưa đồng bộ", score: 2 },
      { text: "Có hệ thống ERP/CRM/Database cơ bản", score: 3 },
      { text: "Có kho dữ liệu (Data Warehouse/Data Lake) tập trung, kết nối API tốt", score: 5 }
    ]
  },
  {
    id: "q2", pillar: "Technology",
    question: "Ngân sách R&D cho công nghệ mới hàng năm là bao nhiêu?",
    options: [
      { text: "Gần như không có, chỉ mua phần mềm kế toán/bán hàng cơ bản", score: 0 },
      { text: "Dưới 2% doanh thu", score: 2 },
      { text: "Từ 2% - 5% doanh thu, có đầu tư thử nghiệm SaaS", score: 4 },
      { text: "Trên 5% doanh thu, có đội ngũ in-house phát triển công nghệ", score: 5 }
    ]
  },
  {
    id: "q3", pillar: "People",
    question: "Mức độ hiểu biết về AI của đội ngũ nhân sự hiện tại?",
    options: [
      { text: "Hầu như không biết, e ngại AI sẽ lấy mất việc", score: 0 },
      { text: "Một vài cá nhân tự dùng ChatGPT cho việc riêng lẻ", score: 2 },
      { text: "Có đào tạo cơ bản, áp dụng AI vào một số quy trình như content, dịch thuật", score: 3 },
      { text: "Văn hóa AI-first, mọi nhân sự đều coi AI là trợ lý bắt buộc", score: 5 }
    ]
  },
  {
    id: "q4", pillar: "Strategy",
    question: "AI đóng vai trò gì trong chiến lược kinh doanh của Ban Giám đốc?",
    options: [
      { text: "Chưa có chiến lược, thấy trend thì muốn tìm hiểu", score: 0 },
      { text: "Chỉ coi AI là một công cụ cắt giảm nhân sự", score: 2 },
      { text: "Đã có kế hoạch dùng AI để tối ưu hóa 1-2 quy trình vận hành cụ thể", score: 4 },
      { text: "AI là trọng tâm chiến lược để tạo ra mô hình kinh doanh mới", score: 5 }
    ]
  }
];

export default function MaturityCheckPage() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is intro, 0-3 are questions, 4 is lead form, 5 is result
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [leadData, setLeadData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleStart = () => setCurrentStep(0);

  const handleAnswer = (score: number) => {
    setAnswers({ ...answers, [questions[currentStep].id]: score });
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 400); // Small delay for UX
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const calculateMaturity = (score: number) => {
    if (score <= 5) return { level: 1, name: "Nhận thức (Awareness)", desc: "Hiểu biết cơ bản, thử nghiệm rời rạc. Cần chuẩn bị dữ liệu.", cta: "Tải AI Readiness Checklist" };
    if (score <= 10) return { level: 2, name: "Khám phá (Exploration)", desc: "Đã có ngân sách nhỏ, thử nghiệm SaaS. Cần xác định quy trình cốt lõi.", cta: "Book Quick Scan™" };
    if (score <= 15) return { level: 3, name: "Áp dụng (Adoption)", desc: "Tích hợp thành công ở vài phòng ban nhỏ. Đang gặp tắc nghẽn mở rộng.", cta: "Book Full Audit™" };
    return { level: 4, name: "Tối ưu (Optimization)", desc: "Dữ liệu lưu thông mượt mà. AI cải thiện trực tiếp quyết định.", cta: "Implementation Sprint™" };
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Calculate score (Max 20 for 4 questions)
    const score = Object.values(answers).reduce((a, b) => a + b, 0);
    setTotalScore(score);

    try {
      // Simulate API call to webhook
      await new Promise(r => setTimeout(r, 1500));
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl flex-1 flex flex-col justify-center">
        
        {/* Intro Step */}
        {currentStep === -1 && (
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Maturity Check</h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Chẩn đoán nhanh vị thế của doanh nghiệp bạn trên bản đồ ứng dụng Trí tuệ nhân tạo. 4 câu hỏi định lượng trong 3 phút.
            </p>
            <button onClick={handleStart} className="bg-primary text-primary-foreground font-bold py-4 px-10 rounded-lg text-lg shadow-xl hover:scale-105 transition-transform">
              Bắt đầu đánh giá
            </button>
          </div>
        )}

        {/* Questions Steps */}
        {currentStep >= 0 && currentStep < questions.length && (
          <div className="w-full animate-in slide-in-from-right fade-in duration-300">
            {/* Progress Bar */}
            <div className="w-full bg-secondary h-2 rounded-full mb-12 overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-500" 
                style={{ width: `${((currentStep) / questions.length) * 100}%` }}
              ></div>
            </div>

            <p className="text-primary font-bold mb-4 tracking-widest uppercase text-sm">Câu {currentStep + 1} / {questions.length} — {questions[currentStep].pillar}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">{questions[currentStep].question}</h2>
            
            <div className="space-y-4">
              {questions[currentStep].options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(opt.score)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all flex items-center justify-between group
                    ${answers[questions[currentStep].id] === opt.score 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border bg-secondary/30 hover:border-primary/50 hover:bg-secondary/60'
                    }
                  `}
                >
                  <span className="text-lg font-medium">{opt.text}</span>
                  <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ml-4
                    ${answers[questions[currentStep].id] === opt.score ? 'border-primary bg-primary' : 'border-muted-foreground group-hover:border-primary/50'}
                  `}>
                    {answers[questions[currentStep].id] === opt.score && <div className="w-2 h-2 bg-background rounded-full"></div>}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-12 flex justify-start">
              <button 
                onClick={handlePrev} 
                disabled={currentStep === 0}
                className={`flex items-center text-muted-foreground font-medium transition-opacity ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'hover:text-foreground opacity-100'}`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" /> Quay lại
              </button>
            </div>
          </div>
        )}

        {/* Gated Lead Form Step */}
        {currentStep === questions.length && (
          <div className="w-full max-w-xl mx-auto animate-in zoom-in fade-in duration-500">
            <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-border shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Đã hoàn thành phân tích</h2>
                <p className="text-muted-foreground">Vui lòng để lại email công việc để nhận Báo cáo kết quả chi tiết kèm đồ thị đánh giá.</p>
              </div>

              <form onSubmit={handleSubmitLead} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Họ và tên</label>
                  <input required type="text" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email công việc</label>
                  <input required type="email" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" value={leadData.email} onChange={e => setLeadData({...leadData, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tên công ty</label>
                  <input required type="text" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" value={leadData.company} onChange={e => setLeadData({...leadData, company: e.target.value})} />
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
                  {isSubmitting ? 'Đang xuất báo cáo...' : <>Xem kết quả ngay <ArrowRight className="ml-2 w-5 h-5" /></>}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Result Step */}
        {currentStep === questions.length + 1 && (
          <div className="w-full animate-in slide-in-from-bottom fade-in duration-700">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Kết quả đánh giá AI Maturity</h1>
              <p className="text-xl text-muted-foreground">Doanh nghiệp của bạn đang ở cấp độ:</p>
            </div>

            {(() => {
              const res = calculateMaturity(totalScore);
              return (
                <div className="bg-secondary p-10 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(0,153,204,0.1)] text-center relative overflow-hidden">
                   {/* Glassmorphism glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-block px-4 py-1 bg-primary/20 text-primary font-bold rounded-full mb-6 uppercase tracking-widest text-sm">
                      Level {res.level}
                    </div>
                    <h2 className="text-4xl font-extrabold text-foreground mb-6">{res.name}</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                      {res.desc}
                    </p>
                    <div className="flex flex-col items-center">
                      <p className="text-sm font-semibold uppercase tracking-wider mb-4 text-foreground">Hành động tiếp theo được khuyến nghị:</p>
                      <button className="bg-foreground text-background font-bold py-4 px-10 rounded-lg text-lg hover:scale-105 transition-transform">
                        {res.cta}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
            
            <p className="text-center text-muted-foreground mt-8">Báo cáo PDF chi tiết đã được gửi đến email <strong>{leadData.email}</strong>.</p>
          </div>
        )}

      </div>
    </div>
  );
}
