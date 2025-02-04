import { lazy } from 'react'
import pixelwaveLogo from '../assets/pixelwave-logo.webp'

function PixelwaveLogo() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '60px',
      padding: '0',
      overflow: 'hidden'
    }}>
      <img 
        src={pixelwaveLogo}
        alt="Pixelwave Logo"
        loading="lazy"
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