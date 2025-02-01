# Pixelwave Marketing Website Reference Guide

## Deployment Steps
To update the live website:

## Important Links
- Live Site: [Your Netlify URL]
- GitHub Repository: https://github.com/pixelwavemarketing/Pixelwave-marketing.git
- Netlify Dashboard: https://app.netlify.com/

## Common Tasks

### Making Text Changes
1. Find the relevant file in src/pages or src/components
2. Make your changes
3. Save the file
4. Run deployment steps above

### Adding Images
1. Place new images in src/assets folder
2. Import in component: `import newImage from '../assets/image-name.png'`
3. Use in component: `<img src={newImage} alt="description" />`
4. Run deployment steps

### Checking Deployment Status
1. Go to Netlify Dashboard
2. Click on your site
3. Look under "Production deploys"

## File Structure
- src/pages/ - Main pages (Home, Services, Contact)
- src/components/ - Reusable components
- src/assets/ - Images and other media
- index.html - Main HTML file with meta tags

## Troubleshooting
If changes don't appear:
1. Clear browser cache
2. Check Netlify deploy status
3. Try incognito window
4. Force redeploy in Netlify dashboard

## Need Help?
1. Check deployment status in Netlify
2. Review GitHub commits
3. Check console for errors (F12 in browser)

Remember: Always test locally with `npm run dev` before deploying!