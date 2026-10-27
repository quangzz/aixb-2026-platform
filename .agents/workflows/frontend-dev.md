---
description: Quy trình phát triển frontend component, styling, và state management
---

# Workflow: Frontend Development

## Step 1: Xác định Component cần tạo
1. Phân tích design/requirements
2. Xác định component hierarchy (Atomic Design):
   - Atoms: Button, Input, Icon, Label, Badge
   - Molecules: SearchBar, FormField, Card, NavItem
   - Organisms: Header, Sidebar, Form, DataTable
   - Templates: DashboardLayout, AuthLayout
   - Pages: HomePage, ProfilePage

## Step 2: Tạo Layout Components trước
// turbo
```
1. Layout.tsx — main wrapper với Header/Sidebar/Footer
2. Header.tsx — navigation, branding
3. Sidebar.tsx (nếu cần) — side navigation
4. Footer.tsx — links, copyright
```

## Step 3: Tạo Reusable UI Components
// turbo
```
Tạo trong /components/ui/:
- Button.tsx (variants: primary, secondary, outline, ghost)
- Card.tsx (wrapper component with children)
- Input.tsx (form input with label + error)
- Modal.tsx (overlay dialog)
- Spinner.tsx (loading indicator)
```

## Step 4: Styling với Tailwind
Tuân thủ class order:
1. Layout (display, position)
2. Box model (margin, padding, width, height)
3. Typography (text-*, font-*)
4. Visual (color, background, border)
5. Effects (shadow, opacity, transition)
6. Interactive (hover, focus, active)

## Step 5: State Management Decision
```
Chỉ cần local state?        → useState
Complex related state?       → useReducer
Theme/Auth/Lang shared?      → Context API
Data từ Firebase?            → onSnapshot + useState
```

## Step 6: Feature Components
// turbo
```
Tạo trong /components/features/:
- Implement business logic
- Connect to Firebase (nếu cần)
- Handle loading/error states
```

## Step 7: Page Components (nếu có Router)
// turbo
```
Tạo trong /pages/:
- Compose feature + layout components
- Handle route params
- Data fetching tại page level
```

## Step 8: Polish & Verify
```
□ Responsive trên mobile, tablet, desktop
□ Loading states hiển thị đúng
□ Error messages rõ ràng
□ Animations smooth
□ Keyboard navigation hoạt động
□ No console errors
```

## Step 9: Documentation
Chạy `/version-doc` workflow để cập nhật documentation.
