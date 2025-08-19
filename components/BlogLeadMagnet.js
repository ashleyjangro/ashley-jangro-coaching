import Link from 'next/link'

const BlogLeadMagnet = () => {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-mint/10 to-seafoam/10 rounded-2xl border border-mint/30">
      <div className="text-center">
        <div className="inline-flex items-center bg-mint/20 text-brand px-4 py-2 rounded-full mb-4 border border-mint/30">
          <span className="font-semibold text-sm">⚡ FREE GUIDE</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-brand mb-4">
          Stop Anxiety in 90 Seconds
        </h3>
        
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Get instant calm with <strong>5 therapist-backed techniques</strong> that actually work. 
          No meditation required - just practical tools you can use anywhere.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/steady-within-method"
            className="bg-brand text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand/90 transition-colors shadow-lg inline-block"
          >
            Get Your Free Anxiety Reset Guide →
          </Link>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">
          📧 Instant download • No spam, ever
        </p>
      </div>
    </div>
  )
}

export default BlogLeadMagnet