import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">
            Hi, I’m <span className="highlight">Adesoji</span><br/>
            SRE, DevOps & Support Lead
          </h1>
          <p className="hero__subtitle">
            AWS | Kubernetes | Terraform | Tech Support Lead | Advocate for Dyslexia in Tech
          </p>
          <div className="hero__buttons">
            <Link href="/resume" className="btn btn-primary">View Resume</Link>
            <Link href="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section section--highlights">
        <div className="container highlight-grid">
          <div className="highlight-card">
            <h3>5+ Years Experience</h3>
            <p>in IT Support & Cloud Infrastructure</p>
          </div>
          <div className="highlight-card">
            <h3>Expert in AWS & Monitoring</h3>
            <p>SRE | Grafana | CloudWatch</p>
          </div>
          <div className="highlight-card">
            <h3>Neurodiversity Advocate</h3>
            <p>Championing Dyslexia Inclusion in Tech</p>
          </div>
        </div>
      </section>
    </main>
  )
}
