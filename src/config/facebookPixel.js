// Facebook Pixel Configuration
// Replace 'YOUR_PIXEL_ID' with your actual Facebook Pixel ID from Facebook Business Manager

export const FACEBOOK_PIXEL_ID = '1291420825372627'

// Event tracking configuration
export const PIXEL_EVENTS = {
  // Standard events
  PAGE_VIEW: 'PageView',
  LEAD: 'Lead',
  CONTACT: 'Contact',
  VIEW_CONTENT: 'ViewContent',
  CUSTOMIZE_PRODUCT: 'CustomizeProduct',
  
  // Custom events for your business
  SERVICE_VIEW: 'ViewContent',
  PORTFOLIO_VIEW: 'ViewContent',
  FORM_SUBMIT: 'Lead',
  BUTTON_CLICK: 'CustomizeProduct',
  PHONE_CLICK: 'Contact',
  EMAIL_CLICK: 'Contact'
}

// Content categories for better organization
export const CONTENT_CATEGORIES = {
  SERVICES: 'Services',
  PORTFOLIO: 'Portfolio',
  LEAD_GENERATION: 'Lead Generation',
  CONTACT: 'Contact',
  BUTTON_CLICK: 'Button Click'
}

// Content types
export const CONTENT_TYPES = {
  SERVICE: 'service',
  PROJECT: 'project',
  ARTICLE: 'article',
  FORM: 'form',
  BUTTON: 'button'
}
