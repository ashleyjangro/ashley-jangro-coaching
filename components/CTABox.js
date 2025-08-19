import Link from 'next/link'

const CTABox = ({ 
  title, 
  children, 
  primaryButton, 
  secondaryButton,
  className = "" 
}) => (
  <div className={`bg-brand text-white p-8 rounded-xl ${className}`}>
    <h3 className="text-2xl font-semibold mb-6 text-white">{title}</h3>
    <div className="space-y-4">
      {children}
      {(primaryButton || secondaryButton) && (
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          {primaryButton && (
            <Link 
              href={primaryButton.href} 
              className="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              {primaryButton.text}
            </Link>
          )}
          {secondaryButton && (
            <Link 
              href={secondaryButton.href} 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand transition-colors text-center"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      )}
    </div>
  </div>
)

export default CTABox