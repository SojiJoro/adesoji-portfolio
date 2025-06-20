// src/app/blog/page.tsx

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog – Adesoji Adejoro',
  description: 'Articles on SRE, DevOps, Cloud cost optimisation and inclusive tech.',
}

// For now, static list. Later you can fetch from CMS or file system.
const posts = [
  { 
    slug: 'aws-cost-optimisation-tactics', 
    title: 'AWS Cost Optimisation Tactics That Delivered 25% Savings',
    excerpt: 'Learn practical strategies for reducing AWS costs without compromising performance or reliability.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Cloud Optimization'
  },
  { 
    slug: 'sre-dyslexia-advocacy', 
    title: 'My Journey as a Dyslexic Engineer in SRE',
    excerpt: 'Personal insights on navigating tech with dyslexia and building inclusive engineering teams.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Diversity & Inclusion'
  },
  // Add more as you write posts
]

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-minimal" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="hero__title">
            Blog & <span className="highlight">Insights</span>
          </h1>
          <p className="hero__subtitle max-w-2xl mx-auto">
            Thoughts on SRE, DevOps, cloud optimization, and building inclusive tech teams
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <article 
                key={post.slug} 
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-meta">{post.readTime}</span>
                </div>
                
                <h2 className="blog-title">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="blog-excerpt">
                  {post.excerpt}
                </p>
                
                <div className="blog-footer">
                  <time className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</time>
                  <Link href={`/blog/${post.slug}`} className="blog-link">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State (if no posts) */}
          {posts.length === 0 && (
            <div className="empty-state">
              <p className="text-center text-gray-600">
                No posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r text-white" data-aos="fade-up">
        <div className="container max-w-3xl text-center">
          <h2 className="text-white mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get notified when I publish new articles on SRE, DevOps, and cloud engineering
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}