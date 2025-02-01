function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '30px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '15px'
        }}>
          Pixelwave Marketing
        </h1>
        
        <a href="mailto:pixelwavemarketing0@gmail.com" 
           style={{
             color: '#fff',
             textDecoration: 'none',
             display: 'block',
             marginBottom: '8px',
             fontSize: '1rem'
           }}
        >
          Email at: pixelwavemarketing0@gmail.com
        </a>
        
        <a href="tel:+18024555570"
           style={{
             color: '#fff',
             textDecoration: 'none',
             display: 'block',
             marginBottom: '15px',
             fontSize: '1rem'
           }}
        >
          Call at: +1 (802) 445-5570
        </a>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
          <a href="/services" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>Services</a>
          <a href="/contact" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 