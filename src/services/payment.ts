/**
 * Payment Service (VNPAY / Airwallex Gateway Wrapper)
 */

interface PaymentContext {
  courseId: number | string;
  courseName: string;
  amount: number; // in VND
  buyerEmail: string;
}

export async function generatePaymentLink(ctx: PaymentContext) {
  // Lẽ ra đây là SDK của VNPAY yêu cầu tạo Secure Hash MD5.
  // Trong Phase Build Structure, chúng ta mô phỏng logic Redirect URL
  console.log(`[Payment] Creating secure checkout session for ${ctx.buyerEmail} - ${ctx.courseName}`);
  
  const TMN_CODE = process.env.VNPAY_TMN_CODE;
  
  if(!TMN_CODE) {
    console.warn("[Payment] VNPAY config thiêú. Trả về mock sandbox URL.");
    // Fake success payment URL redirect in Phase 4
    return `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?mock_token=${Date.now()}`;
  }

  // Khung triển khai mã hoá VNPAY ...
  return `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?hash_secure=xyz...`;
}
