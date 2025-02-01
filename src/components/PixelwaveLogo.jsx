import logo from '../assets/pixelwave-logo.png'

function PixelwaveLogo() {
  return (
    <div style={{
      width: '100vw',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#ffffff'
    }}>
      <img 
        src={logo} 
        alt="Pixelwave Marketing Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          maxHeight: '90vh',
          padding: '0px'
        }}
      />
    </div>
  )
}

export default PixelwaveLogo 