import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import FAQ from "./pages/FAQ"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import Advertisers from "./pages/navigate/Advertisers"
import Developers from "./pages/navigate/Developers"
import Resources from "./pages/navigate/Resources"
import Company from "./pages/navigate/Company"
import Connect from "./pages/navigate/Connect"
import AdvertiserAgreement from "./pages/legal/AdvertiserAgreement"
import AcceptableUsePolicy from "./pages/legal/AcceptableUsePolicy"
import PrivacyPolicy from "./pages/legal/PrivacyPolicy"
import TechnologyPolicy from "./pages/legal/TechnologyPolicy"
import DeveloperAgreement from "./pages/legal/DeveloperAgreement"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advertisers" element={<Advertisers />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/legal/advertiser-agreement" element={<AdvertiserAgreement />} />
          <Route path="/legal/acceptable-use-policy" element={<AcceptableUsePolicy />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/technology-policy" element={<TechnologyPolicy />} />
          <Route path="/legal/developer-agreement" element={<DeveloperAgreement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

