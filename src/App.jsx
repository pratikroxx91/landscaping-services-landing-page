import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Offer from './components/Offer'
import Register from './components/Register'
import Blogs from './components/Blogs'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='container mx-auto bg-white scroll-smooth'>
        <Navbar />
        <Hero />
        <WhoWeAre />
        <WhyChooseUs />
        <Services />
        <Reviews />
        <Offer />
        <Register />
        <Blogs />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
