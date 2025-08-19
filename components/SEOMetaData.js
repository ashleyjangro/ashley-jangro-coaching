import Head from 'next/head'

const SEOMetaData = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  structuredData,
  noindex = false 
}) => {
  const defaultTitle = "Counselor Castle Rock Colorado | Ashley Jangro LPCC | Professional Counseling Available Today"
  const defaultDescription = "Therapist in Castle Rock, CO. CBT, DBT, somatic therapy for anxiety, depression, trauma. Crisis counseling, online therapy, unique Minecraft therapy for teens. Book today."
  const defaultKeywords = "therapist castle rock colorado, cbt therapy castle rock, dbt counselor castle rock, crisis counseling castle rock, therapy today castle rock, mental health crisis castle rock, anxiety attack help castle rock, trauma counselor urgent castle rock, somatic therapy castle rock, minecraft therapy teens castle rock, online therapy castle rock colorado, douglas county therapist"

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={canonical || "https://steadywithin.com"} />
      <meta property="og:site_name" content="Steady Within Counseling" />
      <meta property="og:locale" content="en_US" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Ashley Jangro, LPCC" />
      <meta name="geo.region" content="US-CO" />
      <meta name="geo.placename" content="Castle Rock, Colorado" />
      <meta name="geo.position" content="39.3722;-104.8561" />
      <meta name="ICBM" content="39.3722, -104.8561" />
      
      {/* Healthcare-specific meta tags */}
      <meta name="DC.title" content={title || defaultTitle} />
      <meta name="DC.description" content={description || defaultDescription} />
      <meta name="DC.creator" content="Ashley Jangro, LPCC" />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="en-US" />
      
      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#004552" />
      <meta name="msapplication-TileColor" content="#004552" />
      
      {/* Apple touch icon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}

export default SEOMetaData