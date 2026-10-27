/**
 * HubSpot CRM Integration Service
 */

const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects/contacts";

export interface HubSpotContact {
  email: string;
  firstname: string;
  lastname?: string;
  company_size?: string;
  jobtitle?: string;
  ai_lead_score?: number; // Custom Property on CRM
  ai_analysis?: string; // Custom Property on CRM
}

export async function syncLeadToHubSpot(data: HubSpotContact) {
  const token = process.env.HUBSPOT_API_KEY;

  if (!token) {
    console.warn("[DEBUG][HubSpot] API Key chưa thiết lập. Bỏ qua đồng bộ. (Mô phỏng 200 OK)");
    return { success: true, fake: true };
  }

  try {
    const payload = {
      properties: {
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname || "",
        jobtitle: data.jobtitle || "",
        // Lấy tên các trường custom properties từ schema của doanh nghiệp
        company_size: data.company_size || "",
        hs_lead_status: "NEW",
        ai_engagement_score: data.ai_lead_score || 0,
        ai_recommendation: data.ai_analysis || "",
      }
    };

    const response = await fetch(HUBSPOT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Lỗi đồng bộ API Hubspot: ${response.status}`);
    }

    const json = await response.json();
    return { success: true, contactId: json.id };
  } catch (error) {
    console.error("[DEBUG][HubSpot] Không thể gọi webhook CRM:", error);
    // Silent fail để không block luồng UI của user.
    return { success: false, error };
  }
}
