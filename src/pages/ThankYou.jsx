function ThankYou() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '20px' }}>Thank You!</h1>
      <p style={{ marginBottom: '30px' }}>Your message has been received. We'll get back to you soon.</p>
      <a 
        href="/"
        style={{
          padding: '10px 20px',
          backgroundColor: '#333',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Return to Home
      </a>
    </div>
  )
}

export default ThankYou 