import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Brevo API integration
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_TO_EMAIL = process.env.BREVO_TO_EMAIL || "jinjass1948@gmail.com";

    if (!BREVO_API_KEY) {
      // If no Brevo key, log the message and return success
      console.log("Contact form submission:", { name, email, phone, subject, message });
      return NextResponse.json(
        { message: "Message received successfully!" },
        { status: 200 }
      );
    }

    // Send email via Brevo
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Jinja SS Website", email: "noreply@jinjass.sc.ug" },
        to: [{ email: BREVO_TO_EMAIL, name: "Jinja SS Administration" }],
        replyTo: { email, name },
        subject: `New Contact Form Message: ${subject || "No Subject"}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
          <h3>Message:</h3>
          <p>${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}