import { useEffect } from 'react'
import { FACEBOOK_PIXEL_ID, PIXEL_EVENTS, CONTENT_CATEGORIES, CONTENT_TYPES } from '../config/facebookPixel'

// Facebook Pixel configuration
const PIXEL_ID = FACEBOOK_PIXEL_ID

// Initialize Facebook Pixel
const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

// Track custom events
export const trackFacebookEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Track page views for SPA routing
export const trackPageView = (url = window.location.href) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView', {
      page_location: url,
      page_path: window.location.pathname + window.location.search + window.location.hash,
      page_title: document.title
    })
  }
}

// Track lead generation events
export const trackLead = (source = 'website', value = null) => {
  trackFacebookEvent(PIXEL_EVENTS.LEAD, {
    content_name: 'Contact Form Submission',
    content_category: CONTENT_CATEGORIES.LEAD_GENERATION,
    source: source,
    value: value
  })
}

// Track contact form submissions
export const trackContactForm = (formType = 'contact') => {
  trackFacebookEvent(PIXEL_EVENTS.FORM_SUBMIT, {
    content_name: `${formType} Form Submission`,
    content_category: CONTENT_CATEGORIES.LEAD_GENERATION,
    source: 'contact_form'
  })
}

// Track service page views
export const trackServiceView = (serviceName) => {
  trackFacebookEvent(PIXEL_EVENTS.SERVICE_VIEW, {
    content_name: serviceName,
    content_category: CONTENT_CATEGORIES.SERVICES,
    content_type: CONTENT_TYPES.SERVICE
  })
}

// Track portfolio views
export const trackPortfolioView = (projectName) => {
  trackFacebookEvent(PIXEL_EVENTS.PORTFOLIO_VIEW, {
    content_name: projectName,
    content_category: CONTENT_CATEGORIES.PORTFOLIO,
    content_type: CONTENT_TYPES.PROJECT
  })
}


// Track button clicks
export const trackButtonClick = (buttonName, location = 'unknown') => {
  trackFacebookEvent(PIXEL_EVENTS.BUTTON_CLICK, {
    content_name: buttonName,
    content_category: CONTENT_CATEGORIES.BUTTON_CLICK,
    source: location
  })
}

// Track phone number clicks
export const trackPhoneClick = (phoneNumber) => {
  trackFacebookEvent(PIXEL_EVENTS.PHONE_CLICK, {
    content_name: 'Phone Call',
    content_category: CONTENT_CATEGORIES.CONTACT,
    phone_number: phoneNumber
  })
}

// Track email clicks
export const trackEmailClick = (emailAddress) => {
  trackFacebookEvent(PIXEL_EVENTS.EMAIL_CLICK, {
    content_name: 'Email Click',
    content_category: CONTENT_CATEGORIES.CONTACT,
    email: emailAddress
  })
}

// Main Facebook Pixel component
const FacebookPixel = () => {
  useEffect(() => {
    // Initialize pixel on component mount
    initFacebookPixel()

    // Track page view on route changes
    const handleRouteChange = () => {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        trackPageView()
      }, 100)
    }

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange)
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleRouteChange)

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  return null // This component doesn't render anything
}

export default FacebookPixel
