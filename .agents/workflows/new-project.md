---
description: Quy trình bắt đầu dự án mới từ phân tích yêu cầu đến scaffolding
---

# Workflow: Bắt Đầu Dự Án Mới

## Step 1: Phân tích yêu cầu
1. Đọc kỹ yêu cầu của user
2. Xác định:
   - Core purpose của ứng dụng
   - End users là ai
   - Must-have vs nice-to-have features
   - Constraints (thời gian, tech, complexity)

## Step 2: Đánh giá Complexity
Tính điểm theo 6 yếu tố:
- Số pages/views: 1-3(1đ) | 4-10(2đ) | 10+(3đ)
- Data persistence: None(0đ) | Local(1đ) | Server(2đ)
- Real-time: None(0đ) | Polling(1đ) | WebSocket(2đ)
- Auth: None(0đ) | Simple(1đ) | OAuth/SSO(2đ)
- Third-party: None(0đ) | 1-2(1đ) | 3+(2đ)
- Logic: CRUD(1đ) | Business(2đ) | AI/ML(3đ)

→ Simple(0-5) | Medium(6-12) | Complex(13+)

## Step 3: Backend Decision
```
Hỏi: Cần backend không?
├─ Prompt nói rõ backend/database/API → FirebaseRequired
├─ Multi-user / real-time → FirebaseRequired
├─ User accounts / cross-device sync → FirebaseSuggest
├─ localStorage đủ → PureFrontend
└─ Không chắc → FirebaseSuggest
```

## Step 4: Tech Stack Selection
// turbo
Dựa vào complexity, chọn từ reference chart:
```
Landing Page       → React + Tailwind
Todo App           → React + Tailwind + localStorage
Dashboard          → React + Router + Firebase + Charts
E-commerce         → React + Router + Firebase + Forms
Chat App           → React + Firebase (real-time) + Auth
```

## Step 5: Project Scaffolding
// turbo
```bash
# Tạo project Vite + React + TypeScript
npx -y create-vite@latest ./ --template react-ts

# Install dependencies
npm install

# Install Tailwind CSS v4
npm install tailwindcss @tailwindcss/vite

# Firebase (nếu cần)
npm install firebase

# React Router (nếu 4+ pages)
npm install react-router

# Additional libs theo nhu cầu
npm install lucide-react          # Icons
npm install react-hook-form       # Complex forms
npm install recharts              # Charts
npm install motion                # Animations
```

## Step 6: Setup File Structure
Tạo folder structure theo architecture-rules.md:
```
/src/app/components/{layout,ui,features}
/src/app/{pages,hooks,context,lib,utils,types}
/src/styles/{theme.css,fonts.css,index.css}
```

## Step 7: Firebase Setup (nếu cần)
1. Tạo Firebase project tại console.firebase.google.com
2. Enable services cần thiết (Auth, Firestore, Storage)
3. Copy config vào `.env`
4. Tạo `src/app/lib/firebase.ts` với config
5. Setup Security Rules
6. Chạy `/backend-setup` workflow

## Step 8: Version & Documentation
Chạy `/version-doc` workflow để tạo initial version documentation.
