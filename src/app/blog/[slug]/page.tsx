// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Example static posts data. For production, consider reading from files or CMS.
const blogPosts: Record<string, { title: string; content: string }> = {
  'aws-cost-optimisation-tactics': {
    title: 'AWS Cost Optimisation Tactics That Delivered 25% Savings',
    content: `
<p>In this article, I share practical AWS cost optimisation tactics I implemented to reduce spend by 25% while maintaining performance and reliability...</p>
<!-- Expand with your full post content, or load from MDX -->
`,
  },
  'sre-dyslexia-advocacy': {
    title: 'My Journey as a Dyslexic Engineer in SRE',
    content: `
<p>Sharing my experience navigating the tech world as a dyslexic engineer, lessons learned, and tips for fellow neurodiverse professionals...</p>
<!-- Expand accordingly -->
`,
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts[params.slug]
  if (!post) {
    return {
      title: 'Post Not Found',
      description: '',
    }
  }
  return {
    title: post.title,
    description: post.title,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  if (!post) notFound()

  return (
    <article className="section bg-white">
      <div className="container max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div
          className="prose prose-lg text-gray-700"
          // Danger: if using dangerouslySetInnerHTML, ensure content is sanitized or comes from trusted source
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
