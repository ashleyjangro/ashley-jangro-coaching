import { useState } from 'react'
import Image from 'next/image'

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  fill = false,
  sizes,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  // Fallback when image fails to load
  if (imageError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width: width || 'auto', height: height || 'auto' }}
      >
        <span className="text-gray-400 text-sm">Image loading...</span>
      </div>
    )
  }

  // Handle different image configurations
  const imageProps = {
    src,
    alt,
    className,
    priority,
    onError: handleImageError,
    ...props
  }

  if (fill) {
    // For responsive images that fill their container
    imageProps.fill = true
    imageProps.sizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  } else if (width && height) {
    // For images with specific dimensions
    imageProps.width = width
    imageProps.height = height
  } else {
    // Fallback: use intrinsic sizing with responsive behavior
    imageProps.width = 0
    imageProps.height = 0
    imageProps.style = { width: '100%', height: 'auto' }
    imageProps.sizes = sizes || '100vw'
  }

  return <Image {...imageProps} alt={alt || ''} />
}

export default OptimizedImage