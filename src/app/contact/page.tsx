// src/app/contact/page.tsx

import ContactForm from './ContactForm'
import type { Metadata } from 'next'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact – Adesoji Adejoro',
  description: 'Get in touch with Adesoji Adejoro via form or email.',
}

export default function ContactPage() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-large">
          <h2 className="text-4xl font-extrabold text-gradient mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Whether you&rsquo;ve got a question, idea, or just want to say hello &mdash; I&rsquo;m all ears.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)] text-white p-3 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">Email</h3>
                <p className="text-[var(--color-text-light)]">info@adesoji.dev</p>
              </div>
            </div>

            <div className="bg-[var(--color-bg)] p-6 rounded-lg shadow">
              <p className="text-[var(--color-text-light)]">
                I&rsquo;m happy to chat about tech, answer questions, or provide clarity on anything you&rsquo;ve seen here.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--color-secondary)] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4 text-center">Send a Message</h3>
            <ContactForm />
            <p className="text-sm text-center mt-6 text-[var(--color-text-light)]">
              Prefer email? <a href="mailto:info@adesoji.dev" className="underline text-[var(--color-primary)]">info@adesoji.dev</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
