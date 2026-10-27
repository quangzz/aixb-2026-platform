# Project Tech Stack - Học Viện DeepB - AIX

## 1. Tech Stack Khai Báo
- **Framework:** Next.js (App Router) + React 19
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS v4, Lucide React (Icons)
- **AI Core:** Google Gemini API (Gemini 3.1 Pro/2.5 Flash), Pinecone/Weaviate (Vector DB tương lai)
- **Hệ sinh thái:** Moodle 4.5 (LMS), HubSpot (CRM), Airwallex/VNPAY (Payment)

## 2. Folder Structure Thực Tế
```
/src
├── /app                   # App Router (Pages & Layout)
├── /components
│   ├── /layout           # Header, Footer, Sidebar
│   ├── /ui               # Base components: Button, Input, Modal (Shadcn/custom)
│   └── /features         # Complex logic components
├── /hooks                 # Custom React Hooks
├── /lib                   # Config, Firebase, Utils, API Clients
├── /services              # AI Agents, Moodle API, HubSpot API logic
└── /types                 # TypeScript interfaces
/styles
├── theme.css             # Tailwind v4 variables
└── index.css             # Tailwind v4 imports
```

## 3. State Management Strategy
- **Local State:** `useState` (UI Toggle), `useReducer` (Complex forms).
- **Global UI State:** `Context API` (Theme, Language).
- **Server State / Cache:** Next.js App Router (React Server Components) kết hợp Firebase/Firestore cho real-time tracking hoặc session/Auth.

## 4. Backend Config
- Dùng Next.js Server Actions làm API trung gian kết nối tới Moodle/HubSpot/Gemini.
- Caching: Next.js Data Cache và Full Route Cache tối ưu SSR/SSG.

## 5. Project Conventions
- Mobile-first approach cho UI.
- Tuân thủ UI minh bạch theo Luật AI (Có AI Warning/Logo).
- Response time < 3s cho mọi load interactions.
