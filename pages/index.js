import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

const HeroSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/woman-meditation-lake-therapy-hero.webp"
          alt=""
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75"></div>
      </div>
      
      {/* Content */}
      <div className="container-narrow relative z-10">
        <div className="text-center">
          <h1 className="mb-8">
            <span className="text-gradient">Stop Fighting Your Brain.</span>
            <br />
            <span className="text-brand">Start Using It.</span>
          </h1>
          
          <p className="text-large mb-12 max-w-2xl mx-auto">
            Coaching that helps you ride emotional waves instead of being swept away. Using brain science, body awareness, and values-based action 
            to move from reactive to grounded.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="https://calendly.com/ashleyjangro/coaching-consultation" target="_blank" rel="noopener noreferrer" className="btn-cta">
              Start Your Transformation
            </a>
            <a href="mailto:ashley@ashleyjangro.com" className="btn-secondary">
              Learn More
            </a>
          </div>

          <div className="card-feature max-w-lg mx-auto bg-white/95 backdrop-blur-sm">
            <div className="w-24 h-24 bg-gradient-to-br from-brand to-seafoam rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="mb-6">Your Brain Has Superpowers</h3>
            <p className="text-body mb-8">
              Most people fight their neural wiring. Learn to work WITH your brain instead.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center text-gray-600">
                <div className="w-3 h-3 bg-brand rounded-full mr-4"></div>
                <span className="font-medium">Science-Backed Methods</span>
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <div className="w-3 h-3 bg-brand rounded-full mr-4"></div>
                <span className="font-medium">Lasting Neural Changes</span>
              </div>
              <div className="flex items-center justify-center text-gray-600">
                <div className="w-3 h-3 bg-brand rounded-full mr-4"></div>
                <span className="font-medium">All Ages & Goals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MethodologySection = () => {
  const outcomes = [
    {
      title: "Move From Reactive to Grounded",
      description: "Stop getting swept away by emotions. Learn to ride the wave instead of drowning in it. You'll respond from wisdom, not reactivity.",
      icon: (
        <svg className="w-8 h-8 text-brand" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      highlights: ["Emotional steadiness", "Clear-headed decisions", "Inner calm"]
    },
    {
      title: "Build Self-Trust", 
      description: "Know you can handle whatever comes. When you understand your patterns and have tools that work, confidence becomes natural.",
      icon: (
        <svg className="w-8 h-8 text-brand" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      highlights: ["Trust your judgment", "Navigate challenges", "Feel capable"]
    },
    {
      title: "Live by Your Values",
      description: "Stop letting emotions dictate your choices. Make decisions from a grounded place that aligns with who you want to be.",
      icon: (
        <svg className="w-8 h-8 text-brand" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      ),
      highlights: ["Authentic choices", "Aligned actions", "Meaningful life"]
    }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <h2 className="mb-8">The Outcomes You Actually Want</h2>
          <p className="text-large max-w-2xl mx-auto">
            Move from reactive to grounded. Build unshakeable self-trust. Live by your values, not your emotions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div key={index} className="card-feature text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand/10 to-seafoam/10 rounded-3xl mb-8 mx-auto">
                {outcome.icon}
              </div>
              <h3 className="mb-6">{outcome.title}</h3>
              <p className="text-body mb-8">{outcome.description}</p>
              
              <div className="space-y-4">
                {outcome.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-brand rounded-full mr-4 flex-shrink-0"></div>
                    <span className="font-medium text-left">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Awareness Without Judgment",
      description: "Notice what you're feeling in your mind and body. We explore your patterns, triggers, and sensations with curiosity instead of criticism."
    },
    {
      number: "02", 
      title: "Ride the Emotional Wave",
      description: "Learn to move through emotions without being swept away. Using breath, body awareness, and nervous system tools, you stay grounded even in intensity."
    },
    {
      number: "03",
      title: "Reframe Your Story", 
      description: "Challenge the thoughts fueling your emotions. We use neuroscience to build new neural pathways that support who you're becoming."
    },
    {
      number: "04",
      title: "Own Your Response",
      description: "Choose actions aligned with your values, not your emotions. From this grounded place, you create the life you actually want."
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <h2 className="mb-8">The Process That Actually Works</h2>
          <p className="text-large max-w-2xl mx-auto">
            A proven 4-step approach that moves you from emotional chaos to grounded confidence. Based on neuroscience, somatics, and values-based action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg">
                {step.number}
              </div>
              <h3 className="mb-6">{step.title}</h3>
              <p className="text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ResultsSection = () => {
  const results = [
    {
      category: "Teens & Students",
      result: "From scattered to laser-focused. Your teen discovers their natural motivation and builds unstoppable study habits.",
      metrics: ["Better grades without stress", "Clear future direction", "Confident decision-making"]
    },
    {
      category: "Parents", 
      result: "From overwhelmed to grounded. Stop losing yourself in the chaos and start showing up as the parent you want to be.",
      metrics: ["Emotional regulation under pressure", "Clear boundaries", "Present parenting"]
    },
    {
      category: "Young Adults", 
      result: "From overwhelmed to strategic. Navigate quarter-life transitions with clarity and purpose instead of anxiety.",
      metrics: ["Career direction", "Emotional regulation", "Adult confidence"]
    },
    {
      category: "Executive Women",
      result: "From burnout to sustainable success. Lead with clarity while maintaining your well-being and authenticity.",
      metrics: ["Strategic thinking", "Work-life integration", "Leadership presence"]
    }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <h2 className="mb-8">Real Results Across All Life Stages</h2>
          <p className="text-large max-w-2xl mx-auto">
            The same brain optimization principles work whether you&apos;re 16 or 60. Here&apos;s what changes:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {results.map((result, index) => (
            <div key={index} className="card-feature">
              <h3 className="mb-6">{result.category}</h3>
              <p className="text-body mb-8">{result.result}</p>
              <div className="space-y-4">
                {result.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-brand rounded-full mr-4"></div>
                    <span className="font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CoachingVsTherapySection = () => {
  return (
    <section className="bg-gray-100 section-padding-sm">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="mb-8">Coaching vs. Therapy: What&apos;s the Difference?</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-feature">
            <h3 className="mb-8">Neuroscience-Based Life Coaching</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-brand/10 rounded-full mr-4 mt-1">
                  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <strong className="text-brand">Future-focused:</strong>
                  <span className="text-gray-600 ml-2">Goal achievement and life optimization</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-brand/10 rounded-full mr-4 mt-1">
                  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <strong className="text-brand">Brain + body integration:</strong>
                  <span className="text-gray-600 ml-2">Neuroscience meets somatic awareness</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-brand/10 rounded-full mr-4 mt-1">
                  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <strong className="text-brand">Virtual worldwide:</strong>
                  <span className="text-gray-600 ml-2">Available internationally</span>
                </div>
              </div>
            </div>
            
            <div className="bg-brand/5 p-6 rounded-xl mt-8">
              <p className="text-brand font-semibold mb-4">Ready to transform how you think and feel?</p>
              <a href="https://calendly.com/ashleyjangro/coaching-consultation" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Your Free Consultation →
              </a>
            </div>
          </div>
          
          <div className="card-feature border-2 border-brand/10">
            <h3 className="mb-8">Therapy (Colorado Residents)</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-brand/10 rounded-full mr-4 mt-1">
                  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div>
                  <strong className="text-brand">Clinical treatment:</strong>
                  <span className="text-gray-600 ml-2">Mental health diagnosis and treatment</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-brand/10 rounded-full mr-4 mt-1">
                  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H6l2 20h8l2-20z"/>
                  </svg>
                </div>
                <div>
                  <strong className="text-brand">Healing-focused:</strong>
                  <span className="text-gray-600 ml-2">Processing trauma and experiences</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-brand/10 rounded-full mr-4 mt-1">
                  <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                </div>
                <div>
                  <strong className="text-brand">Insurance accepted:</strong>
                  <span className="text-gray-600 ml-2">Medicaid and sliding scale</span>
                </div>
              </div>
            </div>
            
            <div className="bg-brand/5 p-6 rounded-xl">
              <p className="text-brand font-semibold mb-4">Colorado residents may prefer therapy:</p>
              <a 
                href="https://steadywithin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Steady Within Counseling →
              </a>
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
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-8">Meet Ashley Jangro</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-body">
                Licensed therapist turned neuroscience-based coach. I discovered that lasting change happens 
                when your brain, body, and nervous system all work together.
              </p>
              
              <p className="text-body">
                My approach is trauma-informed and includes somatic techniques because your body holds wisdom 
                your thinking mind can&apos;t access. We work with <strong>both brain science and body awareness </strong> 
                to create the outcomes you actually want.
              </p>
              
              <p className="text-body">
                This isn&apos;t just cerebral work - it&apos;s about integrating your whole self so change feels 
                natural and sustainable, not forced.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-secondary">
                My Brain-Based Story
              </Link>
              <a href="https://calendly.com/ashleyjangro/coaching-consultation" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start Your Transformation
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <Image
                src="/images/ashley-photo-2-web.jpg"
                alt="Ashley Jangro, Licensed Therapist and Neuroscience-Based Coach"
                width={400}
                height={500}
                className="rounded-3xl shadow-2xl"
                priority={false}
              />
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
        <h2 className="text-white mb-6">Ready to Unlock Your Brain&apos;s Full Potential?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Stop fighting your own brain. Start working with it. Discover what happens when neuroscience 
          meets life transformation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="https://calendly.com/ashleyjangro/coaching-consultation" target="_blank" rel="noopener noreferrer" className="bg-white text-brand px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Start Your Brain Transformation
          </a>
          <a href="mailto:ashley@ashleyjangro.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand transition-colors">
            Learn About the Science
          </a>
        </div>
        
        <p className="mt-6 text-gray-200">
          Virtual neuroscience-based coaching | Evidence-based results | All ages welcome
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <NextSeo
        title="Neuroscience-Based Life Coaching | Ashley Jangro | Teens, Parents, Young Adults & Executives"
        description="Brain-based coaching for teens, parents, young adults, and executives. Stop fighting your brain, start using it. Virtual sessions worldwide."
        canonical="https://ashleyjangrocoaching.com"
        openGraph={{
          title: 'Neuroscience-Based Life Coaching | Ashley Jangro | Teens, Parents, Young Adults & Executives',
          description: 'Brain-based coaching for teens, parents, young adults, and executives. Stop fighting your brain, start using it.',
        }}
      />
      
      <Layout>
        <HeroSection />
        <MethodologySection />
        <HowItWorksSection />
        <ResultsSection />
        <CoachingVsTherapySection />
        <AboutSection />
        <CTASection />
      </Layout>
    </>
  )
}