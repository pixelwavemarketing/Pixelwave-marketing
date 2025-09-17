import { lazy } from 'react'
import pixelwaveLogo from '../assets/pixelwave-logo.webp'

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
      <img 
        src={pixelwaveLogo}
        alt="PixelWave Marketing Logo - Digital marketing and web development services in Nashville"
        loading="eager"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default PixelwaveLogo