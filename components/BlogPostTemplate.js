import { useState } from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

const BlogPostHero = ({ title, subtitle, heroImage, heroImageAlt, category, readTime, publishDate, author = "Ashley Jangro, LPCC" }) => (
  <section className="relative">
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Hero Image */}
      <Image
        src={heroImage}
        alt={heroImageAlt || title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">📚</span>
            {category}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-6 drop-shadow-md max-w-4xl mx-auto">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/80">
            <span className="flex items-center">
              <span className="mr-2">👤</span>
              {author}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <span className="mr-2">📅</span>
              {publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <span className="mr-2">⏱️</span>
              {readTime} min read
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ArticleNavigation = ({ prevPost, nextPost, currentCategory }) => (
  <section className="bg-fog/30 section-padding">
    <div className="container-custom">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Previous Post */}
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="group flex-1 max-w-md">
            <div className="card hover:shadow-xl transition-all duration-300 p-6">
              <div className="text-sm text-brand mb-2 group-hover:text-seafoam">← Previous Article</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-brand line-clamp-2">{prevPost.title}</h3>
            </div>
          </Link>
        ) : (
          <div className="flex-1 max-w-md"></div>
        )}
        
        {/* Back to Blog */}
        <div className="text-center">
          <Link href="/blog" className="btn-secondary">
            ← Back to All Articles
          </Link>
          {currentCategory && (
            <div className="mt-2">
              <Link href={`/blog?category=${encodeURIComponent(currentCategory)}`} className="text-sm text-brand hover:text-seafoam">
                More in {currentCategory}
              </Link>
            </div>
          )}
        </div>
        
        {/* Next Post */}
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="group flex-1 max-w-md">
            <div className="card hover:shadow-xl transition-all duration-300 p-6 text-right">
              <div className="text-sm text-brand mb-2 group-hover:text-seafoam">Next Article →</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-brand line-clamp-2">{nextPost.title}</h3>
            </div>
          </Link>
        ) : (
          <div className="flex-1 max-w-md"></div>
        )}
      </div>
    </div>
  </section>
)

const AuthorBio = () => (
  <section className="bg-white section-padding">
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-mint/20 to-seafoam/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              AJ
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand mb-2">Ashley Jangro, LPCC</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Licensed Professional Counselor Candidate specializing in trauma healing, anxiety management, 
                and women&apos;s mental health. Based in Castle Rock, Colorado, Ashley combines evidence-based 
                therapy with practical tools for real-world healing.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link href="/about" className="text-brand hover:text-seafoam font-semibold text-sm">
                  Learn More About Ashley
                </Link>
                <Link href="/book-appointment" className="text-brand hover:text-seafoam font-semibold text-sm">
                  Schedule a Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const RelatedPosts = ({ relatedPosts, currentSlug }) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;
  
  const filteredPosts = relatedPosts.filter(post => post.slug !== currentSlug).slice(0, 3);
  
  return (
    <section className="bg-fog/30 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-brand mb-4">Continue Reading</h3>
          <p className="text-xl text-gray-600">More articles to support your journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 mb-4">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-sm text-brand px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-2">
                  <h4 className="font-bold text-brand mb-2 line-clamp-2 group-hover:text-seafoam transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const NewsletterCTA = () => (
  <section className="bg-gradient-to-r from-brand to-seafoam section-padding text-white">
    <div className="container-custom text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Found This Helpful?</h3>
        <p className="text-xl mb-8 text-white">
          Get weekly insights on healing, growth, and practical mental health tools delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
          />
          <button className="bg-white text-brand px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
        <p className="text-sm mt-4 text-mint">
          Quality insights, never spam
        </p>
      </div>
    </div>
  </section>
)

// Main Blog Post Template Component
const BlogPostTemplate = ({ 
  // Required props
  title,
  slug,
  heroImage,
  heroImageAlt,
  category,
  publishDate,
  readTime,
  excerpt,
  children,
  
  // Optional props
  subtitle,
  author = "Ashley Jangro, LPCC",
  seoTitle,
  seoDescription,
  canonicalUrl,
  openGraphImage,
  
  // Navigation props
  prevPost,
  nextPost,
  relatedPosts = [],
  
  // Schema markup data
  schemaData = {}
}) => {
  return (
    <>
      <NextSeo
        title={seoTitle || `${title} | Mental Health Blog | Ashley Jangro LPCC`}
        description={seoDescription || excerpt}
        canonical={canonicalUrl || `https://steadywithin.com/blog/${slug}`}
        openGraph={{
          title: seoTitle || title,
          description: seoDescription || excerpt,
          type: 'article',
          article: {
            publishedTime: new Date(publishDate).toISOString(),
            author: author,
            section: category,
            tags: [category, 'Mental Health', 'Therapy', 'Castle Rock'],
          },
          images: openGraphImage ? [{
            url: openGraphImage,
            width: 1200,
            height: 630,
            alt: heroImageAlt || title
          }] : undefined
        }}
      />
      
      <Layout>
        <BlogPostHero 
          title={title}
          subtitle={subtitle}
          heroImage={heroImage}
          heroImageAlt={heroImageAlt}
          category={category}
          readTime={readTime}
          publishDate={publishDate}
          author={author}
        />
        
        {/* Article Content */}
        <article className="bg-white section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg prose-brand max-w-none">
              {children}
            </div>
          </div>
        </article>
        
        <AuthorBio />
        <RelatedPosts relatedPosts={relatedPosts} currentSlug={slug} />
        <ArticleNavigation prevPost={prevPost} nextPost={nextPost} currentCategory={category} />
        <NewsletterCTA />
      </Layout>
    </>
  )
}

export default BlogPostTemplate