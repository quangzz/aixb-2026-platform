# Backend Development Rules (Firebase-First)

## Mục đích
Rules chi tiết cho Backend Development. **Ưu tiên Firebase** (Firestore, Auth, Storage, Functions). Supabase chỉ đề cập như alternative.

---

## 1. KHI NÀO CẦN BACKEND

### 1.1 Classification System
```
FirebaseRequired — Prompt nói rõ: "backend", "database", "API", "multi-user", "authentication", "real-time"
→ Action: Setup Firebase ngay

FirebaseSuggest — Chức năng CẦN server persistence: user accounts, data sharing, cross-device sync, chat, leaderboards
→ Action: Build frontend first, sau đó suggest Firebase

PureFrontend — Single-user, no persistence, localStorage đủ, static content, prototype
→ Action: Không cần Firebase
```

### 1.2 Decision Tree
```
START
├─ Prompt mention "backend", "database", "API"? → YES → FirebaseRequired
├─ Multi-user collaboration? → YES → FirebaseRequired
├─ User accounts needed? → YES → FirebaseSuggest
├─ Data persist across sessions/devices? → YES → FirebaseSuggest
├─ Real-time updates needed? → YES → FirebaseRequired
└─ localStorage đủ? → YES → PureFrontend | NO → FirebaseSuggest
```

---

## 2. FIRESTORE DATABASE DESIGN

### 2.1 Collection & Document Naming
```
✅ Good:
- Collection: plural, lowercase: users, posts, comments
- Document fields: camelCase: createdAt, userId, isPublished

❌ Bad:
- Users (capitalized), blogPost (for collection), items (too generic)
```

### 2.2 Schema Design Patterns
```
Rule: Timestamps trên mọi document
{
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp()
}

Rule: Reference other documents bằng ID string
{
  userId: "abc123",        // Reference to users collection
  categoryId: "cat456"     // Reference to categories collection
}

Rule: Chọn Data Model phù hợp
- Embedded (nested): Data luôn đọc cùng nhau, ít update riêng lẻ
- Referenced (ID): Data đọc riêng, update thường xuyên, many-to-many
- Subcollection: Data lớn, cần query riêng, pagination

Ví dụ:
// Embedded — address luôn đi kèm user
users/{userId}: { name, email, address: { street, city, zip } }

// Subcollection — mỗi user có nhiều orders
users/{userId}/orders/{orderId}: { items, total, status }

// Referenced — post reference tới user
posts/{postId}: { title, content, userId: "abc123" }
```

### 2.3 Data Types
```
- string: cho text
- number: cho integers và decimals
- boolean: cho true/false
- timestamp: cho dates (dùng serverTimestamp())
- map: cho nested objects
- array: cho simple lists (KHÔNG dùng cho query phức tạp)
- reference: cho document references
- geopoint: cho location data
```

---

## 3. FIREBASE SECURITY RULES

### 3.1 Fundamentals
```
Rule: LUÔN viết Security Rules — default deny all
Rule: KHÔNG BAO GIỜ trust client-side checks

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Default: deny all
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### 3.2 Common Patterns
```
// Public Read, Authenticated Write
match /posts/{postId} {
  allow read: if true;
  allow create: if request.auth != null;
  allow update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
}

// User Can Only Access Own Data
match /users/{userId} {
  allow read, write: if request.auth != null && request.auth.uid == userId;
}

// Role-Based Access
match /admin/{document} {
  allow read, write: if request.auth != null
    && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
}

// Data Validation in Rules
match /posts/{postId} {
  allow create: if request.auth != null
    && request.resource.data.title is string
    && request.resource.data.title.size() > 0
    && request.resource.data.title.size() <= 200;
}
```

---

## 4. FIREBASE AUTHENTICATION

### 4.1 Setup
```
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app);
```

### 4.2 Auth Operations
```
// Sign Up
const { user } = await createUserWithEmailAndPassword(auth, email, password);

// Sign In
const { user } = await signInWithEmailAndPassword(auth, email, password);

// Google Sign In
const provider = new GoogleAuthProvider();
const { user } = await signInWithPopup(auth, provider);

// Sign Out
await signOut(auth);

// Auth State Listener
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);
```

### 4.3 Protected Routes
```
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login" />;
  return children;
}
```

### 4.4 User Profiles
```
Rule: Tạo document profile riêng trong Firestore khi user đăng ký
Rule: Auth user object chỉ chứa email/uid — data bổ sung lưu Firestore

// Tạo profile khi sign up
await setDoc(doc(db, 'users', user.uid), {
  email: user.email,
  displayName: '',
  avatarUrl: '',
  createdAt: serverTimestamp()
});
```

---

## 5. FIRESTORE CRUD OPERATIONS

### 5.1 Create
```
// Add document (auto ID)
const docRef = await addDoc(collection(db, 'posts'), {
  title: 'My Post',
  content: 'Hello World',
  userId: auth.currentUser.uid,
  createdAt: serverTimestamp()
});

// Set document (custom ID)
await setDoc(doc(db, 'users', userId), { name, email });
```

### 5.2 Read
```
// Get single document
const docSnap = await getDoc(doc(db, 'posts', postId));
if (docSnap.exists()) { const data = docSnap.data(); }

// Get collection
const querySnapshot = await getDocs(collection(db, 'posts'));
const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

// Query with filters
const q = query(
  collection(db, 'posts'),
  where('userId', '==', userId),
  where('status', '==', 'published'),
  orderBy('createdAt', 'desc'),
  limit(10)
);
const snapshot = await getDocs(q);

// Pagination
const q = query(collection(db, 'posts'), orderBy('createdAt'), startAfter(lastDoc), limit(10));
```

### 5.3 Update
```
await updateDoc(doc(db, 'posts', postId), {
  title: 'Updated Title',
  updatedAt: serverTimestamp()
});
```

### 5.4 Delete
```
await deleteDoc(doc(db, 'posts', postId));

// Soft Delete (preferred)
await updateDoc(doc(db, 'posts', postId), {
  deletedAt: serverTimestamp()
});
// Filter: where('deletedAt', '==', null)
```

---

## 6. REAL-TIME LISTENERS

```
// Listen to document
useEffect(() => {
  const unsubscribe = onSnapshot(doc(db, 'posts', postId), (doc) => {
    setPost({ id: doc.id, ...doc.data() });
  });
  return () => unsubscribe();
}, [postId]);

// Listen to collection with query
useEffect(() => {
  const q = query(collection(db, 'posts'), where('userId', '==', userId), orderBy('createdAt', 'desc'));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(posts);
    setLoading(false);
  });
  return () => unsubscribe();
}, [userId]);

Rule: LUÔN cleanup listener trong useEffect return
Rule: Debounce nếu updates quá nhanh
```

---

## 7. FIREBASE STORAGE

```
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

// Upload
const storageRef = ref(storage, `avatars/${userId}/${file.name}`);
await uploadBytes(storageRef, file);
const url = await getDownloadURL(storageRef);

// Delete
await deleteObject(ref(storage, filePath));

// Validate before upload
if (file.size > 5 * 1024 * 1024) { alert('Max 5MB'); return; }
const allowed = ['image/jpeg', 'image/png', 'image/webp'];
if (!allowed.includes(file.type)) { alert('Invalid file type'); return; }
```

### Storage Security Rules
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /avatars/{userId}/{fileName} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
  }
}
```

---

## 8. ENVIRONMENT VARIABLES

```
Rule: Firebase Config
// .env
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx

// Access in code
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

Rule: .gitignore
.env
.env.local
.env.production

Rule: Provide .env.example template
```

---

## 9. ERROR HANDLING

```
Rule: Always handle Firestore errors
try {
  const docRef = await addDoc(collection(db, 'posts'), data);
} catch (error) {
  if (error.code === 'permission-denied') {
    alert('Bạn không có quyền thực hiện thao tác này.');
  } else if (error.code === 'not-found') {
    alert('Dữ liệu không tồn tại.');
  } else {
    alert('Có lỗi xảy ra. Vui lòng thử lại.');
    console.error('Firestore error:', error);
  }
}

Rule: Retry logic for network errors
Rule: Offline detection: navigator.onLine + window events
Rule: User-friendly messages, KHÔNG show raw error
```

---

## 10. PERFORMANCE & OPTIMIZATION

```
Rule: Select only needed fields (nếu dùng Cloud Functions)
Rule: Pagination — KHÔNG fetch all documents cùng lúc
Rule: Composite indexes khi query multiple where + orderBy
Rule: Use subcollections thay vì deep nested maps cho large datasets
Rule: Cache data phía client khi hợp lý
Rule: Batch writes cho multiple operations
const batch = writeBatch(db);
batch.set(docRef1, data1);
batch.update(docRef2, data2);
await batch.commit();
```

---

## 11. SECURITY BEST PRACTICES

```
Rule: Validate on Client AND Server (Security Rules)
Rule: Never log sensitive data (passwords, tokens)
Rule: Use Security Rules for ALL access control — never rely on client-side only
Rule: Rate limiting via Cloud Functions nếu cần
Rule: Input sanitization trước khi save
```

---

## 12. FIREBASE vs SUPABASE (Quick Reference)

```
┌─────────────────┬──────────────┬──────────────┐
│ Feature         │ Firebase     │ Supabase     │
├─────────────────┼──────────────┼──────────────┤
│ Database        │ Firestore    │ PostgreSQL   │
│ Query Model     │ NoSQL        │ SQL          │
│ Auth            │ ✅ Built-in  │ ✅ Built-in  │
│ Real-time       │ ✅ Native    │ ✅ Channels  │
│ Storage         │ ✅ Cloud     │ ✅ S3-based  │
│ Functions       │ ✅ Cloud Fn  │ ✅ Edge Fn   │
│ Security        │ Rules-based  │ RLS (SQL)    │
│ Hosting         │ ✅ Built-in  │ ❌ External  │
│ Analytics       │ ✅ Built-in  │ ❌ External  │
│ Open Source     │ ❌           │ ✅           │
│ Pricing         │ Pay-as-go   │ Free tier    │
│ Mobile SDK      │ ✅ Native    │ ⚡ REST-based│
└─────────────────┴──────────────┴──────────────┘

Ưu tiên Firebase khi: mobile app, Google ecosystem, NoSQL fits, cần hosting/analytics
Chọn Supabase khi: cần SQL complex queries, open source, self-host
```

---

**Version**: 1.0 — Antigravity
**Adapted from**: Figma Vibe Coding Backend Rules (converted Supabase → Firebase)
