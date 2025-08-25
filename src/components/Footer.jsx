import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import siteConfig from '../config/siteConfig.js';

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
					<h2 style={{ textAlign: 'center',
						fontSize: '1.8rem', 
						marginBottom: '15px',
						color: 'white'
					}}>
						Pixelwave Marketing
					</h2>
					<p style={{textAlign: 'center'}}>
						Ready to take your business to the next level?
					</p>
				</div>

				{/* Middle Column - Contact Info */}
				<div style={{
					flex: '1',
					textAlign: 'center'
				}}>
					<a href={`mailto:${siteConfig.company.email}`}
						 className="footer-link"
						 style={{
							display: 'block',
							marginBottom: '8px',
							fontSize: '1rem',
							color: 'white',
							textDecoration: 'none'
						 }}
					>
						Email: {siteConfig.company.email}
					</a>
					
					<a href={`tel:${siteConfig.company.telephone}`}
						 className="footer-link"
						 style={{
							display: 'block',
							marginBottom: '15px',
							fontSize: '1rem',
							color: 'white',
							textDecoration: 'none'
						 }}
					>
						Call: {siteConfig.company.telephone}
					</a>
					
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '20px',
						marginTop: '10px'
					}}>
						<a href={siteConfig.company.socialMedia.facebook}
						   target="_blank" 
						   rel="noopener noreferrer"
						   className="social-link"
						   style={{
							 color: 'white',
							 fontSize: '1.5rem',
							 transition: 'color 0.3s ease'
						   }}
						   onMouseEnter={(e) => e.target.style.color = '#1877F2'}
						   onMouseLeave={(e) => e.target.style.color = 'white'}
						   title="Follow us on Facebook"
						>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a href={siteConfig.company.socialMedia.instagram}
						   target="_blank" 
						   rel="noopener noreferrer"
						   className="social-link"
						   style={{
							 color: 'white',
							 fontSize: '1.5rem',
							 transition: 'color 0.3s ease'
						   }}
						   onMouseEnter={(e) => e.target.style.color = '#E4405F'}
						   onMouseLeave={(e) => e.target.style.color = 'white'}
						   title="Follow us on Instagram"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a href={siteConfig.company.socialMedia.linkedin}
						   target="_blank" 
						   rel="noopener noreferrer"
						   className="social-link"
						   style={{
							 color: 'white',
							 fontSize: '1.5rem',
							 transition: 'color 0.3s ease'
						   }}
						   onMouseEnter={(e) => e.target.style.color = '#0A66C2'}
						   onMouseLeave={(e) => e.target.style.color = 'white'}
						   title="Connect with us on LinkedIn"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>

				{/* Right Column - Navigation */}
				<div style={{
					flex: '1',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-end',
					gap: '20px',
					flexWrap: 'wrap'
				}}>
					<a href="/" className="footer-link" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
					<a href="/services" className="footer-link" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
					<a href="/blog" className="footer-link" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
					<a href="/faq" className="footer-link" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a>
					<a href="/portfolio" className="footer-link" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a>
					<a href="/contact" className="footer-link" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
				</div>
			</div>
			
			{/* Footer Schema for SEO */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					"name": siteConfig.company.name,
					"url": siteConfig.company.url,
					"logo": siteConfig.company.logo,
					"description": siteConfig.company.description,
					"contactPoint": {
						"@type": "ContactPoint",
						"telephone": siteConfig.company.telephone,
						"contactType": "customer service",
						"email": siteConfig.company.email,
						"areaServed": siteConfig.company.areaServed,
						"availableLanguage": "English"
					},
					"sameAs": [
						siteConfig.company.socialMedia.facebook,
						siteConfig.company.socialMedia.instagram,
						siteConfig.company.socialMedia.linkedin
					],
					"address": {
						"@type": "PostalAddress",
						"addressLocality": siteConfig.company.address.addressLocality,
						"addressRegion": siteConfig.company.address.addressRegion,
						"addressCountry": siteConfig.company.address.addressCountry
					}
				})}
			</script>
		</footer>
	)
}

export default Footer 