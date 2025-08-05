import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import DigitalMarketing from './pages/DigitalMarketing'
import WebDevelopment from './pages/WebDevelopment'
import BrandIdentity from './pages/BrandIdentity'
import MarketingSystems from './pages/MarketingSystems'
import Analytics from './pages/Analytics'
import PrintDesign from './pages/PrintDesign'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/brand-identity" element={<BrandIdentity />} />
        <Route path="/marketing-systems" element={<MarketingSystems />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/print-design" element={<PrintDesign />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App
