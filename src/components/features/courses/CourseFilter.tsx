"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface CourseFilterProps {
  onFilterChange: (type: string, audience: string, industry: string) => void;
  activeType: string;
  activeAudience: string;
  activeIndustry: string;
}

export function CourseFilter({ onFilterChange, activeType, activeAudience, activeIndustry }: CourseFilterProps) {
  const types = ["All", "Training", "Consulting"];
  const audiences = ["All", "C-Suite", "IT Managers", "All Levels"];
  const industries = ["All", "General", "Finance", "Healthcare"];

  return (
    <div className="bg-muted/50 p-6 rounded-2xl mb-12 border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Type Filter */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Loại Hình</h3>
          <div className="flex flex-wrap gap-2">
            {types.map(t => (
              <Badge 
                key={t} 
                variant={activeType === t ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => onFilterChange(t, activeAudience, activeIndustry)}
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Audience Filter */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Đối Tượng</h3>
          <div className="flex flex-wrap gap-2">
            {audiences.map(a => (
              <Badge 
                key={a} 
                variant={activeAudience === a ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => onFilterChange(activeType, a, activeIndustry)}
              >
                {a}
              </Badge>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Chuyên Ngành</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map(i => (
              <Badge 
                key={i} 
                variant={activeIndustry === i ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => onFilterChange(activeType, activeAudience, i)}
              >
                {i}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
