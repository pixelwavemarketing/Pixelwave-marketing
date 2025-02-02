import { lazy } from 'react'
import pixelwaveLogo from '../assets/pixelwave-logo.png'

function PixelwaveLogo() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '80px',
      padding: '0',
      overflow: 'hidden'
    }}>
      <img 
        src={pixelwaveLogo}
        alt="Pixelwave Logo"
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default PixelwaveLogo