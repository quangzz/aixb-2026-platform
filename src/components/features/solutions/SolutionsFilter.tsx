"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Search } from "lucide-react";

interface FilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SolutionsFilter({ categories, activeCategory, onCategoryChange, searchQuery, onSearchChange }: FilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-muted/30 p-4 rounded-xl border mb-12">
      <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap text-sm px-4 py-1.5"
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>
      
      <div className="relative w-full md:w-72 shrink-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input 
          type="text" 
          placeholder="Tìm kiếm bài viết..." 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-background border border-border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
        />
      </div>
    </div>
  );
}
