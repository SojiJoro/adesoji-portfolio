// src/app/contact/ContactForm.tsx

'use client'

import { FormEvent } from 'react'

export default function ContactForm() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Network error')
      alert('Message sent — thank you!')
      form.reset()
    } catch {
      alert('Failed to send. Please try again later.')
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="form-input"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="form-textarea"
          placeholder="What can I help you with?"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Send Message
      </button>
    </form>
  )
}
