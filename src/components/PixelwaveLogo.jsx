import { lazy } from 'react'
import pixelwaveLogo from '../assets/PixelWave.png'

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
        alt="PixelWave Marketing Logo - Digital marketing and web development services"
        loading="eager"
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
    </div>
  )
}

export default PixelwaveLogo