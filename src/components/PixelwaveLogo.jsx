import { lazy } from 'react'
import pixelwaveLogoSmall from '../assets/PixelWaveSZ1.webp'
import pixelwaveLogoMedium from '../assets/PixelWaveSZ2.webp'
import pixelwaveLogoLarge from '../assets/PixelWave.png'

function PixelwaveLogo() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: window.innerWidth <= 768 ? '60px' : '0px',
      padding: '0',
      overflow: 'hidden'
    }}>
      <picture>
        {/* Small screens - up to 768px */}
        <source
          srcSet={pixelwaveLogoSmall}
          media="(max-width: 768px)"
          type="image/webp"
        />
        {/* Medium screens - 769px to 1200px */}
        <source
          srcSet={pixelwaveLogoMedium}
          media="(min-width: 769px) and (max-width: 1200px)"
          type="image/webp"
        />
        {/* Large screens - 1201px and above */}
        <source
          srcSet={pixelwaveLogoLarge}
          media="(min-width: 1201px)"
          type="image/png"
        />
        {/* Fallback image */}
        <img 
          src={pixelwaveLogoMedium}
          alt="PixelWave Marketing Logo - Digital marketing and web development services"
          loading="eager"
          fetchPriority="high"
          width="1200"
          height="400"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
            maxWidth: '1200px'
          }}
        />
      </picture>
    </div>
  )
}

export default PixelwaveLogo