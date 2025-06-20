// src/app/about/page.tsx

import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About – Adesoji Adejoro',
  description: 'Multidisciplinary SRE & Support Leader with cloud infrastructure, DevOps & support expertise.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Photo */}
            <div className="flex-center" data-aos="fade-right">
              <div className="relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Photo of Adesoji Adejoro"
                  width={360}
                  height={360}
                  className="rounded-full shadow-xl"
                  style={{ objectFit: 'cover' }}
                />
                {/* Optional decorative element */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full opacity-20 blur-xl -z-10"></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="prose-custom" data-aos="fade-left">
              <h1 className="mb-6">About Me</h1>
              
              <p className="text-lg mb-6">
                Multidisciplinary Site Reliability Engineer (SRE) and Technical Support Leader with <strong className="text-primary">8+ years</strong> of hands-on experience across cloud infrastructure, DevOps, and end-user support operations. Adept at architecting and maintaining highly available, secure, and scalable systems using tools like AWS, Kubernetes, Terraform, Linux, and Docker. I bring a unique mix of cloud engineering, remote support leadership, and incident response expertise, driving both operational excellence and user satisfaction.
              </p>
              
              <h3 className="mt-8 mb-4">Current Role</h3>
              <p>
                Currently, I lead infrastructure monitoring and reliability across Amazon Web Services (AWS), managing EC2, RDS, CloudWatch, Route 53, IAM, and VPC resources, with a strong emphasis on automation and cost optimisation. I've also delivered success across CI/CD pipelines, IaC (Infrastructure as Code) with Terraform, and system observability using Grafana, Prometheus, and CloudWatch Logs.
              </p>
              
              <h3 className="mt-8 mb-4">Key Expertise</h3>
              <p>In previous roles, I've been the go-to engineer for:</p>
              <ul className="list-disc pl-5 mb-6">
                <li>Managing technical onboarding with IntelliJ, JBoss, pgAdmin, VPNs, and Java-based trading platforms</li>
                <li>Leading remote support systems with clear SLA-driven prioritisation (Jira, Confluence, Teams, Slack)</li>
                <li>Collaborating across cross-functional teams to resolve complex infra issues under pressure</li>
                <li>Supporting transitions between cloud-first and on-prem infrastructures</li>
              </ul>
              
              <div className="skills-section bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="mt-0 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Linux', 'Terraform', 'Kubernetes', 'Docker', 'SRE', 'DevOps', 'Technical Support', 'Remote Support', 'EC2', 'RDS', 'CI/CD', 'Grafana', 'Incident Management', 'JIRA', 'System Monitoring', 'Bash', 'Windows Admin'].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="personal-note">
                <p>
                  While I'm proud of my technical depth, I also draw from lived experience. As someone who is dyslexic, I occasionally share insights to support others navigating tech with similar challenges. I believe <span className="text-gradient font-semibold">diverse thinking adds practical, creative strength</span> to any engineering team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}