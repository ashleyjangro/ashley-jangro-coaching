import Layout from '../components/Layout'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-cream via-white to-blue/20 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Transform Your Life</span>
              <br />
              <span className="text-brand">Through Strategic Coaching</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Life coaching for high-achieving individuals ready to break through barriers 
              and create lasting change. Virtual sessions available worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/book-session" className="btn-cta">
                Book Free Consultation
              </Link>
              <a href="mailto:ashley@ashleyjangro.com" className="btn-secondary">
                Send a Message
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-mint to-seafoam p-8 rounded-2xl shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-brand mb-4">Ready to Level Up?</h3>
                <p className="text-gray-600 mb-6">
                  Virtual coaching sessions designed for busy professionals, teens, and young adults
                </p>
                <div className="text-sm text-gray-500 space-y-2">
                  <p className="flex items-center justify-center"><span className="w-2 h-2 bg-brand rounded-full mr-3"></span>Nationwide & International</p>
                  <p className="flex items-center justify-center"><span className="w-2 h-2 bg-brand rounded-full mr-3"></span>Flexible Scheduling</p>
                  <p className="flex items-center justify-center"><span className="w-2 h-2 bg-brand rounded-full mr-3"></span>Results-Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    {
      title: "Executive Women Coaching",
      description: "Strategic life design for high-achieving women navigating success without sacrificing wellbeing.",
      href: "/executive-coaching",
      highlights: ["Leadership transition", "Work-life integration", "Confidence building"]
    },
    {
      title: "Teen Life Coaching", 
      description: "Help your teen build confidence, motivation, and life skills for a successful transition to adulthood.",
      href: "/teen-coaching",
      highlights: ["Future planning", "Motivation & confidence", "Academic success"]
    },
    {
      title: "Young Adult Coaching",
      description: "Navigate the quarter-life transition with clarity, purpose, and actionable strategies for success.",
      href: "/young-adult-coaching", 
      highlights: ["Career direction", "Life transitions", "Goal achievement"]
    }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-6">Life Coaching Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic coaching for individuals ready to optimize their life and achieve their highest potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300">
              <div className="h-3 bg-gradient-to-r from-brand to-seafoam rounded-full mb-6"></div>
              <h3 className="text-xl font-semibold text-brand mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    {highlight}
                  </div>
                ))}
              </div>
              
              <Link href={service.href} className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CoachingVsTherapySection = () => {
  return (
    <section className="bg-fog/50 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6">Coaching vs. Therapy: What&apos;s the Difference?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-brand mb-4">Life Coaching</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                  <span><strong>Future-focused:</strong> Goal achievement and life optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                  <span><strong>Action-oriented:</strong> Practical strategies and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                  <span><strong>Strengths-based:</strong> Building on what&apos;s already working</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                  <span><strong>Virtual sessions:</strong> Available nationwide and internationally</span>
                </li>
              </ul>
            </div>
            
            <div className="card border-2 border-brand/20">
              <h3 className="text-xl font-semibold text-brand mb-4">Therapy (Colorado Residents)</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span><strong>Clinical treatment:</strong> Mental health diagnosis and treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span><strong>Healing-focused:</strong> Processing past trauma and experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span><strong>Insurance accepted:</strong> Medicaid and sliding scale options</span>
                </li>
              </ul>
              
              <div className="bg-brand/10 p-4 rounded-lg">
                <p className="text-brand font-semibold mb-2">Colorado residents may prefer therapy:</p>
                <a 
                  href="https://steadywithin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Visit Steady Within Counseling →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Meet Ashley Jangro</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Licensed counselor, certified life coach, and former educator with a passion for helping 
                high-achievers break through barriers and create meaningful change.
              </p>
              
              <p>
                With extensive experience working with teens, young adults, and executive women, 
                I understand the unique challenges of navigating success while maintaining wellbeing.
              </p>
              
              <p>
                My approach combines evidence-based techniques with practical strategies, 
                helping you achieve your goals faster than traditional methods.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-secondary">
                Learn More About Ashley
              </Link>
              <Link href="/book-session" className="btn-primary">
                Book a Session
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-mint/20 to-seafoam/20 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-brand mb-6">Why Choose Coaching?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-brand rounded-full mr-4 mt-1"></div>
                <div>
                  <strong>Faster Results</strong><br />
                  <span className="text-gray-600">Goal-focused sessions with immediate strategies</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-brand rounded-full mr-4 mt-1"></div>
                <div>
                  <strong>Customized Approach</strong><br />
                  <span className="text-gray-600">Tailored to your specific goals and challenges</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-brand rounded-full mr-4 mt-1"></div>
                <div>
                  <strong>Virtual Convenience</strong><br />
                  <span className="text-gray-600">Sessions from anywhere in the world</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="bg-brand text-white section-padding">
      <div className="container-custom text-center">
        <h2 className="text-white mb-6">Ready to Transform Your Life?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Stop settling for &quot;good enough.&quot; Start creating the life you actually want with strategic, 
          results-focused coaching.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/book-session" className="bg-white text-brand px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation
          </Link>
          <a href="mailto:ashley@ashleyjangro.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand transition-colors">
            Ask Questions First
          </a>
        </div>
        
        <p className="mt-6 text-gray-200">
          Virtual sessions available worldwide | Flexible scheduling for busy professionals
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <NextSeo
        title="Life Coaching for High Achievers | Ashley Jangro Coaching | Executive, Teen & Young Adult"
        description="Strategic life coaching for executives, teens, and young adults. Virtual sessions worldwide. Transform your life through goal-focused, results-driven coaching with Ashley Jangro."
        canonical="https://ashleyjangrocoaching.com"
        openGraph={{
          title: 'Life Coaching for High Achievers | Ashley Jangro Coaching',
          description: 'Strategic life coaching for executives, teens, and young adults. Virtual sessions worldwide.',
        }}
      />
      
      <Layout>
        <HeroSection />
        <ServicesSection />
        <CoachingVsTherapySection />
        <AboutSection />
        <CTASection />
      </Layout>
    </>
  )
}