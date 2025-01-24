import React, { useContext, useEffect } from 'react'
import Testimonials from '../Compos/Testimonials'
import { AuthStore } from '../store/AuthStore'
import Header from '../Compos/Header'
import { Slider } from '../Compos/Slider'
import Hero from '../Compos/Hero'
import Footer from '../Compos/Footer'

const Home = () => {
      const {getUser}=useContext(AuthStore)
   useEffect(()=>{
         getUser();
      },[])
  return (
    <div >
      <Header></Header>
      <div className='min-h-screen flex flex-col gap-2'>
      <Slider/>
      <Hero/>
      <Testimonials/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
