import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paymentCode = searchParams.get("payment_code");

  if (!paymentCode) {
    return NextResponse.json({ success: false, error: "Payment code is required" }, { status: 400 });
  }

  const apiUrl = process.env.NEXT_PUBLIC_ONECARD_API_URL || "http://127.0.0.1:8000";

  try {
    const response = await fetch(
      `${apiUrl}/api/public/balance/?payment_code=${paymentCode}`,
      { headers: { "X-API-Key": process.env.ONECARD_API_KEY || "" } }
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false, error: "Cannot connect to server" }, { status: 500 });
  }
}