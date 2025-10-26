import { useNavigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SEOOptimizer from '../components/SEOOptimizer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'
import Testimonials from '../components/Testimonials'

// Lazy load heavy components
const LazyTestimonials = lazy(() => import('../components/Testimonials'))

function Home() {
	const navigate = useNavigate()

	// Sample testimonials data - you can customize these with real client feedback
	const testimonials = [
		{
			name: "Daniel",
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
			content: "Very helpful making a vision become a reality. Would 100% recommend!",
			avatar: null
		},
		{
			name: "Dan",
			title: "Owner",
			company: "Capital Pro Tree Removal",
			rating: 5,
			content: "PixelWave has been great to work with constantly meeting our needs, they have managed our social media for some time now and it has drum up great business!",
			avatar: null
		}
	]

	return (
		<>
			<SEOOptimizer 
				title="Turn Website Visitors Into Booked Jobs | Nashville Marketing"
				description="We help Nashville service businesses get found on Google and convert leads with AI-powered websites and smart automation. Free consultation available."
				keywords="Nashville service business marketing, contractor website design, AI chatbot for business, local SEO Nashville, service business lead generation, Nashville digital marketing"
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
				
				{/* Hero Value Proposition Section */}
				<section style={{
					padding: '40px 20px',
					maxWidth: '900px',
					margin: '0 auto',
					textAlign: 'center'
				}}>
					<h1 style={{
						fontSize: '2.8rem',
						color: '#1e293b',
						marginBottom: '20px',
						fontWeight: '700'
					}}>
						Turn Website Visitors Into Booked Jobs
					</h1>
					
					<p style={{
						fontSize: '1.3rem',
						color: '#64748b',
						lineHeight: '1.6',
						marginBottom: '30px',
						fontWeight: '500'
					}}>
						We help Nashville service businesses get found on Google and convert leads with AI powered websites and smart automation. Never miss a customer again.
					</p>

					<div style={{
						backgroundColor: '#f8fafc',
						padding: '25px',
						borderRadius: '12px',
						border: '2px solid #e2e8f0',
						marginBottom: '40px'
					}}>
						<h2 style={{
							fontSize: '1.4rem',
							color: '#1e293b',
							marginBottom: '15px',
							fontWeight: '600'
						}}>
							Perfect for Nashville Service Businesses:
						</h2>
						<div style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '15px',
							justifyContent: 'center',
							fontSize: '1rem',
							color: '#64748b'
						}}>
							<span style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>Contractors</span>
							<span style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>Landscapers</span>
							<span style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>HVAC Companies</span>
							<span style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>Plumbers</span>
							<span style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>Electricians</span>
							<span style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>Pressure Washing</span>
							<span style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>And Many More</span>
						</div>
					</div>

					{/* Primary CTA */}
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '15px'
					}}>
						<button
							onClick={() => navigate('/contact')}
							style={{
								fontSize: window.innerWidth <= 768 ? '1.2rem' : '1.4rem',
								padding: window.innerWidth <= 768 ? '18px 30px' : '20px 40px',
								backgroundColor: '#dc2626',
								color: 'white',
								border: 'none',
								borderRadius: '12px',
								cursor: 'pointer',
								fontWeight: '700',
								boxShadow: '0 8px 25px rgba(220, 38, 38, 0.3)',
								transition: 'all 0.3s ease',
								textTransform: 'uppercase',
								letterSpacing: '0.5px',
								width: '100%',
								maxWidth: '400px',
								marginBottom: '10px'
							}}
							onMouseEnter={(e) => {
								e.target.style.backgroundColor = '#b91c1c';
								e.target.style.transform = 'translateY(-2px)';
								e.target.style.boxShadow = '0 12px 30px rgba(220, 38, 38, 0.4)';
							}}
							onMouseLeave={(e) => {
								e.target.style.backgroundColor = '#dc2626';
								e.target.style.transform = 'translateY(0)';
								e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.3)';
							}}
						>
							Get A Free Consultation Today!
						</button>
						
						{/* Urgency text */}
						<div style={{
							textAlign: 'center',
							fontSize: '0.9rem',
							color: '#64748b',
							lineHeight: '1.4'
						}}>
							<p style={{ margin: '0', fontStyle: 'italic' }}>
								Book your spot today!
							</p>
						</div>
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
									Turn website visitors into booked jobs 24/7. Our AI captures leads, answers questions, and sends you detailed summaries while you sleep. Never miss a customer again.
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
									Get found on Google and turn clicks into customers. We handle Google Ads, SEO, and Business Profile optimization so you can focus on running your business.
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
									Professional websites that book jobs while you sleep. Fast, mobile friendly sites with booking systems and lead capture that converts visitors into paying customers.
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
									Know exactly where your customers come from. We set up tracking and send you monthly reports showing which marketing efforts are bringing in the most jobs.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<Suspense fallback={<div style={{ textAlign: 'center', padding: '60px 20px' }}>Loading testimonials...</div>}>
					<LazyTestimonials 
						testimonials={testimonials}
						title="What Our Clients Say"
						description="Don't just take our word for it. See what our clients have to say about their experience with PixelWave."
					/>
				</Suspense>

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
							Ready to Book More Jobs?
						</h2>
						<p style={{
							fontSize: '1.2rem',
							marginBottom: '40px',
							color: '#cbd5e1',
							lineHeight: '1.6'
						}}>
							Join Nashville service businesses that are getting more leads and booking more jobs with our AI-powered websites and marketing systems. 
							Get your free consultation and see how we can help you grow.
						</p>
						<button
							onClick={() => navigate('/contact')}
							className="cta-button"
							style={{
								fontSize: '1.2rem',
								padding: '15px 30px',
								backgroundColor: '#dc2626',
								color: 'white',
								border: 'none',
								borderRadius: '8px',
								cursor: 'pointer',
								fontWeight: '700',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.target.style.backgroundColor = '#b91c1c';
								e.target.style.transform = 'translateY(-2px)';
							}}
							onMouseLeave={(e) => {
								e.target.style.backgroundColor = '#dc2626';
								e.target.style.transform = 'translateY(0)';
							}}
						>
							Get Free Consultation Today
						</button>
					</div>
				</section>

				<Footer />
			</main>
		</>
	)
}

export default Home 