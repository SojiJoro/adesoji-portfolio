// src/app/layout.tsx
'use client'

import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import '../../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}