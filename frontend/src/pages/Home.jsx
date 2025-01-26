import React, { useContext, useEffect } from 'react'
import Testimonials from '../Compos/Testimonials'
import { AuthStore } from '../store/AuthStore'
import Header from '../Compos/Header'
import Hero from '../Compos/Hero'
import Footer from '../Compos/Footer'
import Slider from '../Compos/Slider'
import { PrimeReactProvider } from 'primereact/api';
import SimpleSlider from '../Compos/Slider'
import { MarqueeDemo } from '../Compos/ReviewCard'
const Home = () => {
      const {getUser}=useContext(AuthStore)
   useEffect(()=>{
         getUser();
      },[])
  return (
    <div >
      <Header></Header>
      <div className='min-h-screen flex flex-col gap-2'>
      <SimpleSlider/>
      <Hero/>
      <Testimonials/>
      <MarqueeDemo/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
