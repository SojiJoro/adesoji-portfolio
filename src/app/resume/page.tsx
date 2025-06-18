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
            <a href="/documents/Adesoji_Adejoro_Resume.pdf" download className="btn btn-primary">
              Download Full Resume (PDF)
            </a>
            <a href="/documents/Resume_Anonymised.pdf" download className="text-teal-600 underline mt-2 sm:mt-0">
              Download Anonymised Resume
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

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Professional Experience</h2>

          {/* Eiger Trading Advisors */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">Site Reliability Engineer & DevOps Lead</h3>
            <p className="text-sm text-gray-600">
              Eiger Trading Advisors Ltd, London (Hybrid) • Jul 2022 – Present
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Led AWS architecture: EC2, Lambda, RDS, EKS, VPC, IAM, CloudWatch/CloudTrail with Infrastructure-as-Code using Terraform & CloudFormation.</li>
              <li>Delivered 25 % AWS cost reduction through rightsizing, purchasing Savings Plans & Reserved Instances, and storage lifecycle policies.</li>
              <li>Defined and implemented SLIs/SLOs, error budgets and post-mortems as part of incident response process.</li>
              <li>Built monitoring and observability stacks (Prometheus, Grafana, ELK, Loki, Tempo, CloudWatch Dashboards).</li>
              <li>Automated deployments and CI/CD pipelines using GitHub Actions, TeamCity and Jenkins to improve release velocity and consistency.</li>
              <li>Optimised Kubernetes via pods autoscaling, EKS upgrades, container security, Helm charts and disaster recovery across multi‑region (UK/Frankfurt).</li>
              <li>Introduced chaos testing to improve system resilience and train on failover procedures.</li>
              <li>Collaborated with security teams to enforce IAM least privilege, encryption at rest/in transit, GuardDuty and automated compliance audits.</li>
              <li>Delivered remote technical support, hardware staging, VPN, SSO and user onboarding for cross‑region trading floor staff.</li>
            </ul>
          </div>

          {/* Beyond Cloud Solutions */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">DevOps Engineer</h3>
            <p className="text-sm text-gray-600">
              Beyond Cloud Solutions (Remote) • Jul 2020 – Jun 2022
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Designed and deployed multi‑tier AWS + Azure infrastructure using Terraform, Ansible and CloudFormation.</li>
              <li>Implemented containerised microservices on Kubernetes (EKS/GKE) and maintained PostgreSQL clusters.</li>
              <li>Built CI/CD pipelines with Jenkins and GitLab CI to enable continuous delivery workflows.</li>
              <li>Performed environment hardening and secure config management using Bastion, security groups and network segmentation.</li>
            </ul>
          </div>

          {/* Kinetik and earlier roles are similar with keyword focus */}
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
            <li>Advocate for neuro‑inclusive hiring: publish LinkedIn content on dyslexia and workplace inclusion.</li>
            <li>Created Python‑Slack based SSL expiry monitoring scripts to automate certificate renewal alerts.</li>
            <li>Built modular Terraform modules for EC2, RDS, ALB deployments with version control and reuse.</li>
            <li>Revamped Jira Service Desk: optimised ticket classifications, SLAs and auto‑response workflows.</li>
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
