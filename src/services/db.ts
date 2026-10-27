import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface LeadProfile {
  name: string;
  email: string;
  jobTitle: string;
  companySize: string;
  painPoint: string;
  aiScore?: number;
  aiReasoning?: string;
  status: "new" | "contacted" | "enrolled";
}

export async function saveLeadToFirestore(lead: LeadProfile) {
  try {
    if (!db) {
      console.warn("Firebase Firestore DB chưa được cấu hình. Skip saving.");
      return null;
    }
    
    const docRef = await addDoc(collection(db, "leads"), {
      ...lead,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("[DEBUG][Firestore] Lỗi lưu Lead", error);
    throw error;
  }
}
