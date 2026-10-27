"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BadgeCheck, Shield, Award, LineChart } from "lucide-react";

const skills = [
  {
    title: "Chứng chỉ Chuyên nghiệp (Professional Certificates)",
    description: "Xây dựng các kỹ năng cần thiết để phát triển năng lực nội bộ và thăng tiến sự nghiệp, được cấp bởi DeepB AIX.",
    icon: BadgeCheck,
  },
  {
    title: "Chương trình Cấp Quản lý (Executive Education)",
    description: "Trang bị cho đội ngũ lãnh đạo tư duy chiến lược và khả năng ra quyết định dựa trên AI và dữ liệu.",
    icon: Award,
  },
  {
    title: "Đào tạo Thực chiến (Bootcamps)",
    description: "Các khóa học chuyên sâu, cường độ cao giúp học viên làm chủ công cụ AI tự chủ trong thời gian ngắn nhất.",
    icon: LineChart,
  },
];

export function EvergreenSkillsSection() {
  return (
    <section className="py-24 bg-background border-b">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              Kỹ năng thực tiễn và<br/>Chứng chỉ uy tín
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Cung cấp cho nhân viên của bạn những kỹ năng cốt lõi (Evergreen skills) và chứng chỉ cần thiết để thúc đẩy sự đổi mới và tự chủ trong công việc, đáp ứng tiêu chuẩn của kỷ nguyên AI.
            </p>

            <div className="space-y-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center text-primary">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image/Visual Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* The credential/certificate visualization */}
            <div className="relative aspect-[4/5] bg-secondary/50 rounded-sm p-8 shadow-inner border flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Shield size={120} />
              </div>
              
              <div className="bg-secondary p-6 rounded-sm shadow-xl w-full max-w-sm border z-10">
                <div className="flex justify-center mb-6">
                  <BadgeCheck size={48} className="text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-wide text-foreground">DeepB Certified</h4>
                <p className="text-sm font-semibold text-muted-foreground mb-6">AI Agentic Practitioner</p>
                
                <div className="space-y-3 w-full">
                  <div className="h-2 bg-secondary rounded-full w-full"></div>
                  <div className="h-2 bg-secondary rounded-full w-5/6 mx-auto"></div>
                  <div className="h-2 bg-secondary rounded-full w-4/6 mx-auto"></div>
                </div>
                
                <div className="mt-8 pt-6 border-t flex justify-between items-center text-xs text-muted-foreground font-medium">
                  <span>Cấp bởi DeepB AIX</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
