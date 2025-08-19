import Image from 'next/image'

const ServiceHero = ({ 
  title, 
  subtitle, 
  imagePath, 
  imageAlt,
  overlay = true,
  height = 'h-96'
}) => {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Hero Image */}
      {imagePath ? (
        <>
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          )}
        </>
      ) : (
        // Fallback gradient if no image provided
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-seafoam to-mint" />
      )}
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/95 drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceHero