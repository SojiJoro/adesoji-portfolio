// src/app/page.tsx

import Link from 'next/link'
import Testimonials from '@/components/Testimonials'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero bg-gradient-to-br from-gray-50 to-gray-100 py-20" data-aos="fade-up">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="hero__title text-5xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="highlight text-teal-600">Adesoji</span><br/>
            <span className="text-3xl md:text-4xl text-gray-700 mt-2 block">SRE, DevOps & Support Lead</span>
          </h1>
          <p className="hero__subtitle text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AWS | Kubernetes | Terraform | Tech Support Leadership | Neurodiversity Advocate
          </p>
          <div className="hero__buttons flex gap-4 justify-center">
            <Link href="/resume" className="btn btn-primary px-8 py-3">
              View Resume
            </Link>
            <Link href="/contact" className="btn btn-outline px-8 py-3">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section py-20 bg-white" data-aos="fade-up">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="highlight-card bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">8+ Years Experience</h3>
              <p className="text-gray-600">Cloud Infrastructure, DevOps & Support Operations</p>
            </div>
            <div className="highlight-card bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-2">Expert in AWS & Monitoring</h3>
              <p className="text-gray-600">SRE | Grafana | Prometheus | CloudWatch</p>
            </div>
            <div className="highlight-card bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Neurodiversity Advocate</h3>
              <p className="text-gray-600">Supporting Inclusive Tech Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA to Resources */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white" data-aos="fade-up">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Value-Added Resources</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover tools, templates, and guides to enhance your DevOps journey
          </p>
          <Link href="/resources" className="btn bg-white text-teal-700 hover:bg-gray-100 px-8 py-3 font-semibold transition-colors">
            Browse Resources & Downloads
          </Link>
        </div>
      </section>
    </main>
  )
}