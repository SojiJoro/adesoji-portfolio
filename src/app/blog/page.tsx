// src/app/blog/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Adesoji Adejoro',
  description: 'Articles on SRE, DevOps, Cloud cost optimisation and inclusive tech.',
}

// For now, static list. Later you can fetch from CMS or file system.
const posts = [
  { slug: 'aws-cost-optimisation-tactics', title: 'AWS Cost Optimisation Tactics That Delivered 25% Savings' },
  { slug: 'sre-dyslexia-advocacy', title: 'My Journey as a Dyslexic Engineer in SRE' },
  // Add more as you write posts
]

export default function BlogPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Blog</h1>
        <ul className="list-disc pl-5 space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-teal-600 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
