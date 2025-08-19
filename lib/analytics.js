// Google Analytics tracking functions
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Generic event tracking
export const trackEvent = (action, category = 'engagement', label = '', value = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific conversion tracking functions
export const trackPhoneCall = (phoneNumber = '(720) 336-0777') => {
  trackEvent('phone_call_click', 'conversion', phoneNumber, 1)
  
  // Also track as GA4 conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'conversion',
      event_label: phoneNumber,
      value: 10, // Assign value to phone calls
    })
  }
}

export const trackLeadMagnetDownload = (downloadType = 'steady_within_method') => {
  trackEvent('lead_magnet_download', 'conversion', downloadType, 5)
  
  // GA4 conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: downloadType,
      value: 5, // Lead magnet value
    })
  }
}

export const trackAppointmentBooking = (bookingPage = 'general') => {
  trackEvent('appointment_booking_click', 'conversion', bookingPage, 20)
  
  // GA4 conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      event_category: 'conversion',
      event_label: bookingPage,
      value: 20, // High value for booking attempt
    })
  }
}

export const trackEmailSignup = (formType = 'newsletter') => {
  trackEvent('email_signup', 'conversion', formType, 3)
  
  // GA4 conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'sign_up', {
      event_category: 'conversion',
      event_label: formType,
      value: 3,
    })
  }
}

export const trackCTAClick = (ctaText, pageLocation) => {
  trackEvent('cta_click', 'engagement', `${ctaText} - ${pageLocation}`, 1)
}

export const trackPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
    })
  }
}

// Track important page interactions
export const trackServicePageView = (serviceName) => {
  trackEvent('service_page_view', 'engagement', serviceName, 1)
}

export const trackBlogPostView = (postTitle) => {
  trackEvent('blog_post_view', 'engagement', postTitle, 1)
}