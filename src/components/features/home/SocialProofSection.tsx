"use client";
import { motion } from "motion/react";
import { Building2, Briefcase, Landmark, Monitor, Server, Rocket } from "lucide-react";

const companies = [
  { name: "Viettel Post" },
  { name: "Viettel AI" },
  { name: "Vinhomes" },
  { name: "ROX Group" },
  { name: "Taseco" },
  { name: "Toyota VN" },
  { name: "Unilever" },
  { name: "Samsung" },
  { name: "Electrolux" },
  { name: "Nestlé" },
  { name: "Pepsico" },
  { name: "HP Việt Nam" },
  { name: "Hyundai" },
  { name: "UNESCO" },
  { name: "UNDP" },
  { name: "Oxfam" },
  { name: "CARE" },
];

export function SocialProofSection() {
  return (
    <section className="py-10 bg-background border-b">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
            Các tổ chức, tập đoàn hàng đầu tin tưởng đội ngũ chuyên gia AIxB
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <span className="text-xl font-bold tracking-tight">{company.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
