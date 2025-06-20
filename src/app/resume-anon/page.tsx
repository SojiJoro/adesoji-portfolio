'use client'

import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Download, FileText, Shield, TrendingUp, Award, Briefcase } from 'lucide-react'

export default function ResumeAnonPage() {
  const anonRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const downloadPdf = async () => {
    if (!anonRef.current || !isClient) return
    
    try {
      const html2pdf = (await import('html2pdf.js')).default
      
      const element = anonRef.current
      const opt = {
        margin: 0.5,
        filename: 'Resume_Anonymised.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          backgroundColor: '#ffffff',
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

  const keyMetrics = [
    { label: 'Years Experience', value: '8+', icon: Briefcase },
    { label: 'AWS Cost Savings', value: '25%+', icon: TrendingUp },
    { label: 'Deployment Speed', value: '2x', icon: Shield },
    { label: 'Resource Optimization', value: '35%', icon: Award }
  ]

  return (
    <>
      <Head>
        <title>Anonymised Resume – Senior SRE/DevOps Engineer</title>
        <meta
          name="description"
          content="Anonymised resume of an experienced DevOps/SRE professional with expertise in AWS, Kubernetes, and cloud optimization."
        />
      </Head>
      
      <main className="anon-resume-page">
        <div ref={anonRef} className="anon-container">
          {/* Header Section */}
          <section className="anon-header">
            <div className="container">
              <div className="header-content">
                <div>
                  <h1 className="anon-title">Site Reliability Engineer & DevOps Lead</h1>
                  <p className="anon-subtitle">Anonymised Candidate Profile • UK-Based • Available Immediately</p>
                  
                  <div className="action-buttons no-print">
                    <button 
                      onClick={downloadPdf} 
                      className="btn btn-primary"
                      disabled={!isClient}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </button>
                    <a href="/resume" className="btn btn-outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View Full CV
                    </a>
                  </div>
                </div>
                
                <div className="privacy-notice">
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <p>Privacy Protected</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section className="metrics-section">
            <div className="container">
              <div className="metrics-grid">
                {keyMetrics.map((metric, index) => {
                  const Icon = metric.icon
                  return (
                    <div key={index} className="metric-card">
                      <Icon className="h-8 w-8 text-primary mb-2" />
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="anon-section">
            <div className="container">
              <h2 className="section-title">
                <span className="title-icon">👤</span>
                Professional Summary
              </h2>
              <div className="summary-box">
                <p>
                  Experienced SRE/DevOps Engineer with <strong>8+ years</strong> delivering scalable, cloud-native infrastructure 
                  across AWS, Azure, and hybrid environments. Proven in cost optimisation (<strong>25%+ AWS savings</strong>), 
                  infrastructure as code, Kubernetes, and observability. Combines deep technical capability with reliability 
                  engineering, FinOps awareness, and cross-team collaboration.
                </p>
              </div>
            </div>
          </section>

          {/* Core Skills */}
          <section className="anon-section">
            <div className="container">
              <h2 className="section-title">
                <span className="title-icon">🛠️</span>
                Core Skills & Tools
              </h2>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="anon-section">
            <div className="container">
              <h2 className="section-title">
                <span className="title-icon">🏆</span>
                Certifications
              </h2>
              <div className="cert-list">
                <div className="cert-item">
                  <span className="cert-badge">✓</span>
                  AWS Certified Solutions Architect – Associate
                </div>
                <div className="cert-item">
                  <span className="cert-badge">✓</span>
                  Certified Scrum Master (CSM)
                </div>
                <div className="cert-item">
                  <span className="cert-badge in-progress">📚</span>
                  AWS Certified DevOps Engineer – Professional (In Progress)
                </div>
              </div>
            </div>
          </section>

          {/* Experience Summary */}
          <section className="anon-section">
            <div className="container">
              <h2 className="section-title">
                <span className="title-icon">💼</span>
                Experience Summary
              </h2>
              <div className="experience-cards">
                <div className="exp-card">
                  <div className="exp-period">Current Role</div>
                  <h3>SRE/DevOps Lead</h3>
                  <p>UK-based financial tech company • Managing multi-region AWS and Kubernetes infrastructure</p>
                </div>
                <div className="exp-card">
                  <div className="exp-period">Previous Role</div>
                  <h3>Cloud/DevOps Engineer</h3>
                  <p>US-based remote consultancy • Driving IaC, GitOps, ML-enabled autoscaling</p>
                </div>
                <div className="exp-card">
                  <div className="exp-period">Earlier Experience</div>
                  <h3>IT Support/Admin</h3>
                  <p>Various companies • Growing infrastructure automation responsibilities</p>
                </div>
              </div>
            </div>
          </section>

          {/* Notable Achievements */}
          <section className="anon-section">
            <div className="container">
              <h2 className="section-title">
                <span className="title-icon">🌟</span>
                Notable Achievements
              </h2>
              <div className="achievements-grid">
                <div className="achievement-item">
                  <div className="achievement-icon">💰</div>
                  <p>Reduced AWS spend by <strong>25%+</strong> via FinOps tools, RIs and anomaly detection</p>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">🤖</div>
                  <p>Built ML-driven autoscaling for EKS, improving resource use by <strong>35%</strong></p>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">🚀</div>
                  <p>Created GitOps workflows <strong>doubling</strong> deployment speed and confidence</p>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">☁️</div>
                  <p>Migrated legacy workloads to serverless, cutting costs by <strong>60%</strong></p>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">💬</div>
                  <p>Automated ChatOps with AWS Chatbot & Slack for real-time alerts</p>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="anon-section">
            <div className="container">
              <h2 className="section-title">
                <span className="title-icon">🎓</span>
                Education
              </h2>
              <div className="education-cards">
                <div className="edu-card">
                  <h3>MSc in Technology & Data Analytics</h3>
                  <p>UK University • 2022</p>
                </div>
                <div className="edu-card">
                  <h3>BSc in Computer Science</h3>
                  <p>West African University • 2017</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Info */}
          <section className="anon-footer">
            <div className="container">
              <div className="footer-grid">
                <div className="footer-card">
                  <h3>📋 Recruiter Notes</h3>
                  <p>
                    This anonymised profile highlights strengths in AWS architecture, Kubernetes, automation, 
                    and cost optimisation. Full details and references available on request.
                  </p>
                </div>
                <div className="footer-card">
                  <h3>✅ Availability & Work Rights</h3>
                  <p>
                    UK-based candidate with valid sponsored visa. Open to remote, hybrid or on-site opportunities. 
                    Available with standard notice period.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}