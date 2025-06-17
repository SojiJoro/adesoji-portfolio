import Link from 'next/link'

const projects = [
  {
    slug: 'rds-failover',
    title: 'AWS RDS Global Database Failover',
    description: 'Designed cross-region RDS failover using Aurora Global Database to achieve sub-minute recovery and 99.99% availability.',
  },
  {
    slug: 'monitoring-stack',
    title: 'Prometheus & Grafana Monitoring Stack',
    description: 'Built a full monitoring pipeline on EKS with Prometheus, Alertmanager and Grafana, reducing MTTR by 70%.',
  },
  {
    slug: 'jira-automation',
    title: 'Jira Support Automation',
    description: 'Automated ticket creation, status updates and email notifications, cutting manual support overhead by 60%.',
  },
  {
    slug: 'airtable-asset',
    title: 'Airtable Asset Management',
    description: 'Developed an internal hardware tracker with Airtable and Confluence, streamlining asset audits. ',
  },
  {
    slug: 'eks-openvpn',
    title: 'EKS + OpenVPN Integration',
    description: 'Secured EKS cluster access via a custom OpenVPN deployment, enabling safe remote developer connections.',
  },
]

export default function ProjectsPage() {
  return (
    <section className="section section--projects bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Selected Projects</h2>
        <div className="highlight-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ slug, title, description }) => (
            <div key={slug} className="highlight-card flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              <Link
                href={`/projects/${slug}`}
                className="mt-4 btn btn-outline self-start"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
