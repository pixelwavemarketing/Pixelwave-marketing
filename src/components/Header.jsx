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
			<nav style={{ width: '100%', maxWidth: '1200px' }}>
				<ul style={{
					listStyle: 'none',
					display: 'flex',
					flexWrap: 'wrap',
					gap: '20px',
					margin: 0,
					padding: '0 20px',
					justifyContent: 'center'
				}}>
					<li>
						<Link to="/" className="nav-link">
							Home
							</Link>
					</li>
					<li>
						<Link to="/services" className="nav-link">
							Services
							</Link>
					</li>
					<li>
						<Link to="/blog" className="nav-link">
							Blog
							</Link>
					</li>
					<li>
						<Link to="/faq" className="nav-link">
							FAQ
							</Link>
					</li>
					<li>
						<Link to="/portfolio" className="nav-link">
							Portfolio
							</Link>
					</li>
					<li>
						<Link to="/contact" className="nav-link">
							Contact
							</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header 