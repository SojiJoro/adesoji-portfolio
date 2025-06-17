// src/app/resume/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume – Adesoji Adejoro',
  description: 'Adesoji Adejoro – Site Reliability & Tech Support Lead. Download professional resume.',
}

export default function ResumePage() {
  const skills = [
    'AWS (EC2, RDS, S3, IAM, Route 53, CloudWatch, EKS)',
    'Terraform & CloudFormation',
    'Kubernetes (EKS)',
    'Docker',
    'Grafana, Prometheus, CloudWatch Logs, ELK',
    'CI/CD: GitHub Actions, Jenkins, TeamCity',
    'Linux & Windows Administration',
    'Bash, Python, YAML scripting',
    'Jira, Confluence, ITIL processes, VPN, SSO',
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container max-w-3xl mx-auto space-y-8">
        {/* Header: Name, Title, Download Links */}
        <div>
          <h1 className="text-4xl font-bold">Adesoji Adejoro</h1>
          <p className="text-lg text-gray-700 mt-1">Site Reliability & Tech Support Lead</p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <a
              href="/documents/Adesoji_Adejoro_Resume.pdf"
              download
              className="btn btn-primary"
            >
              Download Full Resume (PDF)
            </a>
            <a
              href="/documents/Resume_Anonymised.pdf"
              download
              className="text-teal-600 underline mt-2 sm:mt-0"
            >
              Download Anonymised Resume
            </a>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Professional Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
          <p>
            Multidisciplinary Site Reliability Engineer and Technical Support Leader with 8+ years of proven success architecting and maintaining resilient cloud systems across AWS, Kubernetes, and hybrid infrastructures. Skilled in remote technical support, cloud cost optimisation, Terraform automation, and end-user training. Adept at managing incident response, CI/CD pipelines, and cross-functional collaboration to enhance system reliability, scalability, and security. Passionate about supporting neurodiverse talent in tech, bringing empathy and precision to every challenge.
          </p>
        </div>

        <hr className="border-gray-300" />

        {/* Core Competencies */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Core Competencies</h2>
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
            <li>AWS Certified Solutions Architect</li>
            <li>Certified Scrum Master (CSM)</li>
            <li>LASER Level 2 CCTV Operator (2023)</li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        {/* Professional Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Professional Experience</h2>

          {/* Eiger Trading Advisors */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">Site Reliability & Tech Support Lead</h3>
            <p className="text-sm text-gray-600">
              Eiger Trading Advisors Ltd, London (Hybrid) – Jul 2022 to Present
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Lead infrastructure monitoring, reliability, and support across AWS and on-prem systems.</li>
              <li>Administer EC2, RDS, IAM, Route 53, CloudWatch, EKS, and S3 with emphasis on automation and cost optimisation; reduced AWS spend by 25%.</li>
              <li>Spearheaded incident response workflows; automated Terraform-based IaC for consistent, repeatable deployments.</li>
              <li>Delivered uninterrupted remote support during personal absence, maintaining SLA adherence and minimal downtime.</li>
              <li>Managed end-user onboarding, VPN and Java tooling setup, and hardware/software troubleshooting for trading floor staff.</li>
            </ul>
          </div>

          {/* Beyond Cloud Solutions */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">DevOps Engineer</h3>
            <p className="text-sm text-gray-600">
              Beyond Cloud Solutions, Remote – Jul 2020 to Jun 2022
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Deployed and managed multi-tier infrastructure using AWS, Docker, Jenkins, and Git workflows.</li>
              <li>Automated environment provisioning via Terraform and shell scripts.</li>
              <li>Supported deployment of microservices and maintained CI/CD pipelines in Agile teams.</li>
            </ul>
          </div>

          {/* Kinetik */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">Web/System Administrator</h3>
            <p className="text-sm text-gray-600">
              Kinetik, Nigeria – Jul 2019 to May 2020
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Maintained server uptime, DNS records, and cPanel hosting across multiple client platforms.</li>
              <li>Managed SSL certificates, MySQL backups, and WordPress performance tuning.</li>
            </ul>
          </div>

          {/* GCI/Nastaar Technologies */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">Build Engineer / IT Support</h3>
            <p className="text-sm text-gray-600">
              GCI/Nastaar Technologies, Nigeria – Apr 2017 to Jun 2019
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Provided 1st/2nd line support for 150+ users; resolved network, hardware, and software issues.</li>
              <li>Implemented patch management, asset tracking, and systems inventory using Airtable and internal tools.</li>
            </ul>
          </div>

          {/* NursePlus Agency */}
          <div className="space-y-2 mb-6">
            <h3 className="text-xl font-bold">Support Worker (Part Time)</h3>
            <p className="text-sm text-gray-600">
              NursePlus Agency, UK – 2020 to 2021
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Assisted individuals with learning disabilities, autism, and mental health needs in supported living environments.</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <p className="text-gray-700">
            <strong>Bachelor of Science (BSc), Information Technology</strong><br />
            [University Name], Nigeria – 2013 to 2017
          </p>
        </div>

        <hr className="border-gray-300" />

        {/* Volunteering & Advocacy */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Volunteering & Advocacy</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <strong>Dyslexia in Tech Advocate:</strong> Share motivational stories, tips, and tools for dyslexic professionals via LinkedIn.
            </li>
            <li>
              <strong>Mentor:</strong> Guide early career IT professionals on CV reviews, interview prep, and transitioning into SRE roles.
            </li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        {/* Technical Projects & Highlights */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Technical Projects & Highlights</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>SSL Monitoring System:</strong> Built a Python based alert system for SSL certificate expiry integrated with Slack.
            </li>
            <li>
              <strong>Terraform AWS Automation:</strong> Developed modular Terraform scripts for EC2, RDS, and ALB deployments with version control.
            </li>
            <li>
              <strong>Jira Service Desk Optimisation:</strong> Improved ticket triage flow by introducing new categories and auto responses.
            </li>
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
