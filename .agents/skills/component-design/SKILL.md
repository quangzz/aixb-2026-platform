---
name: Component Design
description: Kỹ năng thiết kế component theo Atomic Design, patterns, và accessibility best practices
---

# Component Design Skill

## Khi nào sử dụng
Khi cần tạo components mới, refactor existing components, hoặc cần reference về component patterns.

---

## 1. ATOMIC DESIGN METHODOLOGY

```
Level 1: Atoms (Base components) — không dependency, highly reusable
└─ Button, Input, Icon, Label, Badge, Avatar, Spinner

Level 2: Molecules (Simple combinations) — combine atoms, single purpose
└─ SearchBar, FormField, Card, NavItem, UserBadge

Level 3: Organisms (Complex sections) — business logic, multiple molecules
└─ Header, Sidebar, DataTable, CommentSection, ProductGrid

Level 4: Templates (Page layouts) — layout only, no data
└─ DashboardLayout, AuthLayout, PublicLayout

Level 5: Pages (Specific instances) — data fetching, route-specific
└─ HomePage, ProfilePage, SettingsPage
```

---

## 2. COMPONENT CREATION CHECKLIST

```
Khi tạo component mới, đảm bảo:

□ Single Responsibility — chỉ làm 1 việc
□ TypeScript interface cho props
□ Default values cho optional props
□ Error/loading states handled
□ Accessible (semantic HTML, ARIA, keyboard)
□ Responsive (mobile-first)
□ < 300 lines (nếu dài hơn → split)
□ Key props cho lists (unique ID, không dùng index)
```

---

## 3. COMPONENT TEMPLATES

### Atom: Button
```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}
```

### Molecule: FormField
```tsx
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({ label, error, required, children }: FormFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
```

### Organism: DataTable
```tsx
interface Column<T> {
  key: keyof T;
  title: string;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T extends { id: string }>({
  columns, data, loading, emptyMessage = 'Không có dữ liệu'
}: DataTableProps<T>) {
  if (loading) return <TableSkeleton rows={5} cols={columns.length} />;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(col => (
              <th key={String(col.key)} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr><td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">{emptyMessage}</td></tr>
          ) : (
            data.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map(col => (
                  <td key={String(col.key)} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {col.render ? col.render(item[col.key], item) : String(item[col.key])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
```

---

## 4. COMPOUND COMPONENT PATTERN

### Tabs Component
```tsx
const TabsContext = createContext<{
  activeTab: number;
  setActiveTab: (index: number) => void;
} | null>(null);

export function Tabs({ children, defaultTab = 0 }: { children: ReactNode; defaultTab?: number }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children }: { children: ReactNode }) {
  return <div className="flex border-b border-gray-200">{children}</div>;
}

export function Tab({ children, index }: { children: ReactNode; index: number }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab must be used within Tabs');
  return (
    <button
      onClick={() => ctx.setActiveTab(index)}
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        ctx.activeTab === index
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700'
      }`}
    >
      {children}
    </button>
  );
}

export function TabPanel({ children, index }: { children: ReactNode; index: number }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('TabPanel must be used within Tabs');
  return ctx.activeTab === index ? <div className="py-4">{children}</div> : null;
}
```

---

## 5. ACCESSIBILITY CHECKLIST

```
Mỗi component phải đáp ứng:

Interactive elements:
□ Keyboard accessible (Tab, Enter, Space, Escape)
□ Visible focus indicators (focus:ring-2)
□ ARIA labels cho icon-only buttons

Forms:
□ Labels linked to inputs (htmlFor + id)
□ Error messages linked (aria-describedby)
□ Required fields marked (aria-required)

Dynamic content:
□ Loading states announced (aria-busy)
□ Errors announced (role="alert")
□ State changes communicated (aria-expanded, aria-selected)

General:
□ Semantic HTML elements
□ Color alone not used to convey meaning
□ Text has sufficient contrast (4.5:1 minimum)
```
