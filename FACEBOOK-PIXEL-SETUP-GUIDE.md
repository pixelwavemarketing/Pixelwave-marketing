# Facebook Pixel Setup Guide for PixelWave Marketing

## ✅ What's Been Implemented

### 1. Base Pixel Code
- Added to `index.html` with proper initialization
- Includes both JavaScript and noscript fallback
- **Action Required**: Replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID

### 2. React Integration
- Created `FacebookPixel.jsx` component for event tracking
- Added to main `App.jsx` for automatic page view tracking
- Handles SPA routing with automatic page view events

### 3. Event Tracking
- **Contact Form**: Tracks form submissions and button clicks
- **Service Pages**: Tracks service page views
- **Thank You Page**: Tracks lead conversions
- **Button Clicks**: Tracks CTA button interactions

### 4. Configuration
- Created `facebookPixel.js` config file for easy management
- Centralized event names and categories
- Easy to update Pixel ID in one place

## 🔧 Setup Steps

### Step 1: Get Your Facebook Pixel ID
1. Go to [Facebook Business Manager](https://business.facebook.com)
2. Navigate to Events Manager
3. Create a new pixel or use existing one
4. Copy your 16-digit Pixel ID

### Step 2: Update Configuration
1. Open `src/config/facebookPixel.js`
2. Replace `YOUR_PIXEL_ID` with your actual Pixel ID
3. Save the file

### Step 3: Update HTML
1. Open `index.html`
2. Replace both instances of `YOUR_PIXEL_ID` with your actual Pixel ID
3. Save the file

### Step 4: Test Implementation
1. Deploy your website
2. Install Facebook Pixel Helper Chrome extension
3. Visit your website and check for pixel firing
4. Test form submissions and button clicks

## 🧪 Testing Checklist

### Basic Testing
- [ ] Pixel loads on homepage
- [ ] Page views track on navigation
- [ ] Contact form submission tracks
- [ ] Thank you page tracks lead conversion
- [ ] Button clicks track properly

### Facebook Pixel Helper Testing
- [ ] Green checkmark shows pixel is active
- [ ] Events appear in the helper
- [ ] No errors in console
- [ ] PageView events fire on navigation

### Facebook Events Manager Testing
- [ ] Events appear in Events Manager
- [ ] Test events show up in real-time
- [ ] Custom events are properly categorized

## 📊 Events Being Tracked

### Standard Events
- **PageView**: Automatic on all page loads
- **Lead**: Contact form submissions
- **ViewContent**: Service page views
- **Contact**: Phone/email clicks
- **CustomizeProduct**: Button clicks

### Custom Parameters
- Content name and category
- Source tracking
- Value tracking for leads
- Location tracking for buttons

## 🚀 Advanced Features

### Adding More Tracking
To add tracking to other components:

```javascript
import { trackButtonClick, trackServiceView } from '../components/FacebookPixel'

// Track button clicks
onClick={() => trackButtonClick('Button Name', 'Page Location')}

// Track service views
useEffect(() => {
  trackServiceView('Service Name')
}, [])
```

### Custom Events
Add custom events in `FacebookPixel.jsx`:

```javascript
export const trackCustomEvent = (eventName, parameters = {}) => {
  trackFacebookEvent(eventName, parameters)
}
```

## 🔍 Troubleshooting

### Common Issues
1. **Pixel not loading**: Check Pixel ID is correct
2. **Events not firing**: Check browser console for errors
3. **Duplicate events**: Ensure pixel is only loaded once
4. **SPA routing issues**: Verify FacebookPixel component is in App.jsx

### Debug Mode
Add `?debug=1` to your URL to enable debug mode in Facebook Pixel Helper.

### Console Logging
All events are logged to console for debugging. Check browser console for:
- "Facebook Pixel Event: [EventName]"
- "Facebook Pixel PageView tracked: [URL]"

## 📈 Next Steps

1. **Set up Facebook Ads**: Use tracked events for ad targeting
2. **Create Custom Audiences**: Based on page views and form submissions
3. **Set up Conversions**: Track ROI from Facebook ads
4. **A/B Testing**: Use pixel data to optimize landing pages

## 🆘 Support

If you encounter issues:
1. Check Facebook Pixel Helper for errors
2. Verify Pixel ID is correct in both files
3. Check browser console for JavaScript errors
4. Test in incognito mode to avoid cache issues

---

**Note**: Remember to replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID before going live!
