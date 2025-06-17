// src/app/contact/ContactForm.tsx

'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name')?.toString().trim() || ''
    const email = formData.get('email')?.toString().trim() || ''
    const message = formData.get('message')?.toString().trim() || ''

    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.error || 'Submission failed')
      }

      setStatus('success')
      form.reset()
    } catch (err: unknown) {
      console.error(err)
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="form-input w-full"
          placeholder="Your name"
          disabled={status === 'loading'}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input w-full"
          placeholder="you@example.com"
          disabled={status === 'loading'}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="form-textarea w-full"
          placeholder="What can I help you with?"
          disabled={status === 'loading'}
        />
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Feedback messages */}
      {status === 'error' && errorMessage && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}
      {status === 'success' && (
        <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
      )}
    </form>
  )
}
