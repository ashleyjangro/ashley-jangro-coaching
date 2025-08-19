import Image from 'next/image'

const SimpleHero = ({ 
  title, 
  subtitle, 
  imagePath, 
  imageAlt,
  badges = [],
  buttons = []
}) => {
  return (
    <section className="relative bg-gradient-to-br from-cream via-white to-blue/20">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        {imagePath && (
          <>
            <Image
              src={imagePath}
              alt={imageAlt || title}
              fill
              className="object-cover opacity-15"
              priority
              sizes="100vw"
            />
            {/* Additional overlay for extra text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent"></div>
          </>
        )}
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-brand font-medium mb-6 leading-relaxed">
                  {subtitle}
                </p>
              )}
              
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {badges.map((badge, index) => (
                    <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${badge.className}`}>
                      {badge.text}
                    </span>
                  ))}
                </div>
              )}
              
              {buttons.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4">
                  {buttons.map((button, index) => (
                    <a key={index} href={button.href} className={button.className}>
                      {button.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleHero