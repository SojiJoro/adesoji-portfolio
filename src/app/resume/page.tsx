'use client'

import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

const ResumePage = () => {
  const resumeRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const downloadPdf = async () => {
    if (!resumeRef.current || !isClient) return
    
    try {
      // Dynamically import html2pdf.js only on client side
      const html2pdf = (await import('html2pdf.js')).default
      
      const element = resumeRef.current
      const opt = {
        margin: 0.5,
        filename: 'Adesoji_Adejoro_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' as const }
      }
      
      // Correct API usage
      html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
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
        <title>Resume – Adesoji Adejoro</title>
        <meta
          name="description"
          content="Adesoji Adejoro – SRE & DevOps professional specialising in AWS, Kubernetes, CI/CD, automation and incident response."
        />
      </Head>
      <div ref={resumeRef} className="section bg-gray-50 p-8">
        <div className="container max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Adesoji Adejoro</h1>
            <p className="text-lg text-gray-700 mt-1">Site Reliability Engineer & DevOps Lead</p>
            <div className="flex gap-4 mt-4">
              <button 
                onClick={downloadPdf} 
                className="btn btn-primary"
                disabled={!isClient}
              >
                Download Full CV
              </button>
              <a href="/resume-anon" className="btn btn-secondary">
                View Anonymised CV
              </a>
            </div>
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
            <h2 className="text-2xl font-semibold mb-3">Experience</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Eiger Trading Advisor Ltd – Site Reliability & Tech Support Lead (2022 – Present)</strong>
                <ul className="list-disc pl-5">
                  <li>Led AWS cost optimisation reducing monthly spend by over 25%</li>
                  <li>Automated SSL monitoring with Python + Slack alerts</li>
                  <li>Maintained hybrid cloud infra across AWS and on-prem</li>
                  <li>Owned Kubernetes/EKS observability using Grafana, Loki</li>
                  <li>Improved incident management with SLIs, SLOs</li>
                  <li>Automated onboarding processes for internal tools</li>
                  <li>Handled AWS RDS Global DR setup and cutover planning</li>
                  <li>Collaborated across Dev and Infra teams on CI/CD and Terraform rollout</li>
                </ul>
              </li>
              <li><strong>Beyond Cloud Solution – DevOps Engineer (2021 – 2022)</strong>
                <ul className="list-disc pl-5">
                  <li>Created reusable Terraform modules for infrastructure deployments</li>
                  <li>Implemented GitHub Actions pipelines with automated test & deploy</li>
                  <li>Provisioned cloud infra with cost-efficient design principles</li>
                  <li>Containerised apps with Docker & deployed on ECS/Fargate</li>
                  <li>Monitored workloads with CloudWatch and custom alarms</li>
                  <li>Secured infra with IAM policies, GuardDuty, VPC configs</li>
                  <li>Integrated FinOps tracking into Cloud cost reviews</li>
                  <li>Reduced environment setup time by 40% via automation</li>
                </ul>
              </li>
              <li><strong>GCI/Nastaar – Build Engineer (2020 – 2021)</strong>
                <ul className="list-disc pl-5">
                  <li>Built and packaged .NET/Java applications for QA/UAT</li>
                  <li>Maintained TeamCity build pipelines and artifact versioning</li>
                  <li>Interfaced with devs for CI/CD feedback loops</li>
                  <li>Automated build tasks with PowerShell scripting</li>
                  <li>Supported production deployments and hotfix rollouts</li>
                  <li>Logged incidents and tracked root causes</li>
                  <li>Introduced Git branching conventions to team</li>
                  <li>Reduced build errors via static code checks</li>
                </ul>
              </li>
              <li><strong>Kinetik – Web/System Admin (2020 – 2021)</strong>
                <ul className="list-disc pl-5">
                  <li>Managed internal servers, backups, and domain policies</li>
                  <li>Provided L1/L2 support and patch updates for Windows systems</li>
                  <li>Improved uptime and endpoint performance via scripting</li>
                  <li>Created internal dashboards using PHP and MySQL</li>
                  <li>Supported Exchange and file storage migration</li>
                  <li>Deployed antivirus solutions and monitored threat alerts</li>
                  <li>Streamlined printer and network troubleshooting</li>
                  <li>Documented troubleshooting playbooks for IT team</li>
                </ul>
              </li>
              <li><strong>Safe-Complex – DevOps Engineer (2017 – 2019)</strong>
                <ul className="list-disc pl-5">
                  <li>Set up Jenkins pipelines for application lifecycle management</li>
                  <li>Introduced Docker-based environments for local dev/testing</li>
                  <li>Managed GitLab CI/CD and integrated automated rollback</li>
                  <li>Standardised system configurations using Ansible</li>
                  <li>Performed monitoring using ELK stack & alert tuning</li>
                  <li>Deployed apps to AWS EC2 and RDS with BASH automation</li>
                  <li>Introduced secrets management and encrypted env vars</li>
                  <li>Built knowledge base for operational runbooks</li>
                </ul>
              </li>
              <li><strong>New Horizon – IT Support (2014 – 2015)</strong>
                <ul className="list-disc pl-5">
                  <li>Supported desktop users with Windows OS and Office issues</li>
                  <li>Assisted in LAN/WLAN troubleshooting and upgrades</li>
                  <li>Documented resolved issues for future reference</li>
                  <li>Trained end users on productivity tools and shortcuts</li>
                  <li>Installed software and applied security patches</li>
                  <li>Coordinated with vendors for replacement hardware</li>
                  <li>Set up and maintained user accounts and permissions</li>
                  <li>Monitored basic endpoint performance</li>
                </ul>
              </li>
              <li><strong>Governor&apos;s Office Junior IT Support – State IT Agency (2014 – 2015)</strong>
                <ul className="list-disc pl-5">
                  <li>Shadowed senior engineers on systems configuration</li>
                  <li>Supported admin tasks and procurement of devices</li>
                  <li>Helped troubleshoot devices used in field reporting</li>
                  <li>Maintained asset registers and basic helpdesk logs</li>
                  <li>Improved filing of IT reports and consumables</li>
                  <li>Installed OS and basic applications on staff machines</li>
                  <li>Performed data entry for surveys and planning</li>
                  <li>Documented weekly team meetings for action tracking</li>
                </ul>
              </li>
              <li><strong>Freelancer – Fiverr</strong>
                <ul className="list-disc pl-5">
                  <li>Delivered 5-star rated services in content creation</li>
                  <li>Designed brand assets and logos for SMEs</li>
                  <li>Managed social media scheduling and growth for clients</li>
                  <li>Created pitch decks and CV templates for professionals</li>
                  <li>Wrote technical blog posts and landing page copy</li>
                  <li>Built client relationships through iterative feedback</li>
                  <li>Used Canva, Figma, and Adobe tools for visual content</li>
                  <li>Handled gig order management and delivery timelines</li>
                </ul>
              </li>
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
      </div>
    </>
  )
}

export default ResumePage