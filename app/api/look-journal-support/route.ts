import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Simple bot trap.
    if (clean(form.get("website"))) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(form.get("name"));
    const email = clean(form.get("email"));
    const storeUrl = clean(form.get("storeUrl"));
    const themeVersion = clean(form.get("themeVersion"));
    const subject = clean(form.get("subject"));
    const description = clean(form.get("description"));

    if (
      !name ||
      !email ||
      !storeUrl ||
      !themeVersion ||
      !subject ||
      !description
    ) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const supportEmail = process.env.LOOK_JOURNAL_SUPPORT_EMAIL;
    const fromEmail =
      process.env.LOOK_JOURNAL_SUPPORT_FROM ||
      "Look Journal Support <onboarding@resend.dev>";

    if (!resendApiKey || !supportEmail) {
      return NextResponse.json(
        {
          message:
            "Support email is not configured yet. Please try again later.",
        },
        { status: 503 }
      );
    }

    const attachment = form.get("attachment");
    const attachments: Array<{ filename: string; content: string }> = [];

    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > MAX_ATTACHMENT_SIZE) {
        return NextResponse.json(
          { message: "Attachment must be 5 MB or smaller." },
          { status: 400 }
        );
      }

      const bytes = Buffer.from(await attachment.arrayBuffer());

      attachments.push({
        filename: attachment.name || "attachment",
        content: bytes.toString("base64"),
      });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
        <h2>Look Journal support request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Store URL:</strong> ${escapeHtml(storeUrl)}</p>
        <p><strong>Theme version:</strong> ${escapeHtml(themeVersion)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p><strong>Description</strong></p>
        <p>${escapeHtml(description).replaceAll("\n", "<br />")}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [supportEmail],
        reply_to: email,
        subject: `[Look Journal] ${subject}`,
        html,
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Look Journal support email error:", details);

      return NextResponse.json(
        { message: "Unable to send the request. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Look Journal support route error:", error);

    return NextResponse.json(
      { message: "Unable to send the request. Please try again." },
      { status: 500 }
    );
  }
}
