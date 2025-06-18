// src/components/Testimonials.tsx

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Led our AWS cost reduction initiative, saving 25% annually while improving system resilience.',
      author: 'Former Manager.',
    },
    {
      quote: 'Automated our monitoring stack with Grafana & Prometheus, cutting MTTR by 70%.',
      author: 'Lead Engineer, Beyond Cloud Solutions',
    },
    {
      quote: 'Created a seamless support automation in Jira that improved first-response by 50%.',
      author: 'Support Ops Manager, Previous Employer',
    },
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="p-4 bg-white border-l-4 border-teal-500">
              <p className="italic text-gray-800">“{t.quote}”</p>
              <footer className="mt-2 text-sm text-gray-600">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
