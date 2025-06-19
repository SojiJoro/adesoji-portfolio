'use client'

import { useEffect, useRef } from 'react'
import Head from 'next/head'

export default function ResumeAnonPage() {
  const anonRef = useRef<HTMLElement>(null)
  const html2pdfRef = useRef<typeof import('html2pdf.js') | null>(null)

  useEffect(() => {
    import('html2pdf.js').then((mod) => {
      html2pdfRef.current = mod.default || mod
    })
  }, [])

  const downloadPdf = () => {
    if (!anonRef.current || !html2pdfRef.current) return
    html2pdfRef.current()
      .from(anonRef.current)
      .set({
        margin: 0.5,
        filename: 'Resume_Anonymised.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      })
      .save()
  }

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
    <>
      <Head>
        <title>Anonymised Resume</title>
        <meta
          name="description"
          content="Anonymised version of an experienced DevOps/SRE professional resume."
        />
      </Head>
      <section ref={anonRef} className="section bg-gray-50 p-8">
        <div className="container max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Site Reliability Engineer & DevOps Lead</h1>
            <p className="text-lg text-gray-700 mt-1">Anonymised Candidate Profile</p>
            <button onClick={downloadPdf} className="btn btn-primary mt-4">
              Download Anonymised CV
            </button>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
            <p>
              Experienced SRE/DevOps Engineer with 8+ years delivering scalable, cloud-native infrastructure across
              AWS, Azure, and hybrid environments. Proven in cost optimisation (25%+ AWS savings), infrastructure as
              code, Kubernetes, and observability. Combines deep technical capability with reliability engineering,
              FinOps awareness, and cross-team collaboration.
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
              <li>In progress: AWS Certified DevOps Engineer – Professional</li>
            </ul>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h2 className="text-2xl font-semibold mb-3">Experience Summary</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Current: SRE/DevOps Lead at a UK-based financial tech company, managing multi-region AWS and Kubernetes</li>
              <li>Previously: Cloud/DevOps Engineer for a US-based remote consultancy, driving IaC, GitOps, ML-enabled autoscaling</li>
              <li>Past IT Support/Admin roles with growing infrastructure automation responsibilities</li>
            </ul>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h2 className="text-2xl font-semibold mb-3">Notable Achievements</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Reduced AWS spend by 25%+ via FinOps tools, RIs and anomaly detection</li>
              <li>Built ML-driven autoscaling for EKS, improving resource use by 35%</li>
              <li>Created GitOps workflows doubling deployment speed and confidence</li>
              <li>Migrated legacy workloads to serverless (Lambda & Fargate), cutting costs by 60%</li>
              <li>Automated ChatOps with AWS Chatbot & Slack for real-time alerts</li>
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

          <div>
            <h2 className="text-2xl font-semibold mb-3">Recruiter Notes</h2>
            <p className="text-gray-700">
              Anonymised profile highlights strengths in AWS architecture, Kubernetes, automation, and cost
              optimisation. Full details and references available on request.
            </p>
          </div>

          <hr className="border-gray-300" />

          <div className="pb-8">
            <h2 className="text-2xl font-semibold mb-3">Availability & Work Rights</h2>
            <p className="text-gray-700">
              UK-based candidate with valid sponsored visa. Open to remote, hybrid or on-site opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
