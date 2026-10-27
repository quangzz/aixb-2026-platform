---
name: Firebase Integration
description: Kỹ năng tích hợp Firebase (Firestore, Auth, Storage, Functions) vào ứng dụng React
---

# Firebase Integration Skill

## Khi nào sử dụng
Khi project cần backend với Firebase. Skill này cung cấp code patterns và templates sẵn dùng.

---

## 1. FIREBASE SETUP TEMPLATE

### `src/app/lib/firebase.ts`
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
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
```

---

## 2. AUTH CONTEXT TEMPLATE

### `src/app/context/AuthContext.tsx`
```typescript
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, GoogleAuthProvider,
  signInWithPopup } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // Create profile document
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      displayName: '',
      createdAt: serverTimestamp(),
    });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    // Create profile if not exists
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      displayName: user.displayName || '',
      avatarUrl: user.photoURL || '',
      createdAt: serverTimestamp(),
    }, { merge: true });
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
```

---

## 3. FIRESTORE HOOKS

### `src/app/hooks/useFirestore.ts`
```typescript
import { useState, useEffect } from 'react';
import { collection, doc, query, onSnapshot, addDoc, updateDoc,
  deleteDoc, serverTimestamp, QueryConstraint, DocumentData } from 'firebase/firestore';
import { db } from '../lib/firebase';

// Hook: Listen to collection (real-time)
export function useCollection<T extends DocumentData>(
  collectionName: string,
  ...queryConstraints: QueryConstraint[]
) {
  const [data, setData] = useState<(T & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = query(collection(db, collectionName), ...queryConstraints);
    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T & { id: string })));
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [collectionName]);

  return { data, loading, error };
}

// Hook: Listen to single document (real-time)
export function useDocument<T extends DocumentData>(
  collectionName: string,
  docId: string | undefined
) {
  const [data, setData] = useState<(T & { id: string }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!docId) { setLoading(false); return; }
    const unsubscribe = onSnapshot(doc(db, collectionName, docId), (docSnap) => {
      if (docSnap.exists()) {
        setData({ id: docSnap.id, ...docSnap.data() } as T & { id: string });
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [collectionName, docId]);

  return { data, loading };
}

// CRUD operations
export async function addDocument(collectionName: string, data: DocumentData) {
  return addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateDocument(collectionName: string, docId: string, data: Partial<DocumentData>) {
  return updateDoc(doc(db, collectionName, docId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteDocument(collectionName: string, docId: string) {
  return deleteDoc(doc(db, collectionName, docId));
}

// Soft delete
export async function softDeleteDocument(collectionName: string, docId: string) {
  return updateDoc(doc(db, collectionName, docId), {
    deletedAt: serverTimestamp(),
  });
}
```

---

## 4. STORAGE HELPER

### `src/app/utils/storage.ts`
```typescript
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../lib/firebase';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function uploadFile(
  path: string,
  file: File,
  options?: { maxSize?: number; allowedTypes?: string[] }
) {
  const maxSize = options?.maxSize || MAX_FILE_SIZE;
  const allowedTypes = options?.allowedTypes || ALLOWED_IMAGE_TYPES;

  if (file.size > maxSize) {
    throw new Error(`File quá lớn. Tối đa ${maxSize / 1024 / 1024}MB`);
  }
  if (!allowedTypes.includes(file.type)) {
    throw new Error(`Loại file không hợp lệ. Chấp nhận: ${allowedTypes.join(', ')}`);
  }

  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteFile(path: string) {
  const storageRef = ref(storage, path);
  return deleteObject(storageRef);
}
```

---

## 5. SECURITY RULES TEMPLATES

### Firestore Rules — Common Patterns
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    function isAdmin() {
      return isAuthenticated()
        && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // Users — own data only
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }

    // Posts — public read, owner write
    match /posts/{postId} {
      allow read: if true;
      allow create: if isAuthenticated()
        && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isOwner(resource.data.userId);
    }

    // Comments — subcollection of posts
    match /posts/{postId}/comments/{commentId} {
      allow read: if true;
      allow create: if isAuthenticated();
      allow update, delete: if isOwner(resource.data.userId);
    }

    // Admin-only collection
    match /settings/{settingId} {
      allow read: if isAuthenticated();
      allow write: if isAdmin();
    }
  }
}
```

### Storage Rules
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
        && request.auth.uid == userId
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
  }
}
```

---

## 6. PROTECTED ROUTE COMPONENT

### `src/app/components/layout/ProtectedRoute.tsx`
```typescript
import { Navigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({ children, redirectTo = '/login' }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (!user) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
}
```
