'use client'

import ContactForm from './ContactForm'
import { Mail, MessageSquare, Clock } from 'lucide-react'

// Note: Metadata exports don't work in Client Components
// You'll need to remove this or move the page to a Server Component
// export const metadata: Metadata = {
//   title: 'Contact – Adesoji Adejoro',
//   description: 'Get in touch with Adesoji Adejoro via form or email.',
// }

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-minimal" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="hero__title">
            Get in <span className="highlight">Touch</span>
          </h1>
          <p className="hero__subtitle max-w-2xl mx-auto">
            Whether you&apos;ve got a question, idea, or just want to say hello — I&apos;m all ears
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="contact-info" data-aos="fade-right">
              <h2 className="mb-6">Let&apos;s Connect</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:info@adesoji.dev" className="contact-link">
                      info@adesoji.dev
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3>Quick Response</h3>
                    <p>I typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3>Timezone</h3>
                    <p>GMT (London, UK)</p>
                  </div>
                </div>
              </div>

              <div className="contact-note">
                <p>
                  I&apos;m happy to chat about:
                </p>
                <ul className="contact-topics">
                  <li>SRE & DevOps consultations</li>
                  <li>Cloud infrastructure optimization</li>
                  <li>Technical leadership opportunities</li>
                  <li>Neurodiversity in tech</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper" data-aos="fade-left">
              <div className="contact-form-card">
                <h3 className="text-center mb-6">Send a Message</h3>
                <ContactForm />
                <p className="form-footer">
                  Prefer email? <a href="mailto:info@adesoji.dev" className="text-primary hover:underline">
                    info@adesoji.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}