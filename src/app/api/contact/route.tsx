// src/app/api/contact/route.ts

import { NextResponse } from 'next/server'

// Ensure RESEND_API_KEY is set in environment (.env.local and Vercel settings)
const RESEND_API_KEY = process.env.RESEND_API_KEY

if (!RESEND_API_KEY) {
  console.warn('RESEND_API_KEY is not set')
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Escape user input to avoid HTML injection
    function escapeHtml(str: string) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    // Preserve line breaks in message
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')
    const htmlBody = `
      <div style="font-family: Inter, sans-serif; line-height: 1.6;">
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `

    // Call Resend REST API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'no-reply@yourdomain.com',      // replace with your verified sender
        to: 'adesoji.adejoro@gmail.com',     // your destination email
        subject: `New message from ${name}`,
        html: htmlBody,
      }),
    })

    if (!res.ok) {
      let errText: string
      try {
        errText = JSON.stringify(await res.json())
      } catch {
        errText = await res.text()
      }
      console.error('Resend API error:', errText)
      return NextResponse.json({ error: 'Email send failed' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
