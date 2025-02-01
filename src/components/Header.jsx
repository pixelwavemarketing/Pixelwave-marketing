import { Link } from 'react-router-dom'
import logoWave from '../assets/logo-wave.png'

function Header() {
  return (
    <header role="banner" aria-label="Main Header" style={{
      width: '100%',
      height: '80px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={logoWave}
        alt="Pixelwave Marketing - Digital Marketing and Web Design Agency"
        style={{
          height: '50px',
          width: 'auto',
          objectFit: 'contain'
        }}
      />
      
      <nav role="navigation" aria-label="Main navigation" style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'auto'
      }}>
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          gap: '40px'
        }}>
          <li>
            <Link to="/" style={{
              textDecoration: 'none',
              color: '#333333',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" style={{
              textDecoration: 'none',
              color: '#333333',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{
              textDecoration: 'none',
              color: '#333333',
              fontSize: '1.2rem',
              fontWeight: '500'
            }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 