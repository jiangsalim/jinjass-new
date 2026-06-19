import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paymentCode = searchParams.get("payment_code");
  const studentId = searchParams.get("student_id");

  if (!paymentCode && !studentId) {
    return NextResponse.json(
      { success: false, error: "Payment code or Student ID is required" },
      { status: 400 }
    );
  }

  const apiUrl = process.env.NEXT_PUBLIC_ONECARD_API_URL || "http://127.0.0.1:8000";
  const apiKey = process.env.ONECARD_API_KEY || "";

  try {
    let endpoint: string;
    if (studentId) {
      endpoint = `${apiUrl}/api/public/balance-by-card/?student_id=${studentId}`;
    } else {
      endpoint = `${apiUrl}/api/public/balance/?payment_code=${paymentCode}`;
    }

    const response = await fetch(endpoint, {
      headers: { "X-API-Key": apiKey },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { success: false, error: "Cannot connect to server" },
      { status: 500 }
    );
  }
}