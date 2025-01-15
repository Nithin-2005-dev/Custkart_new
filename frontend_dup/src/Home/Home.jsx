import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import CenterMode from '../components/Testimonals';


function Home() {
  return (
   <div className='flex flex-col'>
    <Navbar />
    <Banner/>
    <CenterMode/>
    <Footer/>
   </div>
  );
}

export default Home
