import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { Helmet } from "react-helmet-async";


function App() {
  return (
    <div className="min-h-screen bg-cream ">
      
      <Helmet>
        <title>Heritadge | Events Management & Exhibitions</title>
        <meta 
          name="description" 
          content="Heritadge is a professional events management and exhibitions company delivering creative and impactful event experiences." 
        />
      </Helmet>

      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
