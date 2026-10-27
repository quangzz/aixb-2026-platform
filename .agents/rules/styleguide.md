# Styleguide - Coding Conventions & Methodology

## Mục đích
Quy tắc chung về coding conventions, quy trình phát triển, và code quality cho mọi dự án. Áp dụng bất kể tech stack nào.

---

## 1. QUY TRÌNH PHÁT TRIỂN (7 Giai đoạn)

### Phase 1: Discovery (Khám phá)
1. Đọc và phân tích yêu cầu người dùng
2. Xác định user personas và use cases
3. Liệt kê functional & non-functional requirements
4. Xác định constraints (thời gian, tech stack, budget)

### Phase 2: Classification (Phân loại)
```
Complexity Assessment:
□ Số lượng pages/views (1-3: Simple | 4-10: Medium | 10+: Complex)
□ Data persistence needs (None | Local | Server)
□ Real-time requirements (None | Polling | WebSocket)
□ Authentication needs (None | Simple | OAuth/SSO)
□ Third-party integrations (None | 1-2 | 3+)
□ Custom logic complexity (CRUD | Business logic | AI/ML)

Scoring:
- Simple (0-5 points): Single page app, no backend
- Medium (6-12 points): Multi-page, basic backend
- Complex (13+ points): Full-stack, multiple integrations
```

### Phase 3: Design (Thiết kế)
- Architecture design (patterns, data flow)
- Component architecture (Atomic Design)
- Database schema (nếu cần)

### Phase 4: Implementation (Triển khai)
```
Order of operations:
1. Setup Project Structure → folder structure, dependencies
2. Backend First (nếu cần) → schema, security rules, API
3. Core Components → layout, reusable UI, navigation
4. Feature Components → page-specific, business logic
5. Polish → error handling, loading states, responsive, animations
6. Testing & Optimization
```

### Phase 5: Testing (Kiểm tra)
```
□ Functionality: features work, forms validate, data persists, navigation
□ UI/UX: responsive, loading states, error messages, animations
□ Performance: load <3s, responsive interactions, no memory leaks
□ Accessibility: keyboard nav, screen reader, color contrast
□ Security (nếu backend): auth, authorization, input sanitized
```

### Phase 6: Iteration (Lặp lại)
- User feedback loop
- Refactoring triggers (xem section 5)

### Phase 7: Delivery (Bàn giao)
- Documentation, code comments, handoff

---

## 2. FILE NAMING CONVENTIONS

```
Component files:     PascalCase.tsx    → Button.tsx, UserProfile.tsx
Non-component files: kebab-case.ts     → utils.ts, api-client.ts
Styles:              kebab-case.css    → theme.css, fonts.css
Constants:           kebab-case.ts     → constants.ts
Types:               kebab-case.ts     → types.ts, database.ts
Hooks:               camelCase.ts      → useAuth.ts, useFetch.ts
```

## 3. NAMING CONVENTIONS (Code)

```
Variables & Functions: camelCase
- Descriptive: isLoading (not flag), userId (not id)
- Boolean: is*, has*, should*, can*
  ✅ isAuthenticated, hasPermission, shouldRender
  ❌ auth, perm, render

Constants: UPPER_SNAKE_CASE
  const MAX_RETRIES = 3;
  const API_ENDPOINT = 'https://...';

Components: PascalCase
  UserProfileCard, ShoppingCartItem

Types/Interfaces: PascalCase
  interface UserProfile { ... }
  type ButtonVariant = 'primary' | 'secondary';
```

## 4. IMPORT ORDER

```
1. React / framework imports
2. Third-party libraries
3. Internal components
4. Utils / helpers
5. Types
6. Styles / assets
```

## 5. REFACTORING TRIGGERS

```
Khi nào cần refactor:

1. Code Duplication     → Same code 3+ places → Extract to component/function
2. Large Components     → >300 lines → Split into smaller components
3. Complex Functions    → >50 lines → Break into smaller functions
                        → >3 levels nesting → Simplify logic
4. Props Drilling       → Passing props >3 levels → Use Context or composition
5. Performance Issues   → Slow renders → Memoization (useMemo, memo)
6. Hard to Test         → Tightly coupled → Dependency injection
                        → Side effects → Extract to custom hooks
```

## 6. CODE QUALITY PRINCIPLES

```
1. DRY  (Don't Repeat Yourself)  → Extract reusable code
2. KISS (Keep It Simple, Stupid)  → Simplest solution that works
3. YAGNI (You Aren't Gonna Need It) → Don't add unused features
4. Single Responsibility → One component = one purpose
5. Composition over Inheritance → Compose small parts
```

## 7. COMMENTS RULES

```
✅ Comment when:
- Complex logic that isn't obvious
- Workarounds or hacks
- TODO items
- Business rules

❌ Don't comment obvious code:
  // Set count to 0
  const count = 0;

Comment formats:
  // TODO: Add error handling
  // FIXME: This causes memory leak
  // HACK: Workaround for Safari bug
  // NOTE: Keep this in sync with backend
```

## 8. ANTI-PATTERNS TO AVOID

```
❌ Prop Drilling Hell       → Passing props 5+ levels → Use Context
❌ Massive Components       → 1000+ lines → Split
❌ Unnecessary Re-renders   → Every keystroke re-renders all → Proper state
❌ Mixing Concerns          → UI + API + logic in 1 component → Separate
❌ No Error Handling        → Assuming everything works → Try-catch
❌ Hardcoded Values         → API URLs in components → Env vars, constants
❌ No Loading States        → No feedback during fetch → Spinners, skeletons
❌ Ignoring Accessibility   → No keyboard nav → Semantic HTML, ARIA
```

## 9. OVER vs UNDER-ENGINEERING

```
❌ Over-Engineering:
- Firebase cho single-user todo app
- React Router cho 2 pages
- Redux cho simple counter
- Custom auth thay Firebase Auth
- Context cho everything

❌ Under-Engineering:
- localStorage cho multi-user app
- No routing cho 10+ pages
- No form validation
- No error handling
- No TypeScript types

✅ Right Approach:
- Start simple, add complexity only when needed
- Use built-in solutions first
- Libraries for complex problems, custom code for simple ones
```

---

**Version**: 1.0 — Antigravity
**Adapted from**: Figma Vibe Coding Guidelines
