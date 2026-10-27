---
description: Quy trình debug và fix lỗi
---

# Debug & Fix Workflow

Workflow này được sử dụng khi người dùng báo lỗi. Nguyên tắc cốt lõi: **KHÔNG đoán và sửa mù**. Nếu thông tin lỗi chưa đủ để xác định root cause, PHẢI thêm debug log trước.

## Các bước thực hiện

### 1. Thu thập thông tin lỗi
- Đọc mô tả lỗi từ user
- Xác định khu vực code liên quan
- Kiểm tra xem có error message cụ thể không

### 2. Kiểm tra log hiện có
- Đọc terminal server log
- Xem browser console (F12) nếu là lỗi frontend
- Kiểm tra network requests

### 3. Đánh giá: Đủ thông tin chưa?

**Nếu ĐỦ thông tin** → nhảy đến bước 5.

**Nếu CHƯA ĐỦ** → tiếp tục bước 4.

### 4. Thêm debug log (BẮT BUỘC khi chưa đủ thông tin)

```javascript
// Log format chuẩn
console.log("[DEBUG][module] message", JSON.stringify(data));
```

Quy tắc thêm debug log:
- Format: `[DEBUG][module] message`
- Log ở ĐẦU function (input), ở GIỮA (branching), và ở CUỐI (output)
- Log data dạng `JSON.stringify()` để dễ đọc
- Limit string output để tránh log quá lớn

### 5. Reproduce và đọc log

- Mở browser console (F12)
- Thực hiện lại thao tác gây lỗi
- Đọc log output, so sánh expected vs actual

### 6. Xác định root cause từ log

- Phân tích log data
- Xác định chính xác file, function, và điều kiện gây lỗi
- Document root cause ngắn gọn trước khi fix

### 7. Fix lỗi

- Sửa đúng root cause, không sửa triệu chứng
- Test lại flow sau khi fix

### 8. Dọn dẹp debug log

- Xóa hoặc comment out các `console.log("[DEBUG]...")` đã thêm
- Commit/save clean code
