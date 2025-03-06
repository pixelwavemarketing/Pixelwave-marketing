import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '40px 20px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
        gap: '30px',
        justifyContent: 'space-between',
        alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
      }}>
        {/* Left Column - Company Name */}
        <div style={{
          flex: '1',
          textAlign: window.innerWidth <= 768 ? 'center' : 'left'
        }}>
          <h1 style={{ textAlign: 'center',
            fontSize: '1.8rem', 
            marginBottom: '15px'
          }}>
            Pixelwave Marketing
          </h1>
          <p style={{textAlign: 'center'}}>
            Ready to take your business to the next level?
          </p>
        </div>

        {/* Middle Column - Contact Info */}
        <div style={{
          flex: '1',
          textAlign: 'center'
        }}>
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
            gap: '20px',
            marginTop: '10px'
          }}>
            <a href="https://www.facebook.com/profile.php?id=61571502117710" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ color: '#fff', fontSize: '24px' }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.yelp.com/biz/pixelwave-marketing-ballston?osq=pixelwave+marketing&override_cta=Ask+for+information" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ color: '#fff', fontSize: '24px' }}
            >
              <FontAwesomeIcon icon={faYelp} />
            </a>
          </div>
        </div>

        {/* Right Column - Navigation */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-end',
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