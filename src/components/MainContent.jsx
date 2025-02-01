import logo from '../assets/pixelwave-logo.png' // Make sure this matches your exact file name

function MainContent() {
  return (
    <div style={{ padding: 0 }}>
      {/* Image container */}
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
            padding: '20px'
          }}
        />
      </div>

      {/* Two sections container */}
      <div style={{
        display: 'flex',
        gap: '40px',
        justifyContent: 'space-between',
        padding: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Left section */}
        <div style={{
          flex: 1,
          minWidth: '300px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            margin: 0
          }}>
            HI
          </h2>
        </div>

        {/* Right section */}
        <div style={{
          flex: 1,
          minWidth: '300px'
        }}>
          {/* Content for right section */}
        </div>
      </div>
    </div>
  )
}

export default MainContent 