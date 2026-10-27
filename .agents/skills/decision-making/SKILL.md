---
name: Decision Making
description: Framework ra quyết định tech stack, case studies thực tế, và decision matrices (Firebase-first)
---

# Decision Making Skill

## Khi nào sử dụng
Khi bắt đầu dự án mới hoặc cần đưa ra quyết định tech stack. Cung cấp decision trees, matrices, và case studies để đưa ra lựa chọn có cơ sở.

---

## 1. TECH STACK DECISION TREE

```
START: Loại ứng dụng?
│
├─ Landing Page / Portfolio
│  → React + Tailwind + conditional rendering
│
├─ Todo / Note Taking (Personal)
│  → React + Tailwind + localStorage
│
├─ Blog / Content Site
│  → React + Router + Firebase (optional cho CMS)
│
├─ Dashboard / Admin Panel
│  → React + Router + Firebase + Charts (Recharts) + UI Library
│
├─ E-commerce
│  → React + Router + Firebase + react-hook-form
│
├─ Social Media / Community
│  → React + Router + Firebase (real-time) + Auth
│
├─ Chat / Messaging
│  → React + Firebase (real-time subscriptions) + Auth
│
├─ Booking / Scheduling
│  → React + Router + Firebase + Calendar lib
│
├─ Data Visualization
│  → React + Recharts/D3 + Firebase (if DB needed)
│
└─ Game / Interactive
   → React + Canvas + Motion (animation)
```

---

## 2. DECISION MATRICES

### Backend
| Feature Need | None | localStorage | Firebase |
|---|---|---|---|
| Static content | ✅ Best | ❌ | Overkill |
| Single user, local | ✅ | ✅ Best | ❌ |
| Sync across devices | ❌ | ❌ | ✅ Best |
| Multi-user | ❌ | ❌ | ✅ Required |
| Authentication | ❌ | ❌ | ✅ Required |
| Real-time | ❌ | ❌ | ✅ Required |
| File storage | ❌ | ❌ | ✅ Best |

### Routing
| Scenario | No Routing | Hash | React Router |
|---|---|---|---|
| 1-2 views | ✅ Best | Overkill | Overkill |
| 3-5 pages | Maybe | ✅ Good | Maybe |
| 6+ pages | ❌ | Works | ✅ Best |
| Nested routes | ❌ | Hard | ✅ Best |
| SEO important | ❌ | Bad | ✅ Good |

### State Management
| Data Type | useState | Context | Firebase |
|---|---|---|---|
| UI state (modal) | ✅ Best | Overkill | ❌ |
| Form inputs | ✅ Best | ❌ | ❌ |
| Theme preference | Works | ✅ Best | Persist |
| Auth state | ❌ | ✅ Best | Source |
| API/DB data | ❌ | ❌ | ✅ Best |
| Multi-user shared | ❌ | ❌ | ✅ Required |

### Forms
| Scenario | Native useState | react-hook-form |
|---|---|---|
| 1-3 simple fields | ✅ Best | Overkill |
| 5+ fields | Works | ✅ Best |
| Complex validation | Messy | ✅ Best |
| Multi-step form | Complex | ✅ Best |

### UI Libraries
| Need | Custom | Material-UI | Ant Design |
|---|---|---|---|
| Full design control | ✅ Best | Limited | Limited |
| Small bundle | ✅ Best | ❌ Large | OK |
| Fast development | Slow | ✅ Fast | ✅ Fast |
| Admin/Dashboard | OK | ✅ Great | ✅ Best |
| Accessibility | Manual | ✅ Built-in | ✅ Built-in |

---

## 3. CASE STUDIES

### Case 1: Personal Task Manager
```
Complexity: Simple | Est: 2-3 hours | Files: ~5

Stack: React + Tailwind + localStorage
❌ No Router (single page)
❌ No Firebase (single user)

Architecture:
App → TaskInput + TaskFilter + TaskList → TaskItem
Data: localStorage ↔ useState ↔ Components
```

### Case 2: Recipe Sharing Platform
```
Complexity: Medium-Complex | Est: 2-3 days | Files: ~20

Stack: React + Tailwind + Router + Firebase + react-hook-form
✅ Firebase (multi-user, auth, image storage)
✅ Router (home, recipe detail, profile, create, search)
✅ react-hook-form (recipe creation form complex)

Firestore Collections:
- users {displayName, avatarUrl, bio}
- recipes {userId, title, description, imageUrl, category}
- recipes/{id}/ingredients {name, amount}
- recipes/{id}/comments {userId, content, createdAt}

Security Rules:
- Anyone reads published recipes
- Owner creates/edits/deletes own recipes
- Authenticated users comment
```

### Case 3: Real-time Collaborative Whiteboard
```
Complexity: Complex | Est: 1-2 weeks | Files: ~25

Stack: React + Tailwind + Router + Firebase (real-time) + Canvas API + useReducer
✅ Real-time critical (collaboration is core)
✅ useReducer (complex drawing state: objects, layers, undo/redo)
✅ Canvas API (drawing tool)

Firestore Collections:
- boards {name, createdBy}
- boards/{id}/members {userId, role}
- boards/{id}/objects {type, data, createdBy}
```

### Case 4: Restaurant Menu Display
```
Complexity: Simple-Medium | Est: 3-5 days | Files: ~15

Stack: React + Tailwind + Firebase + Motion
❌ No Router (single cycling display)
✅ Firebase (remote updates from admin panel)
✅ Motion (smooth transitions)

Two apps: Display (public) + Admin Panel (authenticated)
```

### Case 5: Fitness Tracking App
```
Complexity: Medium | Est: 1-2 weeks | Files: ~25

Stack: React + Tailwind + Router + Firebase + react-hook-form + Recharts
✅ Router (dashboard, log workout, history, stats, exercises, profile)
✅ react-hook-form (workout logging is complex)
✅ Recharts (progress visualization)

Firestore Collections:
- users {email, name}
- users/{id}/workouts {date, duration, notes}
- users/{id}/workouts/{id}/exercises {exerciseId, order}
- users/{id}/workouts/{id}/exercises/{id}/sets {reps, weight}
- exercises {name, muscleGroup, equipment} (shared)
- users/{id}/personalRecords {exerciseId, weight, date}
```

---

## 4. RED FLAGS CHECKLIST

### Over-Engineering ❌
- Firebase cho single-user todo app
- React Router cho 2 pages
- Redux cho simple state
- Custom auth thay Firebase Auth
- Context cho mọi thứ
- Premature optimization

### Under-Engineering ❌
- localStorage cho multi-user app
- No routing cho 10+ pages
- No form validation
- No error handling
- No loading states
- No TypeScript types

---

## 5. QUICK DECISION FLOW

```
Khi user yêu cầu build app mới:

1. Hỏi: "Có bao nhiêu pages?" → Routing decision
2. Hỏi: "Cần lưu data không? Multi-user?" → Backend decision
3. Hỏi: "Cần auth?" → Auth decision
4. Hỏi: "Cần real-time?" → Real-time decision
5. Hỏi: "Form phức tạp?" → Form library decision
6. Hỏi: "Cần charts?" → Chart library decision

Nếu không rõ → Start simple, add complexity khi cần.
```
