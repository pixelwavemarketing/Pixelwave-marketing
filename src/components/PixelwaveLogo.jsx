import pixelwaveLogo from '../assets/pixelwave-logo.png'

function PixelwaveLogo() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '80px',
      padding: '20px'
    }}>
      <img 
        src={pixelwaveLogo}
        alt="Pixelwave Logo"
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
    </div>
  )
}

export default PixelwaveLogo 