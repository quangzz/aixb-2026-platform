"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Lightbulb, Users, Shield, Zap, Database, Presentation } from "lucide-react";

const academies = [
  {
    title: "AI Leadership Academy",
    description: "Dành cho C-level & Quản lý cấp cao. Chiến lược ứng dụng AI vào vận hành doanh nghiệp.",
    icon: Users,
    href: "/academies/leadership"
  },
  {
    title: "AI Marketing & Sales",
    description: "Tự động hóa quy trình tạo content, phân tích khách hàng và phễu chuyển đổi với AI.",
    icon: Presentation,
    href: "/academies/marketing"
  },
  {
    title: "AI Operations & Tech",
    description: "Làm chủ các công cụ AI, agentic workflows để tối ưu hóa quy trình nội bộ.",
    icon: Zap,
    href: "/academies/operations"
  },
  {
    title: "Data & AI Governance",
    description: "Quản trị dữ liệu, bảo mật và đạo đức AI trong môi trường doanh nghiệp.",
    icon: Shield,
    href: "/academies/governance"
  }
];

export function AcademiesSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              DeepB Academies
            </h2>
            <p className="text-lg text-muted-foreground">
              Các học viện chuyên đề được thiết kế riêng biệt cho từng bộ phận trong doanh nghiệp. Đào tạo theo hướng thực chiến và ra kết quả ngay.
            </p>
          </div>
          <Link href="/academies" className="hidden md:flex items-center text-accent font-semibold hover:underline mt-4 md:mt-0">
            Xem tất cả Học viện <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academies.map((academy, index) => {
            const Icon = academy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-sm shadow-sm border hover:shadow-md transition-shadow group flex flex-col sm:flex-row gap-6"
              >
                <div className="bg-primary/5 p-4 rounded-full h-fit group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {academy.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {academy.description}
                  </p>
                  <Link href={academy.href} className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors">
                    Tìm hiểu thêm <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/academies" className="flex items-center justify-center text-accent font-semibold hover:underline">
            Xem tất cả Học viện <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
