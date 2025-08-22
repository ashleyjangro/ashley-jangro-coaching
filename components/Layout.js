import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/executive-coaching', label: 'Executive Women' },
    { href: '/parent-coaching', label: 'Parents' },
    { href: '/teen-coaching', label: 'Teens' },
    { href: '/young-adult-coaching', label: 'Young Adults' },
    { href: '/about', label: 'About' },
    { href: '/book-session', label: 'Book Session', isButton: true }
  ]

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-brand">
              Ashley Jangro Coaching
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  item.isButton 
                    ? 'btn-primary' 
                    : `text-gray-700 hover:text-brand transition-colors ${
                        router.pathname === item.href ? 'text-brand font-semibold' : ''
                      }`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-brand block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`} />
              <span className={`bg-brand block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`bg-brand block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4 bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  item.isButton 
                    ? 'btn-primary mx-4 text-center' 
                    : `block px-4 py-2 text-gray-700 hover:text-brand transition-colors ${
                        router.pathname === item.href ? 'text-brand font-semibold' : ''
                      }`
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

const Footer = () => (
  <footer className="bg-brand text-white">
    <div className="container-custom section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <div className="space-y-2 text-white">
            <p>Ashley Jangro</p>
            <p>Life & Executive Coach</p>
            <a href="mailto:ashley@ashleyjangro.com" className="hover:text-mint transition-colors">
              ashley@ashleyjangro.com
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Coaching Services</h3>
          <div className="space-y-2 text-white">
            <Link href="/executive-coaching" className="block hover:text-mint transition-colors">
              Executive Women Coaching
            </Link>
            <Link href="/parent-coaching" className="block hover:text-mint transition-colors">
              Parent Coaching
            </Link>
            <Link href="/teen-coaching" className="block hover:text-mint transition-colors">
              Teen Life Coaching
            </Link>
            <Link href="/young-adult-coaching" className="block hover:text-mint transition-colors">
              Young Adult Coaching
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Colorado Residents</h3>
          <div className="space-y-2 text-white">
            <p className="mb-3">Looking for therapy services in Colorado?</p>
            <a 
              href="https://steadywithin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand px-4 py-2 rounded hover:bg-mint transition-colors"
            >
              Visit Steady Within Counseling →
            </a>
            <p className="text-sm mt-2">
              Licensed therapy services for Castle Rock and all of Colorado
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600 mt-8 pt-8 text-center text-white">
        <p>© {new Date().getFullYear()} Ashley Jangro Coaching. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Virtual coaching services available nationwide and internationally
        </p>
      </div>
    </div>
  </footer>
)

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}