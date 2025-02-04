function ContactForm() {
  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify
      style={{
        width: '100%',
        maxWidth: '500px',
        padding: '20px'
      }}
    >
      {/* Hidden input for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Bot field honeypot */}
      <p style={{ display: 'none' }}>
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Name <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Email <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Business Name <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="text"
          name="business"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Phone Number <span style={{ color: '#ff4444' }}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '5px',
          color: '#333',
          fontWeight: '500'
        }}>
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm 