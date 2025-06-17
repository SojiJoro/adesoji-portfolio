// src/app/layout.tsx
'use client'

import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

// Import the global styles from project root
import '../../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
