'use client'

import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Download, FileText, Mail, Linkedin, Github } from 'lucide-react'

const ResumePage = () => {
  const resumeRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const downloadPdf = async () => {
    if (!resumeRef.current || !isClient) return
    
    try {
      const html2pdf = (await import('html2pdf.js')).default
      
      const element = resumeRef.current
      const opt = {
        margin: 0.5,
        filename: 'Adesoji_Adejoro_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          backgroundColor: '#1a202c',
          onclone: (clonedDoc: Document) => {
            // Hide buttons in the cloned document
            clonedDoc.querySelectorAll('.no-print').forEach(el => {
              (el as HTMLElement).style.display = 'none'
            })
          }
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      } as const
      
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

  const certifications = [
    { name: 'AWS Certified Solutions Architect – Associate', icon: '🏆' },
    { name: 'Certified Scrum Master (CSM)', icon: '📋' },
    { name: 'LASER Level 2 CCTV Operator', icon: '🔐' },
    { name: 'AWS Certified DevOps Engineer – Professional', status: 'In Progress', icon: '📚' }
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
      
      <main className="resume-page min-h-screen">
        <div ref={resumeRef} className="resume-container">
          {/* Header Section */}
          <section className="resume-header">
            <div className="container">
              <div className="resume-hero">
                <div>
                  <h1 className="resume-name">Adesoji Adejoro</h1>
                  <p className="resume-title">Site Reliability Engineer & DevOps Lead</p>
                  
                  <div className="contact-info">
                    <a href="mailto:info@adesoji.dev" className="contact-item">
                      <Mail className="h-4 w-4" />
                      <span>info@adesoji.dev</span>
                    </a>
                    <a href="https://www.linkedin.com/in/adesojiadejoro/" className="contact-item">
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/adesoji" className="contact-item">
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
                
                <div className="action-buttons no-print">
                  <button 
                    onClick={downloadPdf} 
                    className="btn btn-primary"
                    disabled={!isClient}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Full CV
                  </button>
                  <Link href="/resume-anon" className="btn btn-secondary">
                    <FileText className="h-4 w-4 mr-2" />
                    Anonymised CV
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="resume-section">
            <div className="container">
              <h2 className="section-title">Professional Summary</h2>
              <div className="summary-content">
                <p>
                  Experienced SRE/DevOps Engineer with <strong>8+ years</strong> delivering scalable, cloud-native infrastructure across AWS, Azure, and hybrid environments. 
                  Proven in cost optimisation (<strong>25%+ AWS savings</strong>), infrastructure as code, Kubernetes, and observability. 
                  Combines deep technical capability with reliability engineering, FinOps awareness, and cross-team collaboration.
                </p>
              </div>
            </div>
          </section>

          {/* Core Skills & Tools */}
          <section className="resume-section">
            <div className="container">
              <h2 className="section-title">Core Skills & Tools</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-bullet">▸</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-section">
            <div className="container">
              <h2 className="section-title">Certifications</h2>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <span className="cert-icon">{cert.icon}</span>
                    <div>
                      <span className="cert-name">{cert.name}</span>
                      {cert.status && (
                        <span className="cert-status">{cert.status}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <div className="container">
              <h2 className="section-title">Experience</h2>
              
              <div className="experience-timeline">
                {/* Trading Firm */}
                <div className="experience-item">
                  <div className="exp-header">
                    <h3>Site Reliability & Tech Support Lead</h3>
                    <span className="exp-company">Trading Firm</span>
                    <span className="exp-date">2022 – Present</span>
                  </div>
                  <ul className="exp-highlights">
                    <li>Led AWS cost optimisation reducing monthly spend by over <strong>25%</strong></li>
                    <li>Automated SSL monitoring with Python + Slack alerts</li>
                    <li>Maintained hybrid cloud infra across AWS and on-prem</li>
                    <li>Owned Kubernetes/EKS observability using Grafana, Loki</li>
                    <li>Improved incident management with SLIs, SLOs</li>
                    <li>Automated onboarding processes for internal tools</li>
                    <li>Handled AWS RDS Global DR setup and cutover planning</li>
                    <li>Collaborated across Dev and Infra teams on CI/CD and Terraform rollout</li>
                  </ul>
                </div>

                {/* Cloud Services Provider */}
                <div className="experience-item">
                  <div className="exp-header">
                    <h3>DevOps Engineer</h3>
                    <span className="exp-company">Cloud Services Provider</span>
                    <span className="exp-date">2021 – 2022</span>
                  </div>
                  <ul className="exp-highlights">
                    <li>Created reusable Terraform modules for infrastructure deployments</li>
                    <li>Implemented GitHub Actions pipelines with automated test & deploy</li>
                    <li>Provisioned cloud infra with cost-efficient design principles</li>
                    <li>Containerised apps with Docker & deployed on ECS/Fargate</li>
                    <li>Monitored workloads with CloudWatch and custom alarms</li>
                    <li>Secured infra with IAM policies, GuardDuty, VPC configs</li>
                    <li>Integrated FinOps tracking into Cloud cost reviews</li>
                    <li>Reduced environment setup time by <strong>40%</strong> via automation</li>
                  </ul>
                </div>

                {/* Add other experiences... */}
                <div className="experience-item">
                  <div className="exp-header">
                    <h3>Build Engineer</h3>
                    <span className="exp-company">IT Services Company</span>
                    <span className="exp-date">2020 – 2021</span>
                  </div>
                  <ul className="exp-highlights">
                    <li>Built and packaged .NET/Java applications for QA/UAT</li>
                    <li>Maintained TeamCity build pipelines and artifact versioning</li>
                    <li>Automated build tasks with PowerShell scripting</li>
                    <li>Reduced build errors via static code checks</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <div className="container">
              <h2 className="section-title">Education</h2>
              <div className="education-grid">
                <div className="education-item">
                  <h3>MSc Internet of Things & Data Analytics</h3>
                  <p>Bournemouth University (2022)</p>
                </div>
                <div className="education-item">
                  <h3>BSc Computer Science</h3>
                  <p>Ekiti State University, Nigeria (2017)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Volunteering & Projects */}
          <section className="resume-section">
            <div className="container">
              <h2 className="section-title">Volunteering & Projects</h2>
              <ul className="project-list">
                <li>Advocate for neuro-inclusive hiring: LinkedIn content on dyslexia inclusion</li>
                <li>Built Python-Slack SSL expiry alerts for certificate automation</li>
                <li>Created reusable Terraform modules for EC2, RDS, ALB deployments</li>
                <li>Optimised Jira Service Desk: SLAs, ticket classification, auto-responses</li>
              </ul>
            </div>
          </section>

          {/* References */}
          <section className="resume-section references">
            <div className="container">
              <h2 className="section-title">References</h2>
              <p>Available upon request.</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default ResumePage