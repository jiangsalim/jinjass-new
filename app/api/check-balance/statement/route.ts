import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const paymentCode = searchParams.get("payment_code");

  if (!paymentCode) {
    return NextResponse.json({ error: "Payment code is required" }, { status: 400 });
  }

  const apiUrl = process.env.NEXT_PUBLIC_ONECARD_API_URL || "http://127.0.0.1:8000";

  try {
    const response = await fetch(
      `${apiUrl}/api/public/statement/?payment_code=${paymentCode}&api_key=${process.env.ONECARD_API_KEY}`
    );
    const blob = await response.blob();
    return new NextResponse(blob, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="fee-statement-${paymentCode}.pdf"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Cannot download statement" }, { status: 500 });
  }
}