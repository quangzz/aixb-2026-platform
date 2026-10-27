"use client";

import * as React from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/Card";

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });
  
  // Ref để tuôn xuống message cuối cùng
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="w-[350px] shadow-2xl border-primary/20 bg-background/95 backdrop-blur overflow-hidden">
              <CardHeader className="bg-primary/5 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                      <Bot size={18} />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-bold">Trợ Lý AI Tự Chủ</CardTitle>
                      <p className="text-[10px] text-muted-foreground flex items-center mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1 animate-pulse"></span>
                        Đang hoạt động
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X size={20} />
                  </button>
                </div>
                {/* AI Compliance Labeling Strip */}
                <div className="mt-3 bg-primary/5 dark:bg-primary/20 border border-primary/20 dark:border-primary/50 rounded px-2 py-1 flex items-start gap-1.5">
                  <ShieldAlert size={12} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-[9px] leading-tight text-primary dark:text-primary-foreground">
                    Tuân thủ Luật Công nghiệp công nghệ số 2025: Mọi nội dung tư vấn được sinh ra bởi máy móc AI (Gemini Flash). 
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="h-[320px] overflow-y-auto p-4 flex flex-col gap-3">
                {messages.length === 0 && (
                  <div className="text-center text-sm text-muted-foreground mt-10">
                    <Bot size={32} className="mx-auto mb-3 opacity-20" />
                    <p>Chào anh/chị, tôi là Trợ lý AI Phân tích của Học Viện DeepB. Anh/chị cần hỗ trợ thông tin gì về chiến lược triển khai AI ạ?</p>
                  </div>
                )}
                
                {messages.map((m) => (
                  <div key={m.id} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                    <div 
                      className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                        m.role === "user" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-start">
                     <div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2 text-sm max-w-[85%] flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce delay-150"></span>
                     </div>
                   </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              
              <CardFooter className="p-3 border-t bg-card">
                <form onSubmit={handleSubmit} className="flex w-full gap-2 relative">
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Nhập thông điệp..."
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:opacity-50"
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                    <Send size={16} />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <Button
          variant="premium"
          className="rounded-full w-14 h-14 shadow-2xl flex items-center justify-center p-0"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare size={24} />
        </Button>
      )}
    </div>
  );
}
