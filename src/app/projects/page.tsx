// src/app/projects/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects – Adesoji Adejoro',
  description: 'Selected projects in cloud, DevOps, monitoring, automation and more.',
}

const projects = [
  {
    slug: 'rds-failover',
    title: 'AWS RDS Global Database Failover',
    description: 'Cross-region failover solution using Aurora Global Database to meet 99.99% SLA.',
  },
  {
    slug: 'monitoring-stack',
    title: 'Prometheus & Grafana Monitoring Stack',
    description: 'End-to-end monitoring on EKS, reducing MTTR by 70%.',
  },
  {
    slug: 'jira-automation',
    title: 'Jira Support Automation',
    description: 'Automated inbound email triage into Jira issues with acknowledgements.',
  },
  {
    slug: 'airtable-asset',
    title: 'Airtable Asset Management',
    description: 'Hardware tracker integrated with Confluence, reducing asset loss by 40%.',
  },
  {
    slug: 'eks-openvpn',
    title: 'EKS + OpenVPN Integration',
    description: 'Secure remote access to EKS clusters via custom OpenVPN deployment.',
  },
]

export default function ProjectsPage() {
  return (
    <section className="section dark-section min-h-screen">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8 text-white">Selected Projects</h1>
        <div className="projects-grid">
          {projects.map(({ slug, title, description }, i) => (
            <div
              key={slug}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 100}
            >
              <div className="project-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link
                  href={`/projects/${slug}`}
                  className="btn-learn-more"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}