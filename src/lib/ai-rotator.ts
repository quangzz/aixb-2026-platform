import { createGoogleGenerativeAI } from '@ai-sdk/google';

const GEMINI_KEYS = (process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || '')
  .split(',')
  .map((k) => k.trim())
  .filter(Boolean);

// Biến giữ trạng thái vòng xoay tuần tự (Global Server State)
let currentKeyIndex = 0;

/**
 * Execute an AI function with automatic Key Rotation mapping.
 * @param executionFn Hàm gọi API, truyền vào provider google instantiator tương ứng với Key hiện tại.
 */
export async function executeWithKeyRotation<T>(
  executionFn: (googleProvider: ReturnType<typeof createGoogleGenerativeAI>) => Promise<T>
): Promise<T> {
  let attempts = 0;
  const maxAttempts = GEMINI_KEYS.length;

  while (attempts < maxAttempts) {
    const key = GEMINI_KEYS[currentKeyIndex];
    const google = createGoogleGenerativeAI({ apiKey: key });

    try {
      // Execute the requested async API operation
      const result = await executionFn(google);
      return result; // Trả về thành công ngay lập tức!
    } catch (error: any) {
      console.warn(`[Key Rotator] Lỗi với Key index ${currentKeyIndex}. Đang chuyển sang Key tiếp theo...`);
      // Lỗi xảy ra, xoay sang key kế tiếp
      currentKeyIndex = (currentKeyIndex + 1) % GEMINI_KEYS.length;
      attempts++;
    }
  }

  // Cả mảng key đều hỏng
  throw new Error("ALl configured Gemini API Keys are exhausted or have failed.");
}
