---
description: Quy trình quản trị version và viết documentation sau mỗi lần làm việc
---

# Workflow: Version & Documentation Management

## Mục đích
Mỗi lần hoàn thành một phần công việc, **BẮT BUỘC** phải:
1. Ghi nhận version (những gì đã thay đổi)
2. Cập nhật documentation

## Step 1: Tạo/Cập nhật CHANGELOG.md
// turbo
Thêm entry mới vào `CHANGELOG.md` ở root project:

```markdown
## [x.x.x] - YYYY-MM-DD

### Added
- Mô tả tính năng mới

### Changed
- Mô tả thay đổi

### Fixed
- Mô tả bug đã fix

### Removed
- Mô tả tính năng đã bỏ

### Files Changed
- `path/to/file1.tsx` — mô tả ngắn
- `path/to/file2.ts` — mô tả ngắn
```

### Quy tắc đánh version (Semantic Versioning):
```
MAJOR.MINOR.PATCH

MAJOR: Breaking changes, thay đổi lớn kiến trúc
MINOR: Thêm tính năng mới (backward compatible)
PATCH: Bug fix, refactor nhỏ

Ví dụ:
- 0.1.0 → Initial setup
- 0.2.0 → Thêm auth feature
- 0.2.1 → Fix login bug
- 1.0.0 → Release version đầu tiên
```

## Step 2: Cập nhật README.md (nếu cần)
// turbo
Kiểm tra và cập nhật các section:
```
□ Features list — thêm tính năng mới
□ Setup instructions — nếu thêm dependencies/config mới
□ Environment variables — nếu thêm env vars mới
□ Tech stack — nếu thêm library mới
```

## Step 3: Viết Session Summary
// turbo
Tạo/cập nhật file `docs/sessions/YYYY-MM-DD.md`:

```markdown
# Session: YYYY-MM-DD

## Mục tiêu
- Mô tả mục tiêu của phiên làm việc

## Công việc đã hoàn thành
- [ ] Task 1 — mô tả
- [ ] Task 2 — mô tả

## Quyết định kỹ thuật
- Chọn X thay vì Y vì lý do Z

## Vấn đề gặp phải
- Vấn đề: ...
- Giải pháp: ...

## TODO tiếp theo
- [ ] Task tiếp theo 1
- [ ] Task tiếp theo 2

## Files Changed
| File | Action | Description |
|------|--------|-------------|
| `path/to/file` | Modified | Mô tả |
```

## Step 4: Git Commit (nếu dùng Git)
```bash
# Stage changes
git add .

# Commit với conventional format
git commit -m "type(scope): description"

# Types:
# feat: tính năng mới
# fix: bug fix
# refactor: refactoring
# style: formatting, styling
# docs: documentation
# chore: maintenance tasks
# test: tests

# Ví dụ:
git commit -m "feat(auth): add Google sign-in with Firebase"
git commit -m "fix(cart): resolve duplicate item bug"
git commit -m "docs: update README with Firebase setup"
```

## Step 5: Tag Release (cho milestones quan trọng)
```bash
git tag -a v0.2.0 -m "Add authentication feature"
git push origin v0.2.0
```

## Checklist cuối phiên làm việc
```
□ CHANGELOG.md đã cập nhật
□ Session summary đã viết
□ README.md đã cập nhật (nếu cần)
□ Code đã commit với message rõ ràng
□ Tag version (nếu milestone)
□ TODO list cho phiên tiếp theo đã ghi
```
