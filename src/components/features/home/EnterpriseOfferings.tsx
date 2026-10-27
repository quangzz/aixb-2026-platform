"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function EnterpriseOfferings() {
  return (
    <section className="py-24" style={{ backgroundColor: "#F7F5F0" }}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-[12px] font-extrabold tracking-[0.2em] uppercase mb-4" style={{ color: "#00262B" }}>
            GIẢI PHÁP DOANH NGHIỆP
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic mb-6 tracking-tight" style={{ color: "#00262B" }}>
            Lựa chọn cho mọi tổ chức
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed max-w-2xl">
            Bạn xứng đáng có một đối tác đào tạo luôn đặt mục tiêu của bạn lên hàng đầu. Với các khóa học và chương trình cấp chứng chỉ từ DeepB AIX, chúng tôi cung cấp cho học viên mọi cấp độ những kỹ năng thiết yếu để thành công.
          </p>
        </div>

        {/* Overlapping Cards */}
        <div className="space-y-32">
          
          {/* Card 1: Drive Business */}
          <div className="relative w-full flex flex-col md:flex-row items-center justify-end">
            {/* Image */}
            <div className="w-full md:w-[75%] h-[300px] md:h-[450px] relative rounded-sm overflow-hidden z-0 shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Drive business" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 md:p-12 shadow-xl rounded-sm w-[90%] md:w-[45%] relative z-10 -mt-20 md:mt-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2"
            >
              <h4 className="text-3xl font-extrabold mb-4" style={{ color: "#00262B" }}>Thúc đẩy doanh nghiệp</h4>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Nuôi dưỡng năng lực và kỹ năng mà doanh nghiệp của bạn cần, đồng thời trao quyền để nhân viên thăng tiến và đóng góp vào tổ chức.
              </p>
              <Link href="/solutions" className="inline-block px-8 py-3.5 font-bold rounded-full transition-transform hover:scale-105 shadow-sm text-sm" style={{ backgroundColor: "#FFD043", color: "#000" }}>
                Khám phá Giải pháp B2B
              </Link>
            </motion.div>
          </div>

          {/* Card 2: Reversed */}
          <div className="relative w-full flex flex-col md:flex-row items-center justify-start">
            {/* Image */}
            <div className="w-full md:w-[75%] h-[300px] md:h-[450px] relative rounded-sm overflow-hidden z-0 shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Empower teams" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-8 md:p-12 shadow-xl rounded-sm w-[90%] md:w-[45%] relative z-10 -mt-20 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 ml-auto"
            >
              <h4 className="text-3xl font-extrabold mb-4" style={{ color: "#00262B" }}>Tự động hóa quy trình</h4>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Tích hợp AI Agentic vào mọi quy trình của tổ chức, từ Chăm sóc khách hàng, Tuyển dụng đến Phân tích dữ liệu để giải phóng sức lao động.
              </p>
              <Link href="/solutions" className="inline-block px-8 py-3.5 font-bold rounded-full transition-transform hover:scale-105 shadow-sm text-sm" style={{ backgroundColor: "#FFD043", color: "#000" }}>
                Xem ví dụ thực tế
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
