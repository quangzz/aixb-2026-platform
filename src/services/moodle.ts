/**
 * Moodle E-Learning Core SDK
 */

const MOODLE_URL = process.env.MOODLE_BASE_URL || "https://lms.deepb.edu.vn";
const MOODLE_TOKEN = process.env.MOODLE_WS_TOKEN;

// Định nghĩa giao thức gọi XML-RPC qua cURL/REST của Moodle WS
export async function fetchMoodleCourses() {
  if (!MOODLE_TOKEN) {
    console.log("[DEBUG][Moodle] Token trống. Sử dụng Mock Data.");
    return [];
  }

  try {
    // API chuẩn của Moodle lõi: core_course_get_courses
    const endpoint = `${MOODLE_URL}/webservice/rest/server.php?wstoken=${MOODLE_TOKEN}&wsfunction=core_course_get_courses&moodlewsrestformat=json`;
    const res = await fetch(endpoint);
    const courses = await res.json();
    return courses;
  } catch (error) {
    console.error("[DEBUG][Moodle] Connection failed.", error);
    return [];
  }
}

// Khi Lead quyết định mua, chúng ta tạo Auth Token enrollment cho họ
export async function createEnrollmentToken(userEmail: string, courseId: number) {
  // Logic mock Phase 4
  console.log(`[Moodle Mock] Enrolling ${userEmail} to ${courseId}`);
  return `enroll_mock_${Date.now()}`;
}
