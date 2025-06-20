// src/components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Adesoji</div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/resume" className="nav-link" onClick={() => setOpen(false)}>
            Resume
          </Link>
          <Link href="/projects" className="nav-link" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/resources" className="nav-link" onClick={() => setOpen(false)}>
            Resources
          </Link>
          <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
