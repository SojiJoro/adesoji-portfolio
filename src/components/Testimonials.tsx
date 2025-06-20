// src/components/Testimonials.tsx

'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Led our AWS cost reduction initiative, saving 25% annually while improving system resilience.",
    author: "Former Manager",
    role: "Engineering Director",
    company: "Finance Industry",
    highlight: "25% cost savings"
  },
  {
    id: 2,
    quote: "Automated our monitoring stack with Grafana & Prometheus, cutting MTTR by 70%.",
    author: "Lead Engineer",
    role: "Platform Lead",
    company: "Cloud Services Provider",
    highlight: "70% MTTR reduction"
  },
  {
    id: 3,
    quote: "Created a seamless support automation in Jira that improved first-response by 50%.",
    author: "Support Ops Manager",
    role: "Operations Manager",
    company: "Tech Company",
    highlight: "50% faster response"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <div className="testimonials-wrapper">
      <div className="testimonial-card">
        {/* Quote Icon */}
        <div className="quote-icon">
          <Quote className="h-10 w-10" />
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrevious}
          className="nav-arrow nav-arrow-left"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={handleNext}
          className="nav-arrow nav-arrow-right"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Testimonial Content */}
        <div className="testimonial-content">
          <blockquote>
            <p className="testimonial-quote">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
            
            {testimonials[activeIndex].highlight && (
              <div className="testimonial-highlight">
                <span className="highlight-badge">
                  {testimonials[activeIndex].highlight}
                </span>
              </div>
            )}
            
            <footer className="testimonial-footer">
              <cite>
                <div className="author-name">{testimonials[activeIndex].author}</div>
                <div className="author-details">
                  {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                </div>
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Dots Indicator */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`dot ${index === activeIndex ? 'dot-active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}