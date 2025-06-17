import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-4 border-b flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
