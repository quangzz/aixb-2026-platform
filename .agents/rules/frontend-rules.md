# Frontend Development Rules

## Mục đích
Rules chi tiết cho Frontend Development: component architecture, state management, hooks, styling, performance, accessibility, forms, error handling.

---

## 1. COMPONENT ARCHITECTURE

### 1.1 Organization Rules
```
Rule: Single Responsibility Principle
- One component = one clear purpose
- If describing component needs "and", split it

✅ ProductCard (displays product), AddToCartButton (adds to cart)
❌ ProductCardWithCartAndWishlist (too many responsibilities)

Rule: Component File Structure
/src/app/components/
  ├── layout/          # Layout: Header, Sidebar, Footer
  ├── ui/              # Reusable: Button, Card, Input, Modal
  └── features/        # Feature-specific: ProductList, ShoppingCart

Rule: Component Naming
- PascalCase for component files: Button.tsx
- Descriptive names: UserProfileCard not Card1
```

### 1.2 Design Patterns
```
Rule: Composition over Inheritance
✅ <Card><CardHeader title="Hello" /><CardContent>{children}</CardContent></Card>
❌ <Card type="withHeader" title="Hello">{children}</Card>

Rule: Props Interface Definition
- Always define prop types (TypeScript interfaces)
- Optional props with ? or default values

Rule: Use children for wrapper components
Rule: Use render props for complex logic
Rule: Compound Components for related groups (Tabs, Accordion)
```

### 1.3 Size Limits
```
- Component file: < 300 lines → Consider splitting
- Single function: < 50 lines → Break down
- JSX return: < 150 lines → Extract sub-components
- Props count: < 10 → Consider composition
- State variables: < 5 useState → Consider useReducer
- useEffect count: < 3 → Consider custom hooks
- Nesting level: < 4 → Flatten or extract
```

---

## 2. STATE MANAGEMENT

### 2.1 useState (Local UI State)
```
✅ Use for: modal open/closed, form inputs, toggles, component-specific data
❌ Don't use for: API data, derived values (useMemo), values that don't cause re-render

Rule: Functional update for state depending on previous value
✅ setCount(prev => prev + 1)
❌ setCount(count + 1) // Stale closure risk

Rule: Separate unrelated state
✅ const [name, setName] = useState(''); const [email, setEmail] = useState('');
❌ const [form, setForm] = useState({ name: '', email: '' }); // Unless always updated together
```

### 2.2 useReducer (Complex Local State)
```
✅ Use when: complex transitions, multiple related values, predictable updates
- Define types outside component
- Pure function (no side effects)
- Return new state object (immutable)
```

### 2.3 Context (Shared State)
```
✅ Use for: theme, auth state, user preferences, language/i18n
❌ Don't use for: frequently changing values, component-level state, server data

Pattern: createContext → Provider component → custom hook (useTheme, useAuth)
Always throw error if used outside Provider
Memoize context values: const value = useMemo(() => ({ theme, setTheme }), [theme]);
```

### 2.4 Server State (Firebase)
```
✅ Always use for: user data, persistent data, shared data, API responses

Pattern with Firestore:
const [data, setData] = useState<Type[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, 'items'), (snapshot) => {
    setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  });
  return () => unsubscribe();
}, []);
```

---

## 3. HOOKS RULES

```
Rule: Rules of Hooks (React Official)
1. Only call hooks at the top level
2. Only call hooks from React functions
3. Don't call hooks inside loops, conditions, nested functions

Rule: useEffect Dependencies — always complete dependency array
Rule: useEffect Cleanup — always cleanup subscriptions/listeners
Rule: useMemo — only for expensive calculations, don't overuse
Rule: useCallback — when passing functions to memoized children

Rule: Custom Hooks
- Must start with "use": useAuth, useFetch, useLocalStorage
- Create when: reusing stateful logic across components
```

---

## 4. STYLING (TAILWIND CSS v4)

```
Rule: Utility Classes Priority
✅ Use Tailwind for: layout, responsive, colors, hover/focus states
❌ Use theme.css tokens for: custom font sizes, font weights, line heights

Rule: Responsive Design — Mobile-first approach
<div className="w-full md:w-1/2 lg:w-1/3">
Breakpoints: sm:640px | md:768px | lg:1024px | xl:1280px | 2xl:1536px

Rule: Dark Mode — Use dark: prefix
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">

Rule: Class Organization Order
1. Layout (display, position)
2. Box model (margin, padding, width, height)
3. Typography (text-*, font-*)
4. Visual (color, background, border)
5. Effects (shadow, opacity, transition)
6. Interactive (hover, focus, active)

Rule: Tailwind v4 uses CSS-based configuration
- All customization in theme.css
- Don't create tailwind.config.js
- Font imports ONLY in fonts.css
```

---

## 5. PERFORMANCE

```
Rule: Prevent Unnecessary Re-renders
- Use React.memo for pure components
- Stable keys in lists (item.id, NOT index or Math.random())

Rule: Code Splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
<Suspense fallback={<Loading />}><Dashboard /></Suspense>

Rule: Debouncing — for search inputs and frequent events (300ms)

Rule: Import only what you need
✅ import { Button } from 'lucide-react';
❌ import * as Icons from 'lucide-react';

Rule: Lazy Load Images
<img src="image.jpg" loading="lazy" alt="Description" />
```

---

## 6. ACCESSIBILITY

```
Rule: Semantic HTML — <header>, <nav>, <main>, <article>, <aside>, <footer>
Rule: Heading Hierarchy — h1-h6 in order, don't skip levels
Rule: Button vs Link — <button> for actions, <a> for navigation
Rule: ARIA Labels — for icons without text: <button aria-label="Close">
Rule: ARIA Live Regions — for dynamic content: <div role="alert" aria-live="assertive">
Rule: Focus Management — visible focus indicators, logical tab order
Rule: Escape Key — close modals/dropdowns with Escape
Rule: Skip Links — for long navigation
```

---

## 7. IMAGE & ASSET RULES

```
Rule: Alt Text — always meaningful
✅ alt="Woman in red dress walking in Paris street"
❌ alt="image" or alt=""

Rule: Responsive Images — use object-fit
className="w-full h-64 object-cover"

Rule: Icon SVGs — use lucide-react
import { Heart, Star, Menu } from 'lucide-react';
```

---

## 8. FORM RULES

```
Rule: Simple Forms (1-4 fields) — Native useState
Rule: Complex Forms (5+ fields) — react-hook-form

Rule: Validation
- Always validate on client before submitting
- If using Firebase, validate server-side too
- Show errors clearly with red border + message

Rule: Error Display
<input className={errors.email ? 'border-red-500' : 'border-gray-300'} />
{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
```

---

## 9. ERROR HANDLING

```
Rule: Error Boundaries — wrap app in ErrorBoundary component
Rule: Always Show Loading States — spinner or skeleton
Rule: User-Friendly Messages
❌ "Error: Network request failed"
✅ "Không thể tải dữ liệu. Vui lòng kiểm tra kết nối mạng và thử lại."

Rule: Actionable Errors — provide retry button
```

---

## 10. CODE QUALITY

```
Rule: Component Structure Order
1. Type definitions
2. Component function
3. State declarations
4. Refs
5. Effects
6. Event handlers
7. Render helpers
8. Return JSX
9. Export

Rule: TypeScript
- Type everything: props, state, function returns, API responses
- Avoid 'any', use 'unknown' if needed
```

---

## 11. TESTING & DEBUGGING

```
Rule: Remove console.logs before finalizing
Rule: Use meaningful console messages during development
if (process.env.NODE_ENV === 'development') {
  console.log('User authenticated:', user.email);
}
```

---

**Version**: 1.0 — Antigravity
**Adapted from**: Figma Vibe Coding Frontend Rules
