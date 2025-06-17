import Link from 'next/link'

export default function ResumePage() {
  return (
    <section className="section bg-gray-50">
      <div className="container max-w-3xl mx-auto space-y-12">

        {/* Download Button */}
        <div className="text-center">
          <Link
            href="/documents/Adesoji_Adejoro_Resume.pdf"
            className="btn btn-primary"
            target="_blank"
          >
            Download My Resume (PDF)
          </Link>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Professional Summary</h2>
          <p>
            Site Reliability Engineer and DevOps specialist with over five years’ experience in AWS,
            Kubernetes, Terraform and technical support. Proven track record of leading multi-team
            migrations, automating CI/CD pipelines and championing neurodiversity in the workplace.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Core Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-none p-0">
            {[
              'AWS (EC2, S3, RDS, KMS)',
              'Terraform & CloudFormation',
              'Kubernetes (EKS, Helm)',
              'Monitoring (Grafana, CloudWatch)',
              'CI/CD (GitHub Actions, TeamCity)',
              'Linux & Bash Scripting'
            ].map(skill => (
              <li key={skill} className="highlight-card text-center">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Experience</h2>

          <div className="space-y-8">
            {/* Eiger Trading Advisor Ltd */}
            <div>
              <h3 className="text-2xl font-semibold">Site Reliability & Tech Support Lead</h3>
              <p className="text-sm text-gray-600">Eiger Trading Advisor Ltd — Jul 2022 to Present</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Architected and managed AWS infrastructure with Terraform, reducing drift by 90 percent.</li>
                <li>Built monitoring stack with Prometheus and Grafana to achieve 99.9 percent uptime SLA.</li>
                <li>Automated Jira ticket creation and email support workflow, cutting manual effort by 60 percent.</li>
              </ul>
            </div>

            {/* Beyond Cloud Solution */}
            <div>
              <h3 className="text-2xl font-semibold">DevOps Engineer</h3>
              <p className="text-sm text-gray-600">Beyond Cloud Solution — 2019 to 2021</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Led migration from Google Drive to Microsoft 365, consolidating data for 200 users.</li>
                <li>Implemented disaster-recovery plan using AWS RDS Global Database and cross-region failover.</li>
                <li>Developed asset-management system on Airtable for internal hardware tracking.</li>
              </ul>
            </div>

            {/* Safe-Complex & Other Roles */}
            <div>
              <h3 className="text-2xl font-semibold">Previous Roles</h3>
              <p className="text-sm text-gray-600">Safe-Complex, Kinetik, GCI/Nastaar — 2014 to 2019</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Web/System Administrator, IT Support and Build Engineering across diverse environments.</li>
                <li>Configured headless disaster-recovery servers in Frankfurt for European operations.</li>
                <li>Provided 24/7 on-call support, achieving a first-response time under 15 minutes.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
