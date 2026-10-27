---
description: Quy trình setup Firebase backend - Firestore, Auth, Storage, Security Rules
---

# Workflow: Firebase Backend Setup

## Step 1: Tạo Firebase Project
1. Vào [Firebase Console](https://console.firebase.google.com)
2. Create new project (hoặc chọn existing)
3. Enable Google Analytics (optional)

## Step 2: Enable Services
Bật các services cần thiết:
```
□ Authentication — Email/Password, Google (tuỳ yêu cầu)
□ Cloud Firestore — Create database, chọn region gần nhất
□ Cloud Storage — Nếu cần upload files
□ Hosting — Nếu deploy trên Firebase
```

## Step 3: Lấy Config
1. Project Settings → Your apps → Web app → Register
2. Copy firebaseConfig
3. Tạo file `.env`:
```env
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
```

## Step 4: Install Firebase SDK
// turbo
```bash
npm install firebase
```

## Step 5: Tạo Firebase Config File
// turbo
Tạo `src/app/lib/firebase.ts`:
```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

## Step 6: Thiết kế Firestore Schema
1. Xác định collections cần thiết
2. Xác định document structure cho mỗi collection
3. Xác định relationships (embedded vs referenced vs subcollection)
4. Đảm bảo mọi document có `createdAt` và `updatedAt`

## Step 7: Viết Security Rules
// turbo
Tạo `firestore.rules`:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users — chỉ truy cập data của mình
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Public collection — ai cũng đọc được, auth mới write
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null
        && request.auth.uid == resource.data.userId;
    }

    // Default deny
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Step 8: Setup Auth (nếu cần)
// turbo
Tạo `src/app/hooks/useAuth.ts` và `src/app/context/AuthContext.tsx`
- Auth state listener
- Sign up / Sign in / Sign out functions
- ProtectedRoute component

## Step 9: Test Security Rules
```
□ Anonymous user KHÔNG thể read private data
□ Authenticated user CHỈ thấy data của mình
□ Create hoạt động với auth
□ Update/Delete chỉ owner
□ Invalid data bị reject
```

## Step 10: Deploy Rules
// turbo
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Init (chọn Firestore, Storage rules)
firebase init

# Deploy rules
firebase deploy --only firestore:rules
firebase deploy --only storage
```
