# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-RC] - 2026-04-17

### Changed
- Finalized Phase 5: Go-live setup, QA passed without any Next.js runtime issues.
- Integrated C2PA Protocol Meta Tags inside `src/app/layout.tsx` for AI Transparency.
- Optimized Semantic HTML tags & Headings for higher SEO ranking.
- Complete system delivery with Hand-off Document.

## [0.4.0] - 2026-04-17

### Added
- Integrated **HubSpot CRM** REST API sync logic within `src/services/hubspot.ts`.
- Configured automated lead syncing trigger inside `ai-agent.ts` after DeepB's Lead Qualification is complete.
- Scaffolded **Moodle LMS API** in `src/services/moodle.ts` for dynamic course fetching and pre-authorization tokens.
- Created `generatePaymentLink` mock for VNPAY & Airwallex in `src/services/payment.ts`.
- Built Server Action `processCourseEnrollment` to bridge Moodle enrollment and Payments.

## [0.3.0] - 2026-04-17

### Added
- Integrated Vercel AI SDK (`ai` & `@ai-sdk/react`) and `@ai-sdk/google` for Gemini Flash.
- Created `qualifyLeadAgent` Server Action in `src/app/actions/ai-agent.ts` for Lead scoring.
- Implemented `<ConsultingSection />` form to interact with AI API and display `score`, `reasoning`. 
- Built a floating `<ChatWidget />` module connected to `/api/chat` route using RAG/FAQ logic template.
- Implemented Firestore logic schema for Lead capturing `src/services/db.ts` with error fallbacks.

## [0.2.0] - 2026-04-17

### Added
- Created `cn` utility in `src/lib/utils.ts` for handling Tailwind merge/clsx.
- Developed reusable UI elements (`Button`, `Card`, `Badge`) in `src/components/ui`.
- Added fully responsive, B2B styling `Header` and `Footer` layout in `src/components/layout`.
- Constructed core Homepage sections: `HeroSection`, `SocialProofSection`, `CourseGrid`, and `ConsultingSection`.
- Refactored `src/app/page.tsx` and `layout.tsx` to mount the entire website frame optimally using Tailwind v4.

## [0.1.0] - 2026-04-17

### Added
- Initial project setup (Phase 1)
- Next.js 16.2.4 & React 19 App Router structure
- Tailwind CSS v4 & theme variables configurations
- Base dependencies: `lucide-react`, `clsx`, `tailwind-merge`, `framer-motion`, `motion`
- Basic SEO Metadata & Vietnamese language config in root layout
- Font `Inter` integration
- Standard folder structure (`/src/components`, `/src/hooks`, `/src/lib`, `/src/services`, `/src/types`)
- `.env.example` configurations
- `.agents/rules/project-tech-stack.md` for specific standards
