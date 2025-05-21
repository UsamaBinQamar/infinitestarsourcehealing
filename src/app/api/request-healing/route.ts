import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { requestType, requestName, details } = await request.json();

    // Validate the request data
    if (!requestType || !requestName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Infinite Star Source Healing <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "your-email@example.com"],
      subject: `Healing Request: ${requestType}`,
      react: await EmailTemplate({
        name: requestName,
        email: "", // Not collected in this form
        subject: requestType,
        message: details || "No additional details provided.",
      }),
    });

    if (result.error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
    console.log("Email sent:", result.data);
    return NextResponse.json({ success: true, data: result.data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
