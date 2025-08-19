import { trackPhoneCall, trackAppointmentBooking, trackCTAClick, trackEmailSignup } from '../lib/analytics'

// Phone number link with tracking
export const TrackedPhoneLink = ({ 
  phoneNumber = "(720) 336-0777", 
  className = "", 
  children 
}) => {
  const handlePhoneClick = () => {
    trackPhoneCall(phoneNumber)
  }

  return (
    <a 
      href={`tel:+1-720-336-0777`}
      className={className}
      onClick={handlePhoneClick}
      aria-label="Call now"
    >
      {children || phoneNumber}
    </a>
  )
}

// Appointment booking link with tracking
export const TrackedBookingLink = ({ 
  href = "/book-appointment", 
  className = "", 
  children,
  pageLocation = "general"
}) => {
  const handleBookingClick = () => {
    trackAppointmentBooking(pageLocation)
  }

  return (
    <a 
      href={href}
      className={className}
      onClick={handleBookingClick}
    >
      {children || "Book Appointment"}
    </a>
  )
}

// Generic CTA button with tracking
export const TrackedCTAButton = ({ 
  href, 
  className = "", 
  children,
  ctaText,
  pageLocation,
  onClick,
  ...props
}) => {
  const handleCTAClick = () => {
    trackCTAClick(ctaText || children, pageLocation)
    if (onClick) onClick()
  }

  if (href) {
    return (
      <a 
        href={href}
        className={className}
        onClick={handleCTAClick}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      className={className}
      onClick={handleCTAClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Email signup form wrapper with tracking
export const TrackedEmailForm = ({ 
  onSubmit, 
  formType = "newsletter", 
  children,
  ...props 
}) => {
  const handleFormSubmit = (e) => {
    trackEmailSignup(formType)
    if (onSubmit) onSubmit(e)
  }

  return (
    <form onSubmit={handleFormSubmit} {...props}>
      {children}
    </form>
  )
}