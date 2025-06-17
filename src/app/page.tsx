// src/app/page.tsx

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 md:px-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I’m <span className="text-teal-500">Adesoji</span><br />
          SRE, DevOps & Support Lead
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-8">
          AWS | Kubernetes | Terraform | Tech Support Lead | Advocate for Dyslexia in Tech
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/resume" className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition">
            View Resume
          </Link>
          <Link href="/contact" className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition">
            Contact Me
          </Link>
        </div>
        {/* Optional background shape */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-white to-white" />
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">5+ Years Experience</h3>
            <p className="text-sm text-gray-600">in IT Support & Cloud Infrastructure</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Expert in AWS & Monitoring</h3>
            <p className="text-sm text-gray-600">SRE | Grafana | CloudWatch</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Neurodiversity Advocate</h3>
            <p className="text-sm text-gray-600">Championing Dyslexia Inclusion in Tech</p>
          </div>
        </div>
      </section>
    </main>
  )
}
