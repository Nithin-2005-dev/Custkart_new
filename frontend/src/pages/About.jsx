import React from 'react'
import Header from '../Compos/Header'
import AboutComponent from '../Compos/AboutComponent'
import Footer from '../Compos/Footer'
import { AboutInfoMerque } from '../Compos/AboutInfoMerque'

const About = () => {
  return (
    <div>
      <Header/>
      <AboutComponent/>
      <AboutInfoMerque/>
      <Footer/>
    </div>
  )
}

export default About