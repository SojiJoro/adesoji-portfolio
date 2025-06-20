// src/components/ShareButtons.tsx (enhanced version with toast)
'use client'

import { useState } from 'react'
import { Twitter, Linkedin, Share2, Check } from 'lucide-react'

interface ShareButtonsProps {
  title: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`,
      '_blank'
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      '_blank'
    )
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className="share-buttons">
      <button 
        className="share-btn share-twitter"
        onClick={shareOnTwitter}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5" />
        Twitter
      </button>
      <button 
        className="share-btn share-linkedin"
        onClick={shareOnLinkedIn}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
        LinkedIn
      </button>
      <button 
        className="share-btn share-copy"
        onClick={copyLink}
        aria-label="Copy link to clipboard"
      >
        {copied ? (
          <>
            <Check className="h-5 w-5" />
            Copied!
          </>
        ) : (
          <>
            <Share2 className="h-5 w-5" />
            Copy Link
          </>
        )}
      </button>
    </div>
  )
}