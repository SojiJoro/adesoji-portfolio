// src/app/about/page.tsx

import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About – Adesoji Adejoro',
  description: 'Multidisciplinary SRE & Support Leader with cloud infrastructure, DevOps & support expertise.',
}

export default function AboutPage() {
  return (
    <section className="section bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Profile Photo */}
        <div data-aos="fade-right">
          <Image
            src="/images/profile.jpg"
            alt="Photo of Adesoji Adejoro"
            width={360}
            height={360}
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Bio Content */}
        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p>
            Multidisciplinary Site Reliability Engineer (SRE) and Technical Support Leader with 8+ years of hands-on experience across cloud infrastructure, DevOps, and end-user support operations. Adept at architecting and maintaining highly available, secure, and scalable systems using tools like AWS, Kubernetes, Terraform, Linux, and Docker. I bring a unique mix of cloud engineering, remote support leadership, and incident response expertise, driving both operational excellence and user satisfaction.
          </p>
          <p>
            Currently, I lead infrastructure monitoring and reliability across Amazon Web Services (AWS), managing EC2, RDS, CloudWatch, Route 53, IAM, and VPC resources, with a strong emphasis on automation and cost optimisation. I’ve also delivered success across CI/CD pipelines, IaC (Infrastructure as Code) with Terraform, and system observability using Grafana, Prometheus, and CloudWatch Logs.
          </p>
          <p>
            In previous roles, I’ve been the go-to engineer for:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Managing technical onboarding with IntelliJ, JBoss, pgAdmin, VPNs, and Java-based trading platforms</li>
            <li>Leading remote support systems with clear SLA-driven prioritisation (Jira, Confluence, Teams, Slack)</li>
            <li>Collaborating across cross-functional teams to resolve complex infra issues under pressure</li>
            <li>Supporting transitions between cloud-first and on-prem infrastructures</li>
          </ul>
          <p>
            <strong>Skilled in:</strong><br/>
            AWS | Linux | Terraform | Kubernetes | Docker | SRE | DevOps | Technical Support | Remote Support | EC2 | RDS | CI/CD | Grafana | Incident Management | JIRA | System Monitoring | Bash | Windows Admin
          </p>
          <p>
            While I’m proud of my technical depth, I also draw from lived experience. As someone who is dyslexic, I occasionally share insights to support others navigating tech with similar challenges. I believe diverse thinking adds practical, creative strength to any engineering team.
          </p>
        </div>
      </div>
    </section>
  )
}
