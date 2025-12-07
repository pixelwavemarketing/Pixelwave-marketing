import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import SEOOptimizer from '../components/SEOOptimizer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import PixelwaveLogo from '../components/PixelwaveLogo'

function Landing() {
	const navigate = useNavigate()
	const isMobile = window.innerWidth <= 768

	const testimonials = useMemo(
		() => [
			{
				name: "Daniel",
				title: "Owner",
				company: "The Dumpster Man 518",
				rating: 5,
				content:
					"PixelWave built our website and we are very happy with the results. The SEO work has brought us more customers than we could have imagined."
			},
			{
				name: "Ethan",
				title: "Owner",
				company: "Easy Clean Power Washing",
				rating: 5,
				content:
					"Very helpful making a vision become a reality. Would 100% recommend!"
			},
			{
				name: "Dan",
				title: "Owner",
				company: "Capital Pro Tree Removal",
				rating: 5,
				content:
					"PixelWave has been great to work with constantly meeting our needs, they have managed our social media for some time now and it has drum up great business!"
			}
		],
		[]
	)

	const handlePrimaryCTA = () => {
		navigate('/contact?offer=lead-audit&source=landing')
	}

	return (
		<>
			<SEOOptimizer
				title="Turn Your Home Service Website Into a Lead Machine"
				description="Turn your home service website into a lead-generating machine. Get a free website audit and discover how to double your leads from Google Ads and SEO."
				keywords="home service website audit, service business lead generation, home services marketing, website conversion audit, service business website design, service business marketing"
				structuredDataType="service"
			/>
			<main
				className="landing-page"
				style={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
					backgroundColor: '#f1f5f9',
					paddingTop: isMobile ? '70px' : '60px'
				}}
			>
				<Header />
				<section
					style={{
						position: 'relative',
						zIndex: 1,
						marginTop: '0px',
						overflow: 'hidden'
					}}
				>
					<PixelwaveLogo />
				</section>
				<section
					style={{
						background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 60%)',
						color: 'white',
						padding: isMobile ? '90px 20px 60px' : '100px 20px 80px'
					}}
				>
					<div
						style={{
							maxWidth: '980px',
							margin: '0 auto',
							textAlign: 'center'
						}}
					>
						<h1
							style={{
								fontSize: '3rem',
								fontWeight: '800',
								lineHeight: '1.1',
								marginBottom: '24px'
							}}
						>
							Turn Your Home Service Website Into a Steady Lead Machine
						</h1>
						<p
							style={{
								fontSize: '1.35rem',
								lineHeight: '1.6',
								color: 'rgba(226, 232, 240, 0.92)',
								marginBottom: '36px'
							}}
						>
							You run the crews. We dial in your website, web pages, and ads so every click turns into a booked job. Service businesses trust PixelWave to build funnels that convert year round.
						</p>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '16px'
							}}
						>
							<button
								type="button"
								onClick={handlePrimaryCTA}
								style={{
									background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
									color: 'white',
									border: 'none',
									borderRadius: '10px',
									padding: '22px 48px',
									fontSize: '1.3rem',
									fontWeight: '600',
									cursor: 'pointer',
									boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)',
									transition: 'all 0.3s ease',
									letterSpacing: '0.02em'
								}}
								onMouseEnter={(e) => {
									const target = e.currentTarget
									target.style.background = 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)'
									target.style.transform = 'translateY(-2px)'
									target.style.boxShadow = '0 12px 28px rgba(59, 130, 246, 0.3)'
								}}
								onMouseLeave={(e) => {
									const target = e.currentTarget
									target.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
									target.style.transform = 'translateY(0)'
									target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.2)'
								}}
							>
								Get My Free Website & Lead Audit
							</button>
							<p
								style={{
									fontSize: '0.95rem',
									color: 'rgba(226, 232, 240, 0.75)',
									maxWidth: '360px'
								}}
							>
								We'll audit your current funnel and hand you a step-by-step plan to double the leads you get from your website and Ads campaigns.
							</p>
						</div>
					</div>
				</section>

				<section
					style={{
						padding: '60px 20px',
						backgroundColor: '#f8fafc'
					}}
				>
					<div
						style={{
							maxWidth: '1100px',
							margin: '0 auto',
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							gap: '24px'
						}}
					>
						{[
							{
								title: 'Built for Service Businesses',
								text: 'HVAC, plumbing, roofing, landscaping, pressure washing, electrical, remodeling we speak the language of home service leads and many more trades.'
							},
							{
								title: 'Conversion First',
								text: 'Lightning fast web pages, persuasive copy, and forms that qualify and schedule leads without back and forth.'
							},
							{
								title: 'Measurable ROI',
								text: 'Clear tracking, call attribution, and dashboards so you know exactly what each campaign is producing.'
							},
							{
								title: 'Done-With-You Support',
								text: 'We partner with your team to execute the audit recommendations or handle everything turn key.'
							}
						].map((item) => (
							<div
								key={item.title}
								style={{
									backgroundColor: 'white',
									padding: '24px',
									borderRadius: '16px',
									border: '1px solid #e2e8f0',
									boxShadow: '0 10px 25px rgba(15, 23, 42, 0.05)',
									flex: '1 1 260px',
									maxWidth: '320px'
								}}
							>
								<h3
									style={{
										fontSize: '1.4rem',
										color: '#0f172a',
										marginBottom: '12px'
									}}
								>
									{item.title}
								</h3>
								<p
									style={{
										color: '#475569',
										lineHeight: '1.6'
									}}
								>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</section>

				<section
					style={{
						padding: '70px 20px',
						backgroundColor: '#0f172a',
						color: 'white'
					}}
				>
					<div
						style={{
							maxWidth: '1080px',
							margin: '0 auto',
							display: 'flex',
							flexWrap: 'wrap',
							gap: '32px',
							alignItems: 'stretch',
							justifyContent: 'center'
						}}
					>
						<div
							style={{
								flex: '1 1 320px',
								maxWidth: '520px',
								minWidth: '280px'
							}}
						>
							<h2
								style={{
									fontSize: '2.2rem',
									fontWeight: '700',
									marginBottom: '20px'
								}}
							>
								Why Service Businesses Choose PixelWave
							</h2>
							<p
								style={{
									fontSize: '1.05rem',
									lineHeight: '1.7',
									color: 'rgba(226, 232, 240, 0.85)',
									marginBottom: '26px'
								}}
							>
								We build revenue systems not just pretty websites. From the first ad click to the scheduled service call, our funnel frameworks are built specifically for home service businesses that want predictable growth.
							</p>
							<ul
								style={{
									listStyle: 'none',
									padding: 0,
									margin: 0,
									display: 'grid',
									gap: '12px',
									color: 'rgba(226, 232, 240, 0.92)'
								}}
							>
								{[
									'Google Ads + Local Service Ads strategy built for the trades',
									'High-converting web pages engineered for phone calls & form fills',
									'SEO that ranks service pages in the markets that matter',
									
								].map((point) => (
									<li
										key={point}
										style={{
											display: 'flex',
											gap: '10px',
											alignItems: 'flex-start'
										}}
									>
										<span
											aria-hidden="true"
											style={{
												color: '#facc15',
												fontWeight: '700',
												marginTop: '2px'
											}}
										>
											•
										</span>
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section
					style={{
						padding: '60px 20px',
						backgroundColor: '#f8fafc'
					}}
				>
					<Testimonials
						testimonials={testimonials}
						title="Home Service Owners Trust PixelWave"
						description="Real service business owners sharing the wins they saw after dialing in their website, web pages, and lead flow with our team."
					/>
				</section>

				<section
					style={{
						padding: '70px 20px 90px',
						backgroundColor: 'white'
					}}
				>
					<div
						style={{
							maxWidth: '960px',
							margin: '0 auto',
							textAlign: 'center'
						}}
					>
						<h2
							style={{
								fontSize: '2.4rem',
								fontWeight: '800',
								color: '#0f172a',
								marginBottom: '24px'
							}}
						>
							Ready to Fill Your Schedule with Qualified Jobs?
						</h2>
						<p
							style={{
								fontSize: '1.2rem',
								color: '#475569',
								lineHeight: '1.7',
								marginBottom: '36px'
							}}
						>
							Claim the free website & lead audit and we'll send over your custom action plan within 5 business days. Zero pressure just clear answers on what it takes to win more jobs online.
						</p>
						<button
							type="button"
							onClick={handlePrimaryCTA}
							style={{
								background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
								color: 'white',
								border: 'none',
								borderRadius: '10px',
								padding: '22px 48px',
								fontSize: '1.3rem',
								fontWeight: '600',
								cursor: 'pointer',
								boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)',
								transition: 'all 0.3s ease',
								letterSpacing: '0.02em'
							}}
							onMouseEnter={(e) => {
								const target = e.currentTarget
								target.style.background = 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)'
								target.style.transform = 'translateY(-2px)'
								target.style.boxShadow = '0 12px 28px rgba(59, 130, 246, 0.3)'
							}}
							onMouseLeave={(e) => {
								const target = e.currentTarget
								target.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
								target.style.transform = 'translateY(0)'
								target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.2)'
							}}
						>
							Get My Free Website & Lead Audit
						</button>
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}

export default Landing

