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

    // Fix photo URL - convert relative paths to full URLs
    if (data.success && data.student && data.student.photo_url) {
      const photo = data.student.photo_url;
      // If it's a relative path (starts with /)
      if (photo.startsWith("/")) {
        data.student.photo_url = `${apiUrl}${photo}`;
      }
      // If it contains localhost or 127.0.0.1 but API URL is different
      if (photo.includes("127.0.0.1") || photo.includes("localhost")) {
        const path = photo.replace(/https?:\/\/[^/]+/, "");
        data.student.photo_url = `${apiUrl}${path}`;
      }
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { success: false, error: "Cannot connect to server" },
      { status: 500 }
    );
  }
}