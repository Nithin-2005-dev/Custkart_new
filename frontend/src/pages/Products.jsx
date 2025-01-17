import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import PreviousProducts from '../components/PreviousProducts'
import { AuthStore } from '../store/AuthStore'
import { useNavigate } from 'react-router'
import Footer from '../components/Footer'
import DesignForm from '../components/DesignForm'

const Products = () => {
    const {getUser}=useContext(AuthStore)
    const navigate=useNavigate();
    useEffect(()=>{
        const checkUser=async()=>{
        const response =await getUser();
        if(!response){
            navigate("/login")
        }
        }
        checkUser();
     },[])
  return (
    <div>
      <Header/>
      <div className='min-h-screen flex flex-col justify-evenly'>
      <DesignForm/>
      <PreviousProducts/>
      </div>
      <Footer/>
    </div>
  )
}

export default Products
