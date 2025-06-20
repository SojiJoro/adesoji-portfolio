// src/app/projects/[slug]/page.tsx

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, CheckCircle, Code, Lightbulb, Layers, Target, ChevronRight } from 'lucide-react'

interface ProjectDetail {
  heading: string
  content: string
}

interface Project {
  title: string
  description: string
  details: ProjectDetail[]
}

// Keep the original projectData unchanged
const projectData: Record<string, Project> = {
  'rds-failover': {
    title: 'AWS RDS Global Database Failover',
    description: 'Architected a fully automated, cross-region failover solution using Aurora Global Database to meet a 99.99% availability SLA.',
    details: [
      {
        heading: 'Overview',
        content:
          'Our finance application relied on a single-region Aurora PostgreSQL cluster (us-east-1). Scheduled maintenance or transient issues risked minutes of downtime, impacting thousands of daily transactions.',
      },
      {
        heading: 'System Architecture',
        content:
          'Deployed an Aurora Global Database with a secondary writer in eu-central-1. A Route 53 health check watches the primary writer endpoint. If it fails, DNS automatically flips to the secondary\'s endpoint within 60 seconds.',
      },
      {
        heading: 'Implementation Steps',
        content:
          '1. Wrote Terraform modules to provision Global Database and DNS failover. 2. Configured CloudWatch alarms on replica lag > 5 seconds. 3. Automated IAM roles for cross-region KMS access. 4. Deployed via CI/CD pipeline using GitHub Actions.',
      },
      {
        heading: 'Testing & Validation',
        content:
          'Performed simulated failover drills by rebooting the primary node. Logged RTO (Recovery Time Objective) and verified zero data loss. Documented the playbook and trained on-call engineers.',
      },
      {
        heading: 'Results & Metrics',
        content:
          '• Achieved mean RTO of 25 seconds (vs. 5-minute window previously). • Replica lag consistently under 1 second. • Uptime improved from 99.90% to 99.99%.',
      },
      {
        heading: 'Lessons Learned',
        content:
          'Terraform state locking across regions required careful S3 versioning and DynamoDB lock tables. We standardised naming conventions to avoid drift.',
      },
      {
        heading: 'Next Steps',
        content:
          'Integrate Lambda for automated failback once the primary returns healthy. Add a tertiary failover region in ap-southeast-2 to cover Asia Pacific.',
      },
      {
        heading: 'Technologies',
        content:
          'Aurora PostgreSQL • Terraform • AWS Route 53 • CloudWatch Alarms • KMS • GitHub Actions',
      },
    ],
  },
  'monitoring-stack': {
    title: 'Prometheus & Grafana Monitoring Stack',
    description: 'Built an end-to-end monitoring and alerting solution on EKS, reducing MTTR by 70% and enabling proactive incident response.',
    details: [
      {
        heading: 'Overview',
        content:
          'Our microservices on EKS lacked centralised metrics. Engineers spent hours diagnosing issues using logs alone.',
      },
      {
        heading: 'Architecture',
        content:
          'Deployed Prometheus Operator via Helm on the cluster, with Node Exporter DaemonSets and ServiceMonitors for application endpoints. Grafana runs in read-only mode on a separate namespace.',
      },
      {
        heading: 'Implementation Steps',
        content:
          '1. Installed Prometheus Operator and CRDs. 2. Created ConfigMaps for scrape configs. 3. Installed Alertmanager and configured Slack + PagerDuty webhooks. 4. Built Grafana dashboards via JSON model files in Git.',
      },
      {
        heading: 'Key Dashboards',
        content:
          'Cluster Health: CPU, Memory Utilisation • Service Latency: p50/p95/p99 • Custom Business Metrics: order throughput, error rates',
      },
      {
        heading: 'Alerting Rules',
        content:
          'Fired alerts for CPU > 80% sustained, Memory > 75%, HTTP 5xx spikes, and node unreachable. Alerts include runbook links and severity levels.',
      },
      {
        heading: 'Outcomes',
        content:
          'Mean Time to Detect (MTTD) dropped from 18m to 7m. Mean Time to Repair (MTTR) dropped from 45m to 13m. Capacity planning improved by 30% using historical trend graphs.',
      },
      {
        heading: 'Lessons Learned',
        content:
          "Automating dashboard provisioning via Terraform would ensure reproducibility. We plan to evaluate Grafana's new Cloud offerings next.",
      },
      {
        heading: 'Technologies',
        content:
          'Prometheus • Grafana • Alertmanager • Kubernetes (EKS) • Helm • Slack • PagerDuty',
      },
    ],
  },
  'jira-automation': {
    title: 'Jira Support Automation',
    description: 'Automated inbound email triage into Jira issues with acknowledgements, cutting manual effort by 60% and improving first-response times.',
    details: [
      {
        heading: 'Overview',
        content:
          'Support requests arrived by email and were manually converted into Jira tickets—delays and lost tickets were common.',
      },
      {
        heading: 'Architecture',
        content:
          'AWS SES receives emails → triggers Lambda function → parses subject/body → calls Jira REST API → creates issue and transitions based on keywords.',
      },
      {
        heading: 'Implementation Steps',
        content:
          '1. Configured SES inbound ruleset with SNS topic. 2. Built Lambda in Node.js using AWS SDK and Atlassian SDK. 3. Leveraged Jira webhooks for status sync back to email thread. 4. Wrote CloudWatch logs for audit trails.',
      },
      {
        heading: 'Email Parsing Logic',
        content:
          'Regex patterns identify ticket category (bug, feature, question). Default priority set to "High" for certain keywords. Attachments stored in S3 and linked in Jira.',
      },
      {
        heading: 'Outcome',
        content:
          'Manual ticket creation time dropped from ~5m to <30s. First-response SLA improved from 4h to 2h. Audit logs now provide end-to-end traceability.',
      },
      {
        heading: 'Lessons Learned',
        content:
          'Edge cases in email encoding required robust MIME parsing. We added unit tests via Jest to cover multiple email formats.',
      },
      {
        heading: 'Technologies',
        content:
          'AWS SES • AWS Lambda • Jira REST API • Node.js • S3 • CloudWatch Logs',
      },
    ],
  },
  'airtable-asset': {
    title: 'Airtable Asset Management',
    description: 'Designed an Airtable-based hardware tracker integrated with Confluence, reducing asset loss by 40%.',
    details: [
      {
        heading: 'Overview',
        content:
          'IT asset audits relied on Excel; assets were frequently unaccounted for or misplaced during handoffs.',
      },
      {
        heading: 'Solution',
        content:
          'Created an Airtable base with tables for Users, Locations, and Equipment. Custom views for checkout, maintenance, and disposal statuses.',
      },
      {
        heading: 'Integration',
        content:
          'Automated updates via Airtable Scripts: when equipment status changes, send a webhook to Confluence to update the embedded table view.',
      },
      {
        heading: 'Dashboard',
        content:
          'Built a Grafana data source plugin for Airtable to visualise asset age, location distribution, and audit outcomes.',
      },
      {
        heading: 'Results',
        content:
          'Reduced lost-asset incidents by 40%. Real-time visibility cut the monthly audit process from 3 days to 4 hours.',
      },
      {
        heading: 'Technologies',
        content:
          'Airtable API • JavaScript (Scripts) • Confluence REST API • Grafana',
      },
    ],
  },
  'eks-openvpn': {
    title: 'EKS + OpenVPN Integration',
    description: 'Deployed a secure OpenVPN gateway in AWS to allow private, authenticated access to Kubernetes API servers.',
    details: [
      {
        heading: 'Overview',
        content:
          'Developers needed secure remote kubectl access without exposing the API server publicly.',
      },
      {
        heading: 'Infrastructure',
        content:
          'OpenVPN server in a private subnet with autoscaling group, backed by an Application Load Balancer for HA. Client certificates issued via EasyRSA.',
      },
      {
        heading: 'Kubernetes RBAC',
        content:
          'Configured AWS IAM authenticator for client identity, mapped VPN user groups to Kubernetes roles for fine-grained access control.',
      },
      {
        heading: 'User Onboarding',
        content:
          'Developed a self-service portal in Node.js for users to request VPN certificates and automatically deliver their .ovpn profile.',
      },
      {
        heading: 'Outcomes',
        content:
          'Zero public API exposure. On-demand, auditable access. 100% compliance with security guidelines and faster developer onboarding.',
      },
      {
        heading: 'Technologies',
        content:
          'OpenVPN • AWS VPC & ELB • Kubernetes RBAC • EasyRSA • Node.js',
      },
    ],
  },
}

// Helper function to get icon based on heading
const getIconForHeading = (heading: string) => {
  const iconMap: Record<string, any> = {
    'Overview': Layers,
    'System Architecture': Code,
    'Architecture': Code,
    'Infrastructure': Code,
    'Implementation Steps': CheckCircle,
    'Testing & Validation': Target,
    'Results & Metrics': CheckCircle,
    'Results': CheckCircle,
    'Outcomes': CheckCircle,
    'Outcome': CheckCircle,
    'Lessons Learned': Lightbulb,
    'Next Steps': ChevronRight,
    'Technologies': Code,
    'Solution': Lightbulb,
    'Integration': Code,
    'Dashboard': Target,
    'Key Dashboards': Target,
    'Alerting Rules': Target,
    'Email Parsing Logic': Code,
    'Kubernetes RBAC': Shield,
    'User Onboarding': Users,
  }
  return iconMap[heading] || Code
}

// Import additional icons
import { Shield, Users } from 'lucide-react'

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projectData[slug]
  return {
    title: project?.title || 'Project Not Found',
    description: project?.description || '',
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projectData[slug]
  if (!project) notFound()

  return (
    <main className="project-detail-page dark-theme min-h-screen">
      {/* Hero Section */}
      <section className="project-hero" data-aos="fade-up">
        <div className="container">
          <Link href="/projects" className="back-link">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          
          <h1 className="project-detail-title">
            {project.title}
          </h1>
          
          <p className="project-detail-description">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-details-section">
        <div className="container max-w-4xl">
          <div className="details-grid">
            {project.details.map((detail, i) => {
              const Icon = getIconForHeading(detail.heading)
              return (
                <article
                  key={detail.heading}
                  className="detail-card"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 50}
                >
                  <div className="detail-header">
                    <div className="detail-icon">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="detail-title">{detail.heading}</h2>
                  </div>
                  
                  <div className="detail-content">
                    {detail.content.split('\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="project-cta" data-aos="fade-up">
            <div className="cta-content">
              <h3>Interested in Similar Solutions?</h3>
              <p>Let's discuss how I can help optimize your infrastructure</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                </Link>
                <Link href="/projects" className="btn btn-outline">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}