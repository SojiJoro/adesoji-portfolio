// src/app/resources/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'
import { Download, FileText, Github, Calendar, CheckCircle, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources – Adesoji Adejoro',
  description: 'Downloadable guides, anonymised CV, Terraform modules and monitoring checklists to showcase expertise.',
}

const resources = [
  {
    title: 'Anonymised Resume',
    description: 'A skills-first version of my CV with achievements and metrics but without personal details. Focus on impact first.',
    icon: FileText,
    action: {
      type: 'download',
      href: '/documents/Resume_Anonymised.pdf',
      text: 'Download Anonymised Resume',
      primary: true
    },
    badge: 'Most Popular'
  },
  {
    title: 'AWS Cost Optimisation Checklist',
    description: 'A short PDF guide outlining proven tactics to reduce AWS spend, illustrated with example Terraform snippets.',
    icon: DollarSign,
    action: {
      type: 'download',
      href: '/documents/aws-cost-optimisation.pdf',
      text: 'Download AWS Cost Guide',
      primary: false
    },
    stats: '25% average savings'
  },
  {
    title: 'Terraform Module Example',
    description: 'A reusable Terraform module (hosted on GitHub) demonstrating best practices: input validation, tagging, remote state, and multi-environment support.',
    icon: Github,
    action: {
      type: 'external',
      href: 'https://github.com/yourusername/terraform-module-example',
      text: 'View on GitHub',
      primary: false
    }
  },
  {
    title: 'Monitoring & Alerting Checklist',
    description: 'A PDF checklist covering essential metrics and alerts for cloud services (EC2, RDS, Kubernetes, etc.), so you can quickly assess or improve your observability.',
    icon: CheckCircle,
    action: {
      type: 'download',
      href: '/documents/monitoring-checklist.pdf',
      text: 'Download Monitoring Checklist',
      primary: false
    }
  }
]

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-minimal" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="hero__title">
            Free <span className="highlight">Resources</span>
          </h1>
          <p className="hero__subtitle max-w-3xl mx-auto">
            Practical guides, templates, and tools to help you optimize your cloud infrastructure and improve your DevOps practices
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="resources-grid">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div 
                  key={resource.title}
                  className="resource-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {resource.badge && (
                    <span className="resource-badge">{resource.badge}</span>
                  )}
                  
                  <div className="resource-icon">
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="resource-title">{resource.title}</h3>
                  
                  <p className="resource-description">
                    {resource.description}
                  </p>
                  
                  {resource.stats && (
                    <div className="resource-stats">
                      <span className="stats-icon">📊</span>
                      <span>{resource.stats}</span>
                    </div>
                  )}
                  
                  <div className="resource-action">
                    {resource.action.type === 'download' ? (
                      <a
                        href={resource.action.href}
                        download
                        className={`btn ${resource.action.primary ? 'btn-primary' : 'btn-outline'} w-full`}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {resource.action.text}
                      </a>
                    ) : (
                      <Link
                        href={resource.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${resource.action.primary ? 'btn-primary' : 'btn-outline'} w-full`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {resource.action.text}
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Free Consultation CTA */}
          <div className="consultation-cta" data-aos="fade-up">
            <div className="cta-content">
              <Calendar className="h-12 w-12 mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Free AWS Cost Audit</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Interested in a quick review of your AWS account for cost-saving opportunities? 
                Book a free 30-minute consultation and discover potential savings.
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>30-minute review</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Actionable recommendations</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>No obligation</span>
                </div>
              </div>
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mt-6"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Free Audit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}