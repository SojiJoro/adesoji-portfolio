// src/app/projects/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'
import { Database, Activity, Mail, Package, Shield, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects – Adesoji Adejoro',
  description: 'Selected projects in cloud, DevOps, monitoring, automation and more.',
}

const projects = [
  {
    slug: 'rds-failover',
    title: 'AWS RDS Global Database Failover',
    description: 'Cross-region failover solution using Aurora Global Database to meet 99.99% SLA.',
    icon: Database,
    tags: ['AWS', 'RDS', 'High Availability'],
    impact: '99.99% uptime achieved'
  },
  {
    slug: 'monitoring-stack',
    title: 'Prometheus & Grafana Monitoring Stack',
    description: 'End-to-end monitoring on EKS, reducing MTTR by 70%.',
    icon: Activity,
    tags: ['Kubernetes', 'Prometheus', 'Grafana'],
    impact: '70% MTTR reduction'
  },
  {
    slug: 'jira-automation',
    title: 'Jira Support Automation',
    description: 'Automated inbound email triage into Jira issues with acknowledgements.',
    icon: Mail,
    tags: ['Jira', 'Automation', 'Python'],
    impact: '85% faster response time'
  },
  {
    slug: 'airtable-asset',
    title: 'Airtable Asset Management',
    description: 'Hardware tracker integrated with Confluence, reducing asset loss by 40%.',
    icon: Package,
    tags: ['Airtable', 'Confluence', 'Integration'],
    impact: '40% reduction in asset loss'
  },
  {
    slug: 'eks-openvpn',
    title: 'EKS + OpenVPN Integration',
    description: 'Secure remote access to EKS clusters via custom OpenVPN deployment.',
    icon: Shield,
    tags: ['EKS', 'OpenVPN', 'Security'],
    impact: 'Zero security incidents'
  },
]

export default function ProjectsPage() {
  return (
    <main className="dark-theme min-h-screen">
      {/* Hero Section */}
      <section className="project-hero" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="hero__title text-white">
            Selected <span className="text-gradient">Projects</span>
          </h1>
          <p className="hero__subtitle text-white opacity-90 max-w-3xl mx-auto">
            Real-world solutions in cloud infrastructure, DevOps automation, and site reliability engineering
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section dark-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map(({ slug, title, description, icon: Icon, tags, impact }, i) => (
              <article
                key={slug}
                className="project-card-enhanced"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}
              >
                <div className="project-icon">
                  <Icon className="h-8 w-8" />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{title}</h3>
                  
                  <p className="project-description">{description}</p>
                  
                  <div className="project-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-impact">
                    <span className="impact-label">Impact:</span>
                    <span className="impact-value">{impact}</span>
                  </div>
                  
                  <Link
                    href={`/projects/${slug}`}
                    className="btn-learn-more"
                  >
                    View Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Featured Project CTA */}
          <div className="featured-cta" data-aos="fade-up">
            <div className="featured-content">
              <Cloud className="h-12 w-12 mb-4 text-teal-400" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Looking for Cloud Optimization?
              </h2>
              <p className="text-white opacity-90 mb-6">
                I specialize in reducing cloud costs while improving performance and reliability.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Let's Discuss Your Infrastructure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}