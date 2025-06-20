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
            Hi, I&apos;m <span className="highlight">Adesoji</span><br/>
            <span className="text-3xl md:text-4xl mt-2 block">SRE, DevOps & Support Lead</span>
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
        <div className="container">
          <div className="highlight-grid">
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="100">
              <span className="text-4xl">🚀</span>
              <h3>8+ Years Experience</h3>
              <p>Cloud Infrastructure, DevOps & Support Operations</p>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="200">
              <span className="text-4xl">☁️</span>
              <h3>Expert in AWS & Monitoring</h3>
              <p>SRE | Grafana | Prometheus | CloudWatch</p>
            </div>
            <div className="highlight-card" data-aos="fade-up" data-aos-delay="300">
              <span className="text-4xl">🤝</span>
              <h3>Neurodiversity Advocate</h3>
              <p>Supporting Inclusive Tech Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-12">What People Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA to Resources */}
      <section className="bg-gradient-to-r text-white" data-aos="fade-up">
        <div className="container max-w-3xl text-center">
          <h2 className="text-white mb-4">Explore Value-Added Resources</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover tools, templates, and guides to enhance your DevOps journey
          </p>
          <Link href="/resources" className="btn btn-secondary">
            Browse Resources & Downloads
          </Link>
        </div>
      </section>
    </main>
  )
}