// src/app/api/contact/route.tsx

import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import React from 'react' // ensure JSX is recognised

// Ensure RESEND_API_KEY is in .env.local
const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'no-reply@yourdomain.com',
      to: 'adesoji.adejoro@gmail.com',
      subject: `New message from ${name}`,
      // Resend SDK supports sending JSX directly
      react: (
        <div style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </div>
      ),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
  }
}
