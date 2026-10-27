# Developer / Agent Lessons

Đây là tài liệu lưu trữ những bài học, các chỉnh sửa quy trình và cách giải quyết các lỗi gặp phải trong suốt quá trình phát triển dự án **DeepB - AIX**. Bất kỳ khi nào có một thiết lập sai, một hướng đi cần điều chỉnh từ User, Agent có trách nhiệm ghi nhận lại vào đây để học hỏi và không lặp lại lỗi.

## Timeline & Lessons Learned

### [2026-04-17]
- **Vấn đề:** Khi dùng dòng lệnh khởi tạo Next.js create-next-app tại thư mục chứa dấu cách và chữ viết hoa, npm sẽ từ chối tạo do lỗi naming restriction.
- **Giải pháp / Bài học:** Bằng cách init project vào thư mục tạm webapp rồi di chuyển tất cả file ra thư mục gốc, và cập nhật lại package.json, ta có thể bypass được giới hạn này một cách an toàn.

---
*(Các chỉnh sửa tiếp theo từ quá trình làm việc sẽ được cập nhật liên tục vào đây)*
