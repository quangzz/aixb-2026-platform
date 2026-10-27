"use client";

import React, { useState, useMemo } from "react";
import { Article, ArticleCategory } from "@/data/solutions";
import { ArticleCard } from "./ArticleCard";
import { SolutionsFilter } from "./SolutionsFilter";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const CATEGORIES = ["All", "GenAI Trends", "Agentic AI", "Strategy", "Leadership", "Case Studies"];

interface SolutionsListProps {
  articles: Article[];
}

export function SolutionsList({ articles }: SolutionsListProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9); // Pagination cơ bản (Load More)

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchCat = activeCategory === "All" || article.category === activeCategory;
      const searchStr = searchQuery.toLowerCase();
      const matchSearch = article.title.toLowerCase().includes(searchStr) || article.excerpt.toLowerCase().includes(searchStr);
      return matchCat && matchSearch;
    });
  }, [articles, activeCategory, searchQuery]);

  // Cắt mảng để làm Pagination
  const paginatedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <section className="py-20 bg-background min-h-[800px]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <SolutionsFilter 
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => { setActiveCategory(cat); setVisibleCount(9); }}
          searchQuery={searchQuery}
          onSearchChange={(q) => { setSearchQuery(q); setVisibleCount(9); }}
        />

        <div className="mb-8 font-medium text-muted-foreground flex justify-between items-center border-b pb-4">
          <p>Tìm thấy <span className="text-foreground font-bold">{filteredArticles.length}</span> báo cáo kỹ thuật.</p>
        </div>

        {paginatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 9) * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-muted/30 rounded-2xl border border-dashed">
            <h3 className="text-xl font-bold mb-2">Không tìm thấy bài viết nào</h3>
            <p className="text-muted-foreground">Vui lòng thay đổi từ khóa "<i>{searchQuery}</i>" hoặc chọn danh mục khác.</p>
          </div>
        )}

        {hasMore && (
          <div className="mt-16 text-center">
            <Button 
              onClick={() => setVisibleCount(prev => prev + 6)} 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-6 text-base shadow-sm hover:shadow-md"
            >
              Chuyển tới trang tiếp theo
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
