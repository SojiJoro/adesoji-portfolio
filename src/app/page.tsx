// src/app/page.tsx

import Link from 'next/link'
import Testimonials from '@/components/Testimonials'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="container">
          <h1 className="hero__title">
            Hi, I’m <span className="highlight">Adesoji</span><br/>
            SRE, DevOps & Support Lead
          </h1>
          <p className="hero__subtitle">
            AWS | Kubernetes | Terraform | Tech Support Leadership | Neurodiversity Advocate
          </p>
          <div className="hero__buttons">
            <Link href="/resume" className="btn btn-primary">
              View Resume
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section section--highlights" data-aos="fade-up">
        <div className="container highlight-grid">
          <div className="highlight-card" data-aos="fade-up" data-aos-delay="100">
            <h3>8+ Years Experience</h3>
            <p>Cloud Infrastructure, DevOps & Support Operations</p>
          </div>
          <div className="highlight-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Expert in AWS & Monitoring</h3>
            <p>SRE | Grafana | Prometheus | CloudWatch</p>
          </div>
          <div className="highlight-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Neurodiversity Advocate</h3>
            <p>Supporting Inclusive Tech Teams</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA to Resources */}
      <section className="section bg-white" data-aos="fade-up">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore Value-Added Resources</h2>
          <Link href="/resources" className="btn btn-primary">
            Resources & Downloads
          </Link>
        </div>
      </section>
    </main>
  )
}
