---
description: Quy trình code review, refactoring, và audit (performance + accessibility)
---

# Workflow: Code Review & Refactor

## Step 1: Kiểm tra Refactoring Triggers
```
□ Code duplication? (same code 3+ places)
□ Component quá lớn? (>300 lines)
□ Function quá dài? (>50 lines)
□ Props drilling? (>3 levels deep)
□ Quá nhiều useState? (>5 trong 1 component)
□ Performance chậm? (re-render không cần thiết)
□ Hard to understand? (cần nhiều thời gian đọc)
```

## Step 2: Anti-Patterns Check
```
□ Prop drilling hell → Dùng Context
□ Massive components → Split
□ Unnecessary re-renders → memo, useMemo, useCallback
□ Mixing concerns → Tách UI / logic / data
□ No error handling → Thêm try-catch, boundaries
□ Hardcoded values → Env vars, constants
□ No loading states → Thêm spinners, skeletons
□ No TypeScript types → Thêm interfaces
□ Index as key → Dùng unique ID
□ useEffect missing deps → Complete dependency array
```

## Step 3: Performance Audit
```
1. React DevTools Profiler → tìm slow renders
2. Network tab → check bundle size, API calls
3. Lighthouse → performance score
4. Check:
   □ Code splitting (lazy imports) cho routes
   □ Image optimization (lazy loading, proper sizes)
   □ Debouncing cho search/input events
   □ Memoization cho expensive calculations
   □ Firebase queries optimized (select fields, pagination)
```

## Step 4: Accessibility Audit
```
□ Semantic HTML (header, nav, main, article, footer)
□ Heading hierarchy (h1→h2→h3, no skipping)
□ Alt text on all images
□ Button vs Link (action vs navigation)
□ ARIA labels on icon-only buttons
□ Keyboard navigation works
□ Focus indicators visible
□ Color contrast sufficient
□ Escape closes modals
□ Form labels linked to inputs
```

## Step 5: Execute Refactoring
```
1. Identify smallest refactor unit
2. Make ONE change at a time
3. Test after EACH change
4. Commit after each successful refactor
5. Don't refactor + add features simultaneously
```

## Step 6: Document Changes
Chạy `/version-doc` workflow để ghi nhận refactoring changes.
