// src/app/blog/[slug]/page.tsx
'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
}

// Static blog data; in production, load from CMS/MDX files, etc.
const blogData: Record<string, BlogPost> = {
  'aws-cost-optimisation-tactics': {
    title: 'AWS Cost Optimisation Tactics That Delivered 25% Savings',
    excerpt: 'Learn practical strategies for reducing AWS costs without compromising performance or reliability.',
    author: 'Adesoji Adejoro',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Cloud Optimization',
    tags: ['AWS', 'FinOps', 'Cost Optimization', 'Cloud'],
    content: `
When I joined Eiger Trading Advisors, our AWS bill was growing 15% month-over-month. The CFO was concerned, and rightfully so. Here's how we reversed the trend and achieved sustainable cost savings.

## The Initial Assessment

Our first step was conducting a comprehensive audit using AWS Cost Explorer and Trusted Advisor. The findings were eye-opening:

• 40% of EC2 instances were over-provisioned
• Zero use of Reserved Instances or Savings Plans
• Unattached EBS volumes costing $2,000/month
• S3 lifecycle policies were non-existent

## Implementation Strategy

### 1. Right-Sizing EC2 Instances

We deployed CloudWatch agents to collect memory and disk metrics (not available by default). After 2 weeks of data collection, we identified:

- 15 instances running at <20% CPU utilization
- 8 instances with <30% memory usage
- 12 instances that could move to burstable T3 types

**Result**: $8,000/month saved by right-sizing

### 2. Reserved Instances & Savings Plans

Analyzed our steady-state workloads and committed to:
- 3-year All Upfront RIs for production databases
- 1-year Compute Savings Plans for variable workloads
- Kept 20% capacity on-demand for flexibility

**Result**: $12,000/month saved (42% discount on compute)

### 3. Storage Optimization

Implemented S3 lifecycle policies:
- Move logs to Glacier after 30 days
- Delete non-production backups after 90 days
- Enabled S3 Intelligent-Tiering for uncertain access patterns

**Result**: $3,500/month saved on storage

### 4. Automation & Governance

Built Lambda functions to:
- Stop non-production instances on weekends
- Delete unattached EBS volumes after 7 days
- Alert on anomalous spending increases

**Result**: $2,500/month saved + prevented cost creep

## Lessons Learned

1. **Start with visibility**: You can't optimize what you can't measure
2. **Involve the team**: Engineers often know where the waste is
3. **Automate ruthlessly**: Manual cost management doesn't scale
4. **Review regularly**: Cloud costs are not "set and forget"

## Next Steps

We're now exploring:
- Kubernetes cost allocation with Kubecost
- Spot instances for batch workloads
- ARM-based Graviton instances

The journey to cost optimization never truly ends, but with the right approach, you can achieve significant, sustainable savings.
    `
  },
  'sre-dyslexia-advocacy': {
    title: 'My Journey as a Dyslexic Engineer in SRE',
    excerpt: 'Personal insights on navigating tech with dyslexia and building inclusive engineering teams.',
    author: 'Adesoji Adejoro',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Diversity & Inclusion',
    tags: ['Neurodiversity', 'Inclusion', 'Personal', 'Engineering Culture'],
    content: `
Being dyslexic in tech isn't always easy, but it's given me unique strengths that make me a better SRE. Here's my story and what I've learned about building inclusive teams.

## The Challenge

Dyslexia affects how I process written information. In a field dominated by:
- Code reviews
- Documentation
- Log analysis
- Runbooks

This could be seen as a disadvantage. But I've learned to turn it into a strength.

## My Adaptations

### Visual Thinking
I naturally think in diagrams and patterns. This helps me:
- Design better system architectures
- Spot anomalies in monitoring dashboards
- Create clearer documentation with visuals

### Automation Focus
Reading logs is challenging, so I've become obsessed with:
- Creating better alerts that surface issues clearly
- Building dashboards that tell stories visually
- Automating repetitive tasks to reduce cognitive load

### Communication Style
I've developed techniques like:
- Using voice notes for complex explanations
- Creating video tutorials instead of written guides
- Advocating for pair programming and mob sessions

## Building Inclusive Teams

As a lead, I now champion:

**Diverse Documentation**
- Video walkthroughs alongside written docs
- Diagram-first architecture reviews
- Interactive runbooks with clear visual cues

**Flexible Communication**
- Encourage various formats (video, audio, visual)
- Regular face-to-face check-ins
- Collaborative debugging sessions

**Tool Selection**
- IDEs with excellent syntax highlighting
- Voice-to-text tools for documentation
- Visual diff tools for code reviews

## The Hidden Advantages

Dyslexia has made me:
1. **More empathetic**: I understand struggle and adaptation
2. **Better at simplification**: Complex writing frustrates me, so I make things clearer
3. **Innovative**: I find unconventional solutions because conventional ones don't always work for me

## Advice for Others

If you're neurodivergent in tech:
- Your perspective is valuable
- Find your adaptations and own them
- Advocate for inclusive practices
- Connect with others who understand

If you're a manager:
- Ask team members about their preferred communication styles
- Provide multiple ways to consume information
- Focus on outcomes, not methods
- Create psychological safety for disclosure

## Moving Forward

The tech industry is slowly recognizing the value of neurodiversity. By sharing our stories and advocating for inclusive practices, we can build better teams that leverage everyone's strengths.

Remember: Diversity isn't just about fairness—it's about building better products and stronger teams.
    `
  }
}

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogData[slug]
  
  return {
    title: post?.title || 'Blog Post Not Found',
    description: post?.excerpt || '',
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogData[slug]
  if (!post) notFound()

  // Simple Markdown-like processing
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      // Headers
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="blog-content-h2">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="blog-content-h3">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }
      
      // Lists
      if (paragraph.startsWith('• ') || paragraph.startsWith('- ')) {
        return (
          <li key={index} className="blog-content-li">
            {paragraph.replace(/^[•-]\s/, '')}
          </li>
        )
      }
      
      // Numbered lists
      if (paragraph.match(/^\d+\.\s/)) {
        return (
          <li key={index} className="blog-content-li">
            {paragraph}
          </li>
        )
      }
      
      // Bold text
      if (paragraph.includes('**')) {
        const parts = paragraph.split('**')
        return (
          <p key={index} className="blog-content-p">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        )
      }
      
      // Regular paragraphs
      if (paragraph.trim()) {
        return (
          <p key={index} className="blog-content-p">
            {paragraph}
          </p>
        )
      }
      
      return null
    })
  }

  return (
    <main className="blog-post-page">
      {/* Hero Section */}
      <section className="blog-post-hero" data-aos="fade-up">
        <div className="container max-w-4xl">
          <Link href="/blog" className="back-link">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="blog-post-header">
            <div className="post-category">{post.category}</div>
            
            <h1 className="blog-post-title">
              {post.title}
                          </h1>
            
            <p className="blog-post-excerpt">
              {post.excerpt}
            </p>
            
            <div className="post-meta">
              <div className="meta-group">
                <div className="author-info">
                  <div className="author-avatar">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="author-name">{post.author}</div>
                    <div className="post-date">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
                <div className="read-time">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content-section">
        <div className="container max-w-3xl">
          <article className="blog-article">
            {formatContent(post.content)}
          </article>

          {/* Tags */}
          <div className="blog-tags">
            <Tag className="h-4 w-4" />
            <div className="tags-list">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="blog-share">
            <h3>Share this article</h3>
            <div className="share-buttons">
              <button 
                className="share-btn share-twitter"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <Twitter className="h-5 w-5" />
                Twitter
              </button>
              <button 
                className="share-btn share-linkedin"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </button>
              <button 
                className="share-btn share-copy"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Link copied to clipboard!')
                }}
              >
                <Share2 className="h-5 w-5" />
                Copy Link
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="author-bio">
            <div className="bio-avatar">
              AA
            </div>
            <div className="bio-content">
              <h3>About the Author</h3>
              <p>
                Adesoji Adejoro is an SRE & DevOps Lead with 8+ years of experience in cloud infrastructure, 
                automation, and reliability engineering. Passionate about building inclusive tech teams and 
                optimizing cloud costs.
              </p>
              <Link href="/about" className="bio-link">
                Learn more about Adesoji →
              </Link>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="related-posts-cta">
            <h3>Continue Reading</h3>
            <div className="cta-buttons">
              <Link href="/blog" className="btn btn-primary">
                View All Posts
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}