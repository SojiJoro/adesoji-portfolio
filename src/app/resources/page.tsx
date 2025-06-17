// src/app/resources/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources – Adesoji Adejoro',
  description: 'Downloadable guides, anonymised CV, Terraform modules and monitoring checklists to showcase expertise.',
}

export default function ResourcesPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Resources</h1>

        {/* Anonymised CV */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Anonymised Resume</h2>
          <p className="text-gray-700">
            A skills-first version of my CV with achievements and metrics but without personal details. Focus on impact first.
          </p>
          <a
            href="/documents/Resume_Anonymised.pdf"
            download
            className="btn btn-primary"
          >
            Download Anonymised Resume
          </a>
        </div>

        {/* AWS Cost Optimisation Guide */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">AWS Cost Optimisation Checklist</h2>
          <p className="text-gray-700">
            A short PDF guide outlining proven tactics to reduce AWS spend, illustrated with example Terraform snippets.
          </p>
          <a
            href="/documents/aws-cost-optimisation.pdf"
            download
            className="btn btn-outline"
          >
            Download AWS Cost Guide
          </a>
        </div>

        {/* Terraform Module Example */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Terraform Module Example</h2>
          <p className="text-gray-700">
            A reusable Terraform module (hosted on GitHub) demonstrating best practices: input validation, tagging, remote state, and multi-environment support.
          </p>
          <Link
            href="https://github.com/yourusername/terraform-module-example"
            target="_blank"
            className="btn btn-outline"
          >
            View on GitHub
          </Link>
        </div>

        {/* Monitoring Checklist */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Monitoring & Alerting Checklist</h2>
          <p className="text-gray-700">
            A PDF checklist covering essential metrics and alerts for cloud services (EC2, RDS, Kubernetes, etc.), so you can quickly assess or improve your observability.
          </p>
          <a
            href="/documents/monitoring-checklist.pdf"
            download
            className="btn btn-outline"
          >
            Download Monitoring Checklist
          </a>
        </div>

        {/* Free Consultation CTA */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Free AWS Cost Audit Offer</h2>
          <p className="text-gray-700">
            Interested in a quick review of your AWS account for cost-saving opportunities? Book a free 30-minute consultation.
          </p>
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Free Audit
          </a>
        </div>
      </div>
    </section>
  )
}
