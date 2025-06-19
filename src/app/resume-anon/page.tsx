// src/app/resume-anon/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anonymised Resume',
  description: 'Anonymised version of an experienced DevOps/SRE professional resume.',
}

export default function ResumeAnonPage() {
  const skills = [
    'AWS (EC2, EKS, Lambda, RDS, IAM, CloudWatch)',
    'Azure, GCP, Hybrid Cloud Environments',
    'Terraform, CloudFormation, Ansible, Azure Bicep',
    'Kubernetes, Docker, Helm, Argo CD',
    'CI/CD: GitHub Actions, GitLab CI, Jenkins, TeamCity',
    'Monitoring: Prometheus, Grafana, Loki, ELK, Tempo',
    'Scripting: Python, PowerShell, Bash',
    'Incident Response: SLIs, SLOs, Chaos Engineering',
    'Cost & Security: FinOps, IAM, Encryption, GuardDuty'
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Site Reliability Engineer & DevOps Lead</h1>
          <p className="text-lg text-gray-700 mt-1">Anonymised Candidate Profile</p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
          <p>
            Experienced SRE/DevOps Engineer with 8+ years delivering scalable, cloud-native infrastructure across AWS, Azure, and hybrid environments. Proven in cost optimisation (25%+ AWS savings), infrastructure as code, Kubernetes, and observability. Combines deep technical capability with reliability engineering, FinOps awareness, and cross-team collaboration.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h2 className="text-2xl font-semibold mb-3">Core Skills & Tools</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>Certified Scrum Master (CSM)</li>
            <li>In progress: AWS Certified DevOps Engineer – Professional</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h2 className="text-2xl font-semibold mb-3">Experience Summary</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Current: SRE/DevOps Lead at a UK-based financial tech company, managing multi-region AWS and Kubernetes infrastructure</li>
            <li>Previously: Cloud/DevOps Engineer for a US-based remote consultancy, driving IaC adoption, GitOps, and ML-enabled autoscaling</li>
            <li>Past roles in IT Support and Systems Administration with growing responsibilities in infrastructure automation</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h2 className="text-2xl font-semibold mb-3">Notable Achievements</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Reduced AWS spend by 25%+ through FinOps tools, Reserved Instances, and cost anomaly detection</li>
            <li>Built autoscaling EKS environments using ML metrics for resource efficiency</li>
            <li>Created GitOps workflows that doubled deployment speed and release confidence</li>
            <li>Migrated legacy workloads to AWS Lambda and Fargate, cutting infrastructure costs by 60%</li>
            <li>Developed ChatOps automation with Slack and AWS Chatbot for real-time alerts and releases</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <p className="text-gray-700">
            MSc in Technology & Data Analytics (UK University)<br />
            BSc in Computer Science (West African University)
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="pb-8">
          <h2 className="text-2xl font-semibold mb-3">Availability & Work Rights</h2>
          <p className="text-gray-700">
            UK-based candidate with valid sponsored visa. Open to remote, hybrid or UK on-site opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
