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
					"PixelWave rebuilt our site and we started booking more dumpster rentals within weeks. The new landing pages keep leads flowing."
			},
			{
				name: "Ethan",
				title: "Owner",
				company: "Easy Clean Power Washing",
				rating: 5,
				content:
					"They dialed in our Google Ads and website so every click counts. We finally have a predictable pipeline."
			},
			{
				name: "Dan",
				title: "Owner",
				company: "Capital Pro Tree Removal",
				rating: 5,
				content:
					"The audit showed exactly what to fix. Since launching the new pages, our crews are booked solid."
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
				title="Contractor Landing Page: Turn Your Home Service Website Into a Lead Machine"
				description="PixelWave builds contractor websites that convert. Claim your free website & lead audit to uncover missed revenue from Google Ads, SEO, and on-page experience."
				keywords="home service website audit, contractor lead generation, home services marketing, website conversion audit, pixelwave landing page, contractor google ads landing page"
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
							You run the crews. We dial in the website, landing pages, and ads so every click turns into a booked job. Contractors trust PixelWave to build funnels that convert year round.
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
									backgroundColor: '#dc2626',
									color: 'white',
									border: 'none',
									borderRadius: '12px',
									padding: '20px 40px',
									fontSize: '1.2rem',
									fontWeight: '700',
									cursor: 'pointer',
									boxShadow: '0 16px 35px rgba(220, 38, 38, 0.25)',
									transition: 'all 0.3s ease',
									textTransform: 'uppercase',
									letterSpacing: '0.04em'
								}}
								onMouseEnter={(e) => {
									const target = e.currentTarget
									target.style.backgroundColor = '#b91c1c'
									target.style.transform = 'translateY(-2px)'
								}}
								onMouseLeave={(e) => {
									const target = e.currentTarget
									target.style.backgroundColor = '#dc2626'
									target.style.transform = 'translateY(0)'
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
								title: 'Built for Contractors',
								text: 'HVAC, plumbing, roofing, landscaping, pressure washing, electrical, remodeling—we speak the language of home service leads and many more trades.'
							},
							{
								title: 'Conversion First',
								text: 'Lightning-fast landing pages, persuasive copy, and forms that qualify and schedule leads without back-and-forth.'
							},
							{
								title: 'Measurable ROI',
								text: 'Clear tracking, call attribution, and dashboards so you know exactly what each campaign is producing.'
							},
							{
								title: 'Done-With-You Support',
								text: 'We partner with your team to execute the audit recommendations or handle everything turn-key.'
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
						padding: '60px 20px',
						backgroundColor: 'white'
					}}
				>
					<div
						style={{
							maxWidth: '1040px',
							margin: '0 auto'
						}}
					>
						<h2
							style={{
								fontSize: '2.3rem',
								fontWeight: '700',
								color: '#1e293b',
								textAlign: 'center',
								marginBottom: '40px'
							}}
						>
							What You Get Inside the Free Audit
						</h2>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'center',
								gap: '24px'
							}}
						>
							{[
								{
									title: 'Website Conversion Review',
									detail: 'We score your current homepage and service pages against 30+ conversion best practices tailored to home service buyers.'
								},
								{
									title: 'SEO & Visibility Snapshot',
									detail: 'See exactly where you rank, which keywords have gaps, and how competitors are winning in your market.'
								},
								{
									title: 'Google Ads & Tracking Checkup',
									detail: 'Audit structure, messaging, and tracking to make sure every campaign is feeding reliable data (and not wasting budget).'
								},
								{
									title: 'Live Walkthrough Call',
									detail: 'Review the findings with a PixelWave strategist and get your questions answered before you move forward.'
								}
							].map((item) => (
								<div
									key={item.title}
									style={{
										padding: '26px',
										borderRadius: '16px',
										border: '1px solid #e2e8f0',
										backgroundColor: '#f8fafc',
										flex: '1 1 280px',
										maxWidth: '340px'
									}}
								>
									<h3
										style={{
											fontSize: '1.25rem',
											color: '#0f172a',
											marginBottom: '14px'
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
										{item.detail}
									</p>
								</div>
							))}
						</div>
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
								Why Contractors Choose PixelWave
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
									'High-converting landing pages engineered for phone calls & form fills',
									'SEO that ranks service pages in the markets that matter',
									'CRM, call tracking, and reporting setup so you know what is working'
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
						<div
							style={{
								backgroundColor: '#111827',
								borderRadius: '18px',
								padding: '30px',
								border: '1px solid rgba(148, 163, 184, 0.2)',
								boxShadow: '0 32px 60px rgba(15, 23, 42, 0.4)',
								flex: '1 1 280px',
								maxWidth: '420px',
								minWidth: '260px'
							}}
						>
							<h3
								style={{
									fontSize: '1.4rem',
									fontWeight: '700',
									marginBottom: '18px',
									color: '#facc15'
								}}
							>
								Next 10 Audits Include:
							</h3>
							<ul
								style={{
									listStyle: 'none',
									padding: 0,
									margin: 0,
									display: 'grid',
									gap: '14px',
									color: 'rgba(226, 232, 240, 0.85)'
								}}
							>
								<li>• Side-by-side breakdown of a top competitor's best-converting page</li>
								<li>• Keyword playbook showing the phrases your crew should own</li>
								<li>• Fresh angles for your next ad set: two proven headline frameworks</li>
								<li>• Visual wireframe outlining the ideal layout for your #1 revenue service</li>
							</ul>
							<button
								type="button"
								onClick={handlePrimaryCTA}
								style={{
									marginTop: '28px',
									width: '100%',
									padding: '16px',
									backgroundColor: '#dc2626',
									color: 'white',
									border: 'none',
									borderRadius: '10px',
									fontSize: '1.1rem',
									fontWeight: '700',
									cursor: 'pointer',
									letterSpacing: '0.03em'
								}}
								onMouseEnter={(e) => {
									const target = e.currentTarget
									target.style.backgroundColor = '#b91c1c'
								}}
								onMouseLeave={(e) => {
									const target = e.currentTarget
									target.style.backgroundColor = '#dc2626'
								}}
							>
								Reserve My Audit
							</button>
							<p
								style={{
									fontSize: '0.85rem',
									color: 'rgba(148, 163, 184, 0.8)',
									marginTop: '12px'
								}}
							>
								Only 10 spots available each month to ensure every partner gets hands-on support.
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
					<Testimonials
						testimonials={testimonials}
						title="Home Service Owners Trust PixelWave"
						description="Real contractors sharing the wins they saw after dialing in their website, landing pages, and lead flow with our team."
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
								backgroundColor: '#dc2626',
								color: 'white',
								border: 'none',
								borderRadius: '12px',
								padding: '18px 34px',
								fontSize: '1.2rem',
								fontWeight: '700',
								cursor: 'pointer',
								boxShadow: '0 16px 35px rgba(220, 38, 38, 0.25)',
								textTransform: 'uppercase',
								letterSpacing: '0.04em'
							}}
							onMouseEnter={(e) => {
								const target = e.currentTarget
								target.style.backgroundColor = '#b91c1c'
							}}
							onMouseLeave={(e) => {
								const target = e.currentTarget
								target.style.backgroundColor = '#dc2626'
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

