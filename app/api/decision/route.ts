import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_FORM_TO = "pastorlibertypb@gmail.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.DECISION_FORM_TO_EMAIL ?? DEFAULT_FORM_TO;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email is not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const text = [
      "New decision / salvation form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone?.trim() ? `Phone: ${phone}` : "",
      message?.trim() ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Liberty Baptist Decision for Christ – ${name}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (e) {
    console.error("Decision API error:", e);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
