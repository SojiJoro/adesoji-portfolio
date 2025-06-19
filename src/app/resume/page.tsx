'use client'

import { useEffect, useRef } from 'react'
import Head from 'next/head'

export default function ResumePage() {
  const resumeRef = useRef<HTMLElement>(null)
  const html2pdfRef = useRef<typeof import('html2pdf.js') | null>(null)

  useEffect(() => {
    import('html2pdf.js').then((mod) => {
      html2pdfRef.current = mod.default || mod
    })
  }, [])

  const downloadPdf = () => {
    if (!resumeRef.current || !html2pdfRef.current) return
    html2pdfRef.current()
      .from(resumeRef.current)
      .set({
        margin: 0.5,
        filename: 'Adesoji_Adejoro_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      })
      .save()
  }

  const skills = [
    'AWS (EC2, S3, RDS, Lambda, EKS, VPC, IAM, CloudWatch, CloudTrail, Cost Explorer)',
    'Azure (Azure AD, Intune, Exchange Online, MDM)',
    'Infrastructure as Code (Terraform, Ansible, CloudFormation)',
    'Kubernetes (EKS, GKE), Docker, Containerisation',
    'CI/CD (GitHub Actions, Jenkins, TeamCity, GitLab CI)',
    'Linux & Windows server administration, Bash, PowerShell, Python scripting',
    'Monitoring & observability (Prometheus, Grafana, ELK, Loki, Tempo)',
    'Incident management (SLIs, SLOs, error budgets, chaos engineering)',
    'Security & compliance (VPC, network segmentation, IAM, encryption, GuardDuty)',
    'DevOps practices, peer code reviews, pull request approvals, Git'
  ]

  return (
    <>
      <Head>
        <title>Resume – Adesoji Adejoro</title>
        <meta
          name="description"
          content="Adesoji Adejoro – SRE & DevOps professional specialising in AWS, Kubernetes, CI/CD, automation and incident response."
        />
      </Head>
      <section ref={resumeRef} className="section bg-gray-50 p-8">
        <div className="container max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Adesoji Adejoro</h1>
            <p className="text-lg text-gray-700 mt-1">Site Reliability Engineer & DevOps Lead</p>
            <button onClick={downloadPdf} className="btn btn-primary mt-4">
              Download Full CV
            </button>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
            <p>
              Site Reliability Engineer & DevOps Lead with over 8 years’ experience designing, building and
              supporting scalable AWS & hybrid cloud environments. Skilled in automation, CI/CD pipelines,
              observability, incident response, security compliance and FinOps. Proven track record reducing costs
              (25% AWS savings), improving uptime via SLIs/SLOs, and delivering efficient remote support and
              infrastructure.
            </p>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h2 className="text-2xl font-semibold mb-3">Core Skills & Tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>

          <hr className="border-gray-300" />

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

          <div>
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <p className="text-gray-700">
              MSc Internet of Things & Data Analytics – Bournemouth University (2022)<br />
              BSc Computer Science – Ekiti State University, Nigeria (2017)
            </p>
          </div>

          <hr className="border-gray-300" />

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

          <div className="pb-8">
            <h2 className="text-2xl font-semibold mb-3">References</h2>
            <p className="text-gray-700">Available upon request.</p>
          </div>
        </div>
      </section>
    </>
  )
}
