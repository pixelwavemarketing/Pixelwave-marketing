import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'  // Remove this line if it exists

function Header() {
  return (
    <header style={{
      width: '100%',
      padding: '20px',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid #eaeaea',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '30px',
          margin: 0,
          padding: 0
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