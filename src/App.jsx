import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import FacebookPixel from './components/FacebookPixel'
import StickyCallButton from './components/StickyCallButton'
import ChatbotLoader from './components/ChatbotLoader'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Services from './pages/Services'
import DigitalMarketing from './pages/DigitalMarketing'
import WebDevelopment from './pages/WebDevelopment'
import BrandIdentity from './pages/BrandIdentity'
import MarketingSystems from './pages/MarketingSystems'
import ChatbotSolutions from './pages/ChatbotSolutions'
import Analytics from './pages/Analytics'
import PrintDesign from './pages/PrintDesign'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Landing from './pages/Landing'
import FAQ from './pages/FAQ'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <FacebookPixel />
        <StickyCallButton />
        <ChatbotLoader />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/brand-identity" element={<BrandIdentity />} />
        <Route path="/marketing-systems" element={<MarketingSystems />} />
        <Route path="/chatbot-solutions" element={<ChatbotSolutions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/print-design" element={<PrintDesign />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
