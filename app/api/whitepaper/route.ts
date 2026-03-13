import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, role, whitepaperId, whitepaperTitle } = body

    if (!name || !email || !company || !whitepaperId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send notification email to you
    const { error: notificationError } = await resend.emails.send({
      from: "Rank4 Website <onboarding@resend.dev>",
      to: "connerbiedenstein@gmail.com",
      subject: `[Rank4 Whitepaper] ${whitepaperTitle} Download Request`,
      html: `
        <h2>New Whitepaper Download Request</h2>
        <p><strong>Whitepaper:</strong> ${whitepaperTitle} (${whitepaperId})</p>
        <hr />
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${role ? `<p><strong>Role:</strong> ${role}</p>` : ""}
        <hr />
        <p style="color: #666; font-size: 12px;">
          Requested at ${new Date().toISOString()}
        </p>
      `,
    })

    if (notificationError) {
      console.error("Resend notification error:", notificationError)
    }

    // Send confirmation email to the requester with download link
    const { error: confirmationError } = await resend.emails.send({
      from: "Rank4 <onboarding@resend.dev>",
      to: email,
      subject: `Your ${whitepaperTitle} Whitepaper from Rank4`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #211103;">Thank you for your interest, ${name.split(" ")[0]}!</h2>
          <p style="color: #444; line-height: 1.6;">
            Your download of the <strong>${whitepaperTitle}</strong> whitepaper is ready.
          </p>
          <p style="color: #444; line-height: 1.6;">
            You can download the PDF directly from our website. If you have any questions
            about the content or would like to discuss how these solutions could apply to
            your projects, feel free to reply to this email.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #666; font-size: 14px;">
            Best regards,<br />
            The Rank4 Team
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Rank4 - Precision FPGA Engineering<br />
            <a href="https://www.rank-4.com" style="color: #7B0D1E;">rank-4.com</a>
          </p>
        </div>
      `,
    })

    if (confirmationError) {
      console.error("Resend confirmation error:", confirmationError)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Whitepaper API error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
