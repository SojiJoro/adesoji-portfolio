// src/app/resources/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Download,
  FileText,
  Github,
  Calendar,
  CheckCircle,
  DollarSign,
  Terminal,
  Code,
  Cloud,
  Shield,
  Activity,
  type LucideIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources – Adesoji Adejoro',
  description: 'Downloadable guides, anonymised CV, Terraform modules and monitoring checklists to showcase expertise.',
}

interface Resource {
  title: string
  description: string
  icon: LucideIcon
  action: {
    type: 'download' | 'external'
    href: string
    text: string
    primary: boolean
  }
  badge?: string
  stats?: string
}

const resources: Resource[] = [
  {
    title: 'AWS CLI IAM Cheat Sheet',
    description: 'Quick reference for managing IAM with the AWS CLI.',
    icon: Terminal,
    action: {
      type: 'download',
      href: '/documents/aws_cli_iam_cheat_sheet.pdf',
      text: 'Download Cheat Sheet',
      primary: false
    }
  },
  {
    title: 'AWS Cost Optimisation Checklist',
    description: 'Checklist of proven tactics to reduce AWS spend.',
    icon: DollarSign,
    action: {
      type: 'download',
      href: '/documents/aws_cost_optimisation_checklist_styled.pdf',
      text: 'Download Cost Guide',
      primary: false
    }
  },
  {
    title: 'Bash EC2 CloudWatch Script',
    description: 'Example script for sending EC2 metrics to CloudWatch.',
    icon: Terminal,
    action: {
      type: 'download',
      href: '/documents/bash_ec2_cloudwatch_script_fixed.pdf',
      text: 'Download Script',
      primary: false
    }
  },
  {
    title: 'DevOps Starter Kit',
    description: 'Essential resources to kickstart DevOps projects.',
    icon: Code,
    action: {
      type: 'download',
      href: '/documents/devops_starter_kit_cleaned.pdf',
      text: 'Download Starter Kit',
      primary: false
    }
  },
  {
    title: 'Docker & Kubernetes YAML Reference',
    description: 'Common YAML snippets for Docker and Kubernetes.',
    icon: Code,
    action: {
      type: 'download',
      href: '/documents/docker_k8s_yaml_reference.pdf',
      text: 'Download Reference',
      primary: false
    }
  },
  {
    title: 'Git Workflow Guide',
    description: 'Best practices for branching and collaboration with Git.',
    icon: Github,
    action: {
      type: 'download',
      href: '/documents/git_workflow_guide.pdf',
      text: 'Download Guide',
      primary: false
    }
  },
  {
    title: 'Global Stylesheet Template',
    description: 'Reusable CSS variables and styles for new projects.',
    icon: Code,
    action: {
      type: 'download',
      href: '/documents/globals-updated.css',
      text: 'Download CSS',
      primary: false
    }
  },
  {
    title: 'How to Migrate from On Prem to AWS',
    description: 'Step-by-step guide for moving infrastructure to AWS.',
    icon: Cloud,
    action: {
      type: 'download',
      href: '/documents/how_to_migrate_from_onprem_to_aws.pdf',
      text: 'Download Guide',
      primary: false
    }
  },
  {
    title: 'Infrastructure as Code Project Template',
    description: 'Template structure for new IaC repositories.',
    icon: Code,
    action: {
      type: 'download',
      href: '/documents/iac_project_template.pdf',
      text: 'Download Template',
      primary: false
    }
  },
  {
    title: 'Incident Response Playbook',
    description: 'Practical steps for handling infrastructure incidents.',
    icon: CheckCircle,
    action: {
      type: 'download',
      href: '/documents/incident_response_playbook.pdf',
      text: 'Download Playbook',
      primary: false
    }
  },
  {
    title: 'Linux Command Cheat Sheet',
    description: 'Handy reference of common Linux commands.',
    icon: Terminal,
    action: {
      type: 'download',
      href: '/documents/linux_command_cheat_sheet.pdf',
      text: 'Download Cheat Sheet',
      primary: false
    }
  },
  {
    title: 'Monitoring & Alerting Checklist',
    description: 'Key metrics and alerts to monitor your infrastructure.',
    icon: CheckCircle,
    action: {
      type: 'download',
      href: '/documents/monitoring_alerting_checklist_styled.pdf',
      text: 'Download Checklist',
      primary: false
    }
  },
  {
    title: 'Security Best Practices for Small Teams',
    description: 'Recommendations to secure environments with limited resources.',
    icon: Shield,
    action: {
      type: 'download',
      href: '/documents/security_best_practices_small_teams.pdf',
      text: 'Download Guide',
      primary: false
    }
  },
  {
    title: 'SRE Daily Health Checklist',
    description: 'Daily tasks to ensure services remain reliable.',
    icon: Activity,
    action: {
      type: 'download',
      href: '/documents/sre_daily_health_checklist.pdf',
      text: 'Download Checklist',
      primary: false
    }
  },
  {
    title: 'Terraform CLI Cheat Sheet',
    description: 'Frequently used Terraform CLI commands.',
    icon: Terminal,
    action: {
      type: 'download',
      href: '/documents/terraform_cli_cheat_sheet.pdf',
      text: 'Download Cheat Sheet',
      primary: false
    }
  },
  {
    title: 'Terraform EC2 Module README',
    description: 'Example README for a Terraform EC2 module.',
    icon: Github,
    action: {
      type: 'download',
      href: '/documents/terraform_ec2_module_readme_final_cleaned.pdf',
      text: 'Download README',
      primary: false
    }
  },
  {
    title: 'VSCode Extensions and Settings',
    description: 'Recommended extensions and editor configuration.',
    icon: Code,
    action: {
      type: 'download',
      href: '/documents/vscode_extensions_and_settings.pdf',
      text: 'Download Guide',
      primary: false
    }
  }
]

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-minimal" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="hero__title">
            Free <span className="highlight">Resources</span>
          </h1>
          <p className="hero__subtitle max-w-3xl mx-auto">
            Practical guides, templates, and tools to help you optimise your cloud infrastructure and improve your DevOps practices
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="resources-grid">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div 
                  key={resource.title}
                  className="resource-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="resource-icon">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="resource-title">{resource.title}</h3>

                  <p className="resource-description">
                    {resource.description}
                  </p>
                  <div className="resource-action">
                    {resource.action.type === 'download' ? (
                      <a
                        href={resource.action.href}
                        download
                        className={`btn ${resource.action.primary ? 'btn-primary' : 'btn-outline'} w-full`}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {resource.action.text}
                      </a>
                    ) : (
                      <Link
                        href={resource.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${resource.action.primary ? 'btn-primary' : 'btn-outline'} w-full`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {resource.action.text}
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Free Consultation CTA */}
          <div className="consultation-cta" data-aos="fade-up">
            <div className="cta-content">
              <Calendar className="h-12 w-12 mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Free AWS Cost Audit</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Interested in a quick review of your AWS account for cost-saving opportunities? 
                Book a free 30-minute consultation and discover potential savings.
              </p>
              <div className="cta-features">
                <div className="cta-feature">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>30-minute review</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Actionable recommendations</span>
                </div>
                <div className="cta-feature">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>No obligation</span>
                </div>
              </div>
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mt-6"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Free Audit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
