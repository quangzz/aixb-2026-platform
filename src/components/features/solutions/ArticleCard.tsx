import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/solutions";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Clock, ArrowRight } from "lucide-react";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="flex flex-col overflow-hidden group hover:shadow-xl transition-all border border-border/50 bg-background h-full hover:-translate-y-1">
      <Link href={`/blog/${article.slug}`} className="relative h-56 w-full overflow-hidden block">
        <Image 
          src={article.thumbnail} 
          alt={article.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-background/90 text-foreground backdrop-blur-md border-none">{article.category}</Badge>
        </div>
      </Link>
      
      <CardContent className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span>{article.publishedAt}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{article.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${article.slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="text-xl font-bold leading-tight mb-3 line-clamp-3">{article.title}</h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex items-center gap-3">
            <Image src={article.author.avatar} alt={article.author.name} width={32} height={32} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-foreground">{article.author.name}</span>
            </div>
          </div>
          <Link href={`/blog/${article.slug}`} className="text-primary hover:text-primary/70 transition-colors">
            <ArrowRight size={20} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
