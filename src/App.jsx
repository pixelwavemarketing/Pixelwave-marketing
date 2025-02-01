import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div style={{ 
        margin: 0, 
        paddingTop: '60px',
        backgroundColor: '#ffffff',
        minHeight: '100vh'
      }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
