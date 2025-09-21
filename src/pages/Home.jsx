import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'
import Testimonials from '../components/Testimonials'

function Home() {
	const navigate = useNavigate()

	// Sample testimonials data - you can customize these with real client feedback
	const testimonials = [
		{
			name: "Dan",
			title: "Owner",
			company: "The Dumpster Man 518",
			rating: 5,
			content: "PixelWave built our website and we are very happy with the results. The local SEO work has brought us more customers than we could have imagined.",
			avatar: null // You can add avatar images later
		},
		{
			name: "Ethan",
			title: "Owner",
			company: "Easy Clean Power Washing",
			rating: 5,
			content: "Working with PixelWave was great! They were able to create our logo with ease and folow the vision we had in mind perfectly.",
			avatar: null
		},
		{
			name: "Shaun",
			title: "Owner",
			company: "Open Fiance Calculators",
			rating: 5,
			content: "The Team at PixelWave was awesome! They took our idea for a website and made it reality. We are very happy with the results!",
			avatar: null
		}
	]

	return (
		<>
			<SEOOptimizer 
				title="PixelWave Marketing - Digital Marketing & Web Solutions"
				description="PixelWave Marketing specializes in digital marketing, web development, and analytics solutions to help Nashville businesses thrive in the modern marketplace."
				keywords="digital marketing, web development, analytics, business growth, marketing agency, Nashville"
				structuredDataType="localBusiness"
			/>
			<main className="home-page" style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh'
			}}>
				<Header />
				<section style={{ 
					position: 'relative',
					zIndex: 1,
					marginTop: '0px',
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
						At Pixelwave Marketing, we specialize in creating digital solutions that help businesses thrive in the modern marketplace. From AI-powered chatbots that work 24/7 to comprehensive digital marketing strategies, our team combines creativity with technical expertise to deliver exceptional results for our clients.
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
								onClick={() => navigate('/chatbot-solutions')}
								style={{
									position: 'relative'
								}}>
								<div style={{
									position: 'absolute',
									top: '-10px',
									right: '-10px',
									backgroundColor: '#f59e0b',
									color: 'white',
									padding: '5px 15px',
									borderRadius: '20px',
									fontSize: '0.8rem',
									fontWeight: '600'
								}}>
									NEW!
								</div>
								<h3 className="service-title" style={{
									fontSize: '1.5rem',
									color: '#1e293b',
									marginBottom: '15px'
								}}>
									AI Chatbot Solutions
								</h3>
								<p style={{
									color: '#64748b',
									lineHeight: '1.6'
								}}>
									24/7 automated customer support that captures leads, answers questions, and sends detailed email summaries while you sleep. Never miss a customer again.
								</p>
							</div>

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
									Google Ads, SEO, Google Business Profile optimization, and analytics setup. We handle the technical work most agencies skip.
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
									Custom websites with speed optimization, booking systems, live chat, and conversion tracking that turns visitors into customers.
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
									Professional analytics setup with clean dashboards, lead tracking, and monthly report cards showing exactly where your business is growing.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<Testimonials 
					testimonials={testimonials}
					title="What Our Clients Say"
					description="Don't just take our word for it. See what our clients have to say about their experience with PixelWave."
				/>

				{/* Call to Action Section */}
				<section style={{
					padding: '80px 20px',
					backgroundColor: '#1e293b',
					color: 'white',
					textAlign: 'center'
				}}>
					<div style={{
						maxWidth: '800px',
						margin: '0 auto'
					}}>
						<h2 style={{
							fontSize: '2.5rem',
							marginBottom: '20px',
							color: '#FFFFFF'
						}}>
							Ready to Transform Your Business?
						</h2>
						<p style={{
							fontSize: '1.2rem',
							marginBottom: '40px',
							color: '#cbd5e1',
							lineHeight: '1.6'
						}}>
							Join the growing list of Nashville businesses that trust PixelWave to deliver results. 
							Get your free consultation and discover how we can help you grow.
						</p>
						<button
							onClick={() => navigate('/contact')}
							className="cta-button"
							style={{
								fontSize: '1.2rem',
								padding: '15px 30px',
								backgroundColor: '#2563eb',
								color: 'white',
								border: 'none',
								borderRadius: '8px',
								cursor: 'pointer',
								fontWeight: '600',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.target.style.backgroundColor = '#1d4ed8';
								e.target.style.transform = 'translateY(-2px)';
							}}
							onMouseLeave={(e) => {
								e.target.style.backgroundColor = '#2563eb';
								e.target.style.transform = 'translateY(0)';
							}}
						>
							Get Free Consultation
						</button>
					</div>
				</section>

				<Footer />
			</main>
		</>
	)
}

export default Home 