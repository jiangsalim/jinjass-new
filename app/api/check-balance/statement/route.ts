import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paymentCode = searchParams.get("payment_code");
  const studentId = searchParams.get("student_id");

  if (!paymentCode && !studentId) {
    return NextResponse.json(
      { error: "Payment code or Student ID is required" },
      { status: 400 }
    );
  }

  const apiUrl = process.env.NEXT_PUBLIC_ONECARD_API_URL || "http://127.0.0.1:8000";
  const apiKey = process.env.ONECARD_API_KEY || "";

  try {
    let endpoint: string;
    if (studentId) {
      endpoint = `${apiUrl}/api/public/statement-by-card/?student_id=${studentId}&api_key=${apiKey}`;
    } else {
      endpoint = `${apiUrl}/api/public/statement/?payment_code=${paymentCode}&api_key=${apiKey}`;
    }

    const response = await fetch(endpoint, {
      headers: { "ngrok-skip-browser-warning": "true" },
    });
    const blob = await response.blob();

    return new NextResponse(blob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="fee-statement-${paymentCode || studentId}.pdf"`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Cannot download statement" },
      { status: 500 }
    );
  }
}