// Apollo.io Event Tracking Helpers
// The Apollo.io script is loaded in index.html and handles automatic page tracking
// These functions provide additional custom event tracking capabilities

import { APOLLO_EVENTS } from '../config/apollo'

// Track custom events with Apollo.io
export const trackApolloEvent = (eventName, properties = {}) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    // Apollo.io tracking functions are available via window.trackingFunctions
    if (window.trackingFunctions && typeof window.trackingFunctions.track === 'function') {
      window.trackingFunctions.track(eventName, properties)
    } else {
      // Fallback: store events for when Apollo is ready
      if (!window.apolloEvents) {
        window.apolloEvents = []
      }
      window.apolloEvents.push({
        event: eventName,
        properties: properties,
        timestamp: new Date().toISOString()
      })
    }
  } catch (error) {
    console.warn('Apollo.io event tracking failed:', error)
  }
}

// Track form submissions
export const trackApolloFormSubmit = (formType = 'contact', formData = {}) => {
  trackApolloEvent(APOLLO_EVENTS.FORM_SUBMIT, {
    form_type: formType,
    ...formData
  })
}

// Track lead generation
export const trackApolloLead = (source = 'website', leadData = {}) => {
  trackApolloEvent(APOLLO_EVENTS.LEAD, {
    source: source,
    ...leadData
  })
}

// Track button clicks
export const trackApolloButtonClick = (buttonName, location = 'unknown') => {
  trackApolloEvent(APOLLO_EVENTS.BUTTON_CLICK, {
    button_name: buttonName,
    location: location
  })
}

// Apollo component - no longer needed for initialization, but kept for compatibility
// The script in index.html handles all automatic tracking
const Apollo = () => {
  return null
}

export default Apollo

