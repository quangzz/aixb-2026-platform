import React from "react";
import Image from "next/image";
import { Trophy, Award, Landmark, GraduationCap } from "lucide-react";

export function AwardsPartners() {
  const awards = [
    { icon: <Trophy size={24} className="text-yellow-500"/>, title: "Top 10 AI Innovation 2026", org: "Tạp chí Forbes Tech" },
    { icon: <Award size={24} className="text-primary"/>, title: "Best B2B SaaS Implementer", org: "Hiệp Hội Tech Việt Nam" },
    { icon: <Landmark size={24} className="text-emerald-500"/>, title: "Chuẩn Bảo Mật ISO 42001", org: "Tổ chức Tiêu chuẩn Quốc tế" },
    { icon: <GraduationCap size={24} className="text-accent"/>, title: "Nghiên cứu QLoRA Nổi Bật", org: "Hội Nghị Trí Tuệ Nhân Tạo Á Châu" },
  ];

  const partners = Array.from({ length: 6 }).map((_, i) => (
    `https://placehold.co/200x80/f1f5f9/94a3b8?text=Bank/Retail+${i+1}`
  ));

  return (
    <section className="py-24 bg-muted border-t">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Phần Giải Thưởng */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Sự Công Nhận Từ Giới Học Thuật</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {awards.map((award, i) => (
               <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border border-border/50">
                 <div className="bg-muted p-4 rounded-full mb-4">
                   {award.icon}
                 </div>
                 <h4 className="font-bold text-base mb-2 text-foreground">{award.title}</h4>
                 <p className="text-xs text-muted-foreground">{award.org}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Phần Đối Tác */}
        <div className="border-t border-border/50 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-foreground">Đối Tác Đào Tạo Cốt Lõi</h2>
            <p className="text-muted-foreground text-sm">Hơn 50 Tập đoàn đa quốc gia và Ngân hàng đã phó thác lộ trình AI Khép kín cho chúng tôi.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale">
            {partners.map((logo, i) => (
               <img key={i} src={logo} alt="Partner Logo" className="h-12 md:h-16 object-contain hover:grayscale-0 transition-all cursor-pointer" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
