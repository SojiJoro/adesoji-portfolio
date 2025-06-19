// src/app/resume/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume – Adesoji Adejoro',
  description: 'Adesoji Adejoro – SRE & DevOps professional specialising in AWS, Kubernetes, CI/CD, automation and incident response.',
}

export default function ResumePage() {
  const skills = [
    'AWS (EC2, S3, RDS, Lambda, EKS, VPC, IAM, CloudWatch, CloudTrail, Cost Explorer)',
    'Azure (Azure AD, Intune, Exchange Online, MDM)',
    'Infrastructure as Code (Terraform, Ansible, CloudFormation)',
    'Kubernetes (EKS, GKE), Docker, Containerisation',
    'CI/CD (GitHub Actions, Jenkins, TeamCity, GitLab CI)',
    'Linux & Windows server administration, Bash, PowerShell, Python scripting',
    'Monitoring & observability (Prometheus, Grafana, ELK, Loki, Tempo)',
    'Incident management (SRE best practices: SLIs, SLOs, error budgets, chaos engineering)',
    'Security & compliance (VPC, network segmentation, IAM, encryption, GuardDuty)',
    'DevOps practices, peer code reviews, pull request approvals, Git'
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">Adesoji Adejoro</h1>
          <p className="text-lg text-gray-700 mt-1">Site Reliability Engineer & DevOps Lead</p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
            {/* Ensure the PDF exists at public/documents/Adesoji_Adejoro_Resume.pdf */}
            <a href="/documents/Adesoji_Adejoro_Resume.pdf" download className="btn btn-primary">
              Download Full Resume (PDF)
            </a>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
          <p>
            Site Reliability Engineer & DevOps Lead with over 8 years’ experience designing, building and supporting scalable AWS & hybrid cloud environments. Skilled in automation, CI/CD pipelines, observability, incident response, security compliance and FinOps. Proven track record reducing costs (25% AWS savings), improving uptime via SLIs/SLOs, and delivering efficient remote support and infrastructure.
          </p>
        </div>

        <hr className="border-gray-300" />

        {/* Core Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Core Skills & Tools</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-300" />

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>Certified Scrum Master (CSM)</li>
            <li>LASER Level 2 CCTV Operator</li>
            <li>In progress: AWS Certified DevOps Engineer – Professional</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        {/* Professional Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Professional Experience</h2>

          {/* Eiger Trading Advisors */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">Site Reliability Engineer & DevOps Lead</h3>
            <p className="text-sm text-gray-600">
              Eiger Trading Advisors Ltd, London (Hybrid) • Jul 2022 – Present
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Led AWS architecture: EC2, Lambda, RDS, EKS, VPC, IAM, CloudWatch/CloudTrail with IaC using Terraform & CloudFormation</li>
              <li>Delivered 25% AWS cost reduction via rightsizing, Savings Plans, Reserved Instances, and lifecycle policies</li>
              <li>Defined SLIs/SLOs, error budgets, and led post-mortems for incident response</li>
              <li>Built observability stacks: Prometheus, Grafana, ELK, Loki, Tempo</li>
              <li>Automated CI/CD with GitHub Actions, TeamCity and Jenkins</li>
              <li>Optimised EKS clusters: pod autoscaling, Helm charts, DR across UK/Frankfurt</li>
              <li>Introduced chaos testing for resilience training</li>
              <li>Enforced IAM least-privilege, encryption, and automated compliance audits</li>
              <li>Provided remote support, hardware staging, VPN and SSO for trading floor staff</li>
            </ul>
          </div>

          {/* Beyond Cloud Solutions */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">DevOps Engineer</h3>
            <p className="text-sm text-gray-600">
              Beyond Cloud Solutions (Remote / Texas-based) • Jan 2021 – Dec 2022
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Ran containerised apps on Kubernetes, improving uptime and scalability</li>
              <li>Monitored and tuned PostgreSQL with pgAdmin for performance</li>
              <li>Wrote PowerShell scripts for VPN setup and software deployment</li>
              <li>Built AWS/Azure IaC modules with Terraform to standardise deployments</li>
            </ul>
          </div>

          {/* Kinetik */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">Web/System Administrator</h3>
            <p className="text-sm text-gray-600">
              Kinetik, UK • Jan 2020 – Dec 2020
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Managed internal MediaWiki, ensuring uptime and backups</li>
              <li>Generated SQL/Excel reports to support decision-making</li>
              <li>Enhanced CMS content structure and SEO performance</li>
            </ul>
          </div>

          {/* Safe-Complex */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">DevOps Engineer</h3>
            <p className="text-sm text-gray-600">
              Safe-Complex (Remote / Hybrid) • Jan 2017 – Dec 2019
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Managed multi-cloud infrastructure: AWS, GCP, Azure, IBM Cloud</li>
              <li>Automated deployments and cost savings with Terraform, Ansible, Python</li>
              <li>Developed Go & Python tooling to streamline DevOps workflows</li>
              <li>Maintained EKS/GKE and Docker environments</li>
              <li>Automated support tasks, reducing incident resolution time</li>
            </ul>
          </div>

          {/* New Horizon */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">IT Support Engineer</h3>
            <p className="text-sm text-gray-600">
              New Horizon, Nigeria • Jan 2015 – Dec 2017
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Supported 100+ users with hardware, software, and network issues</li>
              <li>Configured VLANs, managed Active Directory, and delivered training</li>
              <li>Led Google Workspace to Microsoft 365 migration, reducing licence costs</li>
              <li>Documented runbooks in Confluence for faster onboarding</li>
              <li>Resolved high-priority tickets in ServiceNow</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <p className="text-gray-700">
            MSc Internet of Things & Data Analytics – Bournemouth University (2022)<br />
            BSc Computer Science – Ekiti State University, Nigeria (2017)
          </p>
        </div>

        <hr className="border-gray-300" />

        {/* Volunteering & Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Volunteering & Projects</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Advocate for neuro-inclusive hiring: LinkedIn content on dyslexia inclusion</li>
            <li>Built Python-Slack SSL expiry alerts for certificate automation</li>
            <li>Created reusable Terraform modules for EC2, RDS, ALB deployments</li>
            <li>Optimised Jira Service Desk: SLAs, ticket classification, auto-responses</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        {/* References */}
        <div className="pb-8">
          <h2 className="text-2xl font-semibold mb-3">References</h2>
          <p className="text-gray-700">Available upon request.</p>
        </div>
      </div>
    </section>
  )
}
