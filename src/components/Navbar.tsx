// src/components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`navbar${open ? ' open' : ''}`}> 
      <div className="container">
        <div className="logo">Adesoji</div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-links" onClick={() => setOpen(false)}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/resume" className="nav-link">Resume</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
