// src/app/contact/page.tsx

import ContactForm from './ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send me a message via the contact form.',
}

export default function ContactPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 text-gray-700">
          Feel free to send a message using the form below. I’ll get back to you as soon as possible.
        </p>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  )
}
