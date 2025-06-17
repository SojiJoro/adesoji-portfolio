// src/app/projects/[slug]/page.tsx

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface ProjectDetail {
  heading: string
  content: string
}

interface Project {
  title: string
  description: string
  details: ProjectDetail[]
}

// Static project data; in production, load from CMS/files, etc.
const projectData: Record<string, Project> = {
  'rds-failover': {
    title: 'AWS RDS Global Database Failover',
    description:
      'Architected a fully automated, cross-region failover solution using Aurora Global Database to meet a 99.99% availability SLA.',
    details: [
      {
        heading: 'Overview',
        content:
          'Our finance application relied on a single‐region Aurora PostgreSQL cluster (us-east-1). Scheduled maintenance or transient issues risked minutes of downtime, impacting thousands of daily transactions.',
      },
      // ...other detail items...
    ],
  },
  'monitoring-stack': {
    title: 'Prometheus & Grafana Monitoring Stack',
    description:
      'Built an end-to-end monitoring and alerting solution on EKS, reducing MTTR by 70% and enabling proactive incident response.',
    details: [
      {
        heading: 'Overview',
        content:
          'Our microservices on EKS lacked centralised metrics. Engineers spent hours diagnosing issues using logs alone.',
      },
      // ...other detail items...
    ],
  },
  // Add more projects as needed...
}

// 1. generateStaticParams remains synchronous:
export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }))
}

// 2. generateMetadata must treat params as Promise and await it:
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projectData[slug]
  if (!project) {
    return {
      title: 'Project Not Found',
      description: '',
    }
  }
  return {
    title: project.title,
    description: project.description,
  }
}

// 3. Page component must be async and await params:
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projectData[slug]
  if (!project) notFound()

  return (
    <section className="section bg-white">
      <div className="container max-w-3xl space-y-8 mx-auto">
        {/* Title & Description */}
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-gray-600">{project.description}</p>

        {/* Detailed Sections */}
        {project.details.map(({ heading, content }) => (
          <div key={heading} className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
            <p className="text-gray-700 whitespace-pre-line">{content}</p>
          </div>
        ))}

        {/* Back Button */}
        <div className="mt-8">
          <Link href="/projects" className="btn btn-outline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
