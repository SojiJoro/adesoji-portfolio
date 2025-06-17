// src/components/Navbar.tsx

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Adesoji</div>
        <div className="nav-links">
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
