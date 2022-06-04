import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'

const App = () => {
  return (
      <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
      </>
  )
}

export default App
