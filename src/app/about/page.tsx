import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="section section--about bg-white">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/profile.jpg"
            alt="Photo of Adesoji"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Bio Content */}
        <div className="about__content max-w-xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I’m Adesoji Adejoro, a Site Reliability Engineer & DevOps Specialist with over 5 years in IT support,
            cloud infrastructure and technical leadership. I thrive on solving complex problems in AWS, Kubernetes
            and Terraform, all while advocating for neurodiversity and inclusive workplaces.
          </p>
          <p className="mb-4">
            Outside of the console I enjoy mentoring fellow dyslexic tech professionals, experimenting with logo designs,
            and planning for my future career as a psychotherapist. I’m passionate about work–life balance and believe
            in continuous learning and growth.
          </p>
          <a
            href="/resume"
            className="btn btn-primary mt-2"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  )
}
