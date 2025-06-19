// src/components/Testimonials.tsx

'use client'

import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Led our AWS cost reduction initiative, saving 25% annually while improving system resilience.",
    author: "Former Manager",
    role: "C.T.O ",
  
  },
  {
    id: 2,
    quote: "Automated our monitoring stack with Grafana & Prometheus, cutting MTTR by 70%.",
    author: "Lead Engineer",
    role: "Platform Lead",
    company: "Beyond Cloud Solutions"
  },
  {
    id: 3,
    quote: "Created a seamless support automation in Jira that improved first-response by 50%.",
    author: "Support Ops Manager",
    role: "Operations Manager",
    company: "Previous Employer"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex justify-center mb-6">
          <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        
        <blockquote className="text-center">
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
            "{testimonials[activeIndex].quote}"
          </p>
          <footer>
            <cite className="not-italic">
              <div className="font-semibold text-gray-900">{testimonials[activeIndex].author}</div>
              <div className="text-gray-600">
                {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
              </div>
            </cite>
          </footer>
        </blockquote>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-teal-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}