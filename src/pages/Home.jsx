import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function Home() {
	const navigate = useNavigate()

	return (
		<>
			<Helmet>
				<title>Pixelwave Marketing - Digital Marketing & Web Solutions</title>
				<link rel="canonical" href="https://usepixelwave.com" />
				<meta name="description" content="Pixelwave Marketing specializes in digital marketing, web development, and analytics solutions to help businesses thrive in the modern marketplace." />
				<meta name="keywords" content="digital marketing, web development, analytics, business growth, marketing agency" />
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "Pixelwave Marketing",
							"description": "Digital marketing and web development services to help businesses thrive",
							"telephone": "+18024555570",
							"email": "pixelwavemarketing0@gmail.com",
							"url": "https://pixelwavemarketing.com",
							"foundingDate": "2023",
							"numberOfEmployees": "5-10",
							"knowsAbout": [
								"Digital Marketing",
								"Web Development", 
								"Search Engine Optimization",
								"Google Ads",
								"Social Media Marketing",
								"Content Marketing",
								"Analytics",
								"Brand Identity",
								"E-commerce Development"
							],
							"hasOfferCatalog": {
								"@type": "OfferCatalog",
								"name": "Digital Marketing Services",
								"itemListElement": [
									{
										"@type": "Offer",
										"itemOffered": {
											"@type": "Service",
											"name": "Web Development",
											"description": "Custom responsive websites and e-commerce solutions"
										}
									},
									{
										"@type": "Offer", 
										"itemOffered": {
											"@type": "Service",
											"name": "Digital Marketing",
											"description": "Google Ads, SEO, and social media marketing"
										}
									}
								]
							},
							"aggregateRating": {
								"@type": "AggregateRating",
								"ratingValue": "4.9",
								"reviewCount": "25"
							}
						}
					`}
				</script>
			</Helmet>
			<main className="page-container" style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh'
			}}>
				<Header />
				<section style={{ 
					position: 'relative',
					zIndex: 1,
					marginTop: '10px',
					overflow: 'hidden'
				}}>
					<PixelwaveLogo />
				</section>
				
				{/* Who We Are Section */}
				<section style={{
					padding: '40px 20px',
					maxWidth: '800px',
					margin: '0 auto',
					textAlign: 'center'
				}}>
					<h1 style={{
						fontSize: '2.5rem',
						color: '#333',
						marginBottom: '20px'
					}}>
						Who We Are
					</h1>
					
					<p style={{
						fontSize: '1.2rem',
						color: '#666',
						lineHeight: '1.6',
						marginBottom: '40px'
					}}>
						At Pixelwave Marketing, we specialize in creating digital solutions that help businesses thrive in the modern marketplace. Our team combines creativity with technical expertise to deliver exceptional results for our clients.
					</p>

					{/* Multi-CTA row */}
					<div style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '12px',
						justifyContent: 'center'
					}}>
						<button
							onClick={() => navigate('/contact')}
							className="cta-button"
							style={{ minWidth: 180 }}
						>
							Contact Us
						</button>
					</div>
				</section>

				{/* Services Section */}
				<section style={{
					padding: '60px 20px',
					backgroundColor: '#f8fafc'
				}}>
					<div style={{
						maxWidth: '1200px',
						margin: '0 auto',
						textAlign: 'center'
					}}>
						<h2 style={{
							fontSize: '2.5rem',
							color: '#1e293b',
							marginBottom: '20px'
						}}>
							Our Services
						</h2>
						<p style={{
							fontSize: '1.2rem',
							color: '#64748b',
							marginBottom: '50px'
						}}>
							Comprehensive digital solutions to grow your business
						</p>
						
						<div style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '30px',
							justifyContent: 'center'
						}}>
							<div 
								className="service-card service-box"
								onClick={() => navigate('/digital-marketing')}>
								<h3 className="service-title" style={{
									fontSize: '1.5rem',
									color: '#1e293b',
									marginBottom: '15px'
								}}>
									Digital Marketing
								</h3>
								<p style={{
									color: '#64748b',
									lineHeight: '1.6'
								}}>
									Google Ads, SEO, and social media marketing to increase your online visibility and drive more leads.
								</p>
							</div>

							<div 
								className="service-card service-box"
								onClick={() => navigate('/web-development')}>
								<h3 className="service-title" style={{
									fontSize: '1.5rem',
									color: '#1e293b',
									marginBottom: '15px'
								}}>
									Web Development
								</h3>
								<p style={{
									color: '#64748b',
									lineHeight: '1.6'
								}}>
									Custom websites and e-commerce solutions built with modern technologies for optimal performance.
								</p>
							</div>

							<div 
								className="service-card service-box"
								onClick={() => navigate('/analytics')}>
								<h3 className="service-title" style={{
									fontSize: '1.5rem',
									color: '#1e293b',
									marginBottom: '15px'
								}}>
									Analytics
								</h3>
								<p style={{
									color: '#64748b',
									lineHeight: '1.6'
								}}>
									Data-driven insights and performance tracking to optimize your marketing efforts and maximize ROI.
								</p>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		</>
	)
}

export default Home 